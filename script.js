document.getElementById('buttonImc').addEventListener('click', showImc);
document.getElementById('closeImc').addEventListener('click', closeImc);
document.getElementById('calImc').addEventListener('click', calImc);

function showImc() {
    document.getElementById('showImc').style.display = 'block';
}

function closeImc() {
    document.getElementById('showImc').style.display = 'none';
}
function calImc() {
    let peso = document.querySelector('#pesoImc').value;
    let altura = document.querySelector('#alturaImc').value;
    let imc = peso / (altura * altura); 

    if(imc < 17) {
        alert('Muito abaixo do peso')
    }
    if(imc >= 17 && imc < 18.5) {
        alert('Abaixo do peso')
    }
    if(imc >= 18.5 && imc < 25) {
        alert('Peso normal')
    }
    if(imc >= 25 && imc < 30) {
        alert('Acima do peso')
    }
    if(imc >= 30 && imc < 35) {
        alert('Obesidade')
    }
    if(imc >= 35 && imc < 40) {
        alert('Obesidade II (severa)')
    }
    if(imc > 40) {
        alert('Obesidade III (mórbida)')
    }
}

// function calculoImc() {
//     let peso = document.querySelector('#peso').value; //puxa o valor do input peso e armazena o valor
//     console.log(peso);
//     let altura = document.querySelector('#altura').value; //puxa o valor do input altura e armazena o valor
//     console.log(altura);
//     let imc = peso / (altura * altura); // fórmula de cálculo imc

//     if (imc < 18) {
//         alert("imc:  " + imc + "  Abaixo do peso")

//     }
//     if (imc < 25 && imc >= 18) {
//         alert("imc:  " + imc + "  Peso Normal")


//     }
//     if (imc >= 25) { // caso o imc seja maior ou igual a 25 imprime "Acima do peso"
//         alert("imc:  " + imc + "  Acima do peso")


//     }
// }