
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Lock, Coins, Code, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlockchainDevelopment = () => {
  const services = [
    {
      icon: Code,
      title: 'Smart Contract Development',
      description: 'Secure and efficient smart contracts on Ethereum, Solana, and other blockchain platforms.'
    },
    {
      icon: Coins,
      title: 'DeFi Applications',
      description: 'Decentralized finance solutions including DEXs, lending protocols, and yield farming.'
    },
    {
      icon: Globe,
      title: 'Web3 Integration',
      description: 'Connect traditional applications with blockchain networks and decentralized services.'
    },
    {
      icon: Shield,
      title: 'Security Auditing',
      description: 'Comprehensive smart contract audits and security assessments for blockchain projects.'
    },
    {
      icon: Lock,
      title: 'NFT Marketplaces',
      description: 'Custom NFT platforms with minting, trading, and royalty management features.'
    },
    {
      icon: Zap,
      title: 'Blockchain Consulting',
      description: 'Strategic guidance on blockchain adoption and technology implementation.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-green to-brand-secondary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Lock className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Blockchain Development</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Build the future with blockchain technology. From smart contracts to DeFi applications, 
              we develop secure, scalable solutions that leverage the power of decentralization.
            </p>
            <Button size="lg" className="bg-white text-brand-green hover:bg-gray-100">
              Build on Blockchain
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Blockchain Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-6">
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

      <Footer />
    </div>
  );
};

export default BlockchainDevelopment;
