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
