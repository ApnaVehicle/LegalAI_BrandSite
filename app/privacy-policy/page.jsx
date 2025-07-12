import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import { ligitNavigationMultipage } from "@/data/menu";
import ParallaxContainer from "@/components/common/ParallaxContainer";

export const metadata = {
  title: "Privacy Policy - Ligit",
  description: "Privacy Policy for Ligit - Your Intelligent Legal AI Assistant",
};

export default function PrivacyPolicy() {
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
                        Privacy Policy
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
                        <h2 className="section-title-small mb-30">Ligit Privacy Policy</h2>
                        <p className="text-gray mb-30">Last updated: July 13, 2025</p>
                        
                        <h3 className="mb-20">Introduction</h3>
                        <p className="mb-30">
                          Ligit ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains what personal data we collect, how we use and share it, and the rights and choices you have regarding your information. By using Ligit's services (the "Services"), you agree to the collection and use of information in accordance with this Policy.
                        </p>

                        <h3 className="mb-20">Information We Collect</h3>
                        <p className="mb-20">
                          We collect various categories of personal and sensitive information to provide and improve our Services. This includes:
                        </p>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>Personal Identifiers:</strong> Name, email address, and contact information you provide when creating an account or contacting us. We may also collect professional details such as your bar registration number or other legal accreditation if you provide them for verification.</li>
                          <li className="mb-10"><strong>Payment Information:</strong> If you make purchases or subscribe to paid Services, we (through our payment processor) collect billing details such as credit/debit card information and billing address. Note: Ligit uses a secure third-party payment processor (e.g. Stripe) to handle your payment transactions, so we do not store your full payment card numbers on our servers.</li>
                          <li className="mb-10"><strong>User Content:</strong> Any legal documents, case files, or other materials you upload to our platform. This content may include sensitive personal or confidential information. We encrypt and store these documents to enable the Services (e.g. for analysis by our AI). Sensitive legal documents are stored securely, and you control who can access them through your account.</li>
                          <li className="mb-10"><strong>Analytics and Usage Data:</strong> We automatically collect certain technical data when you use Ligit. This may include your IP address, browser type, device information, pages viewed, features used, login timestamps, and cookies or similar tracking identifiers. This data helps us understand how users interact with our platform.</li>
                          <li className="mb-10"><strong>Communications:</strong> If you contact support or otherwise communicate with us (e.g. via email or chat), we will collect the information you provide in those interactions (such as inquiries or feedback). We may also keep records of our correspondence.</li>
                        </ul>
                        <p className="mb-30">
                          We collect the above information either directly from you (e.g. when you fill out forms or upload documents) or automatically through your use of the Services (e.g. via cookies or log files).
                        </p>

                        <h3 className="mb-20">How We Use Your Information</h3>
                        <p className="mb-20">
                          We use the collected information for the following purposes:
                        </p>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>Providing and Improving the Service:</strong> We process your personal data to create and manage your account, authenticate you, and deliver the features of Ligit. For example, we use your uploaded legal documents to perform analyses or generate outputs via our AI tools. We also use data to troubleshoot, debug, and improve core functionality.</li>
                          <li className="mb-10"><strong>AI Processing of Documents:</strong> When you use Ligit's AI features (such as document analysis or drafting assistance), your input data (including text or documents) may be sent to our third-party AI provider (AI Service Provider) for processing. This allows us to generate answers or perform the legal document analysis you request. According to AI Service Provider's policies, they do not use data submitted via their API to train their public models, and they retain API data only temporarily (for up to 30 days) to monitor for abuse. This means your documents and queries are processed securely and not used to improve AI Service Provider's models by default. (See Data Sharing below for more on third-party processing.)</li>
                          <li className="mb-10"><strong>Payment Processing:</strong> We use your payment and contact information to process subscription fees or transactions for paid Services. Payments are handled through our third-party payment processor (e.g. Stripe), which is PCI-DSS compliant and ensures the security of your financial data. We only receive limited information from the payment processor (such as a confirmation of payment, your name, and the last four digits of your card) for record-keeping.</li>
                          <li className="mb-10"><strong>Analytics and User Experience:</strong> We use analytics tools (e.g. Google Analytics) to collect usage data and cookies. This helps us understand user engagement, such as which features are most used, so we can improve the interface and functionality. For instance, we analyze aggregate usage patterns to troubleshoot performance issues and optimize our Services. These analytics may also help us gauge the effectiveness of new features or marketing campaigns.</li>
                          <li className="mb-10"><strong>Service Communications:</strong> We may use your email to send important notices about your account or the Service (e.g. password resets, security alerts, policy updates). We may also send newsletters or promotional emails about new features if you have opted in to receive them. You can unsubscribe from marketing emails at any time.</li>
                          <li className="mb-10"><strong>Model Improvement and Research:</strong> With appropriate safeguards, we may use user data to improve our AI models and services. For example, we might review anonymized excerpts of user queries or documents to refine our algorithms, expand our knowledge base, or train custom models to better handle legal language. This is done in accordance with user consent and applicable laws. If we intend to use any of your personal or sensitive data for internal research or model training beyond providing you the Service, we will either aggregate/anonymize the data or obtain your explicit consent.</li>
                          <li className="mb-10"><strong>Legal Compliance and Protection:</strong> We may use your information as necessary to comply with applicable laws, regulations, legal processes, or enforceable governmental requests. Additionally, we may process data to investigate and prevent fraudulent transactions, unauthorized access, or other illegal activities, and to enforce our Terms of Service or other agreements. This includes using information to resolve disputes or protect the rights and safety of Ligit, our users, or others.</li>
                        </ul>
                        <p className="mb-30">
                          We will only use your personal data for the purposes above or for compatible purposes. If we need to use your data for an unrelated purpose, we will update this Policy or seek your consent as required.
                        </p>

                        <h3 className="mb-20">How We Share and Disclose Information</h3>
                        <p className="mb-20">
                          We do not sell your personal information. However, we do share certain data with trusted third parties, but only in the following circumstances:
                        </p>
                        <h4 className="mb-10">Service Providers and Partners:</h4>
                        <p className="mb-10">We share information with third-party companies that help us run our business and provide the Services on our behalf ("processors"). These include:</p>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>Payment Processors:</strong> As noted, if you make payments, your payment details are transmitted to our payment partner (such as Stripe) to process the transaction. Stripe will handle and store your payment information in accordance with their privacy policy and applicable security standards.</li>
                          <li className="mb-10"><strong>Analytics Providers:</strong> We use analytics services like Google Analytics to collect website/app usage data. These providers set cookies or use similar identifiers to gather information about your interactions with Ligit. This information (e.g. your IP address, pages visited, time spent) is shared with Google Analytics for the purpose of analyzing and improving our website. Google may process this data to compile aggregate trends and provide us insights. (You can opt out of Google Analytics as described in Cookies & Tracking below.)</li>
                          <li className="mb-10"><strong>AI Processing (AI Service Provider):</strong> When you utilize AI features, your relevant data (such as text prompts or document content) is sent to AI Service Provider's API for processing. This means AI Service Provider will briefly receive and hold that data to generate a response. AI Service Provider has committed that API data is not used to train their general models without permission and is only retained for a short period to detect misuse. We have a data processing agreement with AI Service Provider to ensure your data is handled confidentially and securely during these operations.</li>
                          <li className="mb-10"><strong>Cloud Hosting and Storage:</strong> Ligit is hosted on secure cloud servers (for example, on AWS or similar providers). Thus, any data you store with us (your profile information, documents, etc.) resides on those cloud servers. Our cloud providers may technically have access to stored data as part of maintaining the infrastructure, but they are bound by strict confidentiality and security obligations. We use encryption and other safeguards (described in Data Security below) to protect data on cloud servers.</li>
                          <li className="mb-10"><strong>Email/Communication Services:</strong> If we send emails or support messages, we might use a third-party email service (for instance, an email delivery service or chat support platform) to send those communications. That service would process your contact information solely to send the emails on our behalf.</li>
                        </ul>

                        <h4 className="mb-10">Business Transfers:</h4>
                        <p className="mb-30">
                          If Ligit is involved in a merger, acquisition, investment, financing, or sale of all or a portion of its assets, your information may be disclosed to the parties involved (e.g. to lawyers, auditors, potential buyers) as part of due diligence or transferred as an asset. If such a transfer occurs, we will ensure the recipient of your data is bound by privacy obligations consistent with this Policy, and we will notify you of any change in data ownership or use.
                        </p>

                        <h4 className="mb-10">Legal Requirements:</h4>
                        <p className="mb-30">
                          We may disclose personal information if required to do so by law or in response to valid legal requests (such as a subpoena, court order, or government demand). We will also disclose data if we believe in good faith that such action is necessary to (a) comply with a legal obligation, (b) protect and defend the rights, property, or safety of Ligit, our users, or others, (c) investigate or assist in preventing any violation of law or our Terms of Service, or (d) detect, prevent, or address fraud, security, or technical issues.
                        </p>

                        <h4 className="mb-10">With Your Consent or Direction:</h4>
                        <p className="mb-30">
                          We may share your information with third parties (or publicly) if you explicitly request or consent for us to do so. For example, if as a user you opt to integrate Ligit with another service or instruct us to share data with a colleague, we will do so at your direction.
                        </p>

                        <p className="mb-30">
                          All third-party service providers that receive personal data from us are contractually obligated to protect it and only use it for the purposes of providing their specific services to Ligit. We take steps to ensure that any third parties we work with adhere to privacy and security standards as strict as our own.
                        </p>

                        <h3 className="mb-20">Cookies and Tracking Technologies</h3>
                        <p className="mb-20">
                          Ligit uses cookies and similar tracking technologies (such as web beacons or local storage) to enhance user experience, perform analytics, and support functionality:
                        </p>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>What Cookies Are:</strong> Cookies are small text files stored on your device by websites you visit. They help websites remember information about your visit, like your preferences or whether you're logged in.</li>
                          <li className="mb-10"><strong>How We Use Them:</strong> We use cookies for various purposes. For instance, we use session cookies to keep you logged in as you navigate through secure areas of the site. We also use preference cookies to remember your settings (e.g. language or interface customizations). Additionally, analytics cookies (from providers like Google Analytics) help us count visitors, see which pages/features are popular, and understand how users engage with our platform so we can improve it.</li>
                          <li className="mb-10"><strong>Third-Party Cookies:</strong> Some cookies are placed by third parties on our site. For example, Google Analytics may set cookies to collect usage statistics, and our payment provider might set cookies as part of their checkout process. These third-party cookies are governed by the third parties' own privacy policies. We do not have access to or control over these cookies once we permit them on our site.</li>
                          <li className="mb-10"><strong>Your Choices:</strong> Most web browsers automatically accept cookies, but you can modify your browser setting to decline cookies or alert you when cookies are being sent. However, please note that if you disable or delete cookies, some features of our Service (like staying logged in or remembering preferences) may not function properly. Google offers an opt-out mechanism for Analytics (tools.google.com/dlpage/gaoptout), which you can use to prevent your data from being used by Google Analytics. You can also use your browser's "Do Not Track" setting, though our site's response to DNT signals may vary.</li>
                        </ul>
                        <p className="mb-30">
                          By using our site without disabling cookies, you consent to our use of cookies and similar technologies. We will request any required consent (for example, if applicable law requires an explicit opt-in for certain cookies) via a cookie consent banner on our site.
                        </p>

                        <h3 className="mb-20">Data Storage and Retention</h3>
                        <h4 className="mb-10">Storage Location:</h4>
                        <p className="mb-30">
                          Your data is stored on secure servers. We use reputable cloud infrastructure providers to host our application and database. These servers may be located in India or in other countries where the provider operates data centers. Regardless of location, we implement protections to ensure your data remains secure and in compliance with applicable data protection laws. If your data is transferred to or stored in a jurisdiction different from your own, we take steps (such as standard contractual clauses or equivalent safeguards) to protect it and ensure that cross-border data transfers comply with legal requirements.
                        </p>

                        <h4 className="mb-10">Retention Period:</h4>
                        <p className="mb-20">We retain personal data only as long as necessary for the purposes described in this Policy or as required by law. The retention duration may vary by data type and context:</p>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>Account Information:</strong> We keep your profile information (like name, contact details) and account credentials for as long as your account is active. If you decide to delete your account or if your account becomes inactive for an extended period, we will initiate deletion of this information, except for data we are required to keep for legal reasons (e.g. tax records, dispute resolutions).</li>
                          <li className="mb-10"><strong>Uploaded Legal Documents:</strong> Documents and files you upload to Ligit are stored on our servers to enable your use of the Services. We retain these documents until you choose to delete them or as long as needed to provide you with the Service. You have control over removing your documents at any time. If you delete a document or your account, we will delete the document from our active systems. (However, please note that residual copies might remain temporarily in our backups – see below on backups.)</li>
                          <li className="mb-10"><strong>AI Processing Records:</strong> Content that is sent to our AI provider (AI Service Provider) during processing is not permanently stored by Ligit beyond the operation. AI Service Provider may retain the API inputs/outputs for a short period (up to 30 days) to monitor for abuse, after which they are deleted from AI Service Provider's systems. Ligit itself does not keep those transient AI interaction contents longer than necessary to deliver the result to you, except possibly in log records (which are also periodically purged).</li>
                          <li className="mb-10"><strong>Analytics Data:</strong> Analytics and website log data are typically retained for a limited period (for example, 12-18 months) for trend analysis and then either deleted or anonymized. We use aggregated analytics data (which no longer identifies individuals) indefinitely to help improve our service, but personal identifiers in analytics logs are removed or obscured after the retention period.</li>
                          <li className="mb-10"><strong>Communication Records:</strong> If you contacted support or we provided you with service-related communications, we may retain those communications and our responses for a period of time to assist with any ongoing needs or inquiries, and to improve our support process. These records are generally kept for as long as necessary to address or document the issue and then archived or deleted.</li>
                          <li className="mb-10"><strong>Legal Obligations and Disputes:</strong> In certain cases we may need to retain information for longer if required by law (for example, some financial transaction records must be kept for a number of years for accounting/tax compliance). Also, if we are resolving a dispute or enforcing our agreements, we will retain relevant information until the matter is closed.</li>
                        </ul>
                        <p className="mb-30">
                          After the applicable retention period, or upon your valid deletion request, we will securely dispose of or anonymize your personal data so that it can no longer be associated with you. When removing data, we follow documented processes and use industry-standard techniques to ensure data is fully erased or irreversibly de-identified.
                        </p>

                        <h4 className="mb-10">Backup and Archive:</h4>
                        <p className="mb-30">
                          Like most services, we perform routine backups of our systems to prevent data loss. Backup copies of data are kept for a limited time and are stored securely. If you delete data from our active database, that data will be excluded from future backups, but an earlier backup might still contain it until those backups are rotated out. We have retention limits on backups as well, after which they are automatically deleted. We do not use backup data for any other purposes except for recovery or to maintain the integrity of the Service.
                        </p>

                        <h3 className="mb-20">Data Security</h3>
                        <p className="mb-20">
                          We take the security of your personal data very seriously. Ligit implements a variety of administrative, technical, and physical security measures to safeguard your information from unauthorized access, disclosure, or alteration. These measures include:
                        </p>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>Encryption:</strong> All communications between your browser/app and our servers are encrypted using HTTPS (TLS) to prevent eavesdropping. Sensitive data (including stored files and personal details) is encrypted at rest on our databases or storage systems. For example, documents you upload may be stored in encrypted form on our cloud storage. In addition, passwords are hashed and salted rather than stored in plain text.</li>
                          <li className="mb-10"><strong>Access Controls:</strong> We restrict access to personal data strictly to authorized personnel who need it to operate, develop, or support the Service. Ligit team members and contractors who handle user data are bound by confidentiality obligations. Access to sensitive information (like user documents or production databases) is limited to personnel with clearance and is logged and monitored. We employ role-based access controls to ensure individuals only access data necessary for their job function.</li>
                          <li className="mb-10"><strong>Third-Party Security:</strong> When we engage third-party service providers (such as hosting or AI Service Provider), we review their security practices to ensure they meet high standards. For instance, our payment provider is certified to handle financial data securely, and our AI processing partner AI Service Provider uses strong security measures including data encryption at rest and in transit, and strict access controls. We also sign data protection agreements with such providers to contractually ensure your data is protected.</li>
                          <li className="mb-10"><strong>Monitoring and Testing:</strong> We monitor our systems for vulnerabilities or unauthorized access attempts. We use firewalls and intrusion detection systems on our servers. Regular security audits, code reviews, and penetration testing are conducted to identify and fix potential weaknesses. Software dependencies and infrastructure are kept up-to-date with security patches.</li>
                          <li className="mb-10"><strong>Organizational Measures:</strong> Our staff is trained on data privacy and security best practices. We have an incident response plan in case of any security breach. If any personal data breach occurs that poses a risk to users, we will notify affected individuals and/or regulators as required by law.</li>
                        </ul>
                        <p className="mb-30">
                          While we strive to protect your data, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security. However, we continuously work to update and improve our security practices. You also play a role in keeping your information safe by maintaining a strong password for your account, protecting your account credentials, and logging out after use. If you have reason to believe that your interaction with us or your data is no longer secure (for example, if you suspect your account has been compromised), please immediately contact us using the information in the Contact Us section below.
                        </p>

                        <h3 className="mb-20">Your Rights and Choices</h3>
                        <p className="mb-20">
                          We believe you should have control over your personal information. Subject to applicable laws, you have several rights regarding the data we hold about you:
                        </p>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>Access Your Data:</strong> You have the right to request a copy of the personal data we hold about you. We can confirm whether we are processing your personal information and provide you with a copy of that information, as well as details on its purpose, with whom it's shared, and how long we plan to keep it (to the extent required and permitted by law).</li>
                          <li className="mb-10"><strong>Rectification (Corrections):</strong> If any personal data we have is inaccurate or incomplete, you have the right to ask us to correct or update it. You can update some of your account information directly in your profile settings (e.g. you can change your email or name if there's a typo). For any information not editable via the platform, you can contact us to request correction.</li>
                          <li className="mb-10"><strong>Deletion (Right to Erasure):</strong> You have the right to request deletion of your personal data. This is sometimes called the "right to be forgotten." You can delete certain data on Ligit yourself – for example, you may remove documents you have uploaded, or you can delete your entire account via the account settings interface (if available) or by contacting support. If you request deletion of your personal information, we will erase your data from our active systems, unless we have a legitimate reason or legal obligation to keep it (for example, ongoing contractual relations, legal compliance, or resolving disputes). Note that it may take a short time to fully remove data from backups and caches, but we will aim to do so within a reasonable period.</li>
                          <li className="mb-10"><strong>Withdrawal of Consent:</strong> In cases where we rely on your consent to process data (such as for optional use of your data to improve our AI models, or receiving marketing emails), you have the right to withdraw that consent at any time. Withdrawing consent will not affect the lawfulness of any processing done before the withdrawal. For example, you can opt out of marketing communications by clicking the "unsubscribe" link in emails or adjusting your notification settings.</li>
                          <li className="mb-10"><strong>Objection to Processing:</strong> If applicable law (like GDPR) provides, you may have the right to object to certain processing activities. For instance, if we process your data based on our legitimate interests, you can object to that if you believe it impacts your rights. You also have the right to object to your personal data being used for direct marketing purposes.</li>
                          <li className="mb-10"><strong>Data Portability:</strong> To the extent provided by law, you can request a copy of certain information in a structured, commonly used, machine-readable format. For example, we can export data you provided to us (like your profile information and documents you uploaded) so you can use it with other services.</li>
                          <li className="mb-10"><strong>Automated Decision-Making:</strong> Ligit does not make any legally significant decisions about you solely by automated means. If we ever introduce automated decision-making that could significantly affect you, we will inform you and provide you with rights related to such processing as required by law.</li>
                        </ul>
                        <p className="mb-30">
                          To exercise any of your rights, please contact us at the email address provided in the Contact Us section. For security, we may need to verify your identity before fulfilling your request (for example, by asking you to confirm certain account details or using other verification methods). We will respond to your request within the timeframe required by law (e.g. within 30 days for many requests, with the possibility to extend that timeline if necessary and permitted).
                        </p>
                        <p className="mb-30">
                          Please note that these rights are not absolute – there are circumstances where we may be unable to comply with a request if it conflicts with legal obligations or other legitimate interests. If we refuse a request, we will explain the reasons, subject to any legal restrictions.
                        </p>

                        <h3 className="mb-20">International Users and Data Transfers</h3>
                        <p className="mb-20">
                          Ligit is based in [India]* and may have users and servers around the world. This means your personal data might be transferred to, or accessed from, jurisdictions outside of your home country. Specifically, if you are located outside of India, your data may be transferred to and stored on servers in India or other countries. Conversely, if you are in India, some of our service providers (like cloud or analytics providers) may be located outside India (such as in the United States or European Economic Area).
                        </p>
                        <p className="mb-20">
                          When we transfer personal data across borders, we take steps to ensure that adequate protections are in place. These steps include:
                        </p>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>Legal Adequacy:</strong> Only transferring data to countries that are deemed to have acceptable data protection laws under applicable regulations, or where we can ensure an adequate level of protection by other means.</li>
                          <li className="mb-10"><strong>Contractual Safeguards:</strong> Implementing standard contractual clauses or data processing agreements with recipients of the data. These are legal contracts approved by regulators to safeguard personal data transferred internationally.</li>
                          <li className="mb-10"><strong>Security Measures:</strong> Continuing to apply the security measures described in this Policy regardless of where your data is stored.</li>
                          <li className="mb-10"><strong>Compliance with Local Laws:</strong> We abide by all relevant data privacy laws. For example, if you are a resident of the European Union or United Kingdom, we will handle your data in compliance with the GDPR. If you are in India, we comply with the Information Technology Act and applicable privacy rules (and will adapt to the provisions of any new data protection law, such as the Digital Personal Data Protection Act, as it comes into effect).</li>
                        </ul>
                        <p className="mb-30">
                          By using Ligit's Services, you understand that your personal information may be transferred to our facilities and those third parties with whom we share it as described in this Policy, regardless of the jurisdiction. We will endeavor to protect your data according to this Policy no matter where it is processed.
                        </p>
                        <p className="mb-30">
                          (If Ligit is not based in India, the above reference would be adjusted to the correct base country. Company location and jurisdiction-specific details should be updated accordingly.)
                        </p>

                        <h3 className="mb-20">Children's Privacy</h3>
                        <p className="mb-30">
                          Our Services are not directed to individuals under the age of 18. Ligit is intended for use by legal professionals, organizations, and adults. We do not knowingly collect personal data from children. If you are under 18, please do not use the Service or provide any personal information to us.
                        </p>
                        <p className="mb-30">
                          If we become aware that we have inadvertently collected personal information from a child under 18 (or the relevant minimum age in your jurisdiction), we will take steps to delete such information promptly. Parents or guardians who believe that we might have any information from or about a minor may contact us to request deletion of the minor's data.
                        </p>

                        <h3 className="mb-20">Updates to This Privacy Policy</h3>
                        <p className="mb-30">
                          We may update or modify this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make changes, we will revise the "Last updated" date at the top of this Policy. If the changes are significant, we will provide a more prominent notice (such as by email notification or a notice on our website or application).
                        </p>
                        <p className="mb-30">
                          We encourage you to review this Policy periodically to stay informed about how we are protecting your information. Your continued use of the Services after any changes to this Policy become effective constitutes acceptance of those changes.
                        </p>
                        <p className="mb-30">
                          If you do not agree with the changes, you should stop using the Services and can request that we delete your personal data (as described above).
                        </p>

                        <h3 className="mb-20">Contact Us</h3>
                        <p className="mb-20">
                          If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:
                        </p>
                        <ul className="mb-30">
                          <li className="mb-10"><strong>Email:</strong> privacy@ligit.com (or support@ligit.com)</li>
                          <li className="mb-10"><strong>Address:</strong> Ligit Technologies Pvt. Ltd., [Street Address, City, State, Country] (replace with actual business address if applicable)</li>
                          <li className="mb-10"><strong>Contact Person:</strong> You may address your correspondence to the Data Protection Officer / Privacy Officer.</li>
                        </ul>
                        <p className="mb-30">
                          We will do our best to respond promptly and help resolve any issue or concern. If you feel that we have not adequately addressed your questions or if you have a dispute about privacy, you may also have the right to contact your local data protection authority or regulatory body.
                        </p>
                        <p className="mb-30">
                          By using Ligit, you acknowledge that you have read and understood this Privacy Policy. We value your trust and are dedicated to safeguarding your personal information while providing you with effective legal document services.
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