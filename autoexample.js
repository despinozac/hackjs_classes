var imgs = document.getElementsByTagName('img');

for(var i = 0; i < imgs.length; i++){
  imgs[i].addEventListener('mouseover', function(event){
    event.preventDefault();
    console.log('Numero: ', i);
  },'false');
}

//Better

var imgs = document.getElementsByTagName('img');

for(var i = 0; i < imgs.length; i++){
  (function(img){
    imgs[i].addEventListener( 'mouseover', function(e){
      e.preventDefault();
      console.log('Numero:', img);
    }, 'false');
  })(i);
}
var Person = (function(){

  return Person;
});

Object.create //es6

Person.prototype.metodo = function(x){

};
var Person = {
  "asd": "asdsad";
}
