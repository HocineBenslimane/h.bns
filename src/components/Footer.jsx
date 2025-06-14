import { Link } from 'react-router-dom'
import { Palette, Mail, Phone, MapPin, ExternalLink, Instagram, Send, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Company Info - Takes up more space */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-primary to-purple-600 rounded-xl">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">H.BNS</span>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Professional custom illustration services that bring your creative vision to life with 
                <span className="text-primary font-semibold"> quality, precision, and artistic excellence</span>.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-4 w-4 text-gray-400 group-hover:text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm">30 N Gould St Ste N, Sheridan, WY 82801 USA</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-4 w-4 text-gray-400 group-hover:text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm">+1 (307) 205-8381</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4 text-gray-400 group-hover:text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm">support@h-bns.shop</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8">
              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg relative">
                  Services
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
                </h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Custom Illustrations', link: '/#quote' },
                    { name: 'Logo Design', link: '/#quote' },
                    { name: 'Character Design', link: '/#quote' },
                    { name: 'Book Covers', link: '/#quote' },
                    { name: 'Branding Packages', link: '/#quote' }
                  ].map((item, index) => (
                    <li key={index}>
                      <Link 
                        to={item.link} 
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg relative">
                  Quick Links
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
                </h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Home', link: '/' },
                    { name: 'Products', link: '/products' },
                    { name: 'Merch', link: '/merch' },
                    { name: 'Support', link: '/support' },
                    { name: 'FAQ', link: '/faq' }
                  ].map((item, index) => (
                    <li key={index}>
                      <Link 
                        to={item.link} 
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a 
                      href="https://hbnsllc.gumroad.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      Gumroad Store
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-2 relative">
                  Stay Connected
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
                </h3>
                <p className="text-gray-400 text-sm mb-4">Get updates on new products and exclusive offers</p>
              </div>
              
              {/* Newsletter Form */}
              <form className="space-y-3">
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-primary focus:ring-primary/20 pr-12 h-11"
                  />
                  <Button 
                    type="submit" 
                    size="sm"
                    className="absolute right-1 top-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white h-9 px-3"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
              
              {/* Social Links */}
              <div className="space-y-3">
                <h4 className="text-white font-medium text-sm">Follow Us</h4>
                <a 
                  href="https://www.instagram.com/hbns_llc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 transition-all">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <span className="text-sm">@hbns_llc</span>
                </a>
              </div>

              {/* Legal Links */}
              <div className="space-y-2 pt-4 border-t border-gray-800">
                <h4 className="text-white font-medium text-sm">Legal</h4>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <Link to="/legal" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Terms
                  </Link>
                  <Link to="/legal" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Privacy
                  </Link>
                  <Link to="/policies" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Returns
                  </Link>
                  <Link to="/policies" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Refunds
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 H.BNS LLC. All rights reserved. Crafted with ❤️ for creative minds.
            </div>
            <div className="flex items-center space-x-4">
              <img 
                src="/hbns-logo-footer.png" 
                alt="H.BNS LLC Logo" 
                className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity" 
              />
              <div className="text-xs text-gray-500">
                Professional Illustration Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer