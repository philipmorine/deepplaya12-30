import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-white mb-8">Contact</h2>
        <div className="flex items-center justify-center space-x-3">
          <Mail className="w-6 h-6 text-orange-400" />
          <a
            href="mailto:DeepPlayaSimulator@gmail.com"
            className="text-xl text-orange-400 hover:text-orange-300 transition-colors underline"
            aria-label="Send email to Deep Playa Simulator"
            target="_blank"
            rel="noopener noreferrer"
          >
            DeepPlayaSimulator@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;