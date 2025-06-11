import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-100">
              Have questions about our fellowship programs? We're here to help. Reach out to us using the contact information below or send us a message.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <SectionHeading
                title="Get in Touch"
                subtitle="We're always happy to hear from potential fellows, partners, and community members."
              />
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 text-primary-700 p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-1">General Inquiries:</p>
                    <a href="mailto:info@impactfellows.org" className="text-primary-600 hover:underline">
                      info@impactfellows.org
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Applications:</p>
                    <a href="mailto:applications@impactfellows.org" className="text-primary-600 hover:underline">
                      applications@impactfellows.org
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 text-primary-700 p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600 mb-1">Main Office:</p>
                    <a href="tel:+12345678901" className="text-primary-600 hover:underline">
                      +1 (234) 567-8901
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Fellowship Support:</p>
                    <a href="tel:+12345678902" className="text-primary-600 hover:underline">
                      +1 (234) 567-8902
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 text-primary-700 p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      ImpactFellows Headquarters<br />
                      123 Impact Street<br />
                      Global City, 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 text-primary-700 p-3 rounded-full">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM (EST)<br />
                      Saturday - Sunday: Closed
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Response time: We aim to respond to all inquiries within 48 hours.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Global Presence */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Globe size={20} className="text-primary-600" />
                  <h3 className="text-xl font-semibold">Our Global Presence</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  While our headquarters is located in the United States, we have regional offices and partners around the world to support our global fellowship community.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-1">Africa</h4>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Asia</h4>
                    <p className="text-gray-600">Bangalore, India</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Europe</h4>
                    <p className="text-gray-600">Berlin, Germany</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Latin America</h4>
                    <p className="text-gray-600">Mexico City, Mexico</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Find Us"
            subtitle="Visit our headquarters or one of our regional offices around the world."
            centered
          />
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1619012784498!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions about contacting us and our fellowship programs."
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
              <h4 className="text-lg font-semibold mb-2">How quickly will I receive a response to my inquiry?</h4>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 48 hours during business days. If your question is related to an application in progress, please include your application ID for faster service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h4 className="text-lg font-semibold mb-2">Can I schedule a call to learn more about the fellowship programs?</h4>
              <p className="text-gray-600">
                Yes! We offer virtual information sessions twice a month. You can register for an upcoming session through our website. We also offer one-on-one calls for specific questions about your application or eligibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h4 className="text-lg font-semibold mb-2">I'm interested in partnering with ImpactFellows. Who should I contact?</h4>
              <p className="text-gray-600">
                For partnership inquiries, please email partnerships@impactfellows.org with details about your organization and proposed collaboration. Our partnerships team will get back to you to discuss potential opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h4 className="text-lg font-semibold mb-2">How can I stay updated on fellowship opportunities and news?</h4>
              <p className="text-gray-600">
                You can subscribe to our newsletter at the bottom of this page to receive monthly updates. You can also follow us on social media for the latest news, events, and application deadlines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;