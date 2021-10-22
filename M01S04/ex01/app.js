// var value = window.prompt('Introdu o valoare');
// var messageParagraph = document.getElementById('message');
// var oddMessage = 'Numarul este impar.';
// var evenMessage = 'Numarul este par';
// var invalidInputMessage = 'Nu ai introdus un numar';

// value = Number(value);

// if (isNaN(value)) {
//   console.error(invalidInputMessage);
//   throw new error(invalidInputMessage);
// }
// console.log(`Valoarea este ${value}`);

// if (value % 2 === 0) {
//   messageParagraph.innerText = evenMessage;
// } else {
//   messageParagraph.innerText = oddMessage;
// }

var value = window.prompt('Introdu un numar');
var paragraphElement = document.getElementById('message');
var badInputMessage = 'Nu ai introdus un numar';
var testNumber = testNumber;

if (value === null) {
  value = NaN;
} else {
  if (value.trim().length <= 0) {
    value = NaN;
  }
}

value = Number(value);

if (isNaN(value) === false) {
  if (value < testNumber) {
    paragraphElement.innerText = `Numarul este mai mic decat ${testNumber}.`;
  } else if (value === testNumber) {
    paragraphElement.innerText = `Numarul este ${testNumber}`;
  } else {
    paragraphElement.innerText = `Numarul este mai mare decat ${testNumber}.`;
  }
} else {
  paragraphElement.innerText = badInputMessage;
}
