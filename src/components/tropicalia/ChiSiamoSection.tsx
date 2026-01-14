import { useEffect, useRef, useState } from 'react';
import { Leaf, Heart, Music } from 'lucide-react';

const ChiSiamoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Leaf,
      title: 'Ingredienti Freschi',
      description: 'Selezioniamo con cura ogni ingrediente per portare autenticità in ogni piatto.',
    },
    {
      icon: Heart,
      title: 'Fatto con Amore',
      description: 'Ogni ricetta è preparata con la passione e il calore tipici della cultura brasiliana.',
    },
    {
      icon: Music,
      title: 'Musica dal Vivo',
      description: 'Ogni settimana, artisti brasiliani riempiono il locale di ritmi e melodie.',
    },
  ];

  return (
    <section
      id="chi-siamo"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-cream-dark overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-tropical-green/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tropical-orange/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animateFadeInUp' : 'opacity-0'}`}>
          <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-secondary mb-4">
            La Nostra Storia
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Chi Siamo
          </h2>
          <div className="tropicalDividerWide mx-auto mb-8" />
        </div>

        {/* Main Text */}
        <div className={`max-w-3xl mx-auto text-center mb-20 ${isVisible ? 'animateFadeInUp stagger-2' : 'opacity-0'}`}>
          <p className="font-display text-xl md:text-2xl text-foreground/90 italic leading-relaxed mb-6">
            "Tropicália è un viaggio nel cuore del Brasile, tra profumi, suoni e colori che raccontano la nostra cultura."
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Un luogo dove ogni piatto è un sorriso e ogni visita diventa ricordo. 
            Nel cuore di Torino, abbiamo creato uno spazio dove l'autenticità brasiliana 
            incontra l'eleganza europea, offrendo un'esperienza gastronomica e culturale unica.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group text-center p-8 rounded-2xl bg-background/60 backdrop-blur-sm border border-border hover:border-secondary/30 transition-all duration-500 hoverLift ${
                isVisible ? 'animateFadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tropical-green/10 group-hover:bg-secondary/20 transition-colors duration-300 mb-6">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-4">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChiSiamoSection;