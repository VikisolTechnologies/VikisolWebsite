import React from "react";
import Head from "next/head";
import AppData from "@data/app.json";

import '../styles/scss/style.scss';
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          {/* seo begin */}
          <title>{AppData.settings.siteName}</title>
          <link rel="icon" href="https://res.cloudinary.com/drqgvncx1/image/upload/v1781490490/Vikisol_AppIcon-Big_ang4lu.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* seo end */}        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
