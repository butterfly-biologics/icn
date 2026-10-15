import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { HubSpotLeadForm } from "@/components/hubspot-lead-form";
import { providerForm } from "@/lib/lead-forms";
import { contactEmail, gpoUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Provider contact — ICONUS",
  description: "Talk with ICONUS about bringing genetic panels to your practice.",
  path: "/contact/providers",
});

export default function ProviderContactPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="For providers" title="Bring ICONUS to your practice.">
        Tell us a little about your practice and we’ll be in touch to walk you through the panels
        and how ordering works.
      </PageIntro>
      <section className="grid gap-16 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_280px] lg:px-16 lg:py-24">
        <HubSpotLeadForm
          id="provider-contact"
          {...providerForm}
          submitLabel="Contact us"
          successMessage="Someone from ICONUS will reach out to walk you through the panels and how ordering works."
        />
        <aside className="flex flex-col gap-8 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <div>
            <p className="font-mono text-sm text-gold uppercase">Already a GenoGPO customer?</p>
            <a href={gpoUrl} className="mt-3 block text-lg font-light hover:text-gold">
              Log in to order
            </a>
            <p className="mt-3 text-sm leading-[1.6] font-light text-ink">
              Practices with a GenoGPO account can order kits directly on genogpo.com.
            </p>
          </div>
          <div>
            <p className="font-mono text-sm text-gold uppercase">Email</p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-3 block text-lg font-light hover:text-gold"
            >
              {contactEmail}
            </a>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}
