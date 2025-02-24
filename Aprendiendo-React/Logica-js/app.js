const usuarios = [
  {name: 'yhon', age: 17, game: "Dota 2"},
  {name: 'oscar', age: 17, game: "Leaguen of Leguen"},
]

function numerosRamdon(n){
  let numeros = Math.floor(Math.random() * (n + 1))
  let numeros1 = Math.floor(Math.random() * (n + 1))
  let numeros2 = Math.floor(Math.random() * (n + 1))
  let numeros3 = Math.floor(Math.random() * (n + 1))
  let numeros4 = Math.floor(Math.random() * (n + 1))
  let arrayRamdon = [numeros,numeros1,numeros2,numeros3,numeros4]
  console.log(...arrayRamdon)
}
numerosRamdon(100)


let palabra = "A quien?"
let contenedor = []
for (letras of palabra){
  contenedor.push(letras)
}
console.log(...contenedor.reverse())


let array = [33,11,22,4,5,77,2,5,6,55]
let mayores10 = array.filter(num => num > 10)
//sirve para ordenar de mayor a menor
console.log(mayores10.sort((a, b) => b - a))


const personaje = [
  {
    name: 'felipe',
    age: 9
  },
  {
    name: 'pepe',
    age: 9
  },
  {
    name: 'batman',
    age: 9
  }
]


personaje.map(perso => {
  console.log(perso.name)
})
