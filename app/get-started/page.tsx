import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { gpoUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Order ICONUS — ICONUS",
  description:
    "ICONUS kits are purchased through GenoGPO. Log in to the GenoGPO portal to choose panels and place an order for your practice.",
  path: "/get-started",
});

const orderSteps = [
  {
    number: "01",
    title: "Log in to GenoGPO",
    body: "GenoGPO is the group purchasing organization for practices that order ICONUS.",
  },
  {
    number: "02",
    title: "Choose your panels",
    body: "Select the ICONUS panels that fit your patients’ goals and place your order.",
  },
  {
    number: "03",
    title: "Kits ship to your patients",
    body: "Results arrive in your provider portal at my.iconus.org in about 3–4 weeks.",
  },
];

export default function GetStartedPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Get started" title="Order ICONUS through GenoGPO.">
        Purchasing for ICONUS lives on the GenoGPO portal. Log in to choose panels and order kits
        for your practice.
      </PageIntro>

      <section className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <ButtonLink href={gpoUrl}>Log in to GenoGPO</ButtonLink>
          <ButtonLink href="/contact/providers" variant="outline">
            Bulk kits or white label
          </ButtonLink>
        </div>
        <p className="mt-4 font-mono text-sm text-ink uppercase">
          You’ll be taken to genogpo.com
        </p>

        <ol className="mt-16 grid gap-8 lg:grid-cols-3">
          {orderSteps.map((step) => (
            <li key={step.number} className="border-t border-line pt-6">
              <p className="text-5xl leading-none text-gold tracking-[-2.4px]">{step.number}</p>
              <h2 className="mt-6 text-[28px] leading-none font-medium lg:text-[32px] lg:tracking-[-0.96px]">
                {step.title}
              </h2>
              <p className="mt-6 text-lg leading-[1.6] font-light text-ink sm:text-2xl">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <aside className="border-t border-line px-5 py-12 sm:px-8 lg:px-16" aria-label="For patients">
        <p className="max-w-2xl text-lg leading-[1.6] font-light text-ink">
          Are you a patient? ICONUS is ordered by your provider.{" "}
          <Link href="/patients" className="underline hover:text-gold">
            Visit the patient page
          </Link>{" "}
          to register a kit, see results, or find a panel to discuss at your next visit.
        </p>
      </aside>
    </PageShell>
  );
}
