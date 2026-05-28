const SIGNALS = [
  { label: '14-day returns' },
  { label: 'Made in Portugal' },
  { label: 'Secure checkout' },
] as const;

export default function ProductTrustSignals() {
  return (
    <div className="flex flex-wrap gap-5 pt-1">
      {SIGNALS.map(({ label }) => (
        <div key={label} className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-(--magenta-dim)" />
          <span className="font-cinzel text-[9px] uppercase tracking-[0.24em] text-(--text-muted)">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
