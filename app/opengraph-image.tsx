import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "ICONUS — Reveal what is possible";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function brandImage(file: string) {
  const data = await readFile(join(process.cwd(), "public/brand", file));
  return `data:image/png;base64,${data.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const [wordmark, kitBox] = await Promise.all([
    brandImage("wordmark.png"),
    brandImage("kit-box.png"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#342f29",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 520 }}>
          <img src={wordmark} width={240} height={50} alt="" />
          <div
            style={{
              marginTop: 56,
              fontSize: 76,
              lineHeight: 1.02,
              color: "#ebe5dd",
              letterSpacing: "-0.03em",
            }}
          >
            Reveal what is possible.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, lineHeight: 1.4, color: "#bcb6ad" }}>
            Genetic test panels for providers and their patients.
          </div>
        </div>
        <img src={kitBox} width={560} height={320} alt="" />
      </div>
    ),
    size,
  );
}
