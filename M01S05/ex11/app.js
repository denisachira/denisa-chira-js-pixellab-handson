console.warn(
  `Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface. Daca primeste un parametru,
  sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi.
  Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.`,
);

function calculateSurface(L, l, h) {
  switch (arguments.length) {
    case 1:
      arguments.length === 1;
      return L ** 2;
      break;
    case 2:
      arguments.length === 2;
      return L * l;
      break;
    case 3:
      arguments.length === 3;
      return 2 * (L * l + L * h + l * h);
  }
}

console.warn(
  `Creeaza o functie numita calculateCircleArea() si
  afiseaza suprafata unor cercuri cu raza de 2, 20 si 16. `,
);
function calculateCircleArea(radius) {
  const area = radius * radius * Math.PI;

  console.log(area);
  return area;
}
calculateCircleArea(2);
calculateCircleArea(20);
calculateCircleArea(16);

console.warn(`Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si
afiseaza propozitia: “Animalul meu are petAge ani”
`);
const pet = {
  getName: () => {
    return 'Rex';
  },

  getSpecies: () => {
    return 'catel';
  },

  getAge: () => {
    return 7;
  },
};
console.log(``);

const accessor = (methodSuffix) => {
  const methodName = `get${methodSuffix}`;

  return pet[methodName]();
};
const name = accessor('Name');
const species = accessor('Species');
const age = accessor('Age');
console.log(`${name} este ${species} si are ${age} ani.`);

const petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);
