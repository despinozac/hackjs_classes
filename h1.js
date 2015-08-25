//forEach

var forEach = function(arr, f){
  for (var i = 0; i < arr.length; i++) {
    f(arr[i]);
  }
};

arrx = [1,2,3,4];

var map = function(arr, f){
  var arr_temp = [];
    forEach(arr,function(x){

    })
  return arr_temp;
};

forEach(map(arrx, function(x){
  return x * x;
}), function(x){
  console.log("El elemento es: " + x);
});

/*
var arr = [1,2,3,4,5];
var f = function(x){
  console.log(x * x);
};

forEach(arr, f);
*/
