/* eslint-disable react/no-unescaped-entities */
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <div>
      <div className="bg-white py-6 flex justify-center items-center space-x-8">
        <div className="text-center">
          <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.695v-3.624h3.124V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.624h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </div>
          <p className="text-gray-700 font-semibold">Like Us On Facebook</p>
          <p className="text-gray-500 text-sm">Facebook</p>
        </div>
        <div className="text-center">
          <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.821-.261.821-.577v-2.234c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.507 11.507 0 0112 5.803c1.088.003 2.18.147 3.204.431 2.293-1.552 3.301-1.23 3.301-1.23.653 1.653.242 2.873.118 3.176.768.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.37.823 1.102.823 2.222v3.293c0 .319.218.694.824.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
          <p className="text-gray-700 font-semibold">Follow Us on Tik Tok</p>
          <p className="text-gray-500 text-sm">Join the Community</p>
        </div>
        <div className="text-center">
          <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.278.261 2.128.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.078 2.126 1.384.785.297 1.635.498 2.913.558 1.28.058 1.606.072 4.947.072s3.667-.014 4.947-.072c1.278-.06 2.128-.261 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.078-1.336 1.384-2.126.297-.785.498-1.635.558-2.913.058-1.28.072-1.606.072-4.947s-.014-3.667-.072-4.947c-.06-1.278-.261-2.128-.558-2.913-.306-.788-.718-1.459-1.384-2.126C21.319.935 20.65.633 19.86.326c-.785-.297-1.635-.498-2.913-.558C16.667.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </div>
          <p className="text-gray-700 font-semibold">Follow Us on Instagram</p>
          <p className="text-gray-500 text-sm">Latest news and updates</p>
        </div>
        <div className="text-center">
          <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </div>
          <p className="text-gray-700 font-semibold">Connect with LinkedIn</p>
          <p className="text-gray-500 text-sm">Connect On LinkedIn</p>
        </div>
      </div>
      
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
    </div>
  );
}