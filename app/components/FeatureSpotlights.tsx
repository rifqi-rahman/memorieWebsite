"use client";

import CTAButton from "./CTAButton";
import styles from "./FeatureSpotlights.module.css";
import { useLocale } from "./useLocale";

const featureIcons = [
  (
    <svg key="vr" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h4l3 8 4-16 3 8h6" />
    </svg>
  ),
  (
    <svg key="backup" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7" />
      <polyline points="9 10 12 13 15 10" />
      <line x1="12" y1="13" x2="12" y2="3" />
    </svg>
  ),
  (
    <svg key="library" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="7" height="7" rx="1" />
      <rect x="14" y="4" width="7" height="7" rx="1" />
      <rect x="3" y="13" width="7" height="7" rx="1" />
      <path d="M14 14h7" />
      <path d="M14 18h5" />
    </svg>
  ),
];

export default function FeatureSpotlights() {
  const { isIndonesian } = useLocale();

  const t = isIndonesian
    ? {
        features: [
          {
            id: "feature-vr",
            eyebrow: "Feature 01",
            title: "Lihat memori di dunia VR.",
            subtitle: "Mulai dari koleksi hari ini, menuju pengalaman revisit yang imersif besok.",
            description:
              "Untuk keluarga yang ingin menghidupkan lagi momen spesial, Memorie dirancang dengan visi VR-ready agar cerita yang kamu simpan sekarang bisa dinikmati lebih dalam di masa depan.",
            bullets: [
              "Untuk orang tua: rayakan milestone anak dengan cara yang lebih hidup.",
              "Untuk generasi dewasa: kembali ke kenangan masa kecil bersama keluarga.",
              "Roadmap imersif dibangun dari library privat milikmu.",
            ],
          },
          {
            id: "feature-backup",
            eyebrow: "Feature 02",
            title: "Backup aman, restore kapan pun.",
            subtitle: "Koleksi tetap terasa personal, tapi tetap siap dipulihkan kapan saja.",
            description:
              "Kamu tetap pegang kendali penuh atas arsip kenangan keluarga. Saat ganti device atau butuh migrasi, proses restore dibuat sederhana dan cepat.",
            bullets: [
              "Archive utama tetap di perangkatmu.",
              "Export backup ke penyimpanan yang kamu percaya.",
              "Restore koleksi tanpa mengulang dari nol.",
            ],
          },
          {
            id: "feature-library",
            eyebrow: "Feature 03",
            title: "Kelola koleksi layaknya file management milikmu.",
            subtitle: "Rapi, fleksibel, dan mudah dicari saat kamu butuh.",
            description:
              "Buat keluarga yang menyimpan ratusan momen, Memorie memberi alur organisasi seperti mengelola file pribadi: jelas, terstruktur, dan mudah dipahami siapa pun di rumah.",
            bullets: [
              "Susun berdasarkan anak, tahun, tema, atau momen.",
              "Tag dan kelompokkan artefak seperti folder favorit.",
              "Pencarian cepat untuk menemukan satu kenangan spesifik.",
            ],
          },
        ],
        cta: "Lihat Paket",
      }
    : {
        features: [
          {
            id: "feature-vr",
            eyebrow: "Feature 01",
            title: "Revisit memories in a VR world.",
            subtitle: "Start with today's archive, evolve into immersive revisits tomorrow.",
            description:
              "For families who want to feel meaningful moments again, Memorie is designed with a VR-ready vision so the stories you save now can become richer revisit experiences later.",
            bullets: [
              "For parents: relive your child's milestones with more presence.",
              "For grown children: step back into childhood memories with family.",
              "Future immersive experiences grow from your private library.",
            ],
          },
          {
            id: "feature-backup",
            eyebrow: "Feature 02",
            title: "Secure backup, restore anytime.",
            subtitle: "Your archive stays personal while always ready to recover.",
            description:
              "You stay in full control of your family archive. When you switch devices or need recovery, restore is built to be simple and dependable.",
            bullets: [
              "Core archive stays on your device.",
              "Export backups to storage you trust.",
              "Restore your collection without starting over.",
            ],
          },
          {
            id: "feature-library",
            eyebrow: "Feature 03",
            title: "Manage your collection like your own file system.",
            subtitle: "Organized, flexible, and easy to find when it matters.",
            description:
              "For families preserving hundreds of moments, Memorie offers file-like organization: clear structure, practical control, and easy retrieval for everyone at home.",
            bullets: [
              "Organize by child, year, theme, or milestone.",
              "Tag and group artifacts like favorite folders.",
              "Use fast search to find one specific memory quickly.",
            ],
          },
        ],
        cta: "See Pricing",
      };

  return (
    <>
      {t.features.map((feature, index) => {
        const placeholderClass =
          index === 0
            ? styles.placeholderVr
            : index === 1
              ? styles.placeholderBackup
              : styles.placeholderLibrary;
        const sideClass = index % 2 === 0 ? styles.overlayLeft : styles.overlayRight;

        return (
          <section
            key={feature.id}
            id={feature.id}
            className={`${styles.featureSection} ${sideClass}`}
            data-aos="fade-up"
          >
            {/* Placeholder image section: ganti class background di CSS dengan screenshot feature asli secara manual. */}
            <div className={`${styles.placeholder} ${placeholderClass}`} aria-hidden="true" />
            <div className={styles.overlay} aria-hidden="true" />

            <div className={`${styles.inner} ${index % 2 === 1 ? styles.alignRight : ""}`}>
              <article className={styles.content}>
                <div className={styles.iconWrap}>{featureIcons[index]}</div>
                <p className={styles.eyebrow}>{feature.eyebrow}</p>
                <h2 className={styles.title}>{feature.title}</h2>
                <p className={styles.subtitle}>{feature.subtitle}</p>
                <p className={styles.description}>{feature.description}</p>
                <ul className={styles.bullets}>
                  {feature.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <CTAButton href="#plan" variant="primary" size="small" id={`${feature.id}-cta`}>
                  {t.cta}
                </CTAButton>
              </article>
            </div>
          </section>
        );
      })}
    </>
  );
}
