"use client";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  children: React.ReactNode;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  dark = false,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-16 px-4 md:px-8 ${dark ? "bg-pine-800 text-cream" : "bg-cream"}`}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-2 ${
            dark ? "text-amber-400" : "text-pine-700"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg mb-8 ${dark ? "text-cream/70" : "text-charcoal-light"}`}>
            {subtitle}
          </p>
        )}
        {!subtitle && <div className="mb-8" />}
        {children}
      </div>
    </section>
  );
}
