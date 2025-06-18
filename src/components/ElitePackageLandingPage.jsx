import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle, Star, TrendingUp, Users, Award, ArrowRight, Zap, Target, Shield, Clock, DollarSign, Palette, BarChart3, Crown, Sparkles } from 'lucide-react';

const ElitePackageLandingPage = () => {
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);
  const [productCount, setProductCount] = useState(5);
  const [timeline, setTimeline] = useState('1week');
  const [asapPricing, setAsapPricing] = useState(false);
  const [selectedPackageName, setSelectedPackageName] = useState('Elite Package');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paymentSuccess = params.get('payment_success');
    const packageName = params.get('package');

    if (paymentSuccess === 'true' && packageName) {
      setShowForm(true);
      setSelectedPackageName(packageName);
      if (packageName === 'Elite Package') setProductCount(5);
      // Scroll to form
      setTimeout(() => {
        document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    // Add meta tags for SEO
    document.title = "Elite Package - Complete Amazon Domination | H.BNS LLC";
    
    // Update meta description if it exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Complete Amazon marketplace domination with 5-product optimization, full custom storefront design, A+ content modules, competitor analysis, and CRO consultation.");
    }
  }, [location]);

  const handleTimelineChange = (newTimeline) => {
    setTimeline(newTimeline);
    setAsapPricing(newTimeline === 'asap');
  };

  const calculatePrice = (basePrice) => {
    if (!asapPricing) return basePrice;
    const numericPrice = parseInt(basePrice.replace('$', ''));
    const rushPrice = Math.round(numericPrice * 1.5); // 50% increase for ASAP
    return `$${rushPrice}`;
  };

  const packageDetails = {
    id: 2,
    name: "Elite Package",
    subtitle: "Complete Amazon Domination",
    price: "$999",
    description: "Comprehensive solution for market leadership and complete Amazon overhaul",
    features: [
      "Up to 5 SEO-optimized Amazon Product Titles",
      "Up to 25 Benefit-driven Amazon Bullet Points",
      "Up to 5 Engaging Amazon Product Descriptions",
      "Advanced Keyword Research for up to 5 ASINs",
      "Full Custom Amazon Brand Storefront Design",
      "5 Amazon A+ Content Modules",
      "Amazon Competitor Analysis",
      "Amazon CRO Consultation"
    ],
    benefits: [
      "Complete product line optimization",
      "Professional full-scale brand storefront",
      "Comprehensive A+ content strategy",
      "Competitive market intelligence",
      "Data-driven conversion optimization",
      "Market leadership positioning",
      "Premium brand perception",
      "Maximum ROI on Amazon investment"
    ],
    deliverables: [
      "5 fully optimized product titles with advanced keyword integration",
      "25 compelling bullet points (5 per product) with benefit-focused copy",
      "5 detailed product descriptions with storytelling elements",
      "Comprehensive keyword research and strategy report",
      "Complete custom brand storefront with multiple pages",
      "5 professionally designed A+ content modules",
      "Detailed competitor analysis report",
      "CRO consultation with actionable recommendations",
      "Brand style guide and implementation documentation"
    ],
    ideal: "Established brands, market leaders, complete Amazon overhaul",
    timeline: "2-3 weeks standard delivery",
    revisions: "Up to 4 rounds of revisions included"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
              <span className="text-sm font-medium">Payment Successful!</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to Your
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Elite Package Journey
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Thank you for choosing our Elite Package! Let's achieve complete Amazon domination with our most comprehensive optimization and design solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{calculatePrice(packageDetails.price)}</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{packageDetails.timeline}</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center">
                  <Crown className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Premium Package</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What's Included in Your Elite Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The ultimate Amazon optimization solution with complete product line optimization, full storefront design, and strategic market analysis
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Features */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Features</h3>
              <ul className="space-y-3">
                {packageDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {packageDetails.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Deliverables</h3>
              <ul className="space-y-3">
                {packageDetails.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Premium Features Showcase */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <Palette className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-bold">Complete Brand Storefront</h3>
              </div>
              <p className="text-lg mb-4">
                Full custom Amazon Brand Storefront design with multiple pages, creating a premium shopping destination that builds trust and drives conversions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Multi-page storefront design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Custom graphics and layouts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Brand storytelling elements</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Product categorization</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <BarChart3 className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-bold">Strategic Analysis & CRO</h3>
              </div>
              <p className="text-lg mb-4">
                Comprehensive competitor analysis and conversion rate optimization consultation to position your brand for market leadership.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Competitor keyword analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Market positioning strategy</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Conversion optimization tips</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Performance benchmarking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* A+ Content Showcase */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">5 Premium A+ Content Modules</h3>
              <p className="text-lg">
                Professionally designed A+ content modules that tell your brand story and showcase product benefits with rich visuals and compelling copy.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                "Brand Story Module",
                "Product Comparison",
                "Feature Highlights", 
                "Lifestyle Imagery",
                "Technical Specifications"
              ].map((module, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <span className="text-sm font-medium">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Elite Project Timeline</h3>
            <div className="grid md:grid-cols-6 gap-4">
              {[
                { step: "1", title: "Discovery", description: "Brand analysis and strategy session", time: "Day 1-3" },
                { step: "2", title: "Research", description: "Advanced keyword and competitor research", time: "Day 4-6" },
                { step: "3", title: "Content", description: "Premium copy for all 5 products", time: "Day 7-12" },
                { step: "4", title: "Design", description: "Complete storefront design", time: "Day 13-16" },
                { step: "5", title: "A+ Content", description: "5 A+ content modules creation", time: "Day 17-19" },
                { step: "6", title: "Delivery", description: "Final review and delivery", time: "Day 20-21" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {phase.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{phase.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{phase.description}</p>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">{phase.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      {showForm && (
        <section id="quote-form" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Let's Get Started on Your Elite Package
                </h2>
                <p className="text-lg text-gray-600">
                  Please provide comprehensive details below so we can begin your complete Amazon transformation
                </p>
              </div>
              
              <form name="amazon-services-elite-package" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="amazon-services-elite-package" />
                <input type="hidden" name="package" value={selectedPackageName} />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      required 
                      className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      required 
                      className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                    <input 
                      type="text" 
                      name="businessName" 
                      id="businessName" 
                      required
                      className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                      placeholder="Your business/brand name"
                    />
                  </div>
                  <div>
                    <label htmlFor="asinCount" className="block text-sm font-medium text-gray-700 mb-2">Number of Products/ASINs</label>
                    <input 
                      type="number" 
                      name="asinCount" 
                      id="asinCount" 
                      value={productCount} 
                      readOnly 
                      className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 bg-gray-100 cursor-not-allowed transition-colors" 
                    />
                    <p className="mt-1 text-sm text-gray-500">Based on your selected package</p>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">Preferred Project Timeline</label>
                  <select 
                    id="timeline" 
                    name="timeline" 
                    value={timeline} 
                    onChange={(e) => handleTimelineChange(e.target.value)} 
                    className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="1week">Standard (2-3 weeks guarantee)</option>
                    <option value="asap">ASAP (2 weeks) - 50% Rush Fee</option>
                  </select>
                  {asapPricing && (
                    <p className="mt-1 text-sm text-orange-600">Rush fee will increase total cost by 50%</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="productUrls" className="block text-sm font-medium text-gray-700 mb-2">Amazon Product URLs (up to 5) *</label>
                  <textarea 
                    name="productUrls" 
                    id="productUrls" 
                    rows="6" 
                    required 
                    className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                    placeholder="Please provide the Amazon product page URLs for each product (one per line):&#10;https://www.amazon.com/dp/ASIN1&#10;https://www.amazon.com/dp/ASIN2&#10;https://www.amazon.com/dp/ASIN3&#10;https://www.amazon.com/dp/ASIN4&#10;https://www.amazon.com/dp/ASIN5"
                  ></textarea>
                  <p className="mt-1 text-sm text-gray-500">Please provide direct Amazon product page URLs, one per line</p>
                </div>

                <div className="mb-6">
                  <label htmlFor="brandInfo" className="block text-sm font-medium text-gray-700 mb-2">Comprehensive Brand Information *</label>
                  <textarea 
                    id="brandInfo" 
                    name="brandInfo" 
                    rows="6" 
                    required 
                    className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                    placeholder="Please provide detailed information about your brand including: brand story, mission, values, target audience, brand personality, existing brand guidelines, color preferences, logo/assets, and any specific brand messaging you want to emphasize..."
                  ></textarea>
                  <p className="mt-1 text-sm text-gray-500">Comprehensive brand information helps us create a cohesive storefront experience</p>
                </div>

                <div className="mb-6">
                  <label htmlFor="competitorInfo" className="block text-sm font-medium text-gray-700 mb-2">Competitor Information</label>
                  <textarea 
                    id="competitorInfo" 
                    name="competitorInfo" 
                    rows="4" 
                    className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                    placeholder="Please list your main competitors on Amazon, their ASINs if known, and what you'd like to differentiate from them..."
                  ></textarea>
                  <p className="mt-1 text-sm text-gray-500">This information helps us with competitive analysis and positioning</p>
                </div>

                <div className="mb-8">
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">Detailed Project Requirements *</label>
                  <textarea 
                    id="projectDetails" 
                    name="projectDetails" 
                    rows="8" 
                    required 
                    className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                    placeholder="Please provide comprehensive details about your products, key features, benefits, unique selling propositions, target keywords, current performance metrics, specific goals for this project, and any other requirements or preferences for the optimization and design work..."
                  ></textarea>
                  <p className="mt-1 text-sm text-gray-500">The more comprehensive information you provide, the better we can deliver exceptional results</p>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-6 rounded-lg hover:from-orange-700 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Project Details
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Support for Elite Clients</h3>
          <p className="text-lg text-gray-600 mb-6">
            As an Elite Package client, you receive priority support throughout your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@h-bns.shop" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span>Priority Email Support</span>
            </a>
            <a 
              href="tel:+13072058381" 
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              <span>Call Us: (307) 205-8381</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElitePackageLandingPage;

