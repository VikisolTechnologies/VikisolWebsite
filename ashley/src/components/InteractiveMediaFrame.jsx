import React, { useRef, useEffect, useState, useCallback } from "react";

// Tunables (kept in sync with InteractiveProjectCard)
const HOVER_START_DELAY = 1000;
const EDGE_PAUSE = 2000;
const IDLE_RESUME_DELAY = 2000;
const SCROLL_SPEED = 26;
const MAX_ZOOM = 3;
const WHEEL_ZOOM_SENSITIVITY = 0.0015;

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

// Shared "fit to reveal, slow auto-scroll, click to inspect/zoom" media viewer.
// Used both for grid/slider project cards and for full-size gallery images on
// project detail pages, so a tall infographic is never cropped or hidden.
const InteractiveMediaFrame = ({ src, video, alt, frameClassName }) => {
  const containerRef = useRef(null);
  const mediaRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isInspecting, setIsInspecting] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const s = useRef({
    mode: "idle",
    phase: "waiting",
    phaseStart: 0,
    y: 0,
    maxY: 0,
    fitScale: 1,
    zoom: 1,
    panX: 0,
    panY: 0,
    paused: false,
    lastActivity: 0,
    dragging: false,
    dragStartX: 0,
    dragStartY: 0,
    dragOriginX: 0,
    dragOriginY: 0,
    pinchStartDist: 0,
    pinchStartZoom: 1,
    reducedMotion: false,
  }).current;

  const rafRef = useRef(null);

  useEffect(() => {
    s.reducedMotion = typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsTouch(typeof window !== "undefined" && window.matchMedia("(hover: none)").matches);
  }, [s]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsVisible(e.isIntersecting)),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const applyTransform = useCallback(() => {
    const media = mediaRef.current;
    if (!media) return;
    if (s.mode === "inspect") {
      media.style.transform = `translate3d(${s.panX}px, ${s.panY}px, 0) scale(${s.zoom})`;
      media.style.transformOrigin = "center center";
    } else {
      media.style.transform = `translate3d(0, ${-s.y}px, 0)`;
      media.style.transformOrigin = "top left";
    }
  }, [s]);

  const measure = useCallback(() => {
    const container = containerRef.current;
    const media = mediaRef.current;
    if (!container || !media) return;
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const naturalW = media.naturalWidth || media.videoWidth || cw;
    const naturalH = media.naturalHeight || media.videoHeight || ch;
    if (!naturalW || !naturalH) return;
    const renderedH = (cw / naturalW) * naturalH;
    s.fitScale = ch > 0 ? Math.min(1, ch / renderedH) : 1;
    s.maxY = Math.max(0, renderedH - ch);
  }, [s]);

  const enterFitMedia = useCallback(() => {
    const media = mediaRef.current;
    if (!media) return;
    media.style.position = "absolute";
    media.style.top = "0";
    media.style.left = "0";
    media.style.width = "100%";
    media.style.height = "auto";
    media.style.objectFit = "unset";
    media.style.willChange = "transform";
    measure();
  }, [measure]);

  const exitFitMedia = useCallback(() => {
    const media = mediaRef.current;
    if (!media) return;
    media.style.position = "absolute";
    media.style.top = "0";
    media.style.left = "0";
    media.style.width = "100%";
    media.style.height = "100%";
    media.style.objectFit = "cover";
    media.style.transform = "none";
    media.style.willChange = "auto";
  }, []);

  const stopLoop = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const tick = useCallback(
    (now) => {
      if (s.mode === "fit" && s.maxY <= 0) {
        measure();
      }
      if (s.mode === "fit" && !s.paused && isVisible && !s.reducedMotion && s.maxY > 0) {
        if (!s.phaseStart) s.phaseStart = now;
        const elapsed = now - s.phaseStart;

        if (s.phase === "waiting") {
          if (elapsed >= HOVER_START_DELAY) {
            s.phase = "down";
            s.phaseStart = now;
          }
        } else if (s.phase === "down" || s.phase === "up") {
          const duration = (s.maxY / SCROLL_SPEED) * 1000;
          const t = clamp(elapsed / duration, 0, 1);
          const eased = easeInOutSine(t);
          s.y = s.phase === "down" ? eased * s.maxY : (1 - eased) * s.maxY;
          applyTransform();
          if (t >= 1) {
            if (s.phase === "down") {
              s.phase = "pause-bottom";
              s.phaseStart = now;
            } else {
              s.phase = "down";
              s.phaseStart = now;
            }
          }
        } else if (s.phase === "pause-bottom") {
          if (elapsed >= EDGE_PAUSE) {
            s.phase = "up";
            s.phaseStart = now;
          }
        }
      } else if (s.paused && s.mode === "fit") {
        if (now - s.lastActivity >= IDLE_RESUME_DELAY) {
          s.paused = false;
          const duration = (s.maxY / SCROLL_SPEED) * 1000 || 1;
          const progress = s.phase === "down" ? s.y / s.maxY : 1 - s.y / s.maxY;
          s.phaseStart = now - progress * duration;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    },
    [applyTransform, isVisible, measure, s]
  );

  const startLoop = useCallback(() => {
    stopLoop();
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const handleMouseEnter = () => {
    if (isTouch) return;
    setIsHovering(true);
    s.mode = "fit";
    s.phase = "waiting";
    s.phaseStart = 0;
    s.y = 0;
    s.paused = false;
    s.lastActivity = performance.now();
    enterFitMedia();
    startLoop();
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    if (isInspecting) return;
    setIsHovering(false);
    s.mode = "idle";
    stopLoop();
    exitFitMedia();
  };

  const registerActivity = () => {
    s.lastActivity = performance.now();
    s.paused = true;
  };

  const handleWheel = (e) => {
    if (isInspecting) {
      e.preventDefault();
      e.stopPropagation();
      const delta = -e.deltaY * WHEEL_ZOOM_SENSITIVITY;
      s.zoom = clamp(s.zoom + delta, s.fitScale || 0.5, MAX_ZOOM);
      clampPan();
      applyTransform();
      return;
    }
    if (s.mode !== "fit" || s.maxY <= 0) return;
    e.preventDefault();
    registerActivity();
    s.y = clamp(s.y + e.deltaY, 0, s.maxY);
    applyTransform();
  };

  const enterInspect = () => {
    setIsInspecting(true);
    s.mode = "inspect";
    s.zoom = s.fitScale || 1;
    s.panX = 0;
    s.panY = 0;
    stopLoop();
    const media = mediaRef.current;
    if (media) {
      media.style.width = "100%";
      media.style.height = "auto";
      media.style.objectFit = "unset";
      applyTransform();
    }
  };

  const exitInspect = useCallback(() => {
    setIsInspecting(false);
    if (isHovering && !isTouch) {
      s.mode = "fit";
      s.phase = "waiting";
      s.phaseStart = 0;
      s.paused = false;
      s.lastActivity = performance.now();
      startLoop();
    } else {
      s.mode = "idle";
      exitFitMedia();
    }
  }, [exitFitMedia, isHovering, isTouch, s, startLoop]);

  const handleClick = () => {
    if (!isInspecting) enterInspect();
  };

  const handleDoubleClick = () => {
    if (!isInspecting) return;
    s.zoom = s.fitScale || 1;
    s.panX = 0;
    s.panY = 0;
    applyTransform();
  };

  const clampPan = () => {
    const container = containerRef.current;
    const media = mediaRef.current;
    if (!container || !media) return;
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const scaledW = media.offsetWidth * s.zoom;
    const scaledH = media.offsetHeight * s.zoom;
    const maxPanX = Math.max(0, (scaledW - cw) / 2);
    const maxPanY = Math.max(0, (scaledH - ch) / 2);
    s.panX = clamp(s.panX, -maxPanX, maxPanX);
    s.panY = clamp(s.panY, -maxPanY, maxPanY);
  };

  const handleMouseDown = (e) => {
    if (!isInspecting) return;
    s.dragging = true;
    s.dragStartX = e.clientX;
    s.dragStartY = e.clientY;
    s.dragOriginX = s.panX;
    s.dragOriginY = s.panY;
  };

  const handleMouseMove = (e) => {
    if (!isInspecting || !s.dragging) return;
    s.panX = s.dragOriginX + (e.clientX - s.dragStartX);
    s.panY = s.dragOriginY + (e.clientY - s.dragStartY);
    clampPan();
    applyTransform();
  };

  const stopDrag = () => {
    s.dragging = false;
  };

  const touchDist = (touches) => {
    const [a, b] = touches;
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  };

  const handleTouchStart = (e) => {
    registerActivity();
    if (e.touches.length === 2) {
      s.pinchStartDist = touchDist(e.touches);
      s.pinchStartZoom = s.zoom || s.fitScale || 1;
      if (s.mode !== "inspect") enterInspect();
    } else if (e.touches.length === 1 && s.mode === "inspect") {
      const t = e.touches[0];
      s.dragging = true;
      s.dragStartX = t.clientX;
      s.dragStartY = t.clientY;
      s.dragOriginX = s.panX;
      s.dragOriginY = s.panY;
    }
  };

  const handleTouchMove = (e) => {
    registerActivity();
    if (e.touches.length === 2 && s.mode === "inspect") {
      e.preventDefault();
      const dist = touchDist(e.touches);
      const ratio = dist / (s.pinchStartDist || dist);
      s.zoom = clamp(s.pinchStartZoom * ratio, s.fitScale || 0.5, MAX_ZOOM);
      clampPan();
      applyTransform();
    } else if (e.touches.length === 1 && s.mode === "inspect" && s.dragging) {
      const t = e.touches[0];
      s.panX = s.dragOriginX + (t.clientX - s.dragStartX);
      s.panY = s.dragOriginY + (t.clientY - s.dragStartY);
      clampPan();
      applyTransform();
    }
  };

  const handleTouchEnd = () => {
    s.dragging = false;
    s.lastActivity = performance.now();
    s.paused = true;
  };

  useEffect(() => {
    if (!isTouch) return;
    if (isVisible && s.mode !== "inspect") {
      s.mode = "fit";
      s.phase = "waiting";
      s.phaseStart = 0;
      s.paused = false;
      s.lastActivity = performance.now();
      enterFitMedia();
      startLoop();
    } else if (!isVisible) {
      s.mode = "idle";
      stopLoop();
    }
    return () => stopLoop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, isTouch]);

  useEffect(() => {
    if (!isInspecting) return;
    const onKey = (e) => {
      if (e.key === "Escape") exitInspect();
    };
    const onDocClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) exitInspect();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [isInspecting, exitInspect]);

  useEffect(() => stopLoop, []);

  useEffect(() => {
    if (!video) return;
    const el = mediaRef.current;
    if (el && el.play) {
      const p = el.play();
      if (p && p.catch) p.catch(() => {});
    }
  }, [video]);

  const media = video ? (
    <video
      ref={mediaRef}
      src={video}
      poster={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onLoadedMetadata={measure}
    />
  ) : (
    <img ref={mediaRef} src={src} alt={alt} loading="lazy" onLoad={measure} />
  );

  return (
    <div
      ref={containerRef}
      className={`${frameClassName} mil-interactive-card${isInspecting ? " mil-inspecting" : ""}`}
      style={{ cursor: isInspecting ? "grab" : "zoom-in" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDrag}
      onMouseLeaveCapture={isInspecting ? stopDrag : undefined}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {media}
    </div>
  );
};

export default InteractiveMediaFrame;
