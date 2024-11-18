//Declarations
const btn = document.querySelector('#random-Btn');
const quote = document.querySelector('#quote-text');
const person = document.querySelector('#person-text');

const famousQuotes = 
[
  { 
    quote: "Wojna to kontynuacja polityki innymi środkami.", 
    person: "Carl von Clausewitz" 
  },
  { 
    quote: "Żaden plan nie przetrwa kontaktu z wrogiem.", 
    person: "Helmuth von Moltke" 
  },
  { 
    quote: "Największą sztuką jest pokonanie wroga bez walki.", 
    person: "Sun Zi" 
  },
  { 
    quote: "Dowódca musi być jak ojciec dla swoich żołnierzy.", 
    person: "Aleksander Wielki" 
  },
  { 
    quote: "Fortuna sprzyja odważnym.", 
    person: "Juliusz Cezar" 
  },
  { 
    quote: "Lepszy zły plan z dobrą egzekucją niż dobry plan bez działania.", 
    person: "George S. Patton" 
  },
  { 
    quote: "Wojna jest matką wszystkich rzeczy.", 
    person: "Heraklit z Efezu" 
  },
  { 
    quote: "Wszystko w wojnie jest proste, ale najprostsze rzeczy są trudne.", 
    person: "Carl von Clausewitz" 
  },
  { 
    quote: "Prędkość jest esencją wojny.", 
    person: "Sun Zi" 
  },
  { 
    quote: "Armia marszuje na żołądku.", 
    person: "Napoleon Bonaparte" 
  },
  { 
    quote: "Nie sztuką jest walczyć z bohaterami, sztuką jest wygrać z nimi.", 
    person: "Aleksander Suworow" 
  },
  { 
    quote: "Najlepszy generał to ten, kto zwycięża bez rozlewu krwi.", 
    person: "Saladin" 
  },
  { 
    quote: "Siła i strategia razem tworzą zwycięstwo.", 
    person: "Hannibal" 
  },
  { 
    quote: "Strach to najgorszy wróg w każdej bitwie.", 
    person: "George S. Patton" 
  },
  { 
    quote: "Żołnierze walczą z wrogiem, nie z bronią.", 
    person: "Norman Schwarzkopf" 
  },
  { 
    quote: "Nigdy nie poddawaj się. Nigdy, nigdy, nigdy.", 
    person: "Winston Churchill" 
  },
  { 
    quote: "Kiedy zaczyna się walka, najodważniejszy zawsze zwycięża.", 
    person: "Napoleon Bonaparte" 
  },
  { 
    quote: "Lojalność i dyscyplina to podstawy każdego zwycięstwa.", 
    person: "Aleksander Wielki" 
  },
  { 
    quote: "Każdy ma plan, dopóki nie dostanie w twarz.", 
    person: "Mike Tyson" 
  },
  { 
    quote: "Nie walczy się po to, by umrzeć za ojczyznę, lecz by wróg umarł za swoją.", 
    person: "George S. Patton" 
  },
  { 
    quote: "Wiedza to potęga, ale działanie to siła.", 
    person: "Napoleon Bonaparte" 
  },
  { 
    quote: "Tylko zmiana jest pewna w wojnie.", 
    person: "Sun Zi" 
  },
  { 
    quote: "Żołnierze wygrywają bitwy, generałowie wygrywają wojny.", 
    person: "George S. Patton" 
  },
  { 
    quote: "Czasami trzeba się cofnąć, by wygrać bitwę.", 
    person: "Napoleon Bonaparte" 
  },
  { 
    quote: "Najważniejszy jest wybór właściwego momentu do działania.", 
    person: "Sun Zi" 
  },
  { 
    quote: "Każde pole bitwy to miejsce, gdzie decydują się losy świata.", 
    person: "Napoleon Bonaparte" 
  }
];


//Event listeners
btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * famousQuotes.length);

    quote.textContent = famousQuotes[random].quote;
    person.textContent = famousQuotes[random].person;
    quote.classList.add('quote');
    person.classList.add('person');
})