import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { EmailLink, PageIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Contact Alex Lam about hosting a free financial literacy workshop for your elementary school, after-school program, library, or community center.",
};

export default function PartnerWithUs() {
  return (
    <>
      <PageIntro eyebrow="Let’s plan a workshop" title="Partner With Us">
        <p>
          If you work with elementary-age students and are interested in hosting
          a free financial literacy workshop, feel free to reach out.
        </p>
      </PageIntro>
      <section className="section">
        <div className="container partner-layout">
          <aside className="contact-aside">
            <p className="eyebrow">Email is the best way to reach us</p>
            <EmailLink className="contact-email" />
            <p>
              Alex Lam
              <br />
              Dublin, California
            </p>
            <div className="contact-details">
              <h2>Who can get in touch?</h2>
              <ul>
                <li>Elementary schools</li>
                <li>After-school programs</li>
                <li>Libraries</li>
                <li>Community centers</li>
              </ul>
              <p>
                Workshops are free and designed mainly for grades 3–5. Other
                elementary grade levels can be accommodated.
              </p>
              <p>In-person sessions depend on location and scheduling.</p>
            </div>
          </aside>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
