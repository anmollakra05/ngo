import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  delay?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  image,
  date,
  author,
  category,
  delay = 0
}) => {
  return (
    <AnimatedCard delay={delay} className="card-hover h-full">
      <Link to={`/blog/${id}`} className="block h-full">
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-3">
            <span className="text-sm bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="flex items-center">
              <Calendar size={16} className="mr-1" />
              {date}
            </span>
            <span>By {author}</span>
          </div>
        </div>
      </Link>
    </AnimatedCard>
  );
};

export default BlogCard;