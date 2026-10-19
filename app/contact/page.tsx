import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { gpoUrl, portalUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact — Iconus",
  description: "Provider inquiries, GenoGPO ordering, portal sign-in, and patient questions.",
  path: "/contact",
});

const paths = [
  {
    title: "Providers",
    body: "Talk with us about bringing Iconus to your practice.",
    href: "/contact/providers",
    label: "Contact us",
  },
  {
    title: "Order kits",
    body: "Already a GenoGPO customer? Log in to order kits.",
    href: gpoUrl,
    label: "Log in to GenoGPO",
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
