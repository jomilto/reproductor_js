// Array
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("name");

// Interfaces
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`)

let comodin: any = "Joker";
comodin = { type: 'Wildcard'};

let objeto: object = { type: 'Wildcard'};

function add(a: number, b: number): number {
  return a + b;
}

function createAdder(a: number): (number) => number {
  return function(b: number)  {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstNName: string, lastName: string = 'Smith'): string {
  return `${firstNName} ${lastName}`;
}

const nombre = fullName('Nombre','Apellido');
const otro = fullName('Nombre');

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  // color: Color.Rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());
