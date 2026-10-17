import type { Metadata } from "next";
import { Arrow, PageIntro, TextLink } from "@/components/ui";
import { resources } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Planned financial literacy worksheets and activities for elementary students. Resources are coming soon; no downloads are available yet.",
};

export default function Resources() {
  return (
    <>
      <PageIntro eyebrow="For a little extra practice" title="Resources">
        <p>
          Worksheets and activities are on the way. We’ll add them here when
          they’re ready.
        </p>
      </PageIntro>
      <section className="section">
        <div className="container resources-container">
          <ul className="resource-list">
            {resources.map((resource) => (
              <li key={resource.title}>
                <div>
                  <h2>{resource.title}</h2>
                  <p>{resource.description}</p>
                </div>
                {resource.status === "Available" && resource.href ? (
                  <a className="text-link" href={resource.href} download>
                    Download
                    <Arrow />
                  </a>
                ) : (
                  <span className="resource-status">Coming Soon</span>
                )}
              </li>
            ))}
          </ul>
          <div className="resource-note">
            <p>There are no downloadable files available yet.</p>
            <TextLink href="/what-we-teach">See the topics we cover</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
