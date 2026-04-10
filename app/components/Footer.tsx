"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import CTAButton from "./CTAButton";
import { useLocale } from "./useLocale";

export default function Footer() {
  const { isIndonesian } = useLocale();
  const discussionsUrl = "https://github.com/rifqi-rahman/memorieWebsite/discussions";

  const t = isIndonesian
    ? {
        tagline: "Jaga kisah mereka tetap hidup.",
        cta: "Mulai Menyimpan Kenangan",
        product: "Produk",
        how: "Cara Kerja",
      features: "Fitur",
        privacy: "Privasi",
        plan: "Paket",
        legal: "Legal",
        help: "Bantuan",
        crafted: "Dibuat dengan hangat untuk cerita keluarga",
      }
    : {
        tagline: "Keep their stories alive.",
        cta: "Start Preserving Memories",
        product: "Product",
        how: "How It Works",
        features: "Features",
        privacy: "Privacy",
        plan: "Pricing",
        legal: "Legal",
        help: "Help",
        crafted: "Crafted with care for family stories",
      };

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image
                src="/AppIcon.png"
                alt="Memorie"
                width={44}
                height={44}
                className={styles.logoIcon}
              />
              <span className={styles.logoText}>Memorie</span>
            </div>
            <p className={styles.tagline}>{t.tagline}</p>
            <CTAButton
              href="#"
              variant="primary"
              size="small"
              id="footer-cta"
              ariaLabel="Download Memorie from App Store"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              {t.cta}
            </CTAButton>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{t.product}</h4>
              <a href="#solution">{t.how}</a>
              <a href="#feature-vr">{t.features}</a>
              <a href="#trust">{t.privacy}</a>
              <a href="#plan">{t.plan}</a>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{t.legal}</h4>
              <Link href="/terms/">Terms of Service</Link>
              <Link href="/privacy/">Privacy Policy</Link>
            </div>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{t.help}</h4>
              <a href={discussionsUrl} target="_blank" rel="noopener noreferrer">Support / Q&A</a>
              <Link href="/support/">Support Page</Link>
              <a href="mailto:rifqi.efforts@gmail.com">rifqi.efforts@gmail.com</a>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Memorie. All rights reserved.
          </p>
          <p className={styles.madeWith}>{t.crafted}</p>
        </div>
      </div>
    </footer>
  );
}
