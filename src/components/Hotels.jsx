import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { IMAGES } from '../constants/images';
import Section from './ui/Section';
import Card from './ui/Card';

const hotels = [
  {
    name: "Hotel Karkala International",
    image: IMAGES.HOTELS.KARKALA_INTERNATIONAL,
    rating: 4,
    distance: "1.2 km from statue"
  },
  {
    name: "Heritage Inn",
    image: IMAGES.HOTELS.HERITAGE_INN,
    rating: 4.5,
    distance: "1.5 km from statue"
  },
  {
    name: "City Comfort Lodge",
    image: IMAGES.HOTELS.CITY_COMFORT,
    rating: 3.5,
    distance: "2 km from statue"
  }
];

const Hotels = () => {
  return (
    <Section id="hotels">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        Nearby Hotels
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel, index) => (
          <Card key={index} className="overflow-hidden p-0">
            <div 
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${hotel.image})` }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {hotel.name}
              </h3>
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2 text-gray-600">{hotel.rating}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{hotel.distance}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Hotels;