import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { portalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "For patients — ICONUS",
  description:
    "Register an ICONUS kit, sign in to see results, or find a panel to discuss with your provider.",
};

const paths = [
  {
    title: "Have a kit?",
    body: "Register your kit and sign in to the patient portal. Your results will appear there in about 3–4 weeks.",
    href: portalUrl,
    label: "Register or sign in",
  },
  {
    title: "Curious about a panel?",
    body: "Answer four short questions to find a panel to bring up with your provider.",
    href: "/quiz",
    label: "Take the quiz",
  },
  {
    title: "Have a question?",
    body: "Ask about a kit, a panel, or your results.",
    href: "/contact/patients",
    label: "Patient contact",
  },
];

export default function PatientsPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="For patients" title="Your biology, with your provider.">
        ICONUS is ordered and reviewed with your provider. Here’s where to go if you have a kit,
        results, or questions.
      </PageIntro>
      <section className="grid gap-8 px-5 py-16 sm:px-8 lg:grid-cols-3 lg:px-16 lg:py-24">
        {paths.map((path) => (
          <article
            key={path.title}
            className="flex flex-col items-start gap-6 border-t border-line pt-8"
          >
            <h2 className="text-[32px] leading-none font-medium lg:tracking-[-0.96px]">
              {path.title}
            </h2>
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
