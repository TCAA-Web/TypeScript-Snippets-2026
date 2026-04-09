// Get a specific element by ID
const elementID = document.getElementById('root')

// Get a specific element by className
const elementClass = document.querySelector('.text')

// Update elements textContent property
if (elementClass)
elementClass.textContent = "Hej"

// Update attributes on element (add data-theme to h1)
elementClass?.setAttribute('data-theme', 'dark')