import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
  const baseClasses = "bg-white rounded-xl shadow-md p-8";
  const hoverClasses = hover ? "hover:shadow-lg transition-all hover:scale-105" : "";
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;