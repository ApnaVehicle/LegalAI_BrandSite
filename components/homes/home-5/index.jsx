import React from "react";
import About from "./About";
import Marquee from "./Marquee";
import Image from "next/image";
import Service from "./Service";
import Pricing from "./Pricing";
import NewsLetter from "./NewsLetter";
import Contact from "./Contact";
import Link from "next/link";
import MarqueeDark from "./MarqueeDark";

export default function Home5({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection pb-0 ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center mb-md-50">
              <div>
                <div className="wow linesAnimIn" data-splitting="lines">
                  <h2 className="section-title mb-30 mb-sm-20">
                    <span className="text-gray">About</span> LIGIT AI
                    <span className="text-gray">.</span>
                  </h2>
                  <div className="text-gray mb-30 mb-sm-20">
                    <p className="mb-0">
                      Ligit is not just another AI platform. 
                      It's a performance-first legal intelligence engine — built ground-up with Indian legal nuances at its core. 
                      No noise. No hallucinations. Just razor-sharp clarity, delivered in seconds.
                    </p>
                    <p className="mt-20 mb-0">
                      Whether you're a corporate counsel or a litigation specialist, Ligit becomes your silent co-counsel — refining thought, accelerating work, and helping you stay two steps ahead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <About />
          </div>
        </div>
      </section>
      <div className="page-section overflow-hidden">
        {dark ? <MarqueeDark /> : <Marquee />}
      </div>
      <section
        className="page-section pt-0 pb-0 bg-dark-1 bg-dark-alpha-80 parallax-6 light-content"
        style={{
          backgroundImage: "url(/assets/images/demo-elegant/legal-practice-bg.png)",
        }}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-6 col-xl-5">
              <div className="call-action-1-images pb-60 pb-md-0 mt-n30 mt-md-70 mb-n30 mb-md-70 mb-sm-0">
                <div className="call-action-1-image-1 round">
                  <Image
                    src="/assets/images/demo-elegant/legal-transform-small.png"
                    width={678}
                    height={840}
                    alt="Legal AI technology"
                  />
                </div>
                <div className="call-action-1-image-2">
                  <div
                    className="call-action-1-image-2-inner"
                    data-rellax-y=""
                    data-rellax-speed="0.7"
                    data-rellax-percentage="0.427"
                  >
                    <Image
                      src="/assets/images/demo-elegant/legal-transform-large.png"
                      alt="Transform your legal practice with AI"
                      width={300}
                      height={409}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 offset-xl-1 d-flex align-items-center">
              <div className="row small-section">
                <div className="col-xl-11">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Ready to transform your legal practice?
                  </h2>
                  <div className="text-gray mb-30 mb-sm-20">
                    <p className="mb-0">
                      Join the future of legal intelligence. Be among the first to experience
                      how AI can amplify your legal expertise.
                    </p>
                  </div>
                  <div className="local-scroll">
                    {onePage ? (
                      <>
                        {" "}
                        <a
                          href="#services"
                          className="link-hover-anim link-circle-1 align-middle"
                          data-link-animate="y"
                        >
                          <span className="link-strong link-strong-unhovered">
                            View Services{" "}
                            <i
                              className="mi-arrow-right size-18 align-middle"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span
                            className="link-strong link-strong-hovered"
                            aria-hidden="true"
                          >
                            View Services{" "}
                            <i
                              className="mi-arrow-right size-18 align-middle"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </>
                    ) : (
                      <>
                        {" "}
                        <Link
                          href={`/alegant-services${dark ? "-dark" : ""}`}
                          className="link-hover-anim link-circle-1 align-middle"
                          data-link-animate="y"
                        >
                          <span className="link-strong link-strong-unhovered">
                            View Services{" "}
                            <i
                              className="mi-arrow-right size-18 align-middle"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span
                            className="link-strong link-strong-hovered"
                            aria-hidden="true"
                          >
                            View Services{" "}
                            <i
                              className="mi-arrow-right size-18 align-middle"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-section overflow-hidden">
        {dark ? <MarqueeDark /> : <Marquee />}
      </div>
      <section
        className={`page-section pt-0  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <Service />
      </section>
      <hr className="mt-0 mb-0" />
      <Pricing dark={dark} />
      <section
        className={`small-section ${
          dark ? "bg-dark-2 light-content" : "bg-dark-1 light-content"
        } `}
      >
        <div className="container">
          <div className="row mb-n10">
            <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-2 mb-sm-30 text-center text-md-start">
              <h2 className="section-title-small mb-0">
                Ready to get started?
              </h2>
            </div>
            <div className="col-md-4 col-lg-3 text-center text-md-end">
              <div className="mt-n20">
                {onePage ? (
                  <>
                    {" "}
                    <a
                      href="#contact"
                      className="link-hover-anim link-circle-1 align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Get Early Access
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Get Early Access
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    {" "}
                    <Link
                      href={`/elegant-contact${dark ? "-dark" : ""}`}
                      className="link-hover-anim link-circle-1 align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Get Early Access
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Get Early Access
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="small-section bg-dark-1 bg-dark-alpha-70 bg-scroll light-content"
        style={{
          backgroundImage: "url(/assets/images/demo-elegant/legal-practice-bg.png)",
        }}
      >
        <NewsLetter />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <div className="container">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-30 mb-sm-20">
                <span className="text-gray">Contact</span> Us
                <span className="text-gray">.</span>
              </h2>
              <div className="text-gray">
                Have questions or need assistance? We're here to help. 
                Reach out to our team for support, inquiries, or to learn more about how Ligit can transform your legal practice.
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </section>
    </>
  );
}
