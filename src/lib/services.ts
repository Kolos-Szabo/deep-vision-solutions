import projDamAsset from "@/assets/interventie-hidrotehnica-baraj-batardou.webp.asset.json";
const projDam = projDamAsset.url;
import projReservoirAsset from "@/assets/scafandru-comercial-inspectie-rezervoar-apa.webp.asset.json";
const projReservoir = projReservoirAsset.url;
import projWeldingAsset from "@/assets/sudura-subacvatica-structura-metalica-scafandru.webp.asset.json";
const projWelding = projWeldingAsset.url;
import projLakeAsset from "@/assets/lucrari-subacvatice-lac-acumulare-scafandru.webp.asset.json";
const projLake = projLakeAsset.url;
import projPipelineAsset from "@/assets/inspectie-conducta-subacvatica-traversare-rau.webp.asset.json";
const projPipeline = projPipelineAsset.url;
import projIndustrialAsset from "@/assets/interventie-statie-de-pompare-subacvatica.webp.asset.json";
const projIndustrial = projIndustrialAsset.url;

import projCraneAsset from "@/assets/montaj-structura-metalica-subacvatica-macara.webp.asset.json";
const projCrane = projCraneAsset.url;
import projEntryAsset from "@/assets/scafandru-intrare-in-apa-scufundari-utilitare.webp.asset.json";
const projEntry = projEntryAsset.url;
import projWinterAsset from "@/assets/scufundari-in-conditii-de-iarna-gheata-scafandru.webp.asset.json";
const projWinter = projWinterAsset.url;
import projGearAsset from "@/assets/echipament-scafandru-profesional-kirby-morgan.webp.asset.json";
const projGear = projGearAsset.url;

export type ServicePage = {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  eyebrow: string;
  intro: string;
  cover: string;
  coverAlt: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  useCases: string[];
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
};

export const SERVICES: ServicePage[] = [
  {
    slug: "inspectii-subacvatice",
    h1: "Inspecții subacvatice profesionale — CVI, UT și cartografiere structuri submerse",
    metaTitle: "Inspecții subacvatice România · CVI, ultrasunete, ROV — HEIDI",
    metaDescription:
      "Inspecții subacvatice pentru baraje, conducte, rezervoare și structuri portuare: CVI, măsurători UT, sonar multibeam, rapoarte tehnice cu foto-video HD. Acoperire națională, deviz în 24 h.",
    keywords:
      "inspectii subacvatice, inspectie CVI, inspectie baraj, inspectie rezervor apa, inspectie conducta sub apa, scafandri inspectori, raport tehnic subacvatic, ultrasunete sub apa",
    eyebrow: "Inspecții & diagnoză",
    intro:
      "Evaluăm starea reală a structurilor submerse prin inspecție vizuală apropiată (CVI), măsurători instrumentale și cartografiere digitală. Livrăm rapoarte tehnice pe care beneficiarul le poate folosi direct în deciziile de mentenanță, reabilitare sau expertiză judiciară.",
    cover: projDam,
    coverAlt: "Scafandru HEIDI executând inspecție subacvatică pe parament de baraj",
    sections: [
      {
        heading: "Ce cuprinde o inspecție subacvatică HEIDI",
        paragraphs: [
          "Fiecare inspecție începe cu o etapă de recunoaștere (vizual sau ROV), continuă cu o campanie tactilă executată de scafandru și se încheie cu un raport tehnic riguros: fișe pe zone, marcaje pe planșe, fotografii de referință și clipuri video HD. Pentru obiectivele critice completăm dosarul cu măsurători de grosime prin ultrasunete (UT), verificări cu particule magnetice (MT) în habitat uscat și cartografiere sonar multibeam.",
        ],
        bullets: [
          "Inspecție vizuală apropiată (CVI) cu iluminare 20 000 lm",
          "Măsurători grosimi UT pe piese metalice submerse",
          "Sonar multibeam și profilometru pentru batimetrie",
          "Fotogrametrie subacvatică pentru modele 3D",
          "Localizare GPS a defectelor și marcare in situ",
        ],
      },
      {
        heading: "Când ai nevoie de o inspecție subacvatică",
        paragraphs: [
          "Legislația română impune verificări periodice pentru barajele din categoriile A și B, rezervoare de apă potabilă, conducte magistrale și infrastructură portuară. În afara controalelor programate, o inspecție este obligatorie după orice eveniment neprevăzut: viituri, cutremure, coliziuni de nave, avarii de exploatare sau reclamații privind pierderi de debit.",
        ],
      },
    ],
    useCases: [
      "Baraje hidroenergetice și de acumulare",
      "Rezervoare de apă potabilă (potable water certified)",
      "Conducte de aducțiune, magistrale, traversări râu",
      "Piloți de pod, cheiuri, dane portuare",
      "Bazine tehnologice, decantoare, stații de epurare",
    ],
    faqs: [
      {
        q: "Cât durează o inspecție subacvatică?",
        a: "O inspecție de rutină pe o zonă delimitată (grătar priză, pilonul unui pod, o cameră de rezervor) durează de regulă o zi. Inspecțiile complete pe paramentul unui baraj sau pe kilometri de conductă se planifică pe campanii de 3–15 zile, cu raport livrat în 5–10 zile lucrătoare.",
      },
      {
        q: "Ce primesc la finalul lucrării?",
        a: "Primiți un raport tehnic complet: rezumat executiv pentru management, fișe detaliate pentru echipa tehnică, galerie foto-video HD, planșe cu anomalii marcate și recomandări de intervenție cu estimare de costuri.",
      },
    ],
    related: ["lucrari-cu-rov", "mentenanta-preventiva-subacvatica", "expertize-tehnice-subacvatice"],
  },
  {
    slug: "sudura-subacvatica",
    h1: "Sudură subacvatică umedă și hiperbarică conform AWS D3.6M",
    metaTitle: "Sudură subacvatică România · wet welding & hiperbarică — HEIDI",
    metaDescription:
      "Scafandri-sudori certificați pentru sudură umedă (wet welding) și sudură hiperbarică în habitat uscat, conform AWS D3.6M. Reparații conducte, structuri portuare, baraje și platforme.",
    keywords:
      "sudura subacvatica, sudura sub apa, sudura hiperbarica, wet welding, scafandri sudori, AWS D3.6M, sudura conducte sub apa, sudura baraje, sudura structuri portuare",
    eyebrow: "Sudură industrială",
    intro:
      "Executăm sudură subacvatică umedă și în habitat hiperbaric uscat pe structuri metalice critice — cordoane calificate WPS/PQR, testate NDT, cu documentație completă pentru operatorii de infrastructură.",
    cover: projWelding,
    coverAlt: "Scafandru-sudor HEIDI executând sudură subacvatică hiperbarică",
    sections: [
      {
        heading: "Wet welding vs. sudură hiperbarică",
        paragraphs: [
          "Sudura umedă rămâne cea mai rapidă soluție pentru reparații de clasă B: peticiri, etanșări, fixare de anozi sacrificiali sau consolidări secundare. Folosim electrozi marinizați (E6013 hidroizolat, Broco SofTouch) și surse DC cu polaritate inversă izolate galvanic. Pentru lucrări de clasă A — cordoane pretinse la oboseală, presiune sau coroziune sub tensiune — construim habitat hiperbaric uscat presurizat pe structură, unde sudorul lucrează în condiții echivalente celor de la suprafață.",
        ],
        bullets: [
          "Proceduri calificate la adâncimea de lucru (WPS + PQR)",
          "Testare NDT: VT, RT, UT, MT după caz",
          "Standarde: AWS D3.6M, EN ISO 15614, EN ISO 9606",
          "Documentație completă predată beneficiarului",
        ],
      },
      {
        heading: "Aplicații tipice",
        paragraphs: [
          "Cordoane pe conducte de transport (oil & gas, aducțiuni industriale), noduri structurale ale platformelor, chesoane și palplanșe portuare, batardouri și ghidaje de stavilă la baraje hidroenergetice, coloane de hidrocentrale. Cordonul finit este însoțit de fișă CVI și, la cerere, de raport NDT complet.",
        ],
      },
    ],
    useCases: [
      "Reparații conducte submerse sub presiune",
      "Structuri portuare — palplanșe, cheiuri, dane",
      "Baraje și hidrocentrale — batardouri, ghidaje, coloane",
      "Platforme și structuri offshore",
      "Consolidare piloți de pod și fundații metalice",
    ],
    faqs: [
      {
        q: "Ce standard aplicați pentru sudura subacvatică?",
        a: "Standardul principal este AWS D3.6M (Specification for Underwater Welding), completat cu EN ISO 15614 pentru calificarea procedurilor, EN ISO 9606 pentru atestarea sudorilor și DNV-OS-F101 / API 1104 pentru segmentul oil & gas.",
      },
      {
        q: "Puteți suda pe conducte în funcțiune?",
        a: "Da, în condiții controlate: analizăm regimul termic, presiunea internă și grosimea peretelui pentru a evita perforarea. Pentru lucrări pe conducte de gaz sau oil se aplică suplimentar API 1104 App. F (hot tap / in-service welding).",
      },
    ],
    related: ["reparatii-si-constructii-baraje", "betonari-subacvatice", "interventii-medii-contaminate"],
  },
  {
    slug: "reparatii-si-constructii-baraje",
    h1: "Reparații și construcții subacvatice la baraje și hidrocentrale",
    metaTitle: "Reparații baraje sub apă · retehnologizare hidrocentrale — HEIDI",
    metaDescription:
      "Lucrări subacvatice complexe pe baraje și hidrocentrale: batardouri, stavile, vane, ghidaje, galerii de fund. Retehnologizare echipamente hidromecanice cu scafandri și ROV.",
    keywords:
      "reparatii baraj sub apa, constructii baraje, retehnologizare hidrocentrale, lucrari batardouri, reparatie stavile, galerie de fund, echipamente hidromecanice, mentenanta baraje",
    eyebrow: "Baraje & hidrocentrale",
    intro:
      "Coordonăm lucrări multi-disciplinare pe baraje și hidrocentrale — de la lansarea batardoului și punerea la uscat a galeriei până la refacerea ghidajelor, retehnologizarea vanelor și repararea echipamentelor hidromecanice.",
    cover: projCrane,
    coverAlt: "Montaj de structură metalică subacvatică cu macara în cadrul lucrărilor de reabilitare a unui baraj",
    sections: [
      {
        heading: "Categorii de lucrări pe care le acoperim",
        paragraphs: [
          "Lucrările la baraje și noduri hidrotehnice combină de regulă mai multe meserii subacvatice. Programăm etapele astfel încât beneficiarul să opereze cu întreruperi minime și cu documentație care satisface cerințele ISCH, ANAR și ale beneficiarilor privați.",
        ],
        bullets: [
          "Lansare, ghidare și recuperare batardouri",
          "Refacere ghidaje, batiuri și scaune de vană",
          "Reparații paramente amonte/aval, rosturi și etanșări",
          "Retehnologizarea echipamentelor hidromecanice",
          "Punerea la uscat a galeriilor de fund",
        ],
      },
      {
        heading: "Coordonare și siguranță",
        paragraphs: [
          "Fiecare campanie are un plan HAZID/HAZOP dedicat, LOTO pe circuitele hidro-electro-mecanice, echipă de scafandri cu redundanță (working diver + standby + supervizor) și logistică proprie de suprafață — compresoare, cameră de decompresie, panou gaze și energetică autonomă. Colaborăm direct cu personalul de exploatare al beneficiarului pentru planificarea manevrelor.",
        ],
      },
    ],
    useCases: [
      "Hidrocentrale mari, MHC și baraje de acumulare",
      "Prize de apă, turnuri de manevră și golirea de fund",
      "Baraje de apărare împotriva inundațiilor",
      "Retehnologizare stații de pompare hidrotehnice",
    ],
    faqs: [
      {
        q: "Trebuie oprită hidrocentrala pe durata lucrării?",
        a: "Depinde de intervenție. Multe lucrări (inspecții, decolmatări, mici reparații, montaje) se execută fără oprire prin coordonarea cu dispecerul. Pentru lucrări pe circuitul hidraulic principal planificăm ferestre de oprire scurte, minimizând pierderea de producție.",
      },
    ],
    related: ["sudura-subacvatica", "betonari-subacvatice", "mentenanta-preventiva-subacvatica"],
  },
  {
    slug: "betonari-subacvatice",
    h1: "Betonări subacvatice — turnare beton sub apă, cofraje și consolidări",
    metaTitle: "Betonări subacvatice România · fundații, piloți, praguri — HEIDI",
    metaDescription:
      "Turnare beton sub apă cu tremie, cofraje subacvatice, ancoraje și consolidări pentru fundații, piloți de pod, praguri hidrotehnice și lucrări de apărare mal.",
    keywords:
      "betonari subacvatice, turnare beton sub apa, cofraje subacvatice, consolidare pilon pod, ancoraje sub apa, praguri hidrotehnice, apararea malurilor",
    eyebrow: "Beton armat sub apă",
    intro:
      "Turnăm beton sub apă cu metoda tremie și pungi de beton special, executăm cofraje subacvatice etanșe și consolidăm fundații existente prin ancorare cu răsucire sau bulon chimic subacvatic.",
    cover: projIndustrial,
    coverAlt: "Cofraj și cameră hidrotehnică pregătite pentru betonare subacvatică",
    sections: [
      {
        heading: "Metode și rețete",
        paragraphs: [
          "Selectăm rețeta de beton (rezistență, aditivi anti-spălare, agregat) și metoda de punere în operă în funcție de curent, adâncime, gradul de agitare a apei și cerințele proiectantului. Pentru volume mici folosim beton însacuit; pentru turnări majore folosim tremie cu control continuu al nivelului și cofraje etanșe.",
        ],
      },
    ],
    useCases: [
      "Fundații piloți de pod și rampe portuare",
      "Praguri hidrotehnice, disipatoare de energie",
      "Consolidări la baze de baraj și radiere",
      "Apărări de mal, epiuri, canale de fugă",
    ],
    faqs: [
      {
        q: "Care este rezistența betonului turnat sub apă?",
        a: "Cu rețetele moderne cu aditivi anti-spălare (AWA) obținem clase de rezistență C25/30 – C35/45 cu pierderi minime de lianți. Pentru lucrări structurale critice adăugăm martori și carote pentru verificare.",
      },
    ],
    related: ["sudura-subacvatica", "reparatii-si-constructii-baraje"],
  },
  {
    slug: "lucrari-cu-rov",
    h1: "Inspecții și lucrări cu ROV (robot subacvatic) în România",
    metaTitle: "Inspecții ROV România · sonar multibeam & video HD — HEIDI",
    metaDescription:
      "Lucrări cu ROV pentru inspecții în adâncime, medii contaminate, spații confinate și cartografiere sonar. Video HD, manipulator, integrare cu echipa de scafandri.",
    keywords:
      "lucrari cu rov, inspectie rov, robot subacvatic, sonar multibeam, inspectie conducta rov, inspectie baraj rov, cartografiere batimetrica, ROV pentru rezervoare",
    eyebrow: "ROV & tehnologie",
    intro:
      "Folosim ROV-uri (Remotely Operated Vehicles) pentru inspecții rapide la adâncimi mari, în medii contaminate sau în spații confinate — completate, când este cazul, cu intervenție tactilă a scafandrului.",
    cover: projPipeline,
    coverAlt: "Inspecție cu ROV a unei conducte subacvatice la traversare de râu",
    sections: [
      {
        heading: "Când alegem ROV în locul scafandrului",
        paragraphs: [
          "ROV-ul este alegerea corectă pentru adâncimi peste 30 m, medii cu risc respirator (lagune de decantare, ape industriale), spații confinate (conducte de aducțiune, galerii, turnuri de manevră) sau zone unde curentul depășește limita de siguranță. Livrăm video HD 4K, mozaicuri sonar și, la cerere, model 3D fotogrametric.",
        ],
      },
    ],
    useCases: [
      "Inspecție paramente amonte pe baraje mari",
      "Cartografiere conducte submerse și traversări râu",
      "Inspecție rezervoare de apă potabilă certificate potable water",
      "Cartografiere batimetrică pe lacuri și porturi",
    ],
    faqs: [
      {
        q: "ROV-ul înlocuiește scafandrul?",
        a: "Nu — le folosim complementar. ROV-ul acoperă zone largi și medii periculoase, scafandrul intervine tactil unde este nevoie (măsurători UT, curățare, manipulare piese). Pachetul „ROV + diver” livrează cel mai bun raport calitate/cost.",
      },
    ],
    related: ["inspectii-subacvatice", "interventii-medii-contaminate", "mentenanta-rezervoare-apa"],
  },
  {
    slug: "mentenanta-rezervoare-apa",
    h1: "Mentenanță și curățare rezervoare de apă potabilă fără scoatere din serviciu",
    metaTitle: "Curățare rezervor apă potabilă · fără scoatere din serviciu — HEIDI",
    metaDescription:
      "Curățare și inspecție rezervoare de apă potabilă și industrială cu scafandri și ROV certificate potable water, fără oprirea alimentării. Rapoarte conform Legii 458/2002.",
    keywords:
      "curatare rezervor apa, mentenanta rezervor apa potabila, inspectie castel apa, potable water diving, scafandri apa potabila, decolmatare rezervor, Legea 458",
    eyebrow: "Rezervoare de apă",
    intro:
      "Curățăm și inspectăm rezervoare de apă potabilă și industrială fără scoaterea din serviciu, cu echipament dedicat potable water — fără uleiuri, fără biocide, cu decontaminare completă înainte de intrare.",
    cover: projReservoir,
    coverAlt: "Scafandru HEIDI cu echipament potable water într-un rezervor de apă potabilă",
    sections: [
      {
        heading: "Ce facem la o intervenție tipică",
        paragraphs: [
          "Aspirăm sedimentele de pe radier, spălăm pereții și tavanul, verificăm starea acoperirilor interioare și a etanșărilor la treceri de conducte, inspectăm sorbul și robinetele. La final livrăm raport foto-video HD, buletin de analiză a apei (opțional) și recomandări pentru intervalul următor de mentenanță.",
        ],
      },
    ],
    useCases: [
      "Cupe și castele de apă municipale",
      "Rezervoare de incendiu, tampon și acumulare",
      "Bazine tehnologice în industria alimentară",
    ],
    faqs: [
      {
        q: "Trebuie oprită alimentarea consumatorilor?",
        a: "În majoritatea cazurilor nu. Rezervoarele cu compartimente sau cu bypass permit intervenția fără oprirea distribuției. Când oprirea este necesară, o planificăm în ferestre de consum minim, cu preaviz către operator.",
      },
      {
        q: "Ce norme aplicați?",
        a: "Legea 458/2002 privind apa potabilă, HG 974/2004 și protocoalele de igienă potable water diving. Echipamentul intră în rezervor doar după decontaminare și trece prin baie cu clor la nivel controlat.",
      },
    ],
    related: ["inspectii-subacvatice", "curatare-gratare-priza-apa", "lucrari-cu-rov"],
  },
  {
    slug: "curatare-gratare-priza-apa",
    h1: "Curățare grătare și prize de apă — decolmatare sorburi la hidrocentrale și stații de pompare",
    metaTitle: "Curățare grătare priză apă · decolmatare sorburi — HEIDI",
    metaDescription:
      "Decolmatare grătare, sorburi și prize de apă la hidrocentrale, stații de pompare și rețele industriale. Îndepărtare aluviuni, plastice și corpuri străine cu scafandri și airlift.",
    keywords:
      "curatare gratare, decolmatare priza apa, sorb hidrocentrala, decolmatare sorb, airlift subacvatic, mentenanta priza apa, statie pompare",
    eyebrow: "Prize de apă & sorburi",
    intro:
      "Recuperăm debitul de proiect al prizelor colmatate și eliminăm riscul de aspirație pe grătare prin lucrări rapide de decolmatare, cu scafandri, airlift și, unde este nevoie, ROV.",
    cover: projEntry,
    coverAlt: "Scafandru HEIDI intrând în apă pentru curățarea unui grătar de priză de apă",
    sections: [
      {
        heading: "De ce contează decolmatarea la timp",
        paragraphs: [
          "Un grătar colmatat crește pierderea de sarcină, scade debitul turbinei sau al pompei, forțează echipamentele și accelerează uzura. Programele regulate de decolmatare — anuale sau după viituri majore — sunt mai ieftine decât o oprire neprogramată.",
        ],
      },
    ],
    useCases: [
      "Prize hidrocentrale MHC și mari",
      "Sorburi stații de pompare pentru irigații și apă industrială",
      "Turnuri de priză la acumulări (ex. Săcele, Bezid, Cinciș)",
    ],
    faqs: [
      {
        q: "Cât durează decolmatarea unui grătar?",
        a: "De la câteva ore la 2–3 zile, în funcție de suprafață, gradul de colmatare și disponibilitatea de a opri parțial captarea. Preluăm materialul decolmatat și îl depozităm conform cerințelor de mediu.",
      },
    ],
    related: ["mentenanta-preventiva-subacvatica", "reparatii-si-constructii-baraje", "inspectii-subacvatice"],
  },
  {
    slug: "cautari-si-recuperari-subacvatice",
    h1: "Căutări și recuperări subacvatice cu sonar și scafandri",
    metaTitle: "Căutări și recuperări subacvatice · sonar & scafandri — HEIDI",
    metaDescription:
      "Localizare și recuperare obiecte, utilaje și vehicule scufundate: sonar de căutare, magnetometru, scafandri profesioniști. Intervenții în lacuri, râuri, Dunăre și bazine industriale.",
    keywords:
      "cautari subacvatice, recuperari subacvatice, cautare cu sonar, recuperare obiecte sub apa, recuperare utilaje, recuperare epave, cautari lacuri, cautari Dunare",
    eyebrow: "Căutări & recuperări",
    intro:
      "Localizăm și recuperăm obiecte, utilaje sau vehicule scufundate cu tehnologii complementare: sonar side-scan, sonar sector, magnetometru și, în final, scafandri pentru identificare și legare.",
    cover: projLake,
    coverAlt: "Echipa HEIDI în misiune de căutare subacvatică pe un lac de acumulare",
    sections: [
      {
        heading: "Metodologie",
        paragraphs: [
          "Prima etapă este scanarea sonar a zonei de interes cu grile suprapuse. Rezultatele sunt validate în teren de scafandru, care marchează ținta, evaluează riscurile de manipulare și organizează recuperarea cu balonieri de ridicare, macarale sau bărci de sprijin.",
        ],
      },
    ],
    useCases: [
      "Recuperare autovehicule și utilaje căzute în ape",
      "Recuperare obiecte de valoare și corpuri delicte",
      "Ridicare de ambarcațiuni scufundate și epave",
      "Îndepărtare obstacole navigabile (Dunăre, Prut)",
    ],
    faqs: [
      {
        q: "În cât timp puteți interveni?",
        a: "Pentru misiuni de urgență ne mobilizăm în maximum 24 de ore la nivel național. Timpul efectiv de căutare depinde de suprafața zonei, adâncime, vizibilitate și tipul țintei.",
      },
    ],
    related: ["inspectii-subacvatice", "lucrari-cu-rov"],
  },
  {
    slug: "interventii-medii-contaminate",
    h1: "Intervenții subacvatice în medii contaminate și periculoase",
    metaTitle: "Scufundări în medii contaminate · protocoale HazMat — HEIDI",
    metaDescription:
      "Scufundări în ape poluate, ape uzate, lagune de decantare și medii cu risc respirator, cu echipament cu cordon ombilical, recirculare aer și protocol complet de decontaminare.",
    keywords:
      "scufundari medii contaminate, HazMat diving, scufundari ape uzate, decontaminare scafandru, cordon ombilical, statie epurare interventie",
    eyebrow: "Medii speciale",
    intro:
      "Intervenim în medii ostile — ape uzate, lagune de decantare, bazine cu hidrocarburi, medii cu risc biologic sau chimic — cu echipament de scufundare cu cordon ombilical (surface-supplied), cască etanșă și protocoale HazMat.",
    cover: projGear,
    coverAlt: "Cască Kirby Morgan și echipament etanș pentru intervenții subacvatice în medii contaminate",
    sections: [
      {
        heading: "Echipare și proceduri",
        paragraphs: [
          "Folosim exclusiv cască de scufundare etanșă (Kirby Morgan 37 / EXO), costum uscat cu materiale rezistente chimic, mănuși sudate și cordon ombilical cu alimentare aer/gaze de la suprafață. Fiecare misiune are protocol de decontaminare pe trei etape și zonă de deshabilitare izolată.",
        ],
      },
    ],
    useCases: [
      "Stații de epurare — decantoare, bazine biologice",
      "Lagune de decantare industriale",
      "Rezervoare cu hidrocarburi sau chimicale",
      "Bazine de răcire cu regim termic special",
    ],
    faqs: [
      {
        q: "Ce analize de mediu solicitați înainte de intervenție?",
        a: "Cerem beneficiarului fișele tehnice ale substanțelor prezente și, când este cazul, comandăm buletine de analiză proprii (pH, hidrocarburi, metale grele, biologic). Rezultatele determină echipamentul și procedura de decontaminare.",
      },
    ],
    related: ["lucrari-cu-rov", "mentenanta-rezervoare-apa"],
  },
  {
    slug: "mentenanta-preventiva-subacvatica",
    h1: "Programe de mentenanță preventivă subacvatică",
    metaTitle: "Mentenanță preventivă subacvatică · contracte anuale — HEIDI",
    metaDescription:
      "Programe de mentenanță preventivă pentru baraje, rezervoare, prize de apă și rețele industriale. Inspecții periodice, intervenții planificate, rapoarte comparate an de an.",
    keywords:
      "mentenanta preventiva subacvatica, contract mentenanta baraj, inspectie periodica rezervor, mentenanta hidrocentrala, mentenanta priza apa",
    eyebrow: "Contracte de mentenanță",
    intro:
      "Structurăm programe multianuale de mentenanță preventivă pentru operatori de infrastructură — cu inspecții periodice, intervale planificate de curățare și rapoarte comparate an de an, care documentează evoluția stării obiectivului.",
    cover: projWinter,
    coverAlt: "Echipa HEIDI în intervenție subacvatică pe timp de iarnă, pe gheață",
    sections: [
      {
        heading: "Avantaje pentru beneficiar",
        paragraphs: [
          "Un contract multianual reduce costul mediu al inspecțiilor, elimină urgențele costisitoare și oferă bază documentară pentru auditul ISCH sau intern. Beneficiarul primește un plan anual clar, cu date fixe și estimare de buget.",
        ],
      },
    ],
    useCases: [
      "Operatori de hidrocentrale și baraje",
      "Companii de apă municipale și regionale",
      "Terminale portuare și logistică pe apă",
      "Operatori industriali cu bazine tehnologice",
    ],
    faqs: [
      {
        q: "Care este durata standard a unui contract?",
        a: "Recomandăm contracte pe 3 ani cu revizuire anuală. Pentru obiective critice (baraje mari, rezervoare mari) construim planuri pe 5 ani, aliniate cu ciclurile ISCH.",
      },
    ],
    related: ["inspectii-subacvatice", "reparatii-si-constructii-baraje", "curatare-gratare-priza-apa"],
  },
  {
    slug: "expertize-tehnice-subacvatice",
    h1: "Expertize tehnice subacvatice pentru beneficiari, asigurători și instanțe",
    metaTitle: "Expertize tehnice subacvatice România · independente — HEIDI",
    metaDescription:
      "Expertize tehnice independente subacvatice pentru investigații de avarie, dosare de daună, litigii și decizii de reabilitare. Documentație foto-video, măsurători și opinie expertă.",
    keywords:
      "expertize tehnice subacvatice, expertiza baraj, expertiza rezervor, investigatie avarie subacvatica, expertiza asigurare, expertiza judiciara subacvatica",
    eyebrow: "Expertiză independentă",
    intro:
      "Întocmim expertize tehnice independente pentru beneficiari, companii de asigurări, constructori și instanțe — pe baza inspecției directe, a măsurătorilor și a documentației foto-video subacvatice.",
    cover: projPipeline,
    coverAlt: "Documentare foto-video subacvatică pe conductă pentru expertiză tehnică",
    sections: [
      {
        heading: "Ce include o expertiză",
        paragraphs: [
          "Fiecare expertiză reunește misiunea de teren (inspecție tactilă, măsurători, prelevări), analiza documentară (proiect inițial, jurnalul de exploatare, avarii anterioare) și opinia expertă. Raportul este semnat de specialiști atestați și susține deciziile ulterioare, indiferent dacă sunt tehnice, financiare sau juridice.",
        ],
      },
    ],
    useCases: [
      "Investigații de avarie post-eveniment (viituri, coliziuni, exploatare)",
      "Dosare de daună pentru asigurători",
      "Litigii între beneficiari și constructori",
      "Fundamentarea deciziilor de reabilitare",
    ],
    faqs: [
      {
        q: "Puteți fi desemnați experți judiciari?",
        a: "Da, în calitate de experți de parte sau experți independenți, în funcție de procedură. Furnizăm CV-uri și atestate pentru dosarul instanței.",
      },
    ],
    related: ["inspectii-subacvatice", "reparatii-si-constructii-baraje"],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
