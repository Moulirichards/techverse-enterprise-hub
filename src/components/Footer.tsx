
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold">TechVerse</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading the digital transformation with cutting-edge technology solutions for enterprises worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
              <Github className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/web-development" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="/services/mobile-apps" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="/services/cloud-solutions" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="/services/ai-ml" className="text-gray-400 hover:text-white transition-colors">AI/ML</a></li>
              <li><a href="/services/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="/services/devops" className="text-gray-400 hover:text-white transition-colors">DevOps</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/industries/healthcare" className="text-gray-400 hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="/industries/finance" className="text-gray-400 hover:text-white transition-colors">Finance</a></li>
              <li><a href="/industries/education" className="text-gray-400 hover:text-white transition-colors">Education</a></li>
              <li><a href="/industries/ecommerce" className="text-gray-400 hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="/industries/manufacturing" className="text-gray-400 hover:text-white transition-colors">Manufacturing</a></li>
              <li><a href="/industries/retail" className="text-gray-400 hover:text-white transition-colors">Retail</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">123 Tech Street, Silicon Valley, CA 94000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">hello@techverse.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TechVerse. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="/support/faq" className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
