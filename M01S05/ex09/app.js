(function () {
  console.log('test');
})();

(() => {
  console.log('arrow function');
})();

(function (w) {
  console.log('....');

  w.myName = 'Tokyo';
})(window);
console.log(myName);
