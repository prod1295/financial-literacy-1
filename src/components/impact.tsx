import { TextLink } from "@/components/ui";

export function Impact({ showStoryLink = false }: { showStoryLink?: boolean }) {
  return (
    <section className="section impact-section">
      <div className="container">
        <div className="section-top">
          <div>
            <p className="eyebrow">An honest look at our progress</p>
            <h2>Where we are so far</h2>
          </div>
          {showStoryLink && (
            <TextLink href="/our-story">Read Our Story</TextLink>
          )}
        </div>
        <div className="impact-layout">
          <div className="funding-fact">
            <span className="funding-number">$8,000+</span>
            <h3>Funds Raised</h3>
            <p>
              Raised through a student-organized badminton fundraiser to help
              start this program.
            </p>
          </div>
          <dl className="progress-list">
            {["Workshops", "Students Reached", "Community Partners"].map(
              (label) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>Updating Soon</dd>
                </div>
              ),
            )}
          </dl>
        </div>
        <p className="impact-note">
          We’ll update these numbers as workshops are completed.
        </p>
      </div>
    </section>
  );
}
