
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Database, Shield, Zap, BarChart3, RefreshCw, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DatabaseManagement = () => {
  const services = [
    {
      icon: Database,
      title: 'Database Design & Architecture',
      description: 'Custom database schemas optimized for your business needs and scalability requirements.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Query optimization, indexing strategies, and performance tuning for maximum efficiency.'
    },
    {
      icon: RefreshCw,
      title: 'Migration Services',
      description: 'Seamless database migrations with zero downtime and data integrity preservation.'
    },
    {
      icon: Shield,
      title: 'Security & Backup',
      description: 'Comprehensive security measures and automated backup solutions for data protection.'
    },
    {
      icon: BarChart3,
      title: 'Monitoring & Analytics',
      description: 'Real-time monitoring and analytics to ensure optimal database performance.'
    },
    {
      icon: CheckCircle,
      title: 'Data Integration',
      description: 'Seamless integration with existing systems and third-party applications.'
    }
  ];

  const technologies = [
    'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch',
    'Oracle Database', 'SQL Server', 'Cassandra', 'DynamoDB', 'Firebase'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Database className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Database Management Services</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Optimize your data infrastructure with our comprehensive database management solutions. 
              From design to optimization, we ensure your databases perform at their peak.
            </p>
            <Button size="lg" className="bg-white text-brand-primary hover:bg-gray-100">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Database Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mb-6">
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

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Technologies We Work With</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-white rounded-full text-brand-primary font-medium shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DatabaseManagement;
