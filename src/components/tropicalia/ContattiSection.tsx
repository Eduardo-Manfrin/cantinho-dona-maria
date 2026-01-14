import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContattiSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contatti" ref={sectionRef} className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animateFadeInUp' : 'opacity-0'}`}>
          <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-secondary mb-4">Vieni a Trovarci</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-6">Contatti</h2>
          <div className="tropicalDividerWide mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info */}
          <div className={`space-y-8 ${isVisible ? 'animateFadeInUp stagger-2' : 'opacity-0'}`}>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-display text-xl text-primary mb-1">Indirizzo</h3>
                <p className="font-body text-muted-foreground">Via Example 123, 10100 Torino, Italia</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-display text-xl text-primary mb-1">Telefono</h3>
                <a href="tel:+390111234567" className="font-body text-muted-foreground hover:text-secondary">+39 011 123 4567</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-display text-xl text-primary mb-1">Email</h3>
                <a href="mailto:info@tropicalia.it" className="font-body text-muted-foreground hover:text-secondary">info@tropicalia.it</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-display text-xl text-primary mb-1">Orari</h3>
                <p className="font-body text-muted-foreground">Mar-Dom: 12:00 - 15:00, 19:00 - 23:30<br/>Lunedì: Chiuso</p>
              </div>
            </div>
            <a href="https://wa.me/390111234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-tropical-green hover:bg-tropical-green-light text-primary-foreground px-6 py-3 rounded-full font-body text-sm tracking-wide uppercase transition-all">
              Contattaci su WhatsApp
            </a>
          </div>

          {/* Form */}
          <form className={`space-y-6 p-8 rounded-2xl bg-cream-dark ${isVisible ? 'animateFadeInUp stagger-3' : 'opacity-0'}`}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Nome" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:border-secondary" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:border-secondary" />
            </div>
            <input type="text" placeholder="Oggetto" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:border-secondary" />
            <textarea placeholder="Messaggio" rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body focus:outline-none focus:border-secondary resize-none" />
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-4 rounded-full font-body text-sm tracking-widest uppercase transition-all animatePulseGlow">
              <Send size={18} /> Invia Messaggio
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContattiSection;