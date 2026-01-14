import { useEffect, useRef, useState } from 'react';
import { Music, Calendar, Users, Sparkles } from 'lucide-react';

const EventiSection = () => {
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

  const events = [
    {
      icon: Music,
      title: 'Musica dal Vivo',
      subtitle: 'Ogni Venerdì & Sabato',
      description: 'Artisti brasiliani suonano Bossa Nova, Samba e MPB in un ambiente intimo e accogliente.',
    },
    {
      icon: Users,
      title: 'Feijoada del Sabato',
      subtitle: 'Ogni Sabato a Pranzo',
      description: 'Il tradizionale pranzo brasiliano con la nostra feijoada completa e accompagnamenti.',
    },
    {
      icon: Sparkles,
      title: 'Eventi Privati',
      subtitle: 'Su Prenotazione',
      description: 'Organizziamo feste, compleanni e eventi aziendali con menu personalizzati.',
    },
  ];

  return (
    <section
      id="eventi"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-tropical-green/95 via-tropical-green to-tropical-green-light" />
      
      {/* Decorative leaf patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animateFadeInUp' : 'opacity-0'}`}>
          <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Vivi l'Esperienza
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
            Eventi & Musica
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mb-8 rounded-full" />
          <p className="font-body text-lg text-primary-foreground/80">
            Ogni settimana, musica dal vivo e buon cibo per celebrare la vita.<br />
            Vieni a condividere la nostra energia.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`group relative p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 hover:border-accent/50 transition-all duration-500 hoverLift ${
                isVisible ? 'animateFadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300 mb-6">
                <event.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-primary-foreground mb-2">
                {event.title}
              </h3>
              <span className="inline-block font-body text-sm text-accent mb-4">
                {event.subtitle}
              </span>
              <p className="font-body text-primary-foreground/70 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animateFadeInUp stagger-5' : 'opacity-0'}`}>
          <a
            href="#contatti"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-body text-sm tracking-widest uppercase transition-all duration-300 hoverLift"
          >
            <Calendar size={18} />
            Prenota il Tuo Evento
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventiSection;