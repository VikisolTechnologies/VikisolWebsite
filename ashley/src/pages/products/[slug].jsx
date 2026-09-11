import Link from "next/link";

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ArrowIcon from "@layouts/svg-icons/Arrow";

import { getAllProductSlugs, getProductData, getAllProducts } from "@library/products";

const ProductDetail = ({ product, otherProducts }) => {
  return (
    <Layouts>
      <PageBanner
        pageTitle={`<span class="mil-thin">${product.category}</span><br>${product.name}`}
        breadTitle={product.name}
        description={product.shortDescription}
        anchorLabel={"Learn more"}
        anchorLink={"#product"}
      />

      <section id="product">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 mil-mb-60">
              <p className="mil-label mil-upper mil-accent mil-up mil-mb-15">{product.tagline}</p>
              <div className="mil-text mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: product.contentHtml }} />
              <div className="mil-up mil-mb-30">
                <span className="mil-label mil-upper" style={{ opacity: 0.6 }}>Who it&apos;s for &mdash; </span>
                <span className="mil-text">{product.audience}</span>
              </div>
              {product.externalUrl &&
              <a
                href={product.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mil-button mil-arrow-place mil-up"
              >
                <span>{product.ctaLabel || "Learn more"}</span>
                <ArrowIcon />
              </a>
              }
            </div>
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-soft-bg mil-p-30-30 mil-mb-15">
                <p className="mil-label mil-upper" style={{ opacity: 0.6, marginBottom: "6px" }}>Status</p>
                <h5 className="mil-up" style={{ margin: 0 }}>{product.status === "AVAILABLE" ? "Available today" : product.status}</h5>
              </div>
              {product.philosophy &&
              <div className="mil-soft-bg mil-p-30-30">
                <p className="mil-label mil-upper" style={{ opacity: 0.6, marginBottom: "10px" }}>The philosophy</p>
                <p className="mil-up mil-mb-15" style={{ fontWeight: 500 }}>
                  {product.philosophy.join(" → ")}
                </p>
                {product.philosophyNote &&
                <p className="mil-text mil-up" style={{ fontSize: "14px", opacity: 0.8 }}>{product.philosophyNote}</p>
                }
              </div>
              }
            </div>
          </div>
        </div>
      </section>

      {product.currentCapabilities &&
      <section className="mil-soft-bg">
        <div className="container mil-p-120-90">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up">What&apos;s real today</h3>
            </div>
          </div>
          <div className="row">
            {product.currentCapabilities.map((item, index) => (
              <div className="col-md-6" key={`current-${index}`}>
                <div className="mil-soft-bg mil-p-30-30 mil-mb-30">
                  <p className="mil-text mil-up" style={{ margin: 0 }}>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      }

      {product.visionCapabilities &&
      <section>
        <div className="container mil-p-120-90">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up">Where it&apos;s heading</h3>
              <p className="mil-text mil-up">Vision, not yet built &mdash; described honestly as direction, not as a current feature.</p>
            </div>
          </div>
          <div className="row">
            {product.visionCapabilities.map((item, index) => (
              <div className="col-md-6" key={`vision-${index}`}>
                <div className="mil-p-30-30 mil-mb-30" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
                  <p className="mil-text mil-up" style={{ margin: 0 }}>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      }

      {otherProducts.length > 0 &&
      <section className="mil-soft-bg">
        <div className="container mil-p-120-120">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up">Rest of the ecosystem</h3>
            </div>
            <div className="col-lg-3 mil-mb-30">
              <Link href="/ecosystem" className="mil-button mil-arrow-place mil-up">
                <span>View all products</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
          <div className="row">
            {otherProducts.map((item) => (
              <div className="col-md-6" key={item.slug}>
                <div className="mil-soft-bg mil-p-30-30 mil-mb-30">
                  <p className="mil-label mil-upper mil-accent mil-up mil-mb-15">{item.category}</p>
                  <h5 className="mil-up mil-mb-15">{item.name}</h5>
                  <p className="mil-text mil-up mil-mb-30">{item.shortDescription}</p>
                  <Link href={`/products/${item.slug}`} className="mil-link mil-dark mil-up mil-arrow-place">
                    <span>Learn more</span>
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      }
    </Layouts>
  );
};

export default ProductDetail;

export async function getStaticPaths() {
  const paths = getAllProductSlugs();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = await getProductData(params.slug);
  const otherProducts = getAllProducts().filter((p) => p.slug !== params.slug);

  return { props: { product, otherProducts } };
}
