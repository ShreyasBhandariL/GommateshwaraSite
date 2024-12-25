import React from 'react';
import { Map, Clock, Sun, Calendar } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';

const TravelGuide = () => {
  const guides = [
    {
      icon: Clock,
      title: "Best Time to Visit",
      description: "The statue is open from 6 AM to 6 PM daily. Early morning visits are recommended for the best experience."
    },
    {
      icon: Calendar,
      title: "Duration",
      description: "Plan for at least 2-3 hours to fully explore the statue and surrounding areas."
    },
    {
      icon: Sun,
      title: "Weather",
      description: "October to March is ideal with pleasant weather. Summers can be hot, so carry water and sun protection."
    },
    {
      icon: Map,
      title: "Local Guide",
      description: "Local guides are available at the entrance. They provide detailed historical and cultural insights."
    }
  ];

  return (
    <Section id="travel-guide" bg="bg-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        Travel Guide
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {guides.map((guide, index) => {
          const Icon = guide.icon;
          return (
            <Card key={index}>
              <div className="flex items-start">
                <Icon className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default TravelGuide;