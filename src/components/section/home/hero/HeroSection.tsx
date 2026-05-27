'use client';

import MagentaCorners from "./MagentaCorners";
import Overlay from "./Overlay";
import HeroContent from "./HeroContent";
import HeroBackground from "./HeroBackground";
import SideVigente from "./SideVigente";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        flex
        h-screen
        min-h-155
        w-full
        flex-col
        items-center
        justify-end
        overflow-hidden
      "
    >
      {/* Background */}
      <HeroBackground />

      {/* Overlay Top */}
      <Overlay />

      {/* Side Vignette */}
      <SideVigente />

      {/* Magenta Corners */}
      <MagentaCorners />

      {/* Main Content */}
      <HeroContent />

      {/* Scroll Indicator */}
      <ScrollIndicator /> 
    </section>
  );
}

export default HeroSection