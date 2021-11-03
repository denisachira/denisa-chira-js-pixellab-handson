var car = {
  make: "Audi",
  color: "black",
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  popTrunk: function () {
    this.openTrunk();

    setTimeout(() => {
      this.closeTrunk();
    }, 5000);
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 1000);
  },
  topSpeed: 160,
  topReverseSpeed: -50,
  stop: function () {
    this.speed = 0;
  },
  setSpeed: function () {
    this.speed = 20;
  },
};

console.warn(`Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.".
`);
const carMake = car.make;
let carSpeed = car.speed;
console.log(`Masina era marca ${carMake} si se deplasa cu ${carSpeed}km/h.`);

console.warn(
  `Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".`
);
carSpeed = carSpeed - 5;
console.log(`Viteza noua este ${carSpeed}km/h.`);
