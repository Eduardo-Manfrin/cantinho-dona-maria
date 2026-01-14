import { useEffect, useRef, useState } from 'react';
import { UtensilsCrossed, Wine, Cake } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'piatti',
    title: 'Piatti Principali',
    icon: UtensilsCrossed,
    items: [
      {
        name: 'Moqueca de Peixe',
        description: 'Stufato di pesce fresco con latte di cocco, pomodori, coriandolo e olio di dendê',
        price: '€22',
      },
      {
        name: 'Feijoada Completa',
        description: 'Il classico stufato di fagioli neri con carni miste, servito con riso, farofa e couve',
        price: '€18',
      },
      {
        name: 'Picanha Grelhada',
        description: 'Taglio nobile di manzo alla griglia con chimichurri e verdure di stagione',
        price: '€26',
      },
      {
        name: 'Bobó de Camarão',
        description: 'Gamberi in crema di manioca con latte di cocco e spezie brasiliane',
        price: '€24',
      },
      {
        name: 'Frango à Passarinho',
        description: 'Pezzi di pollo fritti croccanti con aglio e limone',
        price: '€14',
      },
    ],
  },
  {
    id: 'bevande',
    title: 'Bevande',
    icon: Wine,
    items: [
      {
        name: 'Caipirinha Classica',
        description: 'Cachaça, lime fresco e zucchero di canna',
        price: '€9',
      },
      {
        name: 'Caipirinha de Maracujá',
        description: 'Variante tropicale con frutto della passione fresco',
        price: '€10',
      },
      {
        name: 'Água de Coco',
        description: 'Acqua di cocco naturale, servita fresca',
        price: '€5',
      },
      {
        name: 'Guaraná Antarctica',
        description: 'La bibita brasiliana più famosa',
        price: '€4',
      },
      {
        name: 'Batida de Coco',
        description: 'Cocktail cremoso con cachaça e crema di cocco',
        price: '€10',
      },
    ],
  },
  {
    id: 'dolci',
    title: 'Dolci',
    icon: Cake,
    items: [
      {
        name: 'Brigadeiro',
        description: 'Tartufi di cioccolato brasiliani con granella',
        price: '€6',
      },
      {
        name: 'Pudim de Leite',
        description: 'Crème caramel brasiliano al latte condensato',
        price: '€7',
      },
      {
        name: 'Açaí na Tigela',
        description: 'Bowl di açaí con frutta fresca e granola',
        price: '€9',
      },
      {
        name: 'Quindim',
        description: 'Dolce tradizionale a base di cocco e tuorlo d\'uovo',
        price: '€6',
      },
    ],
  },
];

const MenuSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('piatti');
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

  const currentCategory = menuData.find((cat) => cat.id === activeCategory) || menuData[0];

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animateFadeInUp' : 'opacity-0'}`}>
          <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-secondary mb-4">
            I Nostri Sapori
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Menù
          </h2>
          <div className="tropicalDividerWide mx-auto mb-8" />
          <p className="font-body text-lg text-muted-foreground">
            Piatti preparati con ingredienti freschi e tanto amore.<br />
            Scopri i sapori che fanno ballare il palato.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animateFadeInUp stagger-2' : 'opacity-0'}`}>
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm tracking-wide uppercase transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-cream-dark text-foreground hover:bg-secondary/20'
              }`}
            >
              <category.icon size={18} />
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className={`max-w-4xl mx-auto ${isVisible ? 'animateFadeInUp stagger-3' : 'opacity-0'}`}>
          <div className="grid gap-6">
            {currentCategory.items.map((item, index) => (
              <div
                key={item.name}
                className="group p-6 rounded-xl bg-cream-dark/50 border border-transparent hover:border-secondary/30 hover:bg-cream-dark transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flexBetween mb-2">
                  <h3 className="font-display text-xl md:text-2xl text-primary group-hover:text-secondary transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-display text-xl text-secondary font-semibold">
                    {item.price}
                  </span>
                </div>
                <p className="font-body text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${isVisible ? 'animateFadeInUp stagger-4' : 'opacity-0'}`}>
          <p className="font-body text-sm text-muted-foreground mb-4">
            Prezzi IVA inclusa. Allergeni disponibili su richiesta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;