function onFormSubmit(){
    currentAge();
    regraDois();
    regraTres();
}

function currentAge(){
    var idadeAtual = document.getElementById("idade").value;
    window.alert("Idade digitada: " + idadeAtual + " anos.");
}

function regraDois(){
    var idadeAtual = document.getElementById("idade").value;
    var arrayRegraDois = [idadeAtual];
    for (let i = idadeAtual; i >= 0; i--) {
        arrayRegraDois.push(i);  
    }
    console.log(arrayRegraDois.length + " tamanho do array");
    arrayRegraDois.forEach((elemento, indice) => console.log("O item " + indice + " é " + elemento)); 
}

function regraTres(){
    var idadeAtual = document.getElementById("idade").value;
    var arrayRegra = [];
    for (let i = idadeAtual; i >= 0; i--) {
        arrayRegra.push(i);  
    }
    console.log(arrayRegra);
   
}



