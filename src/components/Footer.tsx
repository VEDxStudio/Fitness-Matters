import React from 'react';
import { FitnessMattersLogo } from './FitnessMattersLogo';
import { GYM_DETAILS } from '../data/gymData';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Membership Plans', href: '#plans' },
    { label: 'Coaching Team', href: '#team' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Batch Schedule', href: '#facilities' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#08090b] border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Centered 80px Square Brand Logo requested by prompt */}
          <div className="mb-6">
            <FitnessMattersLogo variant="footer" />
          </div>

          {/* Business Tagline */}
          <p className="max-w-xl text-sm text-[#9ba1b0] mb-8 font-sans">
            {GYM_DETAILS.tagline}. Calibrated heavy iron, dedicated conditioning turf, 
            and an authentic community forged in discipline.
          </p>

          {/* Quick Navigation Mirrors */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10 text-xs font-heading uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/70 hover:text-[#e52538] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Contact Line */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#9ba1b0] pb-10 mb-8 border-b border-white/10 w-full max-w-3xl">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#e52538]" />
              <span>Parli Road, Shivaji Chowk, Ambejogai</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#e52538]" />
              <a href={`tel:${GYM_DETAILS.contacts.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                {GYM_DETAILS.contacts.phoneFormatted}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#e52538]" />
              <a href={`mailto:${GYM_DETAILS.contacts.email}`} className="hover:text-white">
                {GYM_DETAILS.contacts.email}
              </a>
            </div>
          </div>

          {/* Copyright and Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs text-[#9ba1b0]/80">
            <div>
              © {currentYear} {GYM_DETAILS.name}. All rights reserved.
            </div>

            <div className="mt-4 sm:mt-0 flex items-center gap-4">
              <span className="font-mono text-[11px] text-white/40">Ambejogai · Maharashtra · 431517</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="w-8 h-8 rounded-sm bg-[#121418] border border-white/10 text-white hover:text-[#e52538] hover:border-[#e52538] flex items-center justify-center transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
