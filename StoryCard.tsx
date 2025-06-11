import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedCard from './AnimatedCard';

interface StoryCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  fellow: string;
  program: string;
  year: string;
  delay?: number;
}

const StoryCard: React.FC<StoryCardProps> = ({
  id,
  title,
  excerpt,
  image,
  fellow,
  program,
  year,
  delay = 0
}) => {
  return (
    <AnimatedCard delay={delay} className="card-hover h-full">
      <Link to={`/stories/${id}`} className="block h-full">
        <div className="h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-primary-600 font-medium">{program}</span>
            <span className="text-sm text-gray-500">{year}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-700">By {fellow}</span>
          </div>
        </div>
      </Link>
    </AnimatedCard>
  );
};

export default StoryCard;