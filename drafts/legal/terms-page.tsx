import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { LegalDocument } from "./legal-document";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { legalLastUpdated } from "./legal";
import { termsSections } from "./legal-terms";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use — Iconus",
  description:
    "The terms that apply to the Iconus website, genetic test kits, reports, and patient and provider portals.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Terms of Use" title="Terms of Use.">
        These terms apply to the Iconus website, test kits, reports, and portals. Please read them
        carefully.
      </PageIntro>
      <LegalDocument lastUpdated={legalLastUpdated} sections={termsSections}>
        <p className="border-t border-line pt-8 text-lg leading-[1.6] font-light text-ink">
          Questions about these terms can go to{" "}
          <a href={`mailto:${contactEmail}`} className="underline hover:text-gold">
            {contactEmail}
          </a>
          . Our{" "}
          <Link href="/privacy" className="underline hover:text-gold">
            Privacy Policy
          </Link>{" "}
          explains how we handle personal and genetic information.
        </p>
      </LegalDocument>
    </PageShell>
  );
}
