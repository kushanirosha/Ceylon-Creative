import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Code, Megaphone, Smartphone, Globe, Camera } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Complete branding solutions including logo design, business cards, brochures, and marketing materials.',
    features: ['Logo Design', 'Brand Identity', 'Print Design', 'Marketing Materials']
  },
  {
    icon: Code,
    title: 'Website Development',
    description: 'Custom websites and web applications built with modern technologies and responsive design.',
    features: ['Custom Development', 'E-commerce Solutions', 'CMS Integration', 'SEO Optimization']
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns to grow your online presence and reach your target audience.',
    features: ['Social Media Marketing', 'Content Strategy', 'Email Marketing', 'Analytics & Reporting']
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications designed for optimal user experience.',
    features: ['iOS Development', 'Android Development', 'UI/UX Design', 'App Store Optimization']
  },
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Modern, user-friendly website designs that convert visitors into customers.',
    features: ['Responsive Design', 'User Experience', 'Wireframing', 'Prototyping']
  },
  {
    icon: Camera,
    title: 'Photography & Video',
    description: 'Professional photography and video production services for your marketing needs.',
    features: ['Product Photography', 'Corporate Videos', 'Event Coverage', 'Post-Production']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Core <span className="text-yellow-500">Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive creative services including branding, web design, digital marketing and advanced online.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-yellow-500">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-yellow-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}