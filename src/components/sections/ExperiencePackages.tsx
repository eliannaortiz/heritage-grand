import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Calendar, Camera, Crown, Sparkles, Heart, Award, Compass, Sunrise, Music, Palette, Leaf, Mountain } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';
import { BookingForm } from '../ui/BookingForm';

const ExperiencePackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingPackage, setBookingPackage] = useState(null);

  const packages = [
    {
      id: 1,
      name: 'Royal Heritage Walking Tour',
      category: 'Heritage',
      duration: '3 hours',
      groupSize: '2-12 people',
      price: 500,
      originalPrice: 650,
      difficulty: 'Easy',
      description: 'Journey through 150 years of royal history with our expert heritage guide. Explore hidden chambers, royal artifacts, and hear fascinating stories of maharajas and their legacy.',
      highlights: ['Royal Chambers Tour', 'Artifact Collection', 'Heritage Photography', 'Traditional Welcome', 'Royal Stories', 'Vintage Photo Session'],
      includes: ['Expert Heritage Guide', 'Welcome Refreshments', 'Photography Assistance', 'Historical Documentation', 'Souvenir Heritage Map'],
      schedule: ['10:00 AM - Welcome & Introduction', '10:30 AM - Palace Architecture Tour', '11:30 AM - Royal Chambers Visit', '12:30 PM - Heritage Photography', '1:00 PM - Conclusion & Refreshments'],
      images: [
        'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Most Popular',
      badgeColor: 'bg-green-500',
      rating: 4.9,
      reviews: 287,
      availability: 'Daily',
      bestTime: 'Morning'
    },
    {
      id: 2,
      name: 'Wellness & Spa Retreat',
      category: 'Wellness',
      duration: '4 hours',
      groupSize: '1-6 people',
      price: 1500,
      originalPrice: 1800,
      difficulty: 'Relaxing',
      description: 'Rejuvenate your mind, body, and soul with our comprehensive wellness experience featuring traditional Ayurvedic treatments, yoga sessions, and meditation in our heritage gardens.',
      highlights: ['Ayurvedic Consultation', 'Traditional Massage', 'Yoga Session', 'Meditation Garden', 'Herbal Tea Ceremony', 'Wellness Consultation'],
      includes: ['Ayurvedic Therapist', 'Yoga Instructor', 'Organic Treatments', 'Herbal Refreshments', 'Wellness Kit', 'Relaxation Music'],
      schedule: ['9:00 AM - Ayurvedic Consultation', '9:30 AM - Traditional Massage', '11:00 AM - Garden Yoga Session', '12:00 PM - Meditation & Tea', '1:00 PM - Wellness Consultation'],
      images: [
        'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Premium',
      badgeColor: 'bg-purple-500',
      rating: 4.8,
      reviews: 156,
      availability: 'Daily',
      bestTime: 'Morning'
    },
    {
      id: 3,
      name: 'Cultural Immersion Experience',
      category: 'Culture',
      duration: '5 hours',
      groupSize: '4-15 people',
      price: 1200,
      originalPrice: 1500,
      difficulty: 'Moderate',
      description: 'Dive deep into authentic Rajasthani culture with folk performances, traditional crafts, local village visits, and hands-on cultural activities that connect you with local traditions.',
      highlights: ['Folk Dance Performance', 'Traditional Crafts Workshop', 'Village Visit', 'Local Cuisine Tasting', 'Cultural Storytelling', 'Handicraft Shopping'],
      includes: ['Cultural Guide', 'Folk Performance', 'Craft Materials', 'Traditional Lunch', 'Village Transportation', 'Cultural Souvenirs'],
      schedule: ['2:00 PM - Cultural Introduction', '2:30 PM - Folk Performance', '3:30 PM - Village Visit', '4:30 PM - Craft Workshop', '5:30 PM - Traditional Dinner', '7:00 PM - Cultural Stories'],
      images: [
        'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Authentic',
      badgeColor: 'bg-amber-500',
      rating: 4.7,
      reviews: 203,
      availability: 'Daily',
      bestTime: 'Afternoon'
    },
    {
      id: 4,
      name: 'Sunrise Desert Safari',
      category: 'Adventure',
      duration: '6 hours',
      groupSize: '2-8 people',
      price: 1800,
      originalPrice: 2200,
      difficulty: 'Moderate',
      description: 'Experience the magic of Rajasthan\'s desert landscape with camel rides, sunrise viewing, traditional breakfast, and exploration of ancient desert settlements.',
      highlights: ['Camel Safari', 'Sunrise Viewing', 'Desert Breakfast', 'Sand Dunes Exploration', 'Desert Photography', 'Traditional Music'],
      includes: ['Desert Guide', 'Camel Ride', 'Traditional Breakfast', 'Photography Assistance', 'Desert Transportation', 'Cultural Performance'],
      schedule: ['5:00 AM - Hotel Pickup', '6:00 AM - Desert Arrival', '6:30 AM - Camel Safari', '7:30 AM - Sunrise Viewing', '8:30 AM - Desert Breakfast', '11:00 AM - Return Journey'],
      images: [
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Adventure',
      badgeColor: 'bg-orange-500',
      rating: 4.6,
      reviews: 134,
      availability: 'Daily',
      bestTime: 'Early Morning'
    },
    {
      id: 5,
      name: 'Royal Cooking Masterclass',
      category: 'Culinary',
      duration: '4 hours',
      groupSize: '2-10 people',
      price: 1000,
      originalPrice: 1300,
      difficulty: 'Easy',
      description: 'Learn the secrets of royal Rajasthani cuisine from our master chef. Prepare traditional dishes, understand spice combinations, and enjoy your culinary creations.',
      highlights: ['Royal Recipe Learning', 'Spice Garden Tour', 'Hands-on Cooking', 'Chef Techniques', 'Traditional Presentation', 'Recipe Collection'],
      includes: ['Master Chef Instructor', 'All Ingredients', 'Cooking Equipment', 'Recipe Book', 'Lunch/Dinner', 'Apron & Certificate'],
      schedule: ['3:00 PM - Spice Garden Tour', '3:30 PM - Recipe Introduction', '4:00 PM - Hands-on Cooking', '5:30 PM - Cooking Techniques', '6:30 PM - Dining Experience', '7:00 PM - Certificate Ceremony'],
      images: [
        'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Hands-on',
      badgeColor: 'bg-red-500',
      rating: 4.8,
      reviews: 178,
      availability: 'Daily',
      bestTime: 'Afternoon'
    },
    {
      id: 6,
      name: 'Photography Workshop',
      category: 'Creative',
      duration: '3 hours',
      groupSize: '1-8 people',
      price: 800,
      originalPrice: 1000,
      difficulty: 'Easy',
      description: 'Capture the beauty of Heritage Grand with professional photography guidance. Learn composition, lighting, and storytelling through your lens in our stunning heritage setting.',
      highlights: ['Professional Guidance', 'Heritage Locations', 'Composition Techniques', 'Lighting Mastery', 'Digital Editing Tips', 'Portfolio Review'],
      includes: ['Professional Photographer', 'Equipment Guidance', 'Location Access', 'Editing Tutorial', 'Digital Gallery', 'Photography Certificate'],
      schedule: ['4:00 PM - Photography Basics', '4:30 PM - Heritage Locations', '5:30 PM - Golden Hour Shooting', '6:30 PM - Editing Session', '7:00 PM - Portfolio Review'],
      images: [
        'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Creative',
      badgeColor: 'bg-blue-500',
      rating: 4.7,
      reviews: 92,
      availability: 'Daily',
      bestTime: 'Evening'
    }
  ];

  const seasonalEvents = [
    {
      name: 'Holi Festival Celebration',
      date: 'March 13-14, 2025',
      price: 2000,
      duration: '2 days',
      description: 'Celebrate the festival of colors with traditional Holi festivities, organic colors, folk music, and royal feast.',
      image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: ['Traditional Celebrations', 'Organic Colors', 'Folk Performances', 'Royal Feast', 'Cultural Activities']
    },
    {
      name: 'Diwali Royal Illumination',
      date: 'October 31 - November 2, 2025',
      price: 2500,
      duration: '3 days',
      description: 'Experience Diwali like royalty with palace illuminations, traditional ceremonies, and festive dining experiences.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: ['Palace Illumination', 'Traditional Ceremonies', 'Festive Dining', 'Cultural Programs', 'Gift Hampers']
    },
    {
      name: 'Monsoon Heritage Retreat',
      date: 'July 15 - August 15, 2025',
      price: 1500,
      duration: '1 month',
      description: 'Special monsoon packages with indoor cultural activities, spa treatments, and cozy heritage experiences.',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: ['Indoor Activities', 'Spa Treatments', 'Cultural Workshops', 'Monsoon Cuisine', 'Heritage Stories']
    }
  ];

  const categories = ['All', 'Heritage', 'Wellness', 'Culture', 'Adventure', 'Culinary', 'Creative'];

  const filteredPackages = activeCategory === 'All' 
    ? packages 
    : packages.filter(pkg => pkg.category === activeCategory);

  const openPackageModal = (pkg) => {
    setSelectedPackage(pkg);
    setActiveImageIndex(0);
  };

  const closePackageModal = () => {
    setSelectedPackage(null);
    setActiveImageIndex(0);
  };

  const nextImage = () => {
    if (selectedPackage) {
      setActiveImageIndex((prev) => 
        prev === selectedPackage.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedPackage) {
      setActiveImageIndex((prev) => 
        prev === 0 ? selectedPackage.images.length - 1 : prev - 1
      );
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      Heritage: Crown,
      Wellness: Leaf,
      Culture: Music,
      Adventure: Mountain,
      Culinary: Heart,
      Creative: Camera
    };
    return icons[category] || Compass;
  };

  return (
    <section id="experiences" className="py-20 bg-gradient-to-b from-[#F5F5DC] to-[#FAF9F6] heritage-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Compass className="text-[#D4AF37] mr-3" size={32} />
            <span className="text-[#8B1538] font-sans text-sm font-semibold tracking-widest uppercase">Curated Experiences</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B1538] mb-6 heritage-elegant-divider">
            Experience <span className="text-[#D4AF37]">Packages</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in authentic Rajasthani culture through carefully curated experiences that blend 
            heritage, adventure, wellness, and culinary delights. Each package is designed to create lasting memories.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const IconComponent = category === 'All' ? Sparkles : getCategoryIcon(category);
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center px-6 py-3 rounded-full font-sans font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#8B1538] text-white shadow-lg'
                    : 'bg-white text-[#8B1538] hover:bg-[#8B1538] hover:text-white shadow-md'
                }`}
              >
                <IconComponent size={18} className="mr-2" />
                {category}
              </button>
            );
          })}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPackages.map((pkg) => (
            <Card key={pkg.id} hover className="group overflow-hidden">
              <div className="relative">
                <img 
                  src={pkg.images[0]} 
                  alt={pkg.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${pkg.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {pkg.badge}
                </div>
                
                {/* Price */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-xs text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</div>
                  <div className="text-lg font-bold text-[#8B1538]">₹{pkg.price.toLocaleString()}</div>
                  <div className="text-xs text-gray-600">per person</div>
                </div>

                {/* Gallery Indicator */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <Camera size={12} className="mr-1" />
                  {pkg.images.length}
                </div>

                {/* Package Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-serif text-xl font-bold mb-1">{pkg.name}</h3>
                  <div className="flex items-center text-sm opacity-90 space-x-4">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center">
                      <Users size={14} className="mr-1" />
                      {pkg.groupSize}
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[#8B1538] bg-[#8B1538]/10 px-3 py-1 rounded-full">
                    {pkg.category}
                  </span>
                  <div className="flex items-center text-[#D4AF37]">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 font-semibold text-sm">{pkg.rating}</span>
                    <span className="ml-1 text-gray-600 text-xs">({pkg.reviews})</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-[#D4AF37]" />
                    {pkg.difficulty}
                  </div>
                  <div className="flex items-center">
                    <Sunrise size={16} className="mr-2 text-[#D4AF37]" />
                    {pkg.bestTime}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {pkg.description}
                </p>

                {/* Highlights Preview */}
                <div className="mb-6">
                  <h4 className="font-serif text-sm font-semibold text-[#8B1538] mb-2">Experience Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="text-xs bg-[#D4AF37]/20 text-[#8B1538] px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <span className="text-xs text-[#8B1538] font-medium">+{pkg.highlights.length - 3} more</span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="primary"
                    className="flex-1"
                    onClick={() => openPackageModal(pkg)}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setBookingPackage(pkg);
                      setShowBookingForm(true);
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seasonal Events */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#8B1538] mb-4 heritage-elegant-divider">
              Seasonal Celebrations
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for special seasonal events that celebrate Indian festivals and traditions 
              with royal grandeur and authentic cultural experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonalEvents.map((event, index) => (
              <Card key={index} hover className="overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-serif text-xl font-bold mb-1">{event.name}</h4>
                    <div className="flex items-center text-sm">
                      <Calendar size={16} className="mr-2" />
                      {event.date}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-[#8B1538]">₹{event.price.toLocaleString()}</div>
                    <div className="text-xs text-gray-600">{event.duration}</div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>

                  <div className="space-y-2 mb-6">
                    <h5 className="font-serif font-semibold text-[#8B1538]">Event Includes:</h5>
                    {event.includes.map((item, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <Sparkles size={14} className="mr-2 text-[#D4AF37]" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <Button variant="primary" className="w-full">
                    Register Interest
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Custom Experience Builder */}
        <div className="bg-gradient-to-r from-[#8B1538] to-[#A61E4D] rounded-2xl p-8 md:p-12 text-white text-center">
          <Crown className="text-[#D4AF37] mx-auto mb-6" size={48} />
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Create Your Perfect Experience
          </h3>
          <p className="font-sans text-lg md:text-xl mb-6 opacity-90 max-w-3xl mx-auto">
            Can't find exactly what you're looking for? Our experience concierge will create a 
            personalized package combining your favorite activities, dining preferences, and cultural interests.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">Personalized</div>
              <div className="text-sm opacity-80">Just for you</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">Expert Guidance</div>
              <div className="text-sm opacity-80">Local knowledge</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">Flexible</div>
              <div className="text-sm opacity-80">Your schedule</div>
            </div>
          </div>
          <Button variant="secondary" size="lg">
            Design My Experience
          </Button>
        </div>
      </div>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Image Gallery */}
              <div className="relative h-64 md:h-96">
                <img 
                  src={selectedPackage.images[activeImageIndex]} 
                  alt={selectedPackage.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  ←
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  →
                </button>

                {/* Close Button */}
                <button 
                  onClick={closePackageModal}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedPackage.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#8B1538] mb-2">
                      {selectedPackage.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-600 mb-2">
                      <span className="font-medium">{selectedPackage.category}</span>
                      <span>•</span>
                      <span>{selectedPackage.duration}</span>
                      <span>•</span>
                      <span>{selectedPackage.groupSize}</span>
                    </div>
                    <div className="flex items-center text-[#D4AF37]">
                      <Star size={18} fill="currentColor" />
                      <span className="ml-1 font-semibold">{selectedPackage.rating}</span>
                      <span className="ml-2 text-gray-600 text-sm">({selectedPackage.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">₹{selectedPackage.originalPrice.toLocaleString()}</div>
                    <div className="text-2xl font-bold text-[#8B1538]">₹{selectedPackage.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedPackage.description}
                </p>

                {/* Package Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#8B1538] mb-4">Experience Highlights</h4>
                    <div className="space-y-2">
                      {selectedPackage.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <Sparkles size={16} className="mr-3 text-[#D4AF37]" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#8B1538] mb-4">Package Includes</h4>
                    <div className="space-y-2">
                      {selectedPackage.includes.map((item, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Schedule */}
                <div className="mb-8">
                  <h4 className="font-serif text-xl font-bold text-[#8B1538] mb-4">Experience Schedule</h4>
                  <div className="space-y-3">
                    {selectedPackage.schedule.map((item, index) => (
                      <div key={index} className="flex items-start text-gray-600">
                        <Clock size={16} className="mr-3 text-[#D4AF37] mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Actions */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="flex-1"
                    onClick={() => {
                      setBookingPackage(selectedPackage);
                      setShowBookingForm(true);
                      closePackageModal();
                    }}
                  >
                    Book This Experience
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() => {
                      setBookingPackage(selectedPackage);
                      setShowBookingForm(true);
                      closePackageModal();
                    }}
                  >
                    Check Availability
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Form Modal */}
      {showBookingForm && bookingPackage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-[#8B1538] to-[#A61E4D] p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold">Book {bookingPackage.name}</h3>
                  <p className="opacity-90">₹{bookingPackage.price.toLocaleString()} per person</p>
                </div>
                <button
                  onClick={() => {
                    setShowBookingForm(false);
                    setBookingPackage(null);
                  }}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6">
              <BookingForm
                bookingType="Experience"
                itemName={bookingPackage.name}
                price={bookingPackage.price}
                onClose={() => {
                  setShowBookingForm(false);
                  setBookingPackage(null);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { ExperiencePackages };