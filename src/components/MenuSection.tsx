import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

interface MenuItem {
  name: { pt: string; en: string; it: string };
  description: { pt: string; en: string; it: string };
  price: string;
}

interface MenuCategory {
  id: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'appetizers',
    items: [
      {
        name: { pt: 'Coxinha', en: 'Coxinha', it: 'Coxinha' },
        description: {
          pt: 'Bolinho de frango desfiado com catupiry, empanado e frito',
          en: 'Fried chicken croquette with creamy cheese filling',
          it: 'Crocchetta di pollo con formaggio cremoso',
        },
        price: '€3.50',
      },
      {
        name: { pt: 'Pão de Queijo', en: 'Cheese Bread', it: 'Pane al Formaggio' },
        description: {
          pt: 'Tradicional pão de queijo mineiro, quentinho (6 unidades)',
          en: 'Traditional Brazilian cheese bread, warm (6 pieces)',
          it: 'Tradizionale pane brasiliano al formaggio, caldo (6 pezzi)',
        },
        price: '€5.00',
      },
      {
        name: { pt: 'Pastel de Carne', en: 'Meat Pastel', it: 'Pastel di Carne' },
        description: {
          pt: 'Massa crocante recheada com carne moída temperada',
          en: 'Crispy pastry filled with seasoned ground beef',
          it: 'Pasta croccante ripiena di carne macinata condita',
        },
        price: '€4.00',
      },
      {
        name: { pt: 'Bolinho de Bacalhau', en: 'Cod Fritters', it: 'Polpette di Baccalà' },
        description: {
          pt: 'Bolinhos de bacalhau dourados e crocantes (4 unidades)',
          en: 'Golden crispy cod fritters (4 pieces)',
          it: 'Frittelle di baccalà dorate e croccanti (4 pezzi)',
        },
        price: '€6.00',
      },
    ],
  },
  {
    id: 'mains',
    items: [
      {
        name: { pt: 'Feijoada Completa', en: 'Complete Feijoada', it: 'Feijoada Completa' },
        description: {
          pt: 'Feijão preto com carnes, arroz, farofa, couve e laranja',
          en: 'Black beans with meats, rice, farofa, collard greens and orange',
          it: 'Fagioli neri con carne, riso, farofa, cavolo e arancia',
        },
        price: '€18.00',
      },
      {
        name: { pt: 'Picanha Grelhada', en: 'Grilled Picanha', it: 'Picanha alla Griglia' },
        description: {
          pt: 'Picanha suculenta com arroz, feijão tropeiro e vinagrete',
          en: 'Juicy picanha with rice, tropeiro beans and vinaigrette',
          it: 'Picanha succosa con riso, fagioli tropeiro e vinaigrette',
        },
        price: '€24.00',
      },
      {
        name: { pt: 'Moqueca de Peixe', en: 'Fish Moqueca', it: 'Moqueca di Pesce' },
        description: {
          pt: 'Peixe cozido em leite de coco com pimentões e dendê',
          en: 'Fish stewed in coconut milk with peppers and palm oil',
          it: 'Pesce in stufato di latte di cocco con peperoni e olio di palma',
        },
        price: '€22.00',
      },
      {
        name: { pt: 'Frango à Passarinho', en: 'Fried Chicken Bites', it: 'Pollo Fritto' },
        description: {
          pt: 'Frango frito crocante com alho, servido com polenta',
          en: 'Crispy garlic fried chicken served with polenta',
          it: 'Pollo fritto croccante all\'aglio servito con polenta',
        },
        price: '€15.00',
      },
    ],
  },
  {
    id: 'drinks',
    items: [
      {
        name: { pt: 'Caipirinha', en: 'Caipirinha', it: 'Caipirinha' },
        description: {
          pt: 'Cachaça, limão, açúcar e gelo - o clássico brasileiro',
          en: 'Cachaça, lime, sugar and ice - the Brazilian classic',
          it: 'Cachaça, lime, zucchero e ghiaccio - il classico brasiliano',
        },
        price: '€8.00',
      },
      {
        name: { pt: 'Suco de Maracujá', en: 'Passion Fruit Juice', it: 'Succo di Maracuja' },
        description: {
          pt: 'Suco natural de maracujá fresco',
          en: 'Fresh natural passion fruit juice',
          it: 'Succo naturale di frutto della passione fresco',
        },
        price: '€4.50',
      },
      {
        name: { pt: 'Guaraná Antarctica', en: 'Guaraná Soda', it: 'Guaraná' },
        description: {
          pt: 'O refrigerante brasileiro mais famoso',
          en: 'The most famous Brazilian soda',
          it: 'La bibita brasiliana più famosa',
        },
        price: '€3.00',
      },
      {
        name: { pt: 'Café Brasileiro', en: 'Brazilian Coffee', it: 'Caffè Brasiliano' },
        description: {
          pt: 'Café forte e aromático, servido em xícara pequena',
          en: 'Strong aromatic coffee served in a small cup',
          it: 'Caffè forte e aromatico servito in tazzina',
        },
        price: '€2.50',
      },
    ],
  },
  {
    id: 'desserts',
    items: [
      {
        name: { pt: 'Brigadeiro', en: 'Brigadeiro', it: 'Brigadeiro' },
        description: {
          pt: 'Doce de chocolate com leite condensado (4 unidades)',
          en: 'Chocolate truffle with condensed milk (4 pieces)',
          it: 'Tartufo di cioccolato con latte condensato (4 pezzi)',
        },
        price: '€5.00',
      },
      {
        name: { pt: 'Pudim de Leite', en: 'Milk Pudding', it: 'Budino di Latte' },
        description: {
          pt: 'Pudim cremoso com calda de caramelo',
          en: 'Creamy pudding with caramel sauce',
          it: 'Budino cremoso con salsa al caramello',
        },
        price: '€6.00',
      },
      {
        name: { pt: 'Açaí na Tigela', en: 'Açaí Bowl', it: 'Açaí Bowl' },
        description: {
          pt: 'Açaí cremoso com granola, banana e mel',
          en: 'Creamy açaí with granola, banana and honey',
          it: 'Açaí cremoso con granola, banana e miele',
        },
        price: '€9.00',
      },
      {
        name: { pt: 'Quindim', en: 'Quindim', it: 'Quindim' },
        description: {
          pt: 'Doce de coco com gema de ovo caramelizado',
          en: 'Coconut custard with caramelized egg yolk',
          it: 'Crema di cocco con tuorlo d\'uovo caramellato',
        },
        price: '€4.50',
      },
    ],
  },
];

const MenuSection = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', label: t.menu.categories.appetizers },
    { id: 'mains', label: t.menu.categories.mains },
    { id: 'drinks', label: t.menu.categories.drinks },
    { id: 'desserts', label: t.menu.categories.desserts },
  ];

  const currentCategory = menuData.find((cat) => cat.id === activeCategory);

  return (
    <section id="cardapio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flexColumn items-center gap-4 text-center mb-16">
          <span className="text-brazil-green font-display text-lg tracking-wider uppercase">
            Delícias Brasileiras
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            {t.menu.title}
          </h2>
          <div className="brazilDivider" />
          <p className="font-body text-lg text-muted-foreground max-w-xl">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flexCenter flex-wrap gap-3 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="flexWrap justify-center gap-6 max-w-5xl mx-auto">
          {currentCategory?.items.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-12px)] bg-card rounded-xl p-6 hoverLift shadow-sm border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flexBetween items-start gap-4 mb-3">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.name[language]}
                </h3>
                <span className="font-display text-xl font-bold text-brazil-green whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                {item.description[language]}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-12 font-body text-sm">
          * {language === 'pt' ? 'Todos os preços incluem IVA. Alérgenos disponíveis mediante solicitação.' : 
             language === 'en' ? 'All prices include VAT. Allergens available upon request.' :
             'Tutti i prezzi includono IVA. Allergeni disponibili su richiesta.'}
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
