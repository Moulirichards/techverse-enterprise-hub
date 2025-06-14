
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Globe, Target, Heart, Lightbulb, Shield, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Expert Team Members' },
    { number: '50+', label: 'Countries Served' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Global Support' }
  ];

  const leadership = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at Google with 15+ years in enterprise software development. Led teams that built scalable solutions for millions of users.',
      expertise: ['Strategic Leadership', 'Enterprise Architecture', 'Team Building']
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Principal Engineer at Microsoft Azure. Pioneer in cloud-native architectures and AI/ML implementations for enterprise applications.',
      expertise: ['Cloud Architecture', 'AI/ML Systems', 'DevOps']
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Design',
      bio: 'Award-winning designer with experience at Apple and Airbnb. Specialist in user-centered design and design systems for enterprise software.',
      expertise: ['UX Strategy', 'Design Systems', 'User Research']
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Former Lead Architect at Netflix. Expert in building high-performance, scalable systems that handle millions of concurrent users.',
      expertise: ['System Architecture', 'Performance Optimization', 'Scalability']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Client First',
      description: 'We put our clients at the center of everything we do, ensuring their success is our success.',
      bgColor: 'bg-brand-primary'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.',
      bgColor: 'bg-brand-purple'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: 'We maintain the highest standards in code quality, security, and performance.',
      bgColor: 'bg-brand-accent'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together to achieve extraordinary results.',
      bgColor: 'bg-brand-secondary'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'We focus on delivering measurable business outcomes and ROI for our clients.',
      bgColor: 'bg-brand-green'
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changing requirements and market conditions.',
      bgColor: 'bg-brand-purple'
    }
  ];

  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Started as a small team of 5 developers with a vision to transform enterprise software development.'
    },
    {
      year: '2016',
      title: 'First Enterprise Client',
      description: 'Secured our first Fortune 500 client and delivered a mission-critical application serving 100,000+ users.'
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Opened offices in New York, Austin, and Seattle. Team grew to 50+ professionals.'
    },
    {
      year: '2020',
      title: 'AI/ML Division Launch',
      description: 'Launched dedicated AI/ML division, becoming a leader in enterprise AI solutions.'
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Named "Top Software Development Company" by TechReview and achieved 98% client satisfaction.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Established innovation labs for emerging technologies including AR/VR, blockchain, and IoT.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-brand-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-brand-primary">
              About TechVerse
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We are a team of passionate technologists, designers, and strategists who believe in the power of technology to transform businesses and improve lives. Since 2014, we've been helping organizations navigate the digital landscape and achieve their most ambitious goals.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We bridge the gap between complex technical possibilities and real business needs.
              </p>
              <p className="text-gray-600">
                Every project we undertake is guided by our commitment to excellence, innovation, and client success. We don't just build software; we build partnerships that last.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the world's most trusted technology partner, known for delivering transformative solutions that shape the future of business and society.
              </p>
              <p className="text-gray-600">
                We envision a world where technology seamlessly integrates with human needs, creating more efficient, sustainable, and equitable outcomes for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the visionaries driving our success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                <div className="w-32 h-32 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{leader.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-brand-primary font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-600 mb-4">{leader.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {leader.expertise.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-primary"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="inline-block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-brand-primary font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-brand-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Industry recognition for our excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Top Software Development Company',
                organization: 'TechReview 2024',
                description: 'Recognized for excellence in enterprise software development'
              },
              {
                title: 'Best AI/ML Implementation',
                organization: 'AI Excellence Awards 2023',
                description: 'Outstanding achievement in artificial intelligence solutions'
              },
              {
                title: 'Client Choice Award',
                organization: 'Clutch 2023',
                description: 'Highest client satisfaction ratings in our category'
              },
              {
                title: 'Innovation in Cloud Computing',
                organization: 'Cloud Awards 2022',
                description: 'Recognition for innovative cloud migration solutions'
              }
            ].map((award, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-brand-primary font-medium mb-2">{award.organization}</p>
                <p className="text-gray-600 text-sm">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
