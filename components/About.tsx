import React from 'react';
import { Terminal, Cpu, Code2, Palette, Database, Zap } from 'lucide-react';

interface AboutProps {
  withTopGradient?: boolean;
}

const About: React.FC<AboutProps> = ({ withTopGradient = false }) => {
  const skills = [
    { name: "JavaScript (ES6+) & TypeScript", icon: Code2 },
    { name: "React.js & Next.js Ecosystem", icon: Cpu },
    { name: "Tailwind CSS & Modern Styling", icon: Palette },
    { name: "AI Model Integration (API)", icon: Terminal },
    { name: "Data Visualization (D3/Recharts)", icon: Database },
    { name: "Performance Optimization", icon: Zap }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors">
      {withTopGradient && (
        <div
          className="pointer-events-none absolute left-0 top-0 w-full h-32 z-30"
          style={{ background: 'linear-gradient(to bottom, #111 0%, rgba(0,0,0,0) 100%)' }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image/Visual Side */}
          <div className="relative mb-10 lg:mb-0 order-first lg:order-last">
            <div className="absolute inset-0 bg-brand-600 rounded-3xl -rotate-3 opacity-10 scale-105"></div>
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-slate-300 font-mono text-sm leading-relaxed border border-slate-800">
              <div className="flex gap-2 mb-4 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p><span className="text-purple-400">const</span> <span className="text-yellow-300">muhammadNizar</span> = <span className="text-purple-400">new</span> <span className="text-blue-400">AI_Engineer</span>({'{'} </p>
              <p className="pl-4">focus: <span className="text-green-400">['Frontend', 'UX', 'AI']</span>,</p>
              <p className="pl-4">passion: <span className="text-green-400">'Humanizing Data'</span>,</p>
              <p className="pl-4">status: <span className="text-blue-300">OPEN_TO_WORK</span></p>
              <p>{'}'});</p>
              <br/>
              <p><span className="text-slate-500">// Initiating neural bridge...</span></p>
              <p className="text-brand-400 animate-pulse">Connection established.</p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl mb-6">
              Tentang Saya
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Halo! Saya <span className="font-bold text-slate-900 dark:text-slate-100">Muhammad Nizar</span>. Perjalanan saya dimulai dari ketertarikan mendalam pada Artificial Intelligence, namun saya menyadari satu hal: <span className="italic">Model AI terhebat sekalipun tidak berguna jika sulit digunakan oleh manusia.</span>
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Itulah mengapa saya beralih fokus menjadi Frontend Engineer dengan perspektif AI. Saya tidak hanya menulis kode UI; saya memahami logika data di belakangnya. Saya menciptakan jembatan visual yang membuat teknologi kompleks terasa sederhana.
            </p>

            <div className="space-y-4">
              <h3 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <Terminal size={20} className="text-brand-600" />
                Technical Arsenal
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="group flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-brand-300 hover:bg-brand-50 dark:hover:bg-slate-800 hover:text-brand-700 transition-all cursor-default shadow-sm"
                  >
                    <skill.icon size={16} className="text-slate-400 group-hover:text-brand-500 transition-colors" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;