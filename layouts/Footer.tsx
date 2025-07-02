import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Ceylon <span className="text-yellow-500">Creative</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We're a creative agency focused on digital experience design, combining strategy, creativity and technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Graphic Design</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Branding</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-yellow-500 transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-yellow-500 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500" />
                <span>+94 77 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500" />
                <span>info@ceyloncreative.lk</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span>123 Galle Road, Colombo 03</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ceylon Creative. All rights reserved. | Designed with ❤️ in Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}