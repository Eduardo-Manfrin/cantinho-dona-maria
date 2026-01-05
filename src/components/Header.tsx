import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BrazilFlag from './BrazilFlag';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'pt' as const, label: 'Português', flag: '🇧🇷' },
    { code: 'en' as const, label: 'English', flag: '🇬🇧' },
    { code: 'it' as const, label: 'Italiano', flag: '🇮🇹' },
  ];

  const currentLang = languages.find(l => l.code === language);
  const isHomePage = location.pathname === '/';

  const navItems = [
    { label: t.nav.home, to: '/', isAnchor: false },
    { label: t.nav.history, to: isHomePage ? '#historia' : '/#historia', isAnchor: isHomePage },
    { label: t.nav.menu, to: '/cardapio', isAnchor: false },
    { label: t.nav.contact, to: isHomePage ? '#contato' : '/#contato', isAnchor: isHomePage },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary/98 backdrop-blur-md shadow-lg' 
          : 'bg-primary/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flexBetween h-16 md:h-20">
          {/* Logo with Brazilian Flag */}
          <Link to="/" className="flexCenter gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flexCenter relative transition-transform duration-300 group-hover:scale-105">
              <span className="font-display text-lg md:text-xl font-bold text-primary">DM</span>
              <div className="absolute -bottom-1 -right-1">
                <BrazilFlag size={16} />
              </div>
            </div>
            <div className="flexColumn hidden sm:flex">
              <span className="font-display text-lg font-semibold text-primary-foreground leading-tight">
                Cantinho da
              </span>
              <span className="font-display text-base text-secondary leading-tight">
                Dona Maria
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <span key={item.label} className="flexCenter">
                {item.isAnchor ? (
                  <a
                    href={item.to}
                    className="relative px-4 py-2 text-primary-foreground/90 font-medium text-sm uppercase tracking-wide transition-colors duration-200 hover:text-secondary group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-3/4" />
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    className="relative px-4 py-2 text-primary-foreground/90 font-medium text-sm uppercase tracking-wide transition-colors duration-200 hover:text-secondary group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-3/4" />
                  </Link>
                )}
                {index < navItems.length - 1 && (
                  <span className="text-primary-foreground/30 mx-1">|</span>
                )}
              </span>
            ))}

            {/* Language Switcher */}
            <div className="relative ml-6">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flexCenter gap-2 px-3 py-2 rounded-md text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium uppercase">
                  {currentLang?.code}
                </span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsLangOpen(false)}
                  />
                  <div className="absolute top-full right-0 mt-2 bg-card rounded-lg shadow-xl overflow-hidden min-w-44 z-50 border border-border/50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flexCenter gap-3 px-4 py-3 text-left transition-colors duration-200 ${
                          language === lang.code 
                            ? 'bg-primary/10 text-primary' 
                            : 'hover:bg-muted text-foreground'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium text-sm">{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground hover:text-secondary transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-primary/95 backdrop-blur-md z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '64px' }}
      >
        <nav className="flexColumn items-center justify-center h-full gap-6 pb-20">
          {navItems.map((item) => (
            item.isAnchor ? (
              <a
                key={item.label}
                href={item.to}
                onClick={() => setIsMenuOpen(false)}
                className="text-primary-foreground text-2xl font-display font-medium uppercase tracking-wider hover:text-secondary transition-colors duration-200"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className="text-primary-foreground text-2xl font-display font-medium uppercase tracking-wider hover:text-secondary transition-colors duration-200"
              >
                {item.label}
              </Link>
            )
          ))}

          {/* Mobile Language Switcher */}
          <div className="flexCenter gap-4 mt-8">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsMenuOpen(false);
                }}
                className={`px-5 py-3 rounded-lg transition-all duration-200 ${
                  language === lang.code
                    ? 'bg-secondary text-secondary-foreground shadow-lg'
                    : 'bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
