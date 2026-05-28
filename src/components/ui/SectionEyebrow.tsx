interface SectionEyebrowProps {
  label: string;
}

export default function SectionEyebrow({ label }: SectionEyebrowProps) {
  return (
    <div className="flex items-center justify-center gap-4.5 text-[10px] font-semibold uppercase tracking-[0.42em] text-(--magenta) font-cinzel">
      <span className="h-px w-8 bg-(--magenta-dim)" />
      <span>{label}</span>
      <span className="h-px w-8 bg-(--magenta-dim)" />
    </div>
  );
}
