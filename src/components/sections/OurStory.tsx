import React from 'react';
import { Clock, Users, Award, Heart, Crown, Star } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

const OurStory = () => {
  const timelineEvents = [
    {
      year: '1875',
      title: 'The Foundation',
      description: 'Maharaja Vikram Singh built this magnificent palace as his summer residence, featuring 45 rooms and sprawling gardens.',
      icon: Crown,
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      year: '1920',
      title: 'Opening to Guests',
      description: 'The Sharma family acquired the palace and transformed it into a heritage hotel, welcoming the first guests with royal hospitality.',
      icon: Users,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      year: '1975',
      title: 'Heritage Recognition',
      description: 'Officially recognized as a Heritage Hotel by the Government of India, preserving our architectural and cultural legacy.',
      icon: Award,
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      year: '2000',
      title: 'Modern Renaissance',
      description: 'Careful restoration blending modern amenities with original architecture, maintaining the soul while enhancing comfort.',
      icon: Star,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      year: '2025',
      title: 'Fourth Generation',
      description: 'Today, the fourth generation of the Sharma family continues the legacy of exceptional hospitality and heritage preservation.',
      icon: Heart,
      image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const familyMembers = [
    {
      name: 'Aarav Sharma',
      role: 'Managing Director',
      description: 'Fourth generation heir, passionate about preserving heritage while embracing innovation.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Aadhya Rajput',
      role: 'Guest Relations Director',
      description: 'Ensures every guest experiences the warmth and personal touch of traditional Indian hospitality.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Chef Vihaan Chauhan',
      role: 'Executive Chef',
      description: 'Master of royal Rajasthani cuisine, preserving centuries-old recipes with modern presentation.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    }
  ];

  const values = [
    {
      icon: Crown,
      title: 'Royal Heritage',
      description: 'Preserving the grandeur and traditions of Rajasthani royalty in every detail.'
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description: 'Every guest is treated as family, with personalized service that creates lasting memories.'
    },
    {
      icon: Star,
      title: 'Authentic Experience',
      description: 'Genuine cultural immersion through architecture, cuisine, and traditional hospitality.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Unwavering commitment to the highest standards of luxury and service quality.'
    }
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-b from-[#FAF9F6] to-[#F5F5DC] heritage-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Clock className="text-[#D4AF37] mr-3" size={32} />
            <span className="text-[#8B1538] font-sans text-sm font-semibold tracking-widest uppercase">Our Legacy</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B1538] mb-6 heritage-elegant-divider">
            150 Years of 
            <span className="text-[#D4AF37]"> Royal Hospitality</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From a Maharaja's summer palace to India's most cherished heritage hotel, 
            our story is woven with threads of tradition, luxury, and unwavering dedication to our guests.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#8B1538] text-center mb-12">
            Our Journey Through Time
          </h3>
          
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#D4AF37] via-[#8B1538] to-[#D4AF37] opacity-30"></div>
            
            <div className="space-y-12 md:space-y-16">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Card */}
                  <div className="w-full md:w-5/12 mb-6 md:mb-0">
                    <Card hover className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-[#8B1538] p-3 rounded-full mr-4">
                            <event.icon className="text-[#D4AF37]" size={24} />
                          </div>
                          <div>
                            <div className="text-3xl font-serif font-bold text-[#D4AF37]">{event.year}</div>
                            <h4 className="text-xl font-serif font-semibold text-[#8B1538]">{event.title}</h4>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-6 h-6 bg-[#D4AF37] rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-5/12">
                    <div className="relative overflow-hidden rounded-xl shadow-xl heritage-hover-lift">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#8B1538]/30 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Family Legacy */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#8B1538] mb-4 heritage-elegant-divider">
              The Sharma Family Legacy
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals who ensure every guest experiences the warmth, 
              tradition, and excellence that defines Heritage Grand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {familyMembers.map((member, index) => (
              <Card key={index} hover className="text-center">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-xl border-4 border-[#D4AF37]"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#8B1538] text-white px-4 py-1 rounded-full text-sm font-sans">
                      {member.role}
                    </div>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#8B1538] mb-3">{member.name}</h4>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white/50 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#8B1538] mb-4 heritage-elegant-divider">
              Our Guiding Values
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              These timeless principles have guided our family for four generations, 
              shaping every interaction and experience at Heritage Grand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-[#8B1538] to-[#A61E4D] p-6 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <value.icon className="text-[#D4AF37] w-8 h-8 mx-auto" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#8B1538] mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage Quote */}
        <div className="text-center mt-16">
          <blockquote className="font-serif text-2xl md:text-3xl italic text-[#8B1538] mb-6 max-w-4xl mx-auto leading-relaxed">
            "We don't just preserve history; we create it. Every guest who walks through our doors 
            becomes part of our continuing story, adding their own chapter to our legacy."
          </blockquote>
          <cite className="font-sans text-lg text-[#D4AF37] font-semibold">
            — Aarav Sharma, Managing Director
          </cite>
        </div>
      </div>
    </section>
  );
};

export { OurStory };