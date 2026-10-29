import Link from "next/link";
import { WorkshopExample } from "@/components/workshop-example";
import { Impact } from "@/components/impact";
import { Story, LessonNote, Support } from "@/components/story";
import { HostInvitation } from "@/components/ui";
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container">
          <p className="eyebrow">Financial Literacy for Kids</p>
          <h1>
            Money lessons for
            <br />
            everyday life.
          </h1>
          <p className="hero-subtitle">
            Free online financial literacy workshops for elementary students,
            led by Alex Lam in Dublin, California.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#workshop">
              Explore the workshop
            </Link>
            <Link className="secondary-link" href="/partner-with-us">
              Ask about a session
            </Link>
          </div>
        </div>
      </section>
      <section className="workshop-band" id="workshop">
        <div className="container">
          <WorkshopExample />
          <div className="workshop-caption">
            <h2>A look inside the workshop</h2>
            <p>
              Students make a spending plan, compare different choices, and
              adjust when an unexpected expense comes up.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">What we have done</p>
          <Impact />
          <p>
            Workshops cover saving, budgeting, needs versus wants, responsible
            spending, borrowing and credit, and introductory investing. Students
            work through examples and questions they can discuss.
          </p>
          <p>The current teaching materials mainly suit grades 3–5.</p>
          <Link className="text-link" href="/workshops">
            More about the workshops
          </Link>
        </div>
      </section>
      <section className="section story-section" id="story">
        <div className="container narrow">
          <p className="eyebrow">My story</p>
          <h2>It started with my family.</h2>
          <Story />
          <LessonNote />
          <Support />
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Useful resources</p>
          <h2>Keep the conversation going.</h2>
          <p>
            Preview the budgeting activity and download the full online workshop slideshow.
          </p>
          <Link className="text-link" href="/resources">
            Explore the workshop slides
          </Link>
        </div>
      </section>
      <HostInvitation />
    </>
  );
}
