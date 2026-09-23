import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import AppData from "@data/app.json";

import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import { usePrefersReducedMotion } from "@common/usePrefersReducedMotion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <>
      <Head>
          {/* seo begin */}
          <title>{AppData.settings.siteName}</title>
          <link rel="icon" href="https://res.cloudinary.com/drqgvncx1/image/upload/v1781490490/Vikisol_AppIcon-Big_ang4lu.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* seo end */}
      </Head>
      {/* Each page already remounts fully on route change (every page wraps itself in its own
          <Layouts>, so Header/Footer/Cursor were always remounting - this only adds a fade around
          that existing hard cut, it doesn't introduce new remount behavior). */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: [0, 0, 0.3642, 1] }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
