
import React from 'react';

interface ProductsProps {
  hasAccess: boolean;
  onUnlock: () => void;
}

const Products: React.FC<ProductsProps> = ({ hasAccess, onUnlock }) => {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-bold text-logo-blue uppercase tracking-widest">Vårt Tilbud</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Prototype-pakke</p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Dette er vår eksklusive lanseringspakke. Den gir deg alt du trenger for din reise mot økonomisk kunnskap.
          </p>
        </div>
        <div className="mx-auto mt-16 flex justify-center">
          <div className="flex flex-col justify-between rounded-3xl p-8 ring-1 ring-logo-blue xl:p-10 bg-white shadow-2xl shadow-slate-200 max-w-md w-full border-2 border-logo-blue transform hover:scale-105 transition-all">
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-xl font-bold leading-8 text-slate-900">Prototype-pakke</h3>
                <span className="rounded-full bg-logo-blue px-3 py-1 text-xs font-bold leading-5 text-white animate-pulse">
                  NYHET
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">Den komplette pakken for deg som vil lære sparing og budsjett på en moderne måte.</p>

              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                {[
                  'Gratis tilgang',
                  'Læringssti: Sparing og renter',
                  'Læringssti: Investering og aksjer',
                  'Læringssti: Budsjett og pengebruk',
                  'Interaktive oppgaver og quiz',
                  'Eksklusive forklaringsvideoer'
                ].map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-start">
                    <svg className="h-6 w-5 flex-none text-logo-blue mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.176a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className={feature === 'Gratis tilgang' ? 'font-bold text-logo-blue' : ''}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={onUnlock}
              className="mt-8 block w-full rounded-xl bg-logo-blue px-3 py-4 text-center text-sm font-bold text-white shadow-lg hover:bg-logo-blue-dark transition-all active:scale-95"
            >
              {hasAccess ? 'Registrert ✓' : 'Registrer deg for å låse opp prototype'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;