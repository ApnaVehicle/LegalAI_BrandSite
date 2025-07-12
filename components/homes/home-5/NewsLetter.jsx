"use client";
import React, { useState } from "react";
import Toast from "@/components/common/Toast";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate subscription process
    setIsSubmitting(true);
    
    setTimeout(() => {
      setShowToast(true);
      setIsSubmitting(false);
      setEmail("");
    }, 1000);
  };

  return (
    <>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        message="You've been successfully subscribed to our newsletter. Welcome to the Ligit community!"
        type="success"
      />
      
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 wow fadeInUp wch-unset">
            <h2 className="section-title-tiny text-gray mb-20">
              Subscribe to our newsletter
            </h2>
            <form
              onSubmit={handleSubmit}
              id="mailchimp"
              className="form newsletter-elegant"
              autoComplete="off"
            >
              <div className="row">
                <div className="col-md-8 col-lg-9 mb-sm-30">
                  <input
                    placeholder="Enter your email"
                    className="newsletter-field input-lg form-control mb-20"
                    type="email"
                    pattern=".{5,100}"
                    required
                    aria-required="true"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                  <div className="form-tip">
                    <i className="icon-info size-16" /> By sending the form you
                    agree to the <a href="/terms-conditions" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a> and{" "}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 text-start text-md-end">
                  <button
                    type="submit"
                    aria-controls="subscribe-result"
                    className="link-hover-anim link-circle-1 align-middle"
                    data-link-animate="y"
                    disabled={isSubmitting}
                  >
                    <span className="link-strong link-strong-unhovered">
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                      <i
                        className="mi-arrow-right size-18 align-middle"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                      <i
                        className="mi-arrow-right size-18 align-middle"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
