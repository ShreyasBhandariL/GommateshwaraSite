import React from 'react';
import { Train, Bus, Car } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';

const Transport = () => {
  return (
    <Section id="transport" bg="bg-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        How to Reach
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-gray-50">
          <Train className="h-12 w-12 text-blue-600 mb-6" />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">By Train</h3>
          <ul className="space-y-3 text-gray-600">
            <li>Nearest Railway Station: Udupi (30 km)</li>
            <li>Regular trains from Mangalore</li>
            <li>Taxi services available from station</li>
          </ul>
        </Card>
        
        <Card className="bg-gray-50">
          <Bus className="h-12 w-12 text-blue-600 mb-6" />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">By Bus</h3>
          <ul className="space-y-3 text-gray-600">
            <li>Karkala Bus Stand (2 km)</li>
            <li>Regular buses from Mangalore</li>
            <li>Local buses available every hour</li>
          </ul>
        </Card>
        
        <Card className="bg-gray-50">
          <Car className="h-12 w-12 text-blue-600 mb-6" />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">By Road</h3>
          <ul className="space-y-3 text-gray-600">
            <li>Well-connected to major cities</li>
            <li>Parking available at site</li>
            <li>Taxi services readily available</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
};

export default Transport;