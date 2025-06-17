import React from 'react';

const AmazonServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unlock Your <span className="text-yellow-300">Amazon Potential</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your Amazon listings into powerful sales machines with our SEO-optimized copywriting and captivating brand storefront designs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
                Explore Our Services
              </a>
              <a href="#quote" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose H.BNS LLC for Your Amazon Success?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just create content—we engineer Amazon success through strategic optimization and compelling design
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-purple-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Amazon-Centric Expertise</h3>
              <p className="text-gray-600">Deep understanding of Amazon's A9 algorithm and marketplace dynamics for maximum visibility</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO-Driven Results</h3>
              <p className="text-gray-600">Every word is strategically chosen to boost rankings and drive qualified traffic to your listings</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-green-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Unbeatable Value</h3>
              <p className="text-gray-600">Premium quality at competitive prices with transparent, upfront pricing and no hidden fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Amazon Optimization Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to maximize your Amazon performance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Copywriting Service */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">High-Converting Amazon Copywriting</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Transform your product listings with persuasive, keyword-optimized content that drives conversions and improves search rankings.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Amazon Product Titles</h4>
                    <p className="text-gray-600">Compelling, keyword-rich titles that grab attention and improve search visibility</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Engaging Bullet Points</h4>
                    <p className="text-gray-600">Transform features into irresistible benefits that address customer pain points</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Detailed Product Descriptions</h4>
                    <p className="text-gray-600">Comprehensive descriptions that build trust and overcome objections</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Brand Storefront Service */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Captivating Brand Storefront Design</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Create an immersive brand experience that showcases your products and builds customer loyalty through strategic design.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategic Layout & Navigation</h4>
                    <p className="text-gray-600">Intuitive designs that guide customers through your product offerings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visually Stunning Graphics</h4>
                    <p className="text-gray-600">High-quality, on-brand imagery that captures attention and communicates value</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Brand Storytelling</h4>
                    <p className="text-gray-600">Weave your brand narrative to create emotional connections with customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Competitive Pricing Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Professional-grade Amazon optimization shouldn't break the bank. We deliver exceptional value with transparent, upfront pricing and no hidden fees.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Dominate Amazon?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Don't let your products get lost in the crowd. Partner with H.BNS LLC to unlock your full Amazon potential with our SEO-optimized copywriting and captivating brand storefront designs.
            </p>
            <a href="#quote" className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors inline-block">
              Get Your Free Quote Today!
            </a>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Amazon Optimization Quote
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your Amazon goals and we'll provide a customized solution
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your business or brand name"
                />
              </div>
              
              <div>
                <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">
                  Services Needed *
                </label>
                <select
                  id="services"
                  name="services"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select services needed</option>
                  <option value="copywriting">Amazon Copywriting Only</option>
                  <option value="storefront">Brand Storefront Design Only</option>
                  <option value="both">Both Copywriting & Storefront Design</option>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="How many products need optimization?"
                />
              </div>
              
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about your products, target audience, current challenges, and what you hope to achieve..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
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

