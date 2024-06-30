const enviar = document.getElementById('enviar');






const operacoes = {
    'c-f': (n) => (n * 9/5) + 32,
    'f-c': (n) => (n - 32) * 5/9,
    'k-c': (n) => n - 273.15,
    'c-k': (n) => n + 273.15,
    'f-k': (n) => (n - 32) * 5/9 + 273.15,
    'k-f': (n) => (n - 273.15) * 9/5 + 32,
};
  
  function calculo(numeros){

    var select = document.querySelector('#selecionePrimeiro')
    var select2 = document.querySelector('#selecioneSegundo')
    var indice1 = select.value
    var indice2 = select2.value
    console.log("primeiro " + indice1);
    console.log("segundo " + indice2);
  
    const n1 = parseFloat(numeros.primeiroValor);
    const segundo = document.querySelector('#segundo');
  
    const operacao = `${indice1}-${indice2}`;
    if (operacoes.hasOwnProperty(operacao)) {
      const resultado = operacoes[operacao](n1);
      segundo.textContent = resultado.toFixed(1);
    } else if (indice1 === indice2) {
      segundo.textContent = n1;
    }
  }



enviar.addEventListener('click', function(e){
    e.preventDefault();
    var form = document.querySelector('#form');
    var dados = pegaDados(form)
    mandaDados(dados)
    calculo(dados)
    // comprimentoCalc(dados)
})

function mandaDados(numeros){
    console.log(numeros.primeiroValor)
    console.log(numeros.segundoValor)
}

function pegaDados(form){
    var numeros = {
        primeiroValor: form.primeiroValor.value,       
    }

    return numeros;
}

