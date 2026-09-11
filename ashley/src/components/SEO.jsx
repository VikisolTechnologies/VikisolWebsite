import Head from "next/head";
import { useRouter } from "next/router";
import AppData from "@data/app.json";

const SITE_URL = "https://vikisol.in";
const DEFAULT_OG_IMAGE = "https://res.cloudinary.com/drqgvncx1/image/upload/v1781490490/Vikisol_AppIcon-Big_ang4lu.png";

// Single source of truth for per-page <head> metadata - title, description, canonical, Open
// Graph, and Twitter Card. PageBanner renders this for every page that uses it; pages with no
// PageBanner (the homepage, 404) render it directly. Previously, only <title> existed per page
// (via PageBanner) - description/canonical/OG/Twitter were entirely absent everywhere.
const SEO = ({ title, description, ogImage = DEFAULT_OG_IMAGE }) => {
  const { asPath } = useRouter();
  const canonicalUrl = `${SITE_URL}${asPath.split("?")[0]}`;
  const metaDescription = description || AppData.settings.siteDescription;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Vikisol" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default SEO;
