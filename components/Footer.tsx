import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">VoxFactum</h3>
            <p className="text-sm mt-2 text-slate-400">Frontend Engineering Meets Artificial Intelligence.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/Anzar-G" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/muhammad-nizar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:muhammadniyar282@gmail.com" className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} VoxFactum. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;