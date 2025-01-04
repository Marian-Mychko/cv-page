import education1 from "../assets/education1.png";
import education2 from "../assets/education2.png";
import education3 from "../assets/education3.png";

import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import person5 from "../assets/person5.png";
import person6 from "../assets/person6.png";

export const LINKS = [
  { href: "#utdanning", label: "Utdanning" },
  { href: "#about", label: "Om meg" },
  { href: "#arbeidserfaring", label: "Arbeidserfaring" },
  { href: "#ferdigheter ", label: "Ferdigheter " },
  { href: "#kontakt", label: "Kontakt" },
];

export const HERO_CONTENT = {
  greeting: "Velkommen!  ",
  introduction:
    "Jeg er Marian Mychko, drevet av digitale løsninger og moderne webteknologier.",
  description:
    "Jeg er klar for å ta nye utfordringer og bidra til innovative prosjekter som skaper verdi og fremmer utvikling.",
  resumeLinkText: "Last ned CV",
  resumeLink: "/CV.pdf",
};

export const EDUCATIONS = [
  {
    name: "Lvivs Nasjonale Polytekniske Universitet",
    description: "Spesialisering i bygg og anleggsteknikk. Godkjent av HKdir (NOKUT) som tilsvarende norsk bachelorgrad.",
    image: education1,
    link: "https://drive.google.com/drive/folders/1-YdmcImKHwXQtTpkgPnJTvyUh01veqVU?usp=drive_link",
  },
  {
    name: "Avansert Front-end CURSOR.EDUCATION",
    description: "68 timer teoretisk, 165 timer praktisk, fokusert på avanserte ferdigheter i frontend-utvikling.",
    image: education2,
    link: "https://drive.google.com/file/d/11XJuhaOiAiKlEsIufrJzbBWpZODbCGgA/view?usp=drive_link",
  },
  {
    name: "SoftServe webutvikling maraton. Internasjonalt teknologiselskap SoftServe",
    description: "Fokus på React, JavaScript, HTML, CSS og Node.js – praktisk opplæring med vekt på moderne frontend-utvikling.",
    image: education3,
    link: "https://www.softserveinc.com/en-us",
  }
];

export const ABOUT_CONTENT = {
  paragraphs: [ "Med en sterk interesse for teknologi og moderne løsninger motiveres jeg av muligheten til å lære noe nytt og bidra med engasjement og ferdigheter. Jeg trives med utfordringer som skaper verdi og utvikling for både meg selv og arbeidsplassen.",
    "Jeg er målrettet og lærevillig, med erfaring fra ulike roller som krever ansvar, struktur og samarbeid. Gjennom arbeid innen logistikk, butikk og veiledning har jeg utviklet ferdigheter i organisering, problemløsning og effektiv kommunikasjon.",
    "Jeg har erfaring med å koordinere oppgaver, støtte kolleger og sikre smidig arbeidsflyt, enten det handler om forsendelser, kundeservice eller veiledning av elever. Disse erfaringene har gjort meg fleksibel, løsningsorientert og flink til å tilpasse meg ulike situasjoner.",
    "Jeg ser frem til å bruke min bakgrunn og engasjement i en stilling hvor jeg kan vokse og bidra til gode resultater. La oss komme i kontakt for å diskutere hvordan jeg kan bidra! "
 ],
};

export const EXPERIENCES = [
  {
    yearRange: "01.2024 – 12.2024",
    title: "Deltaker i integreringsprogram",
    location: "Voksenopplæring SKI, Midt - Telemark",
    description: [
      "Deltok i integreringsprogrammet og jobbet aktivt med å lære norsk.",
      "Arbeidet med integrasjon i det norske samfunnet gjennom språk- og kulturforståelse.",
      "Forberedte meg til å ta Norskprøve for å dokumentere språkkunnskaper.",
    ],
  },
  {
    yearRange: "09.2024 - 12.2024",
    title: "Praksis som tolk / læringsassistent",
    location: "Bø ungdomsskole, Midt - Telemark",
    description: [
      "Hjalp elever fra Ukraina og andre land med å lære norsk og forstå språket bedre.",
      "Tolket og assisterte lærerne i ulike fag for å sikre bedre kommunikasjon mellom elever og lærere.",
      "Støttet elever med integrering i den norske skolehverdagen gjennom språk og kulturforståelse.",
    ],
  },
  {
    yearRange: "04.2024 - 09.2024",
    title: "Praksis i matbutikk",
    location: "Kiwi Bø, Midt - Telemark",
    description: [
      "Hjalp kunder med spørsmål og veiledning, samtidig som jeg praktiserte norsk i daglige situasjoner.",
      "Bidro på lageret med mottak og organisering av varer.",
      "Jobbet med å sette ut varer og vedlikeholde varehyllene.",
    ],
  },
  {
    yearRange: "01.2020 - 06.2023",
    title: "Inspektør for sikkerhetsstyring i avdelingen for mobilitet og infrastruktur.",
    location: "Lviv byråd,  Ukraina",
    description: [
      "Kontrollerte og regulerte parkeringssituasjoner i Lviv for å sikre overholdelse av parkeringsregler og forskrifter.",
      "Informerte og veiledet innbyggerne om ukrainsk lovgivning relatert til parkering og trafikkregler.",
      "Påla sanksjoner for regelbrudd og administrerte midlertidig inndraging av kjøretøy ved behov.",
    ],
  },
  {
    yearRange: "02.2018 - 01.2020",
    title: "Driftsleder / Logistikksjef",
    location: "Nova Poshta, Lviv, Ukraina",
    description: [
      "Koordinerte og ledet team for å sikre effektiv behandling, sortering og flyt av forsendelser i terminalområdet.",
      "Sørget for at driften fulgte fastsatte tidsplaner, industristandarder og sikkerhetsforskrifter, samtidig som jeg opprettholdt høy effektivitet.",
      "Planla og overvåket arbeidsprosesser for å optimalisere ressursbruk og opprettholde en smidig operasjon.",
    ],
  },
  
  {
    yearRange: "06.2014 - 12.2017",
    title: "Selger, butikkmedarbeider",
    location: "Zukk (stor butikkjede for telefoner og tilbehør), Lviv, Ukraina",
    description: [
      "Proaktivt engasjert med kunder for å promotere produkter, drive salg og levere utmerket kundeservice.",
      "Overvåket mottak, lager og visuell presentasjon av varer for å sikre effektiv drift og maksimere salgspotensialet.",
      "Bidro til opplæring og onboarding av nye ansatte, og sørget for deres tilpasning til bedriftens rutiner.",
    ],
  },
];

export const SKILLS = [
  {
    talent: "Webutvikling og teknologiforståelse",
    description:
      "Erfaring med JavaScript, HTML5, CSS, React og Node.js. Praktisk forståelse av moderne webutviklingsmetoder.",
    image: person1,
  },
  {
    talent: "Evne til læring og fleksibilitet",
    description:
      "Evne til raskt å sette seg inn i ny teknologi og oppgaver. Har vist fleksibilitet og løsningsorientert tenkning i ulike situasjoner.",
    image: person2,
  },
  {
    talent: "Problemløsning og analyse",
    description:
      "Evne til å analysere komplekse situasjoner, identifisere forbedringsmuligheter og utvikle effektive løsninger.",
    image: person3,
  },
  {
    talent: "Veiledning og samarbeid",
    description:
      "Erfaring med å veilede og støtte andre, særlig i forbindelse med integrering, læring og oppgaveløsning.",
    image: person4,
  },
  {
    talent: "Interesse for kunstig intelligens (AI)",
    description:
      "Stor interesse for hvordan AI kan brukes til å forbedre prosesser og utvikle innovative digitale løsninger.",
    image: person5,
  },
  {
    talent: "Teamarbeid og kommunikasjon",
    description:
      "Gode evner til å jobbe i team, dele kunnskap og bidra til et positivt og produktivt arbeidsmiljø.",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  headline: "LA OSS SKAPE NOE VERDIFULLT SAMMEN",
  description:
    "Jeg har stor interesse for teknologi og digitale løsninger. Jeg lærer raskt, er nysgjerrig og motivert for å utvikle meg. La oss samarbeide om oppgaver som skaper verdi og muligheter.",
  email: "marian.mychko@yahoo.com",
  socialLinks: [
    {
      platform: "Telegram",
      url: "https://t.me/marcheg",
      ariaLabel: "Connect with me on Telegram",
      icon: "RiTelegramFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/marian-mychko/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Marian Mychko. All rights reserved.`,
};
