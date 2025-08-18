// src/components/TechStackIcons.js

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb, SiNextdotjs } from 'react-icons/si';

const TechStackIcons = () => {
  const icons = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" /> },

    // Placeholder icons for design tools
    { name: 'Photoshop', icon: <span className="text-blue-700 text-6xl font-bold">Ps</span> },
    { name: 'Canva', icon: <span className="text-cyan-500 text-6xl font-bold">Ca</span> },
    { name: 'Figma', icon: <span className="text-pink-500 text-6xl font-bold">F</span> },
    { name: 'Premiere Pro', icon: <span className="text-purple-700 text-6xl font-bold">Pr</span> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 rounded-lg">
      {icons.map((tech) => (
        <div key={tech.name} className="relative group flex flex-col items-center">
          <div className="text-6xl transition-transform duration-300 ease-in-out transform hover:scale-110">
            {tech.icon}
          </div>
          {/* Tooltip */}
          <span className="absolute bottom-[-2.5rem] w-auto p-2 min-w-max rounded-md shadow-md text-white bg-gray-800 text-xs font-bold transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStackIcons;
