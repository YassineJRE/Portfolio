import { GraduationCap, MapPin, Code, Zap } from 'lucide-react';
import { about } from '@/data/portfolio';
import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';

const iconMap = {
  GraduationCap,
  MapPin,
  Code,
  Zap
};

export default function About() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mb-12 rounded-full"></div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            {about.summary}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className={`p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 card-shimmer scroll-animate-delay-${index + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">
                  {highlight.title}
                </h3>
                <p className="text-lg font-bold text-gray-100">
                  {highlight.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
