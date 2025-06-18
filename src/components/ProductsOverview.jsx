import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Palette, BookOpen, Package, Sparkles, ArrowRight } from 'lucide-react'

const ProductsOverview = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Logo Design",
      description: "Professional brand identity creation",
      price: "Starting at $299"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Character Design", 
      description: "Unique character illustrations",
      price: "Starting at $399"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Book Covers",
      description: "Eye-catching cover designs",
      price: "Starting at $249"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Custom Illustrations",
      description: "Tailored artwork for any project",
      price: "Starting at $199"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Create
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From logos to characters, book covers to branding packages - we bring your creative vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary mb-4">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="mr-4">
            <a href="/products" className="flex items-center">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg">
            <a href="/quote">Get Custom Quote</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProductsOverview

