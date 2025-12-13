import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';

const Menu = () => {
  return (
    <LanguageProvider>
      <div className="flexColumn min-h-screen">
        <Header />
        <main className="flex-1 pt-20">
          <MenuSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Menu;
