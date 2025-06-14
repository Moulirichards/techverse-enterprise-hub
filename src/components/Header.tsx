import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'AI/ML', href: '/services/ai-ml' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'DevOps', href: '/services/devops' },
    { name: 'QA Testing', href: '/services/qa-testing' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' }
  ];

  const industries = [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'E-commerce', href: '/industries/ecommerce' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Gaming', href: '/industries/gaming' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Automotive', href: '/industries/automotive' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-brand-primary">
                TechVerse
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-brand-primary transition-colors">Home</a>
            <a href="/about" className="text-gray-700 hover:text-brand-primary transition-colors">About</a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-brand-primary transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                  <div className="py-2">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-primary/10 hover:text-brand-primary"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center text-gray-700 hover:text-brand-primary transition-colors">
                Industries <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                  <div className="py-2">
                    {industries.map((industry) => (
                      <a
                        key={industry.name}
                        href={industry.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-primary/10 hover:text-brand-primary"
                      >
                        {industry.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/products" className="text-gray-700 hover:text-brand-primary transition-colors">Products</a>
            <a href="/careers" className="text-gray-700 hover:text-brand-primary transition-colors">Careers</a>
            <a href="/contact" className="text-gray-700 hover:text-brand-primary transition-colors">Contact</a>
            
            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white">
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-brand-primary">Home</a>
              <a href="/about" className="text-gray-700 hover:text-brand-primary">About</a>
              <a href="/services" className="text-gray-700 hover:text-brand-primary">Services</a>
              <a href="/industries" className="text-gray-700 hover:text-brand-primary">Industries</a>
              <a href="/products" className="text-gray-700 hover:text-brand-primary">Products</a>
              <a href="/careers" className="text-gray-700 hover:text-brand-primary">Careers</a>
              <a href="/contact" className="text-gray-700 hover:text-brand-primary">Contact</a>
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
