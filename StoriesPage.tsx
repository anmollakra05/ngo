import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Filter } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import StoryCard from '../components/StoryCard';

// Mock data for stories
const stories = [
  {
    id: "clean-water-initiative",
    title: "Clean Water Initiative Reaches 10,000 People",
    excerpt: "How one fellow's project is bringing sustainable water solutions to rural communities in East Africa through innovative rainwater harvesting systems and community-led maintenance programs.",
    image: "https://images.pexels.com/photos/2962875/pexels-photo-2962875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fellow: "Samuel Mwangi",
    program: "Global Leadership Fellowship",
    year: "2023",
    category: "Environmental"
  },
  {
    id: "tech-education",
    title: "Bridging the Tech Education Gap",
    excerpt: "A mobile coding school that's bringing digital skills to underserved youth in urban neighborhoods, helping them secure jobs in the growing tech industry and break cycles of poverty.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fellow: "Jasmine Rodriguez",
    program: "Social Entrepreneurship Program",
    year: "2022",
    category: "Education"
  },
  {
    id: "sustainable-farming",
    title: "Sustainable Farming Network Expands",
    excerpt: "How a cooperative of small-scale farmers is adopting climate-smart agriculture practices to improve yields while protecting the environment and building resilience to climate change.",
    image: "https://images.pexels.com/photos/2382895/pexels-photo-2382895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fellow: "Raj Patel",
    program: "Climate Action Fellowship",
    year: "2023",
    category: "Agriculture"
  },
  {
    id: "womens-health-clinic",
    title: "Women's Health Clinic Transforms Community",
    excerpt: "A fellow's journey to establish a women's health clinic in her rural hometown that has now served over 5,000 women and reduced maternal mortality rates by 40% in just two years.",
    image: "https://images.pexels.com/photos/7088491/pexels-photo-7088491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fellow: "Dr. Aisha Okonkwo",
    program: "Public Health Advocacy Fellowship",
    year: "2021",
    category: "Healthcare"
  },
  {
    id: "youth-mentorship",
    title: "Youth Mentorship Program Changes Lives",
    excerpt: "How a structured mentorship program is helping at-risk youth stay in school, develop leadership skills, and create positive futures through one-on-one guidance and community support.",
    image: "https://images.pexels.com/photos/7845510/pexels-photo-7845510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fellow: "Marcus Johnson",
    program: "Youth Leadership Accelerator",
    year: "2022",
    category: "Education"
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy Solutions for Remote Villages",
    excerpt: "A fellow's innovative approach to bringing affordable solar power to off-grid communities, empowering local entrepreneurs and improving quality of life through reliable electricity.",
    image: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fellow: "Elena Sanchez",
    program: "Climate Action Fellowship",
    year: "2021",
    category: "Energy"
  },
  {
    id: "arts-education",
    title: "Arts Education Program Fosters Creative Expression",
    excerpt: "How introducing arts education in underserved schools is improving academic performance, building confidence, and creating new opportunities for creative expression and community connection.",
    image: "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fellow: "David Kim",
    program: "Education Innovation Fellowship",
    year: "2023",
    category: "Education"
  },
  {
    id: "mental-health-awareness",
    title: "Breaking Mental Health Stigma in Communities",
    excerpt: "A grassroots campaign that's changing attitudes about mental health through education, peer support groups, and accessible resources that have reached over 15,000 people.",
    image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fellow: "Sofia Hernandez",
    program: "Public Health Advocacy Fellowship",
    year: "2022",
    category: "Healthcare"
  },
  {
    id: "refugee-support",
    title: "Building New Beginnings for Refugee Families",
    excerpt: "An innovative integration program that helps refugee families build social connections, develop job skills, and access resources needed to establish stable lives in their new communities.",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    fellow: "Fatima Al-Zahawi",
    program: "Global Leadership Fellowship",
    year: "2021",
    category: "Social Justice"
  }
];

// Get unique categories, programs, and years for filters
const categories = Array.from(new Set(stories.map(story => story.category)));
const programs = Array.from(new Set(stories.map(story => story.program)));
const years = Array.from(new Set(stories.map(story => story.year)));

const StoriesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedProgram('');
    setSelectedYear('');
  };

  // Filter stories based on search and filter selections
  const filteredStories = stories.filter(story => {
    const matchesSearch = searchTerm === '' || 
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.fellow.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || story.category === selectedCategory;
    const matchesProgram = selectedProgram === '' || story.program === selectedProgram;
    const matchesYear = selectedYear === '' || story.year === selectedYear;
    
    return matchesSearch && matchesCategory && matchesProgram && matchesYear;
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-primary-100">
              Explore the journeys and achievements of our fellows as they create positive change in communities around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Featured Story"
            subtitle="Discover how our fellows are making meaningful impact through their projects."
          />
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Clean water initiative in East Africa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                    Environmental
                  </span>
                  <span className="text-sm text-gray-500">2023</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Clean Water Initiative Changes Lives in East Africa</h2>
                <p className="text-gray-600 mb-6">
                  When Samuel Mwangi joined our Global Leadership Fellowship in 2022, he had a vision to transform water access in his community. A year later, his project has provided clean water to over 10,000 people across 15 villages through innovative rainwater harvesting systems and community-led maintenance programs.
                </p>
                <div className="flex items-center mb-6">
                  <img
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Samuel Mwangi"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium">Samuel Mwangi</p>
                    <p className="text-sm text-gray-500">Global Leadership Fellow</p>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="text-primary-600 font-medium hover:text-primary-800 transition-colors"
                >
                  Read Full Story →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Browse All Stories"
            subtitle="Filter stories by category, program, or year to find the ones that interest you most."
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
                  placeholder="Search stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Filter Toggle (Mobile) */}
              <button 
                className="md:hidden flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-md"
                onClick={toggleFilters}
              >
                <Filter size={18} />
                <span>Filters</span>
              </button>
              
              {/* Filters (Desktop) */}
              <div className="hidden md:flex space-x-4">
                <select
                  className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select
                  className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                >
                  <option value="">All Programs</option>
                  {programs.map(program => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
                
                <select
                  className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200 text-gray-700"
                  onClick={resetFilters}
                >
                  Reset
                </button>
              </div>
            </div>
            
            {/* Mobile Filters */}
            {showFilters && (
              <div className="md:hidden bg-white p-4 rounded-md shadow-md space-y-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Program</label>
                  <select
                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                  >
                    <option value="">All Programs</option>
                    {programs.map(program => (
                      <option key={program} value={program}>{program}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  <select
                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="">All Years</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                
                <button 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200 text-gray-700"
                  onClick={resetFilters}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
          
          {/* Results */}
          {filteredStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story, index) => (
                <StoryCard
                  key={story.id}
                  id={story.id}
                  title={story.title}
                  excerpt={story.excerpt}
                  image={story.image}
                  fellow={story.fellow}
                  program={story.program}
                  year={story.year}
                  delay={index + 1}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No stories found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filters to find what you're looking for.</p>
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
    </div>
  );
};

export default StoriesPage;