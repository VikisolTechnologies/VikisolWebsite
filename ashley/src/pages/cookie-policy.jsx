import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "48px" }}>
    <h4 style={{ marginBottom: "16px", fontWeight: 700 }}>{title}</h4>
    {children}
  </div>
);

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "12px",
  fontSize: "14px",
};

const thStyle = {
  background: "#111",
  color: "#fff",
  padding: "12px 16px",
  textAlign: "left",
  fontWeight: 600,
};

const tdStyle = {
  padding: "12px 16px",
  borderBottom: "1px solid #eee",
  verticalAlign: "top",
};

export default function CookiePolicy() {
  return (
    <Layouts>
      <PageBanner
        pageTitle={"Cookie <span className=\"mil-thin\">Policy</span>"}
        breadTitle={"Cookie Policy"}
        anchorLabel={"Read policy"}
        anchorLink={"#cookies"}
      />

      <section id="cookies">
        <div className="container mil-p-120-90">
          <div className="row justify-content-center">
            <div className="col-lg-9">

              <p style={{ color: "#888", marginBottom: "56px", fontSize: "14px" }}>
                Effective date: 1 January 2024 &nbsp;·&nbsp; Last updated: June 2026
              </p>

              <Section title="1. What Are Cookies?">
                <p style={{ marginBottom: "16px" }}>
                  Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners.
                </p>
                <p>
                  This Cookie Policy explains how Vikisol Technologies Private Limited (&ldquo;Vikisol&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) uses cookies and similar tracking technologies on our website at vikisol.in, and what choices you have about how cookies are used.
                </p>
              </Section>

              <Section title="2. How We Use Cookies">
                <p>
                  We use cookies to: (a) ensure the website functions properly; (b) understand how visitors use our website so we can improve the experience; (c) remember your preferences; and (d) analyse our marketing and promotional efforts.
                </p>
              </Section>

              <Section title="3. Types of Cookies We Use">
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Category</th>
                      <th style={thStyle}>Purpose</th>
                      <th style={thStyle}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}><strong>Strictly Necessary</strong></td>
                      <td style={tdStyle}>Essential for the website to function. These cannot be switched off. They are set in response to actions you take such as setting privacy preferences, logging in, or filling in forms.</td>
                      <td style={tdStyle}>Session</td>
                    </tr>
                    <tr>
                      <td style={{ ...tdStyle, background: "#fafafa" }}><strong>Performance / Analytics</strong></td>
                      <td style={{ ...tdStyle, background: "#fafafa" }}>Help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics for this purpose.</td>
                      <td style={{ ...tdStyle, background: "#fafafa" }}>Up to 2 years</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>Functionality</strong></td>
                      <td style={tdStyle}>Allow the website to remember choices you make (such as your region or language preference) to provide a more personalised experience.</td>
                      <td style={tdStyle}>Up to 1 year</td>
                    </tr>
                    <tr>
                      <td style={{ ...tdStyle, background: "#fafafa" }}><strong>Targeting / Marketing</strong></td>
                      <td style={{ ...tdStyle, background: "#fafafa" }}>May be set by our advertising partners to build a profile of your interests and show relevant ads on other sites. They do not store directly personal information but uniquely identify your browser and device.</td>
                      <td style={{ ...tdStyle, background: "#fafafa" }}>Up to 2 years</td>
                    </tr>
                  </tbody>
                </table>
              </Section>

              <Section title="4. Third-Party Cookies">
                <p style={{ marginBottom: "12px" }}>
                  Some cookies on our website are set by third-party services. We use the following third-party tools which may set cookies on your device:
                </p>
                <ul style={{ paddingLeft: "24px", lineHeight: "2" }}>
                  <li><strong>Google Analytics</strong> — website usage analytics (Google LLC, USA). <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>Google Privacy Policy</a></li>
                  <li><strong>LinkedIn Insight Tag</strong> — campaign analytics and audience insights for LinkedIn Ads (LinkedIn Corporation, USA).</li>
                  <li><strong>Google Tag Manager</strong> — tag management and script delivery (Google LLC, USA).</li>
                </ul>
                <p style={{ marginTop: "12px" }}>
                  These third parties have their own privacy and cookie policies. We recommend reviewing them separately.
                </p>
              </Section>

              <Section title="5. Managing Cookies">
                <p style={{ marginBottom: "16px" }}>
                  You can control and manage cookies in several ways. Please note that removing or blocking cookies may impact your user experience and parts of our website may no longer be fully accessible.
                </p>
                <p style={{ marginBottom: "12px" }}><strong>Browser Settings</strong></p>
                <p style={{ marginBottom: "16px" }}>
                  Most browsers allow you to view, manage, block, and delete cookies. To find out how to manage cookies in your specific browser, visit its help documentation:
                </p>
                <ul style={{ paddingLeft: "24px", lineHeight: "2" }}>
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>Mozilla Firefox</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>Microsoft Edge</a></li>
                  <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>Apple Safari</a></li>
                </ul>
                <p style={{ marginTop: "16px" }}>
                  <strong>Opt-out of Google Analytics:</strong> You can install the{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
                    Google Analytics Opt-out Browser Add-on
                  </a>{" "}
                  to prevent your data from being used by Google Analytics across all websites.
                </p>
              </Section>

              <Section title="6. Do Not Track">
                <p>
                  Some browsers have a &ldquo;Do Not Track&rdquo; (DNT) feature that signals to websites that you do not want your online activity tracked. Our website does not currently respond to DNT signals as there is no consistent industry standard for compliance. You can manage your tracking preferences through your browser's cookie settings described above.
                </p>
              </Section>

              <Section title="7. Changes to This Policy">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies. The date at the top of this policy indicates when it was last revised.
                </p>
              </Section>

              <Section title="8. More Information">
                <p style={{ marginBottom: "8px" }}>
                  For more information about how we process personal data, please read our{" "}
                  <Link href="/privacy-policy" style={{ color: "inherit", textDecoration: "underline" }}>Privacy Policy</Link>. If you have any questions about our use of cookies, contact us:
                </p>
                <address style={{ fontStyle: "normal", lineHeight: "2", marginTop: "16px" }}>
                  <strong>Vikisol Technologies Private Limited</strong><br />
                  Maximus Towers, Mindspace IT Park<br />
                  Hi-Tech City, Hyderabad — 500081<br />
                  Telangana, India<br />
                  Email: <a href="mailto:connect@vikisol.in" style={{ color: "inherit", textDecoration: "underline" }}>connect@vikisol.in</a>
                </address>
              </Section>

            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}
