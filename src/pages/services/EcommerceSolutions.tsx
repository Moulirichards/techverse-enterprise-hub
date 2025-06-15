
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ShoppingCart, CreditCard, Truck, BarChart3, Shield, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EcommerceSolutions = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: 'Custom E-commerce Platforms',
      description: 'Tailored online stores built for your unique business requirements and brand identity.'
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Secure payment processing with support for multiple gateways and currencies.'
    },
    {
      icon: Truck,
      title: 'Inventory & Shipping',
      description: 'Comprehensive inventory management and shipping integration solutions.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Commerce',
      description: 'Mobile-optimized shopping experiences and native mobile app development.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track sales, customer behavior, and business metrics with detailed reporting.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'PCI DSS compliance and robust security measures to protect customer data.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-secondary to-brand-accent py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingCart className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">E-commerce Solutions</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Launch and scale your online business with our comprehensive e-commerce solutions. 
              From custom platforms to marketplace integrations, we power your digital commerce success.
            </p>
            <Button size="lg" className="bg-white text-brand-secondary hover:bg-gray-100">
              Launch Your Store
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">E-commerce Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center mb-6">
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

export default EcommerceSolutions;
