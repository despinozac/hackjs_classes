//closures

function setMilitaryRank(rank){
  var r = rank;
  return function(name){
    return r + " " + name;
  };
}

var capitan = setMilitaryRank("Captain");
var soldier = setMilitaryRank("Soldier");
var comander = setMilitaryRank("Comander");

console.log(capitan("Daniel"));
console.log(capitan("Alejandro"));
console.log(soldier("Rafael"));
console.log(soldier("Matute"));
console.log(comander("Cielito"));
console.log(r);
