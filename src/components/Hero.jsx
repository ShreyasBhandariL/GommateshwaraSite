import React from 'react';
import { MapPin } from 'lucide-react';
import  image  from '../images/gommateshwara1.jpg';
import { SITE_CONTENT } from '../constants/content';

const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {SITE_CONTENT.HERO.TITLE}
          </h1>
          <div className="flex items-center justify-center text-white mb-8">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="text-xl">{SITE_CONTENT.HERO.LOCATION}</span>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {SITE_CONTENT.HERO.DESCRIPTION}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;