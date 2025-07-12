"use client";
import { contactItems } from "@/data/contact";
import React, { useState } from "react";
import Toast from "@/components/common/Toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setToastMessage("Please fix the errors in the form");
      setToastType("error");
      setShowToast(true);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      setToastMessage("Thank you for reaching out! We'll get back to you within 24 hours.");
      setToastType("success");
      setShowToast(true);
    }, 1500);
  };

  return (
    <>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        message={toastMessage}
        type={toastType}
      />
      
      <div className="container">
        <div className="row mt-n10 mb-60 mb-xs-40">
          <div className="col-md-10 offset-md-1">
            <div className="row">
              {/* Phone */}
              {contactItems.map((item, index) => (
                <React.Fragment key={index}>
                  <div className={`col-md-6 col-lg-4 mb-md-30 `}>
                    <div className="contact-item wow fadeScaleIn">
                      <div className="ci-icon">
                        <i className={item.iconClass} />
                      </div>
                      <h4 className="ci-title">{item.title}</h4>
                      <div className="ci-text large">{item.text}</div>
                      <div className="ci-link">
                        <a
                          href={item.link.url}
                          target={item.link.target}
                          rel={item.link.rel}
                        >
                          {item.link.text}
                        </a>
                      </div>{" "}
                    </div>
                  </div>{" "}
                </React.Fragment>
              ))}

              {/* End Email */}
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <form
              onSubmit={handleSubmit}
              className="form contact-form wow fadeInUp wch-unset"
              data-wow-delay=".5s"
              id="contact_form"
            >
            <div className="row">
              <div className="col-md-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`input-lg round form-control ${errors.name ? 'error' : ''}`}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <div className="form-error text-danger mt-1">
                      <i className="mi-circle-information"></i> {errors.name}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`input-lg round form-control ${errors.email ? 'error' : ''}`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <div className="form-error text-danger mt-1">
                      <i className="mi-circle-information"></i> {errors.email}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className={`input-lg round form-control ${errors.message ? 'error' : ''}`}
                style={{ height: 130 }}
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              {errors.message && (
                <div className="form-error text-danger mt-1">
                  <i className="mi-circle-information"></i> {errors.message}
                </div>
              )}
            </div>
            <div className="row">
              <div className="col-sm-6">
                {/* Inform Tip */}
                <div className="form-tip pt-20 pt-sm-0">
                  <i className="icon-info size-16" />
                  All the fields are required. By sending the form you agree to
                  the <a href="/terms-conditions" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a> and{" "}
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                </div>
              </div>
              <div className="col-sm-6">
                {/* Send Button */}
                <div className="text-end pt-10">
                  <button
                    type="submit"
                    id="submit_btn"
                    aria-controls="result"
                    className="submit_btn link-hover-anim link-circle-1 align-middle"
                    data-link-animate="y"
                    disabled={isSubmitting}
                  >
                    <span className="link-strong link-strong-unhovered">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <i
                        className={`${isSubmitting ? 'mi-circle-notch' : 'mi-arrow-right'} size-18 align-middle`}
                        aria-hidden="true"
                        style={isSubmitting ? { animation: 'spin 1s linear infinite' } : {}}
                      ></i>
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <i
                        className={`${isSubmitting ? 'mi-circle-notch' : 'mi-arrow-right'} size-18 align-middle`}
                        aria-hidden="true"
                        style={isSubmitting ? { animation: 'spin 1s linear infinite' } : {}}
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
        </div>
      </div>
      {/* End Contact Form */}
    </div>
    
    <style jsx>{`
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      .form-control.error {
        border-color: #ef4444 !important;
      }
      
      .form-error {
        font-size: 13px;
        margin-top: 5px;
      }
      
      button:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    `}</style>
    </>
  );
}
