import React from 'react';
import { Code, Database, Globe, Layout, Server } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Front-end', icon: <Layout className="w-6 h-6" />, items: ['HTML', 'CSS', 'JavaScript', 'React','Angular','Vue', 'TypeScript', 'TailwindCSS'] },
    { name: 'Back-end', icon: <Server className="w-6 h-6" />, items: ['Node.js', 'Express', 'API REST'] },
    { name: 'Database', icon: <Database className="w-6 h-6" />, items: ['SQL', 'NoSQL'] },
    { name: 'Tools & Others', icon: <Code className="w-6 h-6" />, items: ['Git', 'GitHub', 'VS Code', 'Figma'] },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sobre Mim</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 space-y-4">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Desenvolvedor Front-End 
            </h3>
            <p className="text-gray-300 leading-relaxed">
            Olá! Meu nome é Leonardo Castro e sou um desenvolvedor Front-End apaixonado por criar experiências digitais únicas e envolventes. Tenho experiência sólida em HTML, CSS, JavaScript e frameworks modernos como React, Angular e Vue.js. Além disso, possuo um profundo interesse em aprimorar minhas habilidades em back-end, bancos de dados e integração de APIs para me tornar um desenvolvedor Full Stack. Meu objetivo é transformar ideias criativas em interfaces intuitivas e funcionais, sempre com foco em inovação e qualidade.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Características Principais
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-teal-400" />
                Proativo e dedicado
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-teal-400" />
                Organizado e metódico
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-teal-400" />
                Aprendizado contínuo
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-teal-400" />
                Trabalho em equipe
              </li>
            </ul>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((category) => (
            <div key={category.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;