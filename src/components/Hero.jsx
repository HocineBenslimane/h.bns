import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Palette, Star, Users, Award, ArrowRight, Lightbulb, Eye, Zap, Heart, CheckCircle, Sparkles, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Hook */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Trusted by 500+ Happy Clients
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Turn Your <span className="text-primary">Vision</span> Into 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                    Stunning Art
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From concept to creation, we bring your ideas to life with professional 
                  custom illustrations that captivate, inspire, and deliver results.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">5.0 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">500+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Professional Quality</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700" asChild>
                  <Link to="/quote">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <a href="https://www.behance.net/djawedbns" target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2 h-4 w-4" />
                    View Our Work
                  </a>
                </Button>
              </div>
            </div>

            {/* Visual Hook - Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Unique Vision</h3>
                  <p className="text-gray-600 text-sm">Every project is crafted with your unique brand and story in mind</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Guaranteed Quality</h3>
                  <p className="text-gray-600 text-sm">Professional results with unlimited revisions until perfect</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-gray-600 text-sm">Quick turnaround times without compromising on quality</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Touch</h3>
                  <p className="text-gray-600 text-sm">Direct collaboration with experienced artists who care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Create
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From logos to characters, book covers to branding packages - we bring your creative vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Logo Design</h3>
              <p className="text-gray-600 mb-4">Professional logos that represent your brand identity</p>
              <div className="text-blue-600 font-medium group-hover:text-blue-700">Starting at $299</div>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Character Design</h3>
              <p className="text-gray-600 mb-4">Unique characters for games, books, and marketing</p>
              <div className="text-purple-600 font-medium group-hover:text-purple-700">Starting at $399</div>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Book Covers</h3>
              <p className="text-gray-600 mb-4">Eye-catching covers that sell your story</p>
              <div className="text-green-600 font-medium group-hover:text-green-700">Starting at $249</div>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Illustrations</h3>
              <p className="text-gray-600 mb-4">Bespoke artwork for any purpose or medium</p>
              <div className="text-orange-600 font-medium group-hover:text-orange-700">Starting at $199</div>
            </div>

            <div className="group bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Branding Packages</h3>
              <p className="text-gray-600 mb-4">Complete visual identity solutions</p>
              <div className="text-pink-600 font-medium group-hover:text-pink-700">Starting at $799</div>
            </div>

            <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Art</h3>
              <p className="text-gray-600 mb-4">Modern digital illustrations and graphics</p>
              <div className="text-indigo-600 font-medium group-hover:text-indigo-700">Starting at $149</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-primary via-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Ready to Bring Your Vision to Life?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join 500+ satisfied clients who've transformed their ideas into stunning visual art. 
                Get your free consultation today!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="xl" 
                className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-lg transform transition-all hover:scale-105 group"
                asChild
              >
                <Link to="/quote">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-8 rounded-full"
                asChild
              >
                <a href="https://www.behance.net/djawedbns" target="_blank" rel="noopener noreferrer">
                  View Portfolio
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">24hrs</div>
                <div className="text-white/80 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-white/80 text-sm">Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-white/80 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero

