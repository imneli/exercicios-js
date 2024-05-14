const btnLog = document.getElementById('btn');
btnLog.addEventListener('click', myFunction);
myFunction.preventDefault()

function myFunction() {
    const elementH3 = document.querySelector('h3');
    const elementP = document.querySelector('p');


    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);


    const currentValor = parseInt(elementH3.textContent);
    const newValor = currentValor + 1;
    const teste = `rgb (${r}, ${g}, ${b})`
    elementH3.textContent = newValor;
    elementP.textContent = teste

    

    


    if (newValor > currentValor) {
        elementP.style.color = `rgb(${r}, ${g}, ${b})`
    }
  }





