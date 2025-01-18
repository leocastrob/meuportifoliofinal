import React from 'react';
import { Github, Globe, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do projeto 1. Adicione aqui os detalhes do seu projeto.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2. Adicione aqui os detalhes do seu projeto.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      technologies: ['Node.js', 'Express', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3. Adicione aqui os detalhes do seu projeto.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projetos</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-gray-300"
                  >
                    <Tag className="w-4 h-4" />
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                  Código
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;