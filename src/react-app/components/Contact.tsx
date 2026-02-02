import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { useScrollAnimation } from '@/react-app/hooks/useScrollAnimation';

export default function Contact() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto mb-12 rounded-full"></div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Email Card */}
            <div className="scroll-animate-delay-1 p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-center card-shimmer">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30 hover:scale-110 hover:rotate-12 transition-all duration-300">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-100 mb-2">Email</h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-blue-400 hover:text-blue-300 hover:underline text-sm hover:scale-105 inline-block transition-transform duration-200"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="scroll-animate-delay-2 p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-center card-shimmer">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30 hover:scale-110 hover:rotate-12 transition-all duration-300">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-100 mb-2">Phone</h3>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-blue-400 hover:text-blue-300 hover:underline text-sm hover:scale-105 inline-block transition-transform duration-200"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Location Card */}
            <div className="scroll-animate-delay-3 p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-center card-shimmer">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/30 hover:scale-110 hover:rotate-12 transition-all duration-300">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-gray-100 mb-2">Location</h3>
              <p className="text-gray-400 text-sm">
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 glow-on-hover"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-800/50 backdrop-blur-sm text-gray-100 border-2 border-gray-700 rounded-lg font-semibold hover:border-blue-500 hover:bg-gray-800 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Github size={20} />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
