// Create an array of names
let animalsArray = ['elefant', 'pingvin', 'panda', 'bæver']

// Print a specific name from array (index)
let specificAnimal = animalsArray[2]
console.log("specific Animal: ", specificAnimal)

// Iterate through array of names printing every line
animalsArray.forEach((item) => {
    console.log(item)
})

// Add a new entry to array
animalsArray.push('søløve')
console.log("After push method", animalsArray)

// Remove the last entry in an array
animalsArray.pop()
console.log('After pop method', animalsArray)

// Edit specific entry in array to something else
animalsArray[2] = 'rød panda'
console.log("Edited array: ", animalsArray)

// Find specific index and remove it
animalsArray.splice(animalsArray.indexOf("pingvin")  , 1)
console.log("Removed index", animalsArray)

// Sort array by names descending
animalsArray.sort().reverse()
console.log('Sorted array', animalsArray)