import Hero from '../components/Hero';
import GenreSection from '../components/GenreSection';
import FeaturedComics from '../components/FeaturedComics';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Hero />
      <GenreSection />
      <FeaturedComics />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
