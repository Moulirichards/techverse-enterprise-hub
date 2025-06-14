
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, HealthTech Solutions',
      company: 'Fortune 500 Healthcare',
      image: '/placeholder.svg',
      rating: 5,
      content: 'TechVerse transformed our legacy healthcare systems into a modern, HIPAA-compliant platform. Their expertise in healthcare technology is unmatched.',
      project: 'Healthcare Platform Modernization',
      color: 'brand-teal'
    },
    {
      name: 'Michael Chen',
      role: 'VP of Engineering',
      company: 'Global Finance Corp',
      image: '/placeholder.svg',
      rating: 5,
      content: 'The AI-powered fraud detection system they built has reduced our false positives by 80% while improving security. Exceptional work.',
      project: 'AI Fraud Detection System',
      color: 'brand-purple'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Digital Innovation',
      company: 'EduLearn Inc',
      image: '/placeholder.svg',
      rating: 5,
      content: 'Our e-learning platform now serves 2M+ students globally. TechVerse delivered scalable architecture that grows with our needs.',
      project: 'E-Learning Platform Development',
      color: 'brand-pink'
    },
    {
      name: 'David Thompson',
      role: 'Chief Digital Officer',
      company: 'RetailMax',
      image: '/placeholder.svg',
      rating: 5,
      content: 'The omnichannel e-commerce solution increased our online sales by 300%. Their team understood our business needs perfectly.',
      project: 'Omnichannel E-commerce Platform',
      color: 'brand-blue'
    },
    {
      name: 'Lisa Park',
      role: 'IT Director',
      company: 'Manufacturing Pro',
      image: '/placeholder.svg',
      rating: 5,
      content: 'TechVerse helped us implement Industry 4.0 IoT solutions that optimized our production efficiency by 40%. Game-changing results.',
      project: 'IoT Manufacturing Solutions',
      color: 'brand-teal'
    },
    {
      name: 'Robert Wilson',
      role: 'Founder & CEO',
      company: 'PropTech Innovations',
      image: '/placeholder.svg',
      rating: 5,
      content: 'From concept to launch in 6 months, they built our real estate platform that now manages $2B+ in property transactions.',
      project: 'Real Estate Platform',
      color: 'brand-purple'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-teal/5 to-brand-purple/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders worldwide. Here's what our clients say about working with TechVerse.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in border-t-4 border-brand-teal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-brand-teal opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-pink fill-current" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Project Tag */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-xs font-medium border border-brand-teal/20">
                  {testimonial.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-purple rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-4xl font-bold bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold bg-gradient-to-r from-brand-pink to-brand-blue bg-clip-text text-transparent mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
