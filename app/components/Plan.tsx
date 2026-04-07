"use client";

import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";
import styles from "./Plan.module.css";
import { useLocale } from "./useLocale";

export default function Plan() {
  const { isIndonesian } = useLocale();

  const t = isIndonesian
    ? {
        heading: "Harga sederhana.",
        accent: "Nilai jangka panjang.",
        subtitle: "Mulai gratis, lanjut sekali bayar saat kamu siap.",
        upToWalls: "Hingga 3 wall",
        upToArtifacts: "Hingga 5 artifact per wall",
        freePeriod: "untuk mulai sekarang",
        freeCore: "Capture, curate, revisit",
        memoryTimeline: "Timeline kenangan",
        backupRestore: "Backup & Restore",
        freeCta: "Aku Mulai Gratis",
        essentialPeriod: "sekali bayar",
        oneTimePurchase: "$9.99",
        unlimitedWallsLine: "Wall tanpa batas",
        unlimitedArtifactsLine: "Artifact tanpa batas per wall",
        allUpdates: "Semua update mendatang",
        priority: "Prioritas dukungan via email",
        essentialCta: "Pilih Essential",
        note: "Harga final mengikuti listing App Store. Tidak ada biaya tersembunyi.",
      }
    : {
        heading: "Simple pricing.",
        accent: "Long-term value.",
        subtitle: "Start free, then unlock everything with one lifetime purchase.",
        upToWalls: "Up to 3 walls",
        upToArtifacts: "Up to 5 artifacts per wall",
        freePeriod: "to get started",
        freeCore: "Capture, curate, revisit",
        memoryTimeline: "Memory timeline",
        backupRestore: "Backup & Restore",
        freeCta: "Start Free",
        essentialPeriod: "one-time purchase",
        oneTimePurchase: "$9.99",
        unlimitedWallsLine: "Unlimited walls",
        unlimitedArtifactsLine: "Unlimited artifacts per wall",
        allUpdates: "All future updates",
        priority: "Priority email support",
        essentialCta: "Choose Essential",
        note: "Final price follows the App Store listing. No hidden fees.",
      };

  return (
    <SectionWrapper id="plan" background="primary">
      <div className={styles.header}>
        <h2 className={styles.heading}>
          {t.heading}{" "}
          <span className={styles.accent}>{t.accent}</span>
        </h2>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </div>

      <div className={styles.plans}>
        {/* Free Plan */}
        <div className={styles.card} data-aos="fade-up" data-aos-delay={120}>
          <div className={styles.cardInset}>
            <div className={styles.cardHeader}>
              <h3 className={styles.planName}>Free</h3>
              <p className={styles.planPrice}>
                <span className={styles.priceAmount}>$0</span>
                <span className={styles.pricePeriod}>{t.freePeriod}</span>
              </p>
            </div>
            <ul className={styles.features}>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                {t.upToWalls}
              </li>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                {t.upToArtifacts}
              </li>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                {t.freeCore}
              </li>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                {t.memoryTimeline}
              </li>
              <li className={`${styles.feature} ${styles.featureDisabled}`}>
                <span className={styles.featureIcon}>—</span>
                {t.backupRestore}
              </li>
            </ul>
            <CTAButton href="#" variant="secondary" id="plan-cta-free">
              {t.freeCta}
            </CTAButton>
          </div>
        </div>

        {/* Essential Plan */}
        <div className={`${styles.card} ${styles.cardFeatured}`} data-aos="fade-up" data-aos-delay={210}>
          <div className={styles.badge}>Lifetime</div>
          <div className={styles.cardInset}>
            <div className={styles.cardHeader}>
              <h3 className={styles.planName}>Essential</h3>
              <p className={styles.planPrice}>
                <span className={styles.priceAmount}>{t.oneTimePurchase}</span>
                <span className={styles.pricePeriod}>{t.essentialPeriod}</span>
              </p>
            </div>
            <ul className={styles.features}>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                {t.unlimitedWallsLine}
              </li>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                {t.unlimitedArtifactsLine}
              </li>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                {t.backupRestore}
              </li>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                {t.allUpdates}
              </li>
              <li className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                {t.priority}
              </li>
            </ul>
            <CTAButton href="#" variant="primary" id="plan-cta-essential">
              {t.essentialCta}
            </CTAButton>
          </div>
        </div>
      </div>

      <p className={styles.note}>{t.note}</p>
    </SectionWrapper>
  );
}
