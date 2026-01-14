import { Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/tropicalia-logo.png';

const TropicaliaFooter = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="flexColumn items-center text-center">
          <img src={logo} alt="TROPICÁLIA" className="h-12 mb-6 brightness-0 invert" />
          <p className="font-display text-xl text-primary-foreground/80 italic mb-8">
            Sapore brasiliano, cuore aperto.
          </p>
          <div className="flex gap-4 mb-8">
            <a href="https://instagram.com/tropicalia_torino" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flexCenter transition-colors">
              <Instagram size={20} className="text-primary-foreground" />
            </a>
            <a href="https://facebook.com/tropicaliatorino" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flexCenter transition-colors">
              <Facebook size={20} className="text-primary-foreground" />
            </a>
          </div>
          <div className="w-24 h-px bg-primary-foreground/20 mb-6" />
          <p className="font-body text-sm text-primary-foreground/60">
            © 2024 TROPICÁLIA. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TropicaliaFooter;