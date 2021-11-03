function calculateRectangleArea(L, l) {
  return L * l;
}

console.warn(
  `Folosind functei calculateRectangleArea() afiseaza suprafata unui dreptunghi de 4 pe 3`,
);
console.log(calculateRectangleArea(4, 3));

console.warn(
  `Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.`,
);
const rectangle1Surface = calculateRectangleArea(5, 3);
const rectangle2Surface = calculateRectangleArea(3, 2);
console.log(rectangle1Surface);
console.log(rectangle2Surface);
console.log(rectangle1Surface + rectangle2Surface);

console.warn(
  `Calculeaza intr-o variabila numita squareSurface aria unui patrat de 3 pe 3 si afiseaza-i valoarea in consola`,
);
function calculateSquareArea(l, l) {
  return l * l;
}
const squareSurface = calculateSquareArea(3, 3);
console.log(squareSurface);

console.warn(
  `Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 12 pe 9`,
);
const rectangleArea = calculateRectangleArea(12, 9);
console.log(rectangleArea);

console.warn(`Afiseaza suprafata totala a trei dreptunghiuri de 15 pe 31,  8 pe 9, respectiv 10 pe 5.
 Foloseste variabile.`);
const rectangleSurface1 = calculateRectangleArea(15, 31);
const rectangleSurface2 = calculateRectangleArea(8, 9);
const rectangleSurface3 = calculateRectangleArea(10, 5);
const rectangleTotalSurface =
  rectangleSurface1 + rectangleSurface2 + rectangleSurface3;
console.log(rectangleTotalSurface);

console.warn(
  `Calculeaza intr-o variabila numita anotherSquare aria unui patrat de 8 pe 8.`,
);
const anotherSquare = calculateSquareArea(8, 8);
console.log(anotherSquare);
