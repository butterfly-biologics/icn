import { legalEntity, type LegalSection } from "./legal";
import { contactEmail } from "@/lib/site";

const { name, mailingAddress } = legalEntity;

export const privacySections: readonly LegalSection[] = [
  {
    id: "scope",
    title: "Who we are and what this policy covers",
    content: [
      `This Privacy Policy explains how ${name} (“Iconus,” “we,” “us,” or “our”) collects, uses, shares, and protects personal information through iconus.org (the “Site”), our genetic test kits, sample processing, reports, and the patient and provider portals at my.iconus.org (together, the “Services”).`,
      "Your healthcare provider has their own privacy practices for the information they hold about you. GenoGPO, which handles kit purchasing, has its own privacy policy. When Iconus handles protected health information on behalf of a provider, we do so as permitted by the Health Insurance Portability and Accountability Act (HIPAA) and our agreements with that provider. If HIPAA applies and conflicts with this policy, HIPAA controls for that information.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: [
      "Information you give us:",
      {
        list: [
          {
            label: "Contact forms.",
            text: "Name, email address, phone number, and your message. Providers also share their practice name, number of employees, practice focus, and expected kit volume.",
          },
          {
            label: "Kit registration and portal accounts.",
            text: "Name, date of birth, sex, contact details, kit ID, ordering provider, login credentials, and any health information you choose to share with us.",
          },
          {
            label: "Communications.",
            text: "Emails, calls, and other messages you send us, and our replies.",
          },
        ],
      },
      "Information from your sample:",
      {
        list: [
          {
            label: "Biological sample.",
            text: "The cheek swab you provide, which contains your DNA.",
          },
          {
            label: "Genetic information.",
            text: "The data our laboratory partner generates from your sample, and the results and reports created from that data.",
          },
        ],
      },
      "Information collected automatically:",
      {
        list: [
          {
            label: "Device and usage data.",
            text: "IP address, browser type, device type, pages viewed, links clicked, referring page, and the date and time of your visit.",
          },
          {
            label: "Cookies and similar technologies.",
            text: "See “Cookies and analytics” below.",
          },
          {
            label: "Campaign information.",
            text: "If you arrive from an ad or email link, the campaign tags in that link (such as UTM parameters) and the page you were on when you submitted a form.",
          },
        ],
      },
      "Information from others: we may receive information about you from the provider who ordered your test, from GenoGPO when kits are purchased, and from our laboratory and shipping partners.",
    ],
  },
  {
    id: "quiz",
    title: "The panel quiz",
    content: [
      "Quiz answers are processed in your browser to suggest a panel. They are not sent to or stored by Iconus. Our analytics tools may record that the quiz page was visited or that a button was clicked, but not as part of a health record.",
    ],
  },
  {
    id: "how-we-use",
    title: "How we use information",
    content: [
      "We use personal information to:",
      {
        list: [
          "Process kits and samples, produce reports, and deliver results to you and your ordering provider.",
          "Create and manage portal accounts, and verify your identity.",
          "Respond to questions, provide customer support, and follow up on contact form requests.",
          "Send service messages, such as kit status and results notifications.",
          "Send marketing messages about Iconus, where permitted by law. You can opt out at any time.",
          "Maintain quality control, including laboratory quality and accuracy checks.",
          "Understand how the Site is used and improve the Services.",
          "Protect the security of the Services and prevent fraud or misuse.",
          "Comply with legal, regulatory, and laboratory requirements, and enforce our Terms.",
        ],
      },
    ],
  },
  {
    id: "genetic-information",
    title: "Our commitments for genetic information",
    content: [
      "Genetic information is among the most sensitive information there is. In addition to everything else in this policy:",
      {
        list: [
          "We do not sell your genetic information or your sample.",
          "We do not share your genetic information with employers, health or life insurers, or data brokers without your separate, express consent.",
          "We do not use your genetic information or sample for research, or share it with research partners, unless you give separate, express consent. You can withdraw that consent at any time.",
          "We share genetic results with the provider who ordered your test, and with others only as described in this policy or with your consent.",
          "We do not disclose genetic information to law enforcement unless required by a valid subpoena, warrant, or court order. Where the law allows, we will try to notify you before disclosing it.",
        ],
      },
      "We may create de-identified or aggregated data that cannot reasonably be used to identify you. We will not attempt to re-identify it.",
    ],
  },
  {
    id: "how-we-share",
    title: "How we share information",
    content: [
      "We share personal information only as follows:",
      {
        list: [
          {
            label: "Your provider.",
            text: "The provider who ordered your test receives your results and related information.",
          },
          {
            label: "Laboratory partners.",
            text: "Accredited laboratories that analyze samples on our behalf, under contracts that require them to protect your information.",
          },
          {
            label: "GenoGPO.",
            text: "To support kit purchasing, fulfillment, and provider accounts.",
          },
          {
            label: "Service providers.",
            text: "Companies that help us run the Services, such as website hosting, customer relationship management (including HubSpot), analytics (including Google), email, shipping, and data storage. They may use the information only to perform services for us.",
          },
          {
            label: "Legal and safety.",
            text: "When required by law or legal process, or when we believe in good faith it is necessary to protect the rights, property, or safety of Iconus, our users, or others.",
          },
          {
            label: "Business transfers.",
            text: "In connection with a merger, acquisition, financing, or sale of assets. Any successor must honor this policy, and we will seek your consent before transferring genetic information where the law requires it.",
          },
          {
            label: "With your consent.",
            text: "When you direct us to share information or otherwise give us permission.",
          },
        ],
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    content: [
      "The Site uses cookies and similar technologies to keep it working, to measure traffic, and to understand which pages and campaigns are effective. We use Google Tag Manager to manage these tools, Google Analytics to understand Site usage, and HubSpot to connect contact form submissions with your visits to the Site. These providers may collect information about your use of the Site and other websites over time.",
      "You can block or delete cookies in your browser settings, though some features may not work as expected. You can also opt out of Google Analytics using Google’s browser add-on at tools.google.com/dlpage/gaoptout.",
      "We do not sell personal information for money. Some state laws treat certain analytics or advertising cookies as a “sale” or “sharing” of personal information. If your browser sends a Global Privacy Control (GPC) signal, we treat it as a request to opt out of that activity for that browser.",
    ],
  },
  {
    id: "communications",
    title: "Emails and text messages",
    content: [
      "You can unsubscribe from marketing emails using the link in any email. If you give us your phone number, we may call or text you about your request or your kit. We will only send marketing text messages with your consent, and you can reply STOP to opt out. Message and data rates may apply. You will still receive service messages related to your kit, results, or account.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep information",
    content: [
      "We keep personal information for as long as needed to provide the Services, maintain your account, and meet legal, regulatory, and laboratory record-keeping requirements. Laboratories are often required by law to keep certain test records for a set period of time.",
      "Unless you consent to longer storage, samples are destroyed after testing is complete and any required quality-control period ends. You can ask us to delete your genetic data or destroy a remaining sample at any time, as described below.",
    ],
  },
  {
    id: "security",
    title: "How we protect information",
    content: [
      "We use administrative, technical, and physical safeguards designed to protect personal information, including encryption in transit, access controls, and limiting access to people who need it for their work. No system is completely secure, and we cannot guarantee the security of information sent over the internet. If we learn of a security incident affecting your information, we will notify you as required by law.",
    ],
  },
  {
    id: "your-rights",
    title: "Your choices and rights",
    content: [
      "Depending on where you live, you may have the right to:",
      {
        list: [
          "Know what personal information we collect, use, and share, and get a copy of it.",
          "Correct inaccurate personal information.",
          "Delete your personal information, including your account and genetic data, and have any remaining sample destroyed.",
          "Withdraw any consent you have given, such as consent to research or extended sample storage.",
          "Opt out of targeted advertising, the “sale” or “sharing” of personal information, and certain profiling.",
          "Appeal our decision if we deny your request.",
        ],
      },
      `To make a request, email ${contactEmail} or use the contact options in the portal. We will verify your identity before acting on a request, and we will respond within the time required by law. You may use an authorized agent where the law allows, and we may ask the agent for proof of authority. We will not discriminate against you for exercising your rights.`,
      "Some information may need to be kept even after a deletion request, for example where laboratory regulations require us to keep test records, or where your provider has already received your results into their own records.",
      "Residents of states with specific consumer health or genetic privacy laws, such as California, Illinois, and Washington, may have additional rights. We honor those rights as required by the applicable law.",
    ],
  },
  {
    id: "gina",
    title: "Genetic discrimination protections",
    content: [
      "The federal Genetic Information Nondiscrimination Act of 2008 (GINA) generally makes it illegal for health insurers and employers with 15 or more employees to discriminate against you based on your genetic information. GINA does not cover life insurance, disability insurance, or long-term care insurance, and it may not apply to every employer. Some states offer additional protections. Consider these limits before testing.",
    ],
  },
  {
    id: "children",
    title: "Children",
    content: [
      "The Services are not directed to children under 18, and we do not knowingly collect personal information from them. If you believe a child has given us personal information, please contact us and we will delete it.",
    ],
  },
  {
    id: "location",
    title: "Where information is stored",
    content: [
      "The Services are intended for people in the United States, and your information is stored and processed in the United States.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: [
      "We may update this policy from time to time. When we do, we will change the “Last updated” date above. For material changes, we will give additional notice, such as by email or a notice in the portal, and where the law requires it we will ask for your consent before using previously collected information in a materially different way.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    content: [
      `For questions about this policy or to exercise your rights, email ${contactEmail} or write to ${name}, ${mailingAddress}.`,
    ],
  },
];
