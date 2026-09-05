import projWeldingAsset from "@/assets/sudura-subacvatica-structura-metalica-scafandru.webp";
const projWelding = projWeldingAsset;
import projDamAsset from "@/assets/interventie-hidrotehnica-baraj-batardou.webp";
const projDam = projDamAsset;
import projEntryAsset from "@/assets/scafandru-intrare-in-apa-scufundari-utilitare.webp";
const projEntry = projEntryAsset;
import projCrossingAsset from "@/assets/inspectie-conducta-subacvatica-traversare-rau.webp";
const projCrossing = projCrossingAsset;
import projTankAsset from "@/assets/scafandru-comercial-inspectie-rezervoar-apa.webp";
const projTank = projTankAsset;
import projPumpAsset from "@/assets/interventie-statie-de-pompare-subacvatica.webp";
const projPump = projPumpAsset;


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
    slug: "colmatarea-prizelor-de-apa-si-a-gratarelor-statii-de-pompare",
    title:
      "Colmatarea prizelor de apă și a grătarelor la stațiile de pompare: semne, riscuri și curățare subacvatică fără oprirea instalației",
    metaTitle:
      "Colmatare prize de apă și grătare stații de pompare — curățare subacvatică | HEIDI",
    metaDescription:
      "Debit scăzut, cavitație și consum mare la pompe? Explicăm cum se depistează colmatarea prizelor de apă și a grătarelor, ce riscuri apar și cum se curăță subacvatic, fără oprirea instalației.",
    keywords:
      "colmatare priza de apa, curatare gratare priza apa, statie de pompare curatare subacvatica, sorb pompa infundat, decolmatare priza de apa, inspectie subacvatica statie pompare, lucrari subacvatice Romania, scafandri industriali",
    excerpt:
      "Pierderea de debit la o stație de pompare este rareori o problemă de pompă. De cele mai multe ori cauza este sub apă: grătare colmatate, sorburi înfundate și sediment în camera de aspirație. Cum se verifică și cum se remediază fără oprirea instalației.",
    cover: projPump,
    coverAlt:
      "Intervenție subacvatică la o stație de pompare — scafandru pregătit pentru curățarea sorbului și a grătarelor",
    date: "5 septembrie 2026",
    dateISO: "2026-09-05",
    readingMinutes: 8,
    category: "Stații de pompare & prize de apă",
    body: [
      {
        paragraphs: [
          "O stație de pompare care „nu mai trage ca înainte” este, în majoritatea cazurilor, o problemă hidraulică amonte de pompă, nu una de utilaj. Grătarul de la priza de apă se acoperă treptat cu vegetație, crengi, folii și cochilii, sorbul se înfundă parțial, iar în camera de aspirație se depune nisip și mâl.",
          "Efectul apare lent: debit mai mic, presiune instabilă, consum electric mai mare pentru același volum pompat. Când colmatarea trece de un anumit prag, pompa începe să lucreze în cavitație, iar deteriorarea devine rapidă și costisitoare.",
          "Articolul explică semnele care indică o colmatare, ce se verifică efectiv sub apă și cum se execută decolmatarea, în cele mai multe situații fără oprirea instalației.",
        ],
      },
      {
        heading: "De ce se colmatează prizele de apă și grătarele",
        paragraphs: [
          "Orice priză de apă este, prin funcția ei, un filtru. Tot ce plutește sau este antrenat de curent ajunge la grătar, iar ceea ce trece de grătar se depune mai departe, în zone cu viteză mică a apei.",
        ],
        bullets: [
          "Sezonier: vegetație acvatică, frunze și crengi după viituri sau după perioade cu vânt puternic.",
          "Aluviuni: nisip și mâl transportate de râu, care se depun în fața prizei și în camera de aspirație.",
          "Biologic: colonii de scoici și biofilm pe barele grătarului și pe interiorul sorburilor — reduc secțiunea liberă chiar și fără depuneri vizibile.",
          "Deșeuri antrenate: folii de plastic, textile, resturi plutitoare care se lipesc de grătar și îl transformă într-o suprafață aproape etanșă.",
          "Coroziune și degradare mecanică: bare rupte sau deformate care lasă să treacă obiecte mari spre sorb.",
        ],
      },
      {
        heading: "Semnele care indică o colmatare sub apă",
        paragraphs: [
          "Înainte de orice intervenție merită corelate datele de exploatare. Aproape întotdeauna există un istoric care arată clar că problema s-a instalat treptat.",
        ],
        bullets: [
          "Debit pompat mai mic la aceeași turație și aceeași configurație de vane.",
          "Diferență de nivel neobișnuită între amonte și aval de grătar — semnul cel mai direct al unei secțiuni reduse.",
          "Fluctuații de presiune pe refulare și zgomot de cavitație în pompă.",
          "Consum energetic crescut raportat la volumul pompat.",
          "Aer antrenat în aspirație sau dezamorsări repetate la pornire.",
          "Impurități ajunse în instalație, semn că grătarul are bare lipsă sau deteriorate.",
        ],
        paragraphs2: undefined,
      },
      {
        heading: "Ce riscuri apar dacă intervenția este amânată",
        paragraphs: [
          "Colmatarea nu rămâne o simplă pierdere de randament. Sub o secțiune redusă, viteza apei crește local, iar solicitările pe structură și pe echipamente se modifică.",
        ],
        bullets: [
          "Cavitație: eroziunea rotorului și a carcasei pompei, cu reparații mult mai scumpe decât o curățare.",
          "Uzură prin abraziune, când nisipul trece de grătar și ajunge în circuitul hidraulic.",
          "Solicitări suplimentare pe grătar, care pot duce la deformarea sau ruperea barelor și la desprinderea panourilor.",
          "Risc de oprire neplanificată a alimentării, exact în perioadele critice — viituri, secetă sau vârf de consum.",
          "Degradarea betonului și a pieselor metalice înglobate în zona prizei, acolo unde depunerile mențin permanent un mediu agresiv.",
        ],
      },
      {
        heading: "Cum se verifică efectiv priza de apă",
        paragraphs: [
          "O verificare corectă nu se rezumă la îndepărtarea a ceea ce se vede de la suprafață. Scopul este să se stabilească gradul real de obturare și starea structurii, cu documentare video pentru dosarul tehnic.",
        ],
        bullets: [
          "Inspecție vizuală și video a grătarului, a sorbului și a radierului din fața prizei, cu măsurarea grosimii depunerilor.",
          "Verificarea integrității barelor, a prinderilor, a ramelor și a stavilelor sau batardourilor existente.",
          "Măsurarea secțiunii libere rămase, pentru a estima pierderea de debit atribuibilă colmatării.",
          "Verificarea camerei de aspirație și a zonelor moarte unde se acumulează sediment.",
          "În bazine adânci, cu vizibilitate redusă sau cu acces dificil, verificarea preliminară se poate face cu ROV, fără imersia scafandrului.",
        ],
        serviceLinks: [
          { slug: "inspectii-subacvatice", label: "inspecții subacvatice" },
          { slug: "lucrari-cu-rov", label: "inspecții și lucrări cu ROV" },
        ],
      },
      {
        heading: "Decolmatarea: ce se poate face cu instalația în funcțiune",
        paragraphs: [
          "În cele mai multe cazuri curățarea se execută cu instalația în funcțiune sau cu o reducere temporară de sarcină, negociată împreună cu personalul de exploatare. Condiția obligatorie este controlul curenților de aspirație: lucrul lângă un sorb activ se face numai după stabilirea unei proceduri clare de blocare, semnalizare și comunicare permanentă cu camera de comandă.",
        ],
        bullets: [
          "Îndepărtarea manuală a corpurilor mari prinse de grătar și degajarea sorbului.",
          "Aspirarea sedimentului din camera de aspirație și din fața prizei, cu pompe și airlift.",
          "Curățarea mecanică a barelor și a suprafețelor colonizate biologic.",
          "Recuperarea obiectelor căzute accidental în bazin, când acestea blochează circulația apei.",
          "Reparații punctuale sub apă acolo unde inspecția arată bare rupte, prinderi cedate sau beton degradat.",
        ],
        serviceLinks: [
          { slug: "curatare-gratare-priza-apa", label: "curățarea grătarelor și a prizelor de apă" },
          { slug: "cautari-si-recuperari-subacvatice", label: "căutări și recuperări subacvatice" },
          { slug: "sudura-subacvatica", label: "sudură subacvatică" },
          { slug: "betonari-subacvatice", label: "betonări subacvatice" },
        ],
      },
      {
        heading: "Condiții de lucru și siguranță",
        paragraphs: [
          "Intervențiile la prize de apă și stații de pompare sunt lucrări cu risc ridicat, tocmai din cauza curenților de aspirație și a vizibilității adesea nule. Ele presupun personal instruit, echipament adecvat și o procedură agreată în scris cu beneficiarul înainte de prima imersie.",
          "Practic, planificarea acoperă izolarea hidraulică sau limitarea debitului pe durata lucrului, comunicația permanentă scafandru–suprafață, asigurarea unui scafandru de rezervă și stabilirea criteriilor de oprire a lucrării. Detaliile de organizare sunt tratate pe larg în ghidul nostru dedicat pregătirii unei intervenții.",
        ],
        bullets: [
          "Blocarea și semnalizarea pompelor pe durata lucrului în zona sorbului.",
          "Verificarea calității apei atunci când există riscul de contaminare — ape uzate, efluenți industriali.",
          "Documentarea video a stării inițiale și a stării finale, pentru recepția lucrării.",
        ],
        serviceLinks: [
          { slug: "interventii-medii-contaminate", label: "intervenții în medii contaminate" },
          { slug: "expertize-tehnice-subacvatice", label: "expertize tehnice subacvatice" },
        ],
      },
      {
        heading: "Cât de des ar trebui verificată o priză de apă",
        paragraphs: [
          "Nu există un interval unic: frecvența depinde de sursă, de sezon și de importanța instalației. O priză pe un râu cu transport mare de aluviuni are nevoie de verificări mult mai dese decât una într-un lac cu apă limpede.",
          "Un reper practic este verificarea după fiecare viitură importantă și cel puțin o inspecție programată înainte de sezonul de vârf. Costul unei verificări este mic în raport cu o oprire neplanificată sau cu înlocuirea unui rotor erodat, iar rezultatele consemnate în timp permit planificarea intervențiilor înainte ca pierderea de debit să devină vizibilă în exploatare.",
        ],
        serviceLinks: [
          { slug: "mentenanta-preventiva-subacvatica", label: "mentenanță preventivă subacvatică" },
          { slug: "mentenanta-rezervoare-apa", label: "mentenanța rezervoarelor de apă" },
        ],
      },
      {
        heading: "Concluzie",
        paragraphs: [
          "Când debitul scade, iar pompele lucrează mai greu, răspunsul se află de obicei sub apă. O inspecție documentată a grătarului, a sorbului și a camerei de aspirație stabilește rapid dacă problema este colmatarea și cât din pierderea de debit se recuperează printr-o simplă decolmatare.",
          "Echipa HEIDI execută inspecții și curățări subacvatice la prize de apă și stații de pompare în toată România, cu raport tehnic și documentare video la finalul lucrării.",
        ],
      },
    ],
  },

  {
    slug: "curatare-rezervoare-apa-potabila-fara-golire",
    title:
      "Curățarea rezervoarelor de apă potabilă fără golire: cum se face, ce presupune și când este necesară",
    metaTitle:
      "Curățare rezervoare de apă potabilă fără golire — proceduri și costuri | HEIDI",
    metaDescription:
      "Cum se curăță și se inspectează rezervoarele de apă potabilă fără scoaterea din funcțiune: scafandri în echipament dedicat, aspirarea sedimentului, dezinfecție și raport tehnic. Ghid pentru operatorii de apă din România.",
    keywords:
      "curatare rezervoare apa potabila, igienizare rezervor apa, curatare rezervor fara golire, inspectie rezervor apa potabila, castel de apa curatare, scafandri apa potabila, sediment rezervor, mentenanta rezervoare apa, lucrari subacvatice Romania",
    excerpt:
      "Golirea unui rezervor înseamnă întreruperea alimentării și pierderi mari de apă. Explicăm cum se execută curățarea și inspecția sub apă, cu personal și echipamente dedicate apei potabile, fără oprirea distribuției.",
    cover: projTank,
    coverAlt:
      "Scafandru comercial în echipament dedicat apei potabile, la inspecția unui rezervor de apă",
    date: "1 septembrie 2026",
    dateISO: "2026-09-01",
    readingMinutes: 8,
    category: "Apă potabilă & mentenanță",
    body: [
      {
        paragraphs: [
          "Într-un rezervor de apă potabilă, sedimentul se depune încet și constant: particule fine din sursă, produși de coroziune, nisip antrenat de la aducțiune. Ani la rând nu se vede nimic în analizele de rutină, apoi apar turbiditate la consumatori după o manevră de vane, un gust modificat sau depășiri punctuale ale parametrilor microbiologici.",
          "Reflexul clasic este golirea rezervorului. În practică asta înseamnă întreruperea sau reducerea alimentării, pierderea unui volum important de apă tratată, spălare, dezinfecție și repunerea în funcțiune — un proces care poate dura zile.",
          "Există însă și varianta în care curățarea și verificarea se execută cu apa în rezervor, prin lucrări subacvatice realizate cu personal și echipament rezervate exclusiv apei potabile. Articolul explică pe scurt cum funcționează metoda, ce se poate și ce nu se poate rezolva astfel și cum se pregătește corect o astfel de intervenție.",
        ],
      },
      {
        heading: "De ce se acumulează sediment chiar și în apa tratată",
        paragraphs: [
          "Un rezervor este, hidraulic vorbind, un decantor involuntar. Apa intră, își pierde viteza și tot ce transportă în suspensie are timp să se depună pe radier. Sursele obișnuite sunt:",
        ],
        bullets: [
          "particule minerale fine care trec de treapta de filtrare, mai ales după viituri sau lucrări la sursă;",
          "produși de coroziune și depuneri desprinse din conductele de aducțiune;",
          "material antrenat în rețea în timpul unor lucrări de reparație sau al unor manevre bruște de vane;",
          "biofilm dezvoltat pe pereți și pe radier acolo unde apa stagnează;",
          "praf și impurități pătrunse prin guri de vizitare neetanșe sau prin sisteme de aerisire neprotejate.",
        ],
      },
      {
        heading: "Semnalele care indică nevoia unei intervenții",
        paragraphs: [
          "Nu orice rezervor trebuie curățat anual, dar există indicii clare că depunerile au ajuns la un nivel care afectează exploatarea:",
        ],
        bullets: [
          "apă tulbure la consumatori după manevre de vane sau după variații mari de nivel;",
          "consum crescut de dezinfectant pentru menținerea aceluiași nivel de clor rezidual;",
          "rezultate microbiologice instabile, fără o cauză identificată în rețea;",
          "colmatarea repetată a sorbului sau a filtrelor din aval;",
          "nicio verificare a interiorului rezervorului în ultimii ani;",
          "suspiciuni de pierderi de apă sau de infiltrații în zona radierului ori a rosturilor.",
        ],
      },
      {
        heading: "Cum se execută curățarea fără scoaterea din funcțiune",
        paragraphs: [
          "Principiul este simplu: sedimentul se aspiră punctual de pe radier, fără a fi resuspendat în masa de apă, iar apa curată rămâne în rezervor. Practic, intervenția presupune o disciplină strictă privind echipamentul și traseul de lucru.",
        ],
        bullets: [
          "echipament dedicat exclusiv apei potabile — costum uscat, cască, furtunuri și scule păstrate separat și dezinfectate înainte de intrare;",
          "dezinfecția echipamentului și a scafandrului la intrarea în rezervor, cu soluții admise pentru contact cu apa potabilă;",
          "aspirarea sedimentului cu sistem de vidanjare, cu evacuare în afara rezervorului, fără agitarea coloanei de apă;",
          "curățarea locală a radierului, a colțurilor și a zonei sorbului, unde depunerile sunt cele mai consistente;",
          "verificarea vizuală a pereților, a tavanului, a rosturilor și a pieselor metalice, cu înregistrare video;",
          "prelevarea de probe și verificarea parametrilor înainte de repunerea în regim normal, împreună cu laboratorul operatorului.",
        ],
        serviceLinks: [
          { slug: "mentenanta-rezervoare-apa", label: "mentenanța rezervoarelor de apă" },
          { slug: "inspectii-subacvatice", label: "inspecții subacvatice" },
        ],
      },
      {
        heading: "Ce se poate face sub apă și ce necesită totuși golire",
        paragraphs: [
          "Metoda subacvatică rezolvă foarte bine partea de igienizare și de diagnostic, dar are limite care trebuie asumate din faza de ofertare.",
          "Se pot executa sub apă: aspirarea sedimentului, curățarea radierului și a pereților, inspecția vizuală detaliată, verificarea sorbului și a gurilor de plecare, localizarea zonelor de infiltrație, montarea sau verificarea unor piese metalice.",
          "Necesită, în schimb, golire și lucru în uscat: refacerea integrală a hidroizolației interioare, aplicarea de acoperiri sau vopsele de protecție pe suprafețe mari, reparațiile structurale de amploare la beton și intervențiile care presupun tăiere sau sudură în interiorul cupei.",
          "Din acest motiv, o inspecție subacvatică executată înainte de a decide golirea este de multe ori cea mai economică variantă: fie confirmă că este suficientă curățarea, fie stabilește exact ce lucrări justifică oprirea și cât trebuie bugetat.",
        ],
        serviceLinks: [
          { slug: "expertize-tehnice-subacvatice", label: "expertize tehnice subacvatice" },
          { slug: "curatare-gratare-priza-apa", label: "curățarea grătarelor și a prizelor de apă" },
        ],
      },
      {
        heading: "Ce trebuie pregătit de către operator",
        paragraphs: [
          "O intervenție într-un rezervor de apă potabilă este o lucrare în spațiu confinat, cu cerințe suplimentare de igienă. Pregătirea din partea beneficiarului scurtează semnificativ durata lucrării:",
        ],
        bullets: [
          "planurile rezervorului: geometrie, adâncime utilă, poziția sorbului, a preaplinului și a gurilor de vizitare;",
          "accesul la gura de vizitare și spațiu pentru amplasarea echipamentelor de suprafață și a autovidanjei;",
          "stabilirea unui interval de lucru corelat cu programul de distribuție și cu nivelul din rezervor;",
          "punct de racord pentru energie electrică și pentru evacuarea apei rezultate din vidanjare;",
          "o persoană de contact din exploatare, prezentă pe durata intervenției, pentru manevre și decizii rapide;",
          "coordonarea cu laboratorul propriu pentru probele de dinainte și de după lucrare.",
        ],
      },
      {
        heading: "Ce primește beneficiarul la final",
        paragraphs: [
          "Documentarea este partea care transformă o curățare într-un instrument de mentenanță. Un raport util conține starea inițială și cea finală, înregistrări video din interior, observațiile privind pereții, radierul, rosturile și piesele metalice, precum și recomandări privind intervalul următor de verificare.",
          "Pe baza acestor date, operatorul poate planifica bugetar lucrările mari și poate justifica, documentat, deciziile de mentenanță în fața autorității de reglementare.",
        ],
      },
      {
        heading: "De ce contează echipa și procedura",
        paragraphs: [
          "Lucrul într-un rezervor de apă potabilă combină două categorii de risc: riscul de scufundare în spațiu confinat, fără ieșire directă la suprafață, și riscul sanitar, pentru că orice greșeală de procedură afectează apa distribuită populației.",
          "De aceea intervenția presupune personal instruit pentru scufundări utilitare, echipament rezervat acestui tip de lucrare, proceduri de dezinfecție respectate integral, evaluarea condițiilor din teren înainte de intrare și un plan clar de comunicare cu exploatarea. Este exact opusul unei lucrări improvizate.",
        ],
      },
      {
        heading: "Concluzie",
        paragraphs: [
          "Curățarea și inspecția rezervoarelor cu apa în cupă nu înlocuiesc reparațiile majore, dar rezolvă cea mai frecventă problemă reală a operatorilor: sedimentul acumulat și lipsa de informații despre starea interioară, fără a întrerupe alimentarea consumatorilor.",
          "Dacă administrați un rezervor, un castel de apă sau un bazin de stocare și nu aveți date recente despre starea lui, descrieți-ne pe scurt obiectivul — dimensiuni, adâncime, acces și problemele observate. Echipa lucrarisubacvatice.ro vă transmite o evaluare tehnică și o ofertă adaptată situației din teren.",
        ],
      },
    ],
  },
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
