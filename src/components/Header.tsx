import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BrazilFlag from './BrazilFlag';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();

  const languages = [
    { code: 'pt' as const, label: 'Português', flag: '🇧🇷' },
    { code: 'en' as const, label: 'English', flag: '🇬🇧' },
    { code: 'it' as const, label: 'Italiano', flag: '🇮🇹' },
  ];

  const currentLang = languages.find(l => l.code === language);
  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flexBetween py-4">
          {/* Logo with Brazilian Flag */}
          <Link to="/" className="flexCenter gap-3">
            <div className="w-12 h-12 rounded-full bg-secondary flexCenter relative">
              <span className="font-display text-xl font-bold text-primary">DM</span>
              <div className="absolute -bottom-1 -right-1">
                <BrazilFlag size={18} />
              </div>
            </div>
            <div className="flexColumn">
              <span className="font-display text-xl font-semibold text-primary-foreground">
                Cantinho da
              </span>
              <span className="font-display text-lg text-secondary -mt-1">
                Dona Maria
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
              {t.nav.home}
            </Link>
            {isHomePage ? (
              <a href="#historia" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
                {t.nav.history}
              </a>
            ) : (
              <Link to="/#historia" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
                {t.nav.history}
              </Link>
            )}
            <Link to="/cardapio" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
              {t.nav.menu}
            </Link>
            {isHomePage ? (
              <a href="#contato" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
                {t.nav.contact}
              </a>
            ) : (
              <Link to="/#contato" className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium">
                {t.nav.contact}
              </Link>
            )}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flexCenter gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Globe className="w-4 h-4 text-primary-foreground" />
                <span className="text-primary-foreground text-sm font-medium">
                  {currentLang?.flag} {currentLang?.code.toUpperCase()}
                </span>
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-card rounded-lg shadow-lg overflow-hidden min-w-40">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flexCenter gap-3 px-4 py-3 text-left hover:bg-muted transition-colors ${
                        language === lang.code ? 'bg-muted' : ''
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-foreground font-medium">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 flexColumn gap-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium py-2"
            >
              {t.nav.home}
            </Link>
            {isHomePage ? (
              <a
                href="#historia"
                onClick={() => setIsMenuOpen(false)}
                className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium py-2"
              >
                {t.nav.history}
              </a>
            ) : (
              <Link
                to="/#historia"
                onClick={() => setIsMenuOpen(false)}
                className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium py-2"
              >
                {t.nav.history}
              </Link>
            )}
            <Link
              to="/cardapio"
              onClick={() => setIsMenuOpen(false)}
              className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium py-2"
            >
              {t.nav.menu}
            </Link>
            {isHomePage ? (
              <a
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium py-2"
              >
                {t.nav.contact}
              </a>
            ) : (
              <Link
                to="/#contato"
                onClick={() => setIsMenuOpen(false)}
                className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium py-2"
              >
                {t.nav.contact}
              </Link>
            )}

            <div className="flexCenter gap-3 pt-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    language === lang.code
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-primary-foreground/10 text-primary-foreground'
                  }`}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
