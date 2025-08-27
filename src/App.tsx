import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { OurStory } from './components/sections/OurStory';
import { RoomsSuites } from './components/sections/RoomsSuites';
import { DiningExperiences } from './components/sections/DiningExperiences';
import { ExperiencePackages } from './components/sections/ExperiencePackages';
import { TestimonialsGallery } from './components/sections/TestimonialsGallery';
import { BookingContact } from './components/sections/BookingContact';
import './styles/tokens.css';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <main>
        <Hero />
        <OurStory />
        <RoomsSuites />
        <DiningExperiences />
        <ExperiencePackages />
        <TestimonialsGallery />
        <BookingContact />
        <BookingContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;