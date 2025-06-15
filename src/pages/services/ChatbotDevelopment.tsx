
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MessageSquare, Brain, Zap, Users, Settings, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatbotDevelopment = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI that understands context and provides human-like responses.'
    },
    {
      icon: Users,
      title: 'Customer Support Bots',
      description: '24/7 automated customer service with escalation to human agents when needed.'
    },
    {
      icon: Zap,
      title: 'Integration & Deployment',
      description: 'Seamless integration with websites, mobile apps, and messaging platforms.'
    },
    {
      icon: Settings,
      title: 'Custom Workflows',
      description: 'Tailored conversation flows designed for your specific business processes.'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Platform Support',
      description: 'Deploy across web, mobile, WhatsApp, Telegram, and other messaging channels.'
    },
    {
      icon: CheckCircle,
      title: 'Analytics & Optimization',
      description: 'Track performance metrics and continuously improve bot effectiveness.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-purple to-brand-secondary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <MessageSquare className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Chatbot Development Services</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Transform customer interactions with intelligent chatbots. Our AI-powered solutions 
              provide 24/7 support and enhance user engagement across all platforms.
            </p>
            <Button size="lg" className="bg-white text-brand-purple hover:bg-gray-100">
              Build Your Chatbot
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Chatbot Services</h2>
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

export default ChatbotDevelopment;
