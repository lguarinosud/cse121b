/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullname = "Leonardo Guarino";
let currentYear = "2023";
let profilePicture = "images/20210809_210911.jpg"



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

const pictureElement = document.querySelector('picture');
const imageElement = pictureElement.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML =  `<strong>${fullname}<strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);

const altText = `Profile image of ${fullname}`;
imageElement.setAttribute("alt", altText);


/* Step 5 - Array */

let myfavoriteFoods = ['milanesa','pizza', 'asado', 'ravioles' ];

foodElement.textContent = myfavoriteFoods.join(", ")

const singleFavoriteFood = "Ice Cream";

myfavoriteFoods.push(singleFavoriteFood);

foodElement.innerHTML += `<br>${myfavoriteFoods}`;

myfavoriteFoods.shift();

foodElement.innerHTML += `<br>${myfavoriteFoods}`;

myfavoriteFoods.pop();

foodElement.innerHTML += `<br>${myfavoriteFoods}`;



