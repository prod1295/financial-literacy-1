import Image from "next/image";
import { PageIntro, EmailLink, TextLink } from "@/components/ui";
import { WorkshopExample } from "@/components/workshop-example";

export const metadata = {
  title: "Resources",
  description: "Preview real slides from the Financial Literacy for Kids workshop and download both PowerPoint files.",
};

export default function Resources() {
  return <>
    <PageIntro eyebrow="Practice together" title="Lesson resources.">
      <p>Take a closer look at the budgeting activity and a later addition to the investing lesson.</p>
    </PageIntro>
    <section className="section">
      <div className="container">
        <div className="narrow"><p className="eyebrow">Online workshop</p><h2>Make a plan for $20.</h2><p>Students decide what to buy, save, and possibly share. Then an unexpected expense gives them a reason to adjust their plan.</p></div>
        <div className="slide-resource"><WorkshopExample /></div>
        <div className="narrow resource-note">
          <p>The 45-minute online lesson covers needs and wants, saving, budgeting, cards, borrowing, and introductory investing. Activities use pretend amounts. Investing involves risk, and examples of returns are not guarantees.</p>
          <TextLink href="/resources/Financial_Literacy_for_Kids_Online_45_Minutes.pptx">Download the workshop slideshow (PPTX, 5.4 MB)</TextLink>
        </div>
      </div>
    </section>
    <section className="section resource-second">
      <div className="container">
        <div className="narrow"><p className="eyebrow">An addition to the lesson</p><h2>What if you start at 40?</h2><p>A student asked whether it was too late for their parents to start investing. This recently added slide compares starting at twenty with starting at forty. An earlier start gives money more time to grow, while starting later can still help.</p></div>
        <figure className="real-slide slide-resource">
          <Image src="/images/starting-at-20-vs-40.png" width={1601} height={900} alt="Slide comparing a $1,000 investment started at age 20 with one started at age 40, both left until age 60. At a hypothetical 5% annual growth rate, the example shows about $7,040 versus $2,653." sizes="(max-width: 960px) 100vw, 960px" />
          <figcaption>From the Starting at 20 vs 40 slideshow.</figcaption>
        </figure>
        <div className="narrow resource-note">
          <p><strong>Pretend example:</strong> Each adult invests $1,000 and leaves it until age 60. The slide assumes 5% growth each year with returns reinvested, and no extra deposits, fees, taxes, or inflation. Real investments can lose value. These amounts are not guaranteed.</p>
          <TextLink href="/resources/Starting_at_20_vs_40.pptx">Download the age comparison (PPTX, 21 KB)</TextLink>
          <p>For questions about lesson materials, email <EmailLink />.</p>
        </div>
      </div>
    </section>
  </>;
}
