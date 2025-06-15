
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Settings, Workflow, RefreshCw, Shield, Database, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SystemIntegration = () => {
  const services = [
    {
      icon: Workflow,
      title: 'Enterprise Integration',
      description: 'Connect disparate systems and applications for seamless data flow and operations.'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Unify data from multiple sources with ETL processes and real-time synchronization.'
    },
    {
      icon: RefreshCw,
      title: 'Legacy Modernization',
      description: 'Modernize legacy systems and integrate them with contemporary applications.'
    },
    {
      icon: Shield,
      title: 'Secure Connections',
      description: 'Implement secure integration patterns with proper authentication and encryption.'
    },
    {
      icon: Settings,
      title: 'API Management',
      description: 'Manage and orchestrate APIs across your enterprise ecosystem effectively.'
    },
    {
      icon: CheckCircle,
      title: 'Testing & Validation',
      description: 'Comprehensive testing to ensure reliable and error-free integrations.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-green to-brand-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Settings className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">System Integration Services</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Connect your business systems for seamless operations. We specialize in enterprise 
              integration solutions that improve efficiency and data accessibility.
            </p>
            <Button size="lg" className="bg-white text-brand-green hover:bg-gray-100">
              Integrate Your Systems
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Integration Services</h2>
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

export default SystemIntegration;
