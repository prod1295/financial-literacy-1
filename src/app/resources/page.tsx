import { PageIntro, EmailLink } from "@/components/ui";
import { WorkshopExample } from "@/components/workshop-example";
export const metadata = {
  title: "Resources",
  description:
    "Practice making and adjusting a spending plan with a simple $20 activity.",
};
export default function Resources() {
  return (
    <>
      <PageIntro eyebrow="Practice together" title="A plan for $20.">
        <p>
          Use this example to start a conversation about needs, wants, and
          saving.
        </p>
      </PageIntro>
      <section className="section">
        <div className="container">
          <WorkshopExample />
          <div className="narrow resource-note">
            <h2>Talk through your choices.</h2>
            <p>
              Which expenses would you keep? Where could you spend less? There
              can be more than one reasonable answer.
            </p>
            <p>
              For questions about lesson materials, email <EmailLink />.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
