import Link from "next/link";

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProductCard from "@components/ProductCard";
import ArrowIcon from "@layouts/svg-icons/Arrow";

import { getAllProducts } from "@library/products";

const Ecosystem = ({ products }) => {
  return (
    <Layouts>
      <PageBanner
        pageTitle={"The <span class=\"mil-thin\">Vikisol</span> Ecosystem"}
        breadTitle={"Ecosystem"}
        description="Vikisol builds connected products around people, work, business, and organizations - Vikisol Arena, JennySol, and Vikisol One today, with more to come."
        anchorLabel={"Explore the products"}
        anchorLink={"#products"}
      />

      <section>
        <div className="container mil-p-120-90">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7 mil-mb-60">
              <p className="mil-label mil-upper mil-accent mil-up mil-mb-15">Why more than one product</p>
              <h2 className="mil-up mil-mb-30">
                People, work, and organizations <span className="mil-thin">don&apos;t fit in one app</span>
              </h2>
              <p className="mil-text mil-up mil-mb-30">
                Vikisol started as a technology and workforce partner to enterprise clients. Building and staffing
                real programs, at scale, surfaced the same problems again and again: finding the right person for a
                real need, giving people a useful AI layer instead of a dozen disconnected tools, and running the
                actual operations of a workforce once people are in place.
              </p>
              <p className="mil-text mil-up mil-mb-30">
                Rather than solve each problem inside a single sprawling application, Vikisol is building focused
                products for each part of it - connected where it makes sense, independent where it should be. Vikisol
                Arena, JennySol, and Vikisol One are the first three. They&apos;re not the last.
              </p>
            </div>
            <div className="col-lg-4 mil-mb-60">
              <div className="mil-soft-bg mil-p-30-30 mil-mb-30">
                <h5 className="mil-up mil-mb-15">One architectural rule</h5>
                <p className="mil-text mil-up" style={{ margin: 0 }}>
                  Each product stays authoritative over its own data. JennySol, the shared AI layer, never reaches
                  directly into another product&apos;s database - only through a controlled connector, the same way
                  for every product it connects to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mil-soft-bg">
        <div className="container mil-p-120-90">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up">The products</h3>
              <p className="mil-text mil-up">Real, available today. More will join this page as they launch.</p>
            </div>
          </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-6 col-lg-4" key={product.slug}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mil-p-120-120">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up mil-mb-30">Building something that could connect to this?</h3>
              <p className="mil-text mil-up mil-mb-30">
                If you&apos;re exploring a partnership, an integration, or just want to understand the ecosystem
                better, we&apos;re glad to talk.
              </p>
            </div>
            <div className="col-lg-3 mil-mb-30">
              <Link href="/contact" className="mil-button mil-arrow-place mil-up">
                <span>Get in touch</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Ecosystem;

export async function getStaticProps() {
  const products = getAllProducts();
  return { props: { products } };
}
