import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { HubSpotLeadForm } from "@/components/hubspot-lead-form";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { patientForm } from "@/lib/lead-forms";
import { contactEmail, portalUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Patient contact — Iconus",
  description: "Questions about an Iconus kit, a panel, or results.",
  path: "/contact/patients",
});

export default function PatientContactPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="For patients" title="Contact Iconus.">
        Ask about a kit, a panel, or results. To register a kit or sign in, use the patient portal.
      </PageIntro>
      <section className="grid gap-16 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_280px] lg:px-16 lg:py-24">
        <HubSpotLeadForm
          id="patient-contact"
          {...patientForm}
          submitLabel="Send message"
          successMessage="Someone from Iconus will get back to you. For questions about your results, also follow up with your provider."
        />
        <aside className="flex flex-col gap-8 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <div>
            <p className="font-mono text-sm text-gold uppercase">Email</p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-3 block text-lg font-light hover:text-gold"
            >
              {contactEmail}
            </a>
          </div>
          <div>
            <p className="font-mono text-sm text-gold uppercase">Register or sign in</p>
            <a href={portalUrl} className="mt-3 block text-lg font-light hover:text-gold">
              my.iconus.org
            </a>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
