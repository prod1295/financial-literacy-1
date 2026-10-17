import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, EmailLink, PageIntro } from "@/components/ui";
import { PhotoArea } from "@/components/photo-area";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Workshops",
  description:
    "Free, interactive 30–45 minute financial literacy workshops, mainly for grades 3–5, for schools and community programs in the Dublin area.",
};

const schedule = [
  {
    time: "5 min",
    title: "Introduction",
    description: "Start with a simple question about how we use money.",
  },
  {
    time: "10 min",
    title: "Needs vs. Wants",
    description:
      "Talk through everyday items and decide which belong in each group.",
  },
  {
    time: "10 min",
    title: "Saving & Budgeting",
    description: "Make a small spending plan and think about saving for later.",
  },
  {
    time: "10 min",
    title: "Interactive Activity",
    description: "Practice making choices with a sample budget.",
  },
  {
    time: "5 min",
    title: "Questions & Recap",
    description: "Share questions and revisit the main ideas.",
  },
];

export default function Workshops() {
  return (
    <>
      <PageIntro
        eyebrow="For schools & community programs"
        title="Free Financial Literacy Workshops"
      >
        <p>
          Simple examples, plenty of conversation, and time to try things out.
        </p>
      </PageIntro>
      <section className="section">
        <div className="container">
          <div className="workshop-facts">
            <div>
              <span>Cost</span>
              <strong>Free</strong>
            </div>
            <div>
              <span>Length</span>
              <strong>30–45 minutes</strong>
            </div>
            <div>
              <span>Main age group</span>
              <strong>Grades 3–5</strong>
            </div>
            <div>
              <span>Format</span>
              <strong>Interactive</strong>
            </div>
          </div>
          <div className="editorial-split workshop-details">
            <h2>What to expect</h2>
            <div className="prose">
              <p>
                Our workshops introduce saving, budgeting, needs vs. wants, and
                other everyday money concepts through discussions and hands-on
                activities.
              </p>
              <p>
                They’re designed mainly for grades 3–5 and can be adapted for
                other elementary grade levels. We welcome inquiries from
                elementary schools, after-school programs, libraries, and
                community centers.
              </p>
              <p>
                Workshops can be conducted in person depending on location and
                scheduling. We’re currently working with local after-school
                programs in Dublin to organize sessions.
              </p>
            </div>
          </div>
          <div className="schedule-layout">
            <div>
              <p className="eyebrow">One possible session</p>
              <h2>Example workshop structure</h2>
              <p>
                This is an example, not a fixed schedule. Topics and timing can
                be adjusted for the group.
              </p>
            </div>
            <ol className="schedule">
              {schedule.map((item) => (
                <li key={item.title}>
                  <span className="schedule-time">{item.time}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          {photos.workshops.length > 0 && (
            <PhotoArea
              images={photos.workshops}
              title="Workshop photos"
              emptyText="Workshop photos will be added here."
            />
          )}
          <div className="workshop-contact">
            <h2>Interested in hosting a workshop?</h2>
            <p>
              Contact us at <EmailLink />.
            </p>
            <Link className="button button-primary" href="/partner-with-us">
              Start a Workshop Inquiry
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
