'use client';

import CollectionCard from "@/components/cards/CollectionCard";
import SectionEyebrow from '@/components/ui/SectionEyebrow';

const collections = [
  {
    season: 'SS 2026',
    name: 'The Sacred',
    ph: 'editorial shot\nfull look',
    img: '/products/hoodie.png',
  },
  {
    season: 'Limited',
    name: 'Street Psalms',
    ph: 'editorial shot\nstreetwear',
    img: '/products/tshirt.png',
  },
  {
    season: 'Capsule',
    name: 'Nocturne',
    ph: 'editorial shot\ncapsule',
    img: '/products/pants.png',
  },
];

const CollectionsSection = () => {
  return (
    <section
      className="
        bg-[oklch(0.055_0.030_305)]
        px-6
        py-25
        md:px-15
      "
    >
      <div
        className="
          mb-15
          text-center
        "
      >
        <div className="mb-3.5">
          <SectionEyebrow label="Shop By Collection" />
        </div>

        <h2
          className="
            text-[clamp(24px,3.2vw,44px)]
            font-bold
            tracking-[0.08em]
            text-(--text)
            font-cinzel-decorative
          "
        >
          The Collections
        </h2>
      </div>

      <div
        className="
          mx-auto
          grid
          max-w-330
          grid-cols-1
          gap-3
          lg:grid-cols-[1.4fr_1fr_1fr]
        "
      >
        {collections.map((collection) => (
        <CollectionCard
          key={collection.name}
          season={collection.season}
          name={collection.name}
          ph={collection.ph}
          img={collection.img}
        />

        ))}
      </div>
    </section>
  );
}

export default CollectionsSection;