var div = document.querySelector("div");

div.addEventListener(
  "click",
  function(){
    stopPropagation();
    alert('Hola! Soy el div');
});








