import { useLanguage } from '@/contexts/LanguageContext';
import foodCoxinha from '@/assets/food-coxinha.jpg';
import foodFeijoada from '@/assets/food-feijoada.jpg';
import foodCaipirinha from '@/assets/food-caipirinha.jpg';
import foodBrigadeiro from '@/assets/food-brigadeiro.jpg';
import { UtensilsCrossed, Drumstick, Wine, Cake } from 'lucide-react';

interface MenuItem {
  name: { pt: string; en: string; it: string };
  description: { pt: string; en: string; it: string };
  price: string;
}

interface MenuCategory {
  id: string;
  title: { pt: string; en: string; it: string };
  icon: React.ReactNode;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'appetizers',
    title: { pt: 'Entradas', en: 'Appetizers', it: 'Antipasti' },
    icon: <UtensilsCrossed className="w-5 h-5" />,
    items: [
      {
        name: { pt: 'Coxinha (8 unidades)', en: 'Coxinha (8 pieces)', it: 'Coxinha (8 pezzi)' },
        description: {
          pt: 'Bolinho de frango desfiado com catupiry, empanado e frito',
          en: 'Fried chicken croquette with creamy cheese filling',
          it: 'Crocchetta di pollo con formaggio cremoso',
        },
        price: '€10,00',
      },
      {
        name: { pt: 'Pão de Queijo (8 unidades)', en: 'Cheese Bread (8 pieces)', it: 'Pane al Formaggio (8 pezzi)' },
        description: {
          pt: 'Tradicional pão de queijo mineiro, quentinho',
          en: 'Traditional Brazilian cheese bread, warm',
          it: 'Tradizionale pane brasiliano al formaggio, caldo',
        },
        price: '€10,00',
      },
      {
        name: { pt: 'Pastel (3 unidades)', en: 'Pastel (3 pieces)', it: 'Pastel (3 pezzi)' },
        description: {
          pt: 'Massa crocante recheada com carne ou queijo',
          en: 'Crispy pastry filled with meat or cheese',
          it: 'Pasta croccante ripiena di carne o formaggio',
        },
        price: '€10,00',
      },
      {
        name: { pt: 'Bolinho de Bacalhau (4 unidades)', en: 'Cod Fritters (4 pieces)', it: 'Polpette di Baccalà (4 pezzi)' },
        description: {
          pt: 'Bolinhos de bacalhau dourados e crocantes',
          en: 'Golden crispy cod fritters',
          it: 'Frittelle di baccalà dorate e croccanti',
        },
        price: '€8,00',
      },
      {
        name: { pt: 'Mix Degustação (10 unidades)', en: 'Tasting Mix (10 pieces)', it: 'Mix Degustazione (10 pezzi)' },
        description: {
          pt: '4 coxinhas, 3 quibes, 3 pães de queijo',
          en: '4 coxinhas, 3 kibes, 3 cheese breads',
          it: '4 coxinha, 3 kibe, 3 pane al formaggio',
        },
        price: '€12,00',
      },
    ],
  },
  {
    id: 'mains',
    title: { pt: 'Pratos Principais', en: 'Main Courses', it: 'Piatti Principali' },
    icon: <Drumstick className="w-5 h-5" />,
    items: [
      {
        name: { pt: 'Picanha na Pedra', en: 'Picanha on Stone', it: 'Picanha alla Pietra' },
        description: {
          pt: 'Picanha suculenta servida na pedra quente',
          en: 'Juicy picanha served on hot stone',
          it: 'Picanha succosa servita sulla pietra calda',
        },
        price: '€24,00',
      },
      {
        name: { pt: 'Feijoada Completa', en: 'Complete Feijoada', it: 'Feijoada Completa' },
        description: {
          pt: 'Feijão preto com carnes, arroz, farofa, couve e laranja',
          en: 'Black beans with meats, rice, farofa, collard greens and orange',
          it: 'Fagioli neri con carne, riso, farofa, cavolo e arancia',
        },
        price: '€18,00',
      },
      {
        name: { pt: 'Frango à Passarinho', en: 'Fried Chicken Bites', it: 'Pollo alla Passarinho' },
        description: {
          pt: 'Frango frito marinado no estilo tropical, crocante',
          en: 'Marinated fried chicken in tropical style, crispy',
          it: 'Pollo fritto marinato in stile tropicale, croccante',
        },
        price: '€16,00',
      },
      {
        name: { pt: 'Moqueca de Peixe', en: 'Fish Moqueca', it: 'Moqueca di Pesce' },
        description: {
          pt: 'Peixe cozido em leite de coco com pimentões e dendê',
          en: 'Fish stewed in coconut milk with peppers and palm oil',
          it: 'Pesce in stufato di latte di cocco con peperoni e olio di palma',
        },
        price: '€22,00',
      },
    ],
  },
  {
    id: 'sides',
    title: { pt: 'Acompanhamentos', en: 'Side Dishes', it: 'Contorni' },
    icon: <UtensilsCrossed className="w-5 h-5" />,
    items: [
      {
        name: { pt: 'Arroz Branco', en: 'White Rice', it: 'Riso Bianco' },
        description: {
          pt: 'Arroz soltinho temperado com alho',
          en: 'Fluffy rice seasoned with garlic',
          it: 'Riso soffice condito con aglio',
        },
        price: '€7,00',
      },
      {
        name: { pt: 'Feijão Tropeiro', en: 'Tropeiro Beans', it: 'Fagioli Tropeiro' },
        description: {
          pt: 'Feijão com bacon, linguiça e farinha de mandioca',
          en: 'Beans with bacon, sausage and cassava flour',
          it: 'Fagioli con pancetta, salsiccia e farina di manioca',
        },
        price: '€13,00',
      },
      {
        name: { pt: 'Batata Frita', en: 'French Fries', it: 'Patatine Fritte' },
        description: {
          pt: 'Batatas crocantes e douradas',
          en: 'Crispy golden fries',
          it: 'Patatine croccanti e dorate',
        },
        price: '€4,00',
      },
    ],
  },
  {
    id: 'drinks',
    title: { pt: 'Bebidas & Cocktails', en: 'Drinks & Cocktails', it: 'Bevande & Cocktail' },
    icon: <Wine className="w-5 h-5" />,
    items: [
      {
        name: { pt: 'Caipirinha', en: 'Caipirinha', it: 'Caipirinha' },
        description: {
          pt: 'Clássica limão / morango / maracujá',
          en: 'Classic lime / strawberry / passion fruit',
          it: 'Classica lime / fragola / maracuja',
        },
        price: '€8,00',
      },
      {
        name: { pt: 'Spritz', en: 'Spritz', it: 'Spritz' },
        description: {
          pt: 'Aperol / Campari',
          en: 'Aperol / Campari',
          it: 'Aperol / Campari',
        },
        price: '€7,00',
      },
      {
        name: { pt: 'Guaraná Antarctica', en: 'Guaraná Soda', it: 'Guaraná' },
        description: {
          pt: 'O refrigerante brasileiro mais famoso',
          en: 'The most famous Brazilian soda',
          it: 'La bibita brasiliana più famosa',
        },
        price: '€4,00',
      },
      {
        name: { pt: 'Cerveja', en: 'Beer', it: 'Birra' },
        description: {
          pt: 'Cervejas nacionais e importadas',
          en: 'National and imported beers',
          it: 'Birre nazionali e importate',
        },
        price: 'a partir de €3,50',
      },
      {
        name: { pt: 'Água 1L', en: 'Water 1L', it: 'Acqua 1L' },
        description: {
          pt: 'Natural / com gás',
          en: 'Still / sparkling',
          it: 'Naturale / frizzante',
        },
        price: '€3,00',
      },
    ],
  },
  {
    id: 'desserts',
    title: { pt: 'Sobremesas', en: 'Desserts', it: 'Dolci' },
    icon: <Cake className="w-5 h-5" />,
    items: [
      {
        name: { pt: 'Brigadeiro (4 unidades)', en: 'Brigadeiro (4 pieces)', it: 'Brigadeiro (4 pezzi)' },
        description: {
          pt: 'Doce de chocolate com leite condensado',
          en: 'Chocolate truffle with condensed milk',
          it: 'Tartufo di cioccolato con latte condensato',
        },
        price: '€5,00',
      },
      {
        name: { pt: 'Pudim de Leite', en: 'Milk Pudding', it: 'Budino di Latte' },
        description: {
          pt: 'Pudim cremoso com calda de caramelo',
          en: 'Creamy pudding with caramel sauce',
          it: 'Budino cremoso con salsa al caramello',
        },
        price: '€6,00',
      },
      {
        name: { pt: 'Açaí na Tigela', en: 'Açaí Bowl', it: 'Açaí Bowl' },
        description: {
          pt: 'Açaí cremoso com granola, banana e mel',
          en: 'Creamy açaí with granola, banana and honey',
          it: 'Açaí cremoso con granola, banana e miele',
        },
        price: '€9,00',
      },
      {
        name: { pt: 'Doce do Dia', en: 'Dessert of the Day', it: 'Dolce del Giorno' },
        description: {
          pt: 'Pergunte ao garçom a sobremesa especial do dia',
          en: 'Ask the waiter for today\'s special dessert',
          it: 'Chiedi al cameriere il dolce speciale del giorno',
        },
        price: '€5,00',
      },
    ],
  },
];

// Gallery images displayed at the side
const galleryImages = [
  { src: foodCoxinha, alt: 'Coxinha' },
  { src: foodFeijoada, alt: 'Feijoada' },
  { src: foodCaipirinha, alt: 'Caipirinha' },
  { src: foodBrigadeiro, alt: 'Brigadeiro' },
];

const MenuSection = () => {
  const { language, t } = useLanguage();

  return (
    <section id="cardapio" className="py-16 md:py-24 bg-primary min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flexColumn items-center gap-4 text-center mb-12 md:mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary">
            {t.menu.title}
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 max-w-xl">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Gallery Side - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:flex lg:w-80 flex-shrink-0">
            <div className="sticky top-28 flexColumn gap-4">
              {galleryImages.map((img, index) => (
                <div 
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg hoverLift"
                >
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-44 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Menu Content */}
          <div className="flex-1 bg-card/95 rounded-2xl shadow-2xl overflow-hidden">
            {/* Logo */}
            <div className="flexCenter py-8 bg-primary/5">
              <div className="flexColumn items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-secondary flexCenter">
                  <span className="font-display text-2xl font-bold text-primary">DM</span>
                </div>
                <span className="font-display text-lg text-foreground">Cantinho da Dona Maria</span>
              </div>
            </div>

            {/* Menu Categories */}
            <div className="p-6 md:p-10">
              {menuData.map((category, categoryIndex) => (
                <div key={category.id} className={categoryIndex > 0 ? 'mt-10' : ''}>
                  {/* Category Header */}
                  <div className="flexCenter gap-3 mb-6">
                    <span className="text-secondary">{category.icon}</span>
                    <h2 className="font-display text-xl md:text-2xl font-semibold text-secondary uppercase tracking-wider">
                      {category.title[language]}
                    </h2>
                  </div>

                  {/* Menu Items */}
                  <div className="flexColumn gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="group"
                      >
                        <div className="flexBetween items-start gap-4">
                          <div className="flex-1">
                            <h3 className="font-display text-lg font-medium text-foreground group-hover:text-secondary transition-colors duration-200">
                              {item.name[language]}
                            </h3>
                            <p className="font-body text-sm text-muted-foreground mt-1">
                              {item.description[language]}
                            </p>
                          </div>
                          <span className="font-display text-lg font-semibold text-secondary whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        {itemIndex < category.items.length - 1 && (
                          <div className="h-px bg-border/50 mt-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Note */}
              <p className="text-center text-muted-foreground mt-12 font-body text-sm border-t border-border/50 pt-8">
                * {language === 'pt' ? 'Todos os preços incluem IVA. Alérgenos disponíveis mediante solicitação.' : 
                   language === 'en' ? 'All prices include VAT. Allergens available upon request.' :
                   'Tutti i prezzi includono IVA. Allergeni disponibili su richiesta.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
