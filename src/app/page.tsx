'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('✅ Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Display specific error message from server
        setSubmitMessage(`❌ ${data.error || 'Failed to send message. Please try again.'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('❌ Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Logo */}
              <div className="bg-[#0d0c0a] px-1 py-1 rounded-md border border-gray-600">
                <Image
                  src="/Logo.png"
                  alt="DevePolers Games Logo"
                  width={120}
                  height={40}
                  className="w-auto h-11"
                  priority
                />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About Us
                </a>
                <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Services
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            {/* Logo */}
            <div className="inline-block bg-[#0d0c0a] p-8 rounded-lg border-2 border-gray-600 shadow-2xl">
              <Image
                src="/Logo.png"
                alt="DevePolers Games Logo"
                width={200}
                height={200}
                className="w-auto h-20"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              DevePolers
            </span>
            <br />
            <span className="text-white">Games</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We create games and sell high-quality assets for developers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Our Assets
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              Our Games
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            DevePolers Games is a team of enthusiasts who combine creativity with technology 
            to create unique experiences in the gaming world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                We deliver the highest quality assets and create games that inspire and entertain. 
                Our goal is to support the game developer community through professional solutions.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
              <p className="text-gray-300">
                Years of experience in the gaming industry allow us to understand developers&apos; needs 
                and deliver products that truly facilitate game creation.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-lg border border-gray-700">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-4">100+</div>
                <p className="text-gray-300 text-lg">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive solutions for the gaming industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Assets */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">🎨</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Asset Sales</h3>
              </div>
              
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  2D and 3D Graphics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Character Animations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Special Effects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Music and Sounds
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Ready-made Scripts
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300">
                Browse Assets
              </button>
            </div>

            {/* Game Development */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">🎮</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Game Development</h3>
              </div>
              
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Mobile Games
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  PC/Console Games
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Browser Games
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Prototypes and MVP
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Technical Consulting
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-500 transition-all duration-300">
                Start Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Contact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your project? Get in touch with us!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Write to Us</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your project..."
                      rows={4}
                      required
                      className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  {submitMessage && (
                    <div className={`p-3 rounded-lg text-center ${
                      submitMessage.includes('successfully') 
                        ? 'bg-green-600/20 border border-green-600 text-green-300' 
                        : 'bg-red-600/20 border border-red-600 text-red-300'
                    }`}>
                      {submitMessage}
                    </div>
                  )}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">📧</span>
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-white font-semibold">devepolers@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">🌐</span>
                    </div>
                    <div>
                      <p className="text-gray-300">Website</p>
                      <p className="text-white font-semibold">www.devepolers.wegenerate.dev</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">⏰</span>
                    </div>
                    <div>
                      <p className="text-gray-300">Response Time</p>
                      <p className="text-white font-semibold">24h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-black px-4 py-2 rounded-md border border-gray-600 inline-block mb-4">
              <span className="text-white font-bold text-lg">DevePolers Games</span>
            </div>
            <p className="text-gray-400 mb-4">
              © 2024 DevePolers Games. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
