import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '@/data/portfolio';
import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';

export default function Education() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="education" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mb-12 rounded-full"></div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02] transition-all duration-300 card-shimmer scroll-animate-delay-${index + 1}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30 hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <GraduationCap className="text-white" size={28} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-100 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {edu.school}
                      </p>
                    </div>
                    {edu.gpa && (
                      <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-bold text-sm mt-2 sm:mt-0 shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform duration-300">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-300 mb-2">
                      Relevant Coursework:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium hover:scale-110 hover:bg-blue-500/30 hover:shadow-lg transition-all duration-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
