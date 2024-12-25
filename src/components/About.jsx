import React from 'react';
import { History, Landmark } from 'lucide-react';
import { SITE_CONTENT } from '../constants/content';
import Section from './ui/Section';
import Card from './ui/Card';

const About = () => {
  return (
    <Section id="about">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        About the Monument
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <div className="flex items-center mb-6">
            <History className="h-8 w-8 text-blue-600 mr-4" />
            <h3 className="text-2xl font-semibold text-gray-800">
              {SITE_CONTENT.ABOUT.ANCIENT_ORIGINS.TITLE}
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            {SITE_CONTENT.ABOUT.ANCIENT_ORIGINS.DESCRIPTION}
          </p>
        </Card>
        
        <Card>
          <div className="flex items-center mb-6">
            <Landmark className="h-8 w-8 text-blue-600 mr-4" />
            <h3 className="text-2xl font-semibold text-gray-800">
              {SITE_CONTENT.ABOUT.ARCHITECTURAL_MARVEL.TITLE}
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            {SITE_CONTENT.ABOUT.ARCHITECTURAL_MARVEL.DESCRIPTION}
          </p>
        </Card>
      </div>
    </Section>
  );
};

export default About;