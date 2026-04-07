"use client";

import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";
import styles from "./Solution.module.css";
import { useLocale } from "./useLocale";

const stepIcons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
];

export default function Solution() {
  const { isIndonesian } = useLocale();

  const t = isIndonesian
    ? {
        eyebrow: "Cara kerja",
        heading: "Tiga langkah.",
        accent: "Satu perpustakaan kenangan.",
        subtitle:
          "Tangkap, susun, lalu hidupkan lagi momen penting keluarga tanpa ribet.",
        cta: "Mulai Bangun Library",
      }
    : {
        eyebrow: "How it works",
        heading: "Three moves.",
        accent: "One infinite memory library.",
        subtitle:
          "Capture, organize, and relive the moments your family never wants to lose.",
        cta: "Start Your Library",
      };

  const localizedSteps = isIndonesian
    ? [
        {
          number: "01",
          title: "Capture",
          description: "Scan karya anak dalam hitungan detik.",
        },
        {
          number: "02",
          title: "Curate",
          description: "Susun per anak, tahun, dan momen penting.",
        },
        {
          number: "03",
          title: "Revisit",
          description: "Buka lagi kapan pun dan rasakan ceritanya.",
        },
      ]
    : [
        {
          number: "01",
          title: "Capture",
          description: "Scan each creation in seconds.",
        },
        {
          number: "02",
          title: "Curate",
          description: "Organize by child, year, and milestone.",
        },
        {
          number: "03",
          title: "Revisit",
          description: "Open your timeline and feel it again.",
        },
      ];

  return (
    <SectionWrapper id="solution" background="primary">
      <div className={styles.header}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h2 className={styles.heading}>
          {t.heading}{" "}
          <span className={styles.accent}>{t.accent}</span>
        </h2>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </div>

      <div className={styles.steps}>
        {localizedSteps.map((step, index) => (
          <div
            key={step.number}
            className={styles.step}
            data-aos="fade-up"
            data-aos-delay={120 + index * 90}
          >
            <div className={styles.stepInset}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>{stepIcons[index].icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bottomCta}>
        <CTAButton href="#plan" variant="primary" size="large" id="solution-cta-primary">
          {t.cta}
        </CTAButton>
      </div>
    </SectionWrapper>
  );
}
