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
        <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2024 Økonomiakademiet UB. Med støtte fra Ungt Entreprenørskap.
          </p>
          <div className="flex gap-4 text-xs text-slate-500 underline">
            <a href="#">Personvern</a>
            <a href="#">Brukervilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;