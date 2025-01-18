import React from 'react';
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <NavBar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="sobre" className="py-20">
          <About />
        </section>
        <section id="projetos" className="py-20">
          <Projects />
        </section>
        <section id="contato" className="py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;