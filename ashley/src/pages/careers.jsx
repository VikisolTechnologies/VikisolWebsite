import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const JOB_OPENINGS = [
  { id: 1, title: "React.js Developer", dept: "Software Engineering", location: "Hyderabad / Remote", exp: "4-6 Years", type: "Full-time", skills: "React.js, Redux, JavaScript, REST APIs, Jest" },
  { id: 2, title: "Senior React.js Engineer", dept: "Software Engineering", location: "Hyderabad / Remote", exp: "6-9 Years", type: "Full-time", skills: "React.js, TypeScript, Next.js, Performance, Testing" },
  { id: 3, title: "Frontend Architect - React", dept: "Software Engineering", location: "Hyderabad / Remote", exp: "9-12 Years", type: "Full-time", skills: "React Architecture, Design Systems, Micro Frontends, CI/CD" },
  { id: 4, title: "Java Developer", dept: "Software Engineering", location: "Hyderabad / Remote", exp: "4-6 Years", type: "Full-time", skills: "Java, Spring Boot, REST APIs, SQL, Unit Testing" },
  { id: 5, title: "Senior Java Engineer", dept: "Software Engineering", location: "Hyderabad / Remote", exp: "6-9 Years", type: "Full-time", skills: "Java, Spring Boot, Microservices, Kafka, AWS" },
  { id: 6, title: "Java Microservices Lead", dept: "Software Engineering", location: "Hyderabad / Remote", exp: "8-12 Years", type: "Full-time", skills: "Java, Microservices, Distributed Systems, Kubernetes" },
  { id: 7, title: "Java Solution Architect", dept: "Software Engineering", location: "Hyderabad / Remote", exp: "10-12 Years", type: "Full-time", skills: "Java Architecture, Cloud Native, API Design, Security" },
  { id: 8, title: "Full Stack Java React Developer", dept: "Software Engineering", location: "Hyderabad / Remote", exp: "5-8 Years", type: "Full-time", skills: "Java, React.js, Spring Boot, PostgreSQL, Docker" },
  { id: 9, title: "Node.js Developer", dept: "Software Engineering", location: "Hyderabad / Remote", exp: "4-7 Years", type: "Full-time", skills: "Node.js, Express.js, REST APIs, MongoDB, PostgreSQL" },
  { id: 10, title: "Python Backend Engineer", dept: "Software Engineering", location: "Hyderabad / Remote", exp: "4-7 Years", type: "Full-time", skills: "Python, FastAPI, Django, PostgreSQL, Celery" },
  { id: 11, title: ".NET Core Developer", dept: "Software Engineering", location: "Hyderabad / Remote", exp: "4-7 Years", type: "Full-time", skills: "C#, .NET Core, ASP.NET, SQL Server, Azure" },
  { id: 12, title: "Angular Developer", dept: "Software Engineering", location: "Hyderabad / Remote", exp: "4-7 Years", type: "Full-time", skills: "Angular, TypeScript, RxJS, REST APIs, Unit Testing" },
  { id: 13, title: "React Native Developer", dept: "Software Engineering", location: "Hyderabad / Remote", exp: "4-7 Years", type: "Full-time", skills: "React Native, Android, iOS, Expo, API Integration" },
  { id: 14, title: "Manual Tester", dept: "Quality Engineering", location: "Hyderabad / Remote", exp: "4-6 Years", type: "Full-time", skills: "Functional Testing, Test Cases, Regression, JIRA" },
  { id: 15, title: "QA Automation Engineer", dept: "Quality Engineering", location: "Hyderabad / Remote", exp: "4-7 Years", type: "Full-time", skills: "Selenium, Cypress, API Testing, CI/CD, Java" },
  { id: 16, title: "SDET", dept: "Quality Engineering", location: "Hyderabad / Remote", exp: "5-8 Years", type: "Full-time", skills: "Java, Selenium, TestNG, API Automation, Frameworks" },
  { id: 17, title: "Performance Test Engineer", dept: "Quality Engineering", location: "Hyderabad / Remote", exp: "5-8 Years", type: "Full-time", skills: "JMeter, LoadRunner, APM, Bottleneck Analysis" },
  { id: 18, title: "Test Lead", dept: "Quality Engineering", location: "Hyderabad / Remote", exp: "8-12 Years", type: "Full-time", skills: "QA Strategy, Automation, Test Planning, Team Leadership" },
  { id: 19, title: "SAP FICO Consultant", dept: "SAP Practice", location: "Hyderabad / Remote", exp: "4-8 Years", type: "Full-time", skills: "SAP FI, CO, GL, AP, AR, Asset Accounting" },
  { id: 20, title: "SAP MM Consultant", dept: "SAP Practice", location: "Hyderabad / Remote", exp: "4-8 Years", type: "Full-time", skills: "SAP MM, Procurement, Inventory, Vendor Management" },
  { id: 21, title: "SAP SD Consultant", dept: "SAP Practice", location: "Hyderabad / Remote", exp: "4-8 Years", type: "Full-time", skills: "SAP SD, Pricing, Billing, Sales Distribution" },
  { id: 22, title: "SAP ABAP Developer", dept: "SAP Practice", location: "Hyderabad / Remote", exp: "4-8 Years", type: "Full-time", skills: "SAP ABAP, BAPI, BADI, OData, Enhancements" },
  { id: 23, title: "SAP Basis Consultant", dept: "SAP Practice", location: "Hyderabad", exp: "5-9 Years", type: "Full-time", skills: "SAP Basis, Transport Management, HANA, Security" },
  { id: 24, title: "SAP S/4HANA Solution Architect", dept: "SAP Practice", location: "Hyderabad / Remote", exp: "10-12 Years", type: "Full-time", skills: "S/4HANA, Fit-Gap, Solution Design, Governance" },
  { id: 25, title: "DevOps Engineer", dept: "Cloud & DevOps", location: "Hyderabad / Remote", exp: "4-7 Years", type: "Full-time", skills: "Jenkins, GitHub Actions, Docker, Kubernetes, Terraform" },
  { id: 26, title: "Senior DevOps Engineer", dept: "Cloud & DevOps", location: "Hyderabad / Remote", exp: "7-10 Years", type: "Full-time", skills: "CI/CD, IaC, Kubernetes, Observability, Release Automation" },
  { id: 27, title: "AWS Cloud Engineer", dept: "Cloud & DevOps", location: "Hyderabad / Remote", exp: "4-8 Years", type: "Full-time", skills: "AWS, VPC, EC2, RDS, Lambda, CloudFormation" },
  { id: 28, title: "Azure Cloud Engineer", dept: "Cloud & DevOps", location: "Hyderabad / Remote", exp: "4-8 Years", type: "Full-time", skills: "Azure, AKS, Azure DevOps, ARM, Monitoring" },
  { id: 29, title: "Kubernetes Engineer", dept: "Cloud & DevOps", location: "Hyderabad / Remote", exp: "5-9 Years", type: "Full-time", skills: "Kubernetes, Helm, ArgoCD, Service Mesh, Docker" },
  { id: 30, title: "Cloud Architect", dept: "Cloud & DevOps", location: "Hyderabad / Remote", exp: "9-12 Years", type: "Full-time", skills: "AWS, Azure, Landing Zones, Cost Optimization, Security" },
  { id: 31, title: "Data Engineer", dept: "AI & Data", location: "Hyderabad / Remote", exp: "4-7 Years", type: "Full-time", skills: "Python, Spark, Airflow, SQL, Data Lakes" },
  { id: 32, title: "Data Scientist", dept: "AI & Data", location: "Hyderabad / Remote", exp: "4-8 Years", type: "Full-time", skills: "Python, Statistics, Machine Learning, Forecasting" },
  { id: 33, title: "AI / ML Engineer", dept: "AI & Data", location: "Hyderabad / Remote", exp: "4-8 Years", type: "Full-time", skills: "Python, TensorFlow, PyTorch, MLOps, Model Serving" },
  { id: 34, title: "Generative AI Engineer", dept: "AI & Data", location: "Hyderabad / Remote", exp: "4-7 Years", type: "Full-time", skills: "LLMs, RAG, LangChain, Vector Databases, OpenAI API" },
  { id: 35, title: "Business Intelligence Developer", dept: "AI & Data", location: "Hyderabad / Remote", exp: "4-7 Years", type: "Full-time", skills: "Power BI, Tableau, SQL, Data Modelling, DAX" },
  { id: 36, title: "AI Solution Architect", dept: "AI & Data", location: "Hyderabad / Remote", exp: "9-12 Years", type: "Full-time", skills: "AI Strategy, LLM Architecture, Governance, Enterprise Integration" },
  { id: 37, title: "Cybersecurity Analyst", dept: "Cyber Security", location: "Hyderabad", exp: "4-7 Years", type: "Full-time", skills: "SIEM, Threat Intelligence, Incident Response, VAPT" },
  { id: 38, title: "VAPT Engineer", dept: "Cyber Security", location: "Hyderabad / Remote", exp: "4-7 Years", type: "Full-time", skills: "Burp Suite, Metasploit, OWASP, Web and API Security" },
  { id: 39, title: "SOC Lead", dept: "Cyber Security", location: "Hyderabad", exp: "7-11 Years", type: "Full-time", skills: "SOC Operations, SIEM, Incident Management, Team Leadership" },
  { id: 40, title: "Cloud Security Architect", dept: "Cyber Security", location: "Hyderabad / Remote", exp: "9-12 Years", type: "Full-time", skills: "AWS Security, Azure Security, Zero Trust, CSPM, Compliance" },
  { id: 41, title: "Scrum Master", dept: "Delivery & Architecture", location: "Hyderabad / Remote", exp: "4-8 Years", type: "Full-time", skills: "Scrum, Agile Delivery, Sprint Planning, JIRA, Facilitation" },
  { id: 42, title: "Senior Scrum Master", dept: "Delivery & Architecture", location: "Hyderabad / Remote", exp: "8-12 Years", type: "Full-time", skills: "Scaled Agile, Coaching, Delivery Metrics, Stakeholder Management" },
  { id: 43, title: "Project Manager", dept: "Delivery & Architecture", location: "Hyderabad", exp: "7-12 Years", type: "Full-time", skills: "Project Delivery, Agile, Risk Management, Client Communication" },
  { id: 44, title: "Technical Program Manager", dept: "Delivery & Architecture", location: "Hyderabad / Remote", exp: "9-12 Years", type: "Full-time", skills: "Program Governance, Delivery Planning, Cross-Team Execution" },
  { id: 45, title: "Business Analyst", dept: "Delivery & Architecture", location: "Hyderabad / Remote", exp: "4-8 Years", type: "Full-time", skills: "Requirements, User Stories, Process Mapping, UAT" },
  { id: 46, title: "Enterprise Solution Architect", dept: "Delivery & Architecture", location: "Hyderabad / Remote", exp: "10-12 Years", type: "Full-time", skills: "Enterprise Architecture, Integration, Cloud, Security, Governance" },
];

const DEPARTMENTS = ["All", ...Array.from(new Set(JOB_OPENINGS.map((job) => job.dept)))];

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  techStack: "",
  experience: "",
  currentCtc: "",
  resume: null,
};

const tagStyle = {
  display: "inline-block",
  padding: "4px 10px",
  borderRadius: "3px",
  fontSize: "12px",
  fontWeight: 600,
  marginRight: "8px",
  marginBottom: "6px",
  background: "#f4f4f4",
  color: "#444",
};

const modalOverlayStyle = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(17, 17, 17, 0.82)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  padding: "20px",
};

const modalCardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  padding: "46px 40px",
  width: "100%",
  maxWidth: "680px",
  maxHeight: "90vh",
  overflowY: "auto",
  position: "relative",
};

const closeButtonStyle = {
  position: "absolute",
  top: "14px",
  right: "18px",
  width: "38px",
  height: "38px",
  background: "transparent",
  border: 0,
  color: "#111",
  cursor: "pointer",
  fontSize: "30px",
  lineHeight: 1,
};

const inputStyle = {
  marginBottom: "16px",
  width: "100%",
  display: "block",
  fontSize: "16px",
};

function JobTag({ children, highlight }) {
  return (
    <span style={highlight ? { ...tagStyle, background: "#111", color: "#fff" } : tagStyle}>
      {children}
    </span>
  );
}

function JobCard({ job, onApply }) {
  return (
    <div className="mil-up career-job-card">
      <div className="row align-items-center">
        <div className="col-lg-5 mil-mb-20">
          <JobTag highlight>{job.dept}</JobTag>
          <h5 style={{ margin: "10px 0 8px", fontSize: "17px", fontWeight: 700 }}>{job.title}</h5>
          <p style={{ margin: 0, fontSize: "13px", color: "#888" }}>{job.skills}</p>
        </div>
        <div className="col-lg-4 mil-mb-20">
          <JobTag>{job.location}</JobTag>
          <JobTag>{job.exp}</JobTag>
          <JobTag>{job.type}</JobTag>
        </div>
        <div className="col-lg-3 mil-mb-20 career-apply-cell">
          <button type="button" onClick={() => onApply(job)} className="mil-button mil-arrow-place">
            <span>Apply Now</span>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

function Celebration() {
  return (
    <div className="career-celebration" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span key={`confetti-${index}`} />
      ))}
    </div>
  );
}

export default function Careers() {
  const [filter, setFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);

  const visibleJobs = useMemo(() => {
    if (filter === "All") {
      return JOB_OPENINGS;
    }

    return JOB_OPENINGS.filter((job) => job.dept === filter);
  }, [filter]);

  const openModal = (job) => {
    setSelectedJob(job);
    setSubmitted(false);
    setForm({
      ...EMPTY_FORM,
      techStack: job.skills,
      experience: job.exp,
    });
  };

  const closeModal = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }

  setSelectedJob(null);
  setSubmitted(false);

  document.body.style.zoom = "100%";
  };

  const handleChange = (event) => {
    const { files, name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
    setSubmitted(true);
  };

  useEffect(() => {
    if (!selectedJob) {
      document.body.style.overflow = "";
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedJob(null);
        setSubmitted(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedJob]);

  useEffect(() => {
  if (submitted) {
    document.activeElement?.blur();

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }
}, [submitted]);

  return (
    <Layouts>
      <PageBanner
        pageTitle={"Join <span class=\"mil-thin\">Our</span> Team"}
        breadTitle={"Careers"}
        anchorLabel={"View openings"}
        anchorLink={"#openings"}
      />

      <section className="mil-soft-bg">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <h2 className="mil-up mil-mb-30">
                Build Your Career at <span className="mil-thin">Vikisol</span>
              </h2>
              <p className="mil-up">
                Work with teams solving enterprise challenges across SAP, software engineering, AI,
                cyber security, cloud, testing, architecture, and agile delivery. We are hiring
                experienced professionals who can own outcomes and grow with long-term client programs.
              </p>
              <p className="mil-up" style={{ marginTop: "16px" }}>
                Prefer email? Send your resume to{" "}
                <a href="mailto:careers@vikisol.in" className="mil-accent" style={{ fontWeight: 600 }}>
                  careers@vikisol.in
                </a>
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                {[
                  { num: "500+", label: "Consultants Deployed" },
                  { num: "100+", label: "Projects Delivered" },
                  { num: "8+", label: "Countries Served" },
                  { num: `${JOB_OPENINGS.length}+`, label: "Open Positions" },
                ].map((item) => (
                  <div key={item.label} className="col-6 mil-mb-30">
                    <div className="mil-up career-stat">
                      <h2 className="mil-accent" style={{ marginBottom: "4px" }}>{item.num}</h2>
                      <p style={{ margin: 0, fontWeight: 600, color: "#333" }}>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mil-p-120-60">
          <div className="mil-soft-bg mil-p-60-60">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-7 mil-mb-30">
                <p className="mil-label mil-upper mil-accent mil-up mil-mb-15">Candidate portal</p>
                <h3 className="mil-up mil-mb-30">
                  Apply and track your progress on <span className="mil-thin">Vikisol Arena</span>
                </h3>
                <p className="mil-text mil-up">
                  Vikisol Arena is our dedicated talent platform, built so candidates can browse live openings,
                  complete role-specific assessments, and track their application status in real time instead of
                  waiting on email updates.
                </p>
              </div>
              <div className="col-lg-4 mil-mb-30 career-arena-cta">
                <Link href="/vikisol-arena" className="mil-button mil-arrow-place mil-up">
                  <span>Explore Vikisol Arena</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="openings">
        <div className="container mil-p-120-90">
          <div className="row align-items-center mil-mb-60">
            <div className="col-lg-6 mil-mb-30">
              <h2 className="mil-up">Current <span className="mil-thin">Openings</span></h2>
              <p className="mil-up" style={{ marginTop: "10px", color: "#888" }}>
                {visibleJobs.length} position{visibleJobs.length !== 1 ? "s" : ""} available
              </p>
            </div>
            <div className="col-lg-6 mil-mb-30">
              {/* <p className="mil-up" style={{ color: "#888", fontSize: "14px" }}>
                Experience range: 4+ to 12 years across engineering, testing, scrum, cloud, SAP,
                AI, security, and architecture roles.
              </p> */}
            </div>
          </div>

          <div className="mil-mb-60 career-filter-list">
            {DEPARTMENTS.map((department) => {
              const count = department === "All"
                ? JOB_OPENINGS.length
                : JOB_OPENINGS.filter((job) => job.dept === department).length;

              return (
                <button
                  key={department}
                  type="button"
                  onClick={() => setFilter(department)}
                  className={filter === department ? "career-filter active" : "career-filter"}
                >
                  {department} ({count})
                </button>
              );
            })}
          </div>

          {visibleJobs.map((job) => (
            <JobCard key={job.id} job={job} onApply={openModal} />
          ))}
        </div>
      </section>

      {selectedJob && (
        <div
          style={modalOverlayStyle}
          onClick={(event) => event.target === event.currentTarget && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="career-apply-title"
        >
          <div style={modalCardStyle}>
            <button type="button" style={closeButtonStyle} onClick={closeModal} aria-label="Close application form">
              &times;
            </button>

            {!submitted ? (
              <>
                <p className="mil-accent" style={{ marginBottom: "6px", fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}>
                  {selectedJob.dept}
                </p>
                <h3 id="career-apply-title" style={{ marginBottom: "8px" }}>
                  Apply for <span className="mil-thin">{selectedJob.title}</span>
                </h3>
                <p style={{ marginBottom: "30px", color: "#888", fontSize: "14px" }}>
                  {selectedJob.location} | {selectedJob.exp} | {selectedJob.type}
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full name *"
                        required
                        value={form.name}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address *"
                        required
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number *"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="currentCtc"
                        placeholder="Current CTC *"
                        required
                        value={form.currentCtc}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="experience"
                        placeholder="Years of experience *"
                        required
                        value={form.experience}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        name="techStack"
                        placeholder="Tech stack *"
                        required
                        value={form.techStack}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#555", marginBottom: "8px" }}>
                      Upload resume * <span style={{ fontWeight: 400, color: "#999" }}>(PDF, DOC, DOCX)</span>
                    </label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleChange}
                      style={{ fontSize: "16px", color: "#555" }}
                    />
                  </div>

                  <p style={{ fontSize: "12px", color: "#999", marginBottom: "22px" }}>
                    By submitting, you agree to the{" "}
                    <Link href="/privacy-policy" target="_blank" style={{ color: "#555", textDecoration: "underline" }}>
                      Privacy Policy
                    </Link>
                    .
                  </p>

                  <button type="submit" className="mil-button mil-arrow-place career-submit-button">
                    <span>Submit Application</span>
                    <ArrowIcon />
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", paddingTop: "36px" }}>
                <Celebration />
                <h3 style={{ marginBottom: "16px" }}>
                  Congratulations, <span className="mil-thin">{form.name || "candidate"}</span>
                </h3>
                <p style={{ marginBottom: "12px", lineHeight: 1.7 }}>
                  Your application for <strong>{selectedJob.title}</strong> has been received.
                </p>
                <p style={{ marginBottom: "12px", lineHeight: 1.7 }}>
                  Our HR team or a relevant team member will contact you within <strong>48 hours</strong>.
                </p>
                <p style={{ marginBottom: "28px", lineHeight: 1.7, fontSize: "14px", color: "#888" }}>
                  Questions in the meantime? Write to{" "}
                  <a href="mailto:careers@vikisol.in" className="mil-accent" style={{ fontWeight: 600 }}>
                    careers@vikisol.in
                  </a>
                </p>
                <button type="button" onClick={closeModal} className="mil-button mil-arrow-place">
                  <span>Close</span>
                  <ArrowIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        .career-stat {
          padding: 30px;
          background: #fff;
          border-radius: 4px;
          min-height: 154px;
        }

        .career-filter-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .career-filter {
          padding: 9px 18px;
          border-radius: 3px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          border: 2px solid #ddd;
          background: #fff;
          color: #555;
          transition: all 0.2s ease;
        }

        .career-filter.active,
        .career-filter:hover {
          border-color: #111;
          background: #111;
          color: #fff;
        }

        .career-job-card {
          border: 1px solid #eaeaea;
          border-radius: 4px;
          padding: 28px 32px 10px;
          margin-bottom: 16px;
          background: #fff;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }

        .career-job-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
          transform: translateY(-2px);
        }

        .career-apply-cell {
          text-align: right;
        }

        .career-arena-cta {
          text-align: right;
        }

        @media screen and (max-width: 991px) {
          .career-arena-cta {
            text-align: left;
          }
        }

        .career-submit-button {
          width: 100%;
          justify-content: center;
        }

        .career-celebration {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 92px;
          overflow: hidden;
          pointer-events: none;
        }

        .career-celebration span {
          position: absolute;
          top: -20px;
          width: 8px;
          height: 16px;
          background: #f7c948;
          animation: careerConfetti 1.8s ease-out infinite;
        }

        .career-celebration span:nth-child(3n) {
          background: #ff6b6b;
        }

        .career-celebration span:nth-child(4n) {
          background: #2f80ed;
        }

        .career-celebration span:nth-child(5n) {
          background: #27ae60;
        }

        .career-celebration span:nth-child(1) { left: 5%; animation-delay: 0s; }
        .career-celebration span:nth-child(2) { left: 12%; animation-delay: 0.1s; }
        .career-celebration span:nth-child(3) { left: 18%; animation-delay: 0.25s; }
        .career-celebration span:nth-child(4) { left: 24%; animation-delay: 0.05s; }
        .career-celebration span:nth-child(5) { left: 31%; animation-delay: 0.2s; }
        .career-celebration span:nth-child(6) { left: 38%; animation-delay: 0.35s; }
        .career-celebration span:nth-child(7) { left: 45%; animation-delay: 0.15s; }
        .career-celebration span:nth-child(8) { left: 52%; animation-delay: 0.3s; }
        .career-celebration span:nth-child(9) { left: 58%; animation-delay: 0.08s; }
        .career-celebration span:nth-child(10) { left: 64%; animation-delay: 0.22s; }
        .career-celebration span:nth-child(11) { left: 70%; animation-delay: 0.4s; }
        .career-celebration span:nth-child(12) { left: 76%; animation-delay: 0.12s; }
        .career-celebration span:nth-child(13) { left: 82%; animation-delay: 0.28s; }
        .career-celebration span:nth-child(14) { left: 88%; animation-delay: 0.18s; }
        .career-celebration span:nth-child(15) { left: 93%; animation-delay: 0.33s; }
        .career-celebration span:nth-child(16) { left: 97%; animation-delay: 0.24s; }
        .career-celebration span:nth-child(17) { left: 8%; animation-delay: 0.45s; }
        .career-celebration span:nth-child(18) { left: 86%; animation-delay: 0.5s; }

        @keyframes careerConfetti {
          0% {
            opacity: 0;
            transform: translateY(0) rotate(0deg);
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(115px) rotate(260deg);
          }
        }

        @media screen and (max-width: 991px) {
          .career-apply-cell {
            text-align: left;
          }
        }

        @media screen and (max-width: 575px) {
          .career-job-card {
            padding: 24px 22px 8px;
          }
        }
      `}</style>
    </Layouts>
  );
}
