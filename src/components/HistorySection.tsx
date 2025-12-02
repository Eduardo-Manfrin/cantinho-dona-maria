import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Leaf, Utensils } from 'lucide-react';

const HistorySection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Heart, label: 'Com Amor' },
    { icon: Leaf, label: 'Ingredientes Frescos' },
    { icon: Utensils, label: 'Receitas Tradicionais' },
  ];

  return (
    <section id="historia" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="flexColumn items-center gap-16 max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flexColumn items-center gap-4 text-center">
            <span className="text-brazil-green font-display text-lg tracking-wider uppercase">
              Desde 1985
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              {t.history.title}
            </h2>
            <div className="brazilDivider" />
          </div>

          {/* Story Content */}
          <div className="flexColumn gap-8">
            <p className="font-body text-lg text-muted-foreground leading-relaxed text-center">
              {t.history.paragraph1}
            </p>

            {/* Decorative Quote */}
            <div className="relative py-8 px-6 bg-primary/5 rounded-lg border-l-4 border-secondary">
              <p className="font-display text-xl md:text-2xl text-primary italic text-center">
                "A comida é uma forma de amor que atravessa oceanos."
              </p>
              <span className="block text-right text-muted-foreground mt-4">— Dona Maria</span>
            </div>

            <p className="font-body text-lg text-muted-foreground leading-relaxed text-center">
              {t.history.paragraph2}
            </p>

            <p className="font-body text-lg text-muted-foreground leading-relaxed text-center">
              {t.history.paragraph3}
            </p>
          </div>

          {/* Features */}
          <div className="flexCenter flex-wrap gap-8 md:gap-16 pt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flexColumn items-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-primary flexCenter">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="font-display text-sm font-semibold text-foreground">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
