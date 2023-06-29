const firstNumber = Number(prompt("Enter the first number:"));
const secondNumber = Number(prompt("Enter the secon number:"));

const sum = firstNumber + secondNumber;
const difference = firstNumber - secondNumber;
const product = firstNumber * secondNumber;
const quotient = firstNumber /secondNumber;

alert(firstNumber + " + " + secondNumber + " = " + sum + "\n"
    + firstNumber + " - " + secondNumber + " = " + difference + "\n"
    + firstNumber + " * " + secondNumber + " = " + product + "\n"
    + firstNumber + " / " + secondNumber + " = " + quotient);


/*Without using additional variables (sum, difference, product, quotient):

alert(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber) + "\n"
    + firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber) + "\n"
    + firstNumber + " * " + secondNumber + " = " + (firstNumber * secondNumber) + "\n"
    + firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber));
*/
