var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener(
  "click",
  function(){
  alert('Hola! Soy el div');
});

button.addEventListener(
  "click",
  function(event){
    event.stopPropagation();
    alert('Hola!');
});









