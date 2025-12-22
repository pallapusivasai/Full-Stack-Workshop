// Ask the user for inputs
let name = prompt("Enter a name:");
let adjective = prompt("Enter an adjective:");
let noun = prompt("Enter a noun:");
let verb = prompt("Enter a verb:");
let place = prompt("Enter a place:");

// Create the Mad Libs story
let story = `One day, ${name} found a ${adjective} ${noun} that could ${verb} in the ${place}.`;

// Display the story
alert(story);

// Log the story to the console
console.log(story);
