
import React from 'react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Brain, 
  Shield, 
  BarChart3, 
  GitBranch, 
  TestTube, 
  Palette 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesOverview = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      href: '/services/web-development',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      href: '/services/mobile-apps',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      href: '/services/cloud-solutions',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Brain,
      title: 'AI/ML',
      description: 'Artificial intelligence and machine learning solutions.',
      href: '/services/ai-ml',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions and consulting.',
      href: '/services/cybersecurity',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Business intelligence and advanced analytics.',
      href: '/services/data-analytics',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: GitBranch,
      title: 'DevOps',
      description: 'CI/CD pipelines and infrastructure automation.',
      href: '/services/devops',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: TestTube,
      title: 'QA Testing',
      description: 'Comprehensive quality assurance and testing services.',
      href: '/services/qa-testing',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design and exceptional experiences.',
      href: '/services/ui-ux-design',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we offer comprehensive technology services that drive digital transformation and business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href={service.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
