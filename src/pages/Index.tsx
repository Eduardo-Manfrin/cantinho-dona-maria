import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HistorySection from '@/components/HistorySection';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="flexColumn min-h-screen">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <HistorySection />
          <MenuSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
