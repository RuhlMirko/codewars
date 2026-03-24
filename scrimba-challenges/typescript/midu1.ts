const persona : unknown= 'Miguel'

const personaObj = {
    firstName: 'Pepe',
    age: 30
}


// function saludar(persona: {name:string, age:string} ){
//    const {name, age} = persona
function saludar({name, age}:{name:string, age:string}){
    console.log(`Hola ${name}, tienese ${age} years`)
}


// how to explicitly return a vcalue with type
const sayHiFromFunction = (fn: (name: string) => void) => {
    fn('Miguel')
}
const sayHi = (name: string) => {
    console.log('Hola ${name}')
}
sayHiFromFunction (sayHi)

// Arrow functions
const sumar = (a:number, b:number): number => a + b
const restar: (a:number, b:number) => number = (a,b) => a - b

// never nunca hace return
function throwErr(message:string): never{ throw new Error(message);}

function logMessage(message: string): void{
    console.log(message)
    throw new Error(message)
    // return existe preo no es de interes -> nunca devuelve nada importante
}