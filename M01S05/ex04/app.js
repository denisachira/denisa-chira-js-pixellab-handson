const calculateRectangleArea = (L, l) => {
  return L * l;
};

console.warn(
  `Calculeaza suprafata de tapet necesara pentru o camera de 6 pe 4 m cu tavan inalt de 2.5m,
   stiind ca exista o usa de 2.2 pe 1.5 si o suprafata de ferestre de 2 pe 1.5.
  “Suprafata de tapet necesara este: xxx metri patrati.”`
);
const longWallSurface = calculateRectangleArea(2.5, 6);
const shortWallSurface = calculateRectangleArea(2.5, 4);
const totalWallSurface = longWallSurface * 2 + shortWallSurface * 2;
const doorSurface = calculateRectangleArea(2.2, 1.5);
const windowSurface = calculateRectangleArea(2, 1.5);
const requiredWallpaper = totalWallSurface - doorSurface - windowSurface;

console.log(`Suprafata de tapet este: ${requiredWallpaper} metri patrati.`);

console.warn(`Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea()
care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata acestuia.
O functie wrapper este o functie care “imbraca” o functie existenta
pentru a-i aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat capacitatile.`);

const calculateSquareArea = (L) => {
  const squareArea = calculateRectangleArea(L, L);

  return squareArea;
};

console.warn(
  `Calculeaza suprafata de tapet necesara pentru o camera de 12 pe 9 m cu tavan inalt de 2.5m,
  stiind ca exista o usa de 3 pe 2 si o suprafata de ferestre de 3 pe 2.
  “Suprafata de tapet necesara este xxx metri patrati.”`
);
const longWallSurface1 = calculateRectangleArea(12, 2.5);
const shortWallSurface1 = calculateRectangleArea(9, 2.5);
const totalWall = longWallSurface1 * 2 + shortWallSurface1 * 2;
const door1Surface = calculateRectangleArea(3, 2);
const window1Surface = calculateRectangleArea(3, 2);
const requiredWallpaper1 = totalWall - door1Surface - window1Surface;
console.log(
  `Suprafata de tapet necesara este: ${requiredWallpaper1} metri patrati.`
);

console.warn(`Creaza o functie wrapper pentru calculateRectangleArea() care sa primeasca 4 parametrii:
latimea si lungimea unui dreptunghi initial, apoi latimea si lungimea altui dreptunghi.
Functia se va numi aggregateSurfaceArea().`);
const aggregateSurfaceArea = (L, l, a, b) => {
  const surfaceArea1 = calculateRectangleArea(L, l);
  const surfaceArea2 = calculateRectangleArea(a, b);
  const surfaceArea = surfaceArea1 + surfaceArea2;
  return surfaceArea;
};

console.warn(
  `Folosind aceasta noua functie calculeaza suprafata totala a doua dreptunghiuri de 48 pe 92 si 51 pe 102. `
);

const surfaceArea1 = calculateRectangleArea(48, 92);
const surfaceArea2 = calculateRectangleArea(51, 102);
const surfaceArea = surfaceArea1 + surfaceArea2;
console.log(surfaceArea);
