import React from "react";
import DefaultData from "@data/sections/pricing.json";
import Link from "next/link";

import ArrowIcon from "@layouts/svg-icons/Arrow";

const icons = {
    target: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="3" fill="currentColor" />
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
    shield: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <path d="M24 6l14 5v11c0 9.4-6 16.3-14 20-8-3.7-14-10.6-14-20V11l14-5z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M18 24l4 4.5L31 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    puzzle: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <path d="M17 8h8v4.5a3 3 0 1 0 0 6V23h-4.5a3 3 0 1 1 0 6H25v9h-8v-8.5a3 3 0 1 0 0-6H8v-8h4.5a3 3 0 1 0 0-6H17V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    ),
    rocket: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <path d="M24 6c6 3 10 9 10 17-3 1-6 3-10 7-4-4-7-6-10-7 0-8 4-14 10-17z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="24" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M17 30c-3 1-5 3-6 8 5-1 7-3 8-6M31 30c3 1 5 3 6 8-5-1-7-3-8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    gear: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M24 8v5M24 35v5M8 24h5M35 24h5M12.5 12.5l3.5 3.5M32 32l3.5 3.5M12.5 35.5l3.5-3.5M32 16l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    scan: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 18h32M17 8v32" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="24.5" cy="27.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M28.5 31.5L33 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    retainer: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <path d="M38 16a14 14 0 1 0 2.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M38 8v8h-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
    search: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <circle cx="21" cy="21" r="12" stroke="currentColor" strokeWidth="1.5" />
            <path d="M30 30l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    briefcase: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <rect x="7" y="16" width="34" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M17 16v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 26h34" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    ),
    lock: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <rect x="11" y="21" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M16 21v-6a8 8 0 0 1 16 0v6" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="24" cy="29" r="2.5" fill="currentColor" />
        </svg>
    ),
};

const PricingSection = ({ data }) => {
    const Data = data || DefaultData;

    return (
        <>
        {/* engagement models */}
        <section className="mil-dark-bg mil-engage">
            <div className="mi-invert-fix">
                <div className="container mil-p-120-120">
                    <div className="row justify-content-between align-items-end mil-mb-90">
                        <div className="col-lg-6">
                            <p className="mil-muted mil-eyebrow mil-up mil-mb-30">{Data.tag}</p>
                            <h2 className="mil-muted mil-up" dangerouslySetInnerHTML={{__html : Data.title}} />
                        </div>
                        <div className="col-lg-5">
                            <p className="mil-light-soft mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                        </div>
                    </div>

                    <div className="mil-engage-grid mil-up">
                        {Data.items.map((item, key) => (
                        <Link href={item.link} className="mil-engage-card mil-accent-cursor" key={`pricing-item-${key}`}>
                            <div className="mil-engage-top">
                                <div className="mil-engage-icon">{icons[item.icon]}</div>
                                <span className="mil-engage-index">{item.price.value}</span>
                            </div>

                            <h5 className="mil-muted mil-mb-30" dangerouslySetInnerHTML={{__html : item.title}} />
                            <p className="mil-light-soft mil-mb-30" dangerouslySetInnerHTML={{__html : item.text}} />

                            <div className="mil-engage-footer">
                                <span className="mil-engage-meta">{item.meta}</span>
                                <div className="mil-button mil-icon-button-sm mil-arrow-place">
                                    <ArrowIcon />
                                </div>
                            </div>
                        </Link>
                        ))}
                    </div>

                    <div className="mil-center mil-mt-60">
                        <Link href={Data.button.link} className="mil-button  mil-arrow-place">
                            <span>{Data.button.label}</span>
                            <ArrowIcon />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
        {/* engagement models end */}
        </>
    );
};

export default PricingSection;
