"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import CTAButton from "./CTAButton";
import DarkModeToggle from "./DarkModeToggle";
import { useLocale } from "./useLocale";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isIndonesian, locale, setLocalePreference } = useLocale();

  const t = isIndonesian
    ? {
        how: "Cara Kerja",
        features: "Fitur",
        trust: "Privasi",
        plan: "Paket",
        support: "Support",
        startFree: "Mulai Gratis",
      }
    : {
        how: "How It Works",
        features: "Features",
        trust: "Privacy",
        plan: "Pricing",
        support: "Support",
        startFree: "Start Free",
      };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`} id="navbar">
      <nav className={styles.inner} aria-label="Main navigation">
        <Link href="/" className={styles.logo} aria-label="Memorie Home">
          <Image
            src="/AppIcon.png"
            alt="Memorie logo"
            width={36}
            height={36}
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>Memorie</span>
        </Link>

        <ul className={`${styles.navLinks} ${mobileOpen ? styles.open : ""}`}>
          <li><a href="#solution" onClick={() => setMobileOpen(false)}>{t.how}</a></li>
          <li><a href="#feature-vr" onClick={() => setMobileOpen(false)}>{t.features}</a></li>
          <li><a href="#trust" onClick={() => setMobileOpen(false)}>{t.trust}</a></li>
          <li><a href="#plan" onClick={() => setMobileOpen(false)}>{t.plan}</a></li>
          <li><Link href="/support/" onClick={() => setMobileOpen(false)}>{t.support}</Link></li>
          <li className={styles.mobileOnly}>
            <CTAButton href="#plan" variant="primary" size="small" id="nav-cta-mobile">
              {t.startFree}
            </CTAButton>
          </li>
        </ul>

        <div className={styles.navActions}>
          <button
            className={styles.localeBtn}
            type="button"
            onClick={() => setLocalePreference(locale === "en" ? "id" : "en")}
            aria-label={isIndonesian ? "Switch language to English" : "Switch language to Indonesian"}
          >
            {locale === "en" ? "EN" : "ID"}
          </button>
          <DarkModeToggle />
          <CTAButton
            href="#plan"
            variant="primary"
            size="small"
            id="nav-cta-desktop"
            className={styles.desktopOnly}
          >
            {t.startFree}
          </CTAButton>
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            id="nav-hamburger"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className={styles.backdrop} onClick={() => setMobileOpen(false)} />
      )}
    </header>
  );
}
