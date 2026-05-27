'use client';

import Button from "@/components/ui/Button";

const NewsletterSection = () => {
  return (
    <section
      className="
        border-t
        border-[oklch(0.16_0.05_310)]
        bg-[oklch(0.085_0.026_308)]
        px-6
        py-20
        text-center
        md:px-15
      "
    >
      <h3
        className="
          mb-3
          text-[clamp(20px,2.8vw,36px)]
          font-bold
          tracking-[0.08em]
          text-(--text)
          font-cinzel-decorative
        "
      >
        Join the Congregation
      </h3>

      <p
        className="
          mb-10
          text-[18px]
          font-light
          italic
          tracking-[0.04em]
          text-(--text-muted)
          font-cormorant
        "
      >
        Early access. Exclusive drops. Sacred discounts.
      </p>

      <form
        className="
          mx-auto
          flex
          max-w-115
          flex-col
          md:flex-row
        "
      >
        <input
          type="email"
          placeholder="your@email.com"
          className="
            flex-1
            border
            border-b-0
            border-[oklch(0.18_0.055_310)]
            bg-[oklch(0.06_0.03_305)]
            px-5
            py-3.5
            text-[15px]
            italic
            text-(--text)
            outline-none
            placeholder:text-(--text-muted)
            md:border-b
            md:border-r-0
            font-cormorant
          "
        />

        <Button
          type="submit"
          className="
            px-7
            py-3.5
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-(--text)
            transition-all
            font-cinzel
          "
          filled
        >
          Subscribe
        </Button>

      </form>
    </section>
  );
}

export default NewsletterSection;