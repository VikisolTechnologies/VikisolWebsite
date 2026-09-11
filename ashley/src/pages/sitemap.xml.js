import { getAllPostsIds } from "@library/posts";
import { getAllProjectsIds } from "@library/projects";
import { getAllServicesIds } from "@library/services";
import { getAllCategoriesIds } from "@library/categories";
import { getAllProductSlugs } from "@library/products";

const SITE_URL = "https://vikisol.in";

// Static routes worth indexing - excludes /home-2 (unused template variant), /404, and
// /sitemap.xml itself.
const STATIC_ROUTES = [
  "/",
  "/ecosystem",
  "/about",
  "/team",
  "/services",
  "/projects",
  "/projects-2",
  "/projects-3",
  "/careers",
  "/staffing-process",
  "/blog",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
  "/cookie-policy"
];

function buildSitemap(urls) {
  const body = urls
    .map((url) => `  <url><loc>${SITE_URL}${url}</loc></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`;
}

function SiteMap() {
  // getServerSideProps below handles the actual response; this component never renders.
  return null;
}

export async function getServerSideProps({ res }) {
  const productRoutes = getAllProductSlugs().map((p) => `/products/${p.params.slug}`);
  const serviceRoutes = getAllServicesIds().map((s) => `/services/${s.params.id}`);
  const postRoutes = getAllPostsIds().map((p) => `/blog/${p.params.id}`);
  const projectRoutes = getAllProjectsIds().map((p) => `/projects/${p.params.id}`);
  const categoryRoutes = getAllCategoriesIds().map((c) => `/blog/category/${c.params.id}`);

  const urls = [
    ...STATIC_ROUTES,
    ...productRoutes,
    ...serviceRoutes,
    ...postRoutes,
    ...projectRoutes,
    ...categoryRoutes
  ];

  res.setHeader("Content-Type", "text/xml");
  res.write(buildSitemap(urls));
  res.end();

  return { props: {} };
}

export default SiteMap;
