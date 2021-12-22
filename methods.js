// DISCOUNTS
function calcularValorFinal(){
    actualPrice = Number(document.getElementById("precioActual").value)
    discount = Number(document.getElementById("porcentajeDescuento").value)
    document.getElementById("respuesta").innerText= "Final Price: " +(actualPrice*(100-discount))/100
}
