import projWeldingAsset from "@/assets/sudura-subacvatica-structura-metalica-scafandru.webp";
const projWelding = projWeldingAsset;
import projDamAsset from "@/assets/interventie-hidrotehnica-baraj-batardou.webp";
const projDam = projDamAsset;
import projEntryAsset from "@/assets/scafandru-intrare-in-apa-scufundari-utilitare.webp";
const projEntry = projEntryAsset;
import projCrossingAsset from "@/assets/inspectie-conducta-subacvatica-traversare-rau.webp";
const projCrossing = projCrossingAsset;

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  date: string;
  dateISO: string;
  readingMinutes: number;
  category: string;
  body: {
    heading?: string;
    paragraphs: string[];
    bullets?: string[];
    serviceLinks?: { slug: string; label: string }[];
  }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "afuieri-la-pile-de-pod-si-traversari-subacvatice",
    title:
      "Afuierile la pile de pod și traversări subacvatice: cum se depistează la timp și ce se poate repara sub apă",
    metaTitle:
      "Afuieri la pile de pod și traversări — depistare și reparații subacvatice | HEIDI",
    metaDescription:
      "Ce sunt afuierile la pile de pod, culee și traversări de conducte, cum se depistează prin inspecții subacvatice după viituri și ce soluții de reparație se pot executa sub apă, fără devierea cursului.",
    keywords:
      "afuieri pile de pod, inspectie subacvatica pod, subspalare fundatie pod, inspectie pile pod dupa viitura, traversare conducta rau, reparatii subacvatice, betonari subacvatice, protectie antiafuiere, scafandri profesionisti Romania, expertize tehnice subacvatice",
    excerpt:
      "Afuierea este una dintre cele mai frecvente cauze de avarie la poduri și traversări submerse, dar rămâne invizibilă de la suprafață. Cum se măsoară, ce indicii apar înainte de avarie și ce se poate remedia sub apă.",
    cover: projCrossing,
    coverAlt:
      "Inspecție subacvatică la o traversare de conductă sub albia unui râu, pentru verificarea afuierilor",
    date: "26 august 2026",
    dateISO: "2026-08-26",
    readingMinutes: 9,
    category: "Infrastructură & inspecții",
    body: [
      {
        paragraphs: [
          "Podurile, pasarelele și traversările de conducte peste râuri se degradează în cea mai mare parte acolo unde nimeni nu se uită: sub linia apei. Cea mai frecventă formă de degradare din această zonă este afuierea — antrenarea materialului din albie din jurul fundațiilor, sub acțiunea curentului.",
          "Problema afuierii este că evoluează lent, apoi brusc. O groapă de câțiva zeci de centimetri se poate adânci semnificativ în timpul unei singure viituri, iar la scăderea apelor albia se reface parțial, mascând golul rămas sub fundație. De la suprafață, structura pare intactă.",
          "Articolul de față explică, pentru administratorii de drumuri, operatorii de utilități și constructori, cum se depistează afuierile printr-o verificare subacvatică, ce se măsoară concret și ce categorii de remedieri se pot executa sub apă.",
        ],
      },
      {
        heading: "Ce este, de fapt, afuierea",
        paragraphs: [
          "Curentul care întâlnește o pilă de pod se accelerează și formează vârtejuri la baza obstacolului. Aceste vârtejuri desprind material din albie și îl transportă în aval, formând o groapă locală în jurul fundației.",
          "Fenomenul are mai multe componente care se suprapun:",
        ],
        bullets: [
          "afuiere generală — coborârea nivelului albiei pe toată secțiunea, în timp;",
          "afuiere de contracție — accelerarea apei în secțiunea îngustată de infrastructura podului;",
          "afuiere locală — groapa formată direct în jurul pilei sau al culeei;",
          "eroziunea malurilor și a rampelor de acces, care poate destabiliza culeele.",
        ],
      },
      {
        heading: "De ce nu se vede de la suprafață",
        paragraphs: [
          "În râurile din România, vizibilitatea sub apă este de regulă redusă, iar patul albiei este mobil. După viitură, aluviunile se depun înapoi în groapa formată, dar sunt necompactate: fundația rămâne descărcată lateral, chiar dacă adâncimea măsurată de pe mal pare normală.",
          "De aceea o batimetrie făcută exclusiv de la suprafață este utilă, dar insuficientă. Confirmarea reală se obține prin verificare tactilă, executată de scafandru, care poate sesiza golurile de sub radier și materialul afânat.",
        ],
      },
      {
        heading: "Când se justifică o inspecție subacvatică",
        paragraphs: [
          "Nu orice structură necesită verificări frecvente, dar există situații în care o inspecție este pe deplin justificată:",
        ],
        bullets: [
          "după viituri importante sau după perioade prelungite de debite mari;",
          "la structuri cu istoric de afuiere sau la care s-au făcut anterior lucrări de protecție a fundației;",
          "când apar semne la suprastructură: fisuri noi, rosturi deschise, denivelări ale căii, deplasări ale parapetului;",
          "înainte de o expertiză tehnică sau de o recepție, când este nevoie de date reale despre partea submersă;",
          "la traversările de conducte, când apar suspiciuni de expunere a tubului sau de deplasare a balastului de acoperire;",
          "periodic, ca parte dintr-un program de mentenanță preventivă, la structurile importante pentru trafic sau alimentare.",
        ],
      },
      {
        heading: "Cum decurge o verificare subacvatică a unei pile",
        paragraphs: [
          "O inspecție corectă nu înseamnă „o scufundare și câteva poze”. Ea urmează o procedură care permite compararea în timp a rezultatelor.",
        ],
        bullets: [
          "recunoașterea zonei și stabilirea condițiilor de lucru: debit, curent, adâncimi, accese, trafic naval sau rutier;",
          "stabilirea reperelor de măsurare, astfel încât inspecția următoare să poată fi comparată cu cea curentă;",
          "parcurgerea perimetrului fiecărei pile și al culeelor, cu verificare tactilă acolo unde vizibilitatea este redusă;",
          "măsurarea adâncimii gropii de afuiere față de nivelul albiei și al tălpii fundației;",
          "identificarea golurilor de sub radier, a materialului afânat și a pierderii anrocamentelor de protecție;",
          "evaluarea stării betonului submers: eroziune, segregări, armătură expusă, degradări la rosturi;",
          "documentare video și fotografică, cu poziționare clară a fiecărei constatări.",
        ],
        serviceLinks: [
          { slug: "inspectii-subacvatice", label: "inspecții subacvatice" },
          { slug: "lucrari-cu-rov", label: "inspecții și lucrări cu ROV" },
        ],
      },
      {
        heading: "Ce probleme apar cel mai des la structurile din albie",
        paragraphs: [
          "Dincolo de afuierea propriu-zisă, verificările în albie scot la iveală un set recurent de probleme:",
        ],
        bullets: [
          "anrocamentele de protecție dislocate și împrăștiate în aval, deci fără rol de protecție;",
          "beton erodat la nivelul zonei de variație a apei, unde acțiunea mecanică este cea mai intensă;",
          "armătură expusă și corodată la muchii și la baza elevațiilor;",
          "rosturi deschise și infiltrații la culee;",
          "resturi acumulate în amonte de pile — trunchiuri, deșeuri, plase — care modifică local curgerea și accentuează eroziunea;",
          "la traversări: conductă parțial dezvelită, tronsoane suspendate, balast de acoperire spălat.",
        ],
      },
      {
        heading: "Ce se poate repara sub apă, fără devierea cursului",
        paragraphs: [
          "Multe dintre remedieri nu impun oprirea circulației sau devierea râului. Lucrările se execută de scafandri, direct în amplasament, ceea ce reduce durata și costul intervenției.",
          "Categoriile uzuale de intervenție sunt:",
        ],
        bullets: [
          "curățarea și îndepărtarea depunerilor și a resturilor acumulate în jurul fundației;",
          "umplerea golurilor și refacerea zonelor degradate prin betonări subacvatice cu mixturi speciale;",
          "refacerea protecției antiafuiere prin repoziționarea sau completarea anrocamentelor;",
          "reparații locale la beton și tratarea zonelor cu armătură expusă;",
          "lucrări de sudură și consolidare la elementele metalice submerse;",
          "reacoperirea și fixarea tronsoanelor expuse la traversările de conducte.",
        ],
        serviceLinks: [
          { slug: "betonari-subacvatice", label: "betonări subacvatice" },
          { slug: "sudura-subacvatica", label: "sudură subacvatică" },
          { slug: "expertize-tehnice-subacvatice", label: "expertize tehnice subacvatice" },
        ],
      },
      {
        heading: "Cum se transformă constatările într-o decizie",
        paragraphs: [
          "Un raport util nu se oprește la descrierea defectelor. El trebuie să permită administratorului să decidă: ce se remediază acum, ce se monitorizează și ce necesită o expertiză mai amplă.",
          "În practică, constatările se grupează pe trei niveluri de urgență: intervenție imediată (goluri sub fundație, armătură expusă pe suprafețe mari, conductă suspendată), intervenție programată (protecție antiafuiere degradată, eroziuni locale) și monitorizare (evoluții mici, de urmărit la următoarea verificare).",
          "Valoarea reală apare în timp: două inspecții făcute cu aceleași repere arată dacă groapa de afuiere crește, s-a stabilizat sau a fost corect remediată.",
        ],
      },
      {
        heading: "De reținut",
        paragraphs: [
          "Afuierea nu se rezolvă de la sine, iar refacerea aparentă a albiei după viitură nu înseamnă că fundația a revenit la starea inițială. O verificare subacvatică executată la momentul potrivit costă mult mai puțin decât o consolidare de urgență sau o restricție de circulație.",
          "Dacă administrați un pod, o pasarelă, o traversare de conductă sau o priză de apă în albie și nu aveți date recente despre partea submersă, o inspecție este primul pas rezonabil.",
          "Echipa lucrarisubacvatice.ro execută inspecții și intervenții subacvatice în toată România. Descrieți-ne obiectivul și primiți o evaluare tehnică și un deviz transparent în maximum 24 de ore.",
        ],
      },
    ],
  },
  {
    slug: "planificarea-unei-lucrari-subacvatice-etape-documentatie-siguranta",
    title:
      "Cum se planifică o lucrare subacvatică: etape, documentație și măsuri de siguranță",
    metaTitle:
      "Planificarea unei lucrări subacvatice — etape, documentație, siguranță | HEIDI",
    metaDescription:
      "Ghid practic pentru beneficiari: cum se pregătește o lucrare subacvatică, ce informații sunt necesare la cererea de ofertă, cum se evaluează riscurile și ce conține un plan de scufundare.",
    keywords:
      "planificare lucrari subacvatice, plan de scufundare, siguranta scufundari industriale, cerere oferta lucrari subacvatice, scafandri profesionisti, interventii subacvatice, organizare santier subacvatic, evaluare riscuri scufundari",
    excerpt:
      "Ce trebuie pregătit înainte de intrarea scafandrilor în apă: informațiile necesare pentru o ofertă corectă, evaluarea riscurilor, planul de scufundare, coordonarea cu exploatarea și recepția lucrării.",
    cover: projEntry,
    coverAlt:
      "Scafandru profesionist pregătit pentru intrarea în apă la începutul unei lucrări subacvatice",
    date: "12 august 2026",
    dateISO: "2026-08-12",
    readingMinutes: 8,
    category: "Planificare & siguranță",
    body: [
      {
        paragraphs: [
          "Majoritatea întârzierilor și a costurilor suplimentare dintr-o lucrare subacvatică nu apar sub apă, ci înainte de intrarea scafandrilor în apă. Un obiectiv incomplet descris, o oprire de exploatare neplanificată sau lipsa unui acces sigur pot transforma o intervenție de câteva ore într-o mobilizare repetată.",
          "Articolul de față este scris pentru beneficiari — primării, operatori de apă și canalizare, hidrocentrale, porturi, constructori și companii industriale — și explică pas cu pas cum se pregătește corect o lucrare subacvatică, ce informații sunt necesare pentru o ofertă realistă și cum se gestionează siguranța pe durata intervenției.",
        ],
      },
      {
        heading: "1. Definirea obiectivului: ce problemă rezolvăm, de fapt",
        paragraphs: [
          "Primul pas nu este alegerea metodei de lucru, ci formularea clară a rezultatului urmărit. „Avem o pierdere de apă la bazin” și „vrem să verificăm starea peretelui bazinului” conduc la lucrări diferite, cu echipe și durate diferite.",
          "În practică, obiectivele se împart în trei mari categorii: diagnostic (nu știm ce avem), intervenție (știm ce avem și vrem reparat) și verificare periodică (vrem să prevenim).",
        ],
        bullets: [
          "Diagnostic — inspecție vizuală, măsurători, documentare foto-video, raport tehnic.",
          "Intervenție — reparație, etanșare, montaj, demontare, recuperare, curățare.",
          "Prevenție — verificări planificate, la intervale stabilite, pe aceleași repere.",
        ],
      },
      {
        heading: "2. Informațiile care fac diferența într-o cerere de ofertă",
        paragraphs: [
          "O ofertă precisă depinde de datele primite. Cu cât informația inițială este mai bună, cu atât devizul este mai apropiat de realitate și cu atât scad șansele unor costuri neprevăzute pe teren.",
        ],
        bullets: [
          "Tipul obiectivului: baraj, rezervor, priză de apă, conductă, cheu, pilă de pod, bazin industrial.",
          "Adâncimea estimată de lucru și nivelul apei la data intervenției.",
          "Vizibilitatea și tipul apei (limpede, tulbure, ape uzate, mediu industrial).",
          "Existența curenților, a sorburilor sau a instalațiilor active în zonă.",
          "Posibilitatea opririi sau golirii instalației și fereastra de timp disponibilă.",
          "Accesul la mal: drum de acces, spațiu pentru echipamente, sursă de energie.",
          "Planuri, schițe, fotografii sau rapoarte anterioare, dacă există.",
        ],
      },
      {
        heading: "3. Recunoașterea în teren și evaluarea riscurilor",
        paragraphs: [
          "Înainte de execuție se face o recunoaștere a amplasamentului. Se verifică accesul, se identifică sursele de pericol și se stabilește dacă lucrarea se poate executa cu scafandri, cu ROV sau printr-o combinație a celor două.",
          "Riscurile tipice ale unui șantier subacvatic sunt bine cunoscute și trebuie tratate individual, nu generic: aspirația în sorburi și prize de apă, instalațiile aflate sub tensiune sau sub presiune, vizibilitatea zero, spațiile confinate, obstacolele și fiarele din apă, mediile contaminate, temperatura scăzută.",
          "Regula de bază este izolarea energiilor: orice pompă, stavilă, turbină sau vană care poate genera curent de aspirație trebuie oprită, blocată și semnalizată pe durata scufundării, cu confirmare din partea personalului de exploatare al beneficiarului.",
        ],
        serviceLinks: [
          { slug: "interventii-medii-contaminate", label: "intervenții în medii contaminate" },
          { slug: "lucrari-cu-rov", label: "inspecții și lucrări cu ROV" },
        ],
      },
      {
        heading: "4. Planul de scufundare și organizarea echipei",
        paragraphs: [
          "Planul de scufundare este documentul care transformă intenția în procedură. El descrie succesiunea operațiunilor, adâncimile și timpii de lucru, echipamentul folosit, componența echipei, mijloacele de comunicare și scenariile de urgență.",
        ],
        bullets: [
          "Rolurile în echipă: scafandrul care lucrează, scafandrul de rezervă, supervizorul de la suprafață și personalul de asistență.",
          "Comunicarea permanentă scafandru–suprafață și semnalizarea zonei de lucru.",
          "Verificarea echipamentului înainte de fiecare imersiune, cu bifare pe listă.",
          "Procedura de urgență: cine intervine, pe ce traseu, cu ce mijloace, pe cine anunță.",
          "Jurnalul de scufundare: ore, adâncimi, operațiuni executate, observații.",
        ],
      },
      {
        heading: "5. Coordonarea cu exploatarea beneficiarului",
        paragraphs: [
          "Cele mai multe lucrări se execută pe instalații aflate în funcțiune sau oprite temporar. De aceea, coordonarea cu echipa tehnică a beneficiarului este parte din lucrare, nu o formalitate.",
          "Se stabilesc din timp: persoana de contact pe amplasament, fereastra de oprire, procedura de repunere în funcțiune, regulile interne de acces și echipamentul de protecție cerut la sol.",
          "Acolo unde oprirea este costisitoare sau imposibilă — de exemplu la o priză de apă în funcțiune sau la un rezervor de apă potabilă aflat în serviciu — se analizează varianta lucrului cu ROV sau a intervenției etapizate, pentru a reduce timpul de indisponibilitate.",
        ],
        serviceLinks: [
          { slug: "mentenanta-rezervoare-apa", label: "mentenanța rezervoarelor de apă" },
          { slug: "curatare-gratare-priza-apa", label: "curățarea grătarelor și a prizelor de apă" },
        ],
      },
      {
        heading: "6. Execuția: documentare continuă, nu doar la final",
        paragraphs: [
          "O lucrare subacvatică bine condusă produce dovezi pe tot parcursul ei. Documentarea foto-video pe zone, marcarea reperelor și notarea anomaliilor în timp real permit beneficiarului să înțeleagă ce s-a găsit și ce s-a executat, chiar dacă nu a văzut niciodată zona respectivă.",
          "Este util ca reperele de măsurare să fie stabilite de la început și păstrate identic la verificările următoare. Astfel, două inspecții succesive devin comparabile, iar evoluția unei fisuri, a unei afuieri sau a unui strat de depuneri poate fi urmărită în timp.",
        ],
        serviceLinks: [
          { slug: "inspectii-subacvatice", label: "inspecții subacvatice" },
          { slug: "expertize-tehnice-subacvatice", label: "expertize tehnice subacvatice" },
        ],
      },
      {
        heading: "7. Recepția lucrării și ce ar trebui să conțină raportul",
        paragraphs: [
          "La finalul intervenției, beneficiarul ar trebui să rămână cu un document utilizabil în mentenanță, nu doar cu o factură. Un raport corect este citibil și de personalul tehnic, și de decidentul care aprobă bugetul.",
        ],
        bullets: [
          "Descrierea obiectivului, a condițiilor de lucru și a perioadei de execuție.",
          "Constatările pe zone, cu fotografii și capturi video relevante.",
          "Lucrările efectiv executate și materialele folosite.",
          "Anomaliile rămase nerezolvate și nivelul lor de urgență.",
          "Recomandări pentru intervenții viitoare și interval de reverificare.",
        ],
      },
      {
        heading: "Greșeli frecvente care scumpesc o lucrare subacvatică",
        paragraphs: [
          "Din experiența lucrărilor pe infrastructură hidrotehnică, industrială și portuară, cele mai costisitoare greșeli sunt de organizare, nu de execuție.",
        ],
        bullets: [
          "Amânarea inspecției până când defectul devine avarie și impune intervenție de urgență.",
          "Descrierea vagă a obiectivului, care duce la o a doua mobilizare a echipei.",
          "Nestabilirea clară a opririi instalației, cu timp de așteptare pe amplasament.",
          "Lipsa planurilor sau a rapoartelor anterioare, deși acestea există în arhivă.",
          "Contractarea doar pe criteriul prețului, fără a compara ce documentație se livrează la final.",
        ],
      },
      {
        heading: "Când este momentul să solicitați o evaluare",
        paragraphs: [
          "Semnalele care justifică o verificare subacvatică sunt, de regulă, vizibile de la suprafață: pierderi de apă inexplicabile, scăderea debitului la o priză, tasări sau deplasări în zona malului, zgomote și vibrații anormale la instalațiile de pompare, precum și obiective la care nu s-a mai făcut nicio verificare de câțiva ani.",
          "În aceste situații, o inspecție planificată costă semnificativ mai puțin decât o intervenție de avarie și oferă timpul necesar pentru bugetarea corectă a reparației.",
        ],
      },
      {
        heading: "Concluzie",
        paragraphs: [
          "O lucrare subacvatică reușită se decide la birou: obiectiv clar, informații complete, riscuri evaluate, plan de scufundare asumat și coordonare reală cu exploatarea. Restul este execuție disciplinată și documentare corectă.",
          "Echipa lucrarisubacvatice.ro pregătește fiecare intervenție pornind de la datele obiectivului dumneavoastră și livrează, la final, documentația necesară pentru deciziile de mentenanță. Descrieți-ne pe scurt situația din teren și primiți o evaluare tehnică și o ofertă adaptată lucrării.",
        ],
      },
    ],
  },
  {
    slug: "sudura-subacvatica-hiperbarica-ghid-complet",
    title: "Sudură subacvatică hiperbarică: ghid complet pentru lucrări industriale sub apă",
    metaTitle:
      "Sudură subacvatică hiperbarică — ghid tehnic, prețuri și aplicații | HEIDI",
    metaDescription:
      "Sudură subacvatică umedă și hiperbarică conform AWS D3.6M: tehnici, echipamente, prețuri orientative și aplicații pe baraje, conducte, platforme. Scafandri-sudori certificați în România.",
    keywords:
      "sudura subacvatica, sudura sub apa, sudura hiperbarica, wet welding, sudura subacvatica pret, scafandri sudori, AWS D3.6M, reparatii conducte sub apa, sudura baraje, sudura platforme petroliere",
    excerpt:
      "Cum se execută sudura subacvatică umedă și hiperbarică, ce standarde se aplică (AWS D3.6M) și când este recomandată fiecare metodă pentru reparații pe infrastructură critică.",
    cover: projWelding,
    coverAlt:
      "Scafandru-sudor executând sudură subacvatică hiperbarică pe o conductă industrială",
    date: "20 iunie 2026",
    dateISO: "2026-06-20",
    readingMinutes: 7,
    category: "Sudură subacvatică",
    body: [
      {
        paragraphs: [
          "Sudura subacvatică este una dintre cele mai solicitate lucrări subacvatice industriale în România, cerută frecvent pentru reparații la conducte de transport, structuri portuare, baraje hidrotehnice, piloți de pod și platforme offshore. În acest ghid explicăm diferențele tehnice dintre sudura umedă (wet welding) și sudura hiperbarică în habitat uscat, când se alege fiecare metodă, ce standarde se aplică și care sunt factorii care influențează prețul unei lucrări de sudură sub apă.",
        ],
      },
      {
        heading: "Sudura subacvatică umedă (wet welding)",
        paragraphs: [
          "Sudura umedă se execută direct în mediul acvatic, cu scafandrul în contact cu apa. Se folosesc electrozi speciali hidroizolați (E6013 marinizați, Broco SofTouch) și surse de curent continuu cu polaritate inversă, izolate galvanic. Avantajul principal este viteza de mobilizare: o echipă HEIDI poate interveni în câteva ore în orice port, lac de acumulare sau rețea hidrotehnică din România.",
          "Limitările sunt date de viteza ridicată de răcire a metalului depus (gradient termic mare → risc de fisuri la rece și incluziuni de hidrogen). Din acest motiv, sudura umedă este recomandată pentru reparații de clasă B (non-critice) conform AWS D3.6M: peticiri, etanșări, fixare anozi sacrificiali, refacere cordoane secundare.",
        ],
      },
      {
        heading: "Sudura hiperbarică în habitat uscat",
        paragraphs: [
          "Pentru lucrări critice — coloane de hidrocentrale, conducte sub presiune, noduri structurale de platformă — se construiește un habitat hiperbaric uscat (caisson) etanșat pe structură, presurizat cu amestec de gaze respiratorii. Sudura se execută în condiții similare celor de la suprafață, cu rezultate de clasă A: cordoane testabile prin radiografie (RT), ultrasunete (UT) și particule magnetice (MT).",
          "Habitatul hiperbaric necesită planificare detaliată: HAZID, proceduri WPS calificate la adâncimea de lucru, gestionarea atmosferei interne și suport de la suprafață cu compresoare, panou de gaze și cameră de decompresie. Investiția inițială este mai mare, dar este singura soluție acceptată de operatorii de infrastructură critică pentru zone supuse oboselii sau coroziunii sub tensiune.",
        ],
      },
      {
        heading: "Standardele aplicabile",
        paragraphs: [
          "Lucrările de sudură subacvatică executate de HEIDI respectă AWS D3.6M „Specification for Underwater Welding”, completat cu EN ISO 15614 pentru calificarea procedurilor și EN ISO 9606 pentru atestarea sudorilor. Pentru segmentele de oil & gas se aplică suplimentar DNV-OS-F101 și API 1104. Fiecare cordon este însoțit de fișă de inspecție vizuală (CVI), iar la cerere de raport NDT complet.",
        ],
      },
      {
        heading: "Cât costă sudura subacvatică?",
        paragraphs: [
          "Prețul unei lucrări de sudură sub apă depinde de adâncime, accesibilitate, lungimea cordonului, clasa de calitate cerută și de timpul de imobilizare a instalației beneficiare. Pentru o estimare corectă, HEIDI execută o inspecție preliminară (vizuală sau cu ROV), urmată de deviz tehnic transparent, livrat în 24 de ore. Solicitați o evaluare gratuită pentru lucrarea dumneavoastră.",
        ],
      },
    ],
  },
  {
    slug: "inspectii-subacvatice-rov-baraje-rezervoare",
    title: "Inspecții subacvatice cu ROV: cum verificăm baraje, rezervoare și conducte fără oprire",
    metaTitle:
      "Inspecții subacvatice cu ROV — baraje, rezervoare, conducte | HEIDI România",
    metaDescription:
      "Inspecții subacvatice cu ROV și scafandri pentru baraje, rezervoare de apă potabilă, conducte și prize de apă. Rapoarte CVI, sonar multibeam și video HD, fără oprirea instalației. Acoperire națională.",
    keywords:
      "inspectii subacvatice, inspectie ROV, robot subacvatic, inspectie baraj, inspectie rezervor apa, inspectie conducta sub apa, sonar multibeam, batimetrie, CVI subacvatic, expertize tehnice subacvatice, firma scafandri Romania",
    excerpt:
      "Cum combinăm ROV-urile, scafandrii și sonarul multibeam pentru a evalua starea barajelor, rezervoarelor de apă potabilă și conductelor submerse, fără a opri exploatarea.",
    cover: projDam,
    coverAlt:
      "Inspecție subacvatică cu ROV pe peretele unui baraj hidroenergetic din România",
    date: "12 iunie 2026",
    dateISO: "2026-06-12",
    readingMinutes: 6,
    category: "Inspecții & expertize",
    body: [
      {
        paragraphs: [
          "Inspecțiile subacvatice sunt obligatorii pentru operatorii de baraje, hidrocentrale, rezervoare de apă potabilă, porturi și conducte de transport. În ultimii ani, cererea pentru inspecții cu ROV (Remotely Operated Vehicle) a crescut accelerat în România, pentru că permite verificarea infrastructurii fără oprirea exploatării și fără expunerea scafandrilor la riscuri inutile.",
        ],
      },
      {
        heading: "Când folosim ROV și când trimitem scafandri",
        paragraphs: [
          "ROV-ul este alegerea optimă pentru adâncimi mari (peste 30 m), medii contaminate (lagune de decantare, ape industriale), spații confinate (conducte de aducțiune, galerii hidrotehnice) și zone unde curentul depășește limita de siguranță pentru scafandri. Pe galerie video HD 4K și senzori (sonar 2D/3D, profilometru, sondă multiparametri) putem cartografia rapid sute de metri de structură submersă.",
          "Scafandrul rămâne însă indispensabil pentru intervenții tactile: măsurători de coroziune cu ultrasunete (UT), batere ciocan pentru fisuri, curățare locală, montare repere, demontări și remontări. La HEIDI combinăm cele două metode în pachete „ROV + diver” pentru a livra beneficiarului un raport tehnic complet în cel mai scurt timp.",
        ],
      },
      {
        heading: "Inspecții de baraje și hidrocentrale",
        paragraphs: [
          "Pe baraje hidroenergetice executăm inspecții vizuale (CVI), măsurători de grosime, verificări ale rosturilor și etanșărilor, ale grătarelor de priză, ale stavilelor și ale galeriilor de aducțiune. Raportăm conform cerințelor Inspectoratului de Stat în Construcții (ISC) și ale ANAR, cu localizare GPS, marcaje pe planșe și recomandări de mentenanță preventivă.",
        ],
      },
      {
        heading: "Rezervoare de apă potabilă",
        paragraphs: [
          "Inspecția rezervoarelor de apă potabilă (cupe de beton, castele de apă, bazine de stocare) se face cu ROV cu certificare „potable water” — fără uleiuri, fără biocide, fără contaminare. Verificăm starea pereților, a tavanului, a sorbului și a conductelor de plecare, urmată opțional de curățare profesională și dezinfecție, conform Legii 458/2002.",
        ],
      },
      {
        heading: "Conducte submerse și prize de apă",
        paragraphs: [
          "Pentru conductele submerse (Dunăre, Olt, Mureș, Argeș, lacuri de acumulare), folosim ROV cu sonar multibeam pentru cartografierea traseului, identificarea afuierilor și a deplasărilor de balastru. Inspecțiile periodice (anuale sau bianuale) previn ruperi, pierderi de presiune și sancțiuni de mediu.",
        ],
      },
      {
        heading: "Ce livrăm la final",
        paragraphs: [
          "Beneficiarul primește un raport tehnic profesional: rezumat executiv, fișe pe zone, fotografii și clipuri video extrase, planșe cu anomaliile marcate, recomandări de intervenție și estimare de costuri. La cerere, integrăm rezultatele în sisteme GIS sau în platforme proprii de mentenanță. Solicitați acum o ofertă personalizată pentru obiectivul dumneavoastră.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
