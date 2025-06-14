
import React from 'react';
import { ArrowRight, Play, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean Background - removed gradient circles */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-8 animate-fade-in border border-brand-primary/20">
            <Zap className="w-4 h-4 mr-2" />
            Leading Digital Transformation Since 2010
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-gray-900 via-brand-accent to-brand-primary bg-clip-text text-transparent">
              Enterprise Technology
            </span>
            <br />
            <span className="bg-gradient-to-r from-brand-primary to-brand-green bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            We architect, develop, and deploy cutting-edge digital solutions that transform businesses and drive innovation across industries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white text-lg px-8 py-4">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white">
              <Play className="mr-2 h-5 w-5" /> Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-brand-accent to-brand-purple bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-brand-green to-brand-accent bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="absolute top-1/4 left-8 hidden lg:block animate-float">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs border-l-4 border-brand-primary">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-sm">99.9% Uptime</div>
                <div className="text-xs text-gray-500">Guaranteed reliability</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/3 right-8 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs border-l-4 border-brand-accent">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-sm">Global Scale</div>
                <div className="text-xs text-gray-500">Worldwide deployment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
