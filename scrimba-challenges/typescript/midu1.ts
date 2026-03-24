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
    console.log(`Hola ${name}`)
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

// inferencia funciones anonimas segun el contexto
// Siempre va sugerir metodos correctos para los elementos sin tipar el array
const avenger = ['Spidey','Hulk','Iron Man']
const piArr = [3.124,3.1,3.123456,3.12]
avenger.forEach(avenger=>{
    console.log(avenger.toLowerCase())
})
piArr.forEach(digit=>{
    console.log(digit.toFixed(2))
})

// #### Sin type alias
let hero = {
    name:'Thor',
    age:1500,    
}
// hero.power = 200
const createHero = (name: string, age:number)=> ({name, age})
const thor = createHero('Thor', 1500) 
// variable thor !== a variable hero

// ##### Type alias
type HeroId = `${string}-${string}-${string}-${string}-${string}` // Declares format expected of id in Hero
type Hero = {
    readonly id?: HeroId,
    name: string,
    age:number,
    isActive?: boolean // optional value
}
let hero2: Hero={
    name:'Thor',
    age:1500,
    isActive: true
}
const createHero2 = (hero: Hero): Hero => {
 const {name, age} = hero
 return {id: crypto.randomUUID(),name, age}
//  return {id: '2344',name, age}
}
const hulk = createHero2({name:'Hulk', age:40}) 
// hulk.id = 400 #### Cannot assign to id cause its readonly
// template union types
type HexColor = `#${string}`
const color: HexColor = '#0033ff' // const color:HexColor = '0033ff'


/// Union types
type HeroId3 = `${string}-${string}-${string}-${string}-${string}` // Declares format expected of id in Hero
type HeroPwScale = 'local'|'planetary'|'galactic'|'universal'|'multiversal'
let ann : number | string
ann = 4 
ann = 'Name'

type Hero3 = {
    readonly id?: HeroId,
    name: string,
    age:number,
    isActive?: boolean // optional value
    powerScale?: HeroPwScale    
}
let hero3: Hero3={
    name:'Thor',
    age:1500,
    isActive: true,
    powerScale:'planetary' //powerScale:'Muy fuerte'
}

// Extension de tipos
type HeroId4 = `${string}-${string}-${string}-${string}-${string}` // Declares format expected of id in Hero
type HeroPwScale4 = 'local'|'planetary'|'galactic'|'universal'|'multiversal'
type HeroBasicInfo = {
    name:string,
    age:number
}
type HeroProperty = {
    readonly id?: HeroId,
    isActive?: boolean // optional value
    powerScale?: HeroPwScale    
}
type Hero4 = HeroBasicInfo & HeroProperty // Combina dos types
let hero4: Hero4={
    name:'Thor',
    age:1500,
    isActive: true,
    powerScale:'planetary' //powerScale:'Muy fuerte'
}
const createHero4 = (hero: HeroBasicInfo): Hero => {
 const {name, age} = hero
 return {id: crypto.randomUUID(),name, age}
}
const hulk4 = createHero4({name:'Hulk', age:40}) 