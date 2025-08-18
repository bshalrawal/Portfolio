import React from 'react';
import type { JSX } from 'react';

// Using inline SVGs to avoid compilation errors and ensure the icons display correctly.
const techIcons: { [key: string]: JSX.Element } = {
  // SVG for React
  react: (
    <svg fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" className="text-cyan-400">
      <title>React</title>
      <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2zm4.33 6.64l-1.92 1.1-.01.01-1.92-1.1-1.92 1.1-.01.01-1.92-1.1L5.67 8.64a.5.5 0 0 0-.25.43v5.86a.5.5 0 0 0 .25.43l1.92 1.1c.14.08.31.08.45 0l1.92-1.1c.14-.08.31-.08.45 0l1.92 1.1c.14.08.31.08.45 0l1.92-1.1a.5.5 0 0 0 .25-.43V9.07a.5.5 0 0 0-.25-.43zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg>
  ),
  // SVG for Next.js
  nextjs: (
    <svg fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white">
      <title>Next.js</title>
      <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 18.2L5.8 6.5h12.4L12 18.2zM12 5.8L5.8 17.5a1 1 0 0 1-1.7-.8L3.4 4.7a1 1 0 0 1 .8-1.7h16.2a1 1 0 0 1 .8 1.7L18.2 17.5a1 1 0 0 1-1.7.8L12 5.8z" />
    </svg>
  ),
  // SVG for Firebase
  firebase: (
    <svg fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" className="text-amber-500">
      <title>Firebase</title>
      <path d="M9.19 12.35l-1.39-2.4a.5.5 0 0 0-.84 0l-1.39 2.4-3.5 6.06a.5.5 0 0 0 .42.75h10a.5.5 0 0 0 .42-.75zM12 12l2.5-4.33L17 12l-2.5 4.33L12 12zM12 2L6 12l6 10 6-10z"/>
    </svg>
  ),
  // SVG for Tailwind CSS
  tailwind: (
    <svg fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" className="text-cyan-500">
      <title>Tailwind CSS</title>
      <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2zm4.33 6.64l-1.92 1.1-.01.01-1.92-1.1-1.92 1.1-.01.01-1.92-1.1L5.67 8.64a.5.5 0 0 0-.25.43v5.86a.5.5 0 0 0 .25.43l1.92 1.1c.14.08.31.08.45 0l1.92-1.1c.14-.08.31-.08.45 0l1.92 1.1c.14.08.31.08.45 0l1.92-1.1a.5.5 0 0 0 .25-.43V9.07a.5.5 0 0 0-.25-.43zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg>
  ),
};

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies,  liveLink }) => {
  return (
    <div className="rounded-lg shadow-xl p-8 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 bg-gray-800">
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 flex-grow leading-relaxed">{description}</p>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        {technologies.map((tech, index) => (
          <div key={index} className="w-10 h-10" title={tech}>
            {techIcons[tech.toLowerCase()] || <span className="text-sm font-medium text-gray-500">{tech}</span>}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
        {liveLink && (
            <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-block bg-green-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-300 text-center text-lg"
            >
            Live Demo
            </a>
        )}
      </div>
    </div>
  );
};


const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'Kathmandu Review',
      description: 'A site for publishing reviews and rankings, built with Next.js and Firebase for a fast, modern web experience and easy data management.',
      technologies: ['nextjs', 'react', 'firebase', 'tailwind'],
      liveLink: 'www.kathmandureview.com', // Placeholder link
    },
    {
      id: 2,
      title: 'Karvika Thapa Portfolio',
      description: 'A personal portfolio website with an integrated CMS (Content Management System) to allow for easy updates to the content without touching the code.',
      technologies: ['react', 'tailwind'],
      liveLink: 'https://karvika-port.vercel.app/', // Placeholder link
    },
    {
      id: 3,
      title: 'Gyanendra Shahi Portfolio',
      description: 'A portfolio site for Gyanendra Shahi, featuring a CMS for dynamic content updates and a sleek, responsive design.',
      technologies: ['react', 'tailwind'],
      liveLink: 'https://gyanendra-port-ukst.vercel.app/', // Placeholder link
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto my-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl underline-offset-4 underline font-extrabold text-center mb-12 sm:text-5xl tracking-wide">
        My Projects
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
