console.log(`
    Dragos este instructor de programare. Dragos studiaza JavaScript de la 17 ani.
    Cand Dragos a absolvit facultatea si-a facut licenta in JavaScript.
    Dragos are si un master in tehnologii internet.
    Dragos este instructor Pixellab si preda JavaScript acolo.
`);

person = {
  firstName: 'Natalie',
  lastName: 'Portman',
  email: 'natiport@gmail.com',
  birthYear: 1986,
  pets: [
    {
      name: 'Kitty',
      species: 'cat',
      age: 3,
    },
    {
      name: 'Doggo',
      species: 'dog',
      age: 2,
    },
    {
      name: 'Pixie',
      species: 'fish',
      age: 1,
    },
  ],
  zipCode: '45678',
};

console.warn(`
Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale.”.
Nu uita de proprietatea length a arrayului pets.
`);
console.log(
  `Numele meu este: ${person.firstName} si ${person.lastName} si am ${person.pets.length} animale.`,
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);
console.log(`Am acelasi email din copilarie: ${person.email}.`);

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);
console.log(
  `Unul din cele ${person.pets.length} animale ale mele este ${person.pets[1].species} si are ${person.pets[1].age} ani.`,
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.`,
);
console.log((2021 - person.pets[2].age).toString());

console.warn(
  `Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul
  de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent. `,
);
var difference = 2021 - person.birthYear - person.pets[0].age;
console.log(difference.toString());

console.warn(
  `Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName. `,
);
var petName = person.pets[0].name;

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);
console.log(
  `Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani.`,
);

console.warn(`Afiseaza propozitia “ firstName, pet1, pet2, pet3
locuiesc toti in aceeasi casa”
(folosind bracket notation pe arrayul pets)`);

var showProp01 = document.getElementById('prop01');

prop01 = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa.`;
showProp01.innerText = prop01;

console.warn(
  `Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 `,
);

var showProp02 = document.getElementById('prop02');

prop02 = person.pets[0].age - person.pets[2].age;
showProp02.innerText = prop02;

console.warn(
  `Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”`,
);

var showProp03 = document.getElementById('prop03');

prop03 = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`;
showProp03.innerText = prop03;

console.warn(
  `Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea. `,
);

var showProp04 = document.getElementById('prop04');
var age1 = 2021 - person.pets[0].age;
var age2 = 2021 - person.pets[1].age;
var age3 = 2021 - person.pets[2].age;

prop04 = `Animalele mele s-au nascut in ${age1}, ${age2}, respectiv ${age3}.`;
showProp04.innerText = prop04;
