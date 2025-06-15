
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Gamepad2, Smartphone, Monitor, Zap, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GameDevelopment = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile Game Development',
      description: 'Engaging mobile games for iOS and Android with addictive gameplay mechanics.'
    },
    {
      icon: Monitor,
      title: 'Web-Based Games',
      description: 'Browser games using HTML5, WebGL, and modern web technologies for instant play.'
    },
    {
      icon: Zap,
      title: 'Game Mechanics Design',
      description: 'Compelling gameplay systems, progression mechanics, and player engagement features.'
    },
    {
      icon: Users,
      title: 'Multiplayer Systems',
      description: 'Real-time multiplayer functionality with matchmaking and social features.'
    },
    {
      icon: Trophy,
      title: 'Monetization Strategy',
      description: 'Balanced monetization through in-app purchases, ads, and subscription models.'
    },
    {
      icon: Gamepad2,
      title: 'Game Testing & QA',
      description: 'Comprehensive testing for gameplay balance, performance, and user experience.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-purple py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Gamepad2 className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Game Development Services</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Bring your game ideas to life with our expert development team. From mobile to web games, 
              we create engaging experiences that captivate players and drive success.
            </p>
            <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              Start Your Game
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Game Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GameDevelopment;
