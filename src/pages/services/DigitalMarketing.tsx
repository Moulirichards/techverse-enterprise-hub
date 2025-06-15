
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Globe, BarChart3, Target, TrendingUp, Users, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DigitalMarketing = () => {
  const services = [
    {
      icon: Globe,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings with comprehensive SEO strategies and optimization.'
    },
    {
      icon: Target,
      title: 'PPC Advertising',
      description: 'Targeted pay-per-click campaigns across Google Ads, Facebook, and other platforms.'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Engage your audience across social platforms with compelling content and campaigns.'
    },
    {
      icon: Megaphone,
      title: 'Content Marketing',
      description: 'Create valuable content that attracts, engages, and converts your target audience.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Data-driven strategies to accelerate user acquisition and business growth.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Track performance and ROI with detailed analytics and actionable insights.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-accent to-brand-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Digital Marketing Services</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Grow your business with data-driven digital marketing strategies. From SEO to social media, 
              we help you reach your target audience and achieve measurable results.
            </p>
            <Button size="lg" className="bg-white text-brand-accent hover:bg-gray-100">
              Boost Your Growth
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-6">
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

export default DigitalMarketing;
