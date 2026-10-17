import Link from "next/link";
import { PageIntro } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <PageIntro eyebrow="Page not found" title="We couldn’t find that page.">
        <p>The link may have changed. You can head back to the home page.</p>
      </PageIntro>
      <div className="container not-found-actions">
        <Link className="button button-primary" href="/">
          Back to Home
        </Link>
      </div>
    </>
  );
}
