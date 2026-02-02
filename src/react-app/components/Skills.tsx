import { Server, Monitor, Database, Settings, Plug, Brain } from 'lucide-react';
import { skills } from '@/data/portfolio';
import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';

const iconMap = {
  Server,
  Monitor,
  Database,
  Settings,
  Plug,
  Brain
};

const gradients = [
  'from-blue-600 to-cyan-600',
  'from-purple-600 to-pink-600',
  'from-green-600 to-teal-600',
  'from-orange-600 to-red-600',
  'from-indigo-600 to-purple-600',
  'from-pink-600 to-rose-600'
];

export default function Skills() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-blue-500/30 rounded-full animate-float"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-purple-500/30 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-cyan-500/30 rounded-full animate-float"></div>
      
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => {
            const Icon = iconMap[skillCategory.icon as keyof typeof iconMap];
            const gradient = gradients[index % gradients.length];
            return (
              <div
                key={index}
                className={`p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 card-shimmer scroll-animate-delay-${(index % 3) + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shadow-purple-500/30 hover:rotate-12 transition-transform duration-300`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">
                    {skillCategory.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium hover:scale-110 hover:bg-blue-500/30 hover:shadow-lg transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
