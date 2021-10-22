// var i;

// for (i = 0; i <= 100; i++) {
//   console.log(i);
// }

// var i;

// for (i = 0; i < 100; i++) {
//   console.log(i);

//   if (i >= 50) {
//     break;
//   }
// }

// Folosind keywordul continue afiseaza doar numerele pare intre 1 si 100 (inclusiv 100).

// var i;
// for (i = 0; i <= 4; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

//v2

// var i;
// for (i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

var i;
for (i = 0; i <= 100; i++) {
  if (i % 5 !== 0) {
    continue;
  }
  console.log(i);
}
