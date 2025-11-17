import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

/**
 * Contact page component
 * - Controlled inputs
 * - Basic validation
 * - On submit -> opens WhatsApp with pre-filled message
 */
export default function Contact() {
  useEffect(() => {
    document.title = "Al Safa Dental Center — Contact";
  }, []);

  // set the WhatsApp number here (international format, no +, no spaces)
  // Example: US +1 973 456 0542 -> "19734560542"
  const WHATSAPP_NUMBER = "966593322610";

 
  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    contactType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null); // null | true | false
  const [submitMessage, setSubmitMessage] = useState("");

  // progress bar ref (kept from your original)
  const progressBarRef = useRef(null);
  const rafIdRef = useRef(null);

  // handle controlled inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // clear field-specific error
    setErrors((err) => ({ ...err, [name]: undefined }));
  }

  // basic validation; returns errors object
  function validate(values) {
    const errs = {};
    if (!values.name.trim()) errs.name = "Please enter your full name.";
    if (!values.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!values.contactType) errs.contactType = "Please choose a contact method.";
    if (!values.message.trim()) errs.message = "Please tell us how we can help.";
    // phone optional, but basic format check if provided
    if (values.phone && !/^[\d()+\-\s]{6,20}$/.test(values.phone)) {
      errs.phone = "Please enter a valid phone number.";
    }
    return errs;
  }

  // build the WhatsApp message text exactly as requested
  function buildWhatsAppMessage(values) {
    // exact requested structure:
    // Full Name: [Full Name]
    // email: [email]
    // Phone Number: [phone number]
    // Preferred Contact Method: [preferred contact method]
    // [What do you need]
    const lines = [
      `Full Name: ${values.name || ""}`,
      `email: ${values.email || ""}`,
      `Phone Number: ${values.phone || ""}`,
      `Preferred Contact Method: ${values.contactType || ""}`,
      "", // blank line before message body (as in request)
      `${values.message || ""}`,
    ];
    return lines.join("\n");
  }

  // modified handleSubmit: open WhatsApp with encoded message
  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitSuccess(null);
    setSubmitMessage("");
    const validation = validate(form);
    if (Object.keys(validation).length) {
      setErrors(validation);
      // move focus to first invalid field (accessibility)
      const firstInvalid = Object.keys(validation)[0];
      const el = document.querySelector(`[name="${firstInvalid}"]`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      // Optionally: send to backend here before opening WhatsApp (uncomment if needed).
      // await fetch("/api/contact", { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(form) });

      const text = buildWhatsAppMessage(form);
      const encoded = encodeURIComponent(text);

      // Build the wa.me URL
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

      // Attempt to open in a new tab/window (this will open WhatsApp Web on desktop; on mobile it should open the app)
      const newWindow = window.open(waUrl, "_blank", "noopener,noreferrer");

      // If popup blocked, fallback to changing location (this will navigate the current tab)
      if (!newWindow) {
        // fallback
        // window.location.href = waUrl;
      }

      // Provide a friendly success message (we can't know if the user completed sending)
      setSubmitSuccess(true);
      setSubmitMessage("Opening WhatsApp — you can review and send the message there.");

      // Optionally clear the form after opening WhatsApp
      // setForm({ name: "", email: "", phone: "", contactType: "", message: "" });

    } catch (err) {
      console.error("Failed to open WhatsApp:", err);
      setSubmitSuccess(false);
      setSubmitMessage("Failed to open WhatsApp. Please try again or contact us by phone.");
    } finally {
      // re-enable the form shortly after to avoid being stuck (small delay for UX)
      setTimeout(() => setIsSubmitting(false), 800);
    }
  }

  // Progress bar update handler using RAF for smoothness
  useEffect(() => {
    const progressEl = progressBarRef.current;
    if (!progressEl) return;

    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const scrollTop = (window.pageYOffset || doc.scrollTop) || 0;
      const docHeight = doc.scrollHeight - doc.clientHeight;
      const percent = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      progressEl.style.width = percent + "%";
      progressEl.setAttribute("aria-valuenow", String(Math.round(percent)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafIdRef.current = window.requestAnimationFrame(update);
      }
    };

    // initialize
    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafIdRef.current) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* progress bar fixed at top */}
      <div id="scroll-progress-container" aria-hidden="false">
        <div
          id="scroll-progress-bar"
          ref={progressBarRef}
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="0"
          aria-label="Page scroll progress"
        />
      </div>

      <section className="contact-section">
        <div className="contact-container" role="region" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact Us</h2>

          {/* Submission status */}
          {submitSuccess === true && (
            <div className="contact-alert success" role="status">
              {submitMessage}
            </div>
          )}
          {submitSuccess === false && (
            <div className="contact-alert error" role="alert">
              {submitMessage}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "error-name" : undefined}
                required
              />
              {errors.name && (
                <div className="field-error" id="error-name">
                  {errors.name}
                </div>
              )}
            </div>

            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "error-email" : undefined}
                required
              />
              {errors.email && (
                <div className="field-error" id="error-email">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "error-phone" : undefined}
                placeholder="Optional"
              />
              {errors.phone && (
                <div className="field-error" id="error-phone">
                  {errors.phone}
                </div>
              )}
            </div>

            <div className="field">
              <label htmlFor="contactType">Preferred Contact Method</label>
              <select
                id="contactType"
                name="contactType"
                value={form.contactType}
                onChange={handleChange}
                aria-invalid={!!errors.contactType}
                aria-describedby={errors.contactType ? "error-contactType" : undefined}
                required
              >
                <option value="">-- Please Select --</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="text">Text</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
              {errors.contactType && (
                <div className="field-error" id="error-contactType">
                  {errors.contactType}
                </div>
              )}
            </div>

            <div className="field">
              <label htmlFor="message">What do you need?</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "error-message" : undefined}
                required
              />
              {errors.message && (
                <div className="field-error" id="error-message">
                  {errors.message}
                </div>
              )}
            </div>

            <div className="field">
              <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
                {isSubmitting ? "Sending…" : "Send Message via WhatsApp"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
