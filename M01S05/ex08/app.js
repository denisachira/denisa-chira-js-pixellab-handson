const button = document.getElementById('clicker');
const removeEventButton = document.getElementById('remove-event');
const querButton = document.getElementById('query');
const messageParagraph = document.getElementById('message');
console.warn(
  `Folosind codul de la exercitiul 08, numeste functia care ruleaza la click clickHandler si
  foloseste-i numele ca parametru al metodei addEventListener in locul celei anonime. `,
);
const clickHandler = () => {
  alert('Ai apasat butonul');
};
button.addEventListener('click', clickHandler);

// button.addEventListener('click', () => {
//   //merge si fara clickerHandler
//   alert('Ai apasat butonul');
// });

removeEventButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});

querButton.addEventListener('click', function () {
  const userAge = prompt('Ce varsta ai?');
  const message = `Ai ${userAge} ani`;

  console.log(message);
  messageParagraph.innerText = message;
});
