
import React from 'react';

const TEAM = [
  { name: 'Lucas Nevermo Steiro', role: 'Daglig Leder' },
  { name: 'Martinius Dimmen-Hansen', role: 'Økonomi og HR-ansvarlig' },
  { name: 'Jonas Hole Sletten', role: 'Produkt og markeds-ansvarlig' },
];

const About: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-bold leading-7 text-logo-blue uppercase tracking-widest">Vår Historie</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Fra Akademiet Ypsilon VGS</p>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Økonomiakademiet UB ble grunnlagt skoleåret 2025/2026 av engasjerte elever som så et tydelig behov: Mange unge mangler praktisk opplæring i privatøkonomi og sliter med å ta gode økonomiske valg.
              </p>
              <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-bold text-slate-900 border-l-4 border-logo-blue pl-4">
                    Visjon:
                  </dt>{' '}
                  <dd className="inline">Alle unge skal få selvtillit til å ta smarte økonomiske valg – uansett bakgrunn eller kunnskapsnivå.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-bold text-slate-900 border-l-4 border-logo-blue pl-4">
                    Mål:
                  </dt>{' '}
                  <dd className="inline">Bygge Norges mest engasjerende læringsplattform for ungdom.</dd>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 justify-center">
            <h3 className="text-xl font-bold text-slate-900 text-center lg:text-left">Vårt Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TEAM.map((member) => (
                <div key={member.name} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-all hover:border-logo-blue">
                  <p className="text-lg font-bold text-slate-900">{member.name}</p>
                  <p className="text-sm font-medium text-logo-blue">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;