import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Memorie. Find answers to common questions about capturing artwork, backups, purchases, and more.",
};

export default function SupportPage() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.breadcrumb}>
          <Link href="/">← Back to Home</Link>
        </nav>
        <h1 className={styles.title}>Support</h1>
        <p className={styles.date}>We&apos;re here to help you.</p>
      </header>

      <main className={styles.content}>
        <article className={styles.article}>
          <p className={styles.intro}>
            Need help with Memorie? We&apos;re here to support you in preserving
            your family&apos;s most precious memories.
          </p>

          <section>
            <h2>Common Topics</h2>
            <div className={styles.topicGrid}>
              <div className={styles.topicCard}>
                <h3>📸 Capture & Curation</h3>
                <p>
                  Learn how to photograph artwork, organize walls, and add
                  context to your artifacts.
                </p>
              </div>
              <div className={styles.topicCard}>
                <h3>💎 Plans & Purchases</h3>
                <p>
                  Questions about Memorie Essential, restoring purchases, or
                  understanding your plan.
                </p>
              </div>
              <div className={styles.topicCard}>
                <h3>💾 Backup & Restore</h3>
                <p>
                  How to export your memory archive, create backups, and
                  restore your collection.
                </p>
              </div>
              <div className={styles.topicCard}>
                <h3>🔧 Troubleshooting</h3>
                <p>
                  Fixing visual issues, performance concerns, or unexpected
                  behavior in the app.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>How to Contact Support</h2>
            <p>
              Email us at:{" "}
              <a href="mailto:rifqi.efforts@gmail.com" className={styles.emailLink}>
                rifqi.efforts@gmail.com
              </a>
            </p>
            <div className={styles.includeBox}>
              <h3>Please include:</h3>
              <ul>
                <li>Device model (e.g., iPhone 15)</li>
                <li>iOS version (e.g., iOS 17.4)</li>
                <li>App version (found in Settings)</li>
                <li>Short description of the issue</li>
                <li>Steps to reproduce the problem</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Response Time</h2>
            <p>
              We aim to respond within <strong>2–5 business days</strong>.
              Memorie Essential users receive priority support.
            </p>
          </section>

          <section>
            <h2>Community Support</h2>
            <p>
              For product feedback and open discussion, we also support GitHub
              Discussions as a public support channel.
            </p>
            <p>
              Add your repository discussion link here once enabled.
            </p>
          </section>

          <section className={styles.noteSection}>
            <h2>A Friendly Note</h2>
            <p>
              Please do not include sensitive personal information (passwords,
              financial details) in support emails. We will never ask for this
              information.
            </p>
          </section>
        </article>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Link href="/">Home</Link>
          <Link href="/terms/">Terms & Conditions</Link>
          <Link href="/privacy/">Privacy Policy</Link>
        </div>
      </footer>
    </>
  );
}
