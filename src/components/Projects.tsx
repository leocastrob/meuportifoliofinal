import React from 'react';
import { Github, Globe, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Lista de Tarefas',
      description: 'Este é um To-Do List em React TypeScript com persistência via localStorage, permitindo adicionar, concluir, excluir e filtrar tarefas. O projeto possui modo claro/escuro , componentes reutilizáveis e boas práticas como tipagem forte e ganchos personalizados .',
      image: 'src/midias/imglistadetareafas.JPG',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      githubUrl: 'https://github.com/leocastrob/listadetarefas',
      liveUrl: '#'
    },
    {
      title: 'Pizzaria Online',
      description: 'Este é um site de pizzaria desenvolvido com HTML, CSS e JavaScript, permitindo a seleção de pizzas de diferentes tamanhos, adição ao carrinho e cálculo dinâmico do subtotal e descontos. O projeto possui uma interface responsiva e interativa, focada na experiência do usuário.',
      image: 'src/midias/imgpizzaria.JPG',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/leocastrob/pizzaria.git',
      liveUrl: '#'
    },
    {
      title: 'Calculadora de Motorista de App',
      description: 'Este é uma Calculadora de Lucro para Motoristas de Aplicativo, desenvolvida com React e TypeScript. O projeto permite estimar ganhos, despesas e lucro líquido com base em variáveis como consumo do carro, preço do combustível e quilometragem rodada. Possui uma interface moderna com shadcn-ui e Tailwind CSS, gráficos interativos e cálculos automáticos para auxiliar na tomada de decisões financeiras.',
      image: 'src/midias/foto projeto calculadora para motorista de app.JPG ',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/leocastrob/Calculadoramotoristadeapp.git',
      liveUrl: '#'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projetos</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;