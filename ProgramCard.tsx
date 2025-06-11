import React from 'react';
import Button from './Button';
import AnimatedCard from './AnimatedCard';

interface ProgramCardProps {
  title: string;
  description: string;
  duration: string;
  location: string;
  image: string;
  delay?: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  duration,
  location,
  image,
  delay = 0
}) => {
  return (
    <AnimatedCard delay={delay} className="card-hover overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-sm bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
            {duration}
          </span>
          <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
            {location}
          </span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex justify-between items-center">
          <Button href="/apply" variant="secondary">
            Learn More
          </Button>
          <Button href="/apply" variant="primary">
            Apply
          </Button>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default ProgramCard;