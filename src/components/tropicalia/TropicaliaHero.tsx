import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-tropicalia.jpg';
import logo from '@/assets/tropicalia-logo.png';

const TropicaliaHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const parallaxSpeed = 0.5;
        heroRef.current.style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-[120%]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flexColumn items-center justify-center px-6 text-center">
        {/* Logo */}
        <div className="mb-8 animateFadeInUp opacity-0" style={{ animationDelay: '0.2s' }}>
          <img
            src={logo}
            alt="TROPICÁLIA"
            className="h-16 md:h-24 lg:h-32 w-auto mx-auto"
          />
        </div>

        {/* Tagline */}
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 italic mb-12 animateFadeInUp opacity-0" style={{ animationDelay: '0.4s' }}>
          Sapore brasiliano, cuore aperto.
        </p>

        {/* Main Headline */}
        <h1 className="font-display text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-12 animateFadeInUp opacity-0" style={{ animationDelay: '0.6s' }}>
          Dove il Brasile incontra Torino.<br />
          Calore, musica e sapori autentici in un'atmosfera unica.
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animateFadeInUp opacity-0" style={{ animationDelay: '0.8s' }}>
          <button
            onClick={() => scrollToSection('#menu')}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-full font-body text-sm tracking-widest uppercase transition-all duration-300 hoverLift animatePulseGlow"
          >
            Scopri il Menù
          </button>
          <button
            onClick={() => scrollToSection('#contatti')}
            className="border-2 border-primary-foreground/50 hover:border-accent hover:bg-accent/10 text-primary-foreground px-8 py-4 rounded-full font-body text-sm tracking-widest uppercase transition-all duration-300"
          >
            Prenota Ora
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#chi-siamo')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-accent transition-colors animateFloat"
        >
          <ChevronDown size={40} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
};

export default TropicaliaHero;