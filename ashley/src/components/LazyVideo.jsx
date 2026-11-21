import { useEffect, useRef, useState } from "react";

// Drop-in replacement for a plain <img>: shows the poster image first, then
// swaps in a muted/looped/autoplaying video once it scrolls into view - but
// only if the visitor hasn't asked for reduced motion and isn't on a slow /
// data-saver connection. Loading the video is deferred (preload="none") and
// only starts once visible, and playback pauses again when scrolled away.
const LazyVideo = ({ src, video, alt = "", className, ...rest }) => {
  const mediaRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const [canPlayVideo, setCanPlayVideo] = useState(true);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const conn =
      typeof navigator !== "undefined" &&
      (navigator.connection || navigator.mozConnection || navigator.webkitConnection);
    const isSlowConnection = !!(conn && (conn.saveData || /2g/.test(conn.effectiveType || "")));

    setCanPlayVideo(!prefersReducedMotion && !isSlowConnection);
  }, []);

  useEffect(() => {
    if (!canPlayVideo || !video) return;
    const el = mediaRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2, rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [canPlayVideo, video]);

  useEffect(() => {
    if (!canPlayVideo || !video) return;
    const el = mediaRef.current;
    if (!el) return;

    if (isVisible) {
      if (!started) {
        el.src = video;
        el.load();
        setStarted(true);
      }
      const playPromise = el.play();
      if (playPromise && playPromise.catch) playPromise.catch(() => {});
    } else if (started) {
      el.pause();
    }
  }, [isVisible, started, canPlayVideo, video]);

  if (!video || !canPlayVideo) {
    return <img src={src} alt={alt} loading="lazy" className={className} {...rest} />;
  }

  // Self-contained "fill the parent frame" positioning, so this drops into
  // any existing image-frame wrapper (which only styles its `img` child)
  // without needing those stylesheets touched for every usage.
  return (
    <video
      ref={mediaRef}
      muted
      loop
      playsInline
      preload="none"
      poster={src}
      className={className}
      aria-label={alt}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }}
      {...rest}
    />
  );
};

export default LazyVideo;
