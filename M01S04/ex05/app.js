var i;
var testNumber = prompt('introdu un numar');
var upperLimit = prompt('introdu limita superioara');

for (i = 0; i <= upperLimit; i++) {
  console.log(i);

  if (i % testNumber !== 0) {
    //jump to next iteration
    continue;
  }

  console.log(`Acest numar este multiplu de ${testNumber}.`);
}
