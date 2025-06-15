
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Workflow, Zap, BarChart3, RefreshCw, CheckCircle, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProcessAutomation = () => {
  const services = [
    {
      icon: Workflow,
      title: 'Business Process Automation',
      description: 'Streamline operations with automated workflows and process optimization.'
    },
    {
      icon: Zap,
      title: 'RPA Implementation',
      description: 'Robotic Process Automation for repetitive tasks and data processing.'
    },
    {
      icon: Settings,
      title: 'Custom Automation Tools',
      description: 'Tailored automation solutions designed for your specific business needs.'
    },
    {
      icon: RefreshCw,
      title: 'Integration & Orchestration',
      description: 'Connect systems and automate data flow between applications.'
    },
    {
      icon: BarChart3,
      title: 'Performance Monitoring',
      description: 'Track automation performance and identify optimization opportunities.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Ensure automated processes maintain accuracy and reliability.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-brand-accent py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Workflow className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Process Automation Services</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Transform your business operations with intelligent automation. Reduce manual work, 
              eliminate errors, and boost productivity with our comprehensive automation solutions.
            </p>
            <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100">
              Automate Your Processes
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Automation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-purple rounded-lg flex items-center justify-center mb-6">
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

export default ProcessAutomation;
