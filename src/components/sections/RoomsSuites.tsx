import React, { useState } from 'react';
import { Bed, Users, Wifi, Car, Coffee, Bath, Star, Calendar, MapPin, Crown, Sparkles, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';
import { BookingForm } from '../ui/BookingForm';

const RoomsSuites = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingRoom, setBookingRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      name: 'Heritage Deluxe Room',
      category: 'Deluxe',
      price: 3500,
      originalPrice: 4200,
      size: '350 sq ft',
      occupancy: '2 Adults',
      description: 'Elegantly appointed rooms featuring traditional Rajasthani décor with modern amenities. Each room tells a story through carefully curated antiques and heritage artwork.',
      features: ['King Size Bed', 'Heritage Furniture', 'Marble Bathroom', 'Garden View', 'Complimentary WiFi', 'Mini Bar'],
      amenities: [
        { icon: Bed, label: 'King Bed' },
        { icon: Bath, label: 'Marble Bath' },
        { icon: Wifi, label: 'Free WiFi' },
        { icon: Coffee, label: 'Mini Bar' },
        { icon: MapPin, label: 'Garden View' },
        { icon: Car, label: 'Valet Parking' }
      ],
      images: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Most Popular',
      badgeColor: 'bg-green-500'
    },
    {
      id: 2,
      name: 'Royal Suite',
      category: 'Suite',
      price: 5500,
      originalPrice: 6800,
      size: '650 sq ft',
      occupancy: '2-3 Adults',
      description: 'Spacious suites with separate living areas, featuring royal furnishings and panoramic palace views. Perfect for special occasions and extended stays.',
      features: ['Separate Living Room', 'Royal Furnishings', 'Palace Views', 'Butler Service', 'Premium Amenities', 'Private Balcony'],
      amenities: [
        { icon: Crown, label: 'Butler Service' },
        { icon: Bed, label: 'King Suite' },
        { icon: Bath, label: 'Luxury Bath' },
        { icon: Wifi, label: 'Premium WiFi' },
        { icon: Coffee, label: 'Premium Bar' },
        { icon: MapPin, label: 'Palace View' }
      ],
      images: [
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Luxury',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 3,
      name: 'Palace Wing Premium',
      category: 'Premium',
      price: 4200,
      originalPrice: 5000,
      size: '450 sq ft',
      occupancy: '2 Adults + 1 Child',
      description: 'Located in the original palace wing, these rooms feature authentic architecture with contemporary comfort. High ceilings and period furniture create an immersive heritage experience.',
      features: ['Original Architecture', 'High Ceilings', 'Period Furniture', 'Courtyard Access', 'Heritage Artwork', 'Modern Comfort'],
      amenities: [
        { icon: Bed, label: 'Heritage Bed' },
        { icon: Bath, label: 'Period Bath' },
        { icon: Wifi, label: 'Free WiFi' },
        { icon: Coffee, label: 'Heritage Bar' },
        { icon: MapPin, label: 'Courtyard View' },
        { icon: Sparkles, label: 'Authentic Décor' }
      ],
      images: [
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Heritage',
      badgeColor: 'bg-amber-500'
    },
    {
      id: 4,
      name: 'Garden View Classic',
      category: 'Classic',
      price: 3000,
      originalPrice: 3600,
      size: '300 sq ft',
      occupancy: '2 Adults',
      description: 'Comfortable and elegantly designed rooms overlooking our manicured gardens. Perfect for travelers seeking heritage charm with excellent value.',
      features: ['Garden Views', 'Classic Décor', 'Comfortable Bedding', 'Modern Bathroom', 'Work Desk', 'Peaceful Setting'],
      amenities: [
        { icon: Bed, label: 'Queen Bed' },
        { icon: Bath, label: 'Modern Bath' },
        { icon: Wifi, label: 'Free WiFi' },
        { icon: Coffee, label: 'Tea/Coffee' },
        { icon: MapPin, label: 'Garden View' },
        { icon: Car, label: 'Free Parking' }
      ],
      images: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Best Value',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 5,
      name: 'Maharaja Suite',
      category: 'Presidential',
      price: 8000,
      originalPrice: 10000,
      size: '1200 sq ft',
      occupancy: '4 Adults',
      description: 'Our crown jewel - a palatial suite with separate bedroom, living room, dining area, and private terrace. Features original royal furnishings and dedicated concierge service.',
      features: ['Private Terrace', 'Dining Area', 'Royal Furnishings', 'Concierge Service', 'Premium Location', 'Exclusive Amenities'],
      amenities: [
        { icon: Crown, label: 'Concierge' },
        { icon: Bed, label: 'Royal Bed' },
        { icon: Bath, label: 'Luxury Spa Bath' },
        { icon: Wifi, label: 'Premium WiFi' },
        { icon: Coffee, label: 'Full Bar' },
        { icon: MapPin, label: 'Private Terrace' }
      ],
      images: [
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      badge: 'Presidential',
      badgeColor: 'bg-red-500'
    }
  ];

  const categories = ['All', 'Classic', 'Deluxe', 'Premium', 'Suite', 'Presidential'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredRooms = activeCategory === 'All' 
    ? rooms 
    : rooms.filter(room => room.category === activeCategory);

  const openRoomModal = (room) => {
    setSelectedRoom(room);
    setActiveImageIndex(0);
  };

  const closeRoomModal = () => {
    setSelectedRoom(null);
    setActiveImageIndex(0);
  };

  const nextImage = () => {
    if (selectedRoom) {
      setActiveImageIndex((prev) => 
        prev === selectedRoom.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedRoom) {
      setActiveImageIndex((prev) => 
        prev === 0 ? selectedRoom.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-[#F5F5DC] to-[#FAF9F6] heritage-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Bed className="text-[#D4AF37] mr-3" size={32} />
            <span className="text-[#8B1538] font-sans text-sm font-semibold tracking-widest uppercase">Luxury Accommodations</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B1538] mb-6 heritage-elegant-divider">
            Rooms & <span className="text-[#D4AF37]">Suites</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each room is a sanctuary of comfort and elegance, thoughtfully designed to honor our heritage 
            while providing modern luxury. From intimate classic rooms to the grand Maharaja Suite.
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

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredRooms.map((room) => (
            <Card key={room.id} hover className="group overflow-hidden">
              <div className="relative">
                <img 
                  src={room.images[0]} 
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${room.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {room.badge}
                </div>
                
                {/* Price */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-xs text-gray-500 line-through">₹{room.originalPrice.toLocaleString()}</div>
                  <div className="text-lg font-bold text-[#8B1538]">₹{room.price.toLocaleString()}</div>
                  <div className="text-xs text-gray-600">per night</div>
                </div>

                {/* Gallery Indicator */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <Camera size={12} className="mr-1" />
                  {room.images.length}
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-xl font-bold text-[#8B1538]">{room.name}</h3>
                  <div className="flex items-center text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    {room.occupancy}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {room.size}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {room.description}
                </p>

                {/* Amenities Preview */}
                <div className="flex items-center space-x-3 mb-6">
                  {room.amenities.slice(0, 4).map((amenity, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-500">
                      <amenity.icon size={14} className="mr-1" />
                      <span className="hidden sm:inline">{amenity.label}</span>
                    </div>
                  ))}
                  {room.amenities.length > 4 && (
                    <span className="text-xs text-[#8B1538] font-medium">+{room.amenities.length - 4} more</span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="primary"
                    className="flex-1"
                    onClick={() => openRoomModal(room)}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setBookingRoom(room);
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

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-[#8B1538] to-[#A61E4D] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Special Heritage Package
          </h3>
          <p className="font-sans text-lg md:text-xl mb-6 opacity-90">
            Book 3 nights and get a complimentary heritage tour, royal dining experience, 
            and traditional welcome ceremony. Valid until March 2025.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4AF37]">Save 25%</div>
              <div className="text-sm opacity-80">on 3+ night stays</div>
            </div>
            <Button variant="secondary" size="lg">
              Claim Special Offer
            </Button>
          </div>
        </div>
      </div>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Image Gallery */}
              <div className="relative h-64 md:h-96">
                <img 
                  src={selectedRoom.images[activeImageIndex]} 
                  alt={selectedRoom.name}
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
                  onClick={closeRoomModal}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedRoom.images.map((_, index) => (
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
                      {selectedRoom.name}
                    </h3>
                    <div className="flex items-center text-gray-600 space-x-4">
                      <span>{selectedRoom.size}</span>
                      <span>•</span>
                      <span>{selectedRoom.occupancy}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">₹{selectedRoom.originalPrice.toLocaleString()}</div>
                    <div className="text-2xl font-bold text-[#8B1538]">₹{selectedRoom.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">per night</div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedRoom.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-serif text-xl font-bold text-[#8B1538] mb-4">Room Features</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedRoom.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h4 className="font-serif text-xl font-bold text-[#8B1538] mb-4">Amenities</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedRoom.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <amenity.icon size={18} className="mr-3 text-[#D4AF37]" />
                        {amenity.label}
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
                      setBookingRoom(selectedRoom);
                      setShowBookingForm(true);
                      closeRoomModal();
                    }}
                  >
                    Book This Room
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() => {
                      setBookingRoom(selectedRoom);
                      setShowBookingForm(true);
                      closeRoomModal();
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
      {showBookingForm && bookingRoom && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-[#8B1538] to-[#A61E4D] p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold">Book {bookingRoom.name}</h3>
                  <p className="opacity-90">₹{bookingRoom.price.toLocaleString()} per night</p>
                </div>
                <button
                  onClick={() => {
                    setShowBookingForm(false);
                    setBookingRoom(null);
                  }}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6">
              <BookingForm
                bookingType="Room"
                itemName={bookingRoom.name}
                price={bookingRoom.price}
                onClose={() => {
                  setShowBookingForm(false);
                  setBookingRoom(null);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { RoomsSuites };