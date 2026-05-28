'use client';

import { useState } from 'react';

interface AccordionItem {
  label: string;
  content: React.ReactNode;
}

function AccordionRow({ label, content }: AccordionItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[oklch(1_0_0/0.08)]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          flex
          w-full
          items-center
          justify-between
          py-4
          text-left
          cursor-pointer
          group
        "
      >
        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-(--text)
            font-cinzel
            transition-colors
            duration-200
            group-hover:text-(--magenta-bright)
          "
        >
          {label}
        </span>
        <span
          className="
            text-[18px]
            font-light
            text-(--text-muted)
            transition-transform
            duration-300
            leading-none
          "
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: open ? '400px' : '0px' }}
      >
        <div className="pb-5 text-[14px] leading-[1.75] text-(--text-muted) font-cormorant">
          {content}
        </div>
      </div>
    </div>
  );
}

interface ProductAccordionProps {
  description: string;
  details: string[];
}

export default function ProductAccordion({ description, details }: ProductAccordionProps) {
  return (
    <div className="border-b border-[oklch(1_0_0/0.08)]">
      <AccordionRow label="Description" content={<p>{description}</p>} />

      <AccordionRow
        label="Details & Materials"
        content={
          <ul className="space-y-1.5">
            {details.map((d) => (
              <li key={d} className="flex items-start gap-2">
                <span className="mt-[7px] size-1 shrink-0 rounded-full bg-(--magenta-dim)" />
                {d}
              </li>
            ))}
          </ul>
        }
      />

      <AccordionRow
        label="Shipping & Returns"
        content={
          <div className="space-y-2">
            <p>Free standard shipping on all orders over 800 MDL.</p>
            <p>Express delivery available at checkout.</p>
            <p>Returns accepted within 14 days of delivery — unworn, tags attached.</p>
          </div>
        }
      />
    </div>
  );
}
