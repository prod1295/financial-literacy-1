"use client";

import { useRef, useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { Arrow } from "@/components/ui";

export function InquiryForm() {
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);
  const draftRef = useRef<HTMLTextAreaElement>(null);

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) || "").trim();
    const body = [
      "Hello Alex,",
      "",
      "I’m interested in hosting a Financial Literacy for Kids workshop.",
      "",
      `Name: ${value("name")}`,
      `Organization: ${value("organization")}`,
      `Email: ${value("email")}`,
      `Role: ${value("role") || "Not specified"}`,
      `Grade level: ${value("grade") || "Not specified"}`,
      `Approximate number of students: ${value("students") || "Not specified"}`,
      "",
      value("message"),
      "",
      "Thank you,",
      value("name"),
    ].join("\n");
    setDraft(body);
    setCopied(false);
    // Keep this page (and its copyable draft) available even if the browser
    // has no mail handler. A blocked external window still leaves the draft.
    // Nothing is transmitted by this website.
    window.open(
      `mailto:${site.email}?subject=${encodeURIComponent("Workshop inquiry: Financial Literacy for Kids")}&body=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      draftRef.current?.focus();
      draftRef.current?.select();
      setCopied(false);
    }
  }

  return (
    <div className="inquiry-form-wrap">
      <h2>Tell us a little about your group</h2>
      <p className="form-explanation">
        This form helps you write an email. It opens your email app with your
        details filled in. You’ll need to send the email yourself.
      </p>
      <form
        onSubmit={prepareEmail}
        className="inquiry-form"
        onChange={() => {
          setDraft("");
          setCopied(false);
        }}
      >
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="name">
              Name <span>(required)</span>
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
            />
          </div>
          <div className="form-field">
            <label htmlFor="organization">
              Organization <span>(required)</span>
            </label>
            <input
              id="organization"
              name="organization"
              autoComplete="organization"
              required
              maxLength={150}
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">
              Email <span>(required)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={200}
            />
          </div>
          <div className="form-field">
            <label htmlFor="role">
              Role <span>(optional)</span>
            </label>
            <input
              id="role"
              name="role"
              autoComplete="organization-title"
              placeholder="Teacher, librarian, program coordinator…"
              maxLength={150}
            />
          </div>
          <div className="form-field">
            <label htmlFor="grade">
              Grade level <span>(optional)</span>
            </label>
            <select id="grade" name="grade" defaultValue="">
              <option value="">Select a grade level</option>
              <option>Grades 3–5</option>
              <option>Kindergarten–grade 2</option>
              <option>Mixed elementary grades</option>
              <option>Other / not sure yet</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="students">
              Approximate number of students <span>(optional)</span>
            </label>
            <input
              id="students"
              name="students"
              type="number"
              min="1"
              max="10000"
              step="1"
              placeholder="e.g. 25"
            />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="message">
            Message <span>(required)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            maxLength={1500}
            placeholder="Where is your program based? Any dates or topics you have in mind?"
          />
        </div>
        <div className="form-action">
          <button className="button button-primary" type="submit">
            Open Email Draft
            <Arrow />
          </button>
          <p>Your details aren’t submitted or stored on this website.</p>
        </div>
      </form>
      {draft && (
        <div className="draft-fallback">
          <p role="status">
            Your email draft is ready. This website hasn’t sent a message. If
            your email app didn’t open, copy the draft below and email it to{" "}
            {site.email}.
          </p>
          <label htmlFor="email-draft">Your email draft</label>
          <textarea
            id="email-draft"
            ref={draftRef}
            value={draft}
            readOnly
            rows={10}
          />
          <button type="button" className="text-link" onClick={copyDraft}>
            {copied ? "Draft copied" : "Copy Email Draft"}
            <Arrow />
          </button>
          <span role="status" className="sr-only">
            {copied ? "Email draft copied to clipboard." : ""}
          </span>
        </div>
      )}
    </div>
  );
}
