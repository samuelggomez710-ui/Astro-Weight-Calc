// Make an array with planets and gravity multipliers
var planets = [
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];
planets.reverse(); // Reverse the array to have the sun at the top

// Three big probems:
// Populate the HTML dropdown options
// Create the function that calculates the weight
// Create a funcation that runs when the button is clicked

const dropdown = document.getElementById("planets");
planets.forEach(planet => {
    const option = document.createElement("option"); // Makes an <option>
    option.value = planet[0]; // Value is the planet's name
    option.textContent = planet[0]; // Visible text with the planets name
    dropdown.appendChild(option); // Add the option to the dropdown
});


function calculateWeight(weight, planetName) { //Creates the funtion for calculating weight
    const planet = planets.find(p => p[0] === planetName); // Finds the planet in the array
    if (planet) {
        return weight * planet[1]; // Returns the calculated weight
    } else {
        return null; // Returns null if the planet is not found
    }
}

const button = document.getElementById("calculate-button"); // Gets the button element form HTML
function handleClickEvent() { // Creates the function that runs when the button is clicked
    const weightInput = document.getElementById("user-weight").value; // Gets the weight input value from HTML
    const selectedPlanet = document.getElementById("planets").value; // Gets the selected planet from the dropdown
    const calculatedWeight = calculateWeight(weightInput, selectedPlanet); // Calls the calculateWeight function
    if (calculatedWeight <= 0) {
        document.getElementById("output").textContent = "Please enter a valid weight greater than zero."; // Error message for invalid weight
    } else if (calculatedWeight !== null) {
        document.getElementById("output").textContent = `If you were on ${selectedPlanet}, you would weigh ${calculatedWeight.toFixed(2)}lbs!`; // Displays the result
    } else {
        document.getElementById("output").textContent = "Please enter a valid weight and select a planet."; // Error message
    }
}
button.onclick = handleClickEvent; // Assigns the function to the button's onclick event