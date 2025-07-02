'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Creative{' '}
              <span className="text-yellow-500">Digital</span>
              <br />
              Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:max-w-xl sm:mx-auto lg:mx-0">
              We're a creative agency focused on digital experience design.
              Our team combines strategy, creativity and technology to create custom graphic design solutions.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
                  <Play className="mr-2 h-5 w-5" />
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-yellow-500 rounded-lg overflow-hidden aspect-square">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Creative digital workspace"
                />
                <div className="absolute inset-0 bg-yellow-500 mix-blend-multiply opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}