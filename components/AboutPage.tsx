
import React from 'react';
import Logo from './Logo.tsx';

interface AboutPageProps {
  onRegisterClick: () => void;
}

const TEAM = [
  { 
    name: 'Lucas Nevermo Steiro', 
    role: 'Daglig Leder',
    bio: 'Lucas leder strategien og sørger for at våre pedagogiske mål nås med høyeste kvalitet.'
  },
  { 
    name: 'Martinius Dimmen-Hansen', 
    role: 'Økonomi- og HR-ansvarlig',
    bio: 'Martinius har ansvaret for bedriftens økonomiske bærekraft og teamets trivsel.'
  },
  { 
    name: 'Jonas Hole Sletten', 
    role: 'Produkt- og markedsansvarlig',
    bio: 'Jonas utvikler våre interaktive læringsstier og leder vår digitale tilstedeværelse.'
  },
];

const AboutPage: React.FC<AboutPageProps> = ({ onRegisterClick }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[50%] top-0 h-[64rem] w-[128rem] -translate-x-[50%] stroke-slate-800 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
            <svg className="h-full w-full" aria-hidden="true">
              <defs>
                <pattern id="pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth="0" fill="url(#pattern)" />
            </svg>
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">Vår Visjon</h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">
              Vi brenner for å gi ungdom den kunnskapen skolen ofte glemmer: Hvordan mestre sine egne penger.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:grid-cols-2 lg:items-center">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Hvorfor Økonomiakademiet?</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Som elever ved <strong>Akademiet Ypsilon VGS</strong> i Drammen oppdaget vi at mange av våre medelever følte seg usikre på voksenlivets økonomiske utfordringer. Vi bestemte oss for å gjøre noe med det.
              </p>
              <div className="mt-10 flex flex-col gap-8">
                <div className="flex gap-4 items-start">
                  <div className="flex-none rounded-lg bg-logo-blue/10 p-2">
                    <svg className="h-6 w-6 text-logo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Praktisk fokus</h3>
                    <p className="text-slate-600">Vi hopper over tung teori og går rett på det som betyr noe: Skatt, BSU, lån og sparing.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-none rounded-lg bg-logo-blue/10 p-2">
                    <svg className="h-6 w-6 text-logo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">For ungdom, av ungdom</h3>
                    <p className="text-slate-600">Vi vet hvordan vi skal forklare ting så det faktisk er engasjerende å høre på.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:col-span-1">
              <div className="aspect-[4/3] rounded-3xl bg-slate-100 overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-200 flex items-center justify-center">
                 <div className="w-1/2 opacity-20 grayscale">
                    <Logo />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-tr from-logo-blue/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Møt gründerne</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Vi er et dedikert team som kombinerer teknisk innsikt, økonomisk forståelse og formidlingsevne.
            </p>
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {TEAM.map((person) => (
              <li key={person.name} className="flex flex-col items-center">
                <div className="relative w-full aspect-square rounded-3xl bg-white shadow-xl overflow-hidden mb-8 border border-slate-100 group">
                  <div className="absolute inset-0 bg-slate-900/5 transition-opacity group-hover:opacity-0"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-24 h-24 text-slate-200">
                        <Logo />
                     </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold leading-7 tracking-tight text-slate-900">{person.name}</h3>
                <p className="text-sm font-semibold leading-6 text-logo-blue uppercase tracking-widest mt-1">{person.role}</p>
                <p className="mt-4 text-base leading-7 text-slate-600 text-center max-w-xs">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-logo-blue px-6 py-24 shadow-2xl rounded-[3rem] sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klar for å starte din reise?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-slate-200">
              Registrer deg nå og få eksklusiv tilgang til vår prototype.
            </p>
            
            <div className="mt-10 flex justify-center">
              <button 
                onClick={onRegisterClick}
                className="rounded-2xl bg-white px-10 py-5 text-lg font-bold text-logo-blue shadow-xl hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
              >
                Få tilgang nå
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
