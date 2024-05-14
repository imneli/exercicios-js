var novoParagrafo = document.createElement("p"); //create element
novoParagrafo.textContent = "teste"; // conteudo paragrafo

document.body.appendChild(novoParagrafo) // add no body

const button = document.getElementById("btn-log");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});





