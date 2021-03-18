const number_of_bulbs = 20;
const delay = 100;
const winning_bulb_index = 10;

let counter = 0;
let arrayofBulbs = [];

//  creating the bulbs
while (counter < number_of_bulbs) {
  const newElement = document.createElement("div");
  newElement.className = "bulb";
  document.getElementById("bulbs").appendChild(newElement);

  arrayofBulbs[counter] = false;
  counter++;
}

//  reset the pointer back to the first bulb

counter = 0;
arrayofBulbs[counter] = true; //    initial bulb
document.getElementsByClassName("bulb")[counter].classList.add("active");
document
  .getElementsByClassName("bulb")
  [winning_bulb_index].classList.add("chosen");

setInterval(() => {
  //  switch off the current bulb
  arrayofBulbs[counter] = false;
  document.getElementsByClassName("bulb")[counter].classList.remove("active");

  //   unless it is already the last bulb
  if (counter < number_of_bulbs - 1) {
    counter++; //  get the next bulb in the array
  } else {
    counter = 0; //   reset
  }

  arrayofBulbs[counter] = true;
  document.getElementsByClassName("bulb")[counter].classList.add("active");

  console.clear();
  console.log(arrayofBulbs);
}, delay);
