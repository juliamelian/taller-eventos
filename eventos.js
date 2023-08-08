var div = document.querySelector("div");
console.log(div);

const controller = new AbortController();

div.addEventListener(
  "click",
  function(){
    alert('Hola! Soy el div');
},
  { signal: controller.signal },
);

controller.abort();





