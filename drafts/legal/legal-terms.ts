import { legalEntity, type LegalSection } from "./legal";
import { contactEmail } from "@/lib/site";

const { name, governingState, venue } = legalEntity;

export const termsSections: readonly LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    content: [
      `These Terms of Use (the “Terms”) are an agreement between you and ${name} (“Iconus,” “we,” “us,” or “our”). They apply to iconus.org and any page that links to them (the “Site”), and to the Iconus genetic test kits, sample processing, reports, and patient and provider portals at my.iconus.org (together with the Site, the “Services”).`,
      "By using the Services, you agree to these Terms and to our Privacy Policy. If you do not agree, do not use the Services. When you register a kit or create a portal account, you may be asked to accept additional terms or consents. If those conflict with these Terms, the additional terms control for that part of the Services.",
    ],
  },
  {
    id: "eligibility",
    title: "Who may use the Services",
    content: [
      "You must be at least 18 years old and able to form a binding contract to use the Services. A parent or legal guardian may not register a kit for a minor unless we expressly allow it in writing.",
      "If you use the Services on behalf of a medical practice or other organization, you confirm that you are authorized to accept these Terms for that organization, and “you” includes that organization.",
      "The Services are offered only in the United States. Some tests may not be available in every state, and we may decline or cancel any order that we cannot lawfully fulfill.",
    ],
  },
  {
    id: "not-medical-advice",
    title: "Not medical advice",
    content: [
      "Iconus provides genetic information to help you and your healthcare provider have a more informed conversation. The Services do not provide medical advice, diagnosis, or treatment, and they do not replace the judgment of a licensed healthcare provider.",
      "Using the Services does not create a provider–patient relationship between you and Iconus. Panel descriptions, the panel quiz, and other Site content are general information only. The quiz suggests a starting point; it does not determine which test you need.",
      "Do not start, stop, or change any medication, supplement, peptide, diet, or treatment based on Iconus content or results without first talking with your provider. If you think you are having a medical emergency, call 911 or your local emergency number.",
    ],
  },
  {
    id: "provider-ordered",
    title: "Provider-ordered testing",
    content: [
      "Iconus tests are made available through licensed healthcare providers. Your provider decides whether a test is appropriate for you, which panel to order, and how to use the results in your care. Iconus does not choose tests for you and is not responsible for your provider’s clinical decisions.",
      "Providers who order Iconus tests are responsible for complying with the laws, licensing rules, and professional standards that apply to their practice, including obtaining any patient consent their state requires and reviewing results with their patients.",
    ],
  },
  {
    id: "understanding-results",
    title: "What genetic results can and cannot tell you",
    content: [
      "Iconus panels look at selected genetic markers. Results describe genetic tendencies, sometimes called propensities, based on current scientific research. Please keep the following in mind:",
      {
        list: [
          "Genes are only one factor in health. Lifestyle, environment, medical history, and other factors also matter, and many are not measured by our tests.",
          "A “Needs Attention” or higher-risk result does not mean you have, or will develop, a condition. An “Optimal” or lower-risk result does not mean you will not.",
          "Our panels do not test every gene or variant linked to a trait or condition, and scientific understanding of genetics changes over time.",
          "Unless your report expressly states otherwise, Iconus results are not intended to diagnose any disease and should be confirmed with clinical testing before being used for a medical decision.",
          "Information about how genetics may relate to response to peptides, medications, or supplements is informational only. Some substances named in our reports are not approved by the U.S. Food and Drug Administration for any use. Mentioning a substance is not a recommendation to use it.",
        ],
      },
      "Some panels include markers related to cancer predisposition, neurological conditions, mental health, and other sensitive topics. Results may be unexpected or upsetting, and they may also be relevant to your biological relatives. We encourage you to consider these possibilities before testing and to talk with your provider or a genetic counselor about your results.",
    ],
  },
  {
    id: "purchasing",
    title: "Purchasing through GenoGPO",
    content: [
      "Iconus kits are purchased through GenoGPO, a group purchasing organization, at genogpo.com. Pricing, payment, shipping, cancellations, and refunds for those purchases are governed by GenoGPO’s terms and policies. Prices and panel availability may change without notice.",
    ],
  },
  {
    id: "kits-and-samples",
    title: "Kits, samples, and reports",
    content: [
      "When you use an Iconus kit, you agree to:",
      {
        list: [
          "Provide a sample only from yourself, or from a person who has given you legal authority to submit it on their behalf.",
          "Provide accurate, complete registration information and keep it up to date.",
          "Follow the collection and return instructions included with the kit.",
          "Not sell, resell, or transfer a kit without our permission.",
        ],
      },
      "Samples are analyzed by a laboratory that we select. A laboratory may be unable to produce results if a sample is insufficient, contaminated, damaged in transit, or fails quality checks. In that case, we may ask for a new sample. We are not responsible for delays or loss caused by carriers.",
      "Turnaround times, such as “about 3–4 weeks,” are estimates and are not guaranteed. How samples and genetic data are stored, retained, and destroyed is described in our Privacy Policy and in any consent you accept when registering your kit.",
    ],
  },
  {
    id: "accounts",
    title: "Portal accounts",
    content: [
      `Viewing results requires an account on the Iconus portal at my.iconus.org. You are responsible for keeping your login credentials confidential and for all activity under your account. Tell us right away at ${contactEmail} if you believe your account has been accessed without your permission.`,
      "When results are ready, they may be shared with both you and the provider who ordered your test. Providers may only access results for patients they are authorized to treat.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: [
      "You agree not to:",
      {
        list: [
          "Use the Services in violation of any law, or to violate anyone else’s rights, including their privacy.",
          "Submit a sample from another person without their legal authorization, or attempt to obtain someone else’s genetic information.",
          "Access or attempt to access accounts, systems, or data you are not authorized to use.",
          "Interfere with the Services, including by introducing malware, overloading our systems, or bypassing security features.",
          "Scrape, copy, or collect content or data from the Services using automated means without our written permission.",
          "Copy, modify, reverse engineer, or create derivative works from the Services, except as the law expressly permits.",
          "Present Iconus content, quiz suggestions, or results as medical advice or a diagnosis.",
        ],
      },
      "We may suspend or end your access to the Services if we reasonably believe you have violated these Terms.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: [
      "The Services, including text, graphics, logos, report designs, and software, are owned by Iconus or its licensors and are protected by intellectual property laws. Iconus and the Iconus logo are our trademarks.",
      "We give you a limited, personal, non-exclusive, non-transferable, revocable license to use the Services for their intended purpose. You may view and share links to the Site, and you may keep and share your own report for personal or clinical use. Any other use requires our written permission.",
      "If you send us feedback or ideas, we may use them without any obligation to you.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party sites and services",
    content: [
      "The Services may link to or rely on websites and services operated by others, including GenoGPO, shipping carriers, and laboratory partners. We do not control and are not responsible for third-party sites or services, and your use of them is governed by their own terms and privacy policies.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: [
      "TO THE FULLEST EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT RESULTS WILL LEAD TO ANY PARTICULAR HEALTH OUTCOME.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of liability",
    content: [
      "TO THE FULLEST EXTENT PERMITTED BY LAW, ICONUS AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, AND PARTNERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF THOSE DAMAGES.",
      "TO THE FULLEST EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATED TO THE SERVICES WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT PAID FOR THE KIT OR SERVICE GIVING RISE TO THE CLAIM IN THE 12 MONTHS BEFORE THE CLAIM AROSE, OR (B) ONE HUNDRED U.S. DOLLARS ($100).",
      "Some states do not allow certain warranty exclusions or liability limits, so some of the above may not apply to you.",
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: [
      "You agree to defend, indemnify, and hold harmless Iconus and its affiliates, officers, employees, and agents from any claims, losses, and expenses, including reasonable attorneys’ fees, arising from your misuse of the Services, your violation of these Terms, or your violation of anyone else’s rights.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing law and disputes",
    content: [
      `These Terms are governed by the laws of the State of ${governingState}, without regard to its conflict-of-law rules. Any dispute arising out of or related to these Terms or the Services will be brought exclusively in the state or federal courts located in ${venue}, and you and Iconus consent to the jurisdiction of those courts.`,
      "Before filing a claim, you agree to contact us and try to resolve the dispute informally for at least 30 days.",
    ],
  },
  {
    id: "changes",
    title: "Changes to the Services and these Terms",
    content: [
      "We may change, suspend, or discontinue any part of the Services at any time. We may also update these Terms. When we do, we will change the “Last updated” date above, and for material changes we will provide additional notice, such as by email or a notice in the portal. Continuing to use the Services after changes take effect means you accept the updated Terms.",
    ],
  },
  {
    id: "general",
    title: "General terms",
    content: [
      "These Terms, together with our Privacy Policy and any additional terms you accept, are the entire agreement between you and Iconus about the Services. If any part of these Terms is found unenforceable, the rest remains in effect. Our failure to enforce a provision is not a waiver. You may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, or sale of assets. Sections that by their nature should survive termination will survive.",
    ],
  },
];
