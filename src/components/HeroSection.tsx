import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-restaurant.jpg';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flexCenter"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-6 pt-20">
        <div className="flexColumn items-center gap-6 animateFadeInUp">
          {/* Decorative Element */}
          <div className="flexCenter gap-4 mb-4">
            <div className="w-16 h-px bg-secondary" />
            <span className="text-secondary font-display text-lg">Est. 1985</span>
            <div className="w-16 h-px bg-secondary" />
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl">
            {t.hero.welcome}
          </h1>

          {/* Decorative Divider */}
          <div className="brazilDividerWide my-4" />

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Button */}
          <a
            href="#cardapio"
            className="mt-8 px-8 py-4 bg-secondary text-secondary-foreground font-semibold text-lg rounded-lg hoverLift animatePulseGold transition-all"
          >
            {t.hero.cta}
          </a>

          {/* Scroll Indicator */}
          <a
            href="#historia"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flexColumn items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-24 left-6 w-20 h-20 border-t-2 border-l-2 border-secondary/30" />
      <div className="absolute top-24 right-6 w-20 h-20 border-t-2 border-r-2 border-secondary/30" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-secondary/30" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-secondary/30" />
    </section>
  );
};

export default HeroSection;
