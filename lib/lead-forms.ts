// Field names must match the internal property names on the HubSpot forms.
// Changing a field in HubSpot does not update the site; update the matching list here.

export type LeadField = {
  name: string;
  label: string;
  kind: "text" | "email" | "tel" | "select" | "textarea";
  autoComplete?: string;
  options?: readonly string[];
  optional?: boolean;
  half?: boolean;
};

export const providerForm = {
  formId: "53dc4601-7757-4690-baec-80e7ca887f16",
  fields: [
    { name: "firstname", label: "First name", kind: "text", autoComplete: "given-name", half: true },
    { name: "lastname", label: "Last name", kind: "text", autoComplete: "family-name", half: true },
    { name: "company", label: "Practice or company", kind: "text", autoComplete: "organization" },
    { name: "email", label: "Work email", kind: "email", autoComplete: "email", half: true },
    { name: "phone", label: "Phone number", kind: "tel", autoComplete: "tel", half: true },
    {
      name: "numemployees",
      label: "Number of employees",
      kind: "select",
      options: ["1-5", "5-25", "25-50", "50-100", "100-500", "500-1000", "1000+"],
    },
    {
      name: "practice_focus",
      label: "Practice focus",
      kind: "select",
      options: [
        "Functional/integrative",
        "Longevity/anti-aging",
        "Weight management",
        "Aesthetics/med spa",
        "Sports/performance",
        "Primary care",
        "Other",
      ],
    },
    {
      name: "expected_kit_volume_per_month",
      label: "Expected kit orders per month",
      kind: "select",
      options: ["1-10", "10-50", "50-100", "100-250", "250+"],
    },
  ],
} as const satisfies { formId: string; fields: readonly LeadField[] };

export const patientForm = {
  formId: "4d211130-b5b9-4a4e-a66e-93920a18b4eb",
  fields: [
    { name: "firstname", label: "First name", kind: "text", autoComplete: "given-name", half: true },
    { name: "lastname", label: "Last name", kind: "text", autoComplete: "family-name", half: true },
    { name: "email", label: "Email", kind: "email", autoComplete: "email", half: true },
    { name: "phone", label: "Phone number", kind: "tel", autoComplete: "tel", half: true },
    { name: "message", label: "How can we help you?", kind: "textarea", optional: true },
  ],
} as const satisfies { formId: string; fields: readonly LeadField[] };
