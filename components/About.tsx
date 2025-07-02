import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Clock, Globe } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Happy Clients', value: '250+' },
  { icon: Award, label: 'Projects Completed', value: '500+' },
  { icon: Clock, label: 'Years Experience', value: '8+' },
  { icon: Globe, label: 'Countries Served', value: '15+' }
];

const services = [
  {
    title: 'Social Media Management',
    description: 'Comprehensive social media strategy and content management across all platforms.'
  },
  {
    title: 'Branding Solutions',
    description: 'Complete brand identity development from concept to implementation.'
  },
  {
    title: 'Graphic Design',
    description: 'Creative design solutions for both digital and print media requirements.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              About <span className="text-yellow-500">Ceylon Creative</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Ceylon Creative offers top-tier service quality, ensuring exceptional digital experiences that help your brand stand out in the digital landscape. Our team combines creativity with cutting-edge technology to deliver comprehensive solutions that drive results.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our team of creative professionals brings together expertise in brand management, web development, and digital marketing to provide comprehensive solutions that drive results for our clients.
            </p>

            {/* Services Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4">
              {services.map((service, index) => (
                <Card key={index} className="border-l-4 border-l-yellow-500 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Figures That <span className="text-yellow-500">Speak for Themselves</span>
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-yellow-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <Card className="mt-8 bg-yellow-500 text-black">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">
                  To deliver innovative digital solutions that empower businesses to thrive in the digital age through creativity, technology, and strategic thinking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}