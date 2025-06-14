
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Clock, DollarSign, Users, Briefcase, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110,000 - $140,000',
      description: 'Help us build and maintain our cloud infrastructure with AWS, Kubernetes, and CI/CD pipelines.'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80,000 - $110,000',
      description: 'Create beautiful and intuitive user experiences for our enterprise software solutions.'
    },
    {
      title: 'Data Scientist',
      department: 'AI/ML',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$130,000 - $170,000',
      description: 'Work with large datasets to build machine learning models and drive business insights.'
    },
    {
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$95,000 - $125,000',
      description: 'Protect our systems and client data through threat analysis and security implementations.'
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$100,000 - $130,000',
      description: 'Develop native and cross-platform mobile applications for iOS and Android.'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-competitive salaries with equity options and performance bonuses'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote work options, and unlimited PTO'
    },
    {
      icon: Users,
      title: 'Learning & Development',
      description: 'Professional development budget, conference attendance, and skill training'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Build the future of technology with a team of passionate innovators. We're looking for talented individuals who want to make a difference.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              200+ Team Members
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Global Remote Work
            </div>
            <div className="flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              15+ Open Positions
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Work With Us?</h2>
            <p className="text-xl text-gray-600">We believe in taking care of our team members</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your next career opportunity</p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-semibold text-gray-900">{position.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <Button className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We foster an environment of innovation, collaboration, and continuous learning where everyone can thrive and make an impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
              <p className="text-gray-600">We encourage experimentation and creative problem-solving in everything we do.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-gray-600">We believe the best results come from diverse teams working together.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-gray-600">We invest in our team's growth and provide opportunities to learn new skills.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
