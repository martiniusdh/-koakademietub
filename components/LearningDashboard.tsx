
import React, { useState, useMemo, useEffect } from 'react';
import Logo from './Logo.tsx';


interface ModulePage {
  type: 'video' | 'summary' | 'scenario' | 'quiz' | 'reflection';
  title?: string;
  content?: string;
  videoUrl?: string;
  scenario?: {
    text: string;
    imageUrl?: string;
  };
  quiz?: {
    question: string;
    options: string[];
    correctIndex: number;
  };
  reflectionQuestions?: string[];
  glossary?: { term: string; definition: string }[];
}

interface Module {
  id: string;
  title: string;
  description: string;
  pages: ModulePage[];
}

interface Path {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  color: string;
  lightColor: string;
  modules: Module[];
}

const LEARNING_PATHS_DATA: Path[] = [
  {
    id: 'sparing',
    title: 'Sparing og Renter',
    description: 'Lær hvordan renters rente-effekten kan gjøre deg rik, og hvordan du setter opp en BSU.',
    progress: 0,
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    modules: [
      {
        id: '1.1',
        title: 'Modul 1.1 – Hvorfor spare penger?',
        description: 'Grunnlaget for økonomisk frihet starter med bevisst sparing.',
        pages: [
          { type: 'video', videoUrl: 'https://www.youtube.com/watch?v=vSZ128qPb0c' },
          {
            type: 'summary',
            title: 'Hvorfor du bør spare penger – oppsummert',
            content: `Sparing er nøkkelen til økonomisk frihet og trygghet. Det handler ikke bare om å ha penger liggende, men om å kunne ta valg i livet uten konstant stress.\n\nVi skiller ofte mellom to typer sparing:\n1. Kortsiktig sparing: Penger du trenger innen få år (ferie, mobil, "bufferkonto").\n2. Langsiktig sparing: Penger som skal vokse over mange år (bolig, pensjon).\n\nDet viktigste prinsippet er å betale seg selv først. Sett av et fast beløp hver måned før du bruker penger på noe annet. Start tidlig; tiden du sparer har stor effekt senere!`
          },
          {
            type: 'scenario',
            title: 'Elias sin økonomiske berg-og-dal-bane',
            scenario: {
              text: 'Møt Elias(18). Han har nettopp fått sin første deltidsjobb. Hver måned bruker han alle pengene sine. Plutselig koster en uventet reparasjon på motorsykkelen hans 3000 kr, og Elias må låne penger av foreldrene. Det føles flaut og stressende.\n\nNeste måned bestemmer han seg for å spare 500 kr hver måned på en egen bufferkonto. Over 6 måneder har han 3000 kr. Når uhellet er ute neste gang, har Elias penger klare og et sikkerhetsnett som vil beskytte han mot slike uventede kostnader. Han føler seg voksen og har kontroll.',

            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva er hovedpoenget med en "bufferkonto"?',
              options: ['Å ha penger klare til uventede utgifter/kriser (f.eks. bilreparasjon).', 'Å ha penger til den årlige sommerferien.', 'Å investere i aksjer for rask gevinst.'],
              correctIndex: 0
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hvorfor er det viktig å starte sparingen nå?',
              options: ['Fordi det er lettere å få lån når du har en sparekonto.', 'Fordi det hjelper deg å etablere en varig og god økonomisk vane.', 'Fordi det garanterer at du blir rik raskere.'],
              correctIndex: 1
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva betyr "betal deg selv først"?',
              options: ['At du alltid skal kjøpe ting til deg selv før andre.', 'At du betaler regningene dine så fort du får dem.', 'At du setter av sparepenger først, før du bruker penger på livsopphold og moro.'],
              correctIndex: 2
            }
          },
          {
            type: 'reflection',
            title: 'Oppsummering / Refleksjon',
            reflectionQuestions: [
              'Hvilke kortsiktige mål (neste 12 måneder) vil du starte å spare til?',
              'Hvilket fast beløp tror du at du realistisk sett kan sette til side hver måned fra inntekten din akkurat nå?',
              'Etter å ha lært om viktigheten av en "bufferkonto", hva er den første konkrete handlingen du vil gjøre for å prioritere sparingen din denne uken?'
            ]
          }
        ]
      },
      {
        id: '1.2',
        title: 'Modul 1.2: Forskjellen på sparekonto, BSU og andre spareformer',
        description: 'Finn den spareformen som gir best avkastning for din situation.',
        pages: [
          { type: 'video', videoUrl: 'https://www.youtube.com/watch?v=_F66834P2Xo' },
          {
            type: 'summary',
            title: 'Ulike spareformer forklart',
            content: `Det finnes ikke én "beste" spareform; det finnes bare den rette formen for ditt mål.\n\n• Sparekonto:\nDette er den enkleste og mest fleksible måten å spare på. Pengene dine er trygge på en konto hos banken, og du kan ta dem ut når som helst. Ulempen er at renten ofte er svært lav, noe som betyr at pengene dine vokser lite. Den passer perfekt for kortsiktig sparing (buffer) der tilgjengelighet er viktigst.\n\n• BSU (Boligsparing for ungdom):\nDette er en spareordning for deg under 34 år som vil bygge egenkapital til bolig. Det er den smarteste måten å spare til bolig på! Dere får nemlig en bonus fra staten (via skattesystemet). For hver 10.000 kr du sparer på BSU-kontoen i året, får du 1000 kr tilbake fra staten! Pluss at dere får bankens beste rente. Pengene er imidlertid øremerket boligformål. Tar du dem ut til noe annet, må du betale tilbake bonusen du fikk fra staten.\n\n• Fond:\nNår du kjøper fond, eier du en "handlekurv" av mange forskjellige aksjer. Dette sprer risikoen. Du kan tape penger i perioder dersom markedet faller, mas historisk sett er det gode muligheter for høy avkastning over tid, spesielt hvis du sparer i minst 5 år. Fond er best egnet for langsiktig sparing (pensjon, fremtidig formue) hvor du tåler svingninger i verdi.`,
            glossary: [
              { term: 'Renter', definition: 'Tenk på det som en "gave" fra banken. Du lar banken passe på pengene dine, og som takk får du litt ekstra penger tilbake av dem over tid.' },
              { term: 'Buffer', definition: 'En "extra-penger-konto" for uventede ting. Som om sykkelen går i stykker, eller du må kjøpe en gave i siste liten.' },
              { term: 'Øremerket', definition: 'Betyr at pengene kun kan brukes til én bestemt ting. Du kan ikke bruke dem på noe annet.' },
              { term: 'Risiko', definition: 'Sjanse for at noe kan gå galt. Når du sparer, betyr det sjansen for at pengene dine kan gå opp i verdi, eller ned i verdi (at du taper penger).' }
            ]
          },
          {
            type: 'scenario',
            title: 'Eks: Siri og Karls smarte valg',
            scenario: {
              text: 'Siri (20) sparer til en reise om 6 måneder. Hun setter pengene på en vanlig sparekonto fordi hun trenger tilgang til dem snart.\n\nFettern hennes, Karl (25), har fast jobb og sparer til boligkjøp om 5 år. Han fyller opp BSU-kontoen sin hvert år. Han er motivert fordi han vet at for hver 10.000 kr han sparer, får han en bonus på 1000 kr fra staten, pluss høy rente fra banken. Begge sparer smart, fordi de har valgt riktig spareform for sitt mål og tidshorisont.'
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva er den største fordelen med en BSU-konto for en 25-åring med skattbar inntekt?',
              options: ['Full fleksibilitet til å ta ut penger når som helst.', 'Garantert høy avkastning som i aksjemarkedet.', 'Skattefradrag på sparebeløpet og markedets beste rente.'],
              correctIndex: 2
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Du trenger penger til en uforutsett bilreparasjon neste måned. Hvor bør pengene stå?',
              options: ['I et aksjefond for rask gevinst.', 'På en vanlig sparekonto (bufferkonto) for umiddelbar tilgjengelighet.', 'På BSU-kontoen for høy rente.'],
              correctIndex: 1
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva skjer hvis du tar ut penger fra BSU-kontoen din til noe annet enn boligformål?',
              options: ['Du må betale tilbake bonusen/skattefradraget du har fått, og kan ikke opprette BSU igjen.', 'Du mister kun rentene for det aktuelle året.', 'Ingenting, det er fullt fleksibelt.'],
              correctIndex: 0
            }
          },
          {
            type: 'reflection',
            title: 'Oppsummering / "Hva lærte du?"',
            reflectionQuestions: [
              'Hva er ditt neste store sparemål, og hvilken spareform passer best til det målet?',
              'Hvorfor er det viktig å skille mellom sparing til kortsiktige mål (f.eks. reise) og langsiktige mål (f.eks. bolig)?',
              'Hvilke begrensninger har BSU-kontoen, og hvordan påvirker det valget ditt om å bruke den?'
            ]
          }
        ]
      },
      {
        id: '1.3',
        title: 'Modul 1.3: Effekten av renters rente',
        description: 'Se hvordan små beløp vokser seg enorme over tid.',
        pages: [
          { type: 'video', videoUrl: 'https://youtu.be/yLYvoHYFgKM' },
          {
            type: 'summary',
            title: 'Hva er renters rente?',
            content: `Renters rente er prinsippet der avkastning (renter eller gevinst) du oppnår på sparepengene dine, blir lagt til det opprinnelige beløpet. Neste periode beregnes renten av et større beløp. Dette skaper en selvforsterkende, eksponentiell vekst.\n\nBeregning med vekstfaktor og prosent:\n• Du starter med 10 000 kr og får 5% rente per år.\n• År 1: Du tjener 500 kr i rente (10 000 × 0,05). Totalbeløp: 10 500 kr.\n• År 2: Nå tjener du rente på 10 500 kr. Du tjener 525 kr (10 500 × 0,05). Totalbeløp: 11 025 kr.\n\nForskjellen er 25 kr i ekstra renteinntekter i år 2, kun fordi du lot pengene fra år 1 bli stående. Over 30 år blir denne forskjellen enorm.\n\nVekstfaktoren er 1 + rentesats. I eksempelet over er den 1,05. Du kan regne ut fremtidig verdi med formelen:\n\nFremtidig verdi = Startbeløp × (Vekstfaktor)^Antall år`,
            glossary: [
              { term: 'Avkastning', definition: 'Hvor mye ekstra penger du tjener på sparingen eller investeringen din.' },
              { term: 'Eksponentiell vekst', definition: 'Betyr at noe vokser saktere i starten, men så plutselig skyter det fart og vokser veldig, veldig fort. Tenk på en snøball som ruller!' },
              { term: 'Rentesats', definition: 'Hvor stor "gave" (rente) du får fra banken, vanligvis oppgitt i prosent per år.' },
              { term: 'Vekstfaktor', definition: 'Et tall vi bruker i matte for å finne ut hvor mye pengene dine vokser med hvert år. Hvis renten er 5%, er vekstfaktoren 1,05.' },
              { term: 'Startbeløp', definition: 'Hvor mye penger du begynner å spare eller investere med.' }
            ]
          },
          {
            type: 'scenario',
            title: 'Eks: Forskjellen på å starte tidlig',
            scenario: {
              text: 'Vi antar en årlig avkastning (rente) på 7% for begge scenarioer.\n\n• Person A er smart og starter tidlig. Hen setter inn 10 000 kr én gang som 20-åring og rører ikke pengene før hun er 60 år.\n• Person B venter. Hen setter inn nøyaktig de samme 10 000 kr én gang som 30-åring og rører dem heller ikke før hun er 60 år.\n\nResultat ved 60 år:\n• Person B sine 10 000 kr har vokst til ca. 76 000 kr (over 30 år).\n• Person A sine 10 000 kr har vokst til nesten 150 000 kr (over 40 år)!\n\nForskjellen blir så stor fordi renters rente gjør at pengene vokser multiplikativt. Person A får 40 runder med vekst, mens Person B bare får 30, og de siste rundene gir mest vekst.'
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva betyr "renters rente"-effekten?',
              options: ['At renten på lånet ditt går opp hvert år.', 'At du får rente på penger du allerede har fått i rente.', 'At du får penger fra banken for å betale regninger.'],
              correctIndex: 1
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva er den viktigste faktoren for å utnytte renters rente maksimalt?',
              options: ['Tid – å starte så tidlig som mulig.', 'Å ha masse penger å starte med.', 'Å velge riktig bank.'],
              correctIndex: 0
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hvis du har 1000 kr og får 10% rente i to år, hvor mye penger har du da?',
              options: ['1200 kr', '1100 kr', '1210 kr'],
              correctIndex: 2
            }
          },
          {
            type: 'reflection',
            title: 'Oppsummering / “Hva lærte du?”',
            reflectionQuestions: [
              'Når du ser hvor mye tid påvirker sparingen, hvordan påvirker det avgjørelsen din om å starte å spare nå kontra å vente et par år?',
              'Kan du tenke på en vane i livet ditt (f.eks. trening, studier) hvor "renters rente"-prinsippet og gjelder?',
              'Hva er det første, minste beløpet du kan sette til side i dag for å starte "snøballen" din?'
            ]
          }
        ]
      },
    ]
  },
  {
    id: 'investering',
    title: 'Investering og Aksjer',
    description: 'En enkel guide til aksjemarkedet, fond og hvordan du unngår de vanligste feilene.',
    progress: 0,
    color: 'bg-logo-blue',
    lightColor: 'bg-slate-100',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    modules: [
      {
        id: '2.1',
        title: 'Modul 2.1: Grunnleggende om aksjer og fond',
        description: 'Hva er egentlig en aksje, og hvorfor bør du eie fond?',
        pages: [
          { type: 'video', videoUrl: 'https://youtu.be/MoRmZjjqw4Q' },
          {
            type: 'summary',
            title: 'Aksjer vs Fond',
            content: `Når du ønsker å la sparepengene dine jobbe for deg, står valget ofte mellom aksjer og fond. Forskjellen ligger primært i eierskap og risikospredning.\n\n• Aksje:\nEn aksje er en eierandel i ett enkelt aksjeselskap. Kjøper du en aksje i et selskap, eier du en liten del av det. Går det bra med selskapet, kan du forvente at aksjen øker i verdi, men går det dårlig, kan du tape penger. Du styrer selv hvilke selskaper du vil investere i.\n\n• Fond:\nEt fond er en samling av mange aksjer eller andre verdipapirer. Ved å spare i fond sprer du pengene dine på mange ulike selskaper, ofte på tvers av bransjer og land. Pengene blir forvaltet av profesjonelle forvaltere. Fond har innebygd risikospredning og er generelt mindre risikabelt enn en enkeltaksje.\n\nHva passer for deg?\nValget avhenger av hvor lenge du skal spare (tidshorisont), hvor høy avkastning du forventer, og hvor mye svingninger du tåler. Lang tidshorisont (gjerne 10 år eller mer) gir større fleksibilitet til å tåle risikoen i aksjefond.`,
            glossary: [
              { term: 'Aksje', definition: 'En bitteliten del av et selskap du eier. Du blir medeier.' },
              { term: 'Fond', definition: 'En "handlekurv" med mange aksjer i mange forskjellige selskaper. En ekspert passer på kurven for deg.' },
              { term: 'Risikospredning', definition: 'Å fordele pengene dine på mange forskjellige ting (som i et fond), slik at du ikke mister alt hvis én ting går galt.' },
              { term: 'Verdipapirer', definition: 'Et bevis på at du eier noe, for eksempel en aksje eller en del av et fond.' },
              { term: 'Avkastning', definition: 'Hvor mye ekstra penger du tjener på sparingen eller investeringen din.' },
              { term: 'Svingninger', definition: 'Betyr at verdien på pengene dine går litt opp og litt ned over tid.' }
            ]
          },
          {
            type: 'scenario',
            title: 'Eks: Eie bare én brusfabrikk, eller mange?',
            scenario: {
              text: 'Tenk deg at du har 1000 kroner du vil investere.\n\n• Scenario A (Høy risiko): Du kjøper kun aksjer i "Solo AS".\n- Oppside: Hvis "Solo AS" blir superpopulært internasjonalt, kan aksjene dine skyte i været og være verdt 10.000 kr neste år.\n- Nedside: Hvis folk plutselig slutter å drikke Solo, kan selskapet gå dårlig, og du mister kanskje alle pengene dine.\n\n• Scenario B (Spredt risiko): Du kjøper et fond som eier aksjer i Solo AS, Coca-Cola, Pepsi, Fanta, og tusenvis av andre drikkevare- og matprodusenter.\n- Resultat: Pengene dine vokser jevnere over tid, i takt med verdensøkonomien. Du vil trolig ikke doble pengene dine like fort som i Scenario A, men du er også godt beskyttet mot at alt går galt hvis bare én brus slutter å selges.'
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva eier du når du kjøper en aksje i et selskap?',
              options: ['Du eier alle produktene de selger.', 'Du eier en bitteliten del av selskapet.', 'Du eier et lån selskapet må betale tilbake.'],
              correctIndex: 1
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hvorfor er et fond ofte mindre risikabelt enn å eie én enkelt aksje?',
              options: ['Fordi fond er forsikret av staten.', 'Fordi du alltid tjener penger i et fond.', 'Fordi fond sprer pengene dine over mange forskjellige selskaper (risikospredning).'],
              correctIndex: 2
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hvis selskapet du eier aksjer i gjør det veldig bra og tjener masse penger, hva skjer mest sannsynlig med aksjen din?',
              options: ['Verdien på aksjen går opp.', 'Verdien på aksjen går ned.', 'Verdien forblir den samme.'],
              correctIndex: 0
            }
          },
          {
            type: 'reflection',
            title: 'Oppsummering / Refleksjon',
            reflectionQuestions: [
              'Hvorfor tror du many nybegynnere starter med fond i stedet for enkeltaksjer?',
              'Kan du tenke deg en bransje eller et selskap du har lyst til å eie en liten bit av? Hvorfor akkurat det selskapet?',
              'Hvorfor er det viktig å tenke på risiko når du skal plassere sparepengene dine?'
            ]
          }
        ]
      },
      {
        id: '2.2',
        title: 'Modul 2.2: Hva risiko betyr',
        description: 'Lær å balansere risiko og forventet avkastning.',
        pages: [
          { type: 'video', videoUrl: 'https://youtu.be/LvtE1Kku2p0' },
          {
            type: 'summary',
            title: 'Hva er risiko?',
            content: `Risiko er et sentralt begrep når vi snakker om investeringer. Det handler om usikkerhet rundt fremtidig avkastning, altså hvor mye pengene dine vil svinge i verdi.\n\n• Risiko handler om svingninger:\nHøy risiko betyr at verdien på investeringen din kan svinge mye opp og ned på kort sikt. Lav risiko betyr jevnere og mer forutsigbar vekst.\n\n• Sammenheng mellom risiko og avkastning:\nGenerelt sett henger risiko og potensiell avkastning sammen. Skal du ha mulighet for høy avkastning, må du akseptere høyere risiko. Lav risiko gir lavere potensiell avkastning.\n\n• Tidshorisont er nøkkelen:\nHvor mye risiko du bør ta avhenger av hvor lenge du skal investere. Hvis du har lang tidshorisont (5-10 år eller mer), har du tid til å "ri av" svingningene i markedet. Da kan du tåle mer risiko.`
          },
          {
            type: 'scenario',
            title: 'Marie og Lars sin risikotoleranse',
            scenario: {
              text: 'Marie (19) skal investere penger hun trenger til studiestart neste år. Hun velger veldig lav risiko (en bankkonto), fordi hun ikke har tid til å tåle at pengene svinger i verdi.\n\nLars (24) investerer penger til pensjon om 40 år. Hen velger høy risiko (globale aksjefond) fordi hen har masse tid til å ri av svingningene og vet at markedet historisk sett går opp over lang tid.\n\nBegge valgene er riktige, fordi de tar hensyn til egen tidshorisont og risikotoleranse.'
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva er risiko i investeringssammenheng?',
              options: ['Hvor mye verdien på pengene dine kan svinge opp og ned.', 'Garantert tap av penger.', 'Hvor fort du kan ta ut pengene dine fra banken.'],
              correctIndex: 0
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hvorfor kan en person med 30 års tidshorisont tåle mer risiko enn en person med 1 års tidshorisont?',
              options: ['Fordi de har mer penger å starte med.', 'Fordi de har tid til å vente på at markedet henter seg inn etter svingninger.', 'Fordi bankene gir dem bedre rente.'],
              correctIndex: 1
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva er sammenhengen mellom risiko og potensiell avkastning?',
              options: ['Høy risiko gir alltid lav avkastning.', 'Lav risiko gir alltid høy avkastning.', 'Høyere risiko gir mulighet for høyere avkastning (men også større tap).'],
              correctIndex: 2
            }
          },
          {
            type: 'reflection',
            title: 'Oppsummering / "Hva lærte du?"',
            reflectionQuestions: [
              'Hva er din egen personlige risikotoleranse? Beskriv deg selv som en investor (forsiktig, balansert eller aggressiv).',
              'Tenk på dine egne sparemål. Hva er tidshorisonten for hvert mål, og hvordan påvirker det hvor mye risiko du bør ta?',
              'Hvorfor er det viktig å skille mellom risiko og gambling når vi snakker om langsiktig sparing?'
            ]
          }
        ]
      },
      {
        id: '2.3',
        title: 'Modul 2.3: Langsiktig investering kontra "kjapp gevinst"',
        description: 'Hvorfor tålmodighet er din beste venn i aksjemarkedet.',
        pages: [
          { type: 'video', videoUrl: 'https://youtu.be/XdLLKPa9_s8' },
          {
            type: 'summary',
            title: 'Langsiktig investering: Den lurere veien for de fleste',
            content: `Det er to hovedstrategier for investering, men den ene er betydelig mer realistisk og mindre stressende for den vanlige personen:\n\n• "Kjapp gevinst" / Kortsiktig investering:\nDette innebærer å prøve å "time markedet" – kjøpe akkurat når prisen er lav og selge akkurat når den er høy, ofte i løpet av timer eller dager. Dette er ekstremt vanskelig, selv for eksperter. Det krever mye tid, kunnskap og kan være veldig risikabelt, med stor sjanse for å tape penger. Det handler om å være aktiv i markedet og reagere raskt på endringer.\n\n• Langsiktig investering:\nDette innebærer å investere jevnlig over lang tid (5, 10 år eller mer) og la pengene vokse sammen med verdensøkonomien. Du trenger ikke å "time" markedet. Warren Buffet, en av verdens mest suksessfulle investorer, anbefaler denne metoden. Den er mindre stressende og har historisk sett vist seg å være mer lønnsom for de fleste.\n\nHvordan "alle" kan investere:\nDu trenger ikke millioner for å begynne; du kan starte med så lite som en 100-lapp i et fond via månedlig sparing. Det handler om å komme i gang, ikke å være perfekt fra dag én.`,
            glossary: [
              { term: 'Strategier (for investering)', definition: 'Forskjellige planer eller måter å håndtere pengene dine på.' },
              { term: '"Time markedet"', definition: 'Å prøve å gjette akkurat riktig tidspunkt for å kjøpe (når prisen er lavest) og selge (når prisen er høyest) aksjer. Veldig vanskelig å få til.' }
            ]
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva er hovedforskjellen mellom langsiktig investering og kortsiktig investering?',
              options: ['Du betaler ikke skatt på kortsiktig gevinst.', 'Kortsiktig investering er ulovlig i Norge.', 'Kortsiktig investering fokuserer på raske bevegelser, mens langsiktig fokuserer på vekst over mange år.'],
              correctIndex: 2
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva er en fordel med langsiktig investering sammenlignet med å satse kortsiktig?',
              options: ['Garantert at du blir rik raskere.', 'Mindre stress og mulighet til å ri av svingninger i markedet.', 'Du slipper å betale avgifter til banken.'],
              correctIndex: 1
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hvor mye penger må du ha for å starte å investere i et fond i de fleste norske banker?',
              options: ['Ofte så lite som 100-500 kr i måneden.', 'Minimum 100 000 kr.', 'Minimum 10 000 kr.'],
              correctIndex: 0
            }
          },
          {
            type: 'reflection',
            title: 'Oppsummering / "Hva lærte du?"',
            reflectionQuestions: [
              'Hvilken investeringsstrategi – langsiktig eller kortsiktig – føles mest riktig for deg akkurat nå? Hvorfor?',
              'Hvorfor tror du det er så vanskelig for den vanlige personen å "time markedet" (satse kortsiktig)?',
              'Hva er det første steget du vil ta for å starte din egen investeringsreise, basert på det du har lært om tilgjengeligheten?'
            ]
          }
        ]
      },
    ]
  },
  {
    id: 'budsjett',
    title: 'Budsjett og Pengebruk',
    description: 'Ta kontroll over hverdagsøkonomien med 50/30/20-regelen og smarte apper.',
    progress: 0,
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    modules: [
      {
        id: '3.1',
        title: 'Modul 3.1: Hvordan sette opp et enkelt budsjett',
        description: 'Lag en plan for pengene dine før de forsvinner.',
        pages: [
          { type: 'video', videoUrl: 'https://youtu.be/sLt0V9UOFHs' },
          {
            type: 'summary',
            title: 'Hva er et budsjett?',
            content: `Et budsjett er et av de viktigste verktøyene for å få kontroll over økonomien din. Det gir deg oversikt over hvor mye penger du får inn (inntekt) og hvor mye du bruker (utgifter). Ved å bruke et budsjett, kan du sørge for at du har råd til regningene dine, samtidig som du sparer til de store drømmene dine.\n\nSlik setter du det opp, enkelt forklart:\n\n• Steg 1: Finn ut hva du tjener\nFinn all inntekten din for måneden (lønn etter skatt, lommepenger, stipender osv.).\n\n• Steg 2: Skriv ned faste utgifter\nDette er regninger som er like hver måned (mobilabonnement, husleie, forsikring, osv.).\n\n• Steg 3: Skriv ned variable utgifter\nDette er penger du bruker på mat, klær, kafe, fritid og transport. Det varierer fra måned til måned.\n\n• Steg 4: Trekk fra og juster\nTrekk alle utgiftene fra inntekten. Har du penger igjen? Flott, sett dem til sparing! Går du i minus? Da må du justere de variable utgiftene dine.`,
            glossary: [
              { term: 'Budsjett', definition: 'Et viktig verktøy (en plan) som hjelper deg å få kontroll over pengene dine.' },
              { term: 'Økonomi', definition: 'Alt som har med pengene dine å gjøre – hvor mye du får inn og hva du bruker dem på.' },
              { term: 'Inntekt', definition: 'Alle pengene du får inn (f.eks. lønn, lommepenger).' },
              { term: 'Utgifter', definition: 'Alle pengene du bruker.' },
              { term: 'Faste utgifter', definition: 'Regninger som koster nøyaktig det samme hver måned (f.eks. mobilabonnement).' },
              { term: 'Variable utgifter', definition: 'Penger du bruker på ting som endrer seg fra måned til måned (f.eks. mat, klær, kafe).' }
            ]
          },
          {
            type: 'scenario',
            title: 'Eks: Julies første budsjett',
            scenario: {
              text: 'Julie fikk sin første lønn på 15 000 kr. Hun fulgte stegene:\n\n1. Inntekt: 15 000 kr.\n2. Faste utgifter: Mobilregning (500 kr), Kollektivtransport (500 kr), Totalt: 1000 kr.\n3. Variable utgifter (estimert): Mat (4000 kr), Klær/Moro (2000 kr), Totalt: 6000 kr.\n\nTotal utgift: 1000 kr + 6000 kr = 7000 kr.\nPenger igjen: 15 000 kr - 7000 kr = 8000 kr.\n\nJulie hadde masse penger igjen! Hun bestemte seg for å sette 5000 kr rett inn på BSU-kontoen sin hver måned, og brukte de siste 3000 kr på det hun ville. Budsjettet ga henne oversikt og kontroll.'
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva er hovedformålet med et budsjett?',
              options: ['Å gi deg oversikt og kontroll over hvor pengene dine går.', 'Å fortelle deg nøyaktig hva du har lov til å kjøpe.', 'Å hjelpe deg med å tjene mer penger raskt.'],
              correctIndex: 0
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva er forskjellen på en fast utgift (f.eks. mobilregning) og en variabel utgift (f.eks. mat)?',
              options: ['Faste utgifter betaler du skatt på, variable gjør du ikke.', 'Faste utgifter er alltid høyere enn variable utgifter.', 'Faste utgifter er like store hver måned, mens variable endrer seg.'],
              correctIndex: 2
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva bør du gjøre hvis budsjettet ditt viser at du bruker mer penger enn du får inn (går i minus)?',
              options: ['Ta opp et lite lån for å dekke differansen.', 'Kutte ned på de variable utgiftene (som mat, klær, moro).', 'Be om høyere lønn umiddelbart.'],
              correctIndex: 1
            }
          },
          {
            type: 'reflection',
            title: 'Oppsummering / Refleksjon',
            reflectionQuestions: [
              'Hvilken utgiftspost (mat, klær, strømming, kafe) tror du er din største "pengesluk" akkurat nå?',
              'Etter å ha sett Julies eksempel: Hva tror du blir det vanskeligste steget for deg personlig når du skal sette opp ditt første budsjett?',
              'Hvor ofte bør du se på eller oppdatere budsjettet ditt for at det skal fungere i praksis?'
            ]
          }
        ]
      },
      {
        id: '3.2',
        title: 'Modul 3.2: Hva man faktisk bruker penger på i hverdagen',
        description: 'Kartlegg småutgiftene som tømmer kontoen din.',
        pages: [
          { type: 'video', videoUrl: 'https://youtu.be/TFWTLYpcCOk' },
          {
            type: 'summary',
            title: 'Små utgifter blir store summer',
            content: `Mange overser de "små" utgiftene fordi de virker ubetydelige der og da. En kaffe til 45 kroner hver dag blir fort til 18 000 kroner i året!\n\nEn forbruksanalyse er nøkkelen til å se det faktiske pengebruket ditt. Det betyr at du går gjennom bankutskriften din for den siste måneden og ser nøyaktig hva du har brukt penger på.\n\nVanlige "pengesluk" er:\n• Impulskjøp: Ting du kjøper uten å planlegge det (sjokolade ved kassen, unødvendige klær).\n• Abonnementstjenester: Mange betaler for strømmetjenester, apper eller treningsmedlemskap de sjelden bruker.\n• Mat og drikke ute: Det er ofte mye billigere å lage matpakke hjemme enn å kjøpe lunsj hver dag.\n\nBli bevisst, så kan du ta smarte valg!`,
            glossary: [
              { term: 'Forbruksanalyse', definition: 'Å gå nøye gjennom bankutskriften din for å se nøyaktig hva du bruker penger på. Det er som å være detektiv for dine egne penger!' },
              { term: '"Pengesluk"', definition: 'Små utgifter som du kanskje ikke tenker over, men som spiser opp mye penger over tid (f.eks. daglig kaffe eller take-away).' },
              { term: 'Impulskjøp', definition: 'Ting du kjøper helt plutselig, uten å ha planlagt det på forhånd.' },
              { term: 'Abonnementstjenester', definition: 'Ting du betaler for automatisk hver måned, som Netflix, Spotify eller et treningsstudio-medlemskap.' },
              { term: 'Forbruksvaner', definition: 'De faste måtene du bruker pengene dine på hver dag eller uke.' }
            ]
          },
          {
            type: 'scenario',
            title: 'Eks: Mias matpakke-sparing',
            scenario: {
              text: 'Mia brukte 120 kr på take-away-lunsj hver dag på skolen. Hun lærte om forbruksanalyse og fant ut at hun brukte nesten 2400 kr i måneden på dette!\n\nHun byttet til å smøre niste hjemme, som kostet ca. 30 kr dagen. Hun sparte 90 kr dagen. På en måned sparte hun nesten 1800 kr, som hun nå kan bruke på sparing til lappen. Små endringer i hverdagen ga stor effekt på sparingen.'
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva er en forbruksanalyse?',
              options: ['Å ringe banken for å få lavere rente på lånet.', 'Å sammenligne priser på matvarer i forskjellige butikker.', 'Å gå gjennom bankutskriften for å se nøyaktig hva du bruker penger på.'],
              correctIndex: 2
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hva er et eksempel på et "pengesluk" som mange overser?',
              options: ['Små, daglige kjøp av kaffe eller take-away.', 'Husleie.', 'Månedlig sparing i BSU.'],
              correctIndex: 0
            }
          },
          {
            type: 'quiz',
            quiz: {
              question: 'Hvorfor er det viktig å bli bevisst på pengebruken sin i hverdagen?',
              options: ['Fordi banken krever at du har oversikt.', 'Fordi det hjelper deg å ta kontroll og frigjøre penger til sparing eller viktige mål.', 'Fordi du må betale mer skatt hvis du bruker mye penger.'],
              correctIndex: 1
            }
          },
          {
            type: 'reflection',
            title: 'Oppsummering / Refleksjon',
            reflectionQuestions: [
              'Hvilken utgift (kaffe, take-away, strømming, klær) tror du er ditt største "pengesluk" akkurat nå?',
              'Hva er den første konkrete handlingen du vil gjøre etter å ha lært dette, for å identifisere dine egne forbruksvaner (f.eks. sjekke siste bankutskrift)?',
              'Kan du tenke på en vane du kan endre (som Mia gjorde med matpakken) som kan frigjøre penger til sparing?'
            ]
          }
        ]
      },
    ]
  },
];


const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return '';
  // Handle standard youtube.com/watch?v=ID and youtu.be/ID
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
};

const ModuleViewer: React.FC<{ module: Module, pathColor: string, onFinish: () => void, onExit: () => void }> = ({ module, pathColor, onFinish, onExit }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const page = module.pages[currentPage];
  const isLastPage = currentPage === module.pages.length - 1;

  const handleNext = () => {
    if (page?.type === 'quiz' && !isAnswerCorrect) return;

    if (isLastPage) {
      window.scrollTo(0, 0);
      onFinish();
    } else {
      setCurrentPage(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerCorrect(null);
    }
  };

  const handleQuizSubmit = (index: number) => {
    if (page?.type !== 'quiz') return;
    setSelectedOption(index);
    const correct = index === page.quiz?.correctIndex;
    setIsAnswerCorrect(correct);
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col min-h-[70vh]">
      <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
        <div>
          <h2 className="text-xl font-black text-slate-900">{module.title}</h2>
          <p className="text-sm text-slate-500 font-medium">Side {currentPage + 1} av {module.pages.length}</p>
        </div>
        <button onClick={onExit} className="p-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-slate-200">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <div className="w-full h-2 bg-slate-100">
        <div
          className={`h-full ${pathColor} transition-all duration-500`}
          style={{ width: `${((currentPage + 1) / module.pages.length) * 100}%` }}
        ></div>
      </div>

      <div className="flex-grow p-8 md:p-12 overflow-y-auto">
        {!page ? (
          <div className="text-center py-20">
            <p className="text-slate-400 font-bold">Innhold for denne siden er under utvikling.</p>
            <button onClick={onExit} className="mt-4 text-logo-blue font-bold">Gå tilbake</button>
          </div>
        ) : (
          <>
            {page.type === 'video' && (
              <div className="animate-in fade-in duration-700 flex flex-col items-center justify-center min-h-[45vh]">
                <div className="w-full aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative group border-4 border-slate-900">
                  {page.videoUrl ? (
                    <iframe
                      className="w-full h-full"
                      src={getYouTubeEmbedUrl(page.videoUrl) || page.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-12 h-12 translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {page.type === 'summary' && (
              <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-3xl font-black text-slate-900">{page.title}</h3>
                <div className="grid md:grid-cols-5 gap-12">
                  <div className="md:col-span-3 space-y-6">
                    <div className="text-lg text-slate-600 leading-relaxed whitespace-pre-wrap font-medium">
                      {page.content}
                    </div>
                    {page.glossary && page.glossary.length > 0 && (
                      <div className="mt-8 border-t border-slate-100 pt-8">
                        <details className="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all duration-300 shadow-sm">
                          <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-logo-blue/10 flex items-center justify-center text-logo-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                              </div>
                              <span className="font-bold text-slate-900 text-lg">Begrepsliste</span>
                            </div>
                            <div className="text-slate-400 transition-transform duration-300 group-open:rotate-180">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                          </summary>
                          <div className="px-6 pb-6 pt-2">
                            <div className="grid gap-4">
                              {page.glossary.map((item, idx) => (
                                <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-logo-blue/20 transition-colors">
                                  <p className="font-black text-logo-blue text-xs uppercase tracking-widest mb-2">
                                    {item.term}
                                  </p>
                                  <p className="text-slate-600 leading-relaxed font-medium">
                                    {item.definition}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </details>
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-inner flex flex-col items-center justify-center text-center h-fit sticky top-0">
                    <div className="w-24 h-24 mb-6 opacity-40"><Logo /></div>
                    <h4 className="font-black text-slate-900 text-lg mb-3">Viktig poeng</h4>
                    <p className="text-slate-500 italic leading-relaxed">
                      {module.id === '2.3'
                        ? '"Tålmodighet er ikke bare en dyd, det er en investeringsstrategi."'
                        : (module.id === '3.1'
                          ? '"Et budsjett er ikke en begrensning, det er en tillatelse til å bruke penger på det som faktisk betyr noe for deg."'
                          : (module.id === '3.2'
                            ? '"Små bekker gjør en stor å. Ved å fjerne de unødvendige småutgiftene, bygger du raskt kapital til det du virkelig ønsker deg."'
                            : (module.id === '1.3' ? '"Tid i markedet slår timing av markedet."' : '"Sparing handler om å beholde penger."')
                          )
                        )
                      }
                    </p>
                  </div>
                </div>
              </div>
            )}

            {page.type === 'scenario' && (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                <h3 className="text-3xl font-black text-slate-900">{page.title}</h3>
                <div className="bg-slate-50/50 p-10 rounded-[3rem] border border-slate-100 shadow-xl">
                  <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="w-full md:w-56 h-56 rounded-[2rem] bg-white shadow-lg flex items-center justify-center border-4 border-white flex-shrink-0 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-logo-blue/5 group-hover:bg-transparent transition-colors"></div>
                      <svg className="w-32 h-32 text-slate-200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                      <div className="absolute bottom-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400">Illustrasjon</div>
                    </div>
                    <div className="text-xl text-slate-700 leading-relaxed whitespace-pre-wrap font-medium italic">
                      {page.scenario?.text}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {page.type === 'quiz' && (
              <div className="space-y-8 max-w-2xl mx-auto py-8 animate-in fade-in duration-500">
                <div className="text-center mb-12">
                  <span className={`inline-block px-5 py-2 rounded-full ${pathColor} text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl`}>Quiz-oppgave</span>
                  <h3 className="text-3xl font-black text-slate-900 leading-tight">{page.quiz?.question}</h3>
                </div>

                <div className="space-y-4">
                  {page.quiz?.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuizSubmit(idx)}
                      disabled={isAnswerCorrect === true}
                      className={`w-full p-6 text-left rounded-3xl border-2 transition-all flex items-center justify-between group relative overflow-hidden
                        ${selectedOption === idx
                          ? (idx === page.quiz?.correctIndex
                            ? 'bg-emerald-50 border-emerald-500 shadow-lg shadow-emerald-100'
                            : 'bg-rose-50 border-rose-500 shadow-lg shadow-rose-100 animate-shake')
                          : 'bg-white border-slate-100 hover:border-logo-blue hover:shadow-md shadow-sm'}`}
                    >
                      <span className={`text-lg font-bold pr-8 ${selectedOption === idx ? (idx === page.quiz?.correctIndex ? 'text-emerald-700' : 'text-rose-700') : 'text-slate-700 group-hover:text-logo-blue transition-colors'}`}>
                        {option}
                      </span>
                      {selectedOption === idx && (
                        <div className={`p-2 rounded-full flex-shrink-0 ${idx === page.quiz?.correctIndex ? 'bg-emerald-500' : 'bg-rose-500'} text-white shadow-lg`}>
                          {idx === page.quiz?.correctIndex ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                          )}
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {isAnswerCorrect === false && (
                  <p className="text-center text-rose-600 font-black mt-8 animate-bounce text-sm">Feil svar, prøv igjen for å fortsette!</p>
                )}
                {isAnswerCorrect === true && (
                  <div className="text-center text-emerald-600 font-black text-2xl mt-8 flex items-center justify-center gap-3">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Helt rett!
                  </div>
                )}
              </div>
            )}

            {page.type === 'reflection' && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <h3 className="text-4xl font-black text-slate-900 text-center">{page.title}</h3>
                <div className="grid gap-8">
                  {page.reflectionQuestions?.map((q, idx) => (
                    <div key={idx} className="bg-slate-50/50 p-10 rounded-[2.5rem] border border-slate-100 shadow-xl">
                      <p className="text-xl font-black text-slate-900 mb-6">{q}</p>
                      <textarea
                        className="w-full bg-white border border-slate-200 rounded-[1.5rem] p-6 text-slate-700 focus:ring-4 focus:ring-logo-blue/10 focus:border-logo-blue focus:outline-none shadow-inner transition-all text-lg"
                        placeholder="Ditt svar..."
                        rows={3}
                      ></textarea>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="w-24 h-24 text-logo-blue mb-6 drop-shadow-2xl animate-pulse">
                    <Logo />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 mb-2">Modul fullført!</h4>
                  <p className="text-xl text-slate-500 font-medium">Du har nå fullført denne modulen. Godt jobbet!</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center px-12">
        <button
          onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
          disabled={currentPage === 0}
          className="px-8 py-4 font-black text-slate-400 hover:text-slate-900 disabled:opacity-0 transition-all flex items-center gap-2 uppercase tracking-widest text-xs"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
          Tilbake
        </button>
        <button
          onClick={handleNext}
          disabled={page?.type === 'quiz' && isAnswerCorrect !== true}
          className={`px-12 py-5 rounded-[1.5rem] font-black text-white ${pathColor} shadow-2xl shadow-current/30 hover:brightness-95 hover:scale-105 transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-4 uppercase tracking-widest text-sm`}
        >
          {isLastPage ? 'Fullfør modul' : 'Neste steg'}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

const LearningDashboard: React.FC = () => {
  const [selectedPathId, setSelectedPathId] = useState<string | null>(null);
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());

  // Beregn fremdrift for hver sti dynamisk
  const paths = useMemo(() => {
    return LEARNING_PATHS_DATA.map(path => {
      const completedInPath = path.modules.filter(m => completedModules.has(m.id)).length;
      const progress = Math.round((completedInPath / path.modules.length) * 100);
      return { ...path, progress };
    });
  }, [completedModules]);

  const selectedPath = paths.find(p => p.id === selectedPathId);
  const activeModule = selectedPath?.modules.find(m => m.id === activeModuleId);

  const handleBack = () => {
    setSelectedPathId(null);
    setActiveModuleId(null);
  };

  const handleModuleExit = () => setActiveModuleId(null);

  const handleModuleFinish = (moduleId: string) => {
    setCompletedModules(prev => {
      const next = new Set(prev);
      next.add(moduleId);
      return next;
    });
    setActiveModuleId(null);
  };

  if (activeModule && selectedPath) {
    return (
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh]">
        <ModuleViewer
          module={activeModule}
          pathColor={selectedPath.color}
          onFinish={() => handleModuleFinish(activeModule.id)}
          onExit={handleModuleExit}
        />
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[60vh]">
      {!selectedPath ? (
        <>
          <header className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-4xl font-black text-slate-900 sm:text-5xl tracking-tight">Velkommen til ditt akademi</h1>
            <p className="mt-4 text-xl text-slate-600 font-medium">Velg en læringssti for å starte din reise mot økonomisk frihet.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {paths.map((path, idx) => (
              <div
                key={path.id}
                className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col group hover:scale-[1.02] transition-all animate-in fade-in slide-in-from-bottom-8 duration-500"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`h-4 w-full ${path.color}`}></div>
                <div className="p-10 flex-grow">
                  <div className={`w-20 h-20 rounded-[1.5rem] ${path.color} text-white flex items-center justify-center mb-8 shadow-2xl shadow-current/30`}>
                    {path.icon}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-5">{path.title}</h3>
                  <p className="text-lg text-slate-500 leading-relaxed mb-10 font-medium">{path.description}</p>

                  <div className="mb-8">
                    <div className="flex justify-between text-xs font-black text-slate-400 mb-3 uppercase tracking-[0.2em]">
                      <span>Din fremdrift</span>
                      <span>{path.progress}%</span>
                    </div>
                    <div className="w-full h-4 bg-slate-50 rounded-full overflow-hidden border border-slate-100 p-1">
                      <div
                        className={`h-full ${path.color} rounded-full transition-all duration-1000 shadow-inner`}
                        style={{ width: `${path.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="p-10 pt-0 mt-auto">
                  <button
                    onClick={() => setSelectedPathId(path.id)}
                    className={`w-full py-5 rounded-2xl font-black text-white ${path.color} hover:brightness-95 transition-all shadow-xl shadow-current/10 active:scale-95 uppercase tracking-widest text-sm`}
                  >
                    Utforsk stien
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="animate-in fade-in slide-in-from-left-4 duration-500">
          <button
            onClick={handleBack}
            className="flex items-center gap-3 text-slate-400 hover:text-slate-900 font-black mb-10 transition-colors group uppercase tracking-[0.2em] text-xs"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Til oversikten
          </button>

          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className={`p-10 rounded-[3rem] ${selectedPath.lightColor} border border-white shadow-2xl shadow-slate-200/50 sticky top-28`}>
                <div className={`w-24 h-24 rounded-[2rem] ${selectedPath.color} text-white flex items-center justify-center mb-8 shadow-2xl shadow-current/30`}>
                  {selectedPath.icon}
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">{selectedPath.title}</h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">{selectedPath.description}</p>
                <div className="p-8 bg-white/80 backdrop-blur-md rounded-[2rem] border border-white shadow-inner">
                  <h4 className="font-black text-slate-900 mb-3 italic flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse"></span>
                    Status
                  </h4>
                  <p className="text-base text-slate-500 leading-relaxed font-medium">Klikk på modulene til høyre for å starte læringen.</p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
                <span className={`w-3 h-10 rounded-full ${selectedPath.color}`}></span>
                Moduler i denne stien
              </h3>
              <div className="space-y-6">
                {selectedPath.modules.map((module, idx) => {
                  const isCompleted = completedModules.has(module.id);
                  return (
                    <button
                      key={module.id}
                      onClick={() => setActiveModuleId(module.id)}
                      className={`w-full text-left p-8 rounded-[2.5rem] border transition-all group flex items-center justify-between relative overflow-hidden
                        ${isCompleted
                          ? 'bg-emerald-50/50 border-emerald-100 shadow-sm'
                          : 'bg-white border-slate-100 shadow-sm hover:shadow-2xl hover:border-slate-300'}`}
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                        <Logo className="w-24 h-24" />
                      </div>
                      <div className="flex gap-8 items-center relative z-10">
                        <div className={`w-16 h-16 rounded-2xl font-black text-xl flex items-center justify-center border transition-colors shadow-sm
                          ${isCompleted
                            ? 'bg-emerald-500 text-white border-emerald-400'
                            : `${selectedPath.lightColor} text-slate-900 border-slate-200 group-hover:bg-white`}`}>
                          {isCompleted ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          ) : (idx + 1)}
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <h4 className={`text-2xl font-black transition-colors ${isCompleted ? 'text-emerald-900' : 'text-slate-900 group-hover:text-logo-blue'}`}>
                              {module.title}
                            </h4>
                            {isCompleted && (
                              <span className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-md">
                                Fullført ✓
                              </span>
                            )}
                          </div>
                          <p className={`text-lg font-medium ${isCompleted ? 'text-emerald-600/70' : 'text-slate-500'}`}>
                            {module.description}
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:block relative z-10">
                        <div className={`p-3 rounded-full transition-all shadow-sm
                          ${isCompleted
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-50 text-slate-300 group-hover:bg-logo-blue group-hover:text-white'}`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default LearningDashboard;
