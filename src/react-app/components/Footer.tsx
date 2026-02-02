import { Github, Linkedin } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-950 border-t border-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/30 hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer">
            {personalInfo.initials}
          </div>

          {/* Title */}
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-100 mb-1">
              {personalInfo.name}
            </p>
            <p className="text-gray-400">
              {personalInfo.title}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-300" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-300" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            <span>© {new Date().getFullYear()} {personalInfo.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
