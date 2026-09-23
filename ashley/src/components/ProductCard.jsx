import Link from "next/link";
import ProductIcon from "@layouts/svg-icons/ProductIcon";
import ArrowIcon from "@layouts/svg-icons/Arrow";

// Renders one product from src/data/products/*.md. Used on the homepage ecosystem section and
// the /ecosystem hub - the only two places that need to know product cards exist at all. A
// future product is a new markdown file (optionally with an `icon` field - briefcase/bot/team -
// falling back to a default icon if omitted); this component and its callers need no changes.
const ProductCard = ({ product }) => {
  const capabilityCount = product.currentCapabilities?.length ?? 0;
  const statusLabel = product.status === "AVAILABLE" ? "Live now" : product.status;

  return (
    <div className="mil-soft-bg mil-p-30-30 mil-mb-30 mil-product-card">
      <div className="mil-product-card-top mil-up">
        <span className="mil-product-card-icon">
          <ProductIcon name={product.icon} />
        </span>
        {statusLabel && <span className="mil-product-card-status">{statusLabel}</span>}
      </div>
      <p className="mil-label mil-upper mil-accent mil-up mil-mb-15">{product.category}</p>
      <h4 className="mil-up mil-mb-15">{product.name}</h4>
      <p className="mil-text mil-up mil-mb-30">{product.shortDescription}</p>
      {capabilityCount > 0 && (
        <p className="mil-product-card-stat mil-up mil-mb-30">{capabilityCount} capabilities today</p>
      )}
      <Link href={`/products/${product.slug}`} className="mil-link mil-dark mil-up mil-arrow-place">
        <span>Learn more</span>
        <ArrowIcon />
      </Link>
    </div>
  );
};

export default ProductCard;
