import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import EventDetails from '../components/EventDetails';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Loader from '../components/ui/Loader';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Hero />
        <OurStory />
        <EventDetails />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
