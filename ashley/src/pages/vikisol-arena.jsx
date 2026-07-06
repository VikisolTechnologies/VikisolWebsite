import Link from "next/link";

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const features = [
  {
    title: "Live job openings",
    text: "Browse current roles across SAP, software engineering, AI, cloud, cybersecurity, testing, and delivery as soon as they open."
  },
  {
    title: "Skill assessments",
    text: "Complete role-specific assessments online so your technical strengths are visible before the first interview."
  },
  {
    title: "Application tracking",
    text: "Track every stage of your application in real time, from submission to interview scheduling to offer."
  },
  {
    title: "Faster shortlisting",
    text: "Structured profiles and assessment data help our talent team match you to the right role faster."
  }
];

const steps = [
  { title: "Create your profile", text: "Sign up and build a candidate profile with your experience, skills, and preferences." },
  { title: "Apply to open roles", text: "Explore live openings on Vikisol Arena and apply directly to the roles that fit you." },
  { title: "Take an assessment", text: "Complete a short skill assessment where applicable, so reviewers see your ability, not just your resume." },
  { title: "Track your progress", text: "Follow your application status inside the portal instead of waiting on email updates." }
];

const VikisolArena = () => {
  return (
    <Layouts>
      <PageBanner
        pageTitle={"<span class=\"mil-thin\">Vikisol</span> Arena"}
        breadTitle={"Vikisol Arena"}
        anchorLabel={"Explore Arena"}
        anchorLink={"#arena"}
      />

      <section id="arena">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 mil-mb-60">
              <p className="mil-label mil-upper mil-accent mil-up mil-mb-15">Our talent platform</p>
              <h2 className="mil-up mil-mb-30">
                A dedicated home for <span className="mil-thin">candidates</span> at Vikisol
              </h2>
              <p className="mil-text mil-up mil-mb-30">
                Vikisol Arena is the talent portal we built for candidates exploring careers with Vikisol Technologies.
                Instead of a static job board, Arena gives every applicant a live view into open roles, assessments,
                and where their application stands.
              </p>
              <p className="mil-text mil-up mil-mb-30">
                It is the same portal our recruitment team uses to review applications, so a profile created on Arena
                is the fastest way to get in front of the right hiring manager.
              </p>
              <Link href="/careers" className="mil-button mil-arrow-place mil-up">
                <span>View Open Roles</span>
                <ArrowIcon />
              </Link>
            </div>
            <div className="col-lg-5 mil-mb-60">
              <div className="row">
                {[
                  { num: `${46}+`, label: "Open Roles Listed" },
                  { num: "48 hrs", label: "Typical First Response" },
                  { num: "8+", label: "Practice Areas Hiring" },
                  { num: "24/7", label: "Application Access" }
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

      <section className="mil-soft-bg">
        <div className="container mil-p-120-90">
          <div className="row align-items-end mil-mb-60">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up">What you get on Arena</h3>
              <p className="mil-text mil-up">
                Built to make applying, tracking, and getting assessed as straightforward as possible.
              </p>
            </div>
          </div>
          <div className="row">
            {features.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={`arena-feature-${index}`}>
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
              <h3 className="mil-up">How it works</h3>
              <p className="mil-text mil-up">
                From profile to offer, Arena keeps every step in one place.
              </p>
            </div>
          </div>
          <div className="row">
            {steps.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={`arena-step-${index}`}>
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

      <section className="mil-soft-bg">
        <div className="container mil-p-120-120">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-8 mil-mb-30">
              <h3 className="mil-up mil-mb-30">Ready to explore roles on Arena?</h3>
              <p className="mil-text mil-up mil-mb-30">
                Current openings across software engineering, SAP, cloud & DevOps, AI & data, cybersecurity, and
                delivery are listed on our Careers page. Applying takes a few minutes.
              </p>
            </div>
            <div className="col-lg-3 mil-mb-30">
              <Link href="/careers" className="mil-button mil-arrow-place mil-up">
                <span>Go to Careers</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default VikisolArena;
