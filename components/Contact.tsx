'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to elevate your digital presence? Contact us today for a consultation and let's bring your vision to life.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send Us a <span className="text-yellow-500">Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select a Service
                    </label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-design">Web Design</SelectItem>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="graphic-design">Graphic Design</SelectItem>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                        <SelectItem value="branding">Branding</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project...
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={5}
                      className="w-full"
                      placeholder="Describe your project requirements"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="mt-8 lg:mt-0">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+94 77 123 4567</p>
                    <p className="text-gray-600">+94 11 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@ceyloncreative.lk</p>
                    <p className="text-gray-600">hello@ceyloncreative.lk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">123 Galle Road,</p>
                    <p className="text-gray-600">Colombo 03, Sri Lanka</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}