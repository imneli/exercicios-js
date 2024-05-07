function math_var() {

    let randomNum = Math.floor(Math.random() * 10 + 1)
    console.log(randomNum); //random num

    let roundedNum = Math.round(3.7); //arredondar sem especificar
    console.log(roundedNum);

    let roundedUpNum = Math.ceil(4.2); //arredondar pra cima
    console.log(roundedUpNum);

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1; //return permite q possa utilizar o valor de dentro p/ fora
    }

}

function playDiceGame() {
    let dice1 = rollDice();
    let dice2 = rollDice();


let total = dice1 + dice2;

console.log("Voce lançou os dados...");
setTimeout(function() {  //delay 3s
console.log("Dado 1:", dice1);
console.log("Dado 2:", dice2);
console.log("total:", total);

}, 3000);

}

// math_var();
// playDiceGame();


//info data
let data = new Date();
console.log(data)

//manipular datas

const data2 = new Date('2024-04-23');
data2.setDate(data2.getDate() + 7);
console.log(data2)

let diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
let diaDaSemana = diasDaSemana[dataAtual.getDay()];

console.log("Dia da semana: ", diaDaSemana)

function notas() {
    const cpjs = "30/04"
    const py = "22/04"
    let randomNum = Math.floor(Math.random() * 10 + 1)
    let randomNum2 = Math.floor(Math.random() * 10 + 1)
    console.log("Gerando notas...")
    setTimeout (function() {
    console.log("Nota CP JS:", `${randomNum}`, `\n${cpjs}`)
    console.log("Nota PY:", `${randomNum2}`, `\n${py}`)
}, 2000)
}

notas();
