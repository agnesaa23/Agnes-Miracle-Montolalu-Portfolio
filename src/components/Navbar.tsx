import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl shadow-editorial">
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-headline text-primary italic">
          Agnes Miracle Montolalu
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "transition-colors duration-300",
                location.pathname === link.path 
                  ? "text-primary border-b-2 border-primary/20 font-medium pb-1" 
                  : "text-secondary/60 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-primary text-on-primary rounded-full hover:opacity-80 transition-all duration-300 transform active:scale-95"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-t border-primary/10 py-4 px-8 flex flex-col space-y-4 shadow-editorial">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg",
                location.pathname === link.path ? "text-primary font-medium" : "text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="inline-block text-center px-6 py-3 bg-primary text-on-primary rounded-full"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
