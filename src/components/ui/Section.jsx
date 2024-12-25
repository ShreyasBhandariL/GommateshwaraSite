import React from 'react';
import Container from './Container';

const Section = ({ children, id, className = '', bg = 'bg-gray-50' }) => {
  return (
    <section id={id} className={`py-20 ${bg} ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;