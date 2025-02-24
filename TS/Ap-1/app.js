function calcularDescuento(precio, descuento) {
  if (descuento){
    return precio - (precio * descuento)
  }
  return precio
}

console.log(calcularDescuento(200, 0.5))


console.log((12.2 - 2.4).toLocaleString())

