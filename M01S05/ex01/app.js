const date = new Date();
const hh = date.getHours();
const mm = date.getMinutes();
const ss = date.getSeconds();
const ms = date.getMilliseconds();

console.log(
  `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`,
  `Am ajuns la Pixellab`,
);

console.log(`${hh}:${mm}:${ss}:${ms}`, `Am ajuns la Pixellab`);

// function getTime() {
//   let exactTime = '';
//   const date = new Date();

//   exactTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

//   return exactTime;
// }

//v2
function getTime() {
  const date = new Date();

  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
}
console.log(`${getTime()}, am ajuns la pixellab`);

const paragraph = document.createElement('p');
paragraph.innerText = getTime();

document.body.append(paragraph);

setInterval(function () {
  paragraph.innerText = getTime();
}, 1000 * 1);
