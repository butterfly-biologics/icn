import type { Metadata } from "next";
import { QuizFlow } from "@/components/quiz-flow";

export const metadata: Metadata = {
  title: "Which panel fits? — ICONUS",
  description: "Answer four short questions to find the ICONUS test panel that fits a patient’s goals.",
};

export default function QuizPage() {
  return <QuizFlow />;
}
