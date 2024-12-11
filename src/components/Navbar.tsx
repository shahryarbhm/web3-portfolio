'use client';

import { useEffect, useState } from 'react';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { GoProject, GoProjectRoadmap } from 'react-icons/go';
import { RiContactsLine, RiContactsFill } from 'react-icons/ri';
import { BsBriefcase, BsBriefcaseFill } from 'react-icons/bs';

const navItems = [
  { 
    path: '#home', 
    label: 'Home',
    icon: AiOutlineHome,
    activeIcon: AiFillHome
  },
  { 
    path: '#experience',
    label: 'Experience',
    icon: BsBriefcase,
    activeIcon: BsBriefcaseFill
  },
  { 
    path: '#projects', 
    label: 'Projects',
    icon: GoProject,
    activeIcon: GoProjectRoadmap
  },
  { 
    path: '#contact', 
    label: 'Contact',
    icon: RiContactsLine,
    activeIcon: RiContactsFill
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px'
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="
      fixed z-50
      md:left-0 md:top-0 md:h-screen md:w-20
      bottom-0 left-0 right-0 
      flex md:flex-col
      bg-black/20 backdrop-blur-lg
      px-4 py-4 md:py-8
      gap-12 md:gap-6
      border-t md:border-t-0 md:border-r md:border-white/10
      justify-center items-center
    ">
      {navItems.map(({ path, label, icon: Icon, activeIcon: ActiveIcon }) => {
        const isActive = activeSection === path.substring(1);
        return (
          <a
            key={path}
            href={path}
            className={`
              group relative flex items-center justify-center 
              w-10 h-10 rounded-xl
              transition-all duration-300
              hover:bg-white/10
              ${isActive ? 'bg-white/10' : ''}
            `}
            aria-label={label}
          >
            {isActive ? (
              <ActiveIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            ) : (
              <Icon className="w-7 h-7 text-gray-400 group-hover:text-blue-400 transition-colors" />
            )}
            
            {/* Tooltip */}
            <span className="
              absolute left-14 
              bg-black/90 
              text-white
              px-2 py-1 
              rounded-md 
              text-sm 
              opacity-0 group-hover:opacity-100 
              pointer-events-none 
              transition-opacity
              whitespace-nowrap
              hidden md:block
              border border-white/10
            ">
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}