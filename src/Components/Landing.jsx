import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Added for working links

// 1. ASSETS - Ensure these paths match your folder structure
import heroImage1 from '../assets/hero.jpeg'; 
import heroImage2 from '../assets/hero2.jpeg';
import logo from '../assets/Prothea logo.png';

// 2. WORKFLOW DATA (Updated with your specific text)
const WORKFLOW_STEPS = [
  {
    title: "3D Scanning",
    icon: "👥", 
    desc: "Once you're assessed by one of our prosthetists, we use iPhones equipped with high-precision 3D scanner to create a detailed digital model of your residual limb."
  },
  {
    title: "3D Modelling",
    icon: "🚗", 
    desc: "A precise digital socket model is modelled around your scan using Ufit—our custom made Blender add-on for designing personalized prosthetics."
  },
  {
    title: "3D Printing",
    icon: "💼", 
    desc: "Once the digital socket is modelled, it is then 3D Printed using top tier medical grade prosthetic materials."
  },
  {
    title: "Get Fitted",
    icon: "❤️", 
    desc: "After printing and assembling the prosthetic, we ensure a comfortable fit and guide you through personalized gait training."
  }
];

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroImages = [heroImage1, heroImage2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero Slideshow Logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [heroImages.length]);

  // Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white">
      
      {/* --- CROSS-FADE HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        
        {heroImages.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt="Hero"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="relative z-20 px-6 md:px-20 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Journey to <br/>
            <span className="text-orange-500">Mobility</span> Starts Here
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
            At Prothea Kenya, we are passionately committed to the holistic 
            well-being of every patient who walks through our doors.
          </p>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">About Prothea</h2>
            <h3 className="text-4xl font-bold text-green-900 mb-6">Restoring Hope Through Innovation</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Prothea Kenya is a leading provider of advanced prosthetic and orthotic solutions. 
              We don't just provide devices; we provide a new lease on life. Our team of 
              dedicated specialists combines years of clinical expertise with the latest 
              technological advancements to ensure every patient regains their independence.
            </p>
            <p className="mb-6">
              Prothea Kenya is a forward-thinking prosthetics company committed to restoring mobility, 
              independence, and dignity for individuals who have experienced limb loss. By combining 
              clinical expertise with cutting-edge technology, Prothea leverages advanced 3D scanning, 
              digital modeling, and precision 3D printing to design and produce high-quality prosthetic 
              legs tailored to each patient's unique needs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              At the heart of Prothea Kenya's work is a deep belief that mobility is a fundamental right.
              The company works closely with patients throughout their rehabilitation journey—from assessment
              and fitting to follow-up care—ensuring that each individual regains confidence and the ability 
              to actively participate in daily life.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img src={logo} alt="Prothea Branding" className="w-full h-full object-contain p-10 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* --- PROSTHETICS REDEFINED (Workflow Section) --- */}
      <section id="workflow" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Prosthetics Redefined</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg">
              In the spirit of continually pushing the boundaries of innovation, We created a 
              <span className="text-green-700 font-semibold"> Digital 3D workflow </span> 
              in the Design and Manufacture of Prosthetics and Orthotics. 
              This enables us to be fast and efficient—producing a device in as little as 8 hours!
            </p>
            <p className="mt-4 text-orange-600 font-medium italic">Our workflow follows a four-step process:</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {WORKFLOW_STEPS.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="text-4xl mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;