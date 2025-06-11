import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Users, Award, Globe, Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import ProgramCard from '../components/ProgramCard';
import StoryCard from '../components/StoryCard';

const HomePage: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Group of diverse people collaborating"
            className="object-cover w-full h-full brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Empowering Leaders to <span className="text-primary-400">Create Change</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Our fellowship programs connect passionate individuals with the resources, 
              mentorship, and community they need to address pressing global challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/programs" variant="primary" className="text-base">
                Explore Programs
              </Button>
              <Button href="/apply" variant="secondary" className="text-base bg-white/90">
                Apply Now
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <a href="#mission" className="flex flex-col items-center">
            <span className="mb-2 text-sm">Learn More</span>
            <ChevronRight size={24} className="transform rotate-90" />
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Our Mission" 
            subtitle="We're dedicated to nurturing the next generation of change-makers through immersive fellowship experiences that combine practical skills, community engagement, and global perspectives."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="People collaborating on social impact projects" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Users className="text-primary-600 mr-2" size={24} />
                  Diverse Community
                </h3>
                <p className="text-gray-600">
                  Join a global network of passionate individuals from diverse backgrounds, all working towards positive social change.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Award className="text-primary-600 mr-2" size={24} />
                  Expert Mentorship
                </h3>
                <p className="text-gray-600">
                  Learn from industry leaders, successful entrepreneurs, and experienced practitioners who guide your journey.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Globe className="text-primary-600 mr-2" size={24} />
                  Global Perspective
                </h3>
                <p className="text-gray-600">
                  Develop solutions with a global mindset, understanding how local actions can have worldwide impact.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Briefcase className="text-primary-600 mr-2" size={24} />
                  Real-World Experience
                </h3>
                <p className="text-gray-600">
                  Work on tangible projects that address real community needs, building your skills and portfolio.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary-700 text-white">
        <div className="container">
          <div 
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-xl text-primary-200">Fellows</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-5xl font-bold mb-2">35</p>
              <p className="text-xl text-primary-200">Countries</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-5xl font-bold mb-2">120+</p>
              <p className="text-xl text-primary-200">Projects</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-5xl font-bold mb-2">92%</p>
              <p className="text-xl text-primary-200">Success Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Our Fellowship Programs" 
            subtitle="Discover opportunities tailored to your interests and goals. Our programs combine structured learning with hands-on experience."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Global Leadership Fellowship"
              description="Develop leadership skills to drive positive change in your community through this intensive 12-month program."
              duration="12 Months"
              location="Global"
              image="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={1}
            />
            
            <ProgramCard
              title="Social Entrepreneurship Program"
              description="Learn how to build sustainable ventures that address social challenges while creating economic opportunity."
              duration="9 Months"
              location="Regional Hubs"
              image="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={2}
            />
            
            <ProgramCard
              title="Climate Action Fellowship"
              description="Join a community of environmental leaders working on innovative solutions to address climate change."
              duration="6 Months"
              location="Multiple Locations"
              image="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={3}
            />
          </div>
          
          <div className="text-center mt-12">
            <Button href="/programs" variant="secondary">
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Fellow Testimonials" 
            subtitle="Hear directly from our alumni about how the fellowship experience transformed their careers and communities."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The fellowship gave me not just skills, but a supportive community that continues to inspire my work in education reform. The mentorship I received was invaluable."
              name="Maya Johnson"
              role="Education Innovation Fellow '23"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={1}
            />
            
            <TestimonialCard
              quote="Through this program, I was able to transform my idea into a sustainable social enterprise that now employs 12 people and serves our local community."
              name="David Chen"
              role="Social Entrepreneurship Fellow '22"
              image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={2}
            />
            
            <TestimonialCard
              quote="The global perspective I gained was eye-opening. Working with fellows from different countries helped me understand how to create solutions that work across cultures."
              name="Aisha Olanrewaju"
              role="Global Leadership Fellow '23"
              image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Success Stories" 
            subtitle="Explore how our fellows are making a difference in communities around the world."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StoryCard
              id="clean-water-initiative"
              title="Clean Water Initiative Reaches 10,000 People"
              excerpt="How one fellow's project is bringing sustainable water solutions to rural communities in East Africa."
              image="https://images.pexels.com/photos/2962875/pexels-photo-2962875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              fellow="Samuel Mwangi"
              program="Global Leadership Fellowship"
              year="2023"
              delay={1}
            />
            
            <StoryCard
              id="tech-education"
              title="Bridging the Tech Education Gap"
              excerpt="A mobile coding school that's bringing digital skills to underserved youth in urban neighborhoods."
              image="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              fellow="Jasmine Rodriguez"
              program="Social Entrepreneurship Program"
              year="2022"
              delay={2}
            />
            
            <StoryCard
              id="sustainable-farming"
              title="Sustainable Farming Network Expands"
              excerpt="How a cooperative of small-scale farmers is adopting climate-smart agriculture practices."
              image="https://images.pexels.com/photos/2382895/pexels-photo-2382895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              fellow="Raj Patel"
              program="Climate Action Fellowship"
              year="2023"
              delay={3}
            />
          </div>
          
          <div className="text-center mt-12">
            <Button href="/stories" variant="secondary">
              Read More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="People collaborating"
            className="object-cover w-full h-full brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 container">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-lg mb-8">
              Applications are now open for our 2025 fellowship programs. Take the first step toward creating meaningful change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/apply" variant="primary">
                Apply Now
              </Button>
              <Button href="/contact" variant="secondary" className="bg-white/90">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;