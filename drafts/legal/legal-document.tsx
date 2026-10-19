import type { ReactNode } from "react";
import type { LegalBlock, LegalListItem, LegalSection } from "./legal";

type LegalDocumentProps = {
  lastUpdated: string;
  sections: readonly LegalSection[];
  children?: ReactNode;
};

export function LegalDocument({ lastUpdated, sections, children }: LegalDocumentProps) {
  return (
    <article className="flex max-w-3xl flex-col gap-12 px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <p className="font-mono text-sm text-gold uppercase">Last updated {lastUpdated}</p>

      <nav aria-label="On this page" className="border-t border-line pt-8">
        <h2 className="font-mono text-sm uppercase">On this page</h2>
        <ol className="mt-4 flex list-decimal flex-col gap-2 pl-6 text-lg leading-[1.5] font-light text-ink">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="underline-offset-4 hover:text-gold hover:underline">
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          className="scroll-mt-24 border-t border-line pt-8"
        >
          <h2
            id={`${section.id}-title`}
            className="text-2xl leading-[1.15] font-medium lg:text-[28px]"
          >
            <span className="mr-3 font-mono text-base text-gold">{index + 1}.</span>
            {section.title}
          </h2>
          <div className="mt-4 flex flex-col gap-4 text-lg leading-[1.6] font-light text-ink">
            {section.content.map((block, blockIndex) => (
              <LegalBlockView key={blockIndex} block={block} />
            ))}
          </div>
        </section>
      ))}

      {children}
    </article>
  );
}

function LegalBlockView({ block }: { block: LegalBlock }) {
  if (typeof block === "string") return <p>{block}</p>;

  return (
    <ul className="flex list-disc flex-col gap-2 pl-6 marker:text-gold">
      {block.list.map((item, index) => (
        <li key={index}>
          <LegalListItemView item={item} />
        </li>
      ))}
    </ul>
  );
}

function LegalListItemView({ item }: { item: LegalListItem }) {
  if (typeof item === "string") return item;

  return (
    <>
      <strong className="font-medium text-brown">{item.label}</strong> {item.text}
    </>
  );
}
