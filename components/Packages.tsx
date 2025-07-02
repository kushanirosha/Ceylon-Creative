import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

const packages = [
  {
    name: 'Basic Package',
    price: '16,000',
    currency: 'LKR',
    description: 'Perfect for startups and small businesses',
    features: [
      'Basic Website Development',
      'Logo Design',
      'Full Account Maintenance',
      'Basic SEO Setup',
      'Social Media Setup',
      'Contact Form Integration',
      'Mobile Responsive Design',
      '24/7 Basic Support',
      'SSL Certificate',
      'Basic Analytics Setup'
    ],
    popular: false,
    buttonText: 'Choose Basic Package'
  },
  {
    name: 'Premium Package',
    price: '25,000',
    currency: 'LKR',
    description: 'Most popular choice for growing businesses',
    features: [
      'Advanced Website Development',
      'Complete Brand Identity',
      'Full Account Maintenance',
      'Advanced SEO Optimization',
      'Social Media Management',
      'E-commerce Integration',
      'Custom Animations',
      'Priority Support',
      'Advanced Analytics',
      'Content Management System',
      'Email Marketing Setup',
      'Performance Optimization'
    ],
    popular: true,
    buttonText: 'Choose Premium Package'
  },
  {
    name: 'Enterprise Package',
    price: '35,000',
    currency: 'LKR',
    description: 'Comprehensive solution for large businesses',
    features: [
      'Custom Enterprise Solution',
      'Advanced Branding Package',
      'Dedicated Account Manager',
      'Enterprise SEO Strategy',
      'Multi-platform Integration',
      'Custom Web Applications',
      'Advanced Security Features',
      '24/7 Premium Support',
      'Custom Analytics Dashboard',
      'API Development',
      'Database Management',
      'Performance Monitoring',
      'Backup & Recovery',
      'Training & Documentation'
    ],
    popular: false,
    buttonText: 'Choose Enterprise Package'
  }
];

export default function Packages() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our <span className="text-yellow-500">Packages</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the right package to elevate your business needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-yellow-500 shadow-xl' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">{pkg.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-600 ml-2">{pkg.currency}</span>
                </div>
                <CardDescription className="mt-4 text-gray-600">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${pkg.popular 
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-black' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                  } font-semibold py-3`}
                >
                  {pkg.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}