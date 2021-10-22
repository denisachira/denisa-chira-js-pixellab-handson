var person = {
  name: 'denisa',
  surname: 'gabriela',
  age: 32,
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
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.
`);
person.skills.forEach(function (skill, i) {
  if (i % 2 !== 0) {
    console.log(i + ': ' + skill);
  }
});

console.warn(` In mod similar, afiseaza skillurile care contin litera a. `);
person.skills.forEach(function (skill, char) {
  var char = 'a';
  if (skill.includes('a') === true) {
    console.log(skill);
  }
});

console.warn(
  `Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."`,
);
var message = '';
person.friends.forEach(function (friend, index, friends) {
  if (index < person.friends.length - 1) {
    var punctuation = ',';
  } else {
    punctuation = '';
  }
  message = `${message} ${friend.name} ${friend.surname}${punctuation}`;
});
console.log('Prietenii mei se numesc' + message + '.');

console.warn(
  ` Folosind forEach, afiseaza numarul total de ani pe care
   il au persoanele din arrayul friends, doar daca au varsta
   mai mare decat 30 inclusiv.`,
);
var sumYears = 0;
person.friends.forEach(function (friend) {
  var age = friend.age;
  if (age >= 30) {
    sumYears = sumYears + age;
  }
});
console.log(sumYears.toString());

console.warn(` Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara.
`);
var sumBirthYears = 0;
person.friends.forEach(function ({ age }) {
  //Date()
  if (age % 2 === 0) {
    return;
  }

  var birthYear = 2021 - age;
  sumBirthYears += birthYear;
});
console.log(sumBirthYears.toString());

console.warn(` Afiseaza diferenta de varsta dintre
persoana si prietenii din arrayul friends daca aceasta
este mai mare sau egala cu 2 ani.`);

person.friends.forEach(function (friend) {
  var { age } = friend; //age = friend + age
  var ageDiff = Math.abs(person.age - age);

  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

console.warn(` Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "
  `);
var message = ' ';
person.friends.forEach(function (friend, index, friends) {
  var ageDiff = Math.abs(person.age - friend.age);
  var finalSpace = index === friends.length - 1 ? '' : ' ';

  message = `${message}Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani.${finalSpace}`;
});
console.log(message);

console.warn(` Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.
`);
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

console.warn(
  `Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.`,
);
person.skills.forEach(function (skill) {
  console.log(skill);
});

console.warn(` In mod similar, afiseaza skillurile care nu incep cu j.`);
person.skills.forEach(function (skill, index, char) {
  var index = 0;
  var char = skill.charAt(index);
  var char = 'j';
  if (skill.charAt(index) !== char) {
    console.log(skill);
  }
});

console.warn(
  ` Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."`,
); // pixeltab scrie Carol in loc de Carolson
var message = '';
person.friends.forEach(function (friend, index, friends) {
  if (index < person.friends.length - 1) {
    var punctuation = ', ';
  } else {
    punctuation = '';
  }
  message = `${message}${friend.surname}${punctuation}`;
});
console.log('Numele mari ale prietenilor mei sunt ' + message + '.');

console.warn(
  `Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `,
);
var sumYears = 0;
person.friends.forEach(function (friend) {
  var age = friend.age;
  sumYears += age;
});
console.log(sumYears.toString());

console.warn(`Folosind forEach, afiseaza suma anilor de nastere a persoanelor
`);
var sumBirthYears = 0;
person.friends.forEach(function (friend) {
  var birthYear = 2021 - friend.age;
  sumBirthYears += birthYear;
});
console.log(sumBirthYears.toString());

console.warn(
  `Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.`,
); //aici pixeltab imi cere cu prietenii in prdine inversa
//adica de la Carol, dar daca schimb si fac cum cere el, apoi imi cere sa scrie de la Larry
//I don't know...
message = '';
person.friends.forEach(function (friend, index, friends) {
  var ageDiff = Math.abs(person.age - friend.age);

  message = `${message}Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani. `;
});
console.log(message);

console.warn(
  ` Folosind metoda reverse si apoi forEach,
  afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.`,
);

person.friends.reverse().forEach(function (friend) {
  var friendName = friend.name;
  var friendSurname = friend.surname;
  console.log(`${friendName} ${friendSurname}`);
});

//ultimul rezultat din pixeltab "1" nu stiu la ce se refera....
