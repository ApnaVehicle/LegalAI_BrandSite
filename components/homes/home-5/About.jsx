import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div className="col-lg-6 offset-lg-1">
      <div className="row">
        <div
          className="col-sm-6 pt-60 pt-xs-0 mb-xs-40"
          data-rellax-y=""
          data-rellax-speed="-0.5"
          data-rellax-percentage="0.5"
        >
          <div className="spot-box clearfix mb-30">
            <div className="spot-box-icon float-end ms-3" />
            <div className="spot-box-text text-end">
              <span className="text-gray">
                Trained on over <br />
              </span>
              10M+ legal documents.
            </div>
          </div>
          <Image
            src="/assets/images/demo-elegant/legal-documents-training.png"
            width={400}
            height={489}
            className="w-100 round"
            alt="AI trained on millions of legal documents"
          />
        </div>
        <div
          className="col-sm-6"
          data-rellax-y=""
          data-rellax-speed="0.5"
          data-rellax-percentage="0.5"
        >
          <Image
            src="/assets/images/demo-elegant/ai-speed-performance.png"
            width={400}
            height={489}
            className="w-100 round"
            alt="Fast AI response time under 3 seconds"
          />
          <div className="spot-box clearfix mt-30">
            <div className="spot-box-icon float-start me-3" />
            <div className="spot-box-text">
              <span className="text-gray">
                Built exclusively for <br />
              </span>
              Indian legal system.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
