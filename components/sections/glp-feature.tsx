import Image from "next/image";

export function GlpFeature() {
  return (
    <section className="relative h-dvh overflow-hidden bg-cream">
      <Image
        src="/panels/glp-1.png"
        alt="GLP-1 Benefit Genetics kit"
        fill
        sizes="100vw"
        quality={90}
        className="object-contain object-center scale-110 sm:scale-125 lg:scale-[1.65]"
      />
    </section>
  );
}
