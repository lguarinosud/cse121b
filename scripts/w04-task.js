/* LESSON 3 - Programming Tasks */

/* Profile Object  */

//let myProfile = {};



/* Populate Profile Object with placesLive objects */

let myProfile = 
{
    name: "Leonardo Guarino",
    photo: "images/20210809_210911.jpg",
    favouriteFodds: ["Milanesas", "Pizza", "Asado", "Empanadas", "Curry"],
    hobbies: ["Basketball", "Futbol", "Coding", "Learning"],
    placeLived: [{
        place: "Monte Grande, MG",
        length: "20 years",
        },
        {
            place: "Colombia",
            length: "2 years"
        },
        {
            place: "Luis GUillon",
            length: "2 years",
        },
        {
            place: "El Jaguel",
            length: "4 years",
        },
        {
            place: "Mar del Plata",
            length: "5 years",
        },
        {
            place: "York",
            length: "5 years",
        }]

}

// myProfile.placeLived.push
// (
//     {
//     place: "Monte Grande, MG",
//     length: "20 years",
//     },
//     {
//         place: "Colombia",
//         length: "2 years"
//     },
//     {
//         place: "Luis GUillon",
//         length: "2 years",
//     },
//     {
//         place: "El Jaguel",
//         length: "4 years",
//     },
//     {
//         place: "Mar del Plata",
//         length: "5 years",
//     },
//     {
//         place: "York",
//         length: "5 years",
//     }
// )



/* DOM Manipulation - Output */



/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favouriteFodds.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
    
})

/* Places Lived DataList */

myProfile.placeLived.forEach(place =>{
    console.log(myProfile)
    console.log(place);
    let li = document.createElement('li');
    li.textContent = place['place'];
    document.querySelector('#places-lived').appendChild(li);
    let dt =  document.createElement('dt');
    dt.textContent = place['length'];
    document.querySelector('#places-lived').appendChild(dt);
})




