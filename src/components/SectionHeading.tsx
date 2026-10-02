export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-rust">{eyebrow}</p>
      )}
      <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-ink-soft leading-relaxed">{description}</p>
      )}
    </div>
  );
}
