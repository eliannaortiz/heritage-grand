import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1E3A8A] text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Rajasthan, India</span>
            </div>
          </div>
          <div className="text-[#D4AF37]">
            Since 1875 • Award-Winning Heritage Hotel
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-xl' 
            : 'bg-transparent md:top-[40px] top-0'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-20">
            
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-center">
                <h1 className={cn(
                  'font-serif text-xl md:text-3xl font-bold transition-colors duration-300',
                  isScrolled ? 'text-[#8B1538]' : 'text-[#8B1538]'
                )}>
                  Heritage Grand
                </h1>
                <p className={cn(
                  'text-xs md:text-sm font-sans tracking-widest uppercase transition-colors duration-300',
                  isScrolled ? 'text-[#D4AF37]' : 'text-[#D4AF37]'
                )}>
                  Est. 1875
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'font-sans text-sm font-medium transition-all duration-300 hover:text-[#D4AF37] relative group',
                    isScrolled ? 'text-gray-700' : 'text-white'
                  )}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="primary" size="sm">
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'lg:hidden p-2 rounded-md transition-colors duration-300',
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          'lg:hidden transition-all duration-300 overflow-hidden',
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}>
          <div className="bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 font-medium text-lg hover:text-[#8B1538] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button variant="primary" className="w-full">
                  Book Your Stay
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 pt-2">
                <div className="flex items-center space-x-1">
                  <Phone size={16} />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export { Header };