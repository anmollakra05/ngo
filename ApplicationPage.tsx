import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, HelpCircle } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import ApplicationForm from '../components/ApplicationForm';

const ApplicationPage: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Apply for a Fellowship</h1>
            <p className="text-xl text-primary-100">
              Take the first step towards becoming part of our global community of change-makers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Info */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Application Information"
              subtitle="Before you begin your application, please review the following information to ensure you're prepared."
            />

            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-10">
              <h3 className="text-xl font-semibold mb-4">Key Dates</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 p-2 rounded-full mr-3">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Application Deadline</p>
                    <p className="text-gray-600">December 15, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 p-2 rounded-full mr-3">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Project Proposal Due</p>
                    <p className="text-gray-600">January 31, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 p-2 rounded-full mr-3">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Interview Period</p>
                    <p className="text-gray-600">February 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 p-2 rounded-full mr-3">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Final Selections Announced</p>
                    <p className="text-gray-600">March 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 p-2 rounded-full mr-3">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Fellowship Start Date</p>
                    <p className="text-gray-600">May 2025</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-10">
              <h3 className="text-xl font-semibold mb-4">Application Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 p-2 rounded-full mr-3">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Personal Information</p>
                    <p className="text-gray-600">Contact details and basic information about yourself.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 p-2 rounded-full mr-3">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Educational Background</p>
                    <p className="text-gray-600">Information about your academic history and qualifications.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 p-2 rounded-full mr-3">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Relevant Experience</p>
                    <p className="text-gray-600">Details about your work, volunteer, or project experience related to the fellowship area.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 p-2 rounded-full mr-3">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Personal Statement</p>
                    <p className="text-gray-600">An explanation of your interest in the fellowship and how you plan to create impact.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-700 p-2 rounded-full mr-3">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Resume/CV</p>
                    <p className="text-gray-600">A current resume or CV highlighting your relevant experiences and skills.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 md:p-8 mb-10 border border-primary-100">
              <div className="flex items-start">
                <HelpCircle className="text-primary-600 h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
                  <p className="text-gray-700 mb-4">
                    If you have questions about the application process or need assistance, please contact our team.
                  </p>
                  <p className="text-gray-700">
                    Email: <a href="mailto:applications@impactfellows.org" className="text-primary-600 hover:underline">applications@impactfellows.org</a>
                  </p>
                  <p className="text-gray-700">
                    Phone: +1 (234) 567-890 (Monday-Friday, 9am-5pm EST)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Fellowship Application"
              subtitle="Please complete all sections of the application form. You can save your progress and return to complete it later."
            />
            
            <ApplicationForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationPage;