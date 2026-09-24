import PageBannerDark from "@components/PageBannerDark";
import Layouts from "@layouts/Layouts";

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";

import Link from "next/link";

import ArrowIcon from "@layouts/svg-icons/Arrow";
import LinesIcon from "@layouts/svg-icons/Lines";

const enterpriseCapabilities = [
  "AI & Data",
  "Cloud",
  "Customer Experience",
  "Cybersecurity",
  "Digital Engineering",
  "Emerging Technology",
  "Finance & Risk Management",
  "Infrastructure & Capital Projects",
  "Learning",
  "Managed Services",
  "Marketing & Experience",
  "Metaverse",
  "Sales & Commerce",
  "Strategy",
  "Supply Chain",
  "Sustainability",
  "Talent & Organization",
  "Technology Transformation"
];

const industries = [
  "Aerospace & Defense",
  "Automotive",
  "Banking",
  "Capital Markets",
  "Chemicals",
  "Communications & Media",
  "Consumer Goods & Services",
  "Energy",
  "Health",
  "High Tech",
  "Industrial",
  "Insurance",
  "Life Sciences",
  "Natural Resources",
  "Public Service",
  "Private Equity",
  "Retail",
  "Software & Platforms",
  "Travel",
  "Utilities"
];

const Services = (props) => {
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-dark-bg">
          <PageBannerDark pageTitle={`Technology <span class="mil-thin">Solutions</span><br> <span class="mil-thin">That</span> Transform`} breadTitle={"Services"} anchorLabel={"Our services"} anchorLink={"#services"} description="Vikisol's technology services: SAP consulting, software engineering, AI & automation, cybersecurity, cloud & DevOps, Salesforce, ServiceNow, and talent & workforce solutions." />

          {/* services */}
          <section id="services">
              <div className="mi-invert-fix">
                  <div className="container mil-p-120-60">
                      <div className="row">
                          <div className="col-lg-5">

                              <div className="mil-lines-place mil-light">
                                <LinesIcon />
                              </div>

                          </div>
                          <div className="col-lg-7">
                              <div className="row">
                                  {props.services.map((item, key) => (
                                  <div className="col-md-6 col-lg-6" key={`services-item-${key}`}>
                                      <Link href={`/services/${item.id}`} className={key%2 == 0 ? "mil-service-card-lg mil-more mil-accent-cursor mil-offset" : "mil-service-card-lg mil-more mil-accent-cursor"}>
                                          <h4 className="mil-muted mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : item.preview_title}} />
                                          <p className="mil-descr mil-light-soft mil-up mil-mb-30">{item.short}</p>
                                          <ul className="mil-service-list mil-light mil-mb-30">
                                            {item.list.items.slice(0, 4).map((list_item, list_key) => (
                                            <li className="mil-up" key={`services-item-${key}-list-${list_key}`}>{list_item.label}</li>
                                            ))}
                                          </ul>
                                          <div className="mil-link mil-accent mil-arrow-place mil-up">
                                              <span>Read more</span>
                                              <ArrowIcon />
                                          </div>
                                      </Link>
                                  </div>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
      {/* services end */}

        <section>
          <div className="container mil-p-120-60">
            <div className="row align-items-end mil-mb-60">
              <div className="col-lg-8 mil-mb-30">
                <h3 className="mil-up">Enterprise Technology Domains</h3>
                <p className="mil-text mil-up">
                These are the broader capability areas we use to frame Vikisol as a multi-domain technology partner.
                </p>
              </div>
            </div>
            <div className="row">
              {enterpriseCapabilities.map((item, key) => (
              <div className="col-md-6 col-lg-3" key={`domain-item-${key}`}>
                <div className="mil-soft-bg mil-domain-card mil-p-30-30 mil-mb-30">
                  <span className="mil-domain-card-index">{String(key + 1).padStart(2, "0")}</span>
                  <h5 className="mil-up">{item}</h5>
                </div>
              </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mil-soft-bg">
          <div className="container mil-p-120-90">
            <div className="row align-items-end mil-mb-60">
              <div className="col-lg-8 mil-mb-30">
                <h3 className="mil-up">Industries We Serve</h3>
                <p className="mil-text mil-up">
                We tailor delivery models to regulated, high-scale, and operationally complex sectors.
                </p>
              </div>
            </div>
            <div className="row">
              {industries.map((industry, key) => (
              <div className="col-6 col-md-4 col-lg-3" key={`industry-item-${key}`}>
                <div className="mil-service-card-sm mil-up mil-mb-30">
                  <h6 className="mil-up">{industry}</h6>
                </div>
              </div>
              ))}
            </div>
          </div>
        </section>

      <CallToActionSection />
      
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices
    }
  }
}