import Link from "next/link";
import ProductCard from "@components/ProductCard";
import ArrowIcon from "@layouts/svg-icons/Arrow";

// Homepage-only: a compact version of what /ecosystem covers in full. Products come from
// src/data/products/*.md via the homepage's own getStaticProps - this component stays a pure
// renderer, so it needs no changes when a product is added, removed, or reordered.
const EcosystemSection = ({ products }) => {
  return (
    <section id="ecosystem" className="mil-soft-bg">
      <div className="container mil-p-120-90">
        <div className="row justify-content-between align-items-end mil-mb-60">
          <div className="col-lg-7 mil-mb-30">
            <p className="mil-label mil-upper mil-accent mil-up mil-mb-15">Beyond consulting</p>
            <h2 className="mil-up mil-mb-30">
              We also <span className="mil-thin">build our own</span> products
            </h2>
            <p className="mil-text mil-up">
              Alongside our consulting and delivery work, Vikisol builds a connected ecosystem of products -
              starting with talent, AI, and workforce operations.
            </p>
          </div>
          <div className="col-lg-3 mil-mb-30">
            <Link href="/ecosystem" className="mil-button mil-arrow-place mil-up">
              <span>Explore the ecosystem</span>
              <ArrowIcon />
            </Link>
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
  );
};

export default EcosystemSection;
