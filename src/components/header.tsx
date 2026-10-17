"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/lib/site";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      className={`brand${footer ? " brand-footer" : ""}`}
      href="/"
      aria-label="Financial Literacy for Kids home"
    >
      <svg
        width="36"
        height="39"
        viewBox="0 0 36 39"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M18 8C13 4 7 4 3 5v25c6-1 10 0 15 4 5-4 9-5 15-4V5c-4-1-10-1-15 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M18 8v26M8 12c2 0 4 .4 6 1.5M8 18c2 0 4 .4 6 1.5M22 13.5c2-1.1 4-1.5 6-1.5M22 19.5c2-1.1 4-1.5 6-1.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span>
        Financial Literacy<span>for Kids</span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <button
          className="menu-toggle"
          ref={toggleRef}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span
            className={`menu-lines${open ? " is-open" : ""}`}
            aria-hidden="true"
          >
            <i />
            <i />
          </span>
        </button>
        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={`navigation${open ? " is-open" : ""}`}
        >
          {navigation.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={href === "/partner-with-us" ? "nav-contact" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
