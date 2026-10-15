"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { hubspotProviderForm } from "@/lib/site";

type FieldKind = "text" | "email" | "tel" | "select";

type Field = {
  name: string;
  label: string;
  kind: FieldKind;
  autoComplete?: string;
  options?: readonly string[];
};

const fields: readonly Field[] = [
  { name: "firstname", label: "First name", kind: "text", autoComplete: "given-name" },
  { name: "lastname", label: "Last name", kind: "text", autoComplete: "family-name" },
  { name: "company", label: "Practice or company", kind: "text", autoComplete: "organization" },
  { name: "email", label: "Work email", kind: "email", autoComplete: "email" },
  { name: "phone", label: "Phone number", kind: "tel", autoComplete: "tel" },
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
];

const utmFields = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

const halfWidth = new Set(["firstname", "lastname", "email", "phone"]);

const inputClass =
  "w-full border border-line bg-cream px-4 py-3 text-lg font-light text-brown outline-none transition-colors focus:border-brown aria-invalid:border-gold";

type Status = "idle" | "submitting" | "success" | "error";

function validate(field: Field, raw: string): string {
  const value = raw.trim();
  if (field.kind === "select") return value ? "" : "Please choose an option.";
  if (field.kind === "email") {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please add a valid email address.";
  }
  if (field.kind === "tel") {
    return value.replace(/\D/g, "").length >= 7 ? "" : "Please add a valid phone number.";
  }
  return value.length >= 2 ? "" : "Please fill this in.";
}

function readCookie(name: string) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
}

export function ProviderLeadForm() {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((field) => [field.name, ""])),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update(field: Field, value: string) {
    setValues((current) => ({ ...current, [field.name]: value }));
    if (errors[field.name]) {
      setErrors((current) => ({ ...current, [field.name]: validate(field, value) }));
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = Object.fromEntries(
      fields.map((field) => [field.name, validate(field, values[field.name] ?? "")]),
    );
    setErrors(next);

    const firstInvalid = fields.find((field) => next[field.name]);
    if (firstInvalid) {
      document.getElementById(`lead-${firstInvalid.name}`)?.focus();
      return;
    }

    setStatus("submitting");
    const params = new URLSearchParams(window.location.search);
    const utms = utmFields
      .map((name) => ({ name, value: params.get(name) ?? "" }))
      .filter((utm) => utm.value);
    const hutk = readCookie("hubspotutk");

    const { portalId, formId } = hubspotProviderForm;
    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              ...fields.map((field) => ({
                objectTypeId: "0-1",
                name: field.name,
                value: values[field.name].trim(),
              })),
              ...utms.map((utm) => ({ objectTypeId: "0-1", ...utm })),
            ],
            context: {
              ...(hutk ? { hutk } : {}),
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        },
      );
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex max-w-xl flex-col gap-4 border-t border-line pt-8">
        <p className="font-mono text-sm text-gold uppercase">Thank you</p>
        <p className="text-3xl leading-[1.2] font-medium">We’ll be in touch soon.</p>
        <p className="text-lg leading-[1.6] font-light text-ink">
          Someone from ICONUS will reach out to walk you through the panels and how ordering works.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="flex max-w-2xl flex-col gap-8">
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => {
          const id = `lead-${field.name}`;
          const error = errors[field.name];
          const shared = {
            id,
            name: field.name,
            value: values[field.name] ?? "",
            required: true,
            disabled: submitting,
            className: inputClass,
            "aria-invalid": Boolean(error),
            "aria-describedby": error ? `${id}-error` : undefined,
          };

          return (
            <FormField
              key={field.name}
              label={field.label}
              htmlFor={id}
              error={error}
              className={halfWidth.has(field.name) ? "" : "sm:col-span-2"}
            >
              {field.kind === "select" ? (
                <select {...shared} onChange={(event) => update(field, event.target.value)}>
                  <option value="" disabled>
                    Select one
                  </option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  {...shared}
                  type={field.kind}
                  autoComplete={field.autoComplete}
                  onChange={(event) => update(field, event.target.value)}
                />
              )}
            </FormField>
          );
        })}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-[54px] w-fit items-center gap-6 bg-teal px-6 font-mono text-sm text-brown uppercase transition-colors hover:bg-[#6dcec3] disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Contact us"}
        <img src="/brand/arrow-dark.svg" width={18} height={18} alt="" />
      </button>

      {status === "error" ? (
        <p role="alert" className="text-lg leading-[1.6] font-light text-gold">
          Something went wrong sending your details. Please try again, or email us using the address
          on this page.
        </p>
      ) : null}
    </form>
  );
}

function FormField({
  label,
  htmlFor,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      <label htmlFor={htmlFor} className="font-mono text-sm uppercase">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-sm text-gold" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
