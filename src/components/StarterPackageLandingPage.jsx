import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle, Star, TrendingUp, Users, Award, ArrowRight, Zap, Target, Shield, Clock, DollarSign } from 'lucide-react';

const StarterPackageLandingPage = () => {
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);
  const [timeline, setTimeline] = useState('1week');
  const [asapPricing, setAsapPricing] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const [selectedPackageName, setSelectedPackageName] = useState('Starter Package');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paymentSuccess = params.get('payment_success');
    const packageName = params.get('package');

    if (paymentSuccess === 'true' && packageName) {
      setShowForm(true);
      setSelectedPackageName(packageName);
      // Pre-fill ASIN count based on package name
      if (packageName === 'Starter Package') setProductCount(1);
      // Scroll to form
      setTimeout(() => {
        document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    // Add meta tags for SEO
    document.title = "Starter Package - Amazon SEO Copywriting | H.BNS LLC";
    
    // Update meta description if it exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Essential Amazon SEO optimization for single products. Get SEO-optimized titles, bullet points, and descriptions to boost your Amazon listing visibility and conversions.");
    }
  }, [location]);

  const handleTimelineChange = (newTimeline) => {
    setTimeline(newTimeline);
    setAsapPricing(newTimeline === 'asap');
  };

  const calculatePrice = (basePrice) => {
    if (!asapPricing || basePrice === "Custom Pricing") return basePrice;
    const numericPrice = parseInt(basePrice.replace('$', ''));
    const rushPrice = Math.round(numericPrice * 1.5); // 50% increase for ASAP
    return `$${rushPrice}`;
  };

  const packageDetails = {
    id: 0,
    name: "Starter Package",
    subtitle: "Essential Amazon SEO Visibility",
    price: "$199",
    description: "Perfect for new sellers or single product optimization",
    features: [
      "1 SEO-optimized Amazon Product Title",
      "5 Benefit-driven Amazon Bullet Points", 
      "1 Engaging Amazon Product Description",
      "Keyword Research for 1 ASIN"
    ],
    benefits: [
      "Improved search visibility on Amazon",
      "Higher click-through rates from search results",
      "Better conversion rates with compelling copy",
      "Professional product presentation",
      "Competitive keyword targeting"
    ],
    deliverables: [
      "Complete product title optimization",
      "5 persuasive bullet points highlighting key benefits",
      "Detailed product description with SEO keywords",
      "Keyword research report with target keywords",
      "Implementation guidelines"
    ],
    ideal: "Single product optimization, new product launches, budget-conscious sellers",
    timeline: "1 week standard delivery",
    revisions: "Up to 2 rounds of revisions included"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
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
                Starter Package Journey
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Thank you for choosing our Starter Package! Let's transform your Amazon listing into a high-converting sales machine.
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
            </div>
          </div>
        </div>
      </section>

      {/* Package Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What's Included in Your Starter Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to optimize your single Amazon product listing for maximum visibility and conversions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Features */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Features</h3>
              <ul className="space-y-3">
                {packageDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {packageDetails.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Deliverables</h3>
              <ul className="space-y-3">
                {packageDetails.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Project Timeline</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Project Kickoff", description: "We review your requirements and begin research", time: "Day 1" },
                { step: "2", title: "Keyword Research", description: "Comprehensive keyword analysis for your product", time: "Day 2-3" },
                { step: "3", title: "Content Creation", description: "Crafting optimized titles, bullets, and descriptions", time: "Day 4-5" },
                { step: "4", title: "Review & Delivery", description: "Final review and delivery of all materials", time: "Day 6-7" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {phase.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{phase.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{phase.description}</p>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{phase.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      {showForm && (
        <section id="quote-form" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Let's Get Started on Your Starter Package
                </h2>
                <p className="text-lg text-gray-600">
                  Please provide the details below so we can begin optimizing your Amazon listing
                </p>
              </div>
              
              <form 
                name="amazon-services-starter-package" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                action="/success"
              >
                <input type="hidden" name="form-name" value="amazon-services-starter-package" />
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
                      className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
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
                      className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                    <input 
                      type="text" 
                      name="businessName" 
                      id="businessName" 
                      className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                      placeholder="Your business name (optional)"
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
                    className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="1week">Standard (1 week guarantee)</option>
                    <option value="asap">ASAP (1-3 days) - 50% Rush Fee</option>
                  </select>
                  {asapPricing && (
                    <p className="mt-1 text-sm text-orange-600">Rush fee will increase total cost by 50%</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="productUrl" className="block text-sm font-medium text-gray-700 mb-2">Amazon Product URL *</label>
                  <input 
                    type="url" 
                    name="productUrl" 
                    id="productUrl" 
                    required 
                    className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                    placeholder="https://www.amazon.com/dp/YOUR-ASIN"
                  />
                  <p className="mt-1 text-sm text-gray-500">Please provide the direct Amazon product page URL</p>
                </div>

                <div className="mb-8">
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">Project Details / Specific Requirements *</label>
                  <textarea 
                    id="projectDetails" 
                    name="projectDetails" 
                    rows="6" 
                    required 
                    className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                    placeholder="Please describe your product, target audience, key features, benefits, and any specific requirements or preferences for the optimization..."
                  ></textarea>
                  <p className="mt-1 text-sm text-gray-500">The more details you provide, the better we can optimize your listing</p>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help or Have Questions?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Our team is here to support you throughout your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@h-bns.shop" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span>Email Support</span>
            </a>
            <a 
              href="tel:+13072058381" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>Call Us: (307) 205-8381</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StarterPackageLandingPage;

