import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for using Memorie and related experiences.",
};

export default function TermsPage() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.breadcrumb}>
          <Link href="/">← Back to Home</Link>
        </nav>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.date}>Effective Date: March 31, 2026</p>
      </header>

      <main className={styles.content}>
        <article className={styles.article}>
          <p className={styles.intro}>
            Welcome to Memorie. These Terms govern your use of the Memorie app
            and related services. By using Memorie, you agree to these Terms.
          </p>

          <section>
            <h2>Introduction</h2>
            <p>
              Memorie helps people preserve meaningful memories, including family
              keepsakes, children&apos;s creations, and place-based stories that
              matter across years.
            </p>
          </section>

          <section className={styles.calloutSection}>
            <h2>End User License Agreement (EULA)</h2>
            <div className={styles.calloutBox}>
              <p>
                Memorie is licensed to you subject to Apple&apos;s Standard End User
                License Agreement (EULA) for apps distributed through the App
                Store.
              </p>
              <p>
                <strong>Apple Standard EULA: </strong>
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2>Definitions</h2>
            <p>
              <strong>App</strong> means the Memorie mobile application and related
              experiences.
            </p>
            <p>
              <strong>User</strong> means anyone who uses the App.
            </p>
            <p>
              <strong>Content</strong> means photos, artifacts, metadata, notes, and
              other material you create or import.
            </p>
          </section>

          <section>
            <h2>Using the App</h2>
            <h3>1. Eligibility</h3>
            <p>
              You are responsible for using Memorie in compliance with applicable
              laws and regulations.
            </p>

            <h3>2. Your Account and Access</h3>
            <p>
              Some features may require device-level permissions. You are
              responsible for maintaining access to your device and backups.
            </p>

            <h3>3. Acceptable Use</h3>
            <p>
              You agree not to use Memorie for unlawful, abusive, infringing, or
              harmful purposes.
            </p>
          </section>

          <section>
            <h2>Your Content</h2>
            <p>
              You retain ownership of the content you create or import into
              Memorie. You are responsible for ensuring that you have the rights
              to the content you store.
            </p>
          </section>

          <section>
            <h2>Purchases</h2>
            <p>
              Memorie may offer paid features such as Essential (Lifetime).
              Pricing and feature details are shown in-app and may be updated in
              future releases.
            </p>
          </section>

          <section>
            <h2>Backups and Restoration</h2>
            <p>
              Backup and restore tools are provided to help preserve your data.
              You remain responsible for maintaining your own backup practices.
            </p>
          </section>

          <section>
            <h2>Disclaimer</h2>
            <p>
              Memorie is provided on an &quot;as is&quot; and &quot;as available&quot; basis to the
              extent permitted by law.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Memorie is not liable for
              indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of
              Memorie after updates means you accept the revised Terms.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms, contact us at:{" "}
              <a href="mailto:rifqi.efforts@gmail.com">rifqi.efforts@gmail.com</a>
            </p>
          </section>
        </article>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Link href="/">Home</Link>
          <Link href="/privacy/">Privacy Policy</Link>
          <Link href="/support/">Support</Link>
        </div>
      </footer>
    </>
  );
}
