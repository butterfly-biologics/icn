import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { QuizFlow } from "@/components/quiz-flow";

export const metadata: Metadata = pageMetadata({
  title: "Which panel fits? — Iconus",
  description: "Answer four short questions to find the Iconus test panel that fits a patient’s goals.",
  path: "/quiz",
});

export default function QuizPage() {
  return <QuizFlow />;
}
