import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Globe, Smartphone, Award, ExternalLink, Download, Menu, X, ChevronRight } from 'lucide-react';
import axios from "axios";


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    'Programming Languages': ['JavaScript', 'Solidity', 'Java', 'C/C++'],
    'Blockchain / Web3': ['Bitcoin', 'Go-Ethereum', 'ERC-20/721', 'Web3.js','ether.js', 'OpenZeppelin'],
    'Backend': ['MySQL', 'MongoDB', 'RESTful API', 'Node.js', 'Express.js'],
    'Frontend': ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'React.js'],
    'Tools': ['Git', 'Postman', 'Hardhat', 'Truffle', 'Metamask', 'Ganache']
  };

  const projects = [
    {
      title: 'Blog Application',
      period: 'Sept 2024 - Oct 2024',
      description: 'Full-stack blog application with user authentication, CRUD operations, and post uploads. Built with React.js frontend and Appwrite backend-as-a-service.',
      tech: ['React.js', 'Appwrite', 'JavaScript', 'CSS'],
      category: 'Full Stack',
      github: 'https://github.com/manojkumarpatil/blog-app',
      live: 'https://your-blog-app.vercel.app'
    },
    {
      title: 'YouTube Clone',
      period: 'May 2024 - Aug 2024',
      description: 'Complete video hosting platform with advanced features including authentication, video uploads, social interactions, and subscription system using JWT and bcrypt.',
      tech: ['MERN Stack', 'JWT', 'bcrypt', 'Node.js', 'MongoDB'],
      category: 'Full Stack',
      github: 'https://github.com/manojkumarpatil/youtube-clone',
      live: 'https://your-youtube-clone.vercel.app'
    },
    {
      title: 'Library Management System',
      period: 'Nov 2022 - Jan 2023',
      description: 'Automated library operations system for book tracking, user management, and transaction records with efficient database integration.',
      tech: ['Java', 'MySQL', 'Database Design'],
      category: 'Backend',
      github: 'https://github.com/manojkumarpatil/library-management',
      live: null
    }
  ];

  const certifications = [
    'Ethereum Blockchain Developer Bootcamp With Solidity (2025)',
    'Full Stack Development – KodNest Pvt. Ltd',
    'Programming In Java – NPTEL',
    'Blockchain and Cyber Security – ShriTEK Innovations',
    'Cloud Computing with DevOps – ShriTEK Innovations'
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // You can replace this with actual CV download logic
    const link = document.createElement('a');
    link.href = '/assets/Manojkumar_BT.pdf'; // Add your CV to public/assets folder
    link.download = 'Manoj_Kumar_Patil_CV.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute inset-0">
          <div 
            className="w-1 h-1 bg-white rounded-full absolute opacity-30 animate-ping"
            style={{
              left: `${(mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1920)) * 100}%`,
              top: `${(mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1080)) * 100}%`,
              animationDelay: '0.5s'
            }}
          ></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Manoj Kumar Patil
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-cyan-400 transition-all duration-300 relative ${
                    activeSection === item ? 'text-cyan-400' : ''
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl font-bold">
                MK
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Manoj Kumar Patil
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Blockchain Developer & Full Stack Engineer
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Innovative Computer Science graduate specializing in decentralized applications and modern web development. 
              Passionate about creating secure, scalable solutions that bridge blockchain technology with exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:manojkumarpatil2103@gmail.com" className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Mail size={20} />
              Get In Touch
            </a>
            <button 
              onClick={handleDownloadCV}
              className="flex items-center gap-2 border border-white/20 hover:border-cyan-400 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/manojkumarpatil2103" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/manoj-kumar-patil-b96875202/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:manojkumarpatil2103@gmail.com" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Recent Computer Science graduate with a passion for blockchain technology and full-stack development. 
                I specialize in building decentralized applications on Ethereum using Solidity and creating modern web 
                applications with the MERN stack.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in technology is driven by curiosity and innovation. I enjoy solving complex problems 
                and delivering secure, scalable solutions that make a real impact.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <MapPin className="text-cyan-400 mb-2" size={24} />
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold">Bengaluru, Karnataka</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <Phone className="text-purple-400 mb-2" size={24} />
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-semibold">+91 8904025186</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Bachelor of Engineering - CSE</h4>
                    <p className="text-gray-400">Visvesvaraya Technological University</p>
                    <p className="text-sm text-gray-500">2020 - 2024 | CGPA: 7.2</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Experience</h3>
                <div>
                  <h4 className="font-semibold">Full Stack Development Trainee</h4>
                  <p className="text-gray-400">KodNest Technologies Pvt Ltd</p>
                  <p className="text-sm text-gray-500">July 2024 - December 2024</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  {category.includes('Programming') && <Code className="text-cyan-400 mr-3" size={24} />}
                  {category.includes('Blockchain') && <Globe className="text-purple-400 mr-3" size={24} />}
                  {category.includes('Backend') && <Database className="text-green-400 mr-3" size={24} />}
                  {category.includes('Frontend') && <Smartphone className="text-pink-400 mr-3" size={24} />}
                  {category.includes('Tools') && <Award className="text-yellow-400 mr-3" size={24} />}
                  <h3 className="text-lg font-bold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-xs">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">{project.period}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-center">Certifications & Training</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <ChevronRight className="text-cyan-400 mr-3" size={20} />
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    I'm always interested in discussing new opportunities, innovative projects, 
                    and collaborations in blockchain and web development. Let's build something amazing together!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-cyan-400 mr-4" size={24} />
                    <div>
                      <p className="font-semibold flex">Email</p>
                      <a href="mailto:manojkumarpatil2103@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        manojkumarpatil2103@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="text-purple-400 mr-4" size={24} />
                    <div>
                      <p className="font-semibold flex">Phone</p>
                      <a href="tel:+918904025186" className="text-gray-400 hover:text-purple-400 transition-colors">
                        +91 8904025186
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="text-pink-400 mr-4" size={24} />
                    <div>
                      <p className="font-semibold flex">Location</p>
                      <p className="text-gray-400">Bengaluru, Karnataka, India</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a href="https://github.com/manojkumarpatil2103" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/manoj-kumar-patil-b96875202/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>


{/* handle send message information which you want to connect for backend */}

              <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  
                  
                  <button 
                    onClick={() => window.open('mailto:manojkumarpatil2103@gmail.com', '_blank')}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Manoj Kumar Patil. Crafted with passion and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;