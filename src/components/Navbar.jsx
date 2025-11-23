import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavigate = (page) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blue-200 transition">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@cafirm.com" className="flex items-center gap-2 hover:text-blue-200 transition">
              <Mail size={14} />
              <span>info@cafirm.com</span>
            </a>
          </div>
          <div className="text-xs">Mon - Sat: 9:00 AM - 6:00 PM</div>
        </div>
      </div>

      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigate('home')}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                CA
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">Excel Associates</h1>
                <p className="text-xs text-gray-600">Chartered Accountants</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  } pb-1`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              <button
                onClick={() => handleNavigate('contact')}
                className="btn-primary"
              >
                Book Consultation
              </button>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition ${
                    currentPage === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => handleNavigate('contact')}
                className="btn-primary w-full text-center"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
