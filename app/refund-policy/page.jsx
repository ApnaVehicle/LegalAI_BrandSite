import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import { ligitNavigationMultipage } from "@/data/menu";
import ParallaxContainer from "@/components/common/ParallaxContainer";

export const metadata = {
  title: "Refund Policy - Ligit",
  description: "Refund Policy for Ligit - Your Intelligent Legal AI Assistant",
};

export default function RefundPolicy() {
  return (
    <>
      <div className="theme-elegant">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header5 links={ligitNavigationMultipage} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="page-section bg-dark-alpha-30 light-content z-index-1"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-elegant/scales_of_justice_hero.jpg)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              >
                <div className="container position-relative pt-50">
                  <div className="text-center">
                    <h1 className="hs-title-1 mb-20">
                      <span className="wow charsAnimIn" data-splitting="chars">
                        Refund Policy
                      </span>
                    </h1>
                  </div>
                </div>
              </ParallaxContainer>

              <section className="page-section bg-dark-1 light-content">
                <div className="container relative">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div className="section-text" style={{ fontSize: '90%' }}>
                        <h2 className="section-title-small mb-30">Refund Policy</h2>
                        <p className="text-gray mb-30">Effective Date: July 13, 2025</p>
                        
                        <p className="mb-30">
                          Ligit ("we", "our", or "us") is committed to providing high-quality AI-powered legal support services. This Refund Policy outlines the terms under which users ("you" or "customer") may be eligible to request refunds for paid services offered on the Ligit platform, including subscriptions and one-time purchases.
                        </p>
                        <p className="mb-30">
                          By using our platform and purchasing any of our services, you agree to the terms of this Refund Policy, which should be read in conjunction with our Terms and Conditions and Privacy Policy.
                        </p>

                        <h3 className="mb-20">1. General Policy</h3>
                        <p className="mb-30">
                          All payments made on the Ligit platform are non-refundable by default, except as specifically provided in this policy or where required by applicable law.
                        </p>
                        <p className="mb-30">
                          We do not offer refunds for change of mind, unused services, accidental purchases, or dissatisfaction based solely on personal expectations. However, we understand that exceptional situations may arise, and we aim to be fair and transparent in addressing them.
                        </p>

                        <h3 className="mb-20">2. Eligibility for Refund</h3>
                        <p className="mb-20">You may be eligible for a refund in the following limited circumstances:</p>

                        <h4 className="mb-10">a. Subscription Services</h4>
                        <p className="mb-20">Refunds for subscription plans (monthly or annual) may be provided if:</p>
                        <ul className="mb-20">
                          <li className="mb-10">A cancellation request is made within 5 days of the initial purchase of a new subscription plan; and</li>
                          <li className="mb-10">You have not used any core features of the Service during that period (e.g., uploading documents, running analyses, generating outputs); and</li>
                          <li className="mb-10">The refund request is made via email to support@ligit.com with your registered account details.</li>
                        </ul>
                        <p className="mb-20"><strong>Note:</strong></p>
                        <ul className="mb-30">
                          <li className="mb-10">Renewals of an existing subscription are not eligible for refunds.</li>
                          <li className="mb-10">Prorated refunds for the remaining unused period of a subscription will not be issued.</li>
                          <li className="mb-10">If any material service outage or technical failure occurred and prevented usage of the platform during your subscription period, we may offer a credit or partial refund at our discretion.</li>
                        </ul>

                        <h4 className="mb-10">b. One-Time Purchases (Pay-per-use Services)</h4>
                        <p className="mb-20">If you purchase a one-time service (such as document drafting, legal chronology generation, or translation), you may be eligible for a refund only if:</p>
                        <ul className="mb-30">
                          <li className="mb-10">You have not initiated the service (i.e., not uploaded a document or started a task); and</li>
                          <li className="mb-10">The refund request is made within 48 hours of purchase.</li>
                        </ul>
                        <p className="mb-30">
                          Refunds will not be granted for one-time services that have already been consumed or generated, unless there was a demonstrable technical error or system failure that prevented delivery of the promised output.
                        </p>

                        <h3 className="mb-20">3. Non-Refundable Situations</h3>
                        <p className="mb-20">Refunds will not be provided in the following cases:</p>
                        <ul className="mb-30">
                          <li className="mb-10">Dissatisfaction due to subjective expectations not being met (e.g., output quality not matching personal preferences).</li>
                          <li className="mb-10">Inaccuracies or omissions in AI-generated results (users are expected to review all outputs).</li>
                          <li className="mb-10">Failure to cancel a subscription before renewal.</li>
                          <li className="mb-10">Attempted abuse of the refund process (e.g., repeated refund requests for legitimate usage).</li>
                          <li className="mb-10">Use of trial periods or promotional access that have no associated charge.</li>
                        </ul>

                        <h3 className="mb-20">4. How to Request a Refund</h3>
                        <p className="mb-20">To initiate a refund request, please email us at support@ligit.com with:</p>
                        <ul className="mb-30">
                          <li className="mb-10">Your full name and registered email address</li>
                          <li className="mb-10">Order ID or payment reference number</li>
                          <li className="mb-10">Date of purchase</li>
                          <li className="mb-10">Description of the issue and reason for requesting a refund</li>
                        </ul>
                        <p className="mb-30">
                          We may request additional information to verify your request. Our team will review your request within 5–7 business days and notify you of the outcome via email.
                        </p>

                        <h3 className="mb-20">5. Refund Method and Timeline</h3>
                        <p className="mb-20">If your refund is approved:</p>
                        <ul className="mb-30">
                          <li className="mb-10">Refunds will be processed using the same payment method used for the original transaction.</li>
                          <li className="mb-10">It may take 7–14 business days for the refunded amount to reflect in your bank or credit card statement, depending on your payment provider or bank.</li>
                          <li className="mb-10">We are not responsible for any delays caused by payment gateways or financial institutions.</li>
                        </ul>

                        <h3 className="mb-20">6. Discretion and Exceptions</h3>
                        <p className="mb-30">
                          We reserve the right to approve or deny any refund request at our sole discretion. In some cases, we may offer credits or service extensions instead of monetary refunds. Our decision on refund eligibility is final and binding.
                        </p>

                        <h3 className="mb-20">7. Amendments</h3>
                        <p className="mb-30">
                          We may update or revise this Refund Policy from time to time. Any changes will be effective upon posting on our website. Continued use of the platform after such changes constitutes your acceptance of the revised policy.
                        </p>

                        <h3 className="mb-20">If you have any questions regarding this Refund Policy, please contact us at:</h3>
                        <p className="mb-30">
                          📧 support@ligit.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <footer className="bg-dark-2 light-content footer z-index-1 position-relative">
              <Footer5 />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}