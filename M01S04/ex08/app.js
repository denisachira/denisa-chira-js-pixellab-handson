// var i = 1;

// while (i <= 99) {
//   console.log(i);
//   i = i + 1;
// }

// var i = 1;

// while (i < 100) {
//   if (i > 50) {
//     break;
//   }
//   console.log(i);
//   i = i + 1;
// }

// var i = 1;
// while (i <= 67) {
//   console.log(i);
//   i++;
// }

// var i = 1;
// while (i <= 66) {
//   if (i > 12) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// console.warn(
//   `Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv). `,
// );
// var i = 1;
// while (i <= 32) {
//   i++;
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

console.warn(`Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara
apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.`);

var i = 5;
var testNumber = prompt('introdu un numar');
var upperLimit = prompt('introdu limita superioara');

while (i < upperLimit) {
  i++;
  if (i % 5 !== 0) {
    continue;
  }
  console.log(i);
}
