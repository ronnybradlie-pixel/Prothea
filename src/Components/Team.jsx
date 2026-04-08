import React from 'react';
import jeff from '../assets/Jefff.jpg';
import NICK from '../assets/NICK.jpg';
import belinda from '../assets/BELii.jpg';
import sammy from '../assets/sammy.jpg';
import florian from '../assets/florian.jpg';
import uganiLogo from '../assets/Ugani Logo.png';
import amoo from '../assets/amoo.jpeg';


const TeamPage = () => {
  const teamMembers = [
    {
      name: "Dr. Nick Were", 
      role: "Co-Founder & Director, Orthopaedic Surgeon",
      bio: "An orthopedic surgery resident at Kenyatta National Hospital committed to patient-centered care and integrating 3D technology to improve inclusive orthopedic care for all Kenyans.",
      image: NICK, 
    },
    {
      name: "Florian Vallaeys",
      role: "Co-Founder & Director",
      bio: "Co-founder of Ugani Prosthetics with an entrepreneurial mindset from startups. He led the launch of Prothea Kenya as a subsidiary of Ugani to expand access for underserved patients.",
      image: florian,
    },
    {
      name: "Belinda Adhiambo",
      role: "Head of Operations",
      bio: "A disability advocate with 4+ years of experience in inclusion. Belinda oversees operations to ensure amputees receive vital care, championing dignity and mobility.",
      image: belinda,
    },
    {
      name: "Amos Wafula",
      role: "Chief Prosthetist",
      bio: "Brings nine years of experience in prosthetics and orthopedic technology, dedicated to improving quality of life through community-based rehabilitation.",
      image: amoo,
    },
    {
      name: "Jeff Maragia",
      role: "3D Engineer",
      bio: "Engineering, Tech. & 3D Printing Geek. The 'fixer of things' who manages the technical side of the 3D workflow.",
      image: jeff, 
    },
    {
      name: "Sammy",
      role: "Chief Financial Officer",
      bio: "Keeps the books and cash in order to ensure the sustainability of our affordable prosthetic solutions.",
      image: sammy,
    }
  ];

  return (
    <div className="pt-24 bg-white font-sans text-gray-900">
      
      {/* --- HERITAGE SECTION --- */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-4">Ugani Prosthetics</h2>
              <h3 className="text-4xl font-bold text-green-900 mb-6">Driven by Innovation</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Prothea Kenya is the local branch of **Ugani Prosthetics**, a Belgian social enterprise dedicated to transforming prosthetic care through innovation and accessibility.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ugani has developed an innovative digital (3D) workflow that enables technologists to lower costs while increasing quality. With projects in Benin, Ghana, and Congo, we deliver advanced care locally in Nairobi.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100">
              <h4 className="text-xl font-bold text-green-800 mb-4 text-center">Our Diverse Team Includes</h4>
              <p className="text-gray-600 mb-6 text-sm text-center italic">
                A blend of Kenyan and European professionals combining global expertise with local insight.
              </p>
              <ul className="space-y-3 font-semibold text-gray-700">
                <li className="flex items-center gap-2">✅ Orthopaedic Surgeon & Technologists</li>
                <li className="flex items-center gap-2">✅ Control & 3D Engineers</li>
                <li className="flex items-center gap-2">✅ Entrepreneurs & Innovators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all group">
                
                {/* PHOTO CONTAINER */}
                <div className="mb-6">
                  {member.image ? (
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                  ) : (
                    <div className="text-4xl w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-md group-hover:scale-110 transition-transform">
                      {member.icon}
                    </div>
                  )}
                </div>

                <h4 className="text-2xl font-bold text-green-900 mb-1">{member.name}</h4>
                <p className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNERS SECTION --- */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-4">Our Strategic Partner</h2>
          
          <div className="flex justify-center mb-8">
            <img 
              src={uganiLogo} 
              alt="ugani prosthetics" 
              className="h-20 md:h-28 w-auto transition-all duration-500 cursor-pointer"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-green-900 mb-6">Ugani Prosthetics</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Based in Belgium, Ugani Prosthetics empowers local clinics with 3D scanning and printing technology 
              to create affordable, high-quality prosthetics. Together, we are scaling inclusive orthopedic care across Kenya.
            </p>
            
            {/* BUTTON LINK */}
            <a 
              href="https://ugani.org/en/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-bold py-3 px-10 rounded-full transition-all group"
            >
              Learn more about Ugani
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;