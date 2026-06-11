import { useState, useEffect } from 'react';
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const JOBS = [
  // SAP Practice
  { id: 1,  title: "SAP S/4HANA Functional Consultant",  dept: "SAP Practice",          location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "SAP S/4HANA, FICO, MM, SD, Implementation" },
  { id: 2,  title: "SAP FICO Consultant",                 dept: "SAP Practice",          location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "SAP FI, CO, GL, AP, AR, Asset Accounting" },
  { id: 3,  title: "SAP MM / SD Consultant",              dept: "SAP Practice",          location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "SAP MM, SD, Procurement, Sales & Distribution" },
  { id: 4,  title: "SAP ABAP Developer",                  dept: "SAP Practice",          location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "SAP ABAP, BAPI, BADI, OData, Enhancement Framework" },
  { id: 5,  title: "SAP Basis Administrator",             dept: "SAP Practice",          location: "Hyderabad",          exp: "3+ Years", type: "Full-time", skills: "SAP Basis, System Administration, Transport Management" },
  { id: 6,  title: "SAP SuccessFactors Consultant",       dept: "SAP Practice",          location: "Hyderabad / Remote", exp: "3+ Years", type: "Full-time", skills: "SuccessFactors, Employee Central, Recruitment, Learning" },
  { id: 7,  title: "SAP Fiori / UI5 Developer",           dept: "SAP Practice",          location: "Hyderabad / Remote", exp: "3+ Years", type: "Full-time", skills: "SAP Fiori, SAPUI5, OData Services, BTP" },
  { id: 8,  title: "SAP Integration Specialist",          dept: "SAP Practice",          location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "SAP Integration Suite, CPI, PI/PO, API Management" },
  { id: 9,  title: "SAP BTP Developer",                   dept: "SAP Practice",          location: "Hyderabad / Remote", exp: "2+ Years", type: "Full-time", skills: "SAP BTP, CAP, Node.js, Cloud Foundry, Extension Suite" },
  { id: 10, title: "SAP Project Manager",                 dept: "SAP Practice",          location: "Hyderabad",          exp: "7+ Years", type: "Full-time", skills: "SAP Implementation, Agile, PRINCE2, Stakeholder Management" },
  // Software Engineering
  { id: 11, title: "React.js Developer",                  dept: "Software Engineering",  location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "React.js, Redux, TypeScript, REST APIs, Jest" },
  { id: 12, title: "Node.js Developer",                   dept: "Software Engineering",  location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "Node.js, Express.js, REST APIs, MongoDB, PostgreSQL" },
  { id: 13, title: "Java Full Stack Developer",           dept: "Software Engineering",  location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "Java, Spring Boot, React / Angular, Microservices, Docker" },
  { id: 14, title: "Senior Java Developer",               dept: "Software Engineering",  location: "Hyderabad / Remote", exp: "5+ Years", type: "Full-time", skills: "Java, Spring Boot, Microservices, Kafka, AWS" },
  { id: 15, title: ".NET Developer",                      dept: "Software Engineering",  location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "C#, .NET Core, ASP.NET, SQL Server, Azure" },
  { id: 16, title: "Angular Developer",                   dept: "Software Engineering",  location: "Hyderabad / Remote", exp: "3+ Years", type: "Full-time", skills: "Angular, TypeScript, RxJS, REST APIs, Unit Testing" },
  { id: 17, title: "Python Developer",                    dept: "Software Engineering",  location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "Python, Django / FastAPI, PostgreSQL, REST APIs" },
  { id: 18, title: "React Native Developer",              dept: "Software Engineering",  location: "Hyderabad / Remote", exp: "3+ Years", type: "Full-time", skills: "React Native, iOS, Android, Expo, REST APIs" },
  { id: 19, title: "Full Stack Developer",                dept: "Software Engineering",  location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "React / Angular, Node.js / Java, PostgreSQL, AWS" },
  { id: 20, title: "QA Automation Engineer",              dept: "Software Engineering",  location: "Hyderabad / Remote", exp: "3+ Years", type: "Full-time", skills: "Selenium, Cypress, JIRA, API Testing, CI/CD Pipelines" },
  // AI & Automation
  { id: 21, title: "AI / ML Engineer",                    dept: "AI & Automation",       location: "Hyderabad / Remote", exp: "3+ Years", type: "Full-time", skills: "Python, TensorFlow / PyTorch, ML Algorithms, MLOps" },
  { id: 22, title: "Data Scientist",                      dept: "AI & Automation",       location: "Hyderabad / Remote", exp: "3+ Years", type: "Full-time", skills: "Python, Statistics, Machine Learning, Power BI / Tableau" },
  { id: 23, title: "Generative AI / LLM Engineer",        dept: "AI & Automation",       location: "Hyderabad / Remote", exp: "2+ Years", type: "Full-time", skills: "LLMs, LangChain, RAG, OpenAI API, Vector Databases" },
  { id: 24, title: "RPA Developer (UiPath)",               dept: "AI & Automation",       location: "Hyderabad / Remote", exp: "3+ Years", type: "Full-time", skills: "UiPath, Blue Prism, Power Automate, Process Mining" },
  { id: 25, title: "Data Engineer",                       dept: "AI & Automation",       location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "Python, Spark, Kafka, Airflow, AWS / Azure Data Services" },
  { id: 26, title: "Business Intelligence Developer",     dept: "AI & Automation",       location: "Hyderabad / Remote", exp: "3+ Years", type: "Full-time", skills: "Power BI, Tableau, SQL, Data Modelling, ETL Pipelines" },
  // Cyber Security
  { id: 27, title: "Cybersecurity Analyst",               dept: "Cyber Security",        location: "Hyderabad",          exp: "3+ Years", type: "Full-time", skills: "SIEM, Threat Intelligence, Incident Response, VAPT" },
  { id: 28, title: "Penetration Tester",                  dept: "Cyber Security",        location: "Hyderabad / Remote", exp: "3+ Years", type: "Full-time", skills: "VAPT, Burp Suite, Metasploit, OWASP, CEH / OSCP" },
  { id: 29, title: "Security Operations Engineer",        dept: "Cyber Security",        location: "Hyderabad",          exp: "3+ Years", type: "Full-time", skills: "SOC, SIEM, Splunk, ELK Stack, Incident Management" },
  { id: 30, title: "Cloud Security Architect",            dept: "Cyber Security",        location: "Hyderabad / Remote", exp: "5+ Years", type: "Full-time", skills: "AWS / Azure Security, Zero Trust, IAM, CSPM, Compliance" },
  { id: 31, title: "GRC Consultant",                      dept: "Cyber Security",        location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "ISO 27001, SOC 2, GDPR, Risk Assessment, Compliance Frameworks" },
  { id: 32, title: "Network Security Engineer",           dept: "Cyber Security",        location: "Hyderabad",          exp: "4+ Years", type: "Full-time", skills: "Firewalls, IDS/IPS, VPN, Network Monitoring, Cisco" },
  // Cloud & DevOps
  { id: 33, title: "AWS Cloud Architect",                 dept: "Cloud & DevOps",        location: "Hyderabad / Remote", exp: "5+ Years", type: "Full-time", skills: "AWS, Cloud Architecture, Terraform, VPC, EKS, Lambda" },
  { id: 34, title: "Azure Cloud Engineer",                dept: "Cloud & DevOps",        location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "Microsoft Azure, ARM / Bicep, AKS, Azure DevOps, Monitoring" },
  { id: 35, title: "DevOps Engineer",                     dept: "Cloud & DevOps",        location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "Jenkins, GitHub Actions, Docker, Kubernetes, Terraform" },
  { id: 36, title: "Kubernetes / Container Specialist",   dept: "Cloud & DevOps",        location: "Hyderabad / Remote", exp: "3+ Years", type: "Full-time", skills: "Kubernetes, Docker, Helm, ArgoCD, Service Mesh" },
  { id: 37, title: "Site Reliability Engineer (SRE)",     dept: "Cloud & DevOps",        location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "SRE, Observability, Incident Management, Go / Python, Prometheus" },
  { id: 38, title: "Infrastructure as Code Engineer",     dept: "Cloud & DevOps",        location: "Hyderabad / Remote", exp: "3+ Years", type: "Full-time", skills: "Terraform, Ansible, AWS CloudFormation, Azure Bicep" },
  // Talent Solutions
  { id: 39, title: "Technical Recruiter — SAP",           dept: "Talent Solutions",      location: "Hyderabad",          exp: "3+ Years", type: "Full-time", skills: "SAP Recruitment, Boolean Search, Niche Hiring, Talent Acquisition" },
  { id: 40, title: "Technical Recruiter — IT",            dept: "Talent Solutions",      location: "Hyderabad",          exp: "3+ Years", type: "Full-time", skills: "IT Staffing, Technology Hiring, Job Portals, Vendor Management" },
  { id: 41, title: "Staffing Manager",                    dept: "Talent Solutions",      location: "Hyderabad",          exp: "5+ Years", type: "Full-time", skills: "Talent Management, Client Relations, SLA Management, Team Leadership" },
  // Delivery & Management
  { id: 42, title: "Delivery Manager",                    dept: "Delivery & Management", location: "Hyderabad",          exp: "8+ Years", type: "Full-time", skills: "Project Delivery, Agile, Client Management, P&L, Cross-functional Teams" },
  { id: 43, title: "Project Manager — IT",                dept: "Delivery & Management", location: "Hyderabad / Remote", exp: "5+ Years", type: "Full-time", skills: "PMP / PRINCE2, Agile / Scrum, Risk Management, Stakeholder Communication" },
  { id: 44, title: "Business Development Manager",        dept: "Delivery & Management", location: "Hyderabad",          exp: "5+ Years", type: "Full-time", skills: "IT Sales, Enterprise Accounts, Proposal Writing, CRM Tools" },
  { id: 45, title: "Pre-Sales Consultant",                dept: "Delivery & Management", location: "Hyderabad / Remote", exp: "4+ Years", type: "Full-time", skills: "RFP / RFI, Solution Design, Client Presentations, Technology Consulting" },
];

const DEPTS = ["All", "SAP Practice", "Software Engineering", "AI & Automation", "Cyber Security", "Cloud & DevOps", "Talent Solutions", "Delivery & Management"];

const EMPTY_FORM = { name: "", email: "", phone: "", ctc: "", resume: null };

const tagStyle = {
  display: "inline-block",
  padding: "3px 10px",
  borderRadius: "3px",
  fontSize: "12px",
  fontWeight: 600,
  marginRight: "8px",
  marginBottom: "4px",
  background: "#f4f4f4",
  color: "#444",
};

const modalOverlay = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(17, 17, 17, 0.80)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  padding: "20px",
};

const modalCard = {
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  padding: "48px 40px",
  width: "100%",
  maxWidth: "600px",
  maxHeight: "90vh",
  overflowY: "auto",
  position: "relative",
};

const closeBtnStyle = {
  position: "absolute",
  top: "16px",
  right: "20px",
  background: "none",
  border: "none",
  fontSize: "28px",
  cursor: "pointer",
  lineHeight: 1,
  color: "#333",
  fontWeight: 300,
};

const inputStyle = { marginBottom: "16px", width: "100%", display: "block" };

export default function Careers() {
  const [filter, setFilter]         = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted]   = useState(false);
  const [form, setForm]             = useState(EMPTY_FORM);

  const visible = filter === "All" ? JOBS : JOBS.filter(j => j.dept === filter);

  const openModal = (job) => {
    setSelectedJob(job);
    setSubmitted(false);
    setForm(EMPTY_FORM);
  };

  const closeModal = () => setSelectedJob(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedJob]);

  return (
    <Layouts>
      <PageBanner
        pageTitle={"Join Our <span className=\"mil-thin\">Team</span>"}
        breadTitle={"Careers"}
        anchorLabel={"View openings"}
        anchorLink={"#openings"}
      />

      {/* Why Vikisol */}
      <section className="mil-soft-bg">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <h2 className="mil-up mil-mb-30">
                Build Your Career at <span className="mil-thin">Vikisol</span>
              </h2>
              <p className="mil-up">
                Join a fast-growing global technology consulting firm working at the intersection of SAP, AI, Cybersecurity, Cloud, and Workforce Solutions. We invest in our people, celebrate expertise, and provide the platform to work on meaningful enterprise transformation programmes across India and international markets.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                {[
                  { num: "500+", label: "Consultants Deployed" },
                  { num: "100+", label: "Projects Delivered" },
                  { num: "8+",   label: "Countries of Operation" },
                  { num: "45+",  label: "Open Positions" },
                ].map((s, i) => (
                  <div key={i} className="col-6 mil-mb-30">
                    <div className="mil-up" style={{ padding: "30px", background: "#fff", borderRadius: "4px" }}>
                      <h2 className="mil-accent" style={{ marginBottom: "4px" }}>{s.num}</h2>
                      <p style={{ margin: 0, fontWeight: 600, color: "#333" }}>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="openings">
        <div className="container mil-p-120-90">

          {/* Header */}
          <div className="row align-items-center mil-mb-60">
            <div className="col-lg-6 mil-mb-30">
              <h2 className="mil-up">Current <span className="mil-thin">Openings</span></h2>
              <p className="mil-up" style={{ marginTop: "10px", color: "#888" }}>
                {visible.length} position{visible.length !== 1 ? "s" : ""} available
              </p>
            </div>
            <div className="col-lg-6 mil-mb-30">
              <p className="mil-up" style={{ color: "#888", fontSize: "14px" }}>
                Can&apos;t find what you&apos;re looking for?{" "}
                <a href="mailto:careers@vikisol.in" style={{ color: "inherit", textDecoration: "underline" }}>
                  Send us your CV
                </a>
              </p>
            </div>
          </div>

          {/* Department Filters */}
          <div className="mil-mb-60" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {DEPTS.map(d => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "3px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "2px solid",
                  borderColor: filter === d ? "#000" : "#ddd",
                  backgroundColor: filter === d ? "#000" : "#fff",
                  color: filter === d ? "#fff" : "#555",
                  transition: "all .2s",
                }}
              >
                {d === "All" ? `All (${JOBS.length})` : `${d} (${JOBS.filter(j => j.dept === d).length})`}
              </button>
            ))}
          </div>

          {/* Jobs List */}
          {visible.map(job => (
            <div
              key={job.id}
              className="mil-up"
              style={{
                border: "1px solid #eaeaea",
                borderRadius: "4px",
                padding: "28px 32px",
                marginBottom: "16px",
                backgroundColor: "#fff",
                transition: "box-shadow .2s",
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              <div className="row align-items-center">
                <div className="col-lg-5 mil-mb-20">
                  <span style={{ ...tagStyle, background: "#111", color: "#fff", fontSize: "11px" }}>{job.dept}</span>
                  <h5 style={{ margin: "10px 0 8px", fontSize: "17px", fontWeight: 700 }}>{job.title}</h5>
                  <p style={{ margin: 0, fontSize: "13px", color: "#888" }}>{job.skills}</p>
                </div>
                <div className="col-lg-4 mil-mb-20">
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    <span style={tagStyle}>📍 {job.location}</span>
                    <span style={tagStyle}>⏱ {job.exp}</span>
                    <span style={{ ...tagStyle, background: "#e8f5e9", color: "#2e7d32" }}>{job.type}</span>
                  </div>
                </div>
                <div className="col-lg-3 mil-mb-20" style={{ textAlign: "right" }}>
                  <button
                    onClick={() => openModal(job)}
                    className="mil-button mil-arrow-place"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <span>Apply Now</span>
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div style={modalOverlay} onClick={e => e.target === e.currentTarget && closeModal()}>
          <div style={modalCard}>
            <button style={closeBtnStyle} onClick={closeModal} aria-label="Close">×</button>

            {!submitted ? (
              <>
                <p style={{ marginBottom: "4px", fontSize: "13px", color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                  {selectedJob.dept}
                </p>
                <h3 style={{ marginBottom: "6px" }}>
                  Apply for <span style={{ fontWeight: 300 }}>{selectedJob.title}</span>
                </h3>
                <p style={{ marginBottom: "32px", color: "#888", fontSize: "14px" }}>
                  {selectedJob.location} &nbsp;·&nbsp; {selectedJob.exp} &nbsp;·&nbsp; {selectedJob.type}
                </p>

                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    required
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="ctc"
                    placeholder="Current CTC (e.g. 12 LPA)"
                    value={form.ctc}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <div style={{ marginBottom: "28px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#555", marginBottom: "8px" }}>
                      Upload Resume * &nbsp;<span style={{ fontWeight: 400, color: "#aaa" }}>(PDF, DOC, DOCX — max 5 MB)</span>
                    </label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleChange}
                      style={{ fontSize: "14px", color: "#555" }}
                    />
                  </div>
                  <p style={{ fontSize: "12px", color: "#aaa", marginBottom: "20px" }}>
                    By submitting this form you agree to our{" "}
                    <a href="/privacy-policy" target="_blank" style={{ color: "#888", textDecoration: "underline" }}>Privacy Policy</a>.
                  </p>
                  <button type="submit" className="mil-button mil-arrow-place" style={{ width: "100%", justifyContent: "center" }}>
                    <span>Submit Application</span>
                    <ArrowIcon />
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: "72px", marginBottom: "20px", lineHeight: 1 }}>🎉</div>
                <h3 style={{ marginBottom: "16px" }}>Application <span style={{ fontWeight: 300 }}>Submitted!</span></h3>
                <p style={{ marginBottom: "12px", lineHeight: 1.7 }}>
                  Thank you for applying for the <strong>{selectedJob.title}</strong> position at Vikisol Technologies.
                </p>
                <p style={{ marginBottom: "12px", lineHeight: 1.7 }}>
                  Our HR team will carefully review your profile and one of our recruiters will reach out to you within{" "}
                  <strong>48 hours</strong>. Please sit back and relax — we look forward to speaking with you!
                </p>
                {form.email && (
                  <p style={{ color: "#aaa", fontSize: "13px", marginBottom: "32px" }}>
                    A confirmation will be sent to <strong>{form.email}</strong>
                  </p>
                )}
                <button onClick={closeModal} className="mil-button mil-arrow-place" style={{ display: "inline-flex" }}>
                  <span>Close</span>
                  <ArrowIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </Layouts>
  );
}
