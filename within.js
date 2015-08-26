//Inception

function x(){

  var y = function(){
    console.log("Hola mundo");
    //return 3;
  };

  console.log("Epale");
  return y;
};

console.log(x());
console.log(x()());
console.log(x()()());
