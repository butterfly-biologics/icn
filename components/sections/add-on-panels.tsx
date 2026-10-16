import { ButtonLink } from "@/components/button-link";
import { addOnPoints } from "@/lib/content";

type AddOnPanelsProps = {
  panelTitle?: string;
};

export function AddOnPanels({ panelTitle }: AddOnPanelsProps) {
  return (
    <section
      aria-labelledby="add-on-panels-heading"
      className="bg-gold px-5 py-16 text-cream sm:px-8 lg:px-16 lg:py-24"
    >
      <p className="font-mono text-sm text-brown uppercase">Add-on panels</p>
      <h2
        id="add-on-panels-heading"
        className="mt-4 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:tracking-[-1.2px]"
      >
        One swab. More answers.
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-[1.6] font-light sm:text-2xl">
        {panelTitle ? `After you order ${panelTitle}, ` : "After you order a panel, "}
        your patient’s genetic data is already on file. Add more panels at a lower
        price whenever their goals grow.
      </p>
      <ul className="mt-12 grid gap-8 lg:grid-cols-3">
        {addOnPoints.map((point) => (
          <li key={point.title} className="border-t border-line pt-6">
            <h3 className="text-[28px] leading-none font-medium lg:text-[32px] lg:tracking-[-0.96px]">
              {point.title}
            </h3>
            <p className="mt-4 text-lg leading-[1.6] font-light">{point.body}</p>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <ButtonLink href="/contact/providers">Ask about add-on panels</ButtonLink>
      </div>
    </section>
  );
}
