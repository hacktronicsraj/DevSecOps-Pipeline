import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="fixed w-full z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-2xl font-bold">F1 Hub</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#calendar" className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Calendar</a>
                <a href="#teams" className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Teams</a>
                <a href="#standings" className="text-white hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Standings</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-400 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#calendar" className="text-white hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
            <a href="#teams" className="text-white hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium">Teams</a>
            <a href="#standings" className="text-white hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium">Standings</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;