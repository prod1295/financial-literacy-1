import Link from "next/link";
import { WorkshopExample } from "@/components/workshop-example";
import { Arrow, HostInvitation, TextLink } from "@/components/ui";
import { Impact } from "@/components/impact";
import { topics } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow location-label">
              <span aria-hidden="true" />
              Student-led · Dublin, California
            </p>
            <h1>
              Financial Literacy
              <br />
              <em>for Kids</em>
            </h1>
            <p className="hero-subtitle">
              Free financial literacy workshops for elementary school students
              in the Dublin area.
            </p>
            <p className="hero-description">
              We teach students the basics of saving, budgeting, needs vs.
              wants, and responsible spending through simple examples and
              interactive activities.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/workshops">
                Learn About Our Workshops
                <Arrow />
              </Link>
              <Link className="button button-secondary" href="/partner-with-us">
                Partner With Us
              </Link>
            </div>
            <p className="hero-footnote">
              Designed mainly for grades 3–5. Always free.
            </p>
          </div>
          <WorkshopExample />
        </div>
      </section>
      <section className="section what-we-do">
        <div className="container editorial-split">
          <div>
            <p className="eyebrow">Small lessons, practical skills</p>
            <h2>What We Do</h2>
          </div>
          <div>
            <p className="section-lead">
              We introduce kids to money through questions they can understand
              and choices they can talk through.
            </p>
            <p>
              Our free, 30–45 minute workshops use everyday examples and
              interactive activities. We’re planning sessions for elementary
              schools, after-school programs, libraries, and community centers.
            </p>
            <TextLink href="/about">Get to know the program</TextLink>
          </div>
        </div>
      </section>
      <section className="status-section">
        <div className="container status-inner">
          <div className="status-heading">
            <span className="status-dot" aria-hidden="true" />
            <h2>What We’re Working On</h2>
          </div>
          <p>
            We’re currently working with local after-school programs in Dublin
            to bring free financial literacy workshops to elementary students.
          </p>
        </div>
      </section>
      <section className="section home-topics">
        <div className="container">
          <div className="section-top">
            <div>
              <p className="eyebrow">The starting points</p>
              <h2>What We Teach</h2>
            </div>
            <TextLink href="/what-we-teach">Explore all six topics</TextLink>
          </div>
          <div className="topic-preview">
            {topics.slice(0, 3).map((topic, index) => (
              <div key={topic.title}>
                <span className="topic-number">0{index + 1}</span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Impact showStoryLink />
      <HostInvitation />
    </>
  );
}
