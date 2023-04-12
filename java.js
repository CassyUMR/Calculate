//La funcion de sumar:

function sumar() {

    //Primer numero a sumar:
    var numero1 = document.getElementById('numero1').value
    numero1 = parseInt(numero1)

    //segundo numero a sumar:
    var numero2 = document.getElementById('numero2').value
    numero2 = parseInt(numero2)
    //Ahora sumamos ambos numeros
    var result = numero1 + numero2

    document.getElementById('cont1').innerHTML = (result)
}
function restar() {

    //Primer numero a sumar:
    var numero1 = document.getElementById('numero1').value
    numero1 = parseInt(numero1)

    //segundo numero a sumar:
    var numero2 = document.getElementById('numero2').value
    numero2 = parseInt(numero2)
    //Ahora sumamos ambos numeros
    var result = numero1 - numero2

    document.getElementById('cont1').innerHTML = (result)
}
function multiplicar() {

    //Primer numero a sumar:
    var numero1 = document.getElementById('numero1').value
    numero1 = parseInt(numero1)

    //segundo numero a sumar:
    var numero2 = document.getElementById('numero2').value
    numero2 = parseInt(numero2)
    //Ahora sumamos ambos numeros
    var result = numero1 * numero2

    document.getElementById('cont1').innerHTML = (result)
}

function dividir(){

//Primer numero a sumar:
var numero1 = document.getElementById('numero1').value
numero1 = parseInt(numero1)

//segundo numero a sumar:
var numero2 = document.getElementById('numero2').value
numero2 = parseInt(numero2)
//Ahora sumamos ambos numeros
var result = numero1 / numero2

document.getElementById('cont1').innerHTML=(result)
}