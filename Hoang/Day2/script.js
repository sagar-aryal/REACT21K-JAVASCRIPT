
// Generating five random numbers between 0 and 1.
let chosenNumber1 = Math.floor(Math.random()*10);
let chosenNumber2 = Math.floor(Math.random()*10);
let chosenNumber3 = Math.floor(Math.random()*10);
let chosenNumber4 = Math.floor(Math.random()*10);
let chosenNumber5 = Math.floor(Math.random()*10);

// Printing five numbers using console.log
console.log("First: ", chosenNumber1);
console.log("Second: ", chosenNumber2);
console.log("Third: ", chosenNumber3);
console.log("Fourth: ", chosenNumber4);
console.log("Fifth: ", chosenNumber5);

if(chosenNumber1 === chosenNumber2 === chosenNumber3 === chosenNumber4 === chosenNumber5 === 1) {
    console.log("Congratulations! you won a Jackpot Prixe.");
}
else {
    console.log("Sorry! Try for next time.");
}





