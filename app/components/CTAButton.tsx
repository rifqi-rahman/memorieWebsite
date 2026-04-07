import styles from "./CTAButton.module.css";

type CTAVariant = "primary" | "secondary" | "ghost";
type CTASize = "small" | "medium" | "large";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: CTAVariant;
  size?: CTASize;
  href?: string;
  onClick?: () => void;
  id?: string;
  className?: string;
  ariaLabel?: string;
}

export default function CTAButton({
  children,
  variant = "primary",
  size = "medium",
  href,
  onClick,
  id,
  className = "",
  ariaLabel,
}: CTAButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    size !== "medium" ? styles[size] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        id={id}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      id={id}
      aria-label={ariaLabel}
      type="button"
    >
      {children}
    </button>
  );
}
