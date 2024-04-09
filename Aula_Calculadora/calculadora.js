function calculadora() {
    const operacao = Number(prompt("Escolha uma opção: \n 1- soma (+) \n 2 - subtracao (-) \n 3 - multiplicacao (*) \n 4 - divisao real (/) \n 5 - divisao inteira (%) \n 6 - potenciacao (**)"));
  
    if (!operacao || operacao >= 7) {
      alert('erro - insira um numero entre 1 e 6');
      calculadora();
    } else {
      let n1 = Number(prompt('Insira o primeiro valor: '));
      let n2 = Number(prompt('Insira o segundo valor: '));
      let resultado;
  
      if (!n1 || !n2) {
        alert('erro - parametros invalidos');
        calculadora();
      } else {
        function soma() {
          resultado = n1 + n2;
          alert(`${n1} + ${n2} = ${resultado}`);
          novaOperacao();
        }
        function subtracao() {
          resultado = n1 - n2;
          alert(`${n1} - ${n2} = ${resultado}`);
          novaOperacao();
        }
        function multiplicacao() {
          resultado = n1 * n2;
          alert(`${n1} * ${n2} = ${resultado}`);
          novaOperacao();
        }
        function divisaoReal() {
          resultado = n1 / n2;
          alert(`${n1} / ${n2} = ${resultado}`);
          novaOperacao();
        }
        function divisaoInteira() {
          resultado = n1 % n2;
          alert(`O resto da divisao inteira entre ${n1} e ${n2} = ${resultado}`);
          novaOperacao();
        }
        function potenciacao() {
          resultado = n1 ** n2;
          alert(`${n1} elevado a ${n2} = ${resultado}`);
          novaOperacao();
        }
        function novaOperacao() {
          let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim \n 2 - Não');
  
          if (opcao == 1) {
            calculadora();
          } else if (opcao == 2) {
            alert('Até mais!');
          } else {
            alert('Digite uma opção valida');
            novaOperacao();
          }
        }
  
        switch (operacao) {
          case 1:
            soma();
            break;
          case 2:
            subtracao();
            break;
          case 3:
            multiplicacao();
            break;
          case 4:
            divisaoReal();
            break;
          case 5:
            divisaoInteira();
            break;
          case 6:
            potenciacao();
            break;
        }
      }
    }
  }
  
  calculadora();