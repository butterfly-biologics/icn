"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { hubspotPortalId } from "@/lib/site";
import type { LeadField } from "@/lib/lead-forms";

type HubSpotLeadFormProps = {
  id: string;
  formId: string;
  fields: readonly LeadField[];
  submitLabel: string;
  successMessage: string;
};

const utmFields = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

const inputClass =
  "w-full border border-line bg-cream px-4 py-3 text-lg font-light text-brown outline-none transition-colors focus:border-brown aria-invalid:border-gold";

type Status = "idle" | "submitting" | "success" | "error";

function validate(field: LeadField, raw: string): string {
  const value = raw.trim();
  if (field.optional && !value) return "";
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

export function HubSpotLeadForm({
  id,
  formId,
  fields,
  submitLabel,
  successMessage,
}: HubSpotLeadFormProps) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((field) => [field.name, ""])),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update(field: LeadField, value: string) {
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
      document.getElementById(`${id}-${firstInvalid.name}`)?.focus();
      return;
    }

    setStatus("submitting");
    const params = new URLSearchParams(window.location.search);
    const submitted = [
      ...fields.map((field) => ({ name: field.name, value: values[field.name].trim() })),
      ...utmFields.map((name) => ({ name, value: params.get(name) ?? "" })),
    ].filter((field) => field.value);
    const hutk = readCookie("hubspotutk");

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${formId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: submitted.map((field) => ({ objectTypeId: "0-1", ...field })),
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
        <p className="text-lg leading-[1.6] font-light text-ink">{successMessage}</p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      data-hs-do-not-collect="true"
      className="flex max-w-2xl flex-col gap-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => {
          const fieldId = `${id}-${field.name}`;
          const error = errors[field.name];
          const shared = {
            id: fieldId,
            name: field.name,
            value: values[field.name] ?? "",
            required: !field.optional,
            disabled: submitting,
            className: inputClass,
            "aria-invalid": Boolean(error),
            "aria-describedby": error ? `${fieldId}-error` : undefined,
          };

          return (
            <FormField
              key={field.name}
              label={field.optional ? `${field.label} (optional)` : field.label}
              htmlFor={fieldId}
              error={error}
              className={field.half ? "" : "sm:col-span-2"}
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
              ) : field.kind === "textarea" ? (
                <textarea
                  {...shared}
                  rows={5}
                  onChange={(event) => update(field, event.target.value)}
                />
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
        {submitting ? "Sending…" : submitLabel}
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
