var div = document.querySelector("div");

const controller = new AbortController();

div.addEventListener(
  "click",
  function(){
    stopPropagation();
    alert('Hola! Soy el div');
});








