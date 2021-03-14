function userage() {
  let age = document.querySelector("#age").value;
  let result;
  if (age < 18) {
    result = "Too Young.";
  } else if (age < 27) {
    result = "Right age for military service.";
  } else if (age < 41) {
    result = "You are in reserve.";
  } else if (age < 55) {
    result = "You are in backup reserve.";
  } else {
    result = "Too aged.";
  }

  document.querySelector("#result").textContent = result;
}

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
