import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="flexWrap gap-12 md:gap-8 justify-between">
          {/* Brand */}
          <div className="flexColumn gap-4 w-full md:w-auto md:flex-1">
            <div className="flexCenter justify-start gap-3">
              <div className="w-14 h-14 rounded-full bg-secondary flexCenter">
                <span className="font-display text-2xl font-bold text-primary">DM</span>
              </div>
              <div className="flexColumn">
                <span className="font-display text-2xl font-semibold text-primary-foreground">
                  Cantinho da
                </span>
                <span className="font-display text-xl text-secondary -mt-1">
                  Dona Maria
                </span>
              </div>
            </div>
            <p className="font-body text-primary-foreground/80 max-w-xs leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Address */}
          <div className="flexColumn gap-4 w-full sm:w-auto">
            <h4 className="font-display text-lg font-semibold text-secondary">
              {t.footer.address}
            </h4>
            <div className="flexColumn gap-3">
              <div className="flexCenter justify-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="font-body text-primary-foreground/80">
                  Via Giuseppe Verdi, 42<br />
                  20121 Milano, Italia
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flexColumn gap-4 w-full sm:w-auto">
            <h4 className="font-display text-lg font-semibold text-secondary">
              {t.footer.hours}
            </h4>
            <div className="flexCenter justify-start gap-3">
              <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="font-body text-primary-foreground/80 whitespace-pre-line">
                {t.footer.hoursText}
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="flexColumn gap-4 w-full sm:w-auto">
            <h4 className="font-display text-lg font-semibold text-secondary">
              {t.footer.contact}
            </h4>
            <div className="flexColumn gap-3">
              <a
                href="tel:+390212345678"
                className="flexCenter justify-start gap-3 hover:text-secondary transition-colors"
              >
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="font-body text-primary-foreground/80">+39 02 1234 5678</span>
              </a>
              <a
                href="mailto:contato@cantinhodonaMaria.it"
                className="flexCenter justify-start gap-3 hover:text-secondary transition-colors"
              >
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="font-body text-primary-foreground/80">contato@cantinhodonaMaria.it</span>
              </a>
            </div>

            {/* Social */}
            <div className="flexColumn gap-3 mt-4">
              <h4 className="font-display text-lg font-semibold text-secondary">
                {t.footer.followUs}
              </h4>
              <div className="flexCenter justify-start gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flexCenter hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flexCenter hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flexCenter flex-wrap gap-4 justify-center md:justify-between text-sm">
            <p className="font-body text-primary-foreground/60">
              © 2024 Cantinho da Dona Maria. {t.footer.rights}
            </p>
            <div className="flexCenter gap-2">
              <span className="text-2xl">🇧🇷</span>
              <span className="font-body text-primary-foreground/60">Made with saudade</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
