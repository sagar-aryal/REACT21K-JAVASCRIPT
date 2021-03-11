/* 
1. Make a program that asks age of the user. If the age is less than 18 the text “too young” is printed. If the age is less than 27 the text “Right age for military service” is printed. If the age is less than 41 the text “You are in reserve” is printed.  If the age is less than 55 the text “You are in backup reserve” is printed. All other cases “too aged” is printed.
*/

function userage() {
  let age = document.querySelector("#age").value;
  if (age < 18) {
    alert("Too Young.");
  } else if (age < 27) {
    alert("Right age for military service.");
  } else if (age < 41) {
    alert("You are in reserve.");
  } else if (age < 55) {
    alert("You are in backup reserve.");
  } else {
    alert("Too aged.");
  }
  document.querySelector("button").onclick = userage();
}

/* 
2. Make a program that asks three numbers from the user. Program prints out sum of the numbers, if any of the numbers is positive. If all the numbers are positive, also print out multiplication. If all numbers are negative, text “only negatives” is printed. Handle zero as positive in this assignment.
*/

/*
3. Make a program that asks one number from the user. Then the program finds out if the number is positive and is the number divisible by 2. Message "that is even number" is printed else "that number is odd" is printed.
*/

/*
4. Make a program that calculates body mass index. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2, resulting from mass in kilograms and height in metres. Based on result display correct range:
BMI	          	Status
Below 18.5	    Underweight
18.5 – 24.9	    Normal or Healthy Weight
25.0 – 29.9	    Overweight
30.0 and Above	Obese
*/

/*
5. Make a program that asks hourly salary and how many hours user worked on one day. With this information program calculates day’s salary.
The salary is calculated as follows:
- first 7 hours by hourly salary
- next 2 hours 50% extra
- rest of the hours 100% extra
*/
