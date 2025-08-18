import React from 'react';
import type { JSX } from 'react';

// Importing icons from react-icons
import { SiReact, SiNextdotjs, SiFirebase, SiTailwindcss } from "react-icons/si";

const techIcons: { [key: string]: JSX.Element } = {
  react: <SiReact className="text-cyan-400 text-2xl" />,
  nextjs: <SiNextdotjs className="text-black dark:text-white text-2xl" />,
  firebase: <SiFirebase className="text-amber-500 text-2xl" />,
  tailwind: <SiTailwindcss className="text-cyan-500 text-2xl" />,
};

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, liveLink }) => {
  return (
    <div className="rounded-lg shadow-xl p-8 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 bg-gray-800">
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 flex-grow leading-relaxed">{description}</p>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center justify-center" title={tech}>
            {techIcons[tech.toLowerCase()] || (
              <span className="text-sm font-medium text-gray-500">{tech}</span>
            )}
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
      liveLink: '#',
    },
    {
      id: 2,
      title: 'Karvika Thapa Portfolio',
      description: 'A personal portfolio website with an integrated CMS (Content Management System) to allow for easy updates to the content without touching the code.',
      technologies: ['react', 'tailwind'],
      liveLink: '#',
    },
    {
      id: 3,
      title: 'Gyanendra Shahi Portfolio',
      description: 'A portfolio site for Gyanendra Shahi, featuring a CMS for dynamic content updates and a sleek, responsive design.',
      technologies: ['react', 'tailwind'],
      liveLink: '#',
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto my-20 px-4 sm:px-6 lg:px-8 text-white min-h-screen">
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
