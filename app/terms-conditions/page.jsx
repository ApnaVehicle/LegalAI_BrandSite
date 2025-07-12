import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import { ligitNavigationMultipage } from "@/data/menu";
import ParallaxContainer from "@/components/common/ParallaxContainer";

export const metadata = {
  title: "Terms & Conditions - Ligit",
  description: "Terms and Conditions for Ligit - Your Intelligent Legal AI Assistant",
};

export default function TermsConditions() {
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
                        Terms & Conditions
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
                        <h2 className="section-title-small mb-30">Terms and Conditions for Ligit</h2>
                        <p className="text-gray mb-30">Last Updated: July 13, 2025</p>
                        
                        <p className="mb-30">
                          These Terms and Conditions ("Terms") govern your access to and use of the Ligit platform and services. Ligit is an AI-powered legal tool operated by Inflekt Core Private Limited, an Indian private limited company incorporated under the Companies Act, 2013 (the "Company", "we", "us", or "our"). By registering an account or using any Ligit services, you (the individual user or the legal entity you represent) agree to be bound by these Terms, as well as our Privacy Policy, Cookie Policy, Disclaimer, and Refund Policy, which are incorporated herein by reference. If you do not agree with these Terms, you must not use the Ligit platform or services.
                        </p>
                        <p className="mb-30">
                          By accepting these Terms, you represent that you are at least 18 years old, legally capable of entering into a contract, and, if registering on behalf of an organization (such as a law firm), you have the authority to bind that organization to these Terms "You" shall include both the individual user and any entity on whose behalf the service is used.
                        </p>

                        <h3 className="mb-20">1. Services Offered</h3>
                        <p className="mb-20">
                          Ligit provides AI-driven legal support services to help streamline legal work processes. Our core services include:
                        </p>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>Legal Research:</strong> AI-powered legal research tools to efficiently retrieve relevant information from public legal databases, statutes, case law, and other sources. This enables quick access to legal information but does not constitute legal advice (see Disclaimers below).</li>
                          <li className="mb-10"><strong>Chronology and Summaries:</strong> Tools to prepare lists of dates, timelines, and legal chronology summaries from legal documents or case files. Users can upload case documents and Ligit will generate an organized chronological summary of key events and dates for reference.</li>
                          <li className="mb-10"><strong>Document Translation:</strong> Automated translation of legal documents between supported languages (e.g., English and Indian regional languages) while aiming to preserve legal terminology and meaning.</li>
                          <li className="mb-10"><strong>Document Drafting and Review:</strong> AI-assisted drafting of legal documents (such as contracts, petitions, briefs) based on user inputs or templates, and AI-powered review of documents to summarize content or highlight potential issues.</li>
                          <li className="mb-10"><strong>Record Keeping:</strong> Secure storage and organization of uploaded documents and AI outputs for the user's account, allowing users to maintain and retrieve their legal documents and AI-generated work product.</li>
                        </ul>
                        <p className="mb-30">
                          We continually improve and expand our services. You acknowledge that the Company may add, remove, or modify features at its discretion to enhance the platform. We will endeavor to notify users of significant changes to the Services. Your use of any new or modified features constitutes acceptance of those features under these Terms.
                        </p>

                        <h3 className="mb-20">2. Account Registration and Security</h3>
                        <p className="mb-20">To access Ligit's full range of services, you must create a user account. When registering:</p>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>Account Information:</strong> You agree to provide accurate, current, and complete information during registration and to keep your account information updated. Account registration may require providing your name, contact information, organization (if applicable), and payment details for subscription services.</li>
                          <li className="mb-10"><strong>User Credentials:</strong> You are responsible for maintaining the confidentiality of your login credentials (username and password). You must not share your login details or allow any unauthorized person to access your account. If you are an organization, each individual user should have their own account credentials; sharing accounts among multiple users is not permitted.</li>
                          <li className="mb-10"><strong>Responsibility for Activities:</strong> You are responsible for all activities that occur under your account. If you suspect any unauthorized use of your account or a security breach, you must promptly notify us. We are not liable for any loss or damage arising from unauthorized use of your account, and you may be held liable for losses incurred by the Company or others due to such unauthorized use.</li>
                          <li className="mb-10"><strong>Account Security:</strong> We implement industry-standard security measures to protect accounts, but you must also use a strong password and follow good security practices. Any activity conducted through your account will be deemed to be authorized by you; please safeguard your credentials accordingly.</li>
                        </ul>
                        <p className="mb-30">
                          We reserve the right to suspend or terminate accounts that we suspect are being used in violation of these Terms or any applicable law (see Termination below).
                        </p>

                        <h3 className="mb-20">3. Subscription Plans, Fees, and Payments</h3>
                        <p className="mb-20">
                          Ligit offers both subscription-based services and one-time purchase options (for example, purchasing a one-time document analysis or daily access pass). By selecting a paid plan or service, you agree to the following payment terms:
                        </p>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>Fees:</strong> You agree to pay all applicable fees for the subscription plan or one-time services you select, as displayed at the time of purchase. Pricing and available plans are described on the Ligit platform. We may offer monthly or annual subscriptions, enterprise plans for law firms, and one-off usage options. All fees are charged in Indian Rupees (₹) or as otherwise indicated, and are inclusive of applicable taxes unless stated.</li>
                          <li className="mb-10"><strong>Billing & Payment:</strong> For subscriptions, fees will be billed in advance on a recurring basis (e.g., monthly or annually) to the payment method you provide. You authorize us to charge your chosen payment method on the schedule of your subscription. One-time purchases (such as a single document processing) will be charged at the point of purchase. If a payment fails or is not made on time, we may suspend or restrict your account until payment is received. You are responsible for providing a valid payment method and resolving any payment issues.</li>
                          <li className="mb-10"><strong>Free Trials:</strong> If we offer a free trial for any service, such trial is available one-time to new users only at our discretion. We reserve the right to modify or end a free trial at any time. After the trial period, you will need to subscribe or pay to continue using the services. During the trial, these Terms still fully apply.</li>
                          <li className="mb-10"><strong>Changes in Fees:</strong> Our fees are subject to change. Any fee changes for subscriptions will be communicated to you with reasonable notice via email or via the platform. Changes will apply at the start of the next billing cycle. If you do not agree with a fee change, you may cancel your subscription before the new fees take effect (see Cancellation below). Continuing to use the service after the price change constitutes acceptance of the new pricing.</li>
                          <li className="mb-10"><strong>Refunds:</strong> All purchases are final and non-refundable by default, except as described in our Refund Policy or as required by applicable law. We may consider refund requests for subscription plans if made within a specified number of days from purchase (per the Refund Policy), but we are not obligated to provide refunds for partial use or remaining period of a subscription. For example, if our Refund Policy allows cancellation within 5 days of a monthly subscription purchase, you may be eligible for a refund by contacting us within that window; otherwise, the subscription will run until the end of the paid term and simply not renew thereafter. No pro-rated refunds will be given for unused portions of a subscription term.</li>
                          <li className="mb-10"><strong>One-Time Purchase Usage:</strong> One-time service purchases (such as a daily pass or single document analysis) are typically not eligible for refund once the service has been used. Please review the details of each service before purchase.</li>
                          <li className="mb-10"><strong>Taxes:</strong> If any taxes (e.g., GST) are applicable on the services, you are responsible for paying such taxes. We will add taxes to the charges as required by law.</li>
                        </ul>
                        <p className="mb-30">
                          By purchasing a subscription or service, you acknowledge that you have read and agree to the specific pricing, billing frequency, and refund terms presented at the point of purchase.
                        </p>

                        <h3 className="mb-20">4. License and Intellectual Property Rights</h3>
                        
                        <h4 className="mb-10">4.1 License to Use Ligit Services</h4>
                        <p className="mb-30">
                          Subject to your compliance with these Terms and payment of all applicable fees, the Company grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Ligit platform and services for your personal or internal business use in the legal domain. This license allows you to use Ligit's tools (legal research, document analysis, etc.) and to view, download, or print outputs for your lawful use. No other rights are granted. You may not use the services for providing competing services or for any commercial purpose outside the scope of assisting in your own or your organization's legal matters.
                        </p>

                        <h4 className="mb-10">4.2 Ownership of the Platform and Content</h4>
                        <p className="mb-20">
                          All rights, title, and interest in and to the Ligit platform— including but not limited to the software, algorithms, models, design, user interface, features, and all content provided by us (except User Provided Content as defined below) — are the exclusive property of Inflekt Core Pvt. Ltd. or its licensors. This includes all intellectual property rights such as copyrights, trademarks, trade secrets, and patents related to the platform. The Ligit name and logo are trademarks of the Company. These are protected under applicable intellectual property laws. You agree not to use the Company's trademarks or branding without our prior written consent.
                        </p>
                        <p className="mb-20">You are prohibited from:</p>
                        <ul className="mb-30">
                          <li className="mb-10">(a) reproducing, distributing, or creating derivative works from our platform or any content provided on it (other than your own documents or outputs you generate through the platform) without authorization;</li>
                          <li className="mb-10">(b) modifying, reverse engineering, decompiling, or disassembling any part of our software or attempting to discover the source code or underlying algorithms; and</li>
                          <li className="mb-10">(c) accessing the Ligit platform to build a competitive product or service, or copying any features, functions, or graphics of the platform for competitive purposes.</li>
                        </ul>

                        <h4 className="mb-10">4.3 User Provided Content and Output</h4>
                        <p className="mb-20">
                          <strong>User Content:</strong> In using Ligit, you may upload or input legal documents, text, data, or other materials ("User Content") for analysis, translation, or other processing. You retain all rights and ownership of your User Content. We do not claim any ownership over the content you provide. By uploading User Content, you grant us a limited license to process and store that content for the purpose of providing the services to you. This license is only to the extent necessary for operation of the platform (e.g., storing your documents, parsing them for analysis, generating outputs).
                        </p>
                        <p className="mb-20">
                          <strong>AI-Generated Output:</strong> Our platform will produce results such as summaries, translations, drafts, or analyses ("Output") based on your inputs. As between you and the Company, you will own the intellectual property rights in the Output that is generated from your User Content, to the extent such output is original and eligible for IP protection. We do not hold copyright over your Input Data or the resulting Output Data specific to your use of the services. However, note that Output might include or be derived from public domain or third-party content (for example, snippets of laws or judgments which are public records). To the extent any Output includes content not owned by you (such as law texts or excerpts of judgments), your use of that portion of the Output may be subject to the rights of the original content owner or to limitations under law (e.g., fair use). You are responsible for ensuring that your use of such Output complies with applicable law.
                        </p>
                        <p className="mb-30">
                          <strong>Data Usage:</strong> We respect your privacy and intellectual property. We will not use your User Content or Output for training our AI models or for any purpose other than providing the service to you, without your explicit consent. We also will not disclose or share your uploaded documents or outputs with any third party except as needed to deliver the service (for example, if we use a cloud storage or translation API, which would be disclosed in our Privacy Policy) or as required by law.
                        </p>

                        <h4 className="mb-10">4.4 Feedback</h4>
                        <p className="mb-30">
                          If you provide feedback, suggestions, or ideas regarding Ligit ("Feedback"), you acknowledge that such Feedback is given voluntarily and the Company may use it without obligation or compensation to you. Any improvements or features based on your Feedback will be solely owned by the Company.
                        </p>

                        <h3 className="mb-20">5. Acceptable Use and Prohibited Activities</h3>
                        <p className="mb-20">
                          You agree to use Ligit only for lawful purposes and in compliance with these Terms and all applicable laws and regulations. By using the Service, you agree that you will NOT:
                        </p>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>Violate Laws or Rights:</strong> Use the platform for any unlawful purpose or in violation of any local, state, national, or international laws. This includes (but is not limited to) not using Ligit to engage in fraud, money laundering, or to infringe upon intellectual property, privacy, or other rights of others. You must not upload or input any content that you do not have the right to use or that is defamatory, obscene, invasive of privacy, or otherwise objectionable or illegal.</li>
                          <li className="mb-10"><strong>Impersonation and Unauthorized Access:</strong> Impersonate any person or entity (such as by pretending to be someone else or misrepresenting your affiliation with a person or entity), or use or attempt to use another user's account without authorization. You will not attempt to gain unauthorized access to any part of the platform, its accounts, computer systems, or networks. If you are a law firm or company, you will not allow individuals who have not agreed to these Terms to use your account.</li>
                          <li className="mb-10"><strong>Harmful Activities:</strong> Upload, transmit, or distribute any viruses, malware, or other harmful code through Ligit. You will not do anything that could disable, overburden, damage, or impair the platform (such as a denial-of-service attack) or interfere with other users' ability to use Ligit. Any attempt to probe, scan, or test the vulnerability of our system or breach any security or authentication measures is prohibited.</li>
                          <li className="mb-10"><strong>Automated Use and Scraping:</strong> Use any robot, scraper, crawler, or other automated means to access the service or extract data (for either data harvesting or any purpose) without our express permission. Similarly, you may not engage in "screen scraping", "database scraping", or any other activity intended to collect, store, reorganize, or manipulate data from the platform.</li>
                          <li className="mb-10"><strong>Misuse of Output:</strong> Sell, resell, or commercially exploit the service or outputs generated through the service, except as expressly permitted by the Company. For example, you should not generate bulk outputs via Ligit and then charge third parties for those outputs as a standalone product. The services and outputs are meant for your professional use within your own legal matters or within your firm's practice, not for creating a competing repository or product out of Ligit's results.</li>
                          <li className="mb-10"><strong>Interference and Other Violations:</strong> Engage in any other conduct that, in our determination, restricts or inhibits anyone's use or enjoyment of the service, or which may harm the Company or other users, or expose them to liability. This includes attempting to manipulate the service's results or reliability (e.g., by inputting deliberately harmful or irrelevant data repeatedly) or to circumvent any usage limits or security measures we have put in place.</li>
                        </ul>
                        <p className="mb-30">
                          Violation of any of the above may result in immediate suspension or termination of your account, and may subject you to legal consequences. The Company reserves the right to investigate any misuse and cooperate with law enforcement authorities in prosecuting users who violate these Terms.
                        </p>

                        <h3 className="mb-20">6. Privacy and Data Protection</h3>
                        <p className="mb-20">
                          Your use of Ligit is subject to our Privacy Policy, which describes how we collect, use, store, and protect your personal data and user content. By using the service, you consent to the data practices described in the Privacy Policy. Some key points regarding data and privacy on Ligit include:
                        </p>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>Personal Information:</strong> We will collect certain personal information during account registration and usage (such as contact details and usage logs). This information will be used in accordance with our Privacy Policy (for account management, providing services, improving features, etc.).</li>
                          <li className="mb-10"><strong>User Content Confidentiality:</strong> We understand the sensitive nature of legal documents. We treat User Content (uploaded documents, case information, etc.) as confidential. We implement appropriate technical and organizational measures to secure your data against unauthorized access or disclosure. Unless required by law or for the specific operation of services, our team will not access or view your uploaded documents. We will not share your User Content with any third party except with service providers as necessary to provide and support the Ligit services (and in such cases, subject to strict confidentiality obligations).</li>
                          <li className="mb-10"><strong>No Unauthorized Use of Data:</strong> As stated in Section 4.3, we do not use your content to train our AI models or for marketing purposes without permission. Your documents and data remain your property, and we act as a processor of that data on your behalf. We will also delete your stored User Content and outputs from our systems upon your request or after a period following termination of your account, as outlined in the Privacy Policy (subject to any legal obligations to retain data).</li>
                          <li className="mb-10"><strong>Data Security:</strong> We are ISO 27001 and SOC 2 compliant (if applicable) and follow industry best practices to protect your data. However, no method of transmission or storage is 100% secure. By using Ligit, you acknowledge that there are inherent risks in transmitting data over the internet, and while we strive to protect your information, we cannot guarantee absolute security. You are responsible for using secure networks and devices when accessing Ligit to further protect your data.</li>
                          <li className="mb-10"><strong>Legal Compliance:</strong> We will comply with all applicable data protection and privacy laws in India. If you are using Ligit from outside India (though our services are primarily for India-based users), be aware that your data may be processed and stored on servers located in India and thus subject to Indian laws. By using the platform, you consent to such processing.</li>
                          <li className="mb-10"><strong>Cookies:</strong> The platform may use cookies or similar technologies to enhance user experience, remember preferences, and collect usage statistics. For details, please refer to our Cookie Policy. By using the service, you agree to our use of cookies as described in that policy.</li>
                        </ul>
                        <p className="mb-30">
                          If there is a security breach or incident involving your data, we will notify you as required by law and work to mitigate any effects. For full details on our data handling practices, please review the Privacy Policy.
                        </p>

                        <h3 className="mb-20">7. Disclaimers (No Legal Advice)</h3>
                        <p className="mb-20">
                          <strong>Use of AI – Not Legal Advice:</strong> Ligit provides tools to assist with legal research and document handling, but the Services do not constitute legal advice or counsel. No lawyer-client relationship is created between you and Ligit or Inflekt Core Pvt. Ltd. by using these services. The outputs and information provided by the platform (such as case summaries, draft documents, or translations) are for informational and efficiency purposes only. You should always verify the accuracy and appropriateness of the AI-generated output with a qualified lawyer or through your own professional judgment before relying on it in any legal matter. Any reliance you place on the information from Ligit is at your own risk.
                        </p>
                        <p className="mb-20">
                          <strong>Accuracy and "As-Is" Basis:</strong> The Ligit platform and all content and services are provided on an "as is" and "as available" basis without any warranty of any kind. While we strive for high quality and accuracy, we do not guarantee:
                        </p>
                        <ul className="mb-30">
                          <li className="mb-10">that the information or results obtained through Ligit will be completely accurate, reliable, or up-to-date, or suitable for your particular purpose. For example, the legal research results or document summaries might not capture every detail or might contain errors or omissions. Always cross-check important results.</li>
                          <li className="mb-10">that the platform will be available at all times, uninterrupted, or error-free. We do not warrant that access to Ligit will be continuous or that the platform will be free of viruses or other harmful components (though we make efforts to prevent such issues). Downtime, maintenance, or technical issues may occur.</li>
                          <li className="mb-10">that any defects or bugs will be corrected, or that the service will meet all of your expectations. The quality, speed, and results may vary and are dependent on many factors (including the information you provide).</li>
                        </ul>
                        <p className="mb-20">
                          <strong>Third-Party Content:</strong> In providing legal research or other services, Ligit may incorporate or provide links to third-party content such as external websites, legal databases, court judgments, statutes, or translations provided by third-party APIs. Such content is not under our control. We do not endorse or assume any responsibility for third-party websites or content that may be accessible via Ligit. If Ligit's results include excerpts or references from third-party sources, those are provided for convenience and you should ensure their accuracy from the official source. You are also expected to adhere to any applicable terms of use or copyright restrictions for third-party content (e.g., fair use of case law excerpts) when using such content through Ligit. We encourage you to consult official repositories or publications for authoritative texts of laws and judgments.
                        </p>
                        <p className="mb-20">
                          <strong>No Warranty:</strong> To the fullest extent permitted by law, the Company disclaims all warranties, either express or implied, regarding the platform and services, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranties arising out of course of dealing or usage of trade. Ligit is a tool to assist you, but you remain responsible for the outcomes of your legal matters. We make no guarantee that using Ligit will result in any specific outcome for your cases or work.
                        </p>
                        <p className="mb-20">
                          <strong>Professional Judgment:</strong> You acknowledge that AI technology has limitations. It may not comprehend all nuances of a legal case or local law, and it does not have human legal reasoning or ethical judgment. You must use your own professional judgment and/or consult legal professionals when interpreting results. If you are not a licensed attorney, you should not rely on Ligit to advise a third-party, and if you are a licensed attorney, you should not delegate your professional responsibilities to the platform.
                        </p>
                        <p className="mb-30">
                          Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you. In such cases, any implied warranties are limited to the minimum scope and duration permitted by law.
                        </p>

                        <h3 className="mb-20">8. Limitation of Liability</h3>
                        <p className="mb-20">
                          To the maximum extent permitted by applicable law, Inflekt Core Pvt. Ltd. (Ligit) and its directors, officers, employees, agents, partners, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenues, data, goodwill, or other intangible losses, arising out of or related to your use of (or inability to use) the Ligit platform or services. This limitation of liability applies regardless of the legal theory (contract, tort, negligence, strict liability, or otherwise) even if we have been advised of the possibility of such damages.
                        </p>
                        <p className="mb-20">In particular, the Company will not be liable for:</p>
                        <ul className="mb-30">
                          <li className="mb-10">errors, mistakes, or inaccuracies of content or results obtained through the service;</li>
                          <li className="mb-10">any decision made or action taken by you in reliance on the outputs of Ligit (for example, any legal filing or court argument based on AI research or drafts);</li>
                          <li className="mb-10">any unauthorized access to or use of our servers and/or any personal or financial information stored therein;</li>
                          <li className="mb-10">any interruption or cessation of transmission to or from the service;</li>
                          <li className="mb-10">bugs, viruses, trojan horses, or the like that may be transmitted to or through our service by any third party; or</li>
                          <li className="mb-10">events beyond our reasonable control (force majeure events, see Miscellaneous).</li>
                        </ul>
                        <p className="mb-20">
                          <strong>Cap on Liability:</strong> If, notwithstanding the above, the Company is found liable to you for any damage or loss arising from or connected to your use of Ligit, our total cumulative liability shall not exceed the amount actually paid by you to the Company for the services in the twelve (12) months immediately preceding the event giving rise to the claim. If you have not paid any amount (for example, using a free trial or free services), the Company's total liability shall be zero to the fullest extent permissible by law.
                        </p>
                        <p className="mb-30">
                          This limitation is an essential part of the bargain between you and the Company, and it applies even if a remedy fails of its essential purpose. Some jurisdictions do not allow the exclusion or limitation of certain damages; in such cases, our liability will be limited to the smallest extent permitted by law.
                        </p>

                        <h3 className="mb-20">9. Indemnification</h3>
                        <p className="mb-20">
                          You agree to indemnify, defend, and hold harmless Inflekt Core Private Limited (and its officers, directors, employees, agents, affiliates, and partners) from and against any and all claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) that arise out of or relate to:
                        </p>
                        <ul className="mb-30">
                          <li className="mb-10">(a) your violation of these Terms or any policy incorporated herein (such as the Privacy Policy),</li>
                          <li className="mb-10">(b) your violation of any applicable law or regulation,</li>
                          <li className="mb-10">(c) your infringement or violation of any intellectual property or other rights of any third party (such as by uploading content to Ligit that you had no right to use, or by using AI outputs in a way that infringes someone's rights), or</li>
                          <li className="mb-10">(d) any misuse of the Ligit platform, including by anyone using your account (with or without your permission).</li>
                        </ul>
                        <p className="mb-30">
                          We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you (at your expense), in which event you will cooperate with us in asserting any available defenses. You agree not to settle any such matter without the prior written consent of the Company. Your indemnification obligation will survive any termination or expiration of these Terms and your use of the services.
                        </p>

                        <h3 className="mb-20">10. Cancellation and Termination</h3>
                        
                        <h4 className="mb-10">10.1 User Cancellation</h4>
                        <p className="mb-30">
                          You may cancel your subscription or delete your Ligit account at any time. Cancellation requests should be made via the account settings on the platform or by contacting us through the provided support channels. If you cancel a paid subscription, you will continue to have access to the subscribed services until the end of your current billing period (unless otherwise stated). Your subscription will not be renewed after cancellation. No refunds will be provided for the remaining period of a subscription unless expressly provided in our Refund Policy or required by law (see Refunds in Section 3). One-time purchase services cannot be "canceled" once delivered, but you can choose not to use the service again. After account cancellation, you will lose access to the services, and we may delete your data in accordance with our data retention policy (refer to the Privacy Policy for details on data deletion).
                        </p>

                        <h4 className="mb-10">10.2 Company Termination or Suspension</h4>
                        <p className="mb-20">We reserve the right to immediately suspend or terminate your access to Ligit (in whole or in part) at our sole discretion upon notice to you (including email notice or notification on the platform) if:</p>
                        <ul className="mb-30">
                          <li className="mb-10">(i) you breach any provision of these Terms or violate any applicable law or regulation;</li>
                          <li className="mb-10">(ii) your use of the service poses a security risk or may adversely impact the platform or any other users;</li>
                          <li className="mb-10">(iii) we suspect fraud or misuse of the service by you; or</li>
                          <li className="mb-10">(iv) for any other reason where we reasonably deem termination necessary.</li>
                        </ul>
                        <p className="mb-30">
                          In certain cases of severe violation (e.g., using the service for illegal activities, attempting to hack the system, etc.), termination may be immediate and without prior notice. We may also suspend the service or your account as needed to comply with law enforcement requests or court orders.
                        </p>
                        <p className="mb-30">
                          Additionally, the Company reserves the right to discontinue the Ligit platform or any portion of the services at any time for commercial or operational reasons. If we decide to cease operations of Ligit entirely, we will provide notice to users and, if feasible, allow you to download your stored data or documents before shutdown.
                        </p>

                        <h4 className="mb-10">10.3 Effect of Termination</h4>
                        <p className="mb-20">Upon termination of your account by you or by us for any reason:</p>
                        <ul className="mb-30">
                          <li className="mb-10">Your right to access and use the Ligit services will immediately cease. You must stop using the platform and refrain from any further use.</li>
                          <li className="mb-10">If termination occurs in the middle of a subscription term that you paid for, you will not be entitled to any refund for the unused portion except as provided in the Refund Policy or required by law.</li>
                          <li className="mb-10">We will deactivate or delete your account, and delete or render inaccessible your content stored on the platform, in accordance with our data retention practices. It is your responsibility to export or download any important data or documents prior to cancellation or termination. We are not liable for any data loss due to account termination, so please ensure you have backups of your documents.</li>
                          <li className="mb-10">Any provisions of these Terms which by their nature should survive termination (such as indemnification, limitation of liability, ownership, dispute resolution, etc.) shall survive. Termination does not relieve you of any obligations to pay any outstanding fees or charges accrued up to the date of termination.</li>
                        </ul>

                        <h3 className="mb-20">11. Governing Law and Dispute Resolution</h3>
                        <p className="mb-30">
                          These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Ligit is intended for users in India, and we operate in compliance with Indian laws and regulations.
                        </p>

                        <h4 className="mb-10">11.1 Amicable Resolution</h4>
                        <p className="mb-30">
                          In the event of any dispute, claim, question, or disagreement arising from or relating to these Terms or your use of Ligit, the parties shall first use their best efforts to settle the dispute through good faith negotiations. You agree to contact us at the contact information provided on the Ligit platform to discuss any issue, and we will attempt to resolve it informally.
                        </p>

                        <h4 className="mb-10">11.2 Arbitration</h4>
                        <p className="mb-30">
                          If a dispute cannot be resolved amicably within 30 days from the time informal resolution is pursued, the dispute shall be finally settled by binding arbitration in accordance with the Indian Arbitration and Conciliation Act, 1996. The arbitration will be conducted by a sole arbitrator appointed by the Company. The seat and venue of arbitration shall be Gurugram, Haryana, India (or New Delhi, if Gurugram is not available), and the arbitration proceedings shall be conducted in English. Each party shall bear its own costs for the arbitration, and share equally the fees of the arbitrator, unless the arbitrator's award provides otherwise. The award rendered by the arbitrator shall be final and binding on both parties, and judgment on the award may be entered in any court of competent jurisdiction.
                        </p>

                        <h4 className="mb-10">11.3 Jurisdiction</h4>
                        <p className="mb-30">
                          Subject to the above arbitration clause, any dispute or claim that is not subject to arbitration will be adjudicated exclusively in the courts of Gurugram, Haryana, India. Both you and the Company agree to submit to the personal jurisdiction of the courts located in Gurugram, Haryana for the purpose of litigating such claims or to seek interim/interlocutory relief or enforcement of the arbitration award, if necessary. You agree that Gurugram, Haryana is a convenient forum and you waive any objection to the jurisdiction or venue of those courts.
                        </p>

                        <h4 className="mb-10">11.4 Injunctive Relief</h4>
                        <p className="mb-30">
                          Notwithstanding the above, we reserve the right to seek injunctive or equitable relief in any court of competent jurisdiction if you have violated or threatened to violate the intellectual property or other proprietary rights of the Company or a third party, since monetary damages may not adequately remedy such violation.
                        </p>

                        <h3 className="mb-20">12. Changes to Terms</h3>
                        <p className="mb-30">
                          We may revise or update these Terms from time to time. We reserve the right to modify these Terms at any time. If we make material changes, we will provide notice to you by e-mail (to the address registered with your account) or by prominently posting a notice on the Ligit website or dashboard. The updated Terms will be effective as of the effective date indicated at the top of the Terms (or if no date is stated, as of the date posted). Continued use of the Ligit services after any changes constitutes your acceptance of the revised Terms. If you do not agree to the updated Terms, you must stop using the services and, if applicable, cancel your subscription.
                        </p>
                        <p className="mb-30">
                          We encourage you to review the Terms periodically to ensure you understand the terms and conditions that apply to your use of Ligit.
                        </p>

                        <h3 className="mb-20">13. Miscellaneous Provisions</h3>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>Force Majeure:</strong> Neither party shall be liable for any failure or delay in performance (except payment obligations) due to events beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, civil unrest, pandemic, strikes or labor disputes, internet or telecommunications failures, or government actions. In such an event, the affected party shall be relieved from performance to the extent affected, provided that the party resumes performance as soon as reasonably possible.</li>
                          <li className="mb-10"><strong>Notices:</strong> The Company may provide notices or communications to you via email (to the address associated with your account), through notifications within the platform, or by other reasonable means. You are responsible for keeping your contact information up to date. Notices to the Company should be sent to the official email or address provided on our website (e.g., for legal notices, use the Company's registered office address or designated email if specified). Notices will be deemed received: (a) if by email, on the day sent (or the next business day if sent after business hours); (b) if by courier, upon delivery confirmation; (c) if by posting on our website or platform, at the time of posting.</li>
                          <li className="mb-10"><strong>Relationship of Parties:</strong> You and the Company are independent contracting parties. These Terms do not create any agency, partnership, joint venture, or employment relationship between us. Neither party has any authority to bind the other or act on the other's behalf in any way. Engagement with Ligit is on an independent contractor basis for all purposes.</li>
                          <li className="mb-10"><strong>Assignment:</strong> You may not assign or transfer these Terms or any of your rights or obligations under these Terms to any third party without our prior written consent. Any attempted assignment without consent is void. We may assign or transfer our rights and obligations under these Terms to an affiliate or in connection with a merger, acquisition, sale of assets, or by operation of law, and will notify you of any such assignment. These Terms shall inure to the benefit of and be binding upon the parties and their permitted successors and assigns.</li>
                          <li className="mb-10"><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy, Disclaimer, and any other policies or additional terms referenced herein, constitute the entire agreement between you and the Company regarding the Ligit services, and supersede all prior or contemporaneous communications, understandings, or agreements (whether oral or written). If you or your organization have a separate written agreement with Inflekt Core Pvt. Ltd. for the Ligit services (e.g., an enterprise contract), the terms of that separate agreement will govern to the extent there is any conflict with these Terms.</li>
                          <li className="mb-10"><strong>Waiver:</strong> No waiver by the Company of any term or condition set forth in these Terms shall be deemed a further or continuing waiver of such term or any other term, and any failure of the Company to assert a right or provision under these Terms shall not constitute a waiver of such right or provision. In order for any waiver of compliance with these Terms to be binding, it must be provided in writing by an authorized representative of the Company.</li>
                          <li className="mb-10"><strong>Severability:</strong> If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court or arbitrator of competent jurisdiction, such provision shall be enforced to the maximum extent permissible, and the remaining provisions of these Terms will remain in full force and effect. The invalid or unenforceable provision shall be deemed modified to the least degree necessary to remedy the invalidity while retaining as much of the parties' original intent as possible.</li>
                          <li className="mb-10"><strong>No Third-Party Beneficiaries:</strong> These Terms are for the benefit of you and the Company (and permitted successors/assigns). Except as expressly provided herein, no third party shall have any rights to enforce any terms of this agreement.</li>
                          <li className="mb-10"><strong>Headings:</strong> Section headings in these Terms are for convenience only and have no legal or contractual effect.</li>
                          <li className="mb-10"><strong>Customer Communications:</strong> By creating an account, you agree that we may send you informational and promotional emails or messages. This includes newsletters, product updates, and marketing communications. You can opt out of non-essential communications (such as marketing emails) at any time by using the unsubscribe link in the email or contacting support. Even after an opt-out, we may still send you transactional or account-related communications (e.g., password resets, billing notices).</li>
                          <li className="mb-10"><strong>Contact Information:</strong> If you have any questions or concerns about these Terms or the Ligit services, please contact us at our official support email or through the contact form on our website. (Support email: _____________ or as provided on the Ligit site).</li>
                        </ul>
                        <p className="mb-30">
                          By using Ligit, you acknowledge that you have read, understood, and agree to these Terms and Conditions. Thank you for choosing Ligit to assist in your legal work.
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