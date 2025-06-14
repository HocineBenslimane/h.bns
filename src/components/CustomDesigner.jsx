import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Palette, 
  Shirt, 
  Coffee, 
  Smartphone, 
  Upload, 
  Layers, 
  Type, 
  Image as ImageIcon,
  Bell,
  CheckCircle,
  Sparkles,
  Zap,
  Star,
  Users,
  Clock,
  Gift,
  Rocket,
  Heart,
  TrendingUp,
  Crown,
  ArrowRight
} from 'lucide-react'

const CustomDesigner = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [progress, setProgress] = useState(75)
  const [subscriberCount, setSubscriberCount] = useState(1247)

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSubscriberCount(prev => prev + Math.floor(Math.random() * 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleNotifyMe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setSubscriberCount(prev => prev + 1)
      setTimeout(() => setIsSubscribed(false), 5000)
    }
  }

  const products = [
    { name: 'T-Shirts', icon: Shirt, description: 'Premium custom printed tees', popular: true },
    { name: 'Hoodies', icon: Shirt, description: 'Cozy personalized hoodies', popular: true },
    { name: 'Tank Tops', icon: Shirt, description: 'Stylish summer essentials', popular: false },
    { name: 'Mugs', icon: Coffee, description: 'Perfect morning companions', popular: true },
    { name: 'Phone Cases', icon: Smartphone, description: 'Protect with style', popular: false },
    { name: 'Posters', icon: ImageIcon, description: 'Gallery-quality prints', popular: false }
  ]

  const features = [
    {
      icon: Upload,
      title: 'Drag & Drop Upload',
      description: 'Instantly upload your designs with our lightning-fast uploader',
      status: 'Ready'
    },
    {
      icon: Layers,
      title: 'AI-Powered Tools',
      description: 'Smart design assistance and automatic optimization',
      status: 'In Development'
    },
    {
      icon: Type,
      title: 'Typography Studio',
      description: '500+ premium fonts and advanced text effects',
      status: 'Ready'
    },
    {
      icon: Palette,
      title: 'Color Intelligence',
      description: 'AI color matching and trend-based palettes',
      status: 'Coming Soon'
    }
  ]

  const benefits = [
    { icon: Zap, title: 'Lightning Fast', description: 'Design in seconds, not hours' },
    { icon: Crown, title: 'Premium Quality', description: 'Professional-grade output every time' },
    { icon: Gift, title: 'Early Bird Perks', description: '50% off first order + exclusive templates' },
    { icon: Heart, title: 'User-Friendly', description: 'No design experience required' }
  ]

  return (
    <div className="min-h-screen">
      {/* Animated Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/10 via-white to-accent/10">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Animated Badge */}
            <div className="inline-flex items-center space-x-2 mb-6">
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 animate-bounce">
                <Sparkles className="h-4 w-4 mr-2" />
                Coming Very Soon
              </Badge>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span className="font-medium">{subscriberCount.toLocaleString()}</span>
                <span>waiting</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Design Studio
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Revolution
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              The most powerful online design tool is almost here. Create stunning custom products 
              with AI-powered assistance, professional templates, and lightning-fast rendering.
            </p>

            {/* Progress Section */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Development Progress</span>
                <span className="text-sm font-bold text-primary">{progress}%</span>
              </div>
              <Progress value={progress} className="h-3 bg-gray-200">
                <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"></div>
              </Progress>
              <p className="text-xs text-gray-500 mt-2">🚀 Final testing phase - launching this month!</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Bell className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 hover:bg-gray-50">
                <Rocket className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Interactive Preview Interface */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sneak Peek: Design Studio</h2>
            <p className="text-xl text-gray-600">Experience the future of custom product design</p>
          </div>
          
          <Card className="max-w-6xl mx-auto shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center">
                    <Sparkles className="h-6 w-6 mr-2 text-primary" />
                    H.BNS Design Studio
                  </CardTitle>
                  <CardDescription className="text-base">
                    Professional design tools at your fingertips
                  </CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Live Preview
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Enhanced Design Canvas */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Design Canvas</h3>
                    <div className="flex space-x-2">
                      <Badge variant="outline" className="text-xs">
                        <Zap className="h-3 w-3 mr-1" />
                        Real-time
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        HD Quality
                      </Badge>
                    </div>
                  </div>
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
                    <div className="text-center space-y-4 group-hover:scale-105 transition-transform duration-300">
                      <div className="relative">
                        <Shirt className="h-20 w-20 mx-auto text-gray-400 group-hover:text-primary transition-colors duration-300" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Sparkles className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Your masterpiece appears here</p>
                        <p className="text-sm text-gray-500">Drag, drop, and design with ease</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Enhanced Tools Panel */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Palette className="h-5 w-5 mr-2 text-primary" />
                    Design Tools
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Smart Upload', icon: Upload, status: 'ready', color: 'green' },
                      { name: 'AI Text Effects', icon: Type, status: 'new', color: 'blue' },
                      { name: 'Color Magic', icon: Palette, status: 'popular', color: 'purple' },
                      { name: 'Layer Studio', icon: Layers, status: 'pro', color: 'orange' }
                    ].map((tool, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border hover:border-primary/30 hover:shadow-md transition-all duration-200 group cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                            <tool.icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-medium text-gray-700 group-hover:text-gray-900">{tool.name}</span>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            tool.color === 'green' ? 'border-green-200 text-green-700 bg-green-50' :
                            tool.color === 'blue' ? 'border-blue-200 text-blue-700 bg-blue-50' :
                            tool.color === 'purple' ? 'border-purple-200 text-purple-700 bg-purple-50' :
                            'border-orange-200 text-orange-700 bg-orange-50'
                          }`}
                        >
                          {tool.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Products Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Products You'll Love to Customize</h2>
            <p className="text-xl text-gray-600">Premium quality meets unlimited creativity</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden relative">
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 text-center relative">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <product.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-center space-x-1 text-sm text-gray-500">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">Premium Quality</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features Coming Your Way</h2>
            <p className="text-xl text-gray-600">Built for creators, designed for everyone</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      feature.status === 'Ready' ? 'border-green-200 text-green-700 bg-green-50' :
                      feature.status === 'In Development' ? 'border-blue-200 text-blue-700 bg-blue-50' :
                      'border-orange-200 text-orange-700 bg-orange-50'
                    }`}
                  >
                    {feature.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why You'll Love Our Design Studio</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Notify Me Section */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 via-white to-accent/5 border-primary/20 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50"></div>
          <CardContent className="relative p-12 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                <Bell className="h-10 w-10 text-white animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Join the VIP List</h3>
              <p className="text-xl text-gray-600 mb-2">
                Be among the first to experience the future of custom design
              </p>
              <p className="text-lg text-gray-500">
                Early access + 50% off your first order + exclusive templates
              </p>
            </div>
            
            {!isSubscribed ? (
              <div className="space-y-6">
                <form onSubmit={handleNotifyMe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <div className="flex-1">
                    <Label htmlFor="email" className="sr-only">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email for VIP access"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 text-lg border-2 border-primary/20 focus:border-primary"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="h-12 px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold">
                    <Crown className="mr-2 h-5 w-5" />
                    Get VIP Access
                  </Button>
                </form>
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{subscriberCount.toLocaleString()} joined</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>Launching this month</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3 text-green-600 text-xl">
                  <CheckCircle className="h-8 w-8" />
                  <span className="font-bold">Welcome to the VIP list!</span>
                </div>
                <p className="text-gray-600">
                  🎉 You'll be the first to know when we launch. Check your email for exclusive perks!
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Current Alternative */}
        <div className="text-center mt-20">
          <Card className="max-w-2xl mx-auto border-2 border-dashed border-gray-300 bg-gray-50/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Need Custom Products Right Now?</h3>
              <p className="text-gray-600 mb-6 text-lg">
                While our design studio is launching, our expert team can create 
                amazing custom products for you manually.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4" asChild>
                <a href="/#quote">
                  <Rocket className="mr-2 h-5 w-5" />
                  Request Custom Design Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CustomDesigner

