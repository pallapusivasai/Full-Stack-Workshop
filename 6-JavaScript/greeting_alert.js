const name = prompt("What is your name?");

if (name !== null && name.trim() !== "") {
    alert("Hello, " + name + "!");
    console.log("User name:", name);
} else {
    alert("You didn't enter a name.");
}
