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
    "Bring ICONUS to your practice. Contact us to get started, or log in to GenoGPO if you're already a customer.",
  path: "/get-started",
});

const orderSteps = [
  {
    number: "01",
    title: "Talk with us",
    body: "Tell us about your practice. We’ll walk you through the panels and set you up with GenoGPO.",
  },
  {
    number: "02",
    title: "Order through GenoGPO",
    body: "Select the ICONUS panels that fit your patients’ goals and place your order on genogpo.com.",
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
      <PageIntro eyebrow="Get started" title="Bring ICONUS to your practice.">
        Contact us and we’ll walk you through the panels and how ordering works. Kits are purchased
        through GenoGPO, our group purchasing organization.
      </PageIntro>

      <section className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
        <ButtonLink href="/contact/providers">Contact us</ButtonLink>
        <p className="mt-6 text-lg leading-[1.6] font-light text-ink">
          Already a GenoGPO customer?{" "}
          <a href={gpoUrl} className="underline hover:text-gold">
            Log in to order
          </a>
          .
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
