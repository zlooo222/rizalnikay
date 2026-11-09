const cases = [

{
  id: 1,
  title: "The Missing Novel",
  icon: "📖",
  image: "case-01.webp",
  short: "Investigate a missing literary work.",
  description: "Recover the missing novel from the historical archive.",
  challenges: [

    {
      kind: "choice",
      type: "HISTORICAL INVESTIGATION",
      prompt: "Who financially helped José Rizal when the printing of El Filibusterismo was halted due to a lack of funds?",
      evidence: "A Filipino friend in Europe",
      choices: [
        "Ferdinand Blumentritt",
        "Valentín Ventura",
        "Máximo Viola",
        "Paciano Rizal"
      ],
      answer: "Valentín Ventura",
      hint: "He sent 150 pesos to rizal while he was in Europe.",
      explanation: "Valentín Ventura helped José Rizal complete the printing of El Filibusterismo by providing financial assistance when Rizal ran out of funds. His contribution helped ensure the novel's publication in 1891."
    },

    {
      kind: "choice",
      type: "PUBLICATION RECORD",
      prompt: "In what year was Noli Me Tangere published?",
      evidence: "The first edition was printed in Berlin, Germany.",
      choices: ["1887", "1891", "1896", "1882"],
      answer: "1887",
      hint: "It was published five years before La Liga Filipina was founded.",
      explanation: "Noli Me Tangere was published in 1887."
    },

    {
      kind: "choice",
      type: "LITERARY EVIDENCE",
      prompt: "In which language was Noli Me Tangere originally written?",
      evidence: "Rizal wrote the novel for readers familiar with the language commonly used in educated circles during the Spanish colonial period.",
      choices: [
        "English",
        "Filipino",
        "Spanish",
        "French"
      ],
      answer: "Spanish",
      hint: "It was the colonial language of Spain.",
      explanation: "Rizal originally wrote Noli Me Tangere in Spanish."
    }

  ]
},

{
  id: 2,
  title: "The Encrypted Message",
  icon: "🔐",
  image: "case-02.webp",
  short: "Decode three secret messages.",
  description: "A fictional encrypted archive contains three hidden words.",
  challenges: [

    {
      kind: "cipher",
      type: "CIPHER PUZZLE",
      prompt: "Decode the first message.",
      evidence: "Each letter was shifted FORWARD by one position when the message was encrypted. Move each coded letter BACKWARD by one position.",
      cipher: "SJABM",
      answerText: "RIZAL",
      hint: "S becomes R, J becomes I, and A becomes Z when shifted backward with alphabet wraparound.",
      explanation: "The decoded word is RIZAL. This is a fictional cipher puzzle."
    },

    {
      kind: "cipher",
      type: "CIPHER PUZZLE",
      prompt: "Recover the hidden birthplace.",
      evidence: "Use the same Caesar cipher rule: shift every letter backward by one position.",
      cipher: "DBMBNCB",
      answerText: "CALAMBA",
      hint: "The word names a city in Laguna.",
      explanation: "The decoded word is CALAMBA, Rizal's birthplace."
    },

    {
      kind: "cipher",
      type: "CIPHER PUZZLE",
      prompt: "Decode the final location record.",
      evidence: "Each original letter was shifted forward by one position. Move each coded letter backward by one position.",
      cipher: "EBQJUBO",
      answerText: "DAPITAN",
      hint: "Rizal lived in this town during his exile.",
      explanation: "The decoded word is DAPITAN."
    }

  ]
},

{
  id: 3,
  title: "The Historical Timeline",
  icon: "🗓️",
  image: "case-03.webp",
  short: "Reconstruct important historical events.",
  description: "Three corrupted timelines must be restored to their correct order.",
  challenges: [

    {
      kind: "timeline",
      type: "TIMELINE PUZZLE",
      prompt: "Arrange these events from earliest to latest.",
      evidence: "The records contain four important dates from Rizal's life.",
      hint: "Start with the year 1861 and end with 1896.",
      events: [
        { id: "birth", text: "Rizal was born in Calamba (1861)." },
        { id: "noli", text: "Noli Me Tangere was published (1887)." },
        { id: "fili", text: "El Filibusterismo was published (1891)." },
        { id: "death", text: "Rizal was executed (1896)." }
      ],
      answerOrder: ["birth", "noli", "fili", "death"],
      explanation: "The correct order is 1861, 1887, 1891, and 1896."
    },

    {
      kind: "timeline",
      type: "TIMELINE PUZZLE",
      prompt: "Restore Rizal's education and writing timeline.",
      evidence: "The records describe his university studies, departure for Spain, and two novels.",
      hint: "His university studies came before his departure for Spain, followed by his novels.",
      events: [
        { id: "ust", text: "Rizal began studying at UST (1877)." },
        { id: "spain", text: "Rizal departed for Spain (1882)." },
        { id: "noli", text: "Noli Me Tangere was published (1887)." },
        { id: "fili", text: "El Filibusterismo was published (1891)." }
      ],
      answerOrder: ["ust", "spain", "noli", "fili"],
      explanation: "His university studies preceded his departure for Spain and the publication of his novels."
    },

    {
      kind: "timeline",
      type: "TIMELINE PUZZLE",
      prompt: "Arrange these later events in the correct order.",
      evidence: "The records describe the publication of a novel, the founding of an organization, Rizal's exile, and his execution.",
      hint: "The novel was published in 1891. La Liga Filipina was founded in July 1892, before Rizal's exile to Dapitan.",
      events: [
        { id: "fili", text: "El Filibusterismo was published (1891)." },
        { id: "liga", text: "La Liga Filipina was founded (July 1892)." },
        { id: "exile", text: "Rizal was sent into exile in Dapitan (July 1892)." },
        { id: "death", text: "Rizal was executed (1896)." }
      ],
      answerOrder: ["fili", "liga", "exile", "death"],
      explanation: "The publication came first, followed by the founding of La Liga Filipina, exile, and execution."
    }

  ]
},

{
  id: 4,
  title: "The Lost Location",
  icon: "📍",
  image: "case-04.webp",
  short: "Recover three missing location records.",
  description: "Investigate locations connected with Rizal's life.",
  challenges: [

    {
      kind: "choice",
      type: "LOCATION INVESTIGATION",
      prompt: "Where was José Rizal executed?",
      evidence: "It is now called Luneta Park",
      choices: [
        "Bagumbayan",
        "Mactan Island",
        "Mount Apo",
        "Corregidor Island"
      ],
      answer: "Bagumbayan",
      hint: "The location is in Manila, near the present-day Luneta area.",
      explanation: "Rizal was executed at Bagumbayan on December 30, 1896."
    },

    {
      kind: "choice",
      type: "LOCATION INVESTIGATION",
      prompt: "In which province was Rizal born?",
      evidence: "His birthplace is a city south of Manila.",
      choices: [
        "Laguna",
        "Cavite",
        "Bulacan",
        "Pampanga"
      ],
      answer: "Laguna",
      hint: "His birthplace is Calamba.",
      explanation: "Rizal was born in Calamba, Laguna."
    },

    {
      kind: "choice",
      type: "LOCATION INVESTIGATION",
      prompt: "Which city is closely associated with Rizal's years of exile?",
      evidence: "Rizal practiced medicine, taught students, and worked on community projects there.",
      choices: [
        "Dapitan",
        "Vigan",
        "Baguio",
        "Tagaytay"
      ],
      answer: "Dapitan",
      hint: "Look in present-day Zamboanga del Norte.",
      explanation: "Rizal was exiled in Dapitan from 1892 to 1896."
    }

  ]
},

{
  id: 5,
  title: "The Final Novel Record",
  icon: "📚",
  image: "case-05.webp",
  short: "Investigate Rizal's literary works.",
  description: "Recover three important records from Rizal's literary archive.",
  challenges: [

    {
      kind: "choice",
      type: "LITERARY INVESTIGATION",
      prompt: "Which novel by Rizal was published in 1891?",
      evidence: "The novel continues the story explored in Noli Me Tangere.",
      choices: [
        "El Filibusterismo",
        "Noli Me Tangere",
        "Florante at Laura",
        "Ibong Adarna"
      ],
      answer: "El Filibusterismo",
      hint: "Its title begins with the Spanish word 'El.'",
      explanation: "El Filibusterismo was published in 1891."
    },

    {
      kind: "choice",
      type: "LITERARY INVESTIGATION",
      prompt: "What is El Filibusterismo in relation to Noli Me Tangere?",
      evidence: "The two novels are connected through their themes and characters.",
      choices: [
        "A sequel",
        "A dictionary",
        "A travel guide",
        "A collection of photographs"
      ],
      answer: "A sequel",
      hint: "It continues the story of the earlier novel.",
      explanation: "El Filibusterismo is the sequel to Noli Me Tangere."
    },

    {
      kind: "choice",
      type: "LITERARY INVESTIGATION",
      prompt: "What was one major purpose of Noli Me Tangere?",
      evidence: "The novel portrays abuses and social conditions under Spanish colonial rule.",
      choices: [
        "To expose social injustices",
        "To teach computer programming",
        "To describe modern transportation",
        "To promote industrial machinery"
      ],
      answer: "To expose social injustices",
      hint: "Think about the problems Rizal wanted readers to recognize.",
      explanation: "The novel criticized social injustices and abuses during the colonial period."
    }

  ]
},

{
  id: 6,
  title: "The Dapitan File",
  icon: "🧭",
  image: "case-06.webp",
  short: "Investigate Rizal's exile and activities.",
  description: "Recover records from Rizal's years in Dapitan.",
  challenges: [

    {
      kind: "choice",
      type: "EXILE RECORD",
      prompt: "During which years was Rizal exiled in Dapitan?",
      evidence: "The exile began after the founding of La Liga Filipina.",
      choices: [
        "1892–1896",
        "1882–1886",
        "1877–1881",
        "1896–1900"
      ],
      answer: "1892–1896",
      hint: "His exile lasted about four years.",
      explanation: "Rizal lived in exile in Dapitan from 1892 to 1896."
    },

    {
      kind: "choice",
      type: "EXILE RECORD",
      prompt: "Which profession did Rizal practice while in Dapitan?",
      evidence: "He treated people during his years of exile.",
      choices: [
        "Physician",
        "Ship captain",
        "Military general",
        "Architect of skyscrapers"
      ],
      answer: "Physician",
      hint: "He studied medicine.",
      explanation: "Rizal practiced medicine while living in Dapitan."
    },

    {
      kind: "choice",
      type: "EXILE RECORD",
      prompt: "Which activity did Rizal undertake in Dapitan?",
      evidence: "His activities included educating young people and contributing to local improvements.",
      choices: [
        "Teaching students",
        "Developing aircraft engines",
        "Operating a television station",
        "Building a space laboratory"
      ],
      answer: "Teaching students",
      hint: "He established a school for boys.",
      explanation: "Rizal taught students in Dapitan as part of his community work."
    }

  ]
},

{
  id: 7,
  title: "The Reformist Network",
  icon: "🤝",
  image: "case-07.webp",
  short: "Recover the goals of the reform movement.",
  description: "Investigate organizations and publications linked to peaceful reform.",
  challenges: [

    {
      kind: "choice",
      type: "ORGANIZATION FILE",
      prompt: "What was one major goal of La Liga Filipina?",
      evidence: "The organization sought unity, mutual assistance, and peaceful reforms.",
      choices: [
        "Promote unity and peaceful reforms",
        "Create a computer operating system",
        "Establish a foreign empire",
        "Develop a space program"
      ],
      answer: "Promote unity and peaceful reforms",
      hint: "Think about how Filipinos could work together to seek change.",
      explanation: "La Liga Filipina promoted unity and peaceful reform."
    },

    {
      kind: "choice",
      type: "ORGANIZATION FILE",
      prompt: "What was the Propaganda Movement primarily seeking?",
      evidence: "Reformists advocated changes in colonial governance and greater rights for Filipinos.",
      choices: [
        "Political and social reforms",
        "Modern video games",
        "A new computer language",
        "Commercial space travel"
      ],
      answer: "Political and social reforms",
      hint: "The movement used writing and advocacy to demand changes.",
      explanation: "The Propaganda Movement campaigned for reforms and Filipino representation."
    },

    {
      kind: "choice",
      type: "ORGANIZATION FILE",
      prompt: "Which publication carried reformist writings from Filipinos in Spain?",
      evidence: "The publication became an important voice of the reform campaign.",
      choices: [
        "La Solidaridad",
        "The Manila Times of today",
        "The Philippine Star",
        "A modern computer magazine"
      ],
      answer: "La Solidaridad",
      hint: "Its name is Spanish and refers to solidarity.",
      explanation: "La Solidaridad published writings advocating reforms during the Propaganda Movement."
    }

  ]
},

{
  id: 8,
  title: "The Birthplace Cipher",
  icon: "🗺️",
  image: "case-08.webp",
  short: "Decode three messages with a new cipher.",
  description: "These encrypted words use a two-letter shift instead of a one-letter shift.",
  challenges: [

    {
      kind: "cipher",
      type: "CAESAR CIPHER",
      prompt: "Decode the first encrypted word.",
      evidence: "Every original letter was shifted FORWARD by two positions. Move each coded letter BACKWARD by two positions.",
      cipher: "UCNCPFCPCP",
      answerText: "SALANDANAN",
      hint: "P becomes N when shifted backward by two letters.",
      explanation: "The decoded name is SALANDANAN who is Andres Salandanan who challenged José Rizal to an arm-wrestling match."
    },

    {
      kind: "cipher",
      type: "CAESAR CIPHER",
      prompt: "Recover the second hidden word.",
      evidence: "Use the same two-position backward shift.",
      cipher: "CAC",
      answerText: "AYA",
      hint: "H becomes F, and K becomes I.",
      explanation: "The decoded answer is AYA, who helped shape rizal's imagination, way of thinking, and literary interests through the stories and experiences she shared with him."
    },

    {
      kind: "cipher",
      type: "CAESAR CIPHER",
      prompt: "Decode the final historical name.",
      evidence: "Move each letter backward by two alphabet positions. Wrap around to the end of the alphabet when necessary.",
      cipher: "DNWOGPVTKVV",
      answerText: "BLUMENTRITT",
      hint: "The third coded letter is B; move two positions backward, wrapping around from A to Z.",
      explanation: "The decoded name is BLUMENTRITT, referring to Ferdinand Blumentritt, an Austrian scholar and a close friend of José Rizal. "
    }

  ]
},

{
  id: 9,
  title: "The Scrambled Records",
  icon: "📂",
  image: "case-09.webp",
  short: "Restore three more timelines.",
  description: "Investigate the order of Rizal's education, writings, and final journey.",
  challenges: [

    {
      kind: "timeline",
      type: "TIMELINE PUZZLE",
      prompt: "Restore the important events during Rizal's university years.",
      evidence: "The records describe Rizal's year at UST.",
  hint: "Arrange the events in chronological order, from his early university years to his activism.",
      events: [
        { id: "firstyear", text: "FIRST YEAR (1877–1878): Rizal studied Philosophy and Letters at UST and took surveying at Ateneo Municipal." },
        { id: "medicine", text: "Rizal shifted to Medicine at UST because of his mother's failing eyesight." },
        { id: "literary", text: "LITERARY TRIUMPH: Rizal won first prize for his poem A La Juventud Filipina." },
        { id: "activisim", text: "STUDENT ACTIVISM (1881–1882): Rizal participated in protests against racial discrimination and the unfair treatment of Filipino students at UST." }
      ],
      answerOrder: ["firstyear", "medicine", "literary", "activisim"],
      explanation: "The correct sequence follows Rizal's early university studies, his decision to study medicine, his literary success, and his involvement in student activism against discrimination."
    },

    {
      kind: "timeline",
      type: "TIMELINE PUZZLE",
      prompt: "Restore the sequence of reform and literary events.",
      evidence: "The records contain the publication of both novels and the founding of La Liga Filipina, followed by Rizal's exile.",
      hint: "The dates are 1887, 1891, July 1892, and July 1892 after the organization was founded.",
      events: [
        { id: "noli", text: "Noli Me Tangere was published (1887)." },
        { id: "fili", text: "El Filibusterismo was published (1891)." },
        { id: "liga", text: "La Liga Filipina was founded (July 1892)." },
        { id: "exile", text: "Rizal was exiled to Dapitan (July 1892)." }
      ],
      answerOrder: ["noli", "fili", "liga", "exile"],
      explanation: "The novels were published before La Liga Filipina was founded and Rizal was exiled."
    },

    {
      kind: "timeline",
      type: "TIMELINE PUZZLE",
      prompt: "Reconstruct Rizal's final months.",
      evidence: "These records follow his arrest in Spain, return to Manila, military trial, and execution.",
      hint: "The arrest happened before his return to Manila, followed by his trial and execution.",
      events: [
        { id: "arrest", text: "Rizal was arrested in Spain (October 1896)." },
        { id: "manila", text: "Rizal was brought back to Manila (November 1896)." },
        { id: "trial", text: "Rizal's military trial took place (December 1896)." },
        { id: "death", text: "Rizal was executed on December 30 (1896)." }
      ],
      answerOrder: ["arrest", "manila", "trial", "death"],
      explanation: "Rizal's arrest preceded his return to Manila, trial, and execution."
    }

  ]
},

{
  id: 10,
  title: "The Last Manuscript",
  icon: "✉️",
  image: "case-10.webp",
  short: "Investigate Rizal's farewell poem.",
  description: "Recover the literary record associated with Rizal's final hours.",
  challenges: [

    {
      kind: "choice",
      type: "MANUSCRIPT INVESTIGATION",
      prompt: "Which poem reflects Rizal's quiet and reflective life in Dapitan?",
      evidence: "he poem describes Rizal's peaceful life in exile and his reflections on nature and solitude.",
      choices: [
        "Mi Último Adiós",
        "Mi Retiro",
        "A La Juventud Filipina",
        "Himno A Talisay"
      ],
      answer: "Mi Retiro",
      hint: "His autobiographical poem'",
      explanation: "Mi Retiro where he found peace and inspiration in nature during his exile."
    },

    {
      kind: "choice",
      type: "MANUSCRIPT INVESTIGATION",
      prompt: "What does the title Mi Último Adiós mean in English?",
      evidence: "The title is Spanish and refers to a final farewell.",
      choices: [
        "My Last Farewell",
        "The Lost Novel",
        "A New Beginning",
        "The First Journey"
      ],
      answer: "My Last Farewell",
      hint: "For his beloved Philippines'",
      explanation: "Mi Último Adiós means 'My Last Farewell.'"
    },

    {
      kind: "choice",
      type: "MANUSCRIPT INVESTIGATION",
      prompt: "In which language was Mi Último Adiós written?",
      evidence: "The original poem uses the language in which Rizal wrote many of his literary works.",
      choices: [
        "Spanish",
        "English",
        "German",
        "Japanese"
      ],
      answer: "Spanish",
      hint: "It is also the language of the poem's title.",
      explanation: "Rizal wrote Mi Último Adiós in Spanish."
    }

  ]
},

{
  id: 11,
  title: "The Mysterious Letter",
  icon: "✉️",
  image: "case-11.webp",
  short: "Investigate characters and writings.",
  description: "Three literary clues have been separated from the historical archive.",
  challenges: [

    {
      kind: "choice",
      type: "CHARACTER INVESTIGATION",
      prompt: "Who is Juan Crisóstomo Ibarra in Noli Me Tangere?",
      evidence: "He is the central character who returns to the Philippines after studying abroad.",
      choices: [
        "The novel's main protagonist",
        "A Spanish governor-general",
        "A newspaper editor",
        "A computer engineer"
      ],
      answer: "The novel's main protagonist",
      hint: "He is the central character of Noli Me Tangere.",
      explanation: "Juan Crisóstomo Ibarra is the main protagonist of Noli Me Tangere."
    },

    {
      kind: "choice",
      type: "CHARACTER INVESTIGATION",
      prompt: "What is Maria Clara's role in Noli Me Tangere?",
      evidence: "She is a central female character whose relationship with Ibarra is important to the story.",
      choices: [
        "Ibarra's beloved",
        "A newspaper publisher",
        "A revolutionary general",
        "A university professor in modern times"
      ],
      answer: "Ibarra's beloved",
      hint: "She is romantically connected to Ibarra.",
      explanation: "Maria Clara is Ibarra's beloved in Noli Me Tangere."
    },

    {
      kind: "choice",
      type: "WRITING INVESTIGATION",
      prompt: "What type of work is The Indolence of the Filipino?",
      evidence: "Rizal discusses social conditions and challenges common claims about Filipino laziness in this work.",
      choices: [
        "An essay",
        "A computer manual",
        "A science-fiction novel",
        "A collection of maps"
      ],
      answer: "An essay",
      hint: "It presents arguments and analysis rather than a fictional plot.",
      explanation: "The Indolence of the Filipino is an essay by José Rizal."
    }

  ]
},

{
  id: 12,
  title: "The Lost Archive Key",
  icon: "🔑",
  image: "case-12.webp",
  short: "Recover details about Rizal's life.",
  description: "Three personal records are needed to unlock the final archive.",
  challenges: [

    {
      kind: "choice",
      type: "BIOGRAPHICAL INVESTIGATION",
      prompt: "Which option gives Rizal's commonly cited full name?",
      evidence: "The historical record includes his given names and family names.",
      choices: [
        "José Protasio Rizal Mercado y Alonso Realonda",
        "José Andres Bonifacio Mercado",
        "Emilio José Jacinto Rizal",
        "Juan Rizal Mabini Mercado"
      ],
      answer: "José Protasio Rizal Mercado y Alonso Realonda",
      hint: "A poet, novelist, philosopher and a historian",
      explanation: "His commonly cited full name is José Protasio Rizal Mercado y Alonso Realonda."
    },

    {
      kind: "choice",
      type: "BIOGRAPHICAL INVESTIGATION",
      prompt: "Who was José Rizal's mother?",
      evidence: "She was a well-educated member of the Mercado family and an important influence on his early learning.",
      choices: [
        "Teodora Alonso Realonda",
        "Gregoria de Jesus",
        "Melchora Aquino",
        "Gabriela Silang"
      ],
      answer: "Teodora Alonso Realonda",
      hint: "The one who shared the story of the moth",
      explanation: "Rizal's mother was Teodora Alonso Realonda."
    },

    {
      kind: "choice",
      type: "BIOGRAPHICAL INVESTIGATION",
      prompt: "Which school did Rizal attend in Manila before his studies in Europe?",
      evidence: "He completed secondary education at this institution, known during the Spanish colonial period as the Ateneo Municipal.",
      choices: [
        "Ateneo Municipal de Manila",
        "University of the Philippines Diliman",
        "Polytechnic University of the Philippines",
        "Far Eastern University"
      ],
      answer: "Ateneo Municipal de Manila",
      hint: "A prestigious Spanish-colonial Jesuit institution ",
      explanation: "Rizal studied at Ateneo Municipal de Manila."
    }

  ]
}

];

const MAX_SCORE = cases.reduce(
  (total, item) => total + item.challenges.length * 100,
  0
);

const CASE_CONSEQUENCES = {
  1: "The literary catalog follows a false lead. The integrity of the novel record is weakened.",
  2: "The encrypted archive records an unreliable message. The cipher trail is flagged as damaged.",
  3: "The timeline is filed with a gap. The order of historical events becomes less reliable.",
  4: "The investigation follows a misleading location lead. The geographic record becomes incomplete.",
  5: "The literary shelf is miscatalogued. A connection between Rizal's novels is obscured.",
  6: "The Dapitan report loses an important detail about Rizal's activities during exile.",
  7: "The reformist network record is weakened. The movement's goals become harder to reconstruct.",
  8: "The cipher index keeps a false entry. The archive's decoding records become less trustworthy.",
  9: "The historical chronology is damaged. The final timeline contains an unresolved gap.",
  10: "The farewell manuscript is misfiled. The final literary report loses accuracy.",
  11: "The letter is placed in the wrong category. A literary clue remains unresolved.",
  12: "The personal archive key is linked to an unreliable record. The final biography is compromised."
};

const screens = {
  welcome: document.getElementById("welcome-screen"),
  dashboard: document.getElementById("dashboard-screen"),
  case: document.getElementById("case-screen"),
  result: document.getElementById("result-screen")
};

const $ = id => document.getElementById(id);

let playerName = "";
let currentCaseIndex = 0;
let score = MAX_SCORE;
let hintsUsed = 0;
let completedQuestions = 0;
let mistakes = 0;
let decisionLog = [];

let solved = new Set();
let attempted = new Set();
let caseStates = [];

let resultShown = false;
let toastTimer;

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] =
      [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

let audioContext = null;
let masterGain = null;
let soundOn = true;
let gameStarted = false;

let ambientTimer = null;
let ambientIndex = 0;

const ambientNotes = [
  130.81, 164.81, 196.00, 164.81,
  146.83, 174.61, 220.00, 174.61
];

function ensureAudio() {
  const AudioConstructor =
    window.AudioContext || window.webkitAudioContext;

  if (!AudioConstructor) {
    return false;
  }

  if (!audioContext) {
    audioContext = new AudioConstructor();

    masterGain = audioContext.createGain();
    masterGain.gain.value = soundOn ? 0.42 : 0;

    masterGain.connect(audioContext.destination);
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

  return true;
}

function playTone(
  frequency,
  duration = 0.18,
  type = "sine",
  volume = 0.12,
  endFrequency = null,
  delay = 0
) {
  if (!soundOn || !ensureAudio()) return;

  const now = audioContext.currentTime + delay;

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = type;

  oscillator.frequency.setValueAtTime(frequency, now);

  if (endFrequency && endFrequency > 0) {
    oscillator.frequency.exponentialRampToValueAtTime(
      endFrequency,
      now + duration
    );
  }

  gain.gain.setValueAtTime(0.0001, now);

  gain.gain.exponentialRampToValueAtTime(
    Math.max(volume, 0.0002),
    now + 0.018
  );

  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    now + duration
  );

  oscillator.connect(gain);
  gain.connect(masterGain);

  oscillator.start(now);
  oscillator.stop(now + duration + 0.03);
}

function startAmbientMusic() {
  if (!soundOn || !gameStarted || resultShown) return;
  if (!ensureAudio()) return;

  stopAmbientMusic();

  ambientIndex = 0;

  function playAmbientNote() {
    if (!soundOn || !gameStarted || resultShown) {
      stopAmbientMusic();
      return;
    }

    const frequency =
      ambientNotes[ambientIndex % ambientNotes.length];

    playTone(
      frequency,
      1.65,
      "triangle",
      0.055,
      frequency * 0.99
    );

    ambientIndex++;
  }

  playAmbientNote();

  ambientTimer = setInterval(
    playAmbientNote,
    1850
  );
}

function stopAmbientMusic() {
  if (ambientTimer !== null) {
    clearInterval(ambientTimer);
    ambientTimer = null;
  }
}

function playSoundEffect(type) {
  if (!soundOn) return;

  switch (type) {
    case "start":
      playTone(440, 0.12, "sine", 0.13, 660);
      playTone(660, 0.16, "sine", 0.13, 880, 0.13);
      break;

    case "click":
      playTone(620, 0.07, "sine", 0.075, 720);
      break;

    case "open":
      playTone(360, 0.13, "triangle", 0.11, 510);
      playTone(510, 0.18, "sine", 0.10, 760, 0.10);
      break;

    case "correct":
      playTone(523.25, 0.13, "sine", 0.14);
      playTone(659.25, 0.13, "sine", 0.14, null, 0.13);
      playTone(783.99, 0.22, "sine", 0.16, null, 0.26);
      break;

    case "wrong":
      playTone(300, 0.18, "triangle", 0.13, 220);
      playTone(220, 0.20, "triangle", 0.10, 180, 0.13);
      break;

    case "hint":
      playTone(440, 0.14, "sine", 0.11);
      playTone(587.33, 0.20, "sine", 0.12, null, 0.14);
      break;

    case "toggle":
      playTone(720, 0.09, "sine", 0.10, 900);
      break;

    case "victory":
      playTone(523.25, 0.18, "sine", 0.15);
      playTone(659.25, 0.18, "sine", 0.15, null, 0.18);
      playTone(783.99, 0.18, "sine", 0.15, null, 0.36);
      playTone(1046.50, 0.45, "sine", 0.18, null, 0.54);
      break;
  }
}

function createSoundButton() {
  const status = document.querySelector(".top-status");

  if (!status || $("sound-toggle")) return;

  const button = document.createElement("button");

  button.id = "sound-toggle";
  button.type = "button";
  button.textContent = "♪ SOUND ON";
  button.title = "Turn game sound off";

  button.style.cssText = `
    background: rgba(83,199,255,0.08);
    border: 1px solid rgba(83,199,255,0.4);
    color: #53c7ff;
    padding: 7px 9px;
    margin-left: 8px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    white-space: nowrap;
  `;

  button.addEventListener("click", () => {
    soundOn = !soundOn;

    if (!soundOn) {
      stopAmbientMusic();

      if (masterGain && audioContext) {
        masterGain.gain.setTargetAtTime(
          0,
          audioContext.currentTime,
          0.04
        );
      }
    } else {
      ensureAudio();

      if (masterGain && audioContext) {
        masterGain.gain.setTargetAtTime(
          0.42,
          audioContext.currentTime,
          0.04
        );
      }

      startAmbientMusic();
    }

    button.textContent =
      soundOn ? "♪ SOUND ON" : "♪ SOUND OFF";

    button.title = soundOn
      ? "Turn game sound off"
      : "Turn game sound on";

    playSoundEffect("toggle");

    showToast(
      soundOn
        ? "Sound enabled."
        : "Sound disabled."
    );
  });

  status.appendChild(button);
}

function showScreen(name) {
  Object.values(screens).forEach(screen => {
    screen.classList.add("hidden");
  });

  screens[name].classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function safeName(name) {
  return name
    .trim()
    .replace(/[<>]/g, "")
    .slice(0, 24);
}

function showToast(message) {
  const toast = $("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function rankFor(value) {
  if (value >= 3200) return "MASTER DIGITAL DETECTIVE";
  if (value >= 2600) return "SENIOR INVESTIGATOR";
  if (value >= 1900) return "ARCHIVE SPECIALIST";
  if (value >= 1000) return "FIELD DETECTIVE";

  return "ROOKIE ANALYST";
}

function updateCaseCounts() {
  const count = $("recovered-count");

  if (count) {
    const denominator =
      count.parentElement.querySelector("i");

    if (denominator) {
      denominator.textContent = `/ ${cases.length}`;
    }
  }

  const caseCount = document.querySelector(".tiny-count");

  if (caseCount) {
    caseCount.textContent =
      String(cases.length).padStart(2, "0");
  }

  const scoreDenominator =
    document.querySelector(".final-score-card div i");

  if (scoreDenominator) {
    scoreDenominator.textContent =
      `/ ${cases.length * 3 * 100}`;
  }
}

function startGame(name) {
  playerName = safeName(name) || "Detective";

  currentCaseIndex = 0;
score = MAX_SCORE;
hintsUsed = 0;
completedQuestions = 0;
mistakes = 0;
decisionLog = [];

solved = new Set();
attempted = new Set();

resultShown = false;
gameStarted = true;

  caseStates = cases.map(item => ({
    order: shuffleArray(item.challenges),
    currentIndex: 0,
    solved: false,
    hintUsedForCurrent: false,
    selectedChoice: null
  }));

  $("dashboard-name").textContent = playerName;
  $("profile-name").textContent = playerName.toUpperCase();

  updateCaseCounts();
  renderDashboard();
  showScreen("dashboard");

  if (soundOn) {
    ensureAudio();
    startAmbientMusic();
    playSoundEffect("start");
  }
}

function renderDashboard() {
  $("recovered-count").textContent = solved.size;

  $("score-total").textContent =
    String(score).padStart(3, "0");

  $("rank-label").textContent = rankFor(score);

  updateCaseCounts();

  const grid = $("case-grid");
  grid.innerHTML = "";

  cases.forEach((item, index) => {
    const state = caseStates[index];

    const unlocked =
      index === 0 || solved.has(index - 1);

    const completed = solved.has(index);

    const card = document.createElement("article");

    card.className =
      `case-card ${
        completed
          ? "completed"
          : unlocked
          ? "available"
          : "locked"
      }`;

    const imagePath = item.image ||
      `case-${String(item.id).padStart(2, "0")}.webp`;

    const imageMarkup = `
      <div class="case-card-image-wrap">
        <img
          src="${imagePath}"
          alt="${item.title}"
          class="case-card-image"
          loading="lazy"
          onerror="this.onerror=null;this.src='case-01.webp';"
        >
      </div>
    `;

    card.innerHTML = `
      <div class="case-card-top">
        <span>CASE_${String(item.id).padStart(2, "0")}</span>

        <span>
          ${
            completed
              ? "✓ RECOVERED"
              : unlocked
              ? "AVAILABLE"
              : "LOCKED"
          }
        </span>
      </div>

      ${imageMarkup}

      <h4>${item.title}</h4>
      <p>${item.short}</p>

      <div class="case-card-bottom">
        <span>
          ${
            completed
              ? "FILE RECOVERED"
              : !unlocked
              ? "COMPLETE PREVIOUS CASE"
              : state.currentIndex > 0
              ? "RESUME INVESTIGATION ↗"
              : "OPEN INVESTIGATION ↗"
          }
        </span>

        <span class="lock-icon">
          ${completed ? "✓" : unlocked ? "↗" : "▣"}
        </span>
      </div>
    `;

    if (unlocked && !completed) {
      card.addEventListener("click", () => {
        openCase(index);
      });

      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");

      card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openCase(index);
        }
      });
    }

    grid.appendChild(card);
  });
}

function openCase(index) {
  if (index > 0 && !solved.has(index - 1)) {
    showToast("Complete the previous case first.");
    return;
  }

  if (solved.has(index)) {
    showToast("This file has already been recovered.");
    return;
  }

  currentCaseIndex = index;

  const item = cases[index];

  $("active-case-number").textContent =
    `CASE_${String(item.id).padStart(2, "0")}`;

  $("active-case-title").textContent = item.title;
  $("active-case-desc").textContent = item.description;

  renderCurrentChallenge();
  showScreen("case");

  playSoundEffect("open");
}

function renderCurrentChallenge() {
  const item = cases[currentCaseIndex];
  const state = caseStates[currentCaseIndex];
  const question = state.order[state.currentIndex];

  $("active-case-number").textContent =
    `CASE_${String(item.id).padStart(2, "0")}`;

  $("active-case-title").textContent = item.title;
  $("active-case-desc").textContent = item.description;
  $("challenge-type").textContent = question.type;

  $("case-progress-bar").style.width =
    `${(completedQuestions / (cases.length * 3)) * 100}%`;

  $("case-progress-text").textContent =
    `QUESTION ${state.currentIndex + 1} OF 3`;

  $("case-progress-percent").textContent =
    `${Math.round(
      (completedQuestions / (cases.length * 3)) * 100
    )}%`;

  $("feedback").textContent = "";
  $("feedback").className = "feedback";

  renderChallenge(question, state);
}

function renderChallenge(question, state) {
  const container = $("challenge-content");

  let html = `
    <div class="challenge-eyebrow">
      /// EVIDENCE REVIEW ${String(currentCaseIndex + 1).padStart(2, "0")}
    </div>

    <h3 class="challenge-title">${question.prompt}</h3>

    <div class="evidence-box">
      <div class="evidence-label">▣ EVIDENCE FOUND</div>
      <p>${question.evidence}</p>
    </div>
	
	
<div class="live-points" style="
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  gap:8px;
  padding:11px 13px;
  margin:12px 0 18px;
  background:rgba(83,199,255,0.06);
  border:1px solid rgba(83,199,255,0.20);
  border-radius:6px;
  color:#8da8bd;
  font:10px 'DM Mono',monospace;
">
  <span>
    POINTS REMAINING:
    <strong id="live-score" style="color:#53c7ff">
      ${score.toLocaleString()}
    </strong>
    / ${MAX_SCORE.toLocaleString()}
  </span>
  <span>LOCKED MISTAKE: −100 PTS</span>
</div>
	
  `;

  if (question.kind === "choice") {
    const shuffledChoices = shuffleArray(question.choices);

    html += `
      <div class="choice-list">

        ${shuffledChoices.map((choice, i) => `
          <button
            class="choice-btn"
            data-choice="${encodeURIComponent(choice)}"
          >
            <span class="choice-letter">
              ${String.fromCharCode(65 + i)}
            </span>

            <span>${choice}</span>
          </button>
        `).join("")}

      </div>

      <div class="challenge-actions">
        <button id="submit-answer" class="primary-btn">
          SUBMIT EVIDENCE ↗
        </button>
      </div>
    `;
  }


  else if (question.kind === "cipher") {
    html += `
      <div class="cipher-line">
        ${question.cipher}
      </div>

      <label class="text-input-label" for="cipher-answer">
        DECODED MESSAGE
      </label>

      <input
        class="answer-input"
        id="cipher-answer"
        placeholder="Type the decoded answer..."
        autocomplete="off"
      >

      <div class="challenge-actions">
        <button id="submit-answer" class="primary-btn">
          DECODE & VERIFY ↗
        </button>
      </div>
    `;
  }


  else if (question.kind === "timeline") {
    const shuffledEvents = shuffleArray(question.events);

    html += `
      <p class="challenge-desc">
        Arrange the events from earliest to latest.
        Use each position number only once.
      </p>

      <div class="timeline-list">

        ${shuffledEvents.map(event => `
          <div class="timeline-item">

            <select
              data-event="${event.id}"
              aria-label="Position for ${event.text}"
            >
              <option value="">#</option>

              ${question.events.map((_, i) => `
                <option value="${i + 1}">
                  ${i + 1}
                </option>
              `).join("")}

            </select>

            <span>${event.text}</span>

          </div>
        `).join("")}

      </div>

      <div class="challenge-actions">
        <button id="submit-answer" class="primary-btn">
          RESTORE TIMELINE ↗
        </button>
      </div>
    `;
  }

  container.innerHTML = html;


  if (question.kind === "choice") {
    container.querySelectorAll("[data-choice]").forEach(button => {
      button.addEventListener("click", () => {
        container.querySelectorAll("[data-choice]").forEach(existing => {
          existing.classList.remove("selected", "wrong");
        });

        button.classList.add("selected");

        state.selectedChoice =
          decodeURIComponent(button.dataset.choice);

        playSoundEffect("click");
      });
    });
  }

  $("submit-answer").addEventListener("click", () => {
    submitAnswer(question, state);
  });
}


function setFeedback(message, type) {
  $("feedback").textContent = message;
  $("feedback").className = `feedback ${type || ""}`;
}

function updateScoreDisplays() {
  const scoreDisplay = $("score-total");
  const liveScore = $("live-score");
  const rankLabel = $("rank-label");

  if (scoreDisplay) {
    scoreDisplay.textContent =
      String(score).padStart(3, "0");
  }

  if (liveScore) {
    liveScore.textContent = score.toLocaleString();
  }

  if (rankLabel) {
    rankLabel.textContent = rankFor(score);
  }

  updateCaseCounts();
}


function getCorrectAnswer(question) {
  if (question.kind === "choice") {
    return question.answer;
  }

  if (question.kind === "cipher") {
    return question.answerText;
  }

  if (question.kind === "timeline") {
    return question.answerOrder
      .map(id => {
        const event = question.events.find(
          item => item.id === id
        );

        return event ? event.text : id;
      })
      .join(" → ");
  }

  return "No answer recorded";
}


function escapeHTML(value) {
  const characters = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };

  return String(value).replace(
    /[&<>"']/g,
    character => characters[character]
  );
}


function submitAnswer(question, state) {
  if (state.solved) return;

  let correct = false;
  let selectedAnswer = "";

  // CHECK MULTIPLE CHOICE

  if (question.kind === "choice") {
    if (!state.selectedChoice) {
      setFeedback(
        "Choose the evidence you want to submit.",
        "neutral"
      );
      return;
    }

    selectedAnswer = state.selectedChoice;

    correct =
      selectedAnswer === question.answer;
  }

  else if (question.kind === "cipher") {
    const input = $("cipher-answer").value.trim();

    if (!input) {
      setFeedback(
        "Enter your decoded message before submitting.",
        "neutral"
      );
      return;
    }

    selectedAnswer = input.toUpperCase()
      .replace(/[^A-Z0-9]/g, "");

    correct =
      selectedAnswer === question.answerText;
  }


  else if (question.kind === "timeline") {
    const selects = [
      ...document.querySelectorAll(
        "#challenge-content [data-event]"
      )
    ];

    const values = selects.map(
      select => select.value
    );

    if (values.some(value => !value)) {
      setFeedback(
        "Submit a complete timeline to lock in your decision.",
        "neutral"
      );
      return;
    }

    if (new Set(values).size !== values.length) {
      setFeedback(
        "Each event must have its own position.",
        "neutral"
      );
      return;
    }

    const positions = {};

    selects.forEach(select => {
      positions[select.dataset.event] =
        Number(select.value);
    });

    correct = question.answerOrder.every(
      (eventId, index) =>
        positions[eventId] === index + 1
    );

    selectedAnswer = [...selects]
      .sort((a, b) =>
        Number(a.value) - Number(b.value)
      )
      .map(select => {
        const event = question.events.find(
          item => item.id === select.dataset.event
        );

        return event ? event.text : select.dataset.event;
      })
      .join(" → ");
  }

  const caseItem = cases[currentCaseIndex];

  attempted.add(
    `${currentCaseIndex}-${state.currentIndex}`
  );

  const consequence = correct
    ? "Your evidence is verified. The archive remains consistent."
    : CASE_CONSEQUENCES[caseItem.id] ||
      "A false lead has been added to the investigation.";


  decisionLog.push({
    caseId: caseItem.id,
    caseTitle: caseItem.title,
    question: question.prompt,
    selectedAnswer: selectedAnswer,
    correctAnswer: getCorrectAnswer(question),
    correct: correct,
    consequence: consequence
  });


  completedQuestions++;

  state.selectedChoice = null;

  if (correct) {
    playSoundEffect("correct");

    setFeedback(
      "EVIDENCE VERIFIED — " + question.explanation,
      "success"
    );
  } else {
    mistakes++;


    score = Math.max(0, score - 100);

    playSoundEffect("wrong");

    setFeedback(
      `FALSE LEAD RECORDED — −100 POINTS. ${consequence} The investigation continues.`,
      "error"
    );

    showToast("False lead recorded. −100 points.");
  }

  updateScoreDisplays();


  document
    .querySelectorAll("#challenge-content button")
    .forEach(button => {
      button.disabled = true;
    });

  document
    .querySelectorAll("#challenge-content select")
    .forEach(select => {
      select.disabled = true;
    });

  document
    .querySelectorAll("#challenge-content input")
    .forEach(input => {
      input.disabled = true;
    });


  const answeredCaseIndex = currentCaseIndex;

  setTimeout(() => {
    const currentState =
      caseStates[answeredCaseIndex];

    if (
      !currentState ||
      currentCaseIndex !== answeredCaseIndex
    ) {
      return;
    }


    if (
      currentState.currentIndex <
      currentState.order.length - 1
    ) {
      currentState.currentIndex++;

      currentState.hintUsedForCurrent = false;
      currentState.selectedChoice = null;

      if (
        !screens.case.classList.contains("hidden")
      ) {
        renderCurrentChallenge();
      }

      return;
    }


    currentState.solved = true;
    solved.add(answeredCaseIndex);

    showToast(
      `CASE ${String(caseItem.id).padStart(2, "0")} CLOSED`
    );

    if (solved.size === cases.length) {
      showResult();
    } else {
      renderDashboard();
      showScreen("dashboard");
    }
  }, 2000);
}

$("hint-button").addEventListener("click", () => {
  if (screens.case.classList.contains("hidden")) {
    return;
  }

  const state = caseStates[currentCaseIndex];

  if (!state || state.solved) return;

  const question = state.order[state.currentIndex];

  if (!state.hintUsedForCurrent) {
    state.hintUsedForCurrent = true;
    hintsUsed++;

    score = Math.max(0, score - 5);

    updateScoreDisplays();

    playSoundEffect("hint");

    showToast("Hint used: -5 points.");
  }

  setFeedback(
    "HINT: " + question.hint,
    "neutral"
  );
});


function showResult() {
  $("final-score").textContent =
    String(score).padStart(3, "0");

  $("final-rank").textContent = rankFor(score);

  $("final-files").textContent =
    `${solved.size} / ${cases.length}`;

  $("final-hints").textContent = hintsUsed;

  updateCaseCounts();

  showScreen("result");

  if (!resultShown) {
    resultShown = true;

    stopAmbientMusic();
    playSoundEffect("victory");
  }
}


$("start-form").addEventListener("submit", event => {
    event.preventDefault();

    const name = safeName($("player-name").value);

    if (!name) {
        showToast("Enter a detective codename to continue.");
        $("player-name").focus();
        return;
    }

    $("player-name").value = name;

    startGame(name);
});


$("back-dashboard").addEventListener("click", () => {
  renderDashboard();
  showScreen("dashboard");

  playSoundEffect("click");
});

$("reset-game").addEventListener("click", () => {
  const confirmed = confirm(
    "Reset all investigation progress and start over?"
  );

  if (confirmed) {
    $("player-name").value = playerName;
    startGame(playerName);
  }
});

$("play-again").addEventListener("click", () => {
  $("player-name").value = playerName;
  startGame(playerName);
});

$("review-files").addEventListener("click", () => {
  renderDashboard();
  showScreen("dashboard");

  playSoundEffect("click");
});

createSoundButton();
updateCaseCounts();
