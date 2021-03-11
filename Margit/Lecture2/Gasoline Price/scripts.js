/*
function calculate() {
    let price = document.querySelector("#price").value;
    let money = document.getElementById("money").value;
    let answer = document.getElementById("answer");

    answer.textContent = Math.floor(money / price);
}
*/

// ES6 syntax => Arrow function.

calculate = () => {
    let price = document.querySelector("#price").value;
    let money = document.getElementById("money").value;
    let answer = document.getElementById("answer");
    let drive = document.getElementById("drive");

    answer.textContent = Math.floor(money / price);

    // Use if/else condition to compare values.

    answer.textContent >=10 
    ? drive.textContent = "You have enough gasoline to drive."
    : drive.textContent = "Please re-fill enough gasoline to drive.";



}

