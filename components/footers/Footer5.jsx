"use client";
import { socialMediaLinks } from "@/data/footer";
import React from "react";

export default function Footer5() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <div className="container position-relative text-center pt-140 pb-80 pb-sm-50">
      <style jsx>{`
        .footer-link:hover {
          color: #fff !important;
          transition: color 0.3s ease;
        }
      `}</style>
      {/* Scroll Up */}
      <div className="local-scroll link-to-top-2-wrap" onClick={scrollToTop}>
        <a href="#top" className="link-to-top-2">
          Back to top
        </a>
      </div>
      {/* End Scroll Up */}
      {/* Social Links */}
      <div className="footer-social-links mb-60">
        {socialMediaLinks.map((elm, i) => (
          <a
            href={elm.href}
            key={i}
            title={elm.title}
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="visually-hidden">{elm.name}</span>
            <i className={elm.iconClass} />
          </a>
        ))}
      </div>
      {/* End Social Links */}
      {/* Footer Text */}
      <div className="footer-text">
        {/* Copyright */}
        <div className="mb-20">
          © Ligit AI {new Date().getFullYear()}. All rights reserved.
        </div>
        {/* End Copyright */}
        
        {/* Legal Links */}
        <div className="footer-legal-links mb-20">
          <a href="https://www.ligit.space/privacy-policy" className="text-gray-light me-3 text-decoration-none footer-link">Privacy Policy</a>
          <span className="text-gray">|</span>
          <a href="https://www.ligit.space/terms-conditions" className="text-gray-light ms-3 me-3 text-decoration-none footer-link">Terms & Conditions</a>
          <span className="text-gray">|</span>
          <a href="/disclaimer" className="text-gray-light ms-3 me-3 text-decoration-none footer-link">Disclaimer</a>
          <span className="text-gray">|</span>
          <a href="/refund-policy" className="text-gray-light ms-3 text-decoration-none footer-link">Refund Policy</a>
        </div>
        {/* End Legal Links */}
        
        <div className="footer-made">
          Ligit is built by <strong>Inflekt Core</strong>. Based in India. Serving the world.
        </div>
      </div>
      {/* End Footer Text */}
    </div>
  );
}
