import Link from "next/link";

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const processSteps = [
  {
    title: "Requirement scoping",
    text: "We start by understanding the role, the tech stack, the team it sits in, and the outcome the client needs delivered - not just a job description."
  },
  {
    title: "Sourcing & screening",
    text: "Our talent team sources from our active bench and network, then screens for skills, experience, and communication fit."
  },
  {
    title: "Technical evaluation",
    text: "Shortlisted candidates go through role-specific technical assessments and, where relevant, a practical or scenario-based review."
  },
  {
    title: "Client interviews",
    text: "We coordinate interview rounds with the client, sharing structured feedback after every stage so decisions move quickly."
  },
  {
    title: "Offer & onboarding",
    text: "Once selected, we manage offer rollout, documentation, and onboarding so the consultant is ready to start on day one."
  },
  {
    title: "Deployment & governance",
    text: "After deployment, we track performance, engagement, and delivery health through regular check-ins with the client and the consultant."
  }
];

const engagementModels = [
  { title: "Staff augmentation", text: "Skilled consultants embedded into your existing teams for as long as the engagement needs them." },
  { title: "Dedicated teams", text: "A ring-fenced team assembled around a specific project, product, or delivery milestone." },
  { title: "Project-based staffing", text: "Talent aligned to a defined scope and timeline, with delivery ownership built into the engagement." },
  { title: "Contract-to-hire", text: "Evaluate a consultant on a live engagement before converting them to your permanent headcount." }
];

const qualityChecks = [
  { title: "Skills verification", text: "Every profile is validated against the technical requirement before it reaches a client." },
  { title: "Background & reference checks", text: "Standard background verification is run before onboarding for client-facing and sensitive roles." },
  { title: "Performance check-ins", text: "Regular check-ins during deployment catch delivery or fit issues early, not at renewal time." },
  { title: "Replacement guarantee", text: "If a placement isn't working out within the agreed window, we replace the consultant at no additional sourcing cost." }
];

const StaffingProcess = () => {
  return (
    <Layouts>
      <PageBanner
        pageTitle={"<span class=\"mil-thin\">Our</span> Staffing Process"}
        breadTitle={"Staffing Process"}
        anchorLabel={"See the process"}
        anchorLink={"#process"}
      />

      <section>
        <div className="container mil-p-120-60">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 mil-mb-60">
              <p className="mil-label mil-upper mil-accent mil-up mil-mb-15">How we staff</p>
              <h2 className="mil-up mil-mb-30">
                A structured process built for <span className="mil-thin">delivery-sensitive</span> hiring
              </h2>
              <p className="mil-text mil-up mil-mb-30">
                Staffing at Vikisol is treated as a delivery function, not just a recruitment task. We combine an
                active talent bench, structured screening, and technical evaluation so clients get consultants who
                can perform from week one, not just resumes that look good on paper.
              </p>
              <p className="mil-text mil-up mil-mb-30">
                Candidates apply and track their progress through <Link href="/vikisol-arena" className="mil-accent" style={{ fontWeight: 600 }}>Vikisol Arena</Link>,
                our talent portal, while our internal team manages sourcing, evaluation, and deployment on the client side.
              </p>
              <Link href="/contact" className="mil-button mil-arrow-place mil-up">
                <span>Talk to Our Staffing Team</span>
                <ArrowIcon />
              </Link>
            </div>
            <div className="col-lg-5 mil-mb-60">
              <div className="row">
                {[
                  { num: "500+", label: "Consultants Deployed" },
                  { num: "8+", label: "Countries Served" },
                  { num: "48 hrs", label: "Typical First Response" },
                  { num: "6", label: "Steps to Deployment" }
                ].map((item) => (
                  <div key={item.label} className="col-6 mil-mb-30">
                    <div className="mil-soft-bg mil-p-30-30 mil-mb-30">
                      <h3 className="mil-accent mil-up" style={{ marginBottom: "4px" }}>{item.num}</h3>
                      <p className="mil-text mil-up" style={{ margin: 0 }}>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mil-soft-bg">
        <div className="container mil-p-120-90">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up">From requirement to deployment</h3>
              <p className="mil-text mil-up">
                Six stages, applied consistently whether we're staffing one role or building an entire delivery team.
              </p>
            </div>
          </div>
          <div className="row">
            {processSteps.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={`process-step-${index}`}>
                <div className="mil-soft-bg mil-p-30-30 mil-mb-30">
                  <p className="mil-label mil-upper mil-accent mil-up mil-mb-15">{`0${index + 1}`}</p>
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
              <h3 className="mil-up">Engagement models</h3>
              <p className="mil-text mil-up">
                We fit the staffing model to the way you actually need to work, not the other way around.
              </p>
            </div>
          </div>
          <div className="row">
            {engagementModels.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={`engagement-${index}`}>
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
        <div className="container mil-p-120-90">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up">Quality and accountability</h3>
              <p className="mil-text mil-up">
                Placement is the start of the relationship, not the end of it.
              </p>
            </div>
          </div>
          <div className="row">
            {qualityChecks.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={`quality-${index}`}>
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
        <div className="container mil-p-120-120">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up mil-mb-30">Need talent for a live delivery gap?</h3>
              <p className="mil-text mil-up mil-mb-30">
                Tell us the role, the stack, and the timeline. Our staffing team will get back to you with fit
                candidates from our active bench within 48 hours.
              </p>
            </div>
            <div className="col-lg-3 mil-mb-30">
              <Link href="/contact" className="mil-button mil-arrow-place mil-up">
                <span>Request Talent</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default StaffingProcess;
