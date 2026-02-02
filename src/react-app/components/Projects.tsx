import { Github } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';

export default function Projects() {
  const sectionRef = useScrollAnimation();
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-cyan-500/30 rounded-full animate-float"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-blue-500/30 rounded-full animate-float-delayed"></div>
      
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mb-12 rounded-full"></div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white shadow-2xl shadow-purple-500/50 hover:shadow-3xl hover:shadow-purple-500/60 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            {/* Animated background effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-float-delayed"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-sm">
                  ⭐ FEATURED
                </span>
                <span className="text-sm opacity-80">{featuredProject.period}</span>
              </div>
              <h3 className="text-3xl font-bold mb-3">{featuredProject.title}</h3>
              <p className="text-lg mb-4 opacity-90">{featuredProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm hover:bg-white/30 hover:scale-110 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Github size={20} />
                View on GitHub
              </a>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 card-shimmer scroll-animate-delay-${(index % 3) + 1}`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-100">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold mb-2">
                {project.period}
              </p>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium hover:scale-110 hover:bg-blue-500/30 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 text-sm"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
