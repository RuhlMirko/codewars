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



const sayHiFromFunction = (fn: (name: string) => void) => {
    fn('Miguel')
}

const sayHi = (name: string) => {
    console.log('Hola ${name}')
}

sayHiFromFunction (sayHi)