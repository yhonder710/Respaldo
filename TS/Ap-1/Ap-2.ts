const person = {
  name: "yhon",
  age: 20,
};

console.log(person);

//asi es el tipado en una funcion

function saludar({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name}, tienes ${age} age`);
}

saludar({ name: "yhonder", age: 21 });

// never and void
//never descarta la funtion
//void itnora la funtion
function message(message: string) {
  console.log(message);
}
message("hola juanito27");

//inferencias de  conttexto

const avenger = ["thor", "hulk", "iron man"];
avenger.forEach((avengers) => {
  console.log(avengers.toUpperCase());
});

// Union type
type HeroPowerScale = "local" | "planetary" | "galactic";

let p: string | number;
p = "asd";
console.log(p);

type Heroe = {
  name: string;
  age: number;
};

let heroe: Heroe = {
  name: 'thor',
  age: 1555
};
//asi se saca objetos del objetos
const {age } = heroe;

console.log(age);

//template union types
type HexadecimalColor = `#${string}`;
const color1: HexadecimalColor = "#0033ff";
const color2: HexadecimalColor = "#0033ff";

// type from value
const price = {
  num1: 1,
  num2: 2,
};

type Precio = typeof price;

const moneda: Precio = {
  num1: 2,
  num2: 4,
};

let array: string[] = [];
array.push["pelota"];
