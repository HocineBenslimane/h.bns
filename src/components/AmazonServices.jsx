import React, { useState, useEffect } from 'react';
import { CheckCircle, Star, TrendingUp, Users, Award, ArrowRight, Zap, Target, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Amazon Services component with SEO optimization
const AmazonServices = () => {
  const [activePackage, setActivePackage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [timeline, setTimeline] = useState('1week');
  const [asapPricing, setAsapPricing] = useState(false);
  const [isCustomQuote, setIsCustomQuote] = useState(false);
  const [productCount, setProductCount] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    
    // Add meta tags for SEO
    document.title = "Amazon SEO Copywriting & Brand Storefront Design Services | H.BNS LLC";
    
    // Update meta description if it exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional Amazon copywriting services and brand storefront design to boost your product visibility, conversion rates, and sales. SEO-optimized product titles, bullet points, and descriptions.");
    }
  }, []);

  const handlePackageSelect = (pkg) => {
    // Redirect to Stripe checkout
    let stripeLink = '';
    let redirectPath = '';

    if (pkg.id === 0) {
      stripeLink = 'https://buy.stripe.com/14A3coe24dP95OCcpB24001'; // Starter Package
      redirectPath = '/starter-package';
    } else if (pkg.id === 1) {
      stripeLink = 'https://buy.stripe.com/bJe7sEgac3avel8fBN24002'; // Growth Package
      redirectPath = '/growth-package';
    } else if (pkg.id === 2) {
      stripeLink = 'https://buy.stripe.com/28EdR28HK5iD90O2P124003'; // Elite Package
      redirectPath = '/elite-package';
    }

    if (stripeLink) {
      // For testing, we can simulate the redirect to the landing page directly
      // In a real scenario, Stripe would redirect back to this URL after payment
      window.location.href = `${stripeLink}?success_url=${window.location.origin}${redirectPath}?payment_success=true&package=${encodeURIComponent(pkg.name)}&cancel_url=${window.location.origin}/amazon-services`;
    }
  };

  const handleCustomQuote = () => {
    const customPackage = {
      id: 'custom',
      name: "Custom Solution",
      subtitle: "Tailored to Your Needs",
      price: "Custom Pricing",
      description: "Fully customized solution for your specific requirements"
    };
    
    setSelectedPackage(customPackage);
    setShowQuoteForm(true);
    setTimeline('1week');
    setAsapPricing(false);
    setIsCustomQuote(true);
    setProductCount(1); // Default to 1, but user can change
    
    // Scroll to form
    setTimeout(() => {
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getAsinCountFromPackage = (pkg) => {
    // Extract ASIN count from package features
    if (pkg.id === 0) return 1; // Starter: 1 ASIN
    if (pkg.id === 1) return 3; // Growth: up to 3 ASINs
    if (pkg.id === 2) return 5; // Elite: up to 5 ASINs
    return 1; // Default
  };

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

  const packages = [
    {
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
      ideal: "Single product optimization, new product launches, budget-conscious sellers",
      color: "from-blue-500 to-purple-600",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 1,
      name: "Growth Package",
      subtitle: "Enhanced Amazon Presence",
      price: "$499",
      description: "Expand your reach with multiple product optimization",
      features: [
        "Up to 3 SEO-optimized Amazon Product Titles",
        "Up to 15 Benefit-driven Amazon Bullet Points",
        "Up to 3 Engaging Amazon Product Descriptions",
        "In-depth Keyword Research for up to 3 ASINs",
        "Basic Amazon Brand Storefront Header Design",
        "2 Amazon A+ Content Modules"
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
        "Up to 5 SEO-optimized Amazon Product Titles",
        "Up to 25 Benefit-driven Amazon Bullet Points",
        "Up to 5 Engaging Amazon Product Descriptions",
        "Advanced Keyword Research for up to 5 ASINs",
        "Full Custom Amazon Brand Storefront Design",
        "5 Amazon A+ Content Modules",
        "Amazon Competitor Analysis",
        "Amazon CRO Consultation"
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
              Transform Your Amazon Listings
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Into High-Converting Sales Machines
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Skyrocket your visibility, conversions, and revenue with our SEO-optimized Amazon product titles, bullet points, descriptions, and stunning brand storefront designs
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
              Why Choose H.BNS LLC for Your Amazon SEO Success?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just create content—we engineer Amazon marketplace success through strategic SEO optimization and compelling brand storefront design
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-8 h-8 text-white" />,
                title: "Amazon-Centric Expertise",
                description: "Deep understanding of Amazon's A9 algorithm and marketplace dynamics for maximum product visibility",
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
              Comprehensive Amazon SEO solutions to maximize your marketplace performance
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
                <h3 className="text-2xl font-bold text-gray-900">High-Converting Amazon SEO Copywriting</h3>
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
                <h3 className="text-2xl font-bold text-gray-900">Captivating Amazon Brand Storefront Design</h3>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Create a stunning and cohesive brand presence on Amazon with custom storefronts and A+ content that tells your brand story.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Custom Brand Storefronts",
                    description: "Design and development of a unique Amazon Brand Store that showcases your entire product catalog"
                  },
                  {
                    title: "Amazon A+ Content",
                    description: "Rich media content (images, videos, comparison charts) that enhances product detail pages and boosts conversions"
                  },
                  {
                    title: "Enhanced Brand Content (EBC)",
                    description: "For registered brands, elevate your product descriptions with visually engaging layouts"
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

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Amazon Success Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect plan to elevate your Amazon presence, from essential SEO to complete brand domination.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between transform transition-all duration-300 hover:scale-105 ${pkg.popular ? 'border-4 border-purple-500' : 'border border-gray-200'}`}
              >
                {pkg.popular && (
                  <span className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl">Popular</span>
                )}
                <div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4 text-center">{pkg.subtitle}</p>
                  <p className="text-4xl font-bold text-gray-900 mb-6 text-center">{pkg.price}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handlePackageSelect(pkg)}
                  className={`mt-auto w-full py-3 rounded-lg font-semibold text-lg transition-all duration-300
                    ${pkg.popular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  Select {pkg.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solution Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Something Custom?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            For unique projects, extensive product catalogs, or specific requirements, we offer
            fully customized solutions tailored to your vision.
          </p>
          <button
            onClick={handleCustomQuote}
            className="group bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Custom Quote
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Quote Form Section (conditionally rendered) */}
      {showQuoteForm && (
        <section id="quote" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isCustomQuote ? "Complete Your Custom Solution Order" : `Complete Your ${selectedPackage?.name} Order`}
            </h2>
            <form name="amazon-services-quote" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">
              <input type="hidden" name="form-name" value="amazon-services-quote" />
              <input type="hidden" name="package-name" value={selectedPackage?.name || "Custom Solution"} />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name (Optional)</label>
                <input
                  type="text"
                  name="businessName"
                  id="businessName"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="package" className="block text-sm font-medium text-gray-700">Selected Package</label>
                <input
                  type="text"
                  name="package"
                  id="package"
                  value={selectedPackage?.name || "Custom Solution"}
                  readOnly={true}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="asinCount" className="block text-sm font-medium text-gray-700">Number of Products/ASINs</label>
                <input
                  type="number"
                  name="asinCount"
                  id="asinCount"
                  value={isCustomQuote ? productCount : getAsinCountFromPackage(selectedPackage)}
                  onChange={(e) => isCustomQuote && setProductCount(e.target.value)}
                  readOnly={!isCustomQuote}
                  className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 ${!isCustomQuote ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                />
                {!isCustomQuote && (
                  <p className="mt-2 text-sm text-gray-500">Based on selected package. For custom quantities, use 'Request Custom Quote'.</p>
                )}
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">Preferred Project Timeline</label>
                <select
                  name="timeline"
                  id="timeline"
                  value={timeline}
                  onChange={(e) => handleTimelineChange(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="1week">Standard (1 week guarantee)</option>
                  <option value="asap">ASAP (1-3 days) - 50% Rush Fee</option>
                </select>
              </div>

              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700">Project Details / Specific Requirements</label>
                <textarea
                  name="projectDetails"
                  id="projectDetails"
                  rows="4"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Hire Now
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  );
};

export default AmazonServices;


