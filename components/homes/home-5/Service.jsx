import { ligitServices } from "@/data/services";
import React from "react";

export default function Service() {
  return (
    <>
      <div
        className="page-section bg-dark-1 bg-dark-alpha-70 light-content parallax-7 pb-140"
        style={{
          backgroundImage: "url(/assets/images/demo-elegant/legal-practice-bg.png)",
        }}
      >
        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-0">
                Your Legal Superpowers, Unleashed
                <span className="text-gray">.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-n140 position-relative z-index-1">
        <div className="row mb-n30">
          {/* Services Item*/}
          {ligitServices.map((elm, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30"
            >
              <div className="services-3-item round text-center">
                <div className="wow fadeInUpShort" data-wow-offset={50}>
                  <div className="services-3-number mb-30">
                    <span className="h1 text-gray">{elm.number}</span>
                  </div>
                  <h3 className="services-3-title mb-15">
                    {elm.title}
                  </h3>
                  <h4 className="services-3-tagline mb-20 text-gray">{elm.tagline}</h4>
                  <div className="services-3-text">{elm.text}</div>
                </div>
              </div>
            </div>
          ))}
          {/* End Services Item*/}

          {/* End Services Item*/}
        </div>
      </div>
    </>
  );
}
