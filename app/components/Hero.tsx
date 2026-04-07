"use client";

import { useMemo, useEffect, useRef, type CSSProperties } from "react";
import { gsap } from "gsap";
import styles from "./Hero.module.css";
import CTAButton from "./CTAButton";
import { useLocale } from "./useLocale";

const screens = [
  {
    key: "capture",
    titleEn: "Capture in seconds",
    titleId: "Capture dalam detik",
    captionEn: "Snap artwork and store context instantly.",
    captionId: "Foto karya anak lalu simpan konteksnya seketika.",
  },
  {
    key: "walls",
    titleEn: "Memory walls",
    titleId: "Memory wall",
    captionEn: "Organize by child, year, and milestone.",
    captionId: "Susun per anak, tahun, dan momen penting.",
  },
  {
    key: "timeline",
    titleEn: "Living timeline",
    titleId: "Timeline hidup",
    captionEn: "Revisit your family story with one scroll.",
    captionId: "Lihat ulang perjalanan keluarga dengan satu scroll.",
  },
  {
    key: "backup",
    titleEn: "Safe backup",
    titleId: "Backup aman",
    captionEn: "Restore your collection anytime you need.",
    captionId: "Restore koleksi kapan pun saat dibutuhkan.",
  },
  {
    key: "files",
    titleEn: "File-like control",
    titleId: "Kontrol seperti file",
    captionEn: "Sort, tag, and manage memories your way.",
    captionId: "Urutkan, beri tag, dan kelola sesukamu.",
  },
  {
    key: "vr",
    titleEn: "VR-ready memories",
    titleId: "Memori siap VR",
    captionEn: "Built for immersive revisit experiences.",
    captionId: "Dibangun untuk pengalaman revisit yang imersif.",
  },
];

export default function Hero() {
  const { isIndonesian } = useLocale();
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const loopedScreens = useMemo(() => [...screens, ...screens], []);
  const centerIndex = (screens.length - 1) / 2;
  const screenToneClasses = [
    styles.screenOne,
    styles.screenTwo,
    styles.screenThree,
    styles.screenFour,
    styles.screenFive,
    styles.screenSix,
  ];

  const t = isIndonesian
    ? {
        badge: "Private Memory Library",
        headline: "Satu rumah tenang untuk semua cerita keluargamu.",
        subtext:
          "Untuk orang tua yang ingin menjaga karya anak, dan keluarga yang ingin kembali ke momen penting kapan pun.",
        ctaPrimary: "Mulai Gratis",
        ctaSecondary: "Lihat Fitur",
      }
    : {
        badge: "Private Memory Library",
        headline: "One calm home for every meaningful family memory.",
        subtext:
          "Built for parents preserving childhood keepsakes and families who want to revisit stories for years to come.",
        ctaPrimary: "Start Free",
        ctaSecondary: "Explore Features",
      };

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(`.${styles.badge}`, { y: 14, autoAlpha: 0, duration: 0.6 })
        .from(`.${styles.headline}`, { y: 26, autoAlpha: 0, duration: 0.85 }, "<0.1")
        .from(`.${styles.subtext}`, { y: 16, autoAlpha: 0, duration: 0.7 }, "<0.08")
        .from(`.${styles.ctas}`, { y: 12, autoAlpha: 0, duration: 0.6 }, "<0.1");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} id="hero" ref={heroRef}>
      <div className={styles.carouselLayer} aria-hidden="true">
        <div className={styles.carouselTrack}>
          {loopedScreens.map((screen, index) => {
            const itemIndex = index % screens.length;
            const distanceFromCenter = Math.abs(itemIndex - centerIndex);
            const normalizedDistance = distanceFromCenter / centerIndex;
            const cardStyle = {
              "--mockup-scale": (1 + normalizedDistance * 0.16).toFixed(3),
              "--mockup-y": `${46 - normalizedDistance * 58}px`,
              "--mockup-rotate": `${(itemIndex - centerIndex) * 3.6}deg`,
            } as CSSProperties;

            return (
            <article className={styles.phoneCard} key={`${screen.key}-${index}`} style={cardStyle}>
              <div className={styles.notch} />
              <div
                className={`${styles.screen} ${screenToneClasses[index % screenToneClasses.length]}`}
              >
                <div className={styles.screenTopBar}>
                  <span>Memorie</span>
                  <span>{screen.key.toUpperCase()}</span>
                </div>
                <div className={styles.screenMedia}>
                  {/* Placeholder screenshot carousel: ganti block ini dengan gambar asli iPhone screen kamu secara manual. */}
                  <span>{isIndonesian ? "Placeholder Screenshot" : "Screenshot Placeholder"}</span>
                </div>
                <div className={styles.screenCaption}>
                  <h3>{isIndonesian ? screen.titleId : screen.titleEn}</h3>
                  <p>{isIndonesian ? screen.captionId : screen.captionEn}</p>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>

      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content} ref={contentRef}>
          <p className={styles.badge}>{t.badge}</p>
          <h1 className={styles.headline}>{t.headline}</h1>
          <p className={styles.subtext}>{t.subtext}</p>

          <div className={styles.ctas}>
            <CTAButton
              href="#plan"
              variant="primary"
              size="large"
              id="hero-cta-primary"
              ariaLabel="Mulai menyimpan kenangan dengan Memorie"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              {t.ctaPrimary}
            </CTAButton>
            <CTAButton
              href="#feature-vr"
              variant="secondary"
              size="large"
              id="hero-cta-secondary"
            >
              {t.ctaSecondary}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
