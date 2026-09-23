// Same hand-drawn icon style already used by Pricing.jsx's `icons` map (48x48 viewBox,
// currentColor stroke) - kept as its own small map here since only ProductCard needs it,
// driven by an `icon` field in each product's markdown frontmatter.
const icons = {
    briefcase: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <rect x="7" y="16" width="34" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M17 16v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 26h34" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    ),
    bot: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <rect x="10" y="16" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="18.5" cy="26" r="2.5" fill="currentColor" />
            <circle cx="29.5" cy="26" r="2.5" fill="currentColor" />
            <path d="M24 16v-6M18 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M17 33h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    team: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="32" cy="22" r="4.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 38c0-6.6 4.5-10 10-10s10 3.4 10 10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M28 30.5c4.5.3 8 3 8 7.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    ),
};

const ProductIcon = ({ name }) => icons[name] || icons.team;

export default ProductIcon;
