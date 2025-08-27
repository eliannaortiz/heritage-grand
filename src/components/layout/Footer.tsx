import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Crown, Star, Award, Heart, Clock, Wifi, Car, Coffee, Bath, Users, Calendar, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Room Service', icon: Coffee },
    { name: 'Concierge', icon: Crown },
    { name: 'Valet Parking', icon: Car },
    { name: 'Free WiFi', icon: Wifi },
    { name: 'Spa & Wellness', icon: Heart },
    { name: 'Airport Transfer', icon: Car }
  ];

  const experiences = [
    'Heritage Walking Tours',
    'Royal Dining Experiences',
    'Cultural Immersion Programs',
    'Wellness & Spa Retreats',
    'Desert Safari Adventures',
    'Photography Workshops'
  ];

  const policies = [
    'Privacy Policy',
    'Terms & Conditions',
    'Cancellation Policy',
    'Guest Policies',
    'Accessibility',
    'Sustainability'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  const awards = [
    'Best Heritage Hotel 2024',
    'Excellence in Hospitality',
    'Sustainable Tourism Leader',
    'Cultural Preservation Award'
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1E3A8A] to-[#8B1538] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Hotel Information */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-serif text-3xl font-bold text-[#D4AF37] mb-2">Heritage Grand</h3>
              <p className="text-sm font-sans tracking-widest uppercase opacity-80">Est. 1875</p>
            </div>
            
            <p className="text-white/90 leading-relaxed mb-6">
              Experience 150 years of royal hospitality in our meticulously restored palace, 
              where heritage meets modern luxury in the heart of Rajasthan.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-white/90">
                <Phone size={18} className="mr-3 text-[#D4AF37]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-white/90">
                <Mail size={18} className="mr-3 text-[#D4AF37]" />
                <span>info@heritagegrand.com</span>
              </div>
              <div className="flex items-start text-white/90">
                <MapPin size={18} className="mr-3 text-[#D4AF37] mt-1 flex-shrink-0" />
                <span>Palace Road, Heritage District<br />Rajasthan 302001, India</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`bg-white/10 p-3 rounded-full transition-all duration-300 hover:bg-white/20 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold text-[#D4AF37] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-[#D4AF37] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h5 className="font-serif text-lg font-semibold text-[#D4AF37] mt-8 mb-4">Hotel Services</h5>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center text-sm text-white/80">
                  <service.icon size={14} className="mr-2 text-[#D4AF37]" />
                  <span>{service.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="font-serif text-xl font-bold text-[#D4AF37] mb-6">Experiences</h4>
            <ul className="space-y-3">
              {experiences.map((experience, index) => (
                <li key={index} className="text-white/90 text-sm flex items-center">
                  <Crown size={14} className="mr-3 text-[#D4AF37] flex-shrink-0" />
                  {experience}
                </li>
              ))}
            </ul>

            <h5 className="font-serif text-lg font-semibold text-[#D4AF37] mt-8 mb-4">Awards & Recognition</h5>
            <ul className="space-y-2">
              {awards.map((award, index) => (
                <li key={index} className="text-white/80 text-sm flex items-center">
                  <Award size={12} className="mr-2 text-[#D4AF37] flex-shrink-0" />
                  {award}
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Newsletter */}
          <div>
            <h4 className="font-serif text-xl font-bold text-[#D4AF37] mb-6">Policies</h4>
            <ul className="space-y-3 mb-8">
              {policies.map((policy, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/90 hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                  >
                    {policy}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="bg-white/10 p-6 rounded-lg">
              <h5 className="font-serif text-lg font-semibold text-[#D4AF37] mb-3">Heritage Stories</h5>
              <p className="text-white/80 text-sm mb-4">
                Subscribe to receive exclusive heritage stories, special offers, and event updates.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-[#8B1538] px-4 py-2 rounded-lg font-semibold hover:bg-[#B8860B] transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © {currentYear} Heritage Grand Hotel. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Preserving heritage, creating memories since 1875.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 text-white/60">
              <div className="flex items-center text-xs">
                <Star size={14} className="mr-1 text-[#D4AF37]" />
                <span>5-Star Heritage Hotel</span>
              </div>
              <div className="flex items-center text-xs">
                <Award size={14} className="mr-1 text-[#D4AF37]" />
                <span>Government Certified</span>
              </div>
              <div className="flex items-center text-xs">
                <Heart size={14} className="mr-1 text-[#D4AF37]" />
                <span>Family Owned</span>
              </div>
            </div>

            {/* Language & Currency */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-white/80 text-sm">
                <Globe size={16} className="mr-2 text-[#D4AF37]" />
                <select className="bg-transparent border-none text-white/80 focus:outline-none cursor-pointer">
                  <option value="en" className="bg-[#8B1538]">English</option>
                  <option value="hi" className="bg-[#8B1538]">हिंदी</option>
                </select>
              </div>
              <div className="text-white/80 text-sm">
                <span className="text-[#D4AF37]">₹</span> INR
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-2 bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37]"></div>
    </footer>
  );
};

export { Footer };