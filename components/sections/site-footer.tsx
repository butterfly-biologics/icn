import Image from "next/image";
import Link from "next/link";
import { portalUrl } from "@/lib/site";

const columns = [
  {
    title: "Discover",
    links: [
      { href: "/#top", label: "Our approach" },
      { href: "/#panels", label: "Test panels" },
      { href: "/#how-it-works", label: "How it works" },
    ],
  },
  {
    title: "Take the next step",
    links: [
      { href: "/get-started", label: "Order kits" },
      { href: "/providers", label: "For your practice" },
      { href: "/quiz", label: "Take the quiz" },
      { href: "/patients", label: "For patients" },
      { href: portalUrl, label: "Portal login" },
    ],
  },
  {
    title: "Social",
    links: [
      { href: "https://www.instagram.com", label: "Instagram", newTab: true },
      { href: "https://www.linkedin.com", label: "LinkedIn", newTab: true },
      { href: "https://x.com", label: "X", newTab: true },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact/providers", label: "Provider contact" },
      { href: "/contact/patients", label: "Patient contact" },
      { href: "/gpo", label: "GenoGPO" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

const disclaimers = [
  "Iconus genetic test kits are ordered through a licensed group purchasing organization. Kits use a simple at-home cheek swab and include a prepaid return mailer. Results are typically delivered to the patient portal and the ordering provider’s portal in approximately 3–4 weeks. Turnaround times are estimates and may vary.",
  "Iconus is a healthcare technology company and not a laboratory or medical provider. Laboratory testing is performed by independent third-party laboratories. Iconus does not offer medical advice, a diagnosis, medical treatment, or any form of medical opinion, through our services or otherwise.",
  "Genetic results describe predispositions and associations, not certainties. They do not diagnose, treat, cure, or prevent any disease, and they are not a substitute for medical care or a detailed discussion with a licensed provider. References to peptides, medications, or other therapies describe the genetic markers examined and are not an endorsement or recommendation of any treatment. Do not start, stop, or change any medication or therapy based on your results without first consulting your provider.",
  "All material, information, data, and content that Iconus provides is strictly for general information purposes. The quiz on this site suggests a starting point only; it is not a diagnosis and does not place an order. Iconus does not provide tax, legal, or financial advice.",
];

export function SiteFooter() {
  return (
    <footer className="bg-cream px-5 py-12 sm:px-8 lg:px-16">
      <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:justify-between">
        <div className="flex flex-col gap-4">
          <Image src="/brand/wordmark.png" alt="Iconus" width={170} height={46} />
          <p className="text-sm leading-[1.6] font-light">Reveal what is possible.</p>
        </div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="flex flex-col gap-4">
            <p className="font-mono text-sm text-gold uppercase">{column.title}</p>
            <ul className="flex flex-col gap-4">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      className="text-sm leading-[1.6] font-light hover:text-gold"
                      {...("newTab" in link && link.newTab
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm leading-[1.6] font-light hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="my-10 h-px bg-line" />
      <section aria-label="Disclaimer">
        <p className="text-xs leading-[1.7] font-light text-ink">
          {disclaimers.join(" ")} For other important information about Iconus services, please
          see our{" "}
          <Link href="/terms" className="underline hover:text-gold">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline hover:text-gold">
            Privacy Policy
          </Link>
          .
        </p>
      </section>
      <div className="my-10 h-px bg-line" />
      <div className="flex flex-col gap-4 font-mono text-sm text-ink uppercase lg:flex-row lg:items-start lg:justify-between">
        <p className="normal-case">© 2026 Iconus. All rights reserved.</p>
        <p>Genetic insight is one part of a broader provider–patient conversation.</p>
        <p className="text-gold">Reveal what is possible.</p>
      </div>
    </footer>
  );
}
