var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(`Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
`);

person.pets.forEach(function (pet, index, pets) {
  console.log(`${pet.name}`);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor. `);
var petYearSum = 0;
var petsLength = person.pets.length;
for (i = 0; i < petsLength; i++) {
  var pet = person.pets[i];
  petYearSum += pet.age;
}
console.log(petYearSum);

console.warn(
  `Folosind forEach() afiseaza cate una pe linie propozitiile:
   “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`,
);
message = '';
person.pets.forEach(function (pet, index, pets) {
  message = `${pet.name} este ${pet.species} si are ${pet.age} ani.`;

  console.log(message);
});

console.warn(
  `Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani.
  Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).`,
);
var petsLength = person.pets.length;
var i = 0;
while (i < petsLength) {
  var pet = person.pets[i];
  var personAge = 2021 - person.birthYear;
  var ageDiff = personAge - pet.age;

  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${ageDiff} ani.`,
  );
  i++;
}

console.warn(
  `Folosind o bucla for afiseaza in ordine inversa numele animalelor din array
  sub forma de propozitii: “Animalul meu se numeste xxxx.”. `,
);
person.pets = person.pets.reverse();
var petsLength = person.pets.length;
for (i = 0; i < petsLength; i++) {
  var pet = person.pets[i];

  console.log(`Animalul meu se numeste ${pet.name}`);
}

console.warn(`Folosind o bucla for afla care este cel mai in varsta animal
si afiseaza propozitia: “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.”
`);

var personAge = 2021 - person.birthYear;
var i = 0;
var pet = person.pets[i];
var petAge = pet.age;
for (i = 0; i <= petAge; i++) {
  var max = Math.max(person.pets.map((pet) => pet.age));
  var oldestPet = person.pets.filter((pet) => pet.age == max);
  var ageDiff = personAge - petAge;
}
console.log(
  `${pet.name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

console.warn(
  `Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.`,
);
person.pets = person.pets.reverse();
message = '';
person.pets.forEach(function (pet, index) {
  if (index === person.pets.length - 2) {
    var punctuation = ' si';
  } else if (index <= person.pets.length - 2) {
    var punctuation = ',';
  } else {
    var punctuation = '.';
  }
  message = `${message} ${pet.species}${punctuation}`;
});
console.log('Am' + message);
