import React, { useState } from 'react';
import { ChefHat, Utensils, Wine, Clock, Users, Star, Award, MapPin, Calendar, Crown, Sparkles, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';

const DiningExperiences = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const restaurants = [
    {
      id: 1,
      name: 'Maharaja\'s Court',
      cuisine: 'Royal Rajasthani',
      category: 'Fine Dining',
      priceRange: '₹1,200 - ₹2,500',
      timing: '7:00 PM - 11:00 PM',
      capacity: '60 guests',
      description: 'Experience the grandeur of royal dining in our signature restaurant, where centuries-old recipes are presented with contemporary flair. Dine under crystal chandeliers in the original palace dining hall.',
      specialties: ['Dal Baati Churma', 'Laal Maas', 'Gatte ki Sabzi', 'Ker Sangri', 'Rajasthani Thali', 'Royal Biryani'],
      features: ['Live Classical Music', 'Royal Ambiance', 'Traditional Service', 'Heritage Recipes', 'Crystal Chandeliers', 'Palace Views'],
      images: [
        'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Signature',
      badgeColor: 'bg-purple-500',
      rating: 4.9,
      reviews: 342
    },
    {
      id: 2,
      name: 'Garden Pavilion',
      cuisine: 'Continental & Indian',
      category: 'All-Day Dining',
      priceRange: '₹800 - ₹1,800',
      timing: '6:30 AM - 11:00 PM',
      capacity: '80 guests',
      description: 'Overlooking our manicured gardens, this elegant restaurant offers a diverse menu combining the best of Indian and international cuisines. Perfect for breakfast, lunch, or a romantic dinner under the stars.',
      specialties: ['Continental Breakfast', 'Garden Salads', 'Grilled Specialties', 'Indian Curries', 'Fresh Pasta', 'Dessert Selection'],
      features: ['Garden Views', 'Outdoor Seating', 'All-Day Menu', 'International Cuisine', 'Romantic Setting', 'Fresh Ingredients'],
      images: [
        'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Popular',
      badgeColor: 'bg-green-500',
      rating: 4.7,
      reviews: 256
    },
    {
      id: 3,
      name: 'Rooftop Lounge',
      cuisine: 'Cocktails & Light Bites',
      category: 'Bar & Lounge',
      priceRange: '₹600 - ₹1,500',
      timing: '5:00 PM - 1:00 AM',
      capacity: '45 guests',
      description: 'Enjoy panoramic views of the city skyline while sipping expertly crafted cocktails and sampling our selection of gourmet appetizers. The perfect spot for sunset drinks and evening socializing.',
      specialties: ['Signature Cocktails', 'Wine Selection', 'Tapas', 'Cheese Platters', 'Sunset Views', 'Live DJ'],
      features: ['City Views', 'Craft Cocktails', 'Live Music', 'Sunset Timing', 'Premium Spirits', 'Social Atmosphere'],
      images: [
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Trendy',
      badgeColor: 'bg-blue-500',
      rating: 4.6,
      reviews: 189
    },
    {
      id: 4,
      name: 'Heritage Tea Room',
      cuisine: 'Traditional Tea & Snacks',
      category: 'Café',
      priceRange: '₹300 - ₹800',
      timing: '10:00 AM - 6:00 PM',
      capacity: '30 guests',
      description: 'Step into our charming tea room where time stands still. Enjoy traditional Indian teas, freshly baked pastries, and light snacks in an intimate setting adorned with vintage photographs and antique furniture.',
      specialties: ['Masala Chai', 'Earl Grey', 'Samosas', 'Scones', 'Traditional Sweets', 'Heritage Blend'],
      features: ['Vintage Décor', 'Premium Teas', 'Fresh Pastries', 'Quiet Atmosphere', 'Heritage Photos', 'Intimate Setting'],
      images: [
        'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Authentic',
      badgeColor: 'bg-amber-500',
      rating: 4.8,
      reviews: 124
    },
    {
      id: 5,
      name: 'Poolside Grill',
      cuisine: 'BBQ & Grilled Specialties',
      category: 'Outdoor Dining',
      priceRange: '₹900 - ₹2,000',
      timing: '12:00 PM - 10:00 PM',
      capacity: '50 guests',
      description: 'Savor perfectly grilled meats, fresh seafood, and vegetarian delights by our stunning heritage pool. The perfect combination of casual dining and elegant ambiance for lunch or dinner.',
      specialties: ['Tandoori Chicken', 'Grilled Fish', 'BBQ Lamb', 'Vegetarian Kebabs', 'Fresh Salads', 'Poolside Service'],
      features: ['Poolside Setting', 'Live Grilling', 'Fresh Seafood', 'Casual Dining', 'Outdoor Ambiance', 'Sunset Views'],
      images: [
        'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Seasonal',
      badgeColor: 'bg-orange-500',
      rating: 4.5,
      reviews: 167
    }
  ];

  const chefs = [
    {
      name: 'Chef Karan Kapoor',
      role: 'Executive Chef',
      specialty: 'Royal Rajasthani Cuisine',
      experience: '15+ years',
      description: 'Master of traditional Rajasthani cuisine with modern presentation techniques. Trained under royal chefs and passionate about preserving authentic flavors.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievements: ['Heritage Recipe Preservation Award', 'Best Regional Chef 2023', 'Culinary Excellence Medal']
    },
    {
      name: 'Chef Rhea Malhotra',
      role: 'Pastry Chef',
      specialty: 'Traditional Sweets & Desserts',
      experience: '12+ years',
      description: 'Expert in traditional Indian sweets and contemporary desserts. Creates magical endings to every dining experience with her innovative presentations.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievements: ['Best Dessert Innovation', 'Traditional Sweets Master', 'Culinary Arts Excellence']
    },
    {
      name: 'Chef Nikhil Batra',
      role: 'Continental Chef',
      specialty: 'International & Fusion Cuisine',
      experience: '18+ years',
      description: 'Culinary expert bringing global flavors to Heritage Grand. Specializes in fusion cuisine that respects both Indian and international traditions.',
      image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievements: ['International Cuisine Award', 'Fusion Master Chef', 'Global Culinary Recognition']
    }
  ];

  const diningPackages = [
    {
      name: 'Royal Dining Experience',
      price: 2500,
      duration: '3 hours',
      includes: ['7-course tasting menu', 'Wine pairing', 'Live classical music', 'Personal butler service'],
      description: 'An unforgettable culinary journey through royal Rajasthani cuisine with wine pairings and live entertainment.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      popular: true
    },
    {
      name: 'Heritage Tea Ceremony',
      price: 800,
      duration: '90 minutes',
      includes: ['Premium tea selection', 'Traditional snacks', 'Heritage storytelling', 'Vintage photo session'],
      description: 'Experience the art of traditional tea service in our heritage tea room with stories from our past.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      popular: false
    },
    {
      name: 'Sunset Rooftop Experience',
      price: 1800,
      duration: '2 hours',
      includes: ['Signature cocktails', 'Gourmet appetizers', 'City views', 'Live acoustic music'],
      description: 'Watch the sunset over the city while enjoying craft cocktails and gourmet bites on our exclusive rooftop.',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      popular: false
    }
  ];

  const categories = ['All', 'Fine Dining', 'All-Day Dining', 'Bar & Lounge', 'Café', 'Outdoor Dining'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredRestaurants = activeCategory === 'All' 
    ? restaurants 
    : restaurants.filter(restaurant => restaurant.category === activeCategory);

  const openRestaurantModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setActiveImageIndex(0);
  };

  const closeRestaurantModal = () => {
    setSelectedRestaurant(null);
    setActiveImageIndex(0);
  };

  const nextImage = () => {
    if (selectedRestaurant) {
      setActiveImageIndex((prev) => 
        prev === selectedRestaurant.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedRestaurant) {
      setActiveImageIndex((prev) => 
        prev === 0 ? selectedRestaurant.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="dining" className="py-20 bg-gradient-to-b from-[#FAF9F6] to-[#F5F5DC] heritage-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <ChefHat className="text-[#D4AF37] mr-3" size={32} />
            <span className="text-[#8B1538] font-sans text-sm font-semibold tracking-widest uppercase">Culinary Excellence</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B1538] mb-6 heritage-elegant-divider">
            Dining <span className="text-[#D4AF37]">Experiences</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Embark on a culinary journey through royal Rajasthani cuisine and international flavors, 
            where every meal is a celebration of heritage, tradition, and exceptional hospitality.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-sans font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#8B1538] text-white shadow-lg'
                  : 'bg-white text-[#8B1538] hover:bg-[#8B1538] hover:text-white shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredRestaurants.map((restaurant) => (
            <Card key={restaurant.id} hover className="group overflow-hidden">
              <div className="relative">
                <img 
                  src={restaurant.images[0]} 
                  alt={restaurant.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${restaurant.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {restaurant.badge}
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                  <div className="flex items-center text-[#D4AF37] mb-1">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-bold ml-1">{restaurant.rating}</span>
                  </div>
                  <div className="text-xs text-gray-600">{restaurant.reviews} reviews</div>
                </div>

                {/* Gallery Indicator */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <Camera size={12} className="mr-1" />
                  {restaurant.images.length}
                </div>

                {/* Restaurant Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-serif text-xl font-bold mb-1">{restaurant.name}</h3>
                  <p className="text-sm opacity-90">{restaurant.cuisine}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[#8B1538] bg-[#8B1538]/10 px-3 py-1 rounded-full">
                    {restaurant.category}
                  </span>
                  <span className="text-lg font-bold text-[#D4AF37]">{restaurant.priceRange}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-[#D4AF37]" />
                    {restaurant.timing}
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-2 text-[#D4AF37]" />
                    {restaurant.capacity}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {restaurant.description}
                </p>

                {/* Specialties Preview */}
                <div className="mb-6">
                  <h4 className="font-serif text-sm font-semibold text-[#8B1538] mb-2">Signature Dishes</h4>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.slice(0, 3).map((specialty, index) => (
                      <span key={index} className="text-xs bg-[#D4AF37]/20 text-[#8B1538] px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                    {restaurant.specialties.length > 3 && (
                      <span className="text-xs text-[#8B1538] font-medium">+{restaurant.specialties.length - 3} more</span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button 
                    variant="primary" 
                    className="flex-1"
                    onClick={() => openRestaurantModal(restaurant)}
                  >
                    View Menu
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Reserve Table
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chef Profiles */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#8B1538] mb-4 heritage-elegant-divider">
              Meet Our Master Chefs
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Our culinary team brings together decades of experience, passion for authentic flavors, 
              and innovative techniques to create unforgettable dining experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <Card key={index} hover className="text-center">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <img 
                      src={chef.image} 
                      alt={chef.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-xl border-4 border-[#D4AF37]"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#8B1538] text-white px-4 py-1 rounded-full text-sm font-sans">
                      {chef.experience}
                    </div>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#8B1538] mb-2">{chef.name}</h4>
                  <p className="text-[#D4AF37] font-semibold mb-2">{chef.role}</p>
                  <p className="text-sm text-gray-600 font-medium mb-4">{chef.specialty}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">{chef.description}</p>
                  
                  <div className="space-y-2">
                    {chef.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <Award size={14} className="mr-2 text-[#D4AF37]" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dining Packages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#8B1538] mb-4 heritage-elegant-divider">
              Signature Dining Packages
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Curated experiences that combine exceptional cuisine with the ambiance and service 
              that defines Heritage Grand's legendary hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diningPackages.map((pkg, index) => (
              <Card key={index} hover className="relative overflow-hidden">
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-[#8B1538] text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Most Popular
                  </div>
                )}
                
                <div className="relative h-48">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-serif text-xl font-bold mb-1">{pkg.name}</h4>
                    <div className="flex items-center text-sm">
                      <Clock size={16} className="mr-2" />
                      {pkg.duration}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[#8B1538]">₹{pkg.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-600">per couple</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">{pkg.description}</p>

                  <div className="space-y-2 mb-6">
                    <h5 className="font-serif font-semibold text-[#8B1538]">Package Includes:</h5>
                    {pkg.includes.map((item, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <Sparkles size={14} className="mr-2 text-[#D4AF37]" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <Button variant="primary" className="w-full">
                    Book Experience
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Culinary Events */}
        <div className="bg-gradient-to-r from-[#8B1538] to-[#A61E4D] rounded-2xl p-8 md:p-12 text-white text-center">
          <Crown className="text-[#D4AF37] mx-auto mb-6" size={48} />
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Royal Feast Festival
          </h3>
          <p className="font-sans text-lg md:text-xl mb-6 opacity-90 max-w-3xl mx-auto">
            Join us every full moon for an authentic royal feast featuring traditional recipes, 
            live folk performances, and dining in the grand palace courtyard under the stars.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">Next Event</div>
              <div className="text-sm opacity-80">March 15, 2025</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">₹3,500</div>
              <div className="text-sm opacity-80">per person</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">Limited</div>
              <div className="text-sm opacity-80">40 guests only</div>
            </div>
          </div>
          <Button variant="secondary" size="lg">
            Reserve Your Seat
          </Button>
        </div>
      </div>

      {/* Restaurant Detail Modal */}
      {selectedRestaurant && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Image Gallery */}
              <div className="relative h-64 md:h-96">
                <img 
                  src={selectedRestaurant.images[activeImageIndex]} 
                  alt={selectedRestaurant.name}
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
                  onClick={closeRestaurantModal}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedRestaurant.images.map((_, index) => (
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
                      {selectedRestaurant.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-600 mb-2">
                      <span className="font-medium">{selectedRestaurant.cuisine}</span>
                      <span>•</span>
                      <span>{selectedRestaurant.category}</span>
                    </div>
                    <div className="flex items-center text-[#D4AF37]">
                      <Star size={18} fill="currentColor" />
                      <span className="ml-1 font-semibold">{selectedRestaurant.rating}</span>
                      <span className="ml-2 text-gray-600 text-sm">({selectedRestaurant.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#8B1538]">{selectedRestaurant.priceRange}</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedRestaurant.description}
                </p>

                {/* Restaurant Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#8B1538] mb-4">Operating Hours & Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Clock size={18} className="mr-3 text-[#D4AF37]" />
                        {selectedRestaurant.timing}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users size={18} className="mr-3 text-[#D4AF37]" />
                        Capacity: {selectedRestaurant.capacity}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={18} className="mr-3 text-[#D4AF37]" />
                        Heritage Grand Hotel
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#8B1538] mb-4">Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedRestaurant.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Signature Dishes */}
                <div className="mb-8">
                  <h4 className="font-serif text-xl font-bold text-[#8B1538] mb-4">Signature Specialties</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedRestaurant.specialties.map((specialty, index) => (
                      <div key={index} className="bg-[#D4AF37]/10 text-[#8B1538] px-3 py-2 rounded-lg text-sm font-medium text-center">
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Actions */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button variant="primary" size="lg" className="flex-1">
                    Reserve Table
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    View Full Menu
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { DiningExperiences };