//closures

function setMIlitaryRank(rank){
  var r = rank;
  return function(name){
    return r + " " + name;
  };
}

var capitan = setMIlitaryRank("Captain");

console.log(capitan("Daniel"));
console.log(capitan("Alejandro"));
