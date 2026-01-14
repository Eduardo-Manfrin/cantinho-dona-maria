import { useEffect, useRef, useState } from 'react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const GalleriaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = [
    { src: gallery1, alt: 'Coxinha - appetizer brasiliano', span: 'col-span-1 row-span-1' },
    { src: gallery2, alt: 'Caipirinha cocktail', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1' },
    { src: gallery3, alt: 'Feijoada tradizionale', span: 'col-span-1 row-span-2' },
    { src: gallery4, alt: 'Brigadeiro dolci', span: 'col-span-1 row-span-1' },
    { src: gallery5, alt: 'Musica dal vivo', span: 'col-span-2 row-span-1 md:col-span-1' },
    { src: gallery6, alt: 'Picanha alla griglia', span: 'col-span-1 row-span-2 md:row-span-1' },
  ];

  return (
    <section
      id="galleria"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-cream-dark overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animateFadeInUp' : 'opacity-0'}`}>
          <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-secondary mb-4">
            I Nostri Momenti
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Galleria
          </h2>
          <div className="tropicalDividerWide mx-auto" />
        </div>

        {/* Gallery Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto ${isVisible ? 'animateFadeInUp stagger-2' : 'opacity-0'}`}>
          {images.map((image, index) => (
            <div
              key={image.alt}
              className={`group relative overflow-hidden rounded-xl ${image.span}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative w-full h-full min-h-[200px] md:min-h-[280px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover hoverZoom"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-body text-sm text-primary-foreground">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className={`text-center mt-12 ${isVisible ? 'animateFadeInUp stagger-4' : 'opacity-0'}`}>
          <a
            href="https://instagram.com/tropicalia_torino"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm tracking-wide text-secondary hover:text-primary transition-colors underlineHover"
          >
            Seguici su Instagram @tropicalia_torino
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleriaSection;