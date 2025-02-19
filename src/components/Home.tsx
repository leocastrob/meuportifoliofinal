import React from 'react';
import { Download, ArrowDown } from 'lucide-react';

const Home = () => {
  const handleDownloadCV = () => {
    
    const cvUrl = 'src/midias/Currículo Leonardo B. de Castro.pdf';
    window.open(cvUrl, '_blank');
  };

  const scrollToProjects = () => {
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 animate-pulse" />
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-900 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">       
          <div className="mb-8 relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 relative z-10">
              <img
                src="src/midias/Foto perfil.jpeg" 
                alt="Leonardo Castro"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-pulse" />
            <div className="absolute -inset-2 rounded-full border-4 border-teal-400/20" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="block">Olá, sou</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Leonardo Castro
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Desenvolvedor Front-End apaixonado por soluções digitais
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold transition-all hover:scale-105"
            >
              Veja meus projetos
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button
              onClick={handleDownloadCV}
              className="group inline-flex items-center px-6 py-3 rounded-full bg-white/10 text-white font-semibold backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Baixar Currículo
              <Download className="ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/50" />
      </div>
    </div>
  );
};

export default Home;