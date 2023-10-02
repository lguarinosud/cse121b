/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

function add(number1, number2)
{
    return number1 + number2;
}
/* Function Definition - Add Numbers */

function addNumbers() 
{
    let addNumbers1 = Number(document.querySelector('#add1').value);  
    let addNumbers2 = Number(document.querySelector('#add2').value); 

    document.querySelector('#sum').value = add(addNumbers1, addNumbers2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(number1, number2)
{
    return number1 - number2;
}

function subtractNumbers()
{
    let subtractNumbers1 = Number(document.querySelector('#subtract1').value);
    let subtractNumbers2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumbers1, subtractNumbers2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */


const multiply = (number1, number2) => 
{
    return number1 * number2;

};

const multiplyNumbers = () => 
{
    let multiplyNumbers1 = Number(document.querySelector('#factor1').value);
    let multiplyNumbers2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumbers1, multiplyNumbers2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => 
{
   return  number1 / number2;
}

const divideNumbers = () =>
{
    let divideNumbers1 = Number(document.querySelector('#dividend').value);
    let dividenumbers2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divideNumbers1, dividenumbers2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

let currentDate = new Date();
let Year = currentDate.getFullYear();

document.querySelector('#year').value = year;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArray = [1,2,3,4,5,6,7,8,9,9,11,12,13];

document.querySelector('#array').innerHTML = numberArray;

/* Output Odds Only Array */
let oddNumbers = numberArray.filter(number => number % 2 !== 0);
document.querySelector('#odds').innerHTML = oddNumbers;

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numberArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numberArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numberArray.map(number => number * 2);


/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numberArray.map(number => number * 2).reduce((sum, number) => sum + number);

