import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "48px" }}>
    <h4 style={{ marginBottom: "16px", fontWeight: 700 }}>{title}</h4>
    {children}
  </div>
);

export default function PrivacyPolicy() {
  return (
    <Layouts>
      <PageBanner
        pageTitle={"Privacy <span className=\"mil-thin\">Policy</span>"}
        breadTitle={"Privacy Policy"}
        anchorLabel={"Read policy"}
        anchorLink={"#policy"}
      />

      <section id="policy">
        <div className="container mil-p-120-90">
          <div className="row justify-content-center">
            <div className="col-lg-9">

              <p style={{ color: "#888", marginBottom: "56px", fontSize: "14px" }}>
                Effective date: 1 January 2024 &nbsp;·&nbsp; Last updated: June 2026
              </p>

              <Section title="1. About This Policy">
                <p style={{ marginBottom: "16px" }}>
                  Vikisol Technologies Private Limited (&ldquo;Vikisol&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, store, and protect your personal data when you visit our website at <Link href="/" style={{ color: "inherit", textDecoration: "underline" }}>vikisol.in</Link> or engage with us for technology consulting, staffing, or workforce solutions services.
                </p>
                <p>
                  Please read this policy carefully. If you disagree with its terms, please discontinue use of our website and services.
                </p>
              </Section>

              <Section title="2. Information We Collect">
                <p style={{ marginBottom: "12px" }}>We may collect the following categories of personal information:</p>
                <ul style={{ paddingLeft: "24px", lineHeight: "2" }}>
                  <li><strong>Identity Data:</strong> Full name, job title, organisation name.</li>
                  <li><strong>Contact Data:</strong> Email address, telephone number, postal address.</li>
                  <li><strong>Professional Data:</strong> CV / resume, employment history, skills, current CTC, and other information you provide during job applications.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type and version, pages visited, time zone, and other standard web analytics data collected automatically via cookies.</li>
                  <li><strong>Communication Data:</strong> Any correspondence you send us via contact forms, email, or other channels.</li>
                </ul>
              </Section>

              <Section title="3. How We Use Your Information">
                <p style={{ marginBottom: "12px" }}>We use your personal data for the following lawful purposes:</p>
                <ul style={{ paddingLeft: "24px", lineHeight: "2" }}>
                  <li>To respond to your enquiries and provide information about our services.</li>
                  <li>To process and evaluate job applications submitted through our Careers page.</li>
                  <li>To deliver contracted technology consulting and workforce solutions services.</li>
                  <li>To send service-related communications, proposals, and updates (with your consent).</li>
                  <li>To improve our website, products, and services through analytics.</li>
                  <li>To comply with legal obligations under applicable Indian and international law.</li>
                </ul>
              </Section>

              <Section title="4. Legal Basis for Processing (GDPR)">
                <p>
                  For individuals in the European Economic Area (EEA) or United Kingdom, our processing of your personal data is based on: (a) your consent where provided; (b) the performance of a contract to which you are a party; (c) compliance with a legal obligation; or (d) our legitimate interests in operating and improving our business, provided your rights and interests are not overridden.
                </p>
              </Section>

              <Section title="5. Data Retention">
                <p>
                  We retain personal data only as long as necessary for the purposes for which it was collected, or as required by applicable law. Job application data is retained for up to 12 months from the date of application. Client and engagement data is retained for 7 years in line with Indian statutory requirements. Website analytics data is retained for 26 months.
                </p>
              </Section>

              <Section title="6. Data Sharing and Disclosure">
                <p style={{ marginBottom: "12px" }}>We do not sell your personal data. We may share data with:</p>
                <ul style={{ paddingLeft: "24px", lineHeight: "2" }}>
                  <li><strong>Service Providers:</strong> Trusted third-party service providers (cloud hosting, analytics, email platforms) who process data on our behalf under strict data processing agreements.</li>
                  <li><strong>Professional Advisors:</strong> Legal, accounting, and audit professionals where required.</li>
                  <li><strong>Regulatory Authorities:</strong> Law enforcement or government bodies where legally required.</li>
                  <li><strong>Group Companies:</strong> Other entities within the Vikisol group where relevant to delivering services.</li>
                </ul>
              </Section>

              <Section title="7. Data Security">
                <p>
                  We implement appropriate technical and organisational security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include encrypted data transmission (HTTPS), access controls, and regular security reviews. However, no transmission over the internet is completely secure; you provide data at your own risk.
                </p>
              </Section>

              <Section title="8. Your Rights">
                <p style={{ marginBottom: "12px" }}>Depending on your location, you may have the following rights regarding your personal data:</p>
                <ul style={{ paddingLeft: "24px", lineHeight: "2" }}>
                  <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data where there is no legitimate reason for continued processing.</li>
                  <li><strong>Restriction:</strong> Request that we limit processing of your data in certain circumstances.</li>
                  <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</li>
                  <li><strong>Objection:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
                  <li><strong>Withdrawal of Consent:</strong> Withdraw consent at any time where processing is based on consent.</li>
                </ul>
                <p style={{ marginTop: "12px" }}>
                  To exercise any of these rights, contact us at <a href="mailto:connect@vikisol.in" style={{ color: "inherit", textDecoration: "underline" }}>connect@vikisol.in</a>.
                </p>
              </Section>

              <Section title="9. Cookies">
                <p>
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience. For detailed information about the cookies we use and how to manage them, please see our{" "}
                  <Link href="/cookie-policy" style={{ color: "inherit", textDecoration: "underline" }}>Cookie Policy</Link>.
                </p>
              </Section>

              <Section title="10. Third-Party Links">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </Section>

              <Section title="11. Children's Privacy">
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately.
                </p>
              </Section>

              <Section title="12. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in law or our practices. We will post the updated policy on this page with a revised &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.
                </p>
              </Section>

              <Section title="13. Contact Us">
                <p style={{ marginBottom: "8px" }}>
                  For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
                </p>
                <address style={{ fontStyle: "normal", lineHeight: "2" }}>
                  <strong>Vikisol Technologies Private Limited</strong><br />
                  Maximus Towers, Mindspace IT Park<br />
                  Hi-Tech City, Hyderabad — 500081<br />
                  Telangana, India<br />
                  Email: <a href="mailto:connect@vikisol.in" style={{ color: "inherit", textDecoration: "underline" }}>connect@vikisol.in</a><br />
                  Phone: <a href="tel:+919063615796" style={{ color: "inherit", textDecoration: "underline" }}>+91 9063615796</a>
                </address>
              </Section>

            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}
