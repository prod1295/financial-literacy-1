import { PageIntro, HostInvitation, TextLink } from "@/components/ui";
import { Impact } from "@/components/impact";
export const metadata = { title: "About" };
export default function About() {
  return (
    <>
      <PageIntro eyebrow="Dublin, California" title="A student-led program." />
      <section className="section">
        <div className="container narrow">
          <p>
            I'm Alex Lam, founder of Financial Literacy for Kids. I offer free
            online financial literacy workshops for elementary students, with
            teaching materials mainly suited to grades 3–5.
          </p>
          <p>
            The lessons use everyday examples and leave room for students’
            questions.
          </p>
          <Impact />
          <TextLink href="/our-story">Read my story</TextLink>
        </div>
      </section>
      <HostInvitation />
    </>
  );
}
