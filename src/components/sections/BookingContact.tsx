import React, { useState } from 'react';
import { Calendar, Users, Phone, Mail, MapPin, Clock, Send, CheckCircle, Star, Crown, Wifi, Car, Coffee, Bath, Award, Globe, MessageCircle, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';

const BookingContact = () => {
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1,
    roomType: '',
    specialRequests: '',
    guestInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: 'India'
    }
  });
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  const roomTypes = [
    { id: 'garden-classic', name: 'Garden View Classic', price: 3000, originalPrice: 3600 },
    { id: 'heritage-deluxe', name: 'Heritage Deluxe Room', price: 3500, originalPrice: 4200 },
    { id: 'palace-premium', name: 'Palace Wing Premium', price: 4200, originalPrice: 5000 },
    { id: 'royal-suite', name: 'Royal Suite', price: 5500, originalPrice: 6800 },
    { id: 'maharaja-suite', name: 'Maharaja Suite', price: 8000, originalPrice: 10000 }
  ];

  const inquiryTypes = [
    'General Inquiry',
    'Room Booking',
    'Event Planning',
    'Wedding Services',
    'Corporate Events',
    'Experience Packages',
    'Dining Reservations',
    'Special Occasions'
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+91 98765 43210',
      secondary: '+91 98765 43211',
      description: 'Available 24/7 for reservations and assistance',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'reservations@heritagegrand.com',
      secondary: 'info@heritagegrand.com',
      description: 'We respond within 2 hours during business hours',
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      primary: '+91 98765 43210',
      secondary: 'Quick responses',
      description: 'Instant messaging for quick inquiries',
      action: 'Chat Now'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: 'Heritage Grand Hotel',
      secondary: 'Rajasthan, India',
      description: 'Palace Road, Heritage District, Rajasthan 302001',
      action: 'Get Directions'
    }
  ];

  const locationFeatures = [
    { icon: MapPin, title: 'City Center', description: '5 minutes from main attractions' },
    { icon: Car, title: 'Airport', description: '45 minutes from Jaipur Airport' },
    { icon: Crown, title: 'Heritage Sites', description: 'Walking distance to palaces' },
    { icon: Coffee, title: 'Shopping', description: '10 minutes to local markets' }
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (bookingStep < 3) {
      setBookingStep(bookingStep + 1);
    } else {
      setBookingComplete(true);
      setTimeout(() => {
        setShowBookingModal(false);
        setBookingComplete(false);
        setBookingStep(1);
        setBookingData({
          checkIn: '',
          checkOut: '',
          guests: 2,
          rooms: 1,
          roomType: '',
          specialRequests: '',
          guestInfo: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            country: 'India'
          }
        });
      }, 3000);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle contact form submission
    alert('Thank you for your inquiry! We will respond within 2 hours.');
    setContactForm({
      name: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: ''
    });
  };

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkIn = new Date(bookingData.checkIn);
      const checkOut = new Date(bookingData.checkOut);
      const diffTime = Math.abs(checkOut - checkIn);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const calculateTotal = () => {
    const selectedRoom = roomTypes.find(room => room.id === bookingData.roomType);
    if (selectedRoom) {
      const nights = calculateNights();
      return selectedRoom.price * nights * bookingData.rooms;
    }
    return 0;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#F5F5DC] to-[#FAF9F6] heritage-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="text-[#D4AF37] mr-3" size={32} />
            <span className="text-[#8B1538] font-sans text-sm font-semibold tracking-widest uppercase">Book Your Stay</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B1538] mb-6 heritage-elegant-divider">
            Reservations & <span className="text-[#D4AF37]">Contact</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Begin your royal heritage experience with us. Our dedicated team is here to ensure 
            every detail of your stay exceeds your expectations.
          </p>
        </div>

        {/* Quick Booking Widget */}
        <div className="mb-20">
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-[#8B1538] to-[#A61E4D] p-6 text-white text-center">
              <Crown className="mx-auto mb-4" size={32} />
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">Book Your Royal Experience</h3>
              <p className="opacity-90">Check availability and secure your heritage accommodation</p>
            </div>
            
            <CardContent className="p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#8B1538] mb-2">Check-in Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D4AF37]" size={18} />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#8B1538] mb-2">Check-out Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D4AF37]" size={18} />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#8B1538] mb-2">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D4AF37]" size={18} />
                    <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent appearance-none">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5+ Guests</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#8B1538] mb-2">Room Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent appearance-none">
                    <option>Any Room</option>
                    <option>Garden View Classic</option>
                    <option>Heritage Deluxe</option>
                    <option>Palace Wing Premium</option>
                    <option>Royal Suite</option>
                    <option>Maharaja Suite</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <Button 
                    variant="primary" 
                    className="w-full py-3"
                    onClick={() => setShowBookingModal(true)}
                  >
                    Check Availability
                  </Button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Best Rate Guarantee • Free Cancellation • Instant Confirmation
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Methods */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#8B1538] mb-4 heritage-elegant-divider">
              Get In Touch
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Our heritage hospitality team is available 24/7 to assist with reservations, 
              special requests, and any questions about your stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} hover className="text-center">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-[#8B1538] to-[#A61E4D] p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg">
                    <method.icon className="text-[#D4AF37] w-8 h-8 mx-auto" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#8B1538] mb-2">{method.title}</h4>
                  <p className="font-semibold text-[#D4AF37] mb-1">{method.primary}</p>
                  <p className="text-sm text-gray-600 mb-3">{method.secondary}</p>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">{method.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form & Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader className="bg-gradient-to-r from-[#8B1538] to-[#A61E4D] text-white p-6">
              <h3 className="font-serif text-2xl font-bold mb-2">Send Us a Message</h3>
              <p className="opacity-90">We'll respond within 2 hours during business hours</p>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#8B1538] mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#8B1538] mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#8B1538] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#8B1538] mb-2">Inquiry Type</label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent appearance-none"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#8B1538] mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent resize-none"
                    placeholder="Please share details about your inquiry, preferred dates, special requirements, or any questions you may have..."
                  />
                </div>
                
                <Button type="submit" variant="primary" className="w-full py-3">
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Location & Map */}
          <div className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white p-6">
                <h3 className="font-serif text-2xl font-bold mb-2">Our Location</h3>
                <p className="opacity-90">In the heart of Rajasthan's heritage district</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-[#D4AF37] mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-[#8B1538]">Heritage Grand Hotel</p>
                      <p className="text-gray-600">Palace Road, Heritage District</p>
                      <p className="text-gray-600">Rajasthan 302001, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="text-[#D4AF37]" size={20} />
                    <div>
                      <p className="font-semibold text-[#8B1538]">Reception Hours</p>
                      <p className="text-gray-600">24/7 - Always available</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-6">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Heritage District, Rajasthan</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <MapPin className="mr-2" size={18} />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Location Features */}
            <Card className="shadow-xl">
              <CardContent className="p-6">
                <h4 className="font-serif text-xl font-bold text-[#8B1538] mb-4">Nearby Attractions</h4>
                <div className="grid grid-cols-2 gap-4">
                  {locationFeatures.map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-[#D4AF37]/20 p-3 rounded-full w-12 h-12 mx-auto mb-2">
                        <feature.icon className="text-[#8B1538] w-6 h-6 mx-auto" />
                      </div>
                      <h5 className="font-semibold text-[#8B1538] text-sm mb-1">{feature.title}</h5>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-[#8B1538] to-[#A61E4D] rounded-2xl p-8 md:p-12 text-white text-center">
          <Heart className="text-[#D4AF37] mx-auto mb-6" size={48} />
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Royal Heritage?
          </h3>
          <p className="font-sans text-lg md:text-xl mb-6 opacity-90 max-w-3xl mx-auto">
            Book directly with us for the best rates, exclusive perks, and personalized service. 
            Your royal heritage experience awaits at Heritage Grand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">Best Rate</div>
              <div className="text-sm opacity-80">Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">Free</div>
              <div className="text-sm opacity-80">Cancellation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">24/7</div>
              <div className="text-sm opacity-80">Support</div>
            </div>
          </div>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => setShowBookingModal(true)}
          >
            Book Your Royal Stay
          </Button>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {!bookingComplete ? (
              <div>
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-[#8B1538] to-[#A61E4D] p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold">Book Your Stay</h3>
                      <p className="opacity-90">Step {bookingStep} of 3</p>
                    </div>
                    <button 
                      onClick={() => setShowBookingModal(false)}
                      className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4 bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-[#D4AF37] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(bookingStep / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Modal Content */}
                <form onSubmit={handleBookingSubmit} className="p-6">
                  {bookingStep === 1 && (
                    <div className="space-y-6">
                      <h4 className="font-serif text-xl font-bold text-[#8B1538] mb-4">Select Dates & Room</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#8B1538] mb-2">Check-in Date</label>
                          <input
                            type="date"
                            required
                            value={bookingData.checkIn}
                            onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#8B1538] mb-2">Check-out Date</label>
                          <input
                            type="date"
                            required
                            value={bookingData.checkOut}
                            onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                            min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#8B1538] mb-2">Guests</label>
                          <select
                            value={bookingData.guests}
                            onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                          >
                            {[1,2,3,4,5,6].map(num => (
                              <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#8B1538] mb-2">Rooms</label>
                          <select
                            value={bookingData.rooms}
                            onChange={(e) => setBookingData({...bookingData, rooms: parseInt(e.target.value)})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                          >
                            {[1,2,3,4].map(num => (
                              <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#8B1538] mb-2">Room Type</label>
                        <div className="space-y-3">
                          {roomTypes.map((room) => (
                            <label key={room.id} className="flex items-center p-4 border border-gray-300 rounded-lg hover:border-[#8B1538] cursor-pointer">
                              <input
                                type="radio"
                                name="roomType"
                                value={room.id}
                                checked={bookingData.roomType === room.id}
                                onChange={(e) => setBookingData({...bookingData, roomType: e.target.value})}
                                className="mr-4 text-[#8B1538]"
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h5 className="font-semibold text-[#8B1538]">{room.name}</h5>
                                  <div className="text-right">
                                    <div className="text-sm text-gray-500 line-through">₹{room.originalPrice.toLocaleString()}</div>
                                    <div className="text-lg font-bold text-[#8B1538]">₹{room.price.toLocaleString()}</div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {bookingStep === 2 && (
                    <div className="space-y-6">
                      <h4 className="font-serif text-xl font-bold text-[#8B1538] mb-4">Guest Information</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#8B1538] mb-2">First Name</label>
                          <input
                            type="text"
                            required
                            value={bookingData.guestInfo.firstName}
                            onChange={(e) => setBookingData({
                              ...bookingData, 
                              guestInfo: {...bookingData.guestInfo, firstName: e.target.value}
                            })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#8B1538] mb-2">Last Name</label>
                          <input
                            type="text"
                            required
                            value={bookingData.guestInfo.lastName}
                            onChange={(e) => setBookingData({
                              ...bookingData, 
                              guestInfo: {...bookingData.guestInfo, lastName: e.target.value}
                            })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#8B1538] mb-2">Email Address</label>
                        <input
                          type="email"
                          required
                          value={bookingData.guestInfo.email}
                          onChange={(e) => setBookingData({
                            ...bookingData, 
                            guestInfo: {...bookingData.guestInfo, email: e.target.value}
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#8B1538] mb-2">Phone Number</label>
                          <input
                            type="tel"
                            required
                            value={bookingData.guestInfo.phone}
                            onChange={(e) => setBookingData({
                              ...bookingData, 
                              guestInfo: {...bookingData.guestInfo, phone: e.target.value}
                            })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#8B1538] mb-2">Country</label>
                          <select
                            value={bookingData.guestInfo.country}
                            onChange={(e) => setBookingData({
                              ...bookingData, 
                              guestInfo: {...bookingData.guestInfo, country: e.target.value}
                            })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent"
                          >
                            <option value="India">India</option>
                            <option value="USA">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#8B1538] mb-2">Special Requests</label>
                        <textarea
                          rows={3}
                          value={bookingData.specialRequests}
                          onChange={(e) => setBookingData({...bookingData, specialRequests: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1538] focus:border-transparent resize-none"
                          placeholder="Any special requirements, dietary restrictions, or preferences..."
                        />
                      </div>
                    </div>
                  )}

                  {bookingStep === 3 && (
                    <div className="space-y-6">
                      <h4 className="font-serif text-xl font-bold text-[#8B1538] mb-4">Booking Summary</h4>
                      
                      <div className="bg-[#FAF9F6] p-6 rounded-lg">
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Check-in:</span>
                            <span className="font-semibold">{bookingData.checkIn}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Check-out:</span>
                            <span className="font-semibold">{bookingData.checkOut}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Nights:</span>
                            <span className="font-semibold">{calculateNights()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Guests:</span>
                            <span className="font-semibold">{bookingData.guests}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Rooms:</span>
                            <span className="font-semibold">{bookingData.rooms}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Room Type:</span>
                            <span className="font-semibold">
                              {roomTypes.find(r => r.id === bookingData.roomType)?.name}
                            </span>
                          </div>
                          <div className="border-t pt-4">
                            <div className="flex justify-between text-lg font-bold text-[#8B1538]">
                              <span>Total Amount:</span>
                              <span>₹{calculateTotal().toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Note:</strong> This is a booking inquiry. Our team will contact you within 2 hours 
                          to confirm availability and complete your reservation.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between mt-8">
                    {bookingStep > 1 && (
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setBookingStep(bookingStep - 1)}
                      >
                        Previous
                      </Button>
                    )}
                    <Button 
                      type="submit" 
                      variant="primary"
                      className={bookingStep === 1 ? 'w-full' : 'ml-auto'}
                    >
                      {bookingStep === 3 ? 'Submit Booking Request' : 'Continue'}
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="p-8 text-center">
                <CheckCircle className="text-green-500 mx-auto mb-6" size={64} />
                <h3 className="font-serif text-2xl font-bold text-[#8B1538] mb-4">
                  Booking Request Submitted!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for choosing Heritage Grand. Our team will contact you within 2 hours 
                  to confirm your reservation and arrange payment.
                </p>
                <div className="bg-[#FAF9F6] p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Confirmation details have been sent to: <strong>{bookingData.guestInfo.email}</strong>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export { BookingContact };