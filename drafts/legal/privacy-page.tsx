import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { LegalDocument } from "./legal-document";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { legalLastUpdated } from "./legal";
import { privacySections } from "./legal-privacy";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy — Iconus",
  description:
    "How Iconus collects, uses, shares, and protects personal and genetic information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="Privacy Policy" title="Privacy Policy.">
        How Iconus collects, uses, shares, and protects your personal and genetic information.
      </PageIntro>
      <LegalDocument lastUpdated={legalLastUpdated} sections={privacySections}>
        <p className="border-t border-line pt-8 text-lg leading-[1.6] font-light text-ink">
          Privacy questions and requests can go to{" "}
          <a href={`mailto:${contactEmail}`} className="underline hover:text-gold">
            {contactEmail}
          </a>
          . See also our{" "}
          <Link href="/terms" className="underline hover:text-gold">
            Terms of Use
          </Link>
          .
        </p>
      </LegalDocument>
    </PageShell>
  );
}
