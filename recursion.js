function fact(x){
  if (x >0) {
    if(x==0 || x==1){
      return 1;
    } else {
      return x * fact(x-1);
    }
  }
  return null;
}

console.log(fact(-1));
console.log(fact(5.2));
console.log(fact(50));
console.log(fact(150));
