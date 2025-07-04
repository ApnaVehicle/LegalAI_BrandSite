"use client";
import React, { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      title: "Starter",
      monthlyPrice: 4999,
      yearlyPrice: 47990,
      description: "Perfect for individual lawyers and small practices",
      features: [
        "Up to 100 queries per month",
        "Research (AI-powered Legal Search)",
        "List of Dates (Basic)",
        "Translation (up to 50 pages/month)",
        "Email support"
      ],
      badge: "Coming Soon"
    },
    {
      title: "Professional",
      monthlyPrice: 14999,
      yearlyPrice: 143990,
      description: "Designed for growing law firms and legal teams",
      features: [
        "Up to 500 queries per month",
        "All Starter features",
        "Advanced chronology generation",
        "Translation (up to 200 pages/month)",
        "Priority support",
        "Multi-user access (up to 5 users)"
      ],
      badge: "Most Popular",
      highlighted: true
    },
    {
      title: "Enterprise",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      description: "Tailored solutions for large firms and corporates",
      features: [
        "Unlimited queries",
        "All Professional features",
        "Custom AI training on your precedents",
        "Unlimited translation",
        "Dedicated account manager",
        "API access",
        "Custom integrations"
      ],
      badge: "Contact Us"
    }
  ];

  return (
    <section 
      className="page-section bg-dark-1 light-content scrollSpysection" 
      id="pricing"
    >
      <div className="container">
        <div className="row mb-70 mb-sm-50">
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
            <h2 className="section-title mb-30 mb-sm-20">
              <span className="text-gray">Transparent</span> Pricing
              <span className="text-gray">.</span>
            </h2>
            <div className="text-gray">
              Choose the plan that fits your practice. All plans include our core AI engine trained on Indian legal nuances.
            </div>
          </div>
        </div>

        {/* Nav Tabs */}
        <div className="mb-60 mb-sm-40 text-center">
          <ul className="nav nav-tabs tpl-minimal-tabs animate" role="tablist">
            <li
              onClick={() => setIsYearly(false)}
              className="nav-item"
              role="presentation"
            >
              <a className={`nav-link ${!isYearly ? "active" : ""} `}>Monthly</a>
            </li>
            <li
              onClick={() => setIsYearly(true)}
              className="nav-item"
              role="presentation"
            >
              <a className={`nav-link ${isYearly ? "active" : ""} `}>Annual</a>
            </li>
          </ul>
          <div className="small text-gray mt-10">
            Save up to <strong>20%</strong> with Annual Plan.
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row mt-n30">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4 mt-30 d-flex align-items-stretch"
            >
              <div className={`pricing-item ${plan.highlighted ? 'pricing-highlighted' : ''}`}>
                <div className="pricing-item-inner round">
                  <div className="pricing-wrap">
                    {plan.badge && (
                      <div className="pricing-badge mb-20">
                        <span className={`badge ${plan.highlighted ? 'bg-white text-dark' : 'bg-dark-2'}`}>
                          {plan.badge}
                        </span>
                      </div>
                    )}
                    
                    <h4 className="pricing-title mb-10">{plan.title}</h4>
                    <div className="text-gray small mb-30">{plan.description}</div>
                    
                    <div className="pricing-num mb-10">
                      {typeof plan.monthlyPrice === 'number' ? (
                        <>
                          <sup>₹</sup>
                          {isYearly 
                            ? plan.yearlyPrice.toLocaleString('en-IN')
                            : plan.monthlyPrice.toLocaleString('en-IN')
                          }
                        </>
                      ) : (
                        <span className="h3">{plan.monthlyPrice}</span>
                      )}
                    </div>
                    
                    {typeof plan.monthlyPrice === 'number' && (
                      <div className="pr-per mb-30">
                        {isYearly ? "per year" : "per month"}
                      </div>
                    )}
                    
                    <div className="pricing-features text-start">
                      <ul className="pr-list">
                        {plan.features.map((feature, j) => (
                          <li key={j}>
                            <i className="mi-check" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto local-scroll">
                      <a
                        href="#contact"
                        className={`btn btn-mod btn-medium btn-round btn-hover-anim btn-full ${
                          plan.highlighted ? 'btn-white' : 'btn-white btn-outline'
                        }`}
                      >
                        <span>
                          {plan.title === 'Enterprise' ? 'Contact Sales' : 'Get Early Access'}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="row mt-60">
          <div className="col-12 text-center">
            <p className="text-gray small">
              * Pricing shown is indicative and subject to change. Early access users will receive special launch pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}