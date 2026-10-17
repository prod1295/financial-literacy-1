import type { Metadata } from "next";
import { PageIntro, HostInvitation } from "@/components/ui";
import { Impact } from "@/components/impact";
import { PhotoArea } from "@/components/photo-area";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Alex Lam’s interest in economics and a student-organized badminton fundraiser that raised more than $8,000 led to Financial Literacy for Kids.",
};

export default function OurStory() {
  return (
    <>
      <PageIntro eyebrow="A note from Alex" title="How this started">
        <p>From an interest in economics to a local teaching program.</p>
      </PageIntro>
      <section className="section story-section">
        <div className="container story-layout">
          <aside className="story-sidebar">
            <span className="signature">Alex Lam</span>
            <p>
              Founder
              <br />
              Dublin, California
            </p>
          </aside>
          <div>
            <div className="prose">
              <p>
                I’ve been interested in economics and how people make decisions
                with money for a while, but I realized that a lot of the basic
                ideas I was learning were things I had never really been taught
                when I was younger.
              </p>
              <p>
                Saving, budgeting, and deciding whether something is a need or a
                want sound simple, but they shape a lot of everyday choices. I
                started wondering why students usually do not talk about these
                ideas until much later.
              </p>
              <p>
                Around the same time, I organized a badminton fundraiser that
                raised more than $8,000. Instead of treating the fundraiser as
                the end of the project, I wanted to use the money to build
                something that could continue helping people afterward.
              </p>
              <p>That became Financial Literacy for Kids.</p>
              <p>
                The goal is pretty simple: introduce younger students to money
                in a way that is understandable, useful, and not intimidating.
              </p>
            </div>
            <PhotoArea
              images={photos.badmintonFundraiser}
              title="From the fundraiser"
              emptyText="Badminton fundraiser photos will be added here."
            />
          </div>
        </div>
      </section>
      <Impact />
      <HostInvitation />
    </>
  );
}
