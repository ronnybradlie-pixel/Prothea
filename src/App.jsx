import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route,Navigate, Link, useLocation } from 'react-router-dom'
import LandingPage from './Components/Landing'
import Products from './Components/Products'
import OurTeampage from './Components/Team'
import logo from './assets/Prothea logo.png';
import './App.css'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Brand */}
        <div>
          <div className="text-xl font-bold text-orange-500 mb-4">
            PROTHEA<span className="text-white font-light text-sm ml-1">KENYA</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Restoring mobility, independence, and dignity through advanced 3D-printed prosthetic solutions in Nairobi.
          </p>
        </div>

        {/* Column 2: Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-orange-500 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-orange-500 transition">Products & Services</Link></li>
            <li><Link to="/ourteam" className="hover:text-orange-500 transition">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>📍 Kindaruma rd,Nairobi Kenya</li>
            <li>📞 +254 700 345 822</li>
            <li>✉️ info@prothea.co.ke</li>
          </ul>
        </div>

        {/* Column 4: Partnership */}
        <div>
          <h4 className="text-lg font-bold mb-6">Partnered With</h4>
          <p className="text-gray-400 text-sm">
            A proud subsidiary of <strong>Ugani Prosthetics Technology</strong>.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white mt-12 pt-8 text-center text-white text-xs">
        <p>&copy; {new Date().getFullYear()} Prothea Kenya. All rights reserved.</p>
      </div>
    </footer>
  );
};

// --- YOUR ORIGINAL NAVBARWRAPPER (UNCHANGED) ---
const NavbarWrapper = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBg = (isHomePage && !isScrolled) ? 'bg-transparent' : 'bg-white shadow-lg py-2';
  const textColor = (isHomePage && !isScrolled) ? 'text-white' : 'text-gray-700';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 px-6 py-4 ${navBg}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="prothea logo" className="h-12 w-auto object-contain" />
        </div>
        
        <ul className={`hidden md:flex gap-8 font-medium items-center ${textColor}`}>
          <li className="hover:text-orange-500 cursor-pointer transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition">
            <Link to="/products">Products & Services</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition">
            <Link to="/ourteam">Our Team</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

function App() {
  return (
    <BrowserRouter>
      {/* Container to ensure footer stays at bottom */}
      <div className="min-h-screen flex flex-col">
        <NavbarWrapper />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/ourteam" element={<OurTeampage />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
