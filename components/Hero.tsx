
import React from 'react';
import Logo from './Logo.tsx';
import forsideBilde from '../forside-bilde.png'

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-x-16">
          <div className="max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="inline-flex items-center space-x-2 rounded-full bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-700/10 w-fit">
                <span>Prototype lanseres våren 2026</span>
              </div>
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
              Få kontroll på din <span className="text-logo-blue italic">privatøkonomi</span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-slate-600">
              Vi gjør økonomi forståelig og enkelt slik at alle kan lære det. Vi tilbyr interaktive læringsstier spesialdesignet for ungdom, som gjør læringen engasjerende og effektiv.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a href="#produkter" className="rounded-xl bg-logo-blue px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-logo-blue-dark hover:-translate-y-1 transition-all duration-200">
                Sikre deg tilgang
              </a>
              <a href="#om-oss" className="group text-lg font-bold leading-6 text-slate-900 flex items-center gap-2">
                Les om vårt team <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow flex justify-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
              <div className="absolute -bottom-16 -right-12 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-white p-6 sm:p-10 rounded-[4rem] shadow-[0_35px_60px_-15px_rgba(20,40,60,0.15)] ring-1 ring-slate-900/5 transition-all duration-700 hover:scale-[1.03]">
                  <div className="w-[320px] h-[320px] md:w-[520px] md:h-[520px] flex items-center justify-center overflow-hidden rounded-[3rem]">
                    <img
                      src={forsideBilde}
                      alt="Økonomiakademiet Forside"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
