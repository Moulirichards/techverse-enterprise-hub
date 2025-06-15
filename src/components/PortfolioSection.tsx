
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'HealthTech Platform',
      category: 'Healthcare Technology',
      description: 'A comprehensive healthcare management system serving 500,000+ patients with HIPAA-compliant architecture.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      featured: true,
      stats: {
        users: '500K+',
        performance: '99.9%',
        metric: 'Uptime'
      }
    },
    {
      id: 2,
      title: 'FinTech Trading Platform',
      category: 'Financial Technology',
      description: 'Real-time trading platform processing millions of transactions with advanced AI-powered fraud detection.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      technologies: ['TypeScript', 'Python', 'Redis', 'Kubernetes'],
      stats: {
        users: '2M+',
        performance: '80%',
        metric: 'Fraud Reduction'
      }
    },
    {
      id: 3,
      title: 'E-Learning Ecosystem',
      category: 'Education Technology',
      description: 'Global e-learning platform connecting 2 million students with interactive content and AI-powered assessments.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Docker'],
      stats: {
        users: '2M+',
        performance: '95%',
        metric: 'Satisfaction'
      }
    },
    {
      id: 4,
      title: 'E-Commerce Marketplace',
      category: 'Retail Technology',
      description: 'Omnichannel e-commerce solution handling $50M+ in annual transactions with real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'GraphQL', 'Microservices', 'GCP'],
      stats: {
        users: '$50M+',
        performance: '300%',
        metric: 'Sales Growth'
      }
    },
    {
      id: 5,
      title: 'IoT Manufacturing Suite',
      category: 'Industrial IoT',
      description: 'Smart manufacturing platform optimizing production efficiency with real-time monitoring and predictive analytics.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      technologies: ['Angular', 'IoT Core', 'Machine Learning', 'Azure'],
      stats: {
        users: '40%',
        performance: '98%',
        metric: 'Efficiency Gain'
      }
    },
    {
      id: 6,
      title: 'PropTech Management Platform',
      category: 'Real Estate Technology',
      description: 'Comprehensive property management system handling $2B+ in real estate transactions and portfolio management.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Django', 'PostgreSQL', 'Blockchain'],
      stats: {
        users: '$2B+',
        performance: '60%',
        metric: 'Process Automation'
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've transformed businesses across industries with innovative technology solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer animate-fade-in ${
                item.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-accent text-white text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-brand-primary">{item.stats.users}</div>
                      <div className="text-xs text-gray-500">Users/Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-brand-secondary">{item.stats.performance}</div>
                      <div className="text-xs text-gray-500">{item.stats.metric}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
