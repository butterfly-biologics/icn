import Image from "next/image";

const shots = [
  {
    src: "/screenshots/result_score_screenshot.png",
    width: 1622,
    height: 1838,
    alt: "Result scores summary in the Iconus portal. Markers are grouped into Needs Attention, Moderate, and Optimal.",
    caption: "The whole panel at a glance",
  },
  {
    src: "/screenshots/gauge_expanded_screenshot.png",
    width: 1626,
    height: 1838,
    alt: "A methylation result in the Iconus portal, with a gauge labeled Undermethylation Risk and a plain-language explanation.",
    caption: "Each marker, in plain language",
  },
] as const;

export function Results() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="max-w-3xl">
      
        <h2 className="mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-[60px] lg:tracking-[-1.2px]">
          See the results,
          <br />
          read them together.
        </h2>
        <p className="mt-6 text-lg leading-[1.6] font-light text-ink sm:text-2xl">
          Our portal makes it easy to see and understand the results. Providers and patients can view the results together, and providers can even make notes for the patient under any marker.
        </p>
      </div>
      <ul className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-12">
        {shots.map((shot) => (
          <li key={shot.src}>
            <figure>
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="mt-4 font-mono text-sm text-gold uppercase">
                {shot.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
