// Create a new object (car - model - top speed - width - length)
export let baseCar = {
    model: "Gt2", 
    topSpeed: 250, 
    width: 200, 
    length: 290
};

// Add color to car object using spread operator
let upgradedBaseCar = {...baseCar, color: "red"}
console.log("Upgraded Base Car", upgradedBaseCar)

// Update color in car object to another one
let updatedCar = {...upgradedBaseCar, color: "blue", model: "Gt4"}
console.log("Updated Car", updatedCar)

// Iterate through car object properties and print every line to DOM
const root = document.getElementById('root')
let carArray = Object.entries(updatedCar)
carArray.map((car) => {
    let key = car[0]
    let value = car[1]
    let textElement = document.createElement('p')
    textElement.textContent = `${key} : ${value}`
    root?.appendChild(textElement)
})

console.log("Test array", carArray)