"use client";

import SectionWrapper from "./SectionWrapper";
import styles from "./Trust.module.css";
import { useLocale } from "./useLocale";

const trustIcons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 7V5a4 4 0 0 0-8 0v2"/>
      </svg>
    ),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
];

export default function Trust() {
  const { isIndonesian } = useLocale();

  const t = isIndonesian
    ? {
        heading: "Privasi default.",
        accent: "Kontrol tetap milikmu.",
        subtitle:
          "Dirancang supaya kenangan keluarga aman, sederhana, dan selalu di tanganmu.",
        points: [
          {
            title: "On Your Device",
            description: "Arsip utama disimpan lokal di perangkatmu.",
          },
          {
            title: "No Account Needed",
            description: "Mulai cepat tanpa alur daftar yang panjang.",
          },
          {
            title: "Full Backups",
            description: "Ekspor kapan pun ke penyimpanan yang kamu pilih.",
          },
          {
            title: "Camera on Your Terms",
            description: "Kamera aktif hanya saat kamu memilih capture.",
          },
        ],
      }
    : {
        heading: "Private by default.",
        accent: "Always in your control.",
        subtitle:
          "Built so your family memories stay protected, simple to manage, and fully yours.",
        points: [
          {
            title: "On Your Device",
            description: "Your core archive stays local on your device.",
          },
          {
            title: "No Account Needed",
            description: "Start fast with no account gatekeeping.",
          },
          {
            title: "Full Backups",
            description: "Export anytime to storage you trust.",
          },
          {
            title: "Camera on Your Terms",
            description: "Camera access is used only when you capture.",
          },
        ],
      };

  return (
    <SectionWrapper id="trust" background="card">
      <div className={styles.header}>
        <h2 className={styles.heading}>
          {t.heading}{" "}
          <span className={styles.accent}>{t.accent}</span>
        </h2>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </div>

      <div className={styles.grid}>
        {trustIcons.map((iconPack, i) => (
          <div
            key={i}
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={120 + i * 80}
          >
            <div className={styles.cardInset}>
              <div className={styles.iconWrap}>{iconPack.icon}</div>
              <h3 className={styles.cardTitle}>{t.points[i].title}</h3>
              <p className={styles.cardDesc}>{t.points[i].description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
