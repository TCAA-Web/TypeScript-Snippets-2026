import { CarType } from "../types/car.type.js";
import { baseCar } from "./objects.js";


const car = {...baseCar}

// Create a void function (updates car object)
function updateCar(_key: string, _value: string | number){
    const updated = {...car, [_key]: _value}
    console.log("Updated Car function: ", updated)
}

updateCar('model', 'taurus')

// Create a function that returns a new car object
function createCar(options: CarType){
    let newCar = {...baseCar, ...options}
    return newCar
}

const porsche = createCar({model: 'Porsche Carrera', topSpeed: 800, withRims: "yes", expensive: "very"})
console.log("New Car function: ", porsche)

// Create a function that capitalizes first letter in string
function capitalize(_input: string){
    let newStr = _input.charAt(0).toUpperCase() + _input.slice(1);
    return newStr
}

console.log("Capitalize function", capitalize('morgenmad'))

// Create and use an async function that fetches on a specific URL and returns the data (or error message)
async function getData(_url:string){
    try {
        let res = await fetch(_url);
        if (!res.ok){
            throw new Error('Failed to fetch. Status code: ' + res.status)
        }
        let data = await res.json()
        return data
    }
    catch(err){
        console.error(err)
    }
}

let myData = await getData('https://dummyjson.com/products')
console.log("Fetch Data function: ", myData)