import React, { useEffect } from 'react';

interface LegalPageProps {
    type: 'privacy' | 'terms';
    onBack: () => void;
}

const LegalPages: React.FC<LegalPageProps> = ({ type, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type]);

    const content = {
        privacy: {
            title: 'Personvernerklæring',
            sections: [
                {
                    title: 'Hvem vi er',
                    text: 'Økonomiakademiet UB er en ungdomsbedrift ved Akademiet Ypsilon VGS. Vi tar ditt personvern på alvor og samler kun inn nødvendig informasjon for å levere våre tjenester.'
                },
                {
                    title: 'Hvilke data vi samler inn',
                    text: 'Når du registrerer deg hos oss, lagrer vi din e-postadresse og et kryptert passord via Supabase Authentication. Vi lagrer også din progresjon i læringsstiene og dine svar på refleksjonsoppgaver slik at du kan fortsette der du slapp.'
                },
                {
                    title: 'Hvorfor vi samler inn data',
                    text: 'Hovedformålet er å gi deg en tilpasset læringsopplevelse og lagre fremgangen din. Vi bruker ikke dataene dine til markedsføring eller videresalg til tredjeparter.'
                },
                {
                    title: 'Dine rettigheter',
                    text: 'Du har rett til innsyn i hvilke data vi har lagret om deg, og du kan når som helst be om at din brukerprofil og tilhørende data slettes ved å kontakte oss.'
                }
            ]
        },
        terms: {
            title: 'Brukervilkår',
            sections: [
                {
                    title: 'Om tjenesten',
                    text: 'Økonomiakademiet UB leverer en gratis læringsplattform innen privatøkonomi. Tjenesten tilbys "som den er" som en del av et skoleprosjekt.'
                },
                {
                    title: 'Bruk av innhold',
                    text: 'Alt innhold på nettsiden er beskyttet av opphavsrett og er ment for personlig, ikke-kommersiell bruk. Kopiering eller videresalg av innholdet er ikke tillatt uten avtale.'
                },
                {
                    title: 'Ansvarsfraskrivelse',
                    text: 'Innholdet i Økonomiakademiet UB er kun for opplæringsformål og utgjør ikke profesjonell økonomisk rådgivning. Vi tar ikke ansvar for økonomiske beslutninger tatt på grunnlag av informasjonen på denne siden.'
                },
                {
                    title: 'Endringer',
                    text: 'Vi forbeholder oss retten til å endre vilkårene eller innholdet i tjenesten for å forbedre læringstilbudet.'
                }
            ]
        }
    };

    const activeContent = content[type];

    return (
        <div className="bg-slate-50 min-h-screen py-24 px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 p-10 md:p-16">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-slate-400 hover:text-logo-blue font-bold mb-10 transition-all uppercase tracking-widest text-xs group"
                >
                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Gå tilbake
                </button>

                <h1 className="text-4xl font-black text-slate-900 mb-12 sm:text-5xl tracking-tight">
                    {activeContent.title}
                </h1>

                <div className="space-y-12">
                    {activeContent.sections.map((section, idx) => (
                        <section key={idx} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                            <h2 className="text-2xl font-black text-slate-900 mb-4">{section.title}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                {section.text}
                            </p>
                        </section>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-slate-100 text-slate-400 text-sm italic">
                    Sist oppdatert: Ferskeste versjon for skoleåret 2025/2026.
                </div>
            </div>
        </div>
    );
};

export default LegalPages;
