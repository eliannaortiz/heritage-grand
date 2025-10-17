import React, { useState, useEffect } from 'react';
import { Star, Quote, Play, ChevronLeft, ChevronRight, Award, Users, Camera, Heart, MapPin, Calendar, Crown, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

const TestimonialsGallery = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeGalleryCategory, setActiveGalleryCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Aarohi Deshmukh & Ishan Joshi',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      date: 'December 2024',
      experience: 'Heritage Deluxe Room + Royal Dining',
      review: 'Our stay at Heritage Grand was absolutely magical! The attention to detail in preserving the royal heritage while providing modern comfort is remarkable. The staff treated us like royalty, and the heritage tour was fascinating. We felt transported back in time.',
      highlight: 'The heritage tour and royal dining experience exceeded all expectations.',
      image: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      verified: true,
      stayDuration: '3 nights',
      roomType: 'Heritage Deluxe Room'
    },
    {
      id: 2,
      name: 'Mishka Nair & Avik Malhotra',
      location: 'Bangalore, Karnataka',
      rating: 5,
      date: 'November 2024',
      experience: 'Maharaja Suite + Cultural Immersion',
      review: 'An extraordinary experience that beautifully showcases Indian heritage and hospitality. The Maharaja Suite was palatial, and the cultural immersion program gave us authentic insights into Rajasthani traditions. The Sharma family\'s personal touch made it unforgettable.',
      highlight: 'Authentic cultural experience with unparalleled hospitality.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      verified: true,
      stayDuration: '5 nights',
      roomType: 'Maharaja Suite'
    },
    {
      id: 3,
      name: 'Ira Sathyan & Atharv Saini',
      location: 'Delhi, India',
      rating: 5,
      date: 'October 2024',
      experience: 'Royal Suite + Wellness Retreat',
      review: 'Perfect blend of heritage charm and modern luxury. The wellness retreat was rejuvenating, and dining at Maharaja\'s Court felt like a royal feast. Every corner of the hotel tells a story, and the staff\'s knowledge of the heritage is impressive.',
      highlight: 'Perfect combination of heritage, luxury, and wellness.',
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      verified: true,
      stayDuration: '4 nights',
      roomType: 'Royal Suite'
    },
    {
      id: 4,
      name: 'Jaiveer Mehra',
      location: 'Hyderabad, Telangana',
      rating: 5,
      date: 'September 2024',
      experience: 'Palace Wing Premium + Desert Safari',
      review: 'Heritage Grand exceeded every expectation! The desert safari at sunrise was breathtaking, and returning to the palace felt like coming home to luxury. The cooking masterclass was a highlight - I\'m still making those recipes at home!',
      highlight: 'Desert safari and cooking masterclass were unforgettable.',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      verified: true,
      stayDuration: '6 nights',
      roomType: 'Palace Wing Premium'
    },
    {
      id: 5,
      name: 'Riya Jindal & Ayaan Pillai',
      location: 'Chennai, Tamil Nadu',
      rating: 5,
      date: 'August 2024',
      experience: 'Garden View Classic + Photography Workshop',
      review: 'What a gem! Even the classic room was beautifully appointed with heritage touches. The photography workshop helped us capture the palace\'s beauty perfectly. The staff went above and beyond to make our anniversary special.',
      highlight: 'Staff made our anniversary celebration truly memorable.',
      image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      verified: true,
      stayDuration: '3 nights',
      roomType: 'Garden View Classic'
    }
  ];

  const awards = [
    {
      title: 'Best Heritage Hotel 2024',
      organization: 'India Tourism Awards',
      year: '2024',
      description: 'Recognized for outstanding preservation of cultural heritage and exceptional guest experience.',
      icon: Crown
    },
    {
      title: 'Excellence in Hospitality',
      organization: 'Rajasthan Tourism Board',
      year: '2024',
      description: 'Awarded for maintaining the highest standards of traditional Indian hospitality.',
      icon: Award
    },
    {
      title: 'Sustainable Tourism Leader',
      organization: 'Green Hotel Association',
      year: '2023',
      description: 'Recognized for eco-friendly practices while preserving heritage architecture.',
      icon: Sparkles
    },
    {
      title: 'Cultural Preservation Award',
      organization: 'Heritage Foundation of India',
      year: '2023',
      description: 'Honored for exceptional efforts in preserving and sharing Rajasthani culture.',
      icon: Heart
    }
  ];

  const galleryCategories = ['All', 'Rooms', 'Dining', 'Heritage', 'Experiences', 'Events'];

  const galleryImages = [
    {
      id: 1,
      category: 'Rooms',
      title: 'Maharaja Suite Living Area',
      description: 'Spacious living area with royal furnishings and palace views',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 2,
      category: 'Heritage',
      title: 'Royal Palace Courtyard',
      description: 'Historic courtyard with traditional Rajasthani architecture',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 3,
      category: 'Dining',
      title: 'Maharaja\'s Court Restaurant',
      description: 'Elegant fine dining with crystal chandeliers and royal ambiance',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 4,
      category: 'Experiences',
      title: 'Heritage Walking Tour',
      description: 'Guests exploring the palace\'s rich history and architecture',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 5,
      category: 'Rooms',
      title: 'Heritage Deluxe Bedroom',
      description: 'Elegantly appointed room with traditional décor and modern amenities',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 6,
      category: 'Events',
      title: 'Royal Wedding Celebration',
      description: 'Magnificent wedding setup in the palace courtyard',
      image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 7,
      category: 'Dining',
      title: 'Garden Pavilion Terrace',
      description: 'Outdoor dining with garden views and romantic ambiance',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 8,
      category: 'Heritage',
      title: 'Royal Artifacts Collection',
      description: 'Precious artifacts and antiques from the palace collection',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 9,
      category: 'Experiences',
      title: 'Cultural Dance Performance',
      description: 'Traditional Rajasthani folk dance in the palace courtyard',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 10,
      category: 'Rooms',
      title: 'Royal Suite Bathroom',
      description: 'Luxurious marble bathroom with heritage-inspired fixtures',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 11,
      category: 'Events',
      title: 'Diwali Celebration',
      description: 'Palace illuminated for Diwali festival celebrations',
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 12,
      category: 'Heritage',
      title: 'Vintage Palace Entrance',
      description: 'Grand entrance showcasing 150 years of architectural heritage',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const filteredGalleryImages = activeGalleryCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeGalleryCategory);

  const stats = [
    { number: '2,847', label: 'Happy Guests', icon: Users },
    { number: '4.9', label: 'Average Rating', icon: Star },
    { number: '98%', label: 'Return Rate', icon: Heart },
    { number: '150+', label: 'Years Legacy', icon: Crown }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredGalleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredGalleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredGalleryImages.length) % filteredGalleryImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredGalleryImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-[#FAF9F6] to-[#F5F5DC] heritage-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Camera className="text-[#D4AF37] mr-3" size={32} />
            <span className="text-[#8B1538] font-sans text-sm font-semibold tracking-widest uppercase">Guest Stories & Memories</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B1538] mb-6 heritage-elegant-divider">
            Testimonials & <span className="text-[#D4AF37]">Gallery</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why guests from around the world choose Heritage Grand for their most memorable experiences. 
            Every story, every moment, every memory is a testament to our commitment to exceptional hospitality.
          </p>
        </div>

        {/* Guest Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-[#8B1538] to-[#A61E4D] p-6 rounded-full w-20 h-20 mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <stat.icon className="text-[#D4AF37] w-8 h-8 mx-auto" />
              </div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-[#8B1538] mb-2">{stat.number}</div>
              <div className="text-sm md:text-base font-sans text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#8B1538] mb-4 heritage-elegant-divider">
              What Our Guests Say
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from real guests who have made Heritage Grand their home away from home.
            </p>
          </div>

          <div className="relative">
            <Card className="max-w-4xl mx-auto overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  
                  {/* Guest Photo */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img 
                        src={testimonials[activeTestimonial].image} 
                        alt={testimonials[activeTestimonial].name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-xl border-4 border-[#D4AF37]"
                      />
                      {testimonials[activeTestimonial].verified && (
                        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full">
                          <Award size={16} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-4">
                      <Quote className="text-[#D4AF37] mr-3" size={32} />
                      <div className="flex items-center text-[#D4AF37]">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <Star key={i} size={20} fill="currentColor" />
                        ))}
                      </div>
                    </div>

                    <blockquote className="font-serif text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonials[activeTestimonial].review}"
                    </blockquote>

                    <div className="bg-[#D4AF37]/10 p-4 rounded-lg mb-6">
                      <p className="font-sans text-sm text-[#8B1538] font-semibold">
                        💫 Guest Highlight: {testimonials[activeTestimonial].highlight}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-serif text-xl font-bold text-[#8B1538]">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-sm text-gray-600">
                        <div className="flex items-center justify-center md:justify-start">
                          <MapPin size={16} className="mr-2 text-[#D4AF37]" />
                          {testimonials[activeTestimonial].location}
                        </div>
                        <div className="flex items-center justify-center md:justify-start">
                          <Calendar size={16} className="mr-2 text-[#D4AF37]" />
                          {testimonials[activeTestimonial].date}
                        </div>
                        <div className="flex items-center justify-center md:justify-start">
                          <Crown size={16} className="mr-2 text-[#D4AF37]" />
                          {testimonials[activeTestimonial].stayDuration}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 font-medium">
                        Experience: {testimonials[activeTestimonial].experience}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-[#8B1538] hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-[#8B1538] hover:text-white transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-[#8B1538] w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#8B1538] mb-4 heritage-elegant-divider">
              Awards & Recognition
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by prestigious organizations 
              and industry leaders across India and internationally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <Card key={index} hover className="text-center">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg">
                    <award.icon className="text-white w-8 h-8 mx-auto" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#8B1538] mb-2">{award.title}</h4>
                  <p className="text-[#D4AF37] font-semibold text-sm mb-2">{award.organization}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{award.description}</p>
                  <div className="text-xs text-gray-500 font-medium">{award.year}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#8B1538] mb-4 heritage-elegant-divider">
              Heritage Gallery
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the beauty and grandeur of Heritage Grand through our curated collection 
              of photographs showcasing rooms, dining, heritage, and memorable experiences.
            </p>
          </div>

          {/* Gallery Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveGalleryCategory(category)}
                className={`px-6 py-3 rounded-full font-sans font-medium transition-all duration-300 ${
                  activeGalleryCategory === category
                    ? 'bg-[#8B1538] text-white shadow-lg'
                    : 'bg-white text-[#8B1538] hover:bg-[#8B1538] hover:text-white shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGalleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className="relative group cursor-pointer heritage-hover-lift"
                onClick={() => openImageModal(image, index)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Image Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-serif text-lg font-bold mb-1">{image.title}</h4>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-[#8B1538]/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {image.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#8B1538] to-[#A61E4D] rounded-2xl p-8 md:p-12 text-white text-center">
          <Heart className="text-[#D4AF37] mx-auto mb-6" size={48} />
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Create Your Own Story
          </h3>
          <p className="font-sans text-lg md:text-xl mb-6 opacity-90 max-w-3xl mx-auto">
            Join thousands of satisfied guests who have made Heritage Grand their preferred destination 
            for unforgettable experiences. Your story of royal hospitality awaits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="secondary" size="lg">
              Book Your Experience
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#8B1538]">
              View All Reviews
            </Button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Close Button */}
            <button 
              onClick={closeImageModal}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ✕
            </button>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <h3 className="font-serif text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-lg opacity-90">{selectedImage.description}</p>
              <div className="flex items-center mt-3">
                <span className="bg-[#D4AF37] px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedImage.category}
                </span>
                <span className="ml-4 text-sm opacity-75">
                  {currentImageIndex + 1} of {filteredGalleryImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { TestimonialsGallery };