/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // /vikisol-arena was a standalone page that mischaracterized Arena as an internal hiring
      // portal. Replaced by the data-driven /products/arena - redirected, not deleted outright,
      // so any existing link or bookmark still lands somewhere real.
      {
        source: '/vikisol-arena',
        destination: '/products/arena',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
