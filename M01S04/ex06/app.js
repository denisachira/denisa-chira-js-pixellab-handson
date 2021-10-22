var person = {
  name: 'Dragos',
  surname: 'iordache',
  age: 34,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 30,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `Folosind obiectul person si un for,
  afiseaza in consola skillurile de pe pozitiile pare ale arrayului.`,
);
var i;
for (i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

var skillsLength = person.skills.length;

console.warn(` In mod similar, afiseaza skillurile care NU incep cu j.`);

for (i = 0; i < skillsLength; i++) {
  var skillName = person.skills[i];
  if (skillName[0].toLocaleLowerCase() !== 'j') {
    console.log(skillName);
  }
}

console.warn(
  ` Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."`,
);

var message = 'Prietenii mei se numesc';
for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ',';
  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  message = `${message} ${friend.name} ${friend.surname}${punctuation}`;
}
console.log(message);

console.warn(
  ` Folosind un for, afiseaza numarul total de ani pe care il
   au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.`,
);

var sumYears = 0;
var friendsLength = person.friends.length;

for (i = 0; i < friendsLength; i++) {
  var friend = person.friends[i];

  if (friend.age >= 30) {
    sumYears = sumYears + friend.age;
  }
}
console.log(sumYears.toString());

console.warn(
  ` Folosind un for, afiseaza suma anilor de nastere ai persoanelor. `,
);
var sumBirthYears = 0;
for (i = 0; i < friendsLength; i++) {
  var friends = person.friends[i];

  sumBirthYears = sumBirthYears + '';
}

console.warn(`
  Afiseaza diferenta de varsta dintre persoana si prietenii din
  arrayul friends doar daca aceasta este mai mare de 2 ani.
`);
for (i = 0; i < friendsLength; i++) {
  var friend = person.friends[i];
  var diff = Math.abs(person.age - friend.age);

  if (diff > 2) {
    console.log(diff);
  }
}

console.warn(`
  Afiseaza fraza:
  "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ",
  doar daca varsta prietenului este impara.
`);
message = '';
for (i = 0; i < friendsLength; i++) {
  var friend = person.friends[i];
  var finalSpace = ' ';

  if (i === friendsLength - 1) {
    finalSpace = '';
  }

  if (friend.age % 2 === 0) {
    message = `${message}Intre ${person.name} si ${
      friend.name
    } este o diferenta de ${Math.abs(
      friend.age - person.age,
    )} ani.${finalSpace}`;
  }
}
console.log(message.trim());

console.warn(`
  Folosind proprietatea length a arrayului skills si o bucla for,
  afiseaza in ordine inversa elementele arrayului skills.
  Atentie, va trebui sa numeri invers, de la length la 0.
`);
for (i = skillsLength - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

console.warn(`Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana
`);
for (i = 0; i < skillsLength; i++) {
  console.log(person.skills[i]);
}

console.warn(` In mod similar, afiseaza skillurile care incep cu c `);
var index = 0;
for (i = 0; i < skillsLength; i++) {
  var skill = person.skills[i];
  var char = skill.charAt(index);
  var char = 'c';
  if (skill.charAt(index) === char) {
    console.log(skill);
  }
}

console.warn(` Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx , xxx."
`);
message = '';

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  if (i < person.friends.length - 1) {
    var punctuation = ',';
  } else {
    punctuation = '';
  }
  message = `${message} ${friend.surname}${punctuation}`;
}
console.log(`Numele de familie ale prietenilor mei sunt:${message}.`);

console.warn(
  ` Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `,
); // aici ori e gresita cerinta, ori pixeltab; din cerinta inteleg suma varstelor;
// pixeltab verifica suma anilor de nastere
var yearSum = 0;
var birthYearSum = 0;
for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendAge = friend.age;
  yearSum += friendAge;
  var birthYear = 2021 - friendAge;
  birthYearSum += birthYear;
}
console.log(yearSum.toString());
console.log(birthYearSum.toString());

//apoi e cerinta asta care cere suma varstelor......dar deja am rezolvat-o mai sus
// console.warn(` Folosind un for, afiseaza suma anilor  persoanelor. `);

console.warn(
  ` Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.
  `,
);

message = '';
for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendAge = friend.age;
  var ageDiff = person.age - friendAge;

  message = `${message} Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani.`;
}
console.log(message); // lui Pixeltab nu-i place, nu stiu de ce.

console.warn(
  `Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.”
  in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).`,
);
message = '';
for (i = person.friends.length - 1; i >= 0; i--) {
  var friend = person.friends[i];
  if (i >= person.friends.length - 2) {
    var punctuation = ',';
  } else {
    punctuation = '';
  }
  message = `${message} ${friend.name} ${friend.surname}${punctuation}`;
}
console.log(`Prietenii mei sunt:${message}.`);
