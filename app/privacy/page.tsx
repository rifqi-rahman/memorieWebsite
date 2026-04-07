import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Memorie. Learn how we protect your data and keep your memories private and secure.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.breadcrumb}>
          <Link href="/">← Back to Home</Link>
        </nav>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.date}>Effective Date: March 31, 2026</p>
      </header>

      <main className={styles.content}>
        <article className={styles.article}>
          <p className={styles.intro}>
            Memorie is designed with a privacy-first approach. Your memories
            deserve the highest level of care and protection.
          </p>

          <section>
            <h2>1. Data We Process</h2>
            <p>
              Memorie processes content you create or import, such as wall
              images, artifact images, and metadata needed for app
              functionality.
            </p>
          </section>

          <section>
            <h2>2. Data Storage</h2>
            <p>
              Your core collection data is stored on your device by default. We
              do not upload your personal memories to any external servers.
            </p>
          </section>

          <section>
            <h2>3. Permissions</h2>
            <p>
              Memorie requests camera and photo library access only to support
              capture and import features. These permissions are requested only
              when you actively use these features.
            </p>
          </section>

          <section>
            <h2>4. Purchases</h2>
            <p>
              If you make in-app purchases, payment and transaction handling are
              processed by Apple under Apple&apos;s policies. We do not collect or
              store payment information.
            </p>
          </section>

          <section>
            <h2>5. Backups</h2>
            <p>
              When you export backups, you control where backup files are saved
              and how they are managed. Backup files remain entirely under your
              control.
            </p>
          </section>

          <section>
            <h2>6. Data Sharing</h2>
            <p>
              Memorie does not sell your personal memory content. Your
              children&apos;s artwork, letters, and creations are never shared with
              third parties.
            </p>
          </section>

          <section>
            <h2>7. Security</h2>
            <p>
              We implement reasonable measures to protect app data, but no
              method is 100 percent risk-free. We recommend maintaining regular
              backups of your important memories.
            </p>
          </section>

          <section>
            <h2>8. Your Controls</h2>
            <p>
              You can manage your collection, backups, and app permissions from
              your device settings and in-app flows. You are always in control
              of your data.
            </p>
          </section>

          <section>
            <h2>9. Policy Updates</h2>
            <p>
              We may update this Privacy Policy as the product evolves. Updated
              versions will be posted on this page with a new effective date.
            </p>
          </section>

          <section>
            <h2>10. Contact</h2>
            <p>
              For privacy questions, contact:{" "}
              <a href="mailto:rifqi.efforts@gmail.com">rifqi.efforts@gmail.com</a>
            </p>
          </section>
        </article>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Link href="/">Home</Link>
          <Link href="/terms/">Terms & Conditions</Link>
          <Link href="/support/">Support</Link>
        </div>
      </footer>
    </>
  );
}
