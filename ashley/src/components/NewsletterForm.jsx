// Mailchimp embedded-form pattern (classic "POST straight to Mailchimp, no backend" approach).
// Configured entirely through env vars - nothing is hardcoded here, and nothing is committed to
// git. If either var is unset, this renders nothing rather than a form that looks like it works
// but silently loses every submission (the previous behavior: a hardcoded placeholder URL).
//
// Required to activate:
//   NEXT_PUBLIC_NEWSLETTER_ENDPOINT   - your Mailchimp list's "post" action URL
//                                       (Audience > Signup forms > Embedded forms > the <form action="...">)
//   NEXT_PUBLIC_NEWSLETTER_BOT_FIELD  - the hidden anti-bot field name Mailchimp generates
//                                       alongside that URL (looks like "b_xxxxxxxx_xxxxxxxx")
import ArrowIcon from "@layouts/svg-icons/Arrow";

const ENDPOINT = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;
const BOT_FIELD = process.env.NEXT_PUBLIC_NEWSLETTER_BOT_FIELD;

const NewsletterForm = ({ className = "mil-subscribe-form" }) => {
  if (!ENDPOINT || !BOT_FIELD) return null;

  return (
    <form action={ENDPOINT} method="post" target="_blank" rel="noopener noreferrer" className={className}>
      <input type="email" placeholder="Enter your email" name="EMAIL" required />
      {/* Mailchimp's own anti-bot honeypot field - must stay present and empty */}
      <input type="hidden" name={BOT_FIELD} tabIndex={-1} defaultValue="" aria-hidden="true" />
      <button type="submit" className="mil-button mil-icon-button-sm mil-arrow-place" aria-label="Subscribe">
        <ArrowIcon />
      </button>
    </form>
  );
};

export default NewsletterForm;
