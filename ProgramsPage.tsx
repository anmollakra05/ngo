import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Calendar, MapPin, Trophy, GraduationCap, Briefcase, Heart, BarChart } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ProgramCard from '../components/ProgramCard';

const ProgramsPage: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fellowship Programs</h1>
            <p className="text-xl text-primary-100 mb-8">
              Discover our range of fellowship opportunities designed to support leaders 
              at different stages of their journey to create positive social impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Program Overview"
            subtitle="Our fellowships combine structured learning, mentorship, and real-world application to develop the skills, networks, and opportunities needed to drive meaningful change."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Fellows in discussion"
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
              <h3 className="text-2xl font-semibold mb-4">What Our Programs Offer</h3>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 text-primary-700 p-3 rounded-full">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Tailored Curriculum</h4>
                  <p className="text-gray-600">
                    Structured learning experiences focused on developing specific skills relevant to your field.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 text-primary-700 p-3 rounded-full">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Dedicated Mentorship</h4>
                  <p className="text-gray-600">
                    One-on-one guidance from experienced professionals who provide feedback and support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 text-primary-700 p-3 rounded-full">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Project-Based Learning</h4>
                  <p className="text-gray-600">
                    Apply your skills to real-world challenges through meaningful projects that create impact.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 text-primary-700 p-3 rounded-full">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Community Support</h4>
                  <p className="text-gray-600">
                    Join a diverse network of changemakers who collaborate, share resources, and inspire each other.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Programs */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Our Fellowship Programs"
            subtitle="Explore our range of programs and find the opportunity that aligns with your goals and interests."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Global Leadership Fellowship"
              description="Develop the leadership skills needed to drive positive change in your community through this intensive 12-month program."
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

            <ProgramCard
              title="Education Innovation Fellowship"
              description="Design and implement innovative approaches to education that increase access and improve outcomes."
              duration="8 Months"
              location="Remote with In-Person Components"
              image="https://images.pexels.com/photos/8471767/pexels-photo-8471767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={4}
            />

            <ProgramCard
              title="Public Health Advocacy Fellowship"
              description="Develop the skills to advocate for equitable healthcare policies and implement community health initiatives."
              duration="10 Months"
              location="Regional"
              image="https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={5}
            />

            <ProgramCard
              title="Youth Leadership Accelerator"
              description="A program specifically designed for emerging leaders under 25 who are passionate about creating change."
              duration="6 Months"
              location="Multiple Locations"
              image="https://images.pexels.com/photos/8085845/pexels-photo-8085845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={6}
            />
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="section">
        <div className="container">
          <div className="bg-primary-50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
                <div className="bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  Featured Program
                </div>
                <h2 className="text-3xl font-bold mb-4">Global Leadership Fellowship</h2>
                <p className="text-gray-600 mb-6">
                  Our flagship program brings together promising leaders from around the world for an intensive 12-month experience combining leadership development, project implementation, and global networking.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar size={20} className="text-primary-600 mr-2" />
                    <span>12 Month Duration</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={20} className="text-primary-600 mr-2" />
                    <span>Global Locations</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={20} className="text-primary-600 mr-2" />
                    <span>25 Fellows per Cohort</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy size={20} className="text-primary-600 mr-2" />
                    <span>$10,000 Project Grant</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">Program Components:</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="bg-primary-100 text-primary-700 p-1 rounded-full mr-2 mt-1">
                      <BarChart size={16} />
                    </div>
                    <span>4-week intensive training at a global hub</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 text-primary-700 p-1 rounded-full mr-2 mt-1">
                      <BarChart size={16} />
                    </div>
                    <span>Community-based project implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 text-primary-700 p-1 rounded-full mr-2 mt-1">
                      <BarChart size={16} />
                    </div>
                    <span>Monthly virtual learning sessions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 text-primary-700 p-1 rounded-full mr-2 mt-1">
                      <BarChart size={16} />
                    </div>
                    <span>Executive mentorship from industry leaders</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 text-primary-700 p-1 rounded-full mr-2 mt-1">
                      <BarChart size={16} />
                    </div>
                    <span>Global summit and capstone presentation</span>
                  </li>
                </ul>

                <Button href="/apply" variant="primary">
                  Apply to this Program
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Global Leadership Fellows"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Application Process"
            subtitle="Our selection process is designed to identify candidates with the passion, skills, and commitment to create positive social change."
            centered
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center z-10 font-bold">
                    1
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
                  <h3 className="text-xl font-semibold mb-2">Online Application</h3>
                  <p className="text-gray-600 mb-4">
                    Complete our comprehensive application form, sharing your background, experience, and vision for social impact.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>Deadline: December 15, 2024</span>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center z-10 font-bold">
                    2
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
                  <h3 className="text-xl font-semibold mb-2">Project Proposal</h3>
                  <p className="text-gray-600 mb-4">
                    Shortlisted candidates submit a detailed proposal outlining their project idea and implementation plan.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>By January 31, 2025</span>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center z-10 font-bold">
                    3
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
                  <h3 className="text-xl font-semibold mb-2">Virtual Interview</h3>
                  <p className="text-gray-600 mb-4">
                    Selected candidates participate in a video interview with our selection committee to discuss their application and proposal.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>February 2025</span>
                  </div>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center z-10 font-bold">
                    4
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
                  <h3 className="text-xl font-semibold mb-2">Final Selection</h3>
                  <p className="text-gray-600 mb-4">
                    Successful candidates are notified of their acceptance and provided with onboarding information to begin their fellowship journey.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>March 2025</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our fellowship programs."
            centered
          />

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h4 className="text-lg font-semibold mb-2">Who can apply for the fellowships?</h4>
              <p className="text-gray-600">
                Our programs are open to individuals 18 years and older from any country. Each program has specific eligibility requirements based on experience level, background, and area of focus.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h4 className="text-lg font-semibold mb-2">Is there a cost to participate?</h4>
              <p className="text-gray-600">
                Our fellowships are fully funded, including program materials, training, and mentorship. Some programs also include stipends or project grants. Fellows are typically responsible for their own travel and accommodation costs for in-person components.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h4 className="text-lg font-semibold mb-2">What is the time commitment?</h4>
              <p className="text-gray-600">
                Time commitments vary by program, ranging from 6-12 months. Most programs require 10-15 hours per week for virtual components and full-time participation during in-person sessions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h4 className="text-lg font-semibold mb-2">Can I apply to multiple programs?</h4>
              <p className="text-gray-600">
                Yes, you can apply to multiple programs, but we recommend focusing on the one that best aligns with your goals and experience. If selected for multiple programs, you would need to choose one as the programs run concurrently.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h4 className="text-lg font-semibold mb-2">What happens after the fellowship ends?</h4>
              <p className="text-gray-600">
                Fellows join our alumni network, gaining access to ongoing resources, networking opportunities, and potential funding for their projects. Many alumni continue to collaborate with each other and serve as mentors for new fellows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 mt-12">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="People collaborating"
            className="object-cover w-full h-full brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 container">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply?</h2>
            <p className="text-lg mb-8">
              Take the first step toward your fellowship journey. Applications for our 2025 cohorts are now open.
            </p>
            <Button href="/apply" variant="primary" className="text-lg px-8 py-4">
              Start Your Application
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;