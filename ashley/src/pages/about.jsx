import React from "react";
import Link from "next/link";

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "500+", label: "Consultants Deployed" },
  { value: "8", label: "Countries Served" },
  { value: "2021", label: "Founded in Hyderabad" }
];

const focusAreas = [
  {
    title: "Technology",
    text: "SAP, cloud, AI, cybersecurity, software engineering, and digital transformation programs that help enterprises modernize core operations."
  },
  {
    title: "Talent",
    text: "Strategic staffing, dedicated teams, recruitment support, and workforce deployment for delivery-sensitive engagements."
  },
  {
    title: "Transformation",
    text: "Enterprise strategy, operating model design, and platform modernization supported by practical delivery discipline."
  },
  {
    title: "Delivery",
    text: "Managed services, support models, and multi-location execution across India, the Middle East, the US, the UK, and Australia."
  }
];

const principles = [
  {
    title: "One partner for execution",
    text: "We combine consulting, engineering, staffing, and support so clients do not have to manage fragmented vendors."
  },
  {
    title: "Enterprise-ready delivery",
    text: "Our work is shaped for procurement, governance, security, and long-term support, not only for initial implementation."
  },
  {
    title: "Multi-domain capability",
    text: "We support technology programs across SAP, AI, cloud, cybersecurity, CX, commerce, learning, supply chain, and more."
  },
  {
    title: "Global reach",
    text: "We work with clients across India, the UAE, Saudi Arabia, Qatar, Oman, the USA, the UK, and Australia."
  }
];

const leadershipNotes = [
  {
    title: "Founder-led clarity",
    text: "Clients know who they are engaging and what business outcome the team is expected to own."
  },
  {
    title: "Consulting mindset",
    text: "We speak in business terms first and technical terms second so the message stays useful to decision makers."
  },
  {
    title: "Delivery discipline",
    text: "Our positioning emphasizes measurable execution, consistent reporting, and support after go-live."
  }
];

const About = () => {
  return (
    <Layouts>
      <PageBanner
        pageTitle={'About <span className="mil-thin">Vikisol</span><br>Technology. Talent. <span className="mil-thin">Transformation.</span>'}
        breadTitle={"About Us"}
        anchorLabel={"About Vikisol"}
        anchorLink={"#about"}
        paddingBottom={1}
      />

      <section>
        <div className="container mil-p-120-90">
          <div className="row justify-content-between align-items-center flex-lg-row-reverse">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-about-photo">
                <div className="mil-up mil-img-frame" style={{"paddingBottom": "135%"}}>
                  <img src="/img/photo/1.jpg" alt="Vikisol Technologies" className="mil-scale" data-value-1="1" data-value-2="1.08" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 mil-mb-60">
              <p className="mil-label mil-upper mil-accent mil-up mil-mb-15">Who we are</p>
              <h2 className="mil-up mil-mb-30">A technology partner built for enterprise delivery.</h2>
              <p className="mil-text mil-up mil-mb-30">
                Vikisol Technologies Pvt. Ltd. helps organizations modernize business-critical systems, strengthen delivery capacity,
                and scale with skilled teams across technology and operations.
              </p>
              <p className="mil-text mil-up mil-mb-30">
                Our work spans SAP, cloud, AI, cybersecurity, software engineering, managed services, workforce solutions, and
                strategic engagement models for clients in India, the Middle East, the US, the UK, and Australia.
              </p>
              <div className="row">
                <div className="col-6 mil-mb-20">
                  <p className="mil-text mil-up">Enterprise consulting</p>
                </div>
                <div className="col-6 mil-mb-20">
                  <p className="mil-text mil-up">Workforce deployment</p>
                </div>
                <div className="col-6 mil-mb-20">
                  <p className="mil-text mil-up">Technology delivery</p>
                </div>
                <div className="col-6 mil-mb-20">
                  <p className="mil-text mil-up">Global support</p>
                </div>
              </div>
              <Link href="/services" className="mil-button mil-arrow-place mil-up">
                <span>Explore Services</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mil-soft-bg">
        <div className="container mil-p-120-90">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up">A practical partner for enterprise technology and workforce needs.</h3>
              <p className="mil-text mil-up">
                Vikisol Technologies Pvt. Ltd. helps organizations modernize core systems, deploy the right talent, and execute
                transformation programs with clear ownership and consistent delivery.
              </p>
            </div>
          </div>
          <div className="row">
            {stats.map((item, index) => (
              <div className="col-sm-6 col-lg-3" key={`stat-${index}`}>
                <div className="mil-soft-bg mil-p-30-30 mil-mb-30">
                  <h3 className="mil-up mil-mb-15">{item.value}</h3>
                  <p className="mil-text mil-up">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mil-p-120-60">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up">What Vikisol focuses on</h3>
              <p className="mil-text mil-up">
                The goal is to present a company profile that feels credible to enterprise buyers and easy to evaluate during
                vendor reviews, client introductions, and partnership discussions.
              </p>
            </div>
          </div>
          <div className="row">
            {focusAreas.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={`focus-${index}`}>
                <div className="mil-soft-bg mil-p-30-30 mil-mb-30">
                  <h5 className="mil-up mil-mb-15">{item.title}</h5>
                  <p className="mil-text mil-up">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mil-p-120-90">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up">How we work</h3>
              <p className="mil-text mil-up">
                Vikisol is built around clear accountability, practical execution, and service breadth that supports real enterprise demand.
              </p>
            </div>
          </div>
          <div className="row">
            {principles.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={`principle-${index}`}>
                <div className="mil-soft-bg mil-p-30-30 mil-mb-30">
                  <h5 className="mil-up mil-mb-15">{item.title}</h5>
                  <p className="mil-text mil-up">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mil-p-120-90">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up">Leadership and credibility</h3>
              <p className="mil-text mil-up">
                The profile should reflect leadership clearly while keeping the company story centered on capability, trust, and delivery.
              </p>
            </div>
          </div>
          <div className="row">
            {leadershipNotes.map((item, index) => (
              <div className="col-md-4" key={`leadership-${index}`}>
                <div className="mil-soft-bg mil-p-30-30 mil-mb-30">
                  <h5 className="mil-up mil-mb-15">{item.title}</h5>
                  <p className="mil-text mil-up">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mil-soft-bg">
        <div className="container mil-p-120-120">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up mil-mb-30">Why clients engage Vikisol</h3>
              <p className="mil-text mil-up mil-mb-30">
                Clients come to Vikisol when they need a partner that can understand enterprise complexity, bring the right people,
                and execute with discipline. That combination matters whether the need is SAP, AI, cloud, engineering, staffing,
                or managed operations.
              </p>
            </div>
            <div className="col-lg-3 mil-mb-30">
              <Link href="/services" className="mil-button mil-arrow-place mil-up">
                <span>View Services</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default About;