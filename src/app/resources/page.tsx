import { PageIntro, EmailLink, TextLink } from "@/components/ui";
import { WorkshopExample } from "@/components/workshop-example";
export const metadata = {
  title: "Resources",
  description:
    "Preview a real $20 budgeting slide and download the Financial Literacy for Kids online workshop slideshow.",
};
export default function Resources() {
  return (
    <>
      <PageIntro eyebrow="Practice together" title="A plan for $20.">
        <p>
          Preview a real budgeting slide from the online workshop.
        </p>
      </PageIntro>
      <section className="section">
        <div className="container">
          <WorkshopExample />
          <div className="narrow resource-note">
            <h2>Download the workshop slides.</h2>
            <p>
              The 45-minute online lesson covers needs and wants, saving, budgeting, cards, borrowing, and introductory investing. Activities use pretend amounts. Investing involves risk, and examples of returns are not guarantees.
            </p>
            <TextLink href="/resources/Financial_Literacy_for_Kids_Online_45_Minutes.pptx">Download the workshop slideshow (PPTX, 5.4 MB)</TextLink>
            <p>
              For questions about lesson materials, email <EmailLink />.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
