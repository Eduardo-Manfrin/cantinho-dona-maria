import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/tropicalia-logo.png';

const TropicaliaHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Chi Siamo', href: '#chi-siamo' },
    { label: 'Menù', href: '#menu' },
    { label: 'Eventi', href: '#eventi' },
    { label: 'Galleria', href: '#galleria' },
    { label: 'Contatti', href: '#contatti' },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flexBetween">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="TROPICÁLIA"
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 underlineHover ${
                      isScrolled
                        ? 'text-foreground hover:text-secondary'
                        : 'text-primary hover:text-secondary'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection('#contatti')}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2.5 rounded-full font-body text-sm tracking-wide uppercase transition-all duration-300 animatePulseGlow"
              >
                Prenota
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-primary"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-primary/95 backdrop-blur-lg"
          onClick={() => setIsMenuOpen(false)}
        />
        <nav className="relative h-full flexColumn items-center justify-center gap-8">
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`font-display text-3xl text-primary-foreground hover:text-accent transition-colors animateFadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contatti')}
            className="mt-8 bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-body text-lg tracking-wide uppercase animateFadeInUp"
            style={{ animationDelay: '0.6s' }}
          >
            Prenota Ora
          </button>
        </nav>
      </div>
    </>
  );
};

export default TropicaliaHeader;