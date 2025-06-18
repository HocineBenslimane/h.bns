import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Star, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const QuoteFormOverview = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get Your Custom Quote
            </h2>
          </div>
          <div className="flex items-center justify-center mb-4">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-lg text-gray-600 ml-2">Free consultation included!</span>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your vision with us and receive a detailed quote within 24 hours. No commitment required.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center">
              <Sparkles className="h-5 w-5 mr-2" />
              Contact Information
            </CardTitle>
            <CardDescription>
              Get started with your custom project today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form 
              name="homepage-contact" 
              method="POST" 
              data-netlify="true" 
              action="/quote"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="homepage-contact" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g., John Smith"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number (optional)
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="flex-1">
                  Get Detailed Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button type="button" variant="outline" size="lg" className="flex-1">
                  <a href="/quote" className="w-full">View Full Form</a>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default QuoteFormOverview

