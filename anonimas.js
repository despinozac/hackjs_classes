//Look don't have any name

function isOdd(x){
  if (x % 2 != 0) {
    return  true;
  } else {
    return false;
  }
}

var isEven = function(x){
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

var sum = function(x,y){
  return x + y;
};

var suma = sum;

var sumapordios = suma;

console.log(isEven(10));
console.log(isOdd(11));
console.log(sum(665, 667));
console.log(suma(1,2));
console.log(sumapordios(5,7));
