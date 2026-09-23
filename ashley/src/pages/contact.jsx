import { useState } from "react";
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import { Formik } from 'formik';

import ArrowIcon from "@layouts/svg-icons/Arrow";

// Formspree (or any endpoint accepting a multipart POST and returning JSON) - configured through
// an env var rather than committed to the repo. Required to activate:
//   NEXT_PUBLIC_CONTACT_FORM_ENDPOINT  - your Formspree form's endpoint
//                                        (https://formspree.io/f/<your real form id>)
// If unset, the form still renders (so the page doesn't look broken), but never attempts a
// submit that would silently fail - it tells the visitor to email us directly instead.
const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
const CONTACT_EMAIL = "connect@vikisol.in";

// Hyderabad keeps the original, already-verified embed (a specific Google Maps place id).
// Bengaluru uses Google's plain address-search embed instead of a guessed place id/coordinates -
// it resolves the real address live rather than risking a pin in the wrong place.
const OFFICES = {
  hyderabad: {
    label: "Hyderabad",
    address: "Maximus Towers 2A, Mindspace, Hyderabad, Telangana",
    phone: "+91 90636 15796",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60901.08357665583!2d78.33143625712422!3d17.444500568787095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e0a670c8ff%3A0xbedb158f71239b92!2sMaximus%202B!5e0!3m2!1sen!2sin!4v1781225374357!5m2!1sen!2sin",
  },
  bengaluru: {
    label: "Bengaluru",
    address: "Meridian Towers, 2nd & 3rd Floor, Koramangala 2nd Block, Bengaluru, Karnataka",
    phone: "+91 79895 95796",
    mapSrc: `https://www.google.com/maps?q=${encodeURIComponent("Meridian Towers, Koramangala 2nd Block, Bengaluru, Karnataka")}&output=embed`,
  },
};

const Contact = () => {
  const isConfigured = Boolean(CONTACT_ENDPOINT);
  const [officeKey, setOfficeKey] = useState("hyderabad");
  const office = OFFICES[officeKey];

  return (
    <Layouts>
        <PageBanner pageTitle={"Let's Build <span className=\"mil-thin\">Together</span>"} breadTitle={"Contact"} anchorLabel={"Send a message"} anchorLink={"#contact"} paddingBottom={1} align={"center"} description="Get in touch with Vikisol Technologies - offices in Hyderabad and Bengaluru, serving clients across India, the Middle East, the US, the UK, and Australia." />

        {/* map */}
        <div className="mil-map-frame mil-up" style={{ borderRadius: "24px", margin: "0 auto", maxWidth: "calc(100% - 60px)" }}>
            <div className="mil-map">
                <iframe
                key={officeKey}
                src={office.mapSrc}
                title={`Vikisol office - ${office.label}`}
                style={{ border: "0", filter: "grayscale(55%) contrast(1.05)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <div style={{ position: "absolute", left: "32px", bottom: "32px", zIndex: 2, background: "#fff", borderRadius: "16px", padding: "24px 28px", boxShadow: "0 20px 40px rgba(0,0,0,0.18)", maxWidth: "320px" }}>
                <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                    {Object.keys(OFFICES).map((key) => (
                        <button
                            key={key}
                            type="button"
                            onClick={() => setOfficeKey(key)}
                            style={{
                                border: "none",
                                borderRadius: "20px",
                                padding: "8px 16px",
                                fontSize: "12px",
                                fontWeight: 600,
                                letterSpacing: "0.5px",
                                cursor: "pointer",
                                background: key === officeKey ? "#FF9800" : "#F2F2F2",
                                color: key === officeKey ? "#0A0A0A" : "#333",
                            }}
                        >
                            {OFFICES[key].label}
                        </button>
                    ))}
                </div>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#222", margin: "0 0 6px", fontWeight: 600 }}>{office.address}</p>
                <p style={{ fontSize: "13px", color: "#666", margin: "0 0 14px" }}>{office.phone}</p>
                <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "13px", fontWeight: 600, color: "#B25800" }}
                >
                    Get directions →
                </a>
            </div>
        </div>
        {/* map end */}

        {/* contact form */}
        <section id="contact">
            <div className="container mil-p-120-90">
                <h3 className="mil-center mil-up mil-mb-120">Let&apos;s <span className="mil-thin">Talk</span></h3>

                <Formik
                initialValues = {{ email: '', name: '', message: '' }}
                validate = { values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit = {( values, { setSubmitting } ) => {
                    const form = document.getElementById("contactForm");
                    const status = document.getElementById("contactFormStatus");

                    if (!isConfigured) {
                        status.innerHTML = `This form isn't fully set up yet - please email us directly at <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> and we'll get back to you.`;
                        setSubmitting(false);
                        return;
                    }

                    const data = new FormData();

                    data.append('name', values.name);
                    data.append('email', values.email);
                    data.append('message', values.message);

                    fetch(form.action, {
                        method: 'POST',
                        body: data,
                        headers: {
                            'Accept': 'application/json'
                        }
                    }).then(response => {
                        if (response.ok) {
                            status.innerHTML = "Thanks for your submission!";
                            form.reset()
                        } else {
                            response.json().then(data => {
                                if (Object.hasOwn(data, 'errors')) {
                                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                                } else {
                                    status.innerHTML = "Oops! There was a problem submitting your form"
                                }
                            })
                        }
                    }).catch(error => {
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    });

                    setSubmitting(false);
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                <form onSubmit={handleSubmit} id="contactForm" action={CONTACT_ENDPOINT || undefined} className="row align-items-center">
                    {!isConfigured &&
                    <div className="col-lg-12 mil-up mil-mb-30">
                        <p className="mil-text" style={{ opacity: 0.8 }}>
                            This form is being finalized. In the meantime, reach us directly at{" "}
                            <a href={`mailto:${CONTACT_EMAIL}`} className="mil-accent">{CONTACT_EMAIL}</a>.
                        </p>
                    </div>
                    }
                    <div className="col-lg-6 mil-up">
                        <input 
                            type="text" 
                            placeholder="What's your name"
                            name="name" 
                            required="required" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name} 
                        />
                    </div>
                    <div className="col-lg-6 mil-up">
                        <input 
                            type="email" 
                            placeholder="Your Email"
                            name="email"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} 
                        />
                    </div>
                    <div className="col-lg-12 mil-up">
                        <textarea
                            placeholder="Tell us about your project or requirements"
                            name="message" 
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message} 
                        />
                    </div>
                    <div className="col-lg-8">
                        <p className="mil-up mil-mb-30"><span className="mil-accent">*</span> We promise not to disclose your personal information to third parties.</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="mil-adaptive-right mil-up mil-mb-30">
                            <button type="submit" className="mil-button mil-arrow-place">
                                <span>Send message</span>
                                <ArrowIcon />
                            </button>
                        </div>
                    </div>
                    <div className="form-status" id="contactFormStatus" />
                </form>
                )}
                </Formik>
            </div>
        </section>
        {/* contact form end */}    
    </Layouts>
  );
};
export default Contact;
