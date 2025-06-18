import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, Clock, ArrowRight } from 'lucide-react'

const SupportOverview = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for professional custom illustrations and design services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Mail className="h-6 w-6" />
              </div>
              <CardTitle>Email Support</CardTitle>
              <CardDescription>support@h-bns.shop</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Response within 24 hours</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Phone className="h-6 w-6" />
              </div>
              <CardTitle>Phone Support</CardTitle>
              <CardDescription>+1 (307) 205-8381</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Mon-Fri, 9 AM - 6 PM EST</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Clock className="h-6 w-6" />
              </div>
              <CardTitle>Business Hours</CardTitle>
              <CardDescription>Monday - Friday</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">9:00 AM - 6:00 PM EST</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg">
            <a href="/support" className="flex items-center">
              Contact Support <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SupportOverview

