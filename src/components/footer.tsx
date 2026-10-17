import Link from "next/link";
import { Brand } from "@/components/header";
import { EmailLink } from "@/components/ui";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Brand footer />
            <p>{site.location}</p>
          </div>
          <div className="footer-contact">
            <span className="eyebrow">Get in touch</span>
            <EmailLink />
            <Link href="/partner-with-us">Workshop inquiries</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>A student-led program in Dublin, California.</p>
        </div>
      </div>
    </footer>
  );
}
