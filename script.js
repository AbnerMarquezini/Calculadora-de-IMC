function calcularImc(){
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var imc = (peso / ((altura/100) * (altura/100))).toFixed(2);
    var res = document.getElementById('res');
    var pos = document.getElementById('pos');

    res.textContent = `O seu IMC é ${imc}`;

    let classificar = '';

    if(imc>=40){
        classificar = "Você está classificado em Obesidade III.";
        pos.textContent = classificar;
    } else if(imc<40 && imc>=35){
        classificar = "Você está classificado em Obesidade II.";
        pos.textContent = classificar;
    } else if(imc<35 && imc>=30){
        classificar = "Você está classificado em Obesidade I.";
        pos.textContent = classificar;
    } else if(imc<30 && imc>=25){
        classificar = "Você está classificado em Sobrepeso.";
        pos.textContent = classificar;
    } else if(imc<25 && imc>=18.6){
        classificar = "Você está classificado em Peso Normal.";
        pos.textContent = classificar;
    } else {
        classificar = "Você está classificado em Abaixo do peso.";
        pos.textContent = classificar;
    }
}

function limpar() {
    var altura = document.getElementById('altura');
    var peso = document.getElementById('peso');
    altura.value = '';
    peso.value = '';
}