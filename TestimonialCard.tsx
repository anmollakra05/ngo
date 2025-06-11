import React from 'react';
import { Quote } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  role, 
  image,
  delay = 0
}) => {
  return (
    <AnimatedCard delay={delay} className="p-6 flex flex-col h-full">
      <Quote className="text-primary-500 mb-4 h-10 w-10" />
      <p className="italic mb-6 text-gray-600 flex-grow">{quote}</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default TestimonialCard;