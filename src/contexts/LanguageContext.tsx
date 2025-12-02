import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'it';

interface Translations {
  nav: {
    home: string;
    history: string;
    menu: string;
    contact: string;
  };
  hero: {
    welcome: string;
    subtitle: string;
    cta: string;
  };
  history: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  menu: {
    title: string;
    subtitle: string;
    categories: {
      appetizers: string;
      mains: string;
      drinks: string;
      desserts: string;
    };
  };
  footer: {
    address: string;
    hours: string;
    hoursText: string;
    contact: string;
    followUs: string;
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: 'Início',
      history: 'Nossa História',
      menu: 'Cardápio',
      contact: 'Contato',
    },
    hero: {
      welcome: 'Bem-vindo ao Cantinho da Dona Maria',
      subtitle: 'O verdadeiro sabor do Brasil na Europa. Receitas tradicionais feitas com amor e saudade de casa.',
      cta: 'Ver Cardápio',
    },
    history: {
      title: 'Nossa História',
      paragraph1: 'Dona Maria chegou à Europa em 1985 com uma mala cheia de sonhos e um caderno repleto de receitas de família. Nascida em Minas Gerais, ela cresceu entre panelas e fogões, aprendendo os segredos da culinária brasileira com sua avó.',
      paragraph2: 'Após anos trabalhando em diversos restaurantes, Dona Maria finalmente realizou seu sonho: abrir um cantinho onde pudesse servir os pratos que lembram sua terra natal. Cada receita carrega a memória de tardes ensolaradas no interior do Brasil.',
      paragraph3: 'Hoje, o Cantinho da Dona Maria é um pedacinho do Brasil no coração da Europa, onde brasileiros matam a saudade e estrangeiros descobrem o calor e o sabor únicos da nossa culinária.',
    },
    menu: {
      title: 'Nosso Cardápio',
      subtitle: 'Sabores autênticos que contam histórias',
      categories: {
        appetizers: 'Entradas',
        mains: 'Pratos Principais',
        drinks: 'Bebidas',
        desserts: 'Sobremesas',
      },
    },
    footer: {
      address: 'Endereço',
      hours: 'Horário de Funcionamento',
      hoursText: 'Ter - Dom: 12h às 23h\nSegunda: Fechado',
      contact: 'Contato',
      followUs: 'Siga-nos',
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      history: 'Our Story',
      menu: 'Menu',
      contact: 'Contact',
    },
    hero: {
      welcome: 'Welcome to Cantinho da Dona Maria',
      subtitle: 'The true taste of Brazil in Europe. Traditional recipes made with love and homesickness.',
      cta: 'View Menu',
    },
    history: {
      title: 'Our Story',
      paragraph1: 'Dona Maria arrived in Europe in 1985 with a suitcase full of dreams and a notebook full of family recipes. Born in Minas Gerais, she grew up surrounded by pots and stoves, learning the secrets of Brazilian cuisine from her grandmother.',
      paragraph2: 'After years working in various restaurants, Dona Maria finally achieved her dream: opening a little corner where she could serve dishes that remind her of her homeland. Each recipe carries the memory of sunny afternoons in the Brazilian countryside.',
      paragraph3: 'Today, Cantinho da Dona Maria is a piece of Brazil in the heart of Europe, where Brazilians cure their homesickness and foreigners discover the unique warmth and flavor of our cuisine.',
    },
    menu: {
      title: 'Our Menu',
      subtitle: 'Authentic flavors that tell stories',
      categories: {
        appetizers: 'Appetizers',
        mains: 'Main Courses',
        drinks: 'Drinks',
        desserts: 'Desserts',
      },
    },
    footer: {
      address: 'Address',
      hours: 'Opening Hours',
      hoursText: 'Tue - Sun: 12pm to 11pm\nMonday: Closed',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
    },
  },
  it: {
    nav: {
      home: 'Home',
      history: 'La Nostra Storia',
      menu: 'Menu',
      contact: 'Contatti',
    },
    hero: {
      welcome: 'Benvenuti al Cantinho da Dona Maria',
      subtitle: 'Il vero sapore del Brasile in Europa. Ricette tradizionali fatte con amore e nostalgia di casa.',
      cta: 'Vedi Menu',
    },
    history: {
      title: 'La Nostra Storia',
      paragraph1: 'Dona Maria è arrivata in Europa nel 1985 con una valigia piena di sogni e un quaderno pieno di ricette di famiglia. Nata nel Minas Gerais, è cresciuta tra pentole e fornelli, imparando i segreti della cucina brasiliana dalla nonna.',
      paragraph2: 'Dopo anni di lavoro in vari ristoranti, Dona Maria ha finalmente realizzato il suo sogno: aprire un angolino dove poter servire i piatti che le ricordano la sua terra natale. Ogni ricetta porta con sé il ricordo di pomeriggi soleggiati nella campagna brasiliana.',
      paragraph3: 'Oggi, il Cantinho da Dona Maria è un pezzo di Brasile nel cuore dell\'Europa, dove i brasiliani curano la nostalgia e gli stranieri scoprono il calore e il sapore unici della nostra cucina.',
    },
    menu: {
      title: 'Il Nostro Menu',
      subtitle: 'Sapori autentici che raccontano storie',
      categories: {
        appetizers: 'Antipasti',
        mains: 'Piatti Principali',
        drinks: 'Bevande',
        desserts: 'Dolci',
      },
    },
    footer: {
      address: 'Indirizzo',
      hours: 'Orari di Apertura',
      hoursText: 'Mar - Dom: 12:00 - 23:00\nLunedì: Chiuso',
      contact: 'Contatti',
      followUs: 'Seguici',
      rights: 'Tutti i diritti riservati.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
