import type { Metadata } from "next";

export const siteName = "ICONUS";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
);

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "ICONUS — Reveal what is possible",
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName,
      title,
      description,
      url: path,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage],
    },
  };
}
