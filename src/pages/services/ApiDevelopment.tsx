
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Zap, Code, Shield, Globe, RefreshCw, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ApiDevelopment = () => {
  const services = [
    {
      icon: Code,
      title: 'RESTful API Development',
      description: 'Scalable REST APIs with proper HTTP methods, status codes, and resource design.'
    },
    {
      icon: Zap,
      title: 'GraphQL Implementation',
      description: 'Flexible GraphQL APIs for efficient data querying and real-time subscriptions.'
    },
    {
      icon: Shield,
      title: 'API Security',
      description: 'Comprehensive security with authentication, authorization, and rate limiting.'
    },
    {
      icon: Globe,
      title: 'Third-party Integrations',
      description: 'Seamless integration with external APIs and services for enhanced functionality.'
    },
    {
      icon: RefreshCw,
      title: 'API Versioning',
      description: 'Proper versioning strategies to maintain backward compatibility and smooth updates.'
    },
    {
      icon: CheckCircle,
      title: 'Documentation & Testing',
      description: 'Comprehensive API documentation and automated testing for reliability.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-accent to-brand-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Zap className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">API Development Services</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Build robust, scalable APIs that power your applications and enable seamless integrations. 
              From RESTful services to GraphQL implementations, we deliver high-performance solutions.
            </p>
            <Button size="lg" className="bg-white text-brand-accent hover:bg-gray-100">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">API Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center mb-6">
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

export default ApiDevelopment;
