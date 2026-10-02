import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { FitnessMattersLogo } from './FitnessMattersLogo';
import { GYM_DETAILS } from '../data/gymData';

interface HeaderProps {
  onJoinClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Plans', href: '#plans' },
    { label: 'Team', href: '#team' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c0e]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.6)] py-2 sm:py-2.5'
          : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Drops from 56px to 44px on scroll past 40px */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group transition-transform duration-200"
            aria-label="Fitness Matters Gym Home"
          >
            <div className={`transition-all duration-300 ${isScrolled ? 'scale-90 origin-left' : 'scale-100'}`}>
              <FitnessMattersLogo variant="full" />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-heading uppercase tracking-wider text-sm text-[#f4f5f8]/80 hover:text-white transition-colors relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e52538] after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action & CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${GYM_DETAILS.contacts.phone.replace(/\s+/g, '')}`}
              className="hidden xl:flex items-center gap-2 text-xs font-heading tracking-wider uppercase text-[#9ba1b0] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#e52538]" />
              <span>{GYM_DETAILS.contacts.phoneFormatted}</span>
            </a>

            <button
              onClick={onJoinClick}
              className="btn-primary text-xs sm:text-sm shadow-glow-sm flex items-center gap-1.5"
            >
              <span>Join Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onJoinClick}
              className="sm:hidden btn-primary text-xs py-1.5 px-3"
            >
              Join
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white rounded-sm hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-[#e52538]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#e52538]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-white/10 bg-[#0f1115] rounded-sm px-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-heading uppercase tracking-wider text-base text-white/90 hover:text-[#e52538] hover:bg-white/5 px-3 py-2 rounded-sm transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-white/30 text-xs">→</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onJoinClick();
                }}
                className="btn-primary w-full text-center py-2.5"
              >
                Join Fitness Matters
              </button>
              <a
                href={`tel:${GYM_DETAILS.contacts.phone.replace(/\s+/g, '')}`}
                className="btn-ghost w-full text-center py-2 text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#e52538]" />
                Call {GYM_DETAILS.contacts.phoneFormatted}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
