
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServicesOverview from '../components/ServicesOverview';
import TechnologyStack from '../components/TechnologyStack';
import Testimonials from '../components/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <TechnologyStack />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
