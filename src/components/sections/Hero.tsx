import React from 'react';
import { ChevronDown, Star, Award, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.4), rgba(139, 21, 56, 0.6)), url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Main Headline */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Where <span className="text-[#D4AF37]">Heritage</span> Meets
          <br />
          Modern <span className="text-[#D4AF37]">Luxury</span>
        </h1>

        {/* Subheading */}
        <p className="font-sans text-lg md:text-xl lg:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
          Experience 150 years of royal hospitality in our meticulously restored palace, 
          where every room tells a story and every moment becomes a cherished memory.
        </p>

        {/* Heritage Note */}
        <p className="font-serif text-base md:text-lg text-[#D4AF37] mb-12 italic">
          "Four generations of the Sharma family welcome you to our ancestral home"
        </p>

        {/* Trust Badges - Moved below heritage note */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-8 opacity-90">
          <div className="flex items-center space-x-2">
            <Star className="text-[#D4AF37]" size={18} />
            <span className="text-sm font-sans">5-Star Heritage</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30"></div>
          <div className="flex items-center space-x-2">
            <Award className="text-[#D4AF37]" size={18} />
            <span className="text-sm font-sans">Award Winner</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30"></div>
          <div className="flex items-center space-x-2">
            <Calendar className="text-[#D4AF37]" size={18} />
            <span className="text-sm font-sans">Est. 1875</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <Button 
            variant="primary" 
            size="lg"
            className="w-full sm:w-auto min-w-48 text-lg py-4"
          >
            Book Your Royal Stay
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto min-w-48 text-lg py-4 border-white text-white hover:bg-white hover:text-[#8B1538]"
          >
            Explore Our Heritage
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-[#D4AF37] mb-2">150+</div>
            <div className="text-sm md:text-base font-sans text-white/80">Years of Legacy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-[#D4AF37] mb-2">45</div>
            <div className="text-sm md:text-base font-sans text-white/80">Luxury Suites</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-[#D4AF37] mb-2">5</div>
            <div className="text-sm md:text-base font-sans text-white/80">Dining Venues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-[#D4AF37] mb-2">98%</div>
            <div className="text-sm md:text-base font-sans text-white/80">Guest Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-sans tracking-wide">Discover Our Story</span>
          <ChevronDown size={24} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-32 bg-gradient-to-b from-[#D4AF37] to-transparent opacity-30 hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-10 w-2 h-32 bg-gradient-to-t from-[#D4AF37] to-transparent opacity-30 hidden lg:block"></div>
    </section>
  );
};

export { Hero };