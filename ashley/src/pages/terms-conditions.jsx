import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "48px" }}>
    <h4 style={{ marginBottom: "16px", fontWeight: 700 }}>{title}</h4>
    {children}
  </div>
);

export default function TermsConditions() {
  return (
    <Layouts>
      <PageBanner
        pageTitle={"Terms &amp; <span className=\"mil-thin\">Conditions</span>"}
        breadTitle={"Terms & Conditions"}
        anchorLabel={"Read terms"}
        anchorLink={"#terms"}
      />

      <section id="terms">
        <div className="container mil-p-120-90">
          <div className="row justify-content-center">
            <div className="col-lg-9">

              <p style={{ color: "#888", marginBottom: "56px", fontSize: "14px" }}>
                Effective date: 1 January 2024 &nbsp;·&nbsp; Last updated: June 2026
              </p>

              <Section title="1. Agreement to Terms">
                <p style={{ marginBottom: "16px" }}>
                  These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the website, products, and services of Vikisol Technologies Private Limited (&ldquo;Vikisol&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), including our website at vikisol.in.
                </p>
                <p>
                  By accessing or using our website or engaging our services, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any part of these Terms, please refrain from using our website or services.
                </p>
              </Section>

              <Section title="2. Services">
                <p style={{ marginBottom: "12px" }}>
                  Vikisol Technologies provides technology consulting, software engineering, SAP implementation, AI &amp; automation, cybersecurity, cloud infrastructure, and workforce solutions services. The specific scope, deliverables, timelines, and pricing for any engagement shall be defined in a separate Statement of Work (SOW) or Master Service Agreement (MSA) executed between Vikisol and the client.
                </p>
                <p>
                  Website content is for general informational purposes only and does not constitute a legally binding offer to provide any particular service.
                </p>
              </Section>

              <Section title="3. Intellectual Property">
                <p style={{ marginBottom: "12px" }}>
                  All content on this website — including but not limited to text, graphics, logos, images, icons, designs, and software — is the exclusive property of Vikisol Technologies or its content licensors and is protected by applicable Indian and international intellectual property laws.
                </p>
                <p style={{ marginBottom: "12px" }}>
                  You may not reproduce, distribute, modify, adapt, transmit, display, publish, or create derivative works from any content on this website without our prior written consent.
                </p>
                <p>
                  Intellectual property rights pertaining to deliverables produced under client engagements shall be governed by the terms of the relevant MSA or SOW.
                </p>
              </Section>

              <Section title="4. User Conduct">
                <p style={{ marginBottom: "12px" }}>When using our website, you agree not to:</p>
                <ul style={{ paddingLeft: "24px", lineHeight: "2" }}>
                  <li>Violate any applicable laws or regulations.</li>
                  <li>Transmit any harmful, offensive, or unlawful content.</li>
                  <li>Attempt to gain unauthorised access to any part of our systems or networks.</li>
                  <li>Use our website for any fraudulent, deceptive, or malicious purpose.</li>
                  <li>Collect or harvest any personally identifiable information from our website without authorisation.</li>
                  <li>Interfere with the proper functioning of our website or infrastructure.</li>
                </ul>
              </Section>

              <Section title="5. Confidentiality">
                <p>
                  Any information disclosed by either party in the course of an engagement that is identified as confidential or that would reasonably be understood to be confidential given its nature shall be kept confidential and used only for the purposes of the engagement. Specific confidentiality obligations shall be detailed in the MSA or SOW, and may survive termination of the engagement.
                </p>
              </Section>

              <Section title="6. Disclaimers">
                <p style={{ marginBottom: "12px" }}>
                  Our website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
                </p>
                <p>
                  Case studies, testimonials, and project outcomes described on this website are based on historical engagements. Results may vary depending on individual client circumstances and project scope.
                </p>
              </Section>

              <Section title="7. Limitation of Liability">
                <p style={{ marginBottom: "12px" }}>
                  To the maximum extent permitted by applicable law, Vikisol Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of this website or our services, even if we have been advised of the possibility of such damages.
                </p>
                <p>
                  Our total aggregate liability arising out of or in connection with these Terms shall not exceed the amount paid by you (if any) to Vikisol Technologies in the twelve (12) months preceding the event giving rise to the claim.
                </p>
              </Section>

              <Section title="8. Indemnification">
                <p>
                  You agree to indemnify and hold harmless Vikisol Technologies and its officers, directors, employees, and agents from and against any claims, damages, losses, costs, and expenses (including reasonable legal fees) arising out of your violation of these Terms, misuse of the website, or infringement of any third-party rights.
                </p>
              </Section>

              <Section title="9. Third-Party Links">
                <p>
                  Our website may contain links to third-party websites for convenience. These links do not imply endorsement by Vikisol Technologies. We are not responsible for the content, accuracy, or practices of third-party sites and recommend that you review their respective terms and policies before engaging.
                </p>
              </Section>

              <Section title="10. Privacy">
                <p>
                  Your use of our website is also governed by our{" "}
                  <Link href="/privacy-policy" style={{ color: "inherit", textDecoration: "underline" }}>Privacy Policy</Link>, which is incorporated into these Terms by reference.
                </p>
              </Section>

              <Section title="11. Governing Law and Jurisdiction">
                <p>
                  These Terms and any disputes arising out of or in connection with them shall be governed by the laws of India. You irrevocably consent to the exclusive jurisdiction of the courts located in Hyderabad, Telangana, India for the resolution of any disputes arising under these Terms.
                </p>
              </Section>

              <Section title="12. Modifications to Terms">
                <p>
                  We reserve the right to update or modify these Terms at any time. Changes become effective upon posting to this page with a revised &ldquo;Last updated&rdquo; date. Your continued use of the website following such changes constitutes your acceptance of the revised Terms.
                </p>
              </Section>

              <Section title="13. Termination">
                <p>
                  We reserve the right to suspend or terminate your access to our website at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, third parties, or the public interest.
                </p>
              </Section>

              <Section title="14. Entire Agreement">
                <p>
                  These Terms, together with our Privacy Policy and any applicable MSA or SOW, constitute the entire agreement between you and Vikisol Technologies with respect to your use of our website and services, and supersede all prior agreements, representations, and understandings.
                </p>
              </Section>

              <Section title="15. Contact Us">
                <p style={{ marginBottom: "8px" }}>
                  For questions about these Terms and Conditions:
                </p>
                <address style={{ fontStyle: "normal", lineHeight: "2" }}>
                  <strong>Vikisol Technologies Private Limited</strong><br />
                  Maximus Towers, Mindspace IT Park<br />
                  Hi-Tech City, Hyderabad — 500081<br />
                  Telangana, India<br />
                  Email: <a href="mailto:connect@vikisol.in" style={{ color: "inherit", textDecoration: "underline" }}>connect@vikisol.in</a><br />
                  Phone: <a href="tel:+917989595796" style={{ color: "inherit", textDecoration: "underline" }}>+91 7989595796</a>
                </address>
              </Section>

            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}
