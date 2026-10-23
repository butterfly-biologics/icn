export const panels = [
  {
    slug: "immunity-longevity",
    title: "Immunity & Longevity Genetics",
    body: "This panel examines how your patient’s genes may relate to immune function, inflammation response, and the way their body ages over time. Results may offer insights that can support informed, long-term preventive care planning.",
    icon: { src: "/brand/panel-immunity.svg", width: 25.6, height: 25.6 },
    image: "/panels/immunity-longevity.png",
  },
  {
    slug: "performance",
    title: "Performance Genetics",
    body: "This panel explores how your patient’s DNA may relate to exercise performance, muscle development, recovery, and endurance. Results may help inform personalized training and nutrition recommendations.",
    icon: { src: "/brand/panel-performance.svg", width: 32, height: 32 },
    image: "/panels/performance.png",
  },
  {
    slug: "hormone-skin",
    title: "Hormone Genetics & Skin Aesthetics",
    body: "This panel looks at genetic traits that may be associated with hormone balance, skin health, collagen production, and aging markers. Results may offer context for aesthetic and hormonal wellness.",
    icon: { src: "/brand/panel-hormone.svg", width: 32, height: 32 },
    image: "/panels/hormone-skin.png",
  },
  {
    slug: "cognition",
    title: "Cognition Genetics",
    body: "This panel looks at genetic factors that may be associated with memory, focus, stress response, and brain health. Results may provide context to support cognitive wellness planning for your patient.",
    icon: { src: "/brand/panel-cognition.svg", width: 33.2, height: 33.2 },
    image: "/panels/cognition.png",
  },
  {
    slug: "lifestyle",
    title: "Lifestyle Genetics",
    body: "This panel explores how your patient’s genes may relate to metabolism, sleep, stress response, performance, and nutrient needs. Results may support more personalized everyday health recommendations.",
    icon: { src: "/brand/panel-lifestyle.svg", width: 40, height: 28 },
    image: "/panels/lifestyle.png",
  },
  {
    slug: "peptide",
    title: "Peptide Genetics",
    body: "This panel examines how your patient’s genetic profile may relate to their body’s response to different peptides. It looks at genetic factors associated with peptide pathways and individual response.",
    icon: { src: "/brand/panel-peptide.svg", width: 30, height: 33.2 },
    image: "/panels/peptide.png",
  },
  {
    slug: "glp-1",
    title: "GLP-1 Benefits",
    body: "This panel looks at 25 genetic markers associated with how a patient’s biology may interact with GLP-1 medications. Genetic variation shapes how each patient stores fat, builds lean mass, and responds, so you can prescribe the GLP that fits.",
    icon: { src: "/brand/panel-glp1.svg", width: 33.2, height: 33.2 },
    image: "/panels/glp-1.png",
  },
  {
    slug: "toxin-gut",
    title: "Toxin & Gut Complete",
    body: "This panel examines how your patient’s genetics may relate to digestion, nutrient absorption, and detoxification pathways. Results may help guide personalized lifestyle and nutrition recommendations in support of gut health.",
    icon: { src: "/brand/panel-gut.svg", width: 38, height: 33.2 },
    image: "/panels/toxin-gut.png",
  },
] as const;

export const principles = [
  {
    title: "Biology, not averages.",
    body: "A cheek swab looks at genetic traits that may relate to your patient’s health and wellness priorities.",
  },
  {
    title: "Goals, not guesswork.",
    body: "Each panel stays focused on the questions you and your patient want to explore.",
  },
  {
    title: "A conversation, not a conclusion.",
    body: "Results return in about 3–4 weeks, ready for a follow-up visit about next steps.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Kits shipped to patient or practice",
    body: "Choose a panel and order through GenoGPO. Ship kits straight to your patient, or order in bulk for your practice.",
  },
  {
    number: "02",
    title: "Patient swabs cheek, mails back with prepaid return mailer",
    body: "Your patient completes the cheek swab at home and sends it back in the prepaid mailer.",
  },
  {
    number: "03",
    title: "Results delivered to patient portal & provider portal",
    body: "Results land in your provider portal and your patient’s portal in about 3–4 weeks.",
  },
] as const;

export const stages = [
  {
    number: "01",
    label: "The Conversation",
    title: "Start with who they are.",
    body: "Talk about goals, history and what your patient hopes to understand. Choose the Iconus panel that fits where they are today.",
  },
  {
    number: "02",
    label: "The Discovery",
    title: "See what’s written in their biology.",
    body: "A simple at-home cheek swab. Results in about 3–4 weeks, offering context for the areas that matter most to your patient.",
  },
  {
    number: "03",
    label: "The Plan",
    title: "Build from their biology, not the averages.",
    body: "Review results together in a follow-up visit. Build a personalized roadmap around nutrition, movement, recovery and wellness priorities.",
  },
  {
    number: "04",
    label: "The Program",
    title: "Put the plan into motion.",
    body: "Where formulations fit, Iconus results highlight GenoGenRx options aligned with your patient’s profile, for you to review, adjust and recommend.",
  },
  {
    number: "05",
    label: "The Evolution",
    title: "Grow with your patient.",
    body: "Bodies change. Goals change. Use follow-up visits to reflect on progress and refine the plan. Their genetics remain a reference point.",
  },
] as const;

export const questions = [
  {
    question: "How do I order kits?",
    answer:
      "Iconus kits are purchased through GenoGPO, our group purchasing organization. New to Iconus? Contact us and we’ll walk you through it. Existing GenoGPO customers can log in at genogpo.com to order.",
  },
  {
    question: "How long do kits last?",
    answer:
      "Iconus kits have a shelf life of about 2–3 years, so it’s easy to keep a supply on hand at your practice. As a general guideline, plan to use kits within 2 years of ordering.",
  },
  {
    question: "How do I choose a panel for my patient?",
    answer:
      "Start with your patient’s goals, history and what they hope to understand. Each panel focuses on one area, and the quiz can suggest a starting point.",
  },
  {
    question: "What sample does my patient provide?",
    answer:
      "A simple cheek swab, completed at home. Kits ship directly to your patient or in bulk to your practice, and each includes a prepaid return mailer.",
  },
  {
    question: "How does a kit get registered?",
    answer:
      "Every kit needs to be registered so results reach the right patient and provider. There are two ways to do it:",
    points: [
      {
        title: "Your patient registers.",
        body: "They scan the QR code on the kit, create an account, enter their kit code and select you as their provider.",
      },
      {
        title: "You register for them.",
        body: "Add your patient in your provider portal and register the kit to their profile before handing or mailing it to them.",
      },
    ],
  },
  {
    question: "Where will I see results?",
    answer:
      "Results are delivered to your provider portal and your patient’s portal, so you can review the findings together.",
  },
  {
    question: "Can I see the results? Are they easy to read?",
    answer:
      "Yes. Every marker is scored Needs Attention, Moderate, or Optimal, and the findings that need a conversation are listed first. Open a marker and you get a gauge, a plain-language label, and a short note on what it may mean, so you and your patient can read the same report together.",
  },
  {
    question: "How long do results take?",
    answer:
      "About 3–4 weeks. Once results are in, schedule a follow-up visit to walk through them with your patient.",
  },
  {
    question: "What happens after the test?",
    answer:
      "Review the results with your patient and build a plan around their priorities. Follow-up visits are a chance to check progress and refine that plan over time.",
  },
] as const;

export const moreQuestions = [
  {
    question: "Where do I log in?",
    answer:
      "To purchase kits, log in to GenoGPO at genogpo.com. To view results, providers and patients sign in at my.iconus.org.",
  },
  {
    question: "Does the quiz choose a panel?",
    answer:
      "The quiz suggests a starting point. It is not a diagnosis and it does not place an order. The final panel is chosen by the provider with the patient.",
  },
  {
    question: "I’m a patient. Where do I start?",
    answer:
      "Iconus is meant to be used with a provider. Visit the patient page to register a kit, sign in to see results, or take the quiz to bring a starting point to your next visit.",
  },
  {
    question: "How do I reach Iconus?",
    answer:
      "Use the contact page. Providers can use the provider contact form to talk with us. Patients with results should sign in to the portal and follow up with their provider.",
  },
] as const;

export const addOnPoints = [
  {
    title: "No new swab",
    body: "Your patient doesn’t need another kit or sample. The add-on uses the DNA we’ve already sequenced.",
  },
  {
    title: "A new report",
    body: "We analyze the same genetic data through a different panel, focused on a new set of goals.",
  },
  {
    title: "A lower price",
    body: "The lab work is already done, so add-on panels cost less than a first panel.",
  },
] as const;

export const essentials = [
  "Kits ship to patients or your practice",
  "Simple at-home cheek swab",
  "Eight goal-focused panels",
  "Results in your provider portal",
  "Results in about 3–4 weeks",
  "Built for the follow-up visit",
] as const;

export type PanelSlug = (typeof panels)[number]["slug"];

export function getPanel(slug: string) {
  return panels.find((panel) => panel.slug === slug);
}

export type PanelMarker = {
  title: string;
  body: string;
};

export const panelPages: Record<
  PanelSlug,
  {
    audience: string;
    focuses: readonly string[];
    markersIntro?: string;
    markers: readonly PanelMarker[];
  }
> = {
  "immunity-longevity": {
    audience: "For long-term health and healthy aging.",
    focuses: [
      "Immune function",
      "Inflammation response",
      "How the body ages over time",
    ],
    markers: [
      {
        title: "Methylation",
        body: "Markers covering key methylation pathways including COMT, MTHFR Activity, MTR, MTRR, general methylation efficiency, and Choline Need — factors that affect how the body processes nutrients, detoxifies, and regulates mood and energy.",
      },
      {
        title: "Longevity & Cellular Aging",
        body: "Genetic markers associated with Longevity Propensity and Telomere Length Propensity — two indicators of biological aging at the cellular level.",
      },
      {
        title: "Mitochondrial Health",
        body: "Marker assessing Mitochondrial Function — how efficiently the body produces cellular energy.",
      },
      {
        title: "Oxidative Stress",
        body: "Marker examining genetic predisposition to oxidative stress and the body’s antioxidant support capacity.",
      },
      {
        title: "Immune & Inflammation",
        body: "Markers covering Mast Cell Activation / IgE Levels and IL-10 Inflammation Risk — indicators of immune reactivity and inflammatory response.",
      },
      {
        title: "Immune System Support Peptides",
        body: "Genetic markers assessing individual response propensity to immune-supportive peptides: TB4 / TB-500 (resolution capacity) and TA1 / Thymosin Alpha 1 (immune support).",
      },
      {
        title: "Longevity & Anti-Aging Peptides",
        body: "Markers examining genetic factors related to anti-aging peptide response including TA1 / Thymosin Alpha 1 (anti-inflammatory), FOXO4-DRI (healthy aging), Epitalon (telomere maintenance), and TB4 / TB-500 (connective tissue).",
      },
    ],
  },
  performance: {
    audience: "For training, recovery, and endurance.",
    focuses: [
      "Exercise performance",
      "Muscle development and recovery",
      "Endurance",
    ],
    markers: [
      {
        title: "Strength & Muscle",
        body: "Markers associated with genetic predisposition for Strength and Muscle Mass development.",
      },
      {
        title: "Cardiovascular & Endurance",
        body: "Markers covering VO2 Max Trainability Propensity, Aerobic Training Benefit, Elite Endurance Propensity, and Elite Power Propensity — helping identify whether a patient is genetically wired for endurance or power-based performance.",
      },
      {
        title: "Fatigue & Recovery",
        body: "Markers examining Muscle Endurance and Muscle Recovery Speed — how efficiently the body bounces back after physical exertion.",
      },
      {
        title: "Injury Risk",
        body: "Genetic markers associated with soft tissue vulnerability including Achilles Risk, Cartilage Risk, and General Soft Tissue Risk.",
      },
      {
        title: "Hormonal Factors",
        body: "Markers covering testosterone-related genetic factors: Testosterone Level Propensity, PSA Level Propensity, LH Levels, Conversion from Testosterone to Estrogen, SHBG Level Propensity, and DHT Level Propensity.",
      },
      {
        title: "Athletic Performance & Recovery Peptides",
        body: "Genetic markers assessing individual response propensity to performance peptides: BPC-157 (soft tissue recovery), MOTS-C (exercise adaptation), CJC-1295 (recovery), TB4 / TB-500 (connective tissue), and IGF-1 LR3 (training recovery).",
      },
      {
        title: "Fat Loss & Body Composition Peptides",
        body: "Markers examining genetic factors related to body composition peptide response: 5-amino-1MQ (weight maintenance), AOD-9604 (weight maintenance), Tesamorelin (body composition), and CJC-1295 (lean mass).",
      },
    ],
  },
  "hormone-skin": {
    audience: "For hormone balance and skin health.",
    focuses: ["Hormone balance", "Skin health and collagen", "Aging markers"],
    markers: [
      {
        title: "Testosterone",
        body: "Markers covering Testosterone Level Propensity, PSA Level Propensity, LH Levels, Conversion from Testosterone to Estrogen, SHBG Level Propensity, and DHT Level Propensity.",
      },
      {
        title: "Estrogen",
        body: "Markers examining Estrogen Level Propensity, Estrogen Metabolite Elimination, and Estrogen Receptor Response.",
      },
      {
        title: "Progesterone",
        body: "Markers associated with Progesterone Metabolism (CYP2C19) and Progesterone Receptors.",
      },
      {
        title: "Nitric Oxide",
        body: "Marker assessing genetic factors related to Nitric Oxide Production — a key factor in vascular health and circulation.",
      },
      {
        title: "Skin Aging & Health",
        body: "Markers covering Rate of Skin Aging, Skin Antioxidant Capacity, Skin Hydration, Skin Elasticity, and Rate of Under-Eye Wrinkle Development.",
      },
      {
        title: "Skin Risks",
        body: "Genetic markers associated with Basal Cell Carcinoma Risk and Melanoma Risk.",
      },
      {
        title: "Hair Health",
        body: "Markers examining Hormone-related Hair Loss (male), Immune-based Hair Loss Propensity, Greying Hair, Selenium Deficiency Risk (Hair Health), Zinc Supplementation Benefit (Hair Health), and Vitamin A Conversion (Hair Health).",
      },
      {
        title: "Nutrient Absorption",
        body: "Marker covering Vitamin E Absorption — relevant to skin and hormonal health.",
      },
      {
        title: "Skin, Hair & Cosmetic Peptides",
        body: "Genetic markers assessing individual response propensity to aesthetic peptides: TB4 / TB-500 (resolution capacity), Epitalon (redox stress handling), GHK-Cu (skin aging susceptibility), and Melanotan-2 (photoaging susceptibility).",
      },
    ],
  },
  cognition: {
    audience: "For memory, focus, mood, and sleep.",
    focuses: ["Memory and focus", "Stress response", "Brain health"],
    markers: [
      {
        title: "Sleep",
        body: "Genetic markers associated with Deep Sleep Quality, Reported Sleep Quality, and Ideal Sleep Window.",
      },
      {
        title: "Mood & Mental Health",
        body: "Markers related to Anxiety Propensity, Depression Propensity, Mood-induced Sleeplessness Risk, and Postpartum Depression Propensity.",
      },
      {
        title: "Stress & Nervous System",
        body: "Markers covering Stress Adaptation and Autonomic Nervous System function, including genetic factors that may influence individual response to stress-related peptides: Semax (stress handling, mood-sleep coupling), Selank (mood regulation, anxiolytic response, stress-sleep coupling), FOXO4-DRI (stress resilience), and BPC-157 (pain burden).",
      },
      {
        title: "Focus & Attention",
        body: "Genetic markers associated with ADHD Propensity.",
      },
      {
        title: "Cognitive Enhancement & Brain Health",
        body: "Markers examining genetic factors related to executive function, attention, memory, global cognition, and neurodegeneration risk — including individual response propensity to cognitive peptides: Semax, Cerebrolysin, and DiHexa.",
      },
      {
        title: "Melatonin Metabolism",
        body: "Genetic marker for Melatonin Metabolism (CYP1A2), assessing how efficiently the body processes melatonin.",
      },
    ],
  },
  lifestyle: {
    audience: "For everyday sleep, stress, metabolism, and nutrition.",
    focuses: ["Metabolism", "Sleep and stress response", "Everyday nutrient needs"],
    markers: [
      {
        title: "Hormones",
        body: "Markers covering Testosterone, Estrogen, Progesterone, Cortisol, DHEA, Thyroid function, Autoimmune Thyroid risk, and Additional Hormone Genetics.",
      },
      {
        title: "Fitness & Exercise",
        body: "Markers examining Injury Risk, Fatigue and Recovery, Strength and Muscle, VO2 Max, Aerobic Training Benefit, High Intensity vs Endurance propensity, and Additional Exercise Genetics.",
      },
      {
        title: "Cognition & Brain Health",
        body: "Markers associated with General Cognition, Hippocampal Volume, Migraines, Parkinson’s risk, Stroke and White Matter Risks, and Cognition Modulators.",
      },
      {
        title: "Emotional Health",
        body: "Markers covering Depression Propensity, Anxiety Propensity, Stress Response, ADHD Propensity, and OCD & Rumination.",
      },
      {
        title: "Immunity & Inflammation",
        body: "Markers examining Mast Cell / IgE Levels, General Inflammation, Oxidative Stress, Histamine Sensitivity, Mold Severity, Asthma, Environmental Sensitivity, IL-10 Inflammation Risk, and Mitochondrial function.",
      },
      {
        title: "Metabolic Health & Diabetes Risk",
        body: "Markers associated with Insulin Resistance Propensity, T2D Propensity, Leptin Propensity, Adiponectin Levels, Appetite / Fullness Sensing, and Caffeine Effects on Glucose.",
      },
      {
        title: "Food Sensitivities & Nutrition",
        body: "Markers covering Lactose Intolerance Risk, Gluten Risk, Weight Gain from Dairy Fat, GAD1 Activity, Stress-induced Sleeplessness Risk, and Ideal Diet Plan.",
      },
      {
        title: "Vitamins & Minerals",
        body: "Markers examining B Vitamins (B6, B7/Biotin, B9, B12, Folic Acid, MTHFR Activity), Vitamin D (Inactive vs Active, Absorption, Deficiency Risk), Vitamin E Absorption, Electrolytes (Magnesium, Sodium, Potassium), Selenium and Iodine, and Iron levels (Overload Risk, Deficiency Risk, Serum Propensity, Transferrin).",
      },
      {
        title: "Methylation",
        body: "Markers covering COMT, MTHFR Activity, MTR, MTRR, general methylation efficiency, and Choline Need.",
      },
      {
        title: "Skin Health",
        body: "Markers associated with Rate of Skin Aging, Skin Hydration, Skin Elasticity, Wrinkle Development (crow’s feet, under-eye, upper eyelid sagging), Skin Glycation, and Skin Antioxidant Capacity.",
      },
      {
        title: "Sleep & Recovery",
        body: "Markers covering Deep Sleep Quality, Reported Sleep Quality, and Cold Plunge response (Cold Inflammation Benefit, Cold Plunge Tolerance).",
      },
      {
        title: "Longevity & Cellular Health",
        body: "Markers examining Longevity Propensity, Telomere Length Propensity, Heat Shock Protein Levels, and Sauna Benefit.",
      },
      {
        title: "Peptide Genetic Library",
        body: "The most extensive peptide response section across all panels — genetic markers assessing individual response propensity across 12 peptide categories: Fat Loss & Body Composition, Autonomic Nervous System & Stress Physiology, Mitochondrial Health & Metabolic Optimization, Longevity & Anti-Aging, Cognitive Enhancement & Brain Health, Gut Health & Nutrient Absorption, Skin, Hair & Cosmetic Health, Immune System Support, Athletic Performance & Recovery, Hormonal Regulation & Growth Hormone Support, GLP-1 and GLP-2 Peptides, and Tissue Healing & Inflammation Reduction.",
      },
    ],
  },
  peptide: {
    audience: "For choosing the right peptides.",
    focuses: [
      "Peptide pathways",
      "Individual response",
      "Context before a peptide plan",
    ],
    markers: [
      {
        title: "Fat Loss & Body Composition",
        body: "Markers assessing genetic response propensity to AOD-9604 (weight maintenance, macronutrient response), Tesamorelin (body composition, long-term maintenance, metabolic effects), IGF-1 LR3 (glucose), and 5-amino-1MQ (insulin sensitivity, weight maintenance, macronutrient response).",
      },
      {
        title: "Mitochondrial Health & Metabolic Optimization",
        body: "Markers examining metabolic and energy-related peptide response including Tesamorelin (metabolic risk), CJC-1295 (energy capacity), MOTS-C (energy, mitochondrial, metabolic risk), AOD-9604 (metabolic risk), 5-amino-1MQ (metabolic risk), FOXO4-DRI (cellular energy), and Epitalon (redox stress handling).",
      },
      {
        title: "Autonomic Nervous System & Stress Physiology",
        body: "Markers covering stress and mood-related peptide response: Semax (mood-sleep coupling, stress handling), Selank (mood regulation, anxiolytic response, stress-sleep coupling, stress handling), Epitalon (sleep), FOXO4-DRI (stress resilience), and BPC-157 (pain burden).",
      },
      {
        title: "Hormonal Regulation & Growth Hormone Support",
        body: "Markers assessing IGF-1 LR3 (anabolic), CJC-1295 (lean mass, sleep depth), Epitalon (circadian timing), and PT-141 (androgen milieu, hormonal balance, sex-hormone signaling).",
      },
      {
        title: "Athletic Performance & Recovery",
        body: "Markers examining IGF-1 LR3 (strength potential, training capacity, training recovery), MOTS-C (exercise adaptation), and TB4 / TB-500 (injury).",
      },
      {
        title: "Cognitive Enhancement & Brain Health",
        body: "Markers covering Semax (executive function, cognitive performance, attention), Cerebrolysin (global cognition, cognitive decline susceptibility, neurodegeneration risk, Parkinsonian dementia context, vascular cognition), and DiHexa (focus, memory, global cognition, cognitive decline susceptibility, neurodegeneration risk).",
      },
      {
        title: "Gut Health & Nutrient Absorption",
        body: "Markers examining Teduglutide (fat-soluble nutrient absorption, absorptive capacity, IBD-related risk, barrier integrity) and BPC-157 (gut barrier).",
      },
      {
        title: "Skin, Hair & Cosmetic Health",
        body: "Markers covering Melanotan-2 (melanocortin, UV damage resilience, pigmentation change, photoaging susceptibility) and GHK-Cu (dermal structure, oxidative stress handling, skin barrier, skin aging susceptibility, scalp microcirculation, hair growth support).",
      },
      {
        title: "Immune System Support",
        body: "Markers examining TA1 / Thymosin Alpha 1 response for autoimmune context and anti-inflammatory benefit.",
      },
      {
        title: "Longevity & Anti-Aging",
        body: "Markers covering Epitalon (telomere maintenance) and FOXO4-DRI (healthy aging, inflammatory aging, cellular energy).",
      },
      {
        title: "Tissue Healing & Inflammation Reduction",
        body: "Markers examining TA1 / Thymosin Alpha 1 (immune, baseline inflammation), TB4 / TB-500 (connective tissue, resolution capacity, pain), BPC-157 (soft tissue recovery, joint, inflammation resolution), CJC-1295 (bone remodeling), and IGF-1 LR3 (bone support).",
      },
      {
        title: "Metabolic Medication Response",
        body: "Markers assessing genetic response propensity to Semaglutide (satiety, insulin sensitivity, glycemic response, maintaining weight loss) and Tirzepatide (appetite control, insulin sensitivity, glycemic response, overall metabolic risk, maintaining weight loss).",
      },
    ],
  },
  "glp-1": {
    audience: "For choosing the right GLP-1 medication.",
    focuses: [
      "25 genetic markers",
      "How biology may interact with GLP-1 medications",
      "Context for a medication conversation",
    ],
    markersIntro:
      "Markers examining genetic response propensity across three GLP medications.",
    markers: [
      {
        title: "Semaglutide",
        body: "Satiety, insulin sensitivity, glycemic response, and maintaining weight loss.",
      },
      {
        title: "Tirzepatide",
        body: "Appetite control, insulin sensitivity, glycemic response, overall metabolic risk, and maintaining weight loss.",
      },
      {
        title: "Retatrutide",
        body: "Appetite reduction, blood sugar response, maintaining weight loss, low-carb diet response, glycemic response, and overall metabolic risk.",
      },
    ],
  },
  "toxin-gut": {
    audience: "For gut health and detoxification.",
    focuses: ["Digestion", "Nutrient absorption", "Detoxification pathways"],
    markers: [
      {
        title: "Gut Health",
        body: "Looks at genetic factors associated with gut-related conditions and intestinal barrier function, including Crohn’s disease risk, Ulcerative Colitis risk, and Gut Permeability.",
      },
      {
        title: "Detoxification — Phase 1",
        body: "Examines how the body metabolizes common substances at the cellular level, including NSAIDs, Caffeine, Mold, Phthalates, General Medications (CYP2D6), and Acetaminophen.",
      },
      {
        title: "Detoxification — Phase 2",
        body: "Covers the body’s secondary detox pathways including Glutathione production, Acetylation, Glucuronidation, and key enzyme activity markers: NRF2, MTHFR, Catalase, NAT2, and SOD2.",
      },
      {
        title: "Detoxification — Phase 3",
        body: "Looks at the body’s ability to transport and eliminate metabolic byproducts, including Estrogen Metabolite Elimination.",
      },
      {
        title: "Heavy Metal & Environmental Exposure",
        body: "Examines genetic susceptibility to environmental toxins including Fluoride, Arsenic, Mercury, and Lead exposure risk, as well as CBS Activity related to sulfur metabolism.",
      },
      {
        title: "Inflammation Markers",
        body: "Includes Oxidative Stress support, Histamine sensitivity (general and food-based), IL-10 Inflammation Risk, CRP Inflammation, Benzene Risk, and NRF2 Activity.",
      },
      {
        title: "Alcohol Genetics",
        body: "Looks at genetic factors related to Alcohol Metabolism, Alcohol Inflammation Risk, Alcohol Abuse Risk, and APOe Status.",
      },
      {
        title: "BPC-157 Response",
        body: "Assesses genetic factors associated with individual response to BPC-157, including Inflammation Resolution and Gut Barrier benefit.",
      },
    ],
  },
};
