import React from 'react';
import uganiLogo from '../assets/Ugani Logo.png';

const ContactPage = () => {
  return (
    <div className="pt-24 bg-white font-sans text-gray-900">
      
      {/* --- SECTION 1: THE "ABOUT" CONTEXT --- */}
      <section className="py-16 px-6 lg:px-24 bg-green-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-4">Our Mission</h2>
            <h3 className="text-4xl font-bold text-green-900 mb-6">Restoring Mobility in Kenya</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Prothea Kenya is a specialized prosthetic center based in Nairobi. We use advanced **3D scanning and printing** technology to provide custom-fit devices that are lightweight, durable, and significantly more affordable than traditional methods.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a subsidiary of **Ugani Prosthetics (Belgium)**, we combine European engineering standards with local Kenyan expertise to ensure every patient regains their independence.
            </p>
          </div>
          
          <div className="flex-1 bg-white p-8 rounded-3xl shadow-sm border border-green-100 flex flex-col items-center text-center">
            <img src={uganiLogo} alt="Ugani Logo" className="h-20 mb-4 object-contain" />
            <p className="text-sm text-gray-500 italic mb-4">Strategic Global Partner</p>
            <a 
              href="https://ugani.org/en/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 font-bold hover:text-orange-600 transition"
            >
              Visit Ugani Belgium →
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: DIRECT CONTACT CHANNELS --- */}
      <section className="py-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600">Reach out directly to our Nairobi specialists via the channels below.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* WHATSAPP */}
            <a 
              href="https://wa.me/254700345822" 
              className="flex flex-col items-center p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform"></div>
              <h4 className="text-xl font-bold text-green-900 mb-2">WhatsApp Us</h4>
              <p className="text-gray-500 text-sm text-center mb-6">Fastest for patient inquiries and technical support.</p>
              <span className="text-orange-600 font-bold">Chat Now &rarr;</span>
            </a>

            {/* CALL */}
            <div className="flex flex-col items-center p-10 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="text-5xl mb-6"></div>
              <h4 className="text-xl font-bold text-green-900 mb-2">Call Office</h4>
              <p className="text-gray-500 text-sm text-center mb-4">Available Mon-Fri<br/>9:30 AM — 5:00 PM</p>
              <span className="text-green-700 font-bold text-lg"> +254 700 345 822</span>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col items-center p-10 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="text-5xl mb-6"></div>
              <h4 className="text-xl font-bold text-green-900 mb-2">Email Us</h4>
              <p className="text-gray-500 text-sm text-center mb-6">Best for partnerships and medical referrals.</p>
              <span className="text-orange-600 font-bold">info@prothea.co.ke</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: LOCATION & MAP --- */}
      <section className="py-20 px-6 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-green-900 mb-6">Visit Our Lab</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our 3D printing facility and clinic are located in Nairobi. We welcome patients, students, and medical professionals for live demonstrations of our 3D prosthetic workflow.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-800">
                <span className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">📍</span>
                <span>Kindaruma Road, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-4 text-gray-800">
                <span className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">🚗</span>
                <span>Free parking available for patients</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default ContactPage;