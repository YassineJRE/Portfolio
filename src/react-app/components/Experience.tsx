import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';

export default function Experience() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mb-12 rounded-full"></div>

        <div className="max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <div key={index} className={`relative pl-8 pb-12 last:pb-0 scroll-animate-delay-${(index % 3) + 1}`}>
              {/* Timeline line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-[15px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-purple-500/50 animate-pulse-glow hover:scale-110 transition-transform duration-300">
                <Briefcase className="text-white" size={16} />
              </div>

              {/* Job card */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02] transition-all duration-300 card-shimmer">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-1">
                      {job.title}
                    </h3>
                    <p className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:text-right gap-1">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={16} />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium hover:scale-110 hover:bg-blue-500/30 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-gray-300 flex items-start gap-2 hover:translate-x-1 transition-transform duration-200"
                    >
                      <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mt-1 font-bold">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
