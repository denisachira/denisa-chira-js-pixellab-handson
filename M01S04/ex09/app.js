// var i = 101;

// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// console.warn(`Modifica exemplul astfel incat bucla sa
// numere de la 1 la 100 `);
// var i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// console.warn(
//   `Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100)`,
// );
// var i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i < 100);

// console.warn(
//   `Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).`,
// );
// var i = 1;
// do {
//   console.log(i);
//   i++;
//   if (i > 50) {
//     break;
//   }
// } while (i < 100);

// console.warn(`Modifica exemplul astfel incat bucla sa
// numere de la 1 la 52 `);
// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 52);

// console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 51.`);
// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 52);

// console.warn(
//   `Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)`,
// );
// var i = 1;
// do {
//   console.log(i);
//   i++;
//   if (i > 12) {
//     break;
//   }
// } while (i < 52);

// console.warn(
//   `Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32. `,
// );
// var i = 8;
// do {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// } while (i < 32);

console.warn(`Folosind metoda prompt de trei ori cere utilizatorului un numar,
o limita inferioara si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara
si limita superioara introduse.`);

// var i = 0;

var testNumber = prompt('Introdu un numar');
var lowerLimit = prompt('Introdu limita inferioara');
var upperLimit = prompt('Introdu limita superioara');
var i = lowerLimit;
do {
  if (i % testNumber === 0) {
    console.log(i);
  }
  i++;
} while (i < upperLimit);

// do {
//   i++;
//   if (i < lowerLimit) {
//     continue;
//   }
//   if (i >= testNumber && i % testNumber === 0) {
//     console.log(i);
//   }
// } while (i < upperLimit);
