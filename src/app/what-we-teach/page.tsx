import type { Metadata } from "next";
import { HostInvitation, PageIntro } from "@/components/ui";
import { PhotoArea } from "@/components/photo-area";
import { photos, topics } from "@/lib/site";

export const metadata: Metadata = {
  title: "What We Teach",
  description:
    "Saving, budgeting, needs vs. wants, responsible spending, banking basics, and making smart choices, explained for elementary students.",
};

export default function WhatWeTeach() {
  return (
    <>
      <PageIntro eyebrow="Everyday money concepts" title="What We Teach">
        <p>
          No complicated terminology. Just ideas students can connect to their
          own lives.
        </p>
      </PageIntro>
      <section className="section">
        <div className="container">
          <div className="curriculum-list">
            {topics.map((topic, index) => (
              <article className="curriculum-row" key={topic.title}>
                <div className="curriculum-heading">
                  <span className="topic-number">0{index + 1}</span>
                  <h2>{topic.title}</h2>
                </div>
                <div>
                  <p className="curriculum-description">{topic.description}</p>
                  <div className="example-question">
                    <span>For example</span>
                    <p>{topic.example}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {photos.teachingMaterials.length > 0 && (
            <PhotoArea
              images={photos.teachingMaterials}
              title="Teaching materials"
              emptyText="Teaching materials photos will be added here."
            />
          )}
        </div>
      </section>
      <HostInvitation />
    </>
  );
}
