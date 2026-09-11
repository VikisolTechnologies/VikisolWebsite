import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";

// Renders one product from src/data/products/*.md. Used on the homepage ecosystem section and
// the /ecosystem hub - the only two places that need to know product cards exist at all. A
// future product is a new markdown file; this component and its callers need no changes.
const ProductCard = ({ product }) => {
  return (
    <div className="mil-soft-bg mil-p-30-30 mil-mb-30 mil-product-card">
      <p className="mil-label mil-upper mil-accent mil-up mil-mb-15">{product.category}</p>
      <h4 className="mil-up mil-mb-15">{product.name}</h4>
      <p className="mil-text mil-up mil-mb-30">{product.shortDescription}</p>
      <Link href={`/products/${product.slug}`} className="mil-link mil-dark mil-up mil-arrow-place">
        <span>Learn more</span>
        <ArrowIcon />
      </Link>
    </div>
  );
};

export default ProductCard;
