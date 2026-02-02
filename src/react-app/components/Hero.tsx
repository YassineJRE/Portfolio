import { Github, Linkedin, ArrowRight, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      {/* Animated Gradient Background - z-0 */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(0,0,0,0))]"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.8) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Wave background - positioned behind content with z-[1] */}
      <div className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 600" className="w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#1f2937', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#374151', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#1f2937', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path 
            fill="url(#waveGradient)" 
            fillOpacity="1" 
            d="M0,192L48,213.3C96,235,192,277,288,282.7C384,288,480,256,576,234.7C672,213,768,203,864,213.3C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z"
            className="animate-wave"
          ></path>
          <path 
            fill="#1f2937" 
            fillOpacity="0.8" 
            d="M0,320L48,330.7C96,341,192,363,288,362.7C384,363,480,341,576,330.7C672,320,768,320,864,330.7C960,341,1056,363,1152,368C1248,373,1344,363,1392,357.3L1440,352L1440,600L1392,600C1344,600,1248,600,1152,600C1056,600,960,600,864,600C768,600,672,600,576,600C480,600,384,600,288,600C192,600,96,600,48,600L0,600Z"
            className="animate-wave-delayed"
          ></path>
        </svg>
      </div>

      {/* Content container - z-10 to stay above wave */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              {personalInfo.name}
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-100 mb-6 animate-slide-in">
            {personalInfo.title}
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 animate-slide-in-delayed">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons - Always visible and clickable */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-scale-in relative z-20">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 glow-on-hover"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 bg-gray-800/50 backdrop-blur-sm text-gray-100 border-2 border-gray-700 rounded-lg font-semibold hover:border-blue-500 hover:bg-gray-800 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 mb-16 animate-fade-in-delayed relative z-20">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-blue-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} className="text-gray-100" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-blue-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-gray-100" />
            </a>
          </div>

          {/* Scroll Indicator - Properly spaced */}
          <div className="flex justify-center mt-8 animate-bounce-slow relative z-20">
            <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateX(0) scaleY(1);
          }
          50% {
            transform: translateX(-25px) scaleY(1.05);
          }
        }

        .animate-wave {
          animation: wave 15s ease-in-out infinite;
        }

        .animate-wave-delayed {
          animation: wave 20s ease-in-out infinite reverse;
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 1s ease-out 0.3s both;
        }

        .animate-slide-in-delayed {
          animation: slide-in 1s ease-out 0.5s both;
        }

        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out 0.7s both;
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 1s ease-out 0.6s both;
        }
      `}</style>
    </section>
  );
}
