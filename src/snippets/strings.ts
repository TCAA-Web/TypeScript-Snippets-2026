// Capitalize every first letter in a string
let testString = "the cat in the hat";
let testStringArray = testString.split(' ')
let modifiedArray = testStringArray.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
let finalString = modifiedArray.join(' ')
console.log("testString: ", finalString)

// Remove all whitespaces in a string
let noWhiteSpaceString = testString.replaceAll(' ', '');
console.log("Removed whitespace", noWhiteSpaceString)

// Replace all slashes in a string with spaces
let urlString = 'products/kitchen/icecream-machine'
let cleanedString = urlString.replaceAll('/', ' ')

console.log("Cleaned url: ", cleanedString)