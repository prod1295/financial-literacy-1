import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro, HostInvitation, TextLink } from "@/components/ui";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Alex Lam, the Dublin-area high school student behind Financial Literacy for Kids, and learn why he started the program.",
};

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="A student-led program"
        title="About Financial Literacy for Kids"
      >
        <p>
          A simple, practical introduction to money for elementary school
          students.
        </p>
      </PageIntro>
      <section className="section">
        <div className="container about-layout">
          <div className="prose">
            <p>
              Financial Literacy for Kids is a student-led program that
              introduces elementary school students to basic financial concepts
              in a simple and practical way.
            </p>
            <p>
              I started the program because financial literacy is something most
              students do not learn until much later, even though ideas like
              saving, budgeting, and deciding between needs and wants can be
              introduced at a young age.
            </p>
            <p>
              Our workshops focus on real-life examples instead of complicated
              financial terminology. The goal is not to turn kids into finance
              experts. It is to help them become more comfortable thinking about
              money and making responsible choices.
            </p>
            <div className="byline">
              <span className="signature">Alex Lam</span>
              <span>Founder · High school student in the Dublin area</span>
            </div>
            <TextLink href="/our-story">How the program started</TextLink>
          </div>
          <aside className="founder-aside">
            {photos.founder ? (
              <Image
                src={photos.founder.src}
                alt={photos.founder.alt}
                width={600}
                height={750}
                className="founder-photo"
              />
            ) : (
              <div className="founder-placeholder">
                <span className="placeholder-corner" aria-hidden="true" />
                <span>Founder photo</span>
                <small>To be added</small>
              </div>
            )}
            <h2>Alex Lam</h2>
            <p>Founder, Financial Literacy for Kids</p>
            <p>Dublin, California</p>
          </aside>
        </div>
      </section>
      <HostInvitation />
    </>
  );
}
