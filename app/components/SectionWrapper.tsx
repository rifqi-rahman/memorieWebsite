import styles from "./SectionWrapper.module.css";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "primary" | "secondary" | "card";
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  background = "primary",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[background]} ${className}`}
      data-aos="fade-up"
    >
      <div className={styles.container}>{children}</div>
    </section>
  );
}
