// The extensible product model: one markdown file per product under src/data/products/,
// following the exact same gray-matter + remark pattern as services.js/posts.js. Adding a
// future product is adding one file here - no page, component, nav, sitemap, or SEO code
// needs to change. Order of products.map() rendering follows `order` in frontmatter.
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const productsDirectory = path.join(process.cwd(), 'src/data/products')

export function getAllProducts() {
  const fileNames = fs.readdirSync(productsDirectory).filter((f) => f.endsWith('.md'))
  const allData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(productsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return { slug, ...matterResult.data }
  })
  return allData.sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
}

export function getAllProductSlugs() {
  const fileNames = fs.readdirSync(productsDirectory).filter((f) => f.endsWith('.md'))
  return fileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, '') }
  }))
}

export async function getProductData(slug) {
  const fullPath = path.join(productsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  return { slug, contentHtml, ...matterResult.data }
}
