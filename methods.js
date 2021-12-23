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