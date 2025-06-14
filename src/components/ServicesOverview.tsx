
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
      description: 'Custom web applications built with React, Vue, Angular, and Node.js.',
      href: '/services/web-development',
      gradient: 'from-brand-teal to-brand-blue'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      href: '/services/mobile-apps',
      gradient: 'from-brand-purple to-brand-pink'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'AWS, Azure, and Google Cloud infrastructure and migration services.',
      href: '/services/cloud-solutions',
      gradient: 'from-brand-blue to-brand-teal'
    },
    {
      icon: Brain,
      title: 'AI/ML',
      description: 'Machine Learning, NLP, and Computer Vision solutions.',
      href: '/services/ai-ml',
      gradient: 'from-brand-pink to-brand-purple'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions and consulting services.',
      href: '/services/cybersecurity',
      gradient: 'from-brand-teal to-brand-purple'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Business intelligence and advanced analytics solutions.',
      href: '/services/data-analytics',
      gradient: 'from-brand-purple to-brand-blue'
    },
    {
      icon: GitBranch,
      title: 'DevOps',
      description: 'CI/CD pipelines and infrastructure automation services.',
      href: '/services/devops',
      gradient: 'from-brand-blue to-brand-pink'
    },
    {
      icon: TestTube,
      title: 'QA Testing',
      description: 'Comprehensive quality assurance and testing services.',
      href: '/services/qa-testing',
      gradient: 'from-brand-pink to-brand-teal'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design and exceptional user experiences.',
      href: '/services/ui-ux-design',
      gradient: 'from-brand-purple to-brand-pink'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">
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
                  className="inline-flex items-center text-brand-teal hover:text-brand-purple font-medium transition-colors"
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

        {/* Industries Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Industries We Serve</h3>
            <p className="text-lg text-gray-600">Specialized solutions for diverse industry needs</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'Healthcare', 'Finance', 'Education', 'E-commerce', 'Manufacturing',
              'Retail', 'Gaming', 'Real Estate', 'Automotive'
            ].map((industry, index) => (
              <a
                key={industry}
                href={`/industries/${industry.toLowerCase().replace(' ', '-')}`}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group hover:bg-gradient-to-r hover:from-brand-teal/5 hover:to-brand-purple/5"
              >
                <div className="text-brand-teal font-semibold group-hover:text-brand-purple transition-colors">
                  {industry}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-brand-teal to-brand-purple hover:from-brand-teal/90 hover:to-brand-purple/90">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
