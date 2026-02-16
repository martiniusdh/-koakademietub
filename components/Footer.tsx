import React from 'react';
import Logo from './Logo.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 shadow-inner">
              <Logo />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Økonomiakademiet <span className="text-logo-blue">UB</span>
            </span>
          </div>
          <div className="text-slate-400 text-sm text-center md:text-right">
            <p>Akademiet Ypsilon VGS</p>
            <p>Skoleåret 2025/2026</p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-slate-500 text-xs">
            © 2024 Økonomiakademiet UB. Alle rettigheter reservert.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Personvern</a>
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Brukervilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;