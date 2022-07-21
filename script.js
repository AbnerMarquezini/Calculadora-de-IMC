function calcularImc(){
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var imc = (peso / (altura * altura)).toFixed(2);
    var res = document.getElementById('res');
    var pos = document.getElementById('pos');

    res.textContent = `O seu IMC é ${imc}`;
}