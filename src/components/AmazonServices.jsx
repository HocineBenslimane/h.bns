import React, { useState, useEffect } from 'react';
import { CheckCircle, Star, TrendingUp, Users, Award, ArrowRight, Zap, Target, Shield } from 'lucide-react';

const AmazonServices = () => {
  const [activePackage, setActivePackage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const packages = [
    {
      id: 0,
      name: "Starter Package",
      subtitle: "Essential Visibility",
      price: "$199",
      description: "Perfect for new sellers or single product optimization",
      features: [
        "1 SEO-optimized Product Title",
        "5 Benefit-driven Bullet Points",
        "1 Engaging Product Description",
        "Keyword Research for 1 ASIN"
      ],
      ideal: "Single product optimization, new product launches, budget-conscious sellers",
      color: "from-blue-500 to-purple-600",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 1,
      name: "Growth Package",
      subtitle: "Enhanced Presence",
      price: "$499",
      description: "Expand your reach with multiple product optimization",
      features: [
        "Up to 3 SEO-optimized Product Titles",
        "Up to 15 Benefit-driven Bullet Points",
        "Up to 3 Engaging Product Descriptions",
        "In-depth Keyword Research for up to 3 ASINs",
        "Basic Brand Storefront Header Design",
        "2 A+ Content Modules"
      ],
      ideal: "Growing brands with multiple products, stronger brand presence",
      color: "from-purple-500 to-pink-600",
      icon: <TrendingUp className="w-6 h-6" />,
      popular: true
    },
    {
      id: 2,
      name: "Elite Package",
      subtitle: "Complete Amazon Domination",
      price: "$999",
      description: "Comprehensive solution for market leadership",
      features: [
        "Up to 5 SEO-optimized Product Titles",
        "Up to 25 Benefit-driven Bullet Points",
        "Up to 5 Engaging Product Descriptions",
        "Advanced Keyword Research for up to 5 ASINs",
        "Full Custom Brand Storefront Design",
        "5 A+ Content Modules",
        "Competitor Analysis",
        "CRO Consultation"
      ],
      ideal: "Established brands, market leaders, complete Amazon overhaul",
      color: "from-orange-500 to-red-600",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "150+", label: "Amazon Listings Optimized", icon: <Target className="w-8 h-8" /> },
    { number: "40%", label: "Average Conversion Increase", icon: <TrendingUp className="w-8 h-8" /> },
    { number: "98%", label: "Client Satisfaction Rate", icon: <Star className="w-8 h-8" /> },
    { number: "24hr", label: "Response Time", icon: <Zap className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Trusted by 150+ Amazon Sellers</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Amazon
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Into a Sales Machine
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Skyrocket your visibility, conversions, and revenue with our proven SEO-optimized copywriting and stunning brand storefront designs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#packages" className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                View Our Packages
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#quote" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                Get Free Quote
              </a>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-yellow-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Value Proposition */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose H.BNS LLC for Your Amazon Success?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just create content—we engineer Amazon success through strategic optimization and compelling design
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-8 h-8 text-white" />,
                title: "Amazon-Centric Expertise",
                description: "Deep understanding of Amazon's A9 algorithm and marketplace dynamics for maximum visibility",
                color: "from-purple-600 to-blue-600"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-white" />,
                title: "SEO-Driven Results",
                description: "Every word is strategically chosen to boost rankings and drive qualified traffic to your listings",
                color: "from-blue-600 to-indigo-600"
              },
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: "Unbeatable Value",
                description: "Premium quality at competitive prices with transparent, upfront pricing and no hidden fees",
                color: "from-green-600 to-teal-600"
              }
            ].map((item, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Amazon Optimization Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to maximize your Amazon performance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Copywriting Service */}
            <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">High-Converting Amazon Copywriting</h3>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Transform your product listings with persuasive, keyword-optimized content that drives conversions and improves search rankings.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Amazon Product Titles",
                    description: "Compelling, keyword-rich titles that grab attention and improve search visibility"
                  },
                  {
                    title: "Engaging Bullet Points",
                    description: "Transform features into irresistible benefits that address customer pain points"
                  },
                  {
                    title: "Detailed Product Descriptions",
                    description: "Comprehensive descriptions that build trust and overcome objections"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start group/item">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-2 mr-4 group-hover/item:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Brand Storefront Service */}
            <div className="group bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Captivating Brand Storefront Design</h3>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Create an immersive brand experience that showcases your products and builds customer loyalty through strategic design.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Strategic Layout & Navigation",
                    description: "Intuitive designs that guide customers through your product offerings"
                  },
                  {
                    title: "Visually Stunning Graphics",
                    description: "High-quality, on-brand imagery that captures attention and communicates value"
                  },
                  {
                    title: "Brand Storytelling",
                    description: "Weave your brand narrative to create emotional connections with customers"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start group/item">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-2 mr-4 group-hover/item:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Packages Section */}
      <section id="packages" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Amazon Success Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing, exceptional value, and results that speak for themselves
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                  pkg.popular ? 'ring-4 ring-purple-500 ring-opacity-50 scale-105' : ''
                }`}
                onMouseEnter={() => setActivePackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${pkg.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                    {pkg.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-lg text-purple-600 font-semibold mb-4">{pkg.subtitle}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">starting</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Ideal for:</strong> {pkg.ideal}
                    </p>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${pkg.color} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Choose {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Custom Solutions */}
          <div className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              For unique projects, extensive product catalogs, or specific requirements, we offer fully customized solutions tailored to your vision.
            </p>
            <a href="#quote" className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Custom Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Dominate Amazon?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't let your products get lost in the crowd. Partner with H.BNS LLC to unlock your full Amazon potential with our SEO-optimized copywriting and captivating brand storefront designs.
          </p>
          <a href="#quote" className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Your Free Quote Today!
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Enhanced Quote Form Section */}
      <section id="quote" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your Free Amazon Optimization Quote
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your Amazon goals and we'll provide a customized solution
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                  Business/Brand Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your business or brand name"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                    Interested Package *
                  </label>
                  <select
                    id="package"
                    name="package"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a package</option>
                    <option value="starter">Starter Package ($199)</option>
                    <option value="growth">Growth Package ($499)</option>
                    <option value="elite">Elite Package ($999)</option>
                    <option value="custom">Custom Solution</option>
                    <option value="consultation">Consultation First</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="products" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Products/ASINs
                  </label>
                  <input
                    type="number"
                    id="products"
                    name="products"
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="How many products need optimization?"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select your timeline</option>
                  <option value="asap">ASAP (Rush order)</option>
                  <option value="1week">Within 1 week</option>
                  <option value="2weeks">Within 2 weeks</option>
                  <option value="1month">Within 1 month</option>
                  <option value="flexible">Flexible timeline</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details & Goals
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your products, target audience, current challenges, and what you hope to achieve..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get My Free Quote
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  We'll respond within 24 hours with a detailed proposal
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmazonServices;

