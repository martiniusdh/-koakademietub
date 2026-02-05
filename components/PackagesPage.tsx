
import React from 'react';
import Logo from './Logo.tsx';

interface PackagesPageProps {
  onUnlock: () => void;
}

const PackagesPage: React.FC<PackagesPageProps> = ({ onUnlock }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[50%] top-0 h-[64rem] w-[128rem] -translate-x-[50%] stroke-slate-800 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
            <svg className="h-full w-full" aria-hidden="true">
              <defs>
                <pattern id="pattern-pkgs" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth="0" fill="url(#pattern-pkgs)" />
            </svg>
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">Læringspakker</h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">
              Velg pakken som passer dine behov. Vi starter reisen med vår eksklusive prototype-pakke, designet for å gi deg en forsmak på fremtidens økonomiopplæring.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-black text-slate-900 leading-tight">Invester i din egen fremtid</h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Vår plattform er mer enn bare tekst og video. Det er et interaktivt økosystem der du lærer ved å gjøre, støttet av markedsledende AI-teknologi.
              </p>
              
              <div className="grid gap-6">
                {[
                  { title: 'AI-Mentor', desc: 'Få svar på dine spørsmål 24/7 med vår spesialtrente mentor.' },
                  { title: 'Interaktive Stier', desc: 'Gå gjennom moduler med quizer og realistiske scenarioer.' },
                  { title: 'Fremdriftsmåling', desc: 'Se nøyaktig hvor mye du har lært og hva som gjenstår.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:shadow-md">
                    <div className="w-12 h-12 bg-logo-blue rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-lg">{item.title}</h4>
                      <p className="text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative group w-full max-w-md">
                <div className="absolute -inset-4 bg-logo-blue/10 rounded-[4rem] blur-3xl group-hover:bg-logo-blue/20 transition-all"></div>
                
                <div className="relative flex flex-col justify-between rounded-[3rem] p-10 ring-1 ring-logo-blue bg-white shadow-2xl border-4 border-logo-blue transform group-hover:scale-[1.02] transition-all duration-500">
                  <div>
                    <div className="flex items-center justify-between gap-x-4">
                      <h3 className="text-2xl font-black leading-8 text-slate-900 tracking-tight">Prototype-pakke</h3>
                      <span className="rounded-full bg-logo-blue px-4 py-1.5 text-xs font-black leading-5 text-white animate-pulse uppercase tracking-widest">
                        Aktiv nå
                      </span>
                    </div>
                    <p className="mt-4 text-lg leading-7 text-slate-600 font-medium italic">Den komplette pakken for deg som vil lære sparing og budsjett på en moderne måte.</p>
                    
                    <ul role="list" className="mt-10 space-y-4 text-base leading-7 text-slate-600">
                      {[
                        'Nyhet: Integrert AI mentor',
                        'Læringssti: Sparing og renter',
                        'Læringssti: Investering og aksjer',
                        'Læringssti: Budsjett og pengebruk',
                        'Interaktive oppgaver og quiz',
                        'Eksklusive forklaringsvideoer'
                      ].map((feature) => (
                        <li key={feature} className="flex gap-x-4 items-center">
                          <div className="p-1 rounded-full bg-logo-blue/10">
                            <svg className="h-5 w-5 flex-none text-logo-blue" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.704 4.176a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className={`${feature.startsWith('Nyhet') ? 'font-black text-logo-blue' : 'font-medium'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-12 space-y-4">
                    <button 
                      onClick={onUnlock}
                      className="w-full py-5 rounded-2xl bg-logo-blue text-white text-lg font-black shadow-xl shadow-logo-blue/20 hover:bg-logo-blue-dark transition-all active:scale-95 uppercase tracking-widest"
                    >
                      Registrer deg nå
                    </button>
                    <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">Ingen bindingstid – start i dag</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-slate-50 py-24 sm:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center">
             <div className="w-24 h-24 mb-8 opacity-20 grayscale">
                <Logo />
             </div>
             <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">En del av Ungt Entreprenørskap</h3>
             <p className="max-w-2xl mx-auto text-lg text-slate-600 font-medium">
               Vårt læringsinnhold er kvalitetssikret og utviklet av elever ved Akademiet Ypsilon VGS for å sikre relevans og engasjement for målgruppen.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
