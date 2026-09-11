import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* meta end */}

          {/* fonts begin - preconnect + real <link> instead of a render-blocking CSS @import */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
          {/* fonts end */}

          {/* public assets begin */}
          <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
          <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
          <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
          <link rel="stylesheet" href="/css/plugins/magnific-popup.css" />
          {/* public assets end */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
