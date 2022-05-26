document.getElementById('buttonImc').addEventListener('click', showImc);
document.getElementById('closeImc').addEventListener('click', closeImc);




function showImc() {
    document.getElementById('showImc').style.display = 'block';
}

function closeImc() {
    document.getElementById('showImc').style.display = 'none';
}

document.querySelector('button').addEventListener('click', calculoImc);



function calculoImc() {
    let peso = document.querySelector('#peso').value; //puxa o valor do input peso e armazena o valor
    console.log(peso);
    let altura = document.querySelector('#altura').value; //puxa o valor do input altura e armazena o valor
    console.log(altura);
    let imc = peso / (altura * altura); // fórmula de cálculo imc

    if (imc < 18) {
        alert("imc:  " + imc + "  Abaixo do peso")

    }
    if (imc < 25 && imc >= 18) {
        alert("imc:  " + imc + "  Peso Normal")


    }
    if (imc >= 25) { // caso o imc seja maior ou igual a 25 imprime "Acima do peso"
        alert("imc:  " + imc + "  Acima do peso")


    }
}