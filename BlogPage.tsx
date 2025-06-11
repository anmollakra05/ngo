import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Calendar, User } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import BlogCard from '../components/BlogCard';

// Mock data for blog posts
const blogPosts = [
  {
    id: "fellowship-applications-open",
    title: "2025 Fellowship Applications Now Open",
    excerpt: "We're excited to announce that applications for our 2025 fellowship programs are now open. Learn about the application process and key dates for submission.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    category: "Announcements"
  },
  {
    id: "social-impact-measurement",
    title: "The Importance of Measuring Social Impact",
    excerpt: "How do we know if our social impact initiatives are truly making a difference? This article explores effective frameworks for measuring and evaluating impact.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "February 28, 2024",
    author: "Michael Chang",
    category: "Resources"
  },
  {
    id: "sustainable-development-goals",
    title: "Aligning Fellowship Projects with Sustainable Development Goals",
    excerpt: "A guide to understanding how fellowship projects can contribute to the United Nations Sustainable Development Goals (SDGs) for maximum impact.",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "February 14, 2024",
    author: "Elena Rodriguez",
    category: "Resources"
  },
  {
    id: "alumni-spotlight-maria",
    title: "Alumni Spotlight: Maria's Journey from Fellow to CEO",
    excerpt: "Former Climate Action Fellow Maria Sanchez shares her journey from developing a community solar project to founding a renewable energy company that now serves thousands.",
    image: "https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "January 30, 2024",
    author: "David Wilson",
    category: "Alumni Stories"
  },
  {
    id: "virtual-cohort-experience",
    title: "Creating Community in Virtual Fellowship Cohorts",
    excerpt: "How our fellowship programs are fostering meaningful connections and collaboration in virtual and hybrid environments during the global pandemic.",
    image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "January 15, 2024",
    author: "James Thompson",
    category: "Program Updates"
  },
  {
    id: "funding-social-ventures",
    title: "A Guide to Funding Your Social Venture",
    excerpt: "Explore different funding options for social ventures, from grants and impact investments to crowdfunding and sustainable business models.",
    image: "https://images.pexels.com/photos/7821685/pexels-photo-7821685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "December 20, 2023",
    author: "Aisha Mohammed",
    category: "Resources"
  },
  {
    id: "climate-fellowship-impact",
    title: "Climate Action Fellowship: Year in Review",
    excerpt: "A look back at the achievements and challenges of our Climate Action Fellowship program over the past year, featuring project highlights and lessons learned.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "December 5, 2023",
    author: "Thomas Greene",
    category: "Program Updates"
  },
  {
    id: "social-entrepreneurship-trends",
    title: "5 Emerging Trends in Social Entrepreneurship",
    excerpt: "From tech-enabled solutions to circular economy models, discover the trends shaping the future of social entrepreneurship around the world.",
    image: "https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "November 18, 2023",
    author: "Priya Patel",
    category: "Thought Leadership"
  },
  {
    id: "fellowship-tips",
    title: "Tips for a Successful Fellowship Application",
    excerpt: "Former selection committee members share their insights and advice for crafting a compelling fellowship application that stands out from the crowd.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "November 2, 2023",
    author: "Carlos Mendoza",
    category: "Resources"
  }
];

// Get unique categories for filters
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  // Filter blog posts based on search and category selection
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Header */}
      <section className="bg-primary-700 text-white py-20">
        <div className="container">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-primary-100">
              Stay updated with the latest news, insights, and resources from our fellowship community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Featured Article"
            subtitle="Our latest insights and updates from the fellowship community."
          />
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                    Thought Leadership
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-1" />
                    <span>April 5, 2024</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">Reimagining Leadership for Social Change</h2>
                
                <p className="text-gray-600 mb-6">
                  As we face increasingly complex global challenges, from climate change to social inequality, traditional models of leadership are being questioned. What does effective leadership look like in the context of social change? How can we cultivate the skills and mindsets needed to address these challenges? This article explores emerging frameworks for leadership in the social impact sector.
                </p>
                
                <div className="flex items-center mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <User size={16} className="mr-1" />
                    <span>By Maria Gonzalez, Executive Director</span>
                  </div>
                </div>
                
                <a 
                  href="#" 
                  className="text-primary-600 font-medium hover:text-primary-800 transition-colors"
                >
                  Read Full Article →
                </a>
              </div>
              
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Leadership for social change"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Latest Articles"
            subtitle="Browse our collection of articles, resources, and updates from the fellowship community."
          />
          
          {/* Search and Filters */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Category Filter */}
              <select
                className="block w-full md:w-auto pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              {/* Reset Button */}
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200 text-gray-700"
                onClick={resetFilters}
              >
                Reset
              </button>
            </div>
          </div>
          
          {/* Results */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  date={post.date}
                  author={post.author}
                  category={post.category}
                  delay={index + 1}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or category filter to find what you're looking for.</p>
              <button 
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section bg-primary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Stay updated with the latest articles, resources, and opportunities from our fellowship community. We send monthly updates with curated content.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
              <button 
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;