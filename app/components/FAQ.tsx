"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import styles from "./FAQ.module.css";
import { useLocale } from "./useLocale";

export default function FAQ() {
  const { isIndonesian } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = isIndonesian
    ? [
        {
          question: "Apakah karya anak dan memori keluarga saya benar-benar privat?",
          answer:
            "Ya. Memorie dirancang privacy-first. Data utama tersimpan di perangkatmu, dan kamu yang menentukan kapan melakukan backup serta ke mana backup disimpan.",
        },
        {
          question: "Bagaimana kalau saya ganti atau kehilangan iPhone?",
          answer:
            "Dengan fitur backup dan restore, kamu bisa memindahkan arsip ke perangkat baru. Kami menyarankan backup rutin agar memori tetap aman untuk jangka panjang.",
        },
        {
          question: "Apakah Essential benar-benar sekali bayar?",
          answer:
            "Ya, Essential adalah one-time purchase. Tidak ada biaya langganan bulanan. Detail harga final mengikuti informasi resmi di App Store.",
        },
        {
          question: "Bisa coba dulu sebelum upgrade?",
          answer:
            "Bisa. Paket Free sudah cukup untuk mulai menyimpan kenangan dan mencoba alur Capture, Curate, Revisit sebelum kamu memutuskan upgrade.",
        },
        {
          question: "Memorie cocok untuk siapa?",
          answer:
            "Memorie dibuat untuk orang tua yang ingin menjaga karya buah hati, serta keluarga yang ingin tetap terhubung dengan memori penting mereka.",
        },
        {
          question: "Apakah Memorie mendukung pengalaman VR dan library yang terus tumbuh?",
          answer:
            "Arah produk Memorie adalah menuju pengalaman revisit yang makin imersif, termasuk skenario VR-ready, dengan struktur library yang bisa terus bertumbuh seiring perjalanan hidupmu.",
        },
      ]
    : [
        {
          question: "Is my child's artwork and family archive truly private?",
          answer:
            "Yes. Memorie is privacy-first by design. Your core archive stays on your device, and you choose when and where backups are created.",
        },
        {
          question: "What if I replace or lose my iPhone?",
          answer:
            "With backup and restore, you can move your archive to a new device. We recommend regular backups for long-term peace of mind.",
        },
        {
          question: "Is Essential really a one-time purchase?",
          answer:
            "Yes. Essential is a one-time purchase with no monthly subscription. Final pricing follows the App Store listing.",
        },
        {
          question: "Can I try Memorie before upgrading?",
          answer:
            "Absolutely. The free plan is designed so you can experience Capture, Curate, and Revisit before deciding to upgrade.",
        },
        {
          question: "Who is Memorie for?",
          answer:
            "Memorie is built for parents preserving their children's creations and for families who want to keep meaningful stories accessible for years.",
        },
        {
          question: "Will Memorie support immersive and VR-ready memory experiences?",
          answer:
            "The long-term product direction includes richer revisit experiences, including VR-ready scenarios, built on a memory library that keeps growing with your life.",
        },
      ];

  const title = isIndonesian ? "Masih ragu?" : "Still unsure?";
  const accent = isIndonesian
    ? "Kami jawab yang paling penting."
    : "Here are the answers parents ask most.";

  return (
    <SectionWrapper id="faq" background="secondary">
      <div className={styles.header}>
        <h2 className={styles.heading}>
          {title}{" "}
          <span className={styles.accent}>{accent}</span>
        </h2>
      </div>

      <div className={styles.list}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              openIndex === index ? styles.open : ""
            }`}
          >
            <button
              className={styles.question}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              aria-expanded={openIndex === index}
              id={`faq-${index}`}
            >
              <span>{faq.question}</span>
              <svg
                className={styles.chevron}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={styles.answer}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
