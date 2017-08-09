const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return this.water/this.flour * 100;
  }
}

console.log("Flour: ",loaf.flour);
console.log('Water: ', loaf.water);
console.log("hydration: ", loaf.hydration());

prob2 = {
  foo: 'oof',
  bar: 'rab',
  fum: 'muf',
  quux: 'xuuq',
  spam: 'maps'
}

for (let key in prob2){
  console.log(`${key}: ${prob2[key]}`);
}

yumTime = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(yumTime.meals[3]);

coworkers = [
  {name: "Adam", job_title: "Apple picker", boss: "God"},
  {name: "Ben", job_title: "Banker", boss: "Jamie"},
  {name: "Charles", job_title: "Professor"}, 
]

for (let i=0; i<coworkers.length; i++){
  if (!coworkers[i].boss){
    console.log(`${coworkers[i].name} is a ${coworkers[i].job_title} and doesn't report to anybody.` )
  } else {
    console.log(`${coworkers[i].name} is a ${coworkers[i].job_title} and reports to ${coworkers[i].boss}.` )
  }
}

function decode(words){
  const cipher = {a:2, b:3, c:4, d:5};
  const wordsArray = words.split(' ');
  return wordsArray.map(word=>{
    if (cipher[word[0]]){
      return word[cipher[word[0]]-1];
    } else {
      return ' ';
    }
  }).join('');
}

console.log(decode('craft block argon meter bells brown croon droop'))


function createCharacter(name, nickname, race, origin, atk, def){
  return {
    name, nickname, race, origin, atk, def,

    describe() {
      console.log(`${name} is a ${race} from ${origin}.`);
    },
    
    evaluateFight(character) {
      let dmgDealt = 0, dmgReceived = 0;
      
      if (this.atk > character.def) {
        dmgDealt = this.atk - character.def
      }
      
      if (this.def < character.atk) {
        dmgReceived = character.atk - this.def;
      }
      
      console.log(`Your opponent takes ${dmgDealt} damage and you receive ${dmgReceived} damage.`);
    }
  };
}

// Create array of characters:

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

// Add character to array:

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-elf', 'Rivendell', 3, 5));

// Find character and call its `describe` method

characters.find(char => char.nickname === 'aragorn').describe();

// Create array of only hobbits:

const onlyHobbits = characters.filter(char => char.race === 'Hobbit');
console.log(onlyHobbits);

// Create array of only high attack characters:

const onlyHighAttack = characters.filter(char => char.atk > 5);
console.log(onlyHighAttack);

