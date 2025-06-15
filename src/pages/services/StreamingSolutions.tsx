
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Video, Play, Zap, Globe, Shield, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StreamingSolutions = () => {
  const services = [
    {
      icon: Video,
      title: 'Video Streaming Platforms',
      description: 'Custom streaming platforms with adaptive bitrate and multi-device support.'
    },
    {
      icon: Play,
      title: 'Live Streaming Solutions',
      description: 'Real-time video broadcasting with low latency and high-quality delivery.'
    },
    {
      icon: Globe,
      title: 'Content Delivery Network',
      description: 'Global CDN integration for fast, reliable content delivery worldwide.'
    },
    {
      icon: Shield,
      title: 'DRM & Security',
      description: 'Digital rights management and content protection against piracy.'
    },
    {
      icon: Zap,
      title: 'Transcoding Services',
      description: 'Automated video processing and optimization for multiple formats and resolutions.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Monitoring',
      description: 'Detailed viewer analytics and real-time performance monitoring.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-accent to-brand-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Video className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Streaming Solutions</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Power your video content with our advanced streaming solutions. From live broadcasting 
              to on-demand platforms, we deliver seamless viewing experiences across all devices.
            </p>
            <Button size="lg" className="bg-white text-brand-accent hover:bg-gray-100">
              Stream Your Content
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Streaming Services</h2>
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

export default StreamingSolutions;
