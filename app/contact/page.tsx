import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { portalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — ICONUS",
  description: "Provider orders, bulk kits, white label, portal sign-in, and patient questions.",
};

const paths = [
  {
    title: "Providers",
    body: "Ask about bulk kits or a white-label version.",
    href: "/contact/providers",
    label: "Provider contact",
  },
  {
    title: "Order kits",
    body: "Practices purchase ICONUS through the GenoGPO portal.",
    href: "/get-started",
    label: "Get started",
  },
  {
    title: "Portal",
    body: "Sign in at my.iconus.org to view results or register a kit.",
    href: portalUrl,
    label: "Sign in",
  },
  {
    title: "Patients",
    body: "Questions about a kit, a panel, or results.",
    href: "/contact/patients",
    label: "Patient contact",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Contact" title="How can we help?">
        Choose the path that matches your question.
      </PageIntro>
      <section className="grid gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-16 lg:py-24">
        {paths.map((path) => (
          <article
            key={path.title}
            className="flex flex-col items-start gap-6 border-t border-line pt-8"
          >
            <h2 className="text-[32px] leading-none font-medium">{path.title}</h2>
            <p className="text-lg leading-[1.6] font-light text-ink sm:text-2xl">{path.body}</p>
            <ButtonLink href={path.href} variant={path.href.startsWith("http") ? "outline" : "teal"}>
              {path.label}
            </ButtonLink>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
