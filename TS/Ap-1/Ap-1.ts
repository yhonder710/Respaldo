//-----------------type
type CellValue = 'X' | 'O' | ''

const board: [
  [CellValue,CellValue,CellValue],
  [CellValue,CellValue,CellValue],
  [CellValue,CellValue,CellValue],
] = [
  ['O','','X'],
  ['O','X',''],
  ['O','','']
]

//esto crea un tipo de array q sera el array por defecto
type RGB = readonly [number,number,number];

const red: RGB = [0,0,0]

//------------funtion

function sumar(a: number, b: number) {
  a + b
}

sumar(2, 2)

//------- funtion en linea

const suma = (a: number, b: number): number => {
  return a + b
}

suma(2, 2)


//-----------aplicar condiciones con ts para funciones


//---------------enm es para crear una lista de datos q no serviran para cualquier funtion

// indica las posiciones
const enum Dias {
  lunes,
  martes,
  miecoles
}

function mostrarDias(diasSemana: Dias) {
  if(diasSemana == Dias.lunes){
    console.log("el pepe")
  } else if (diasSemana == Dias.martes){
    console.log('Los pepe')
  } else if (diasSemana == Dias.miecoles){
    console.log('la pepa')
  }
}


//----------------Cargar Canvas

const canvas = document.querySelector('canvas')

if (canvas !== null) {
  const ctx = (canvas as HTMLCanvasElement).getContext('2d')
}


//inferencia
const canva = document.querySelector('canvas')

if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
}


//---------------interfas
//crea una forma que debe seguir otro array o objetos

interface Hero {
  id: string,
  name: string,
  age: number
}


const hero: Hero = {
  id: '1',
  name: 'pepe',
  age: 21
}


// -----------anidacion con type y interfaces

interface Armas {
  type: string
}


interface Squad extends Armas {
  quantity: number,
  Hero: Hero[]
}

//tambien se pueden anidar tipos
const squad: Squad = {
  quantity: 5,
  type: 'ak47',
  Hero: [
    {id: '2', name: 'pepe', age: 22}
  ]
}


//---------------extender mas la interface

interface Employeer {
  name: string,
  age: number
}

interface Employeer {
  add: (employeer: string) => void
}

interface Employeer {
  clear: () => void,
}

const em: Employeer = {
  name: 'pep',
  age: 22,
  add: (employeer: string) => {},
  clear: () => {}
}
//las interfaces solo sirven para crear base de objetos o clases

//---------------Narrowing

function mostrarLongitud(objetos: string | number) {
  if (typeof objetos === 'string') {
    return objetos.length
  }
  return objetos.toString().length
}

mostrarLongitud('2')

//----------type guard

interface Mario {
  conpany: 'nintendo',
  name: string,
  saltar: () => void
}

interface Sonic {
  conpany: 'sega',
  name: string,
  correr: () => void
}

type Personaje = Mario | Sonic

// esta funcion esta comprobando si es sonic
function checkIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined
}

function jugar(personaje: Personaje){
  if (checkIsSonic(personaje)) {
    personaje.correr()
  } else {
    personaje.saltar()
  }
}


//-------------readonly
//sirve para q el elemento sea solo lectura
//------ getter y setter de una class

//get para estraer
//set para modificar algo
//private la pone privada puro en ts
interface Avenger {
  name: string
  powerScore: number
}

class Avenger implements Avenger{

  constructor(name: string, powerScore: number) {
    this.name = name
    this.powerScore = powerScore
  }


  get fullName() {
    return `${this.name}, y su poder es de ${this.powerScore}`
  }

  set power(newPower: number) {
    if (newPower <= 100){
      this.powerScore = newPower
    } else {
      throw new Error('su poder es menor a 100')
    }
  }
}

const avengers = new Avenger('pepe', 22)
