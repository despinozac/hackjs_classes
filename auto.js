(function(){
  console.log("¿Hola Cómo estas? Soy una function autoinvocada");
})();

var blah = function(x,y){
  return x - y;
};

console.log(blah(665,667));

(function(x){
  console.log(Math.sqrt(x));
})(25);
