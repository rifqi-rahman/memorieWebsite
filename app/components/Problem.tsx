"use client";

import SectionWrapper from "./SectionWrapper";
import styles from "./Problem.module.css";
import { useLocale } from "./useLocale";

export default function Problem() {
  const { isIndonesian } = useLocale();

  const t = isIndonesian
    ? {
        heading: "Kenangan terus bertambah.",
        accent: "Ruang tidak selalu cukup.",
        bodyA:
          "Saat anakmu memberi gambar dengan senyum bangga, kamu ingin menyimpan semuanya. Banyak orang tua merasakan hal yang sama.",
        bodyB:
          "Tapi saat karya menumpuk, foto tercecer, dan cerita mulai pudar, masalahnya bukan rasa peduli. Masalahnya belum ada sistem yang tenang dan praktis.",
        pivot: "Kalau dibiarkan, yang hilang bukan kertasnya. Yang hilang adalah maknanya.",
        beforeTitle: "Before Memorie",
        beforeText:
          "Keepsakes get scattered across drawers, albums, and chats. Hard to find, hard to revisit, easy to forget.",
        afterTitle: "With Memorie",
        afterText:
          "Every memory is organized, searchable, and ready to revisit anytime, including future immersive experiences.",
      }
    : {
        heading: "Memories keep growing.",
        accent: "Space does not.",
        bodyA:
          "When your child hands you a drawing with a proud smile, you want to keep every piece. Most parents know this feeling deeply.",
        bodyB:
          "But when keepsakes pile up, photos scatter, and stories fade, the issue is not care. The issue is having no calm, practical system.",
        pivot: "If this goes on, you do not just lose paper. You lose meaning.",
        beforeTitle: "Before Memorie",
        beforeText:
          "Keepsakes get scattered across drawers, albums, and chats. Hard to find, hard to revisit, easy to forget.",
        afterTitle: "With Memorie",
        afterText:
          "Every memory is organized, searchable, and ready to revisit anytime, including future immersive experiences.",
      };

  return (
    <SectionWrapper id="problem" background="secondary">
      <div className={styles.content}>
        <h2 className={styles.heading}>
          {t.heading}{" "}
          <span className={styles.accent}>{t.accent}</span>
        </h2>
        <p className={styles.body}>{t.bodyA}</p>
        <p className={styles.body}>
          {t.bodyB}
        </p>
        <p className={styles.pivot}>{t.pivot}</p>
      </div>

      <div className={styles.visual}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 8v13H3V8"/>
              <path d="M1 3h22v5H1z"/>
              <path d="M10 12h4"/>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>{t.beforeTitle}</h3>
          <p className={styles.cardText}>{t.beforeText}</p>
        </div>
        <div className={styles.cardArrow} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>
        <div className={`${styles.card} ${styles.cardSolution}`}>
          <div className={styles.cardIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>{t.afterTitle}</h3>
          <p className={styles.cardText}>{t.afterText}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
