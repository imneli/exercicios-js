function mostrarTabuada() {
    const numero = document.getElementById('numero');
    const resultado = document.getElementById('resultado');
    resultado.innerText = "";

    for (let i = 1; i <= 10; i++) {
        const div = document.createElement("div");
        div.innerText = numero.value * i;

        resultado.appendChild(div);

}
}

function showAge() {
    const age = document.getElementById('age');
    const result = document.getElementById('resultAge');
    result.innerText = "";


    data = [1,2,3,4,5,6,7,8,9,0]

    const div = document.createElement("div");
    div.innerText = `O seu ano de nascimento é: ${2024 - age.value}`
    result.appendChild(div);

    if (age.value == "") {
       hideAge(div)
       console.log("funcionou")
    } 

    if (age.value = arr[data]) {
        console.log("abc")
    }


}

function hideAge(element) {
    element.innerText = ""
}


