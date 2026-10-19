"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { portalUrl } from "@/lib/site";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#panels", label: "Test panels" },
  { href: "/providers", label: "For your practice" },
  { href: "/patients", label: "Patients" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="px-5 sm:px-8 lg:px-16">
      <div className="flex h-[100px] items-center justify-between gap-6 py-10">
        <Link href="/" aria-label="Iconus home">
          <Image
            src="/brand/wordmark.png"
            alt="Iconus"
            width={100}
            height={30}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-14 lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-8 font-mono text-sm text-cream uppercase">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-teal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-7">
            <ButtonLink href={portalUrl} variant="login">
              Log in
            </ButtonLink>
            <ButtonLink href="/get-started">Get started</ButtonLink>
          </div>
        </nav>

        <button
          type="button"
          className="font-mono text-sm text-cream uppercase lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-brown px-5 text-cream sm:px-8 lg:hidden"
        >
          <div className="flex h-[100px] shrink-0 items-center justify-between gap-6 py-10">
            <Link href="/" aria-label="Iconus home" onClick={() => setOpen(false)}>
              <Image src="/brand/wordmark.png" alt="Iconus" width={100} height={30} />
            </Link>
            <button
              type="button"
              className="font-mono text-sm text-cream uppercase"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-10 pt-6 pb-10" aria-label="Primary">
            <ul className="flex flex-col gap-6 font-mono text-base text-cream uppercase">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setOpen(false)} className="hover:text-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col items-start gap-4">
              <ButtonLink href={portalUrl} variant="login">
                Log in
              </ButtonLink>
              <ButtonLink href="/get-started">Get started</ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
