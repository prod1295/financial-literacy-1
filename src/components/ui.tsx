import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className="text-link">
      {children}
      <Arrow />
    </Link>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-intro">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <div className="intro-copy">{children}</div>}
      </div>
    </header>
  );
}

export function HostInvitation() {
  return (
    <section className="host-invitation">
      <div className="container invitation-inner">
        <div>
          <p className="eyebrow">Schools · Libraries · Community programs</p>
          <h2>Interested in hosting a workshop?</h2>
          <p>
            Let’s talk about your students, your space, and a time that works.
          </p>
        </div>
        <Link className="button button-primary" href="/partner-with-us">
          Partner With Us
          <Arrow />
        </Link>
      </div>
    </section>
  );
}

export function EmailLink({ className = "" }: { className?: string }) {
  return (
    <a className={className} href={`mailto:${site.email}`}>
      {site.email}
    </a>
  );
}
