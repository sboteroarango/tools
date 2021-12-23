// DISCOUNTS
function calculateFinalValue(){
    actualPrice = Number(document.getElementById("precioActual").value)
    discount = Number(document.getElementById("porcentajeDescuento").value)
    document.getElementById("respuesta").innerText= "Final Price: " +(actualPrice*(100-discount))/100
}
// BMI
function calculateBMI(){
    weight = Number(document.getElementById("peso").value)
    height = Number(document.getElementById("estatura").value)
    document.getElementById("respuesta").innerText= "Body Mass Index: " +(weight/(height**2)).toFixed(1)
}
// PASSWORD GENERATOR
function generatePassword(){
    listaMayúsculas = ['A','B','C','D','E','F','G','H','I','J','Q','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    listaMinúsculas = ['a','b','c','d','e','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    listaEspeciales = ['!',"#","$","(",")","*","+","-","¿","?"]
    listaNúmeros = ['1','2','3','4','5','6','7','8','9','10']
    mayúsculas = Number(document.getElementById("mayúsculas").value)
    minúsculas = Number(document.getElementById("minúsculas").value)
    números = Number(document.getElementById("números").value)
    especiales = Number(document.getElementById("especiales").value)
    respuesta = document.getElementById("respuesta")
    contraseña = ''
    if(mayúsculas<0 || minúsculas<0 || números<0 || especiales<0){
        respuesta.innerText  = "do not use negative numbers"
    }else{
        for (let index = 0; index < mayúsculas; index++) {
            contraseña += listaMayúsculas[Math.floor(Math.random() * (listaMayúsculas.length))];
        }
        for (let index = 0; index < minúsculas; index++) {
            contraseña += listaMinúsculas[Math.floor(Math.random() * (listaMinúsculas.length))];
        }
        for (let index = 0; index < números; index++) {
            contraseña += listaNúmeros[Math.floor(Math.random() * (listaNúmeros.length))];
        }
        for (let index = 0; index < especiales; index++) {
            contraseña += listaEspeciales[Math.floor(Math.random() * (listaEspeciales.length))];
        }
        contraseña = contraseña.split('').sort(function(){return 0.5-Math.random()}).join('');
        respuesta.innerText = contraseña
    }
}