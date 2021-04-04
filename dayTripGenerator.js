"use strict"; 

let dayTrip = [];
let destination = ['raleigh', 'durham', 'charlotte', 'wilmington', 'fayetteville', 'myrtle beach'];
let restaurant = ['bahama breeze', 'olive garden', 'cheesecake factory', 'red lobster', 'yard house '];
let transporation = ['car', 'bus', 'shared ride', 'tram', 'flight'];
let entertainment = ['sightsee', 'comedy club', 'museum', 'hike', 'beach'];

//modularized this function to ensure it ONLY loops through an array, but does not push a value to the array.
function loopArray(inputArray) {
    let choice;
    for(let i = 0; i < inputArray.length; i++) {
        let rand = Math.floor(Math.random() * ((inputArray.length - 1) - 0 + 1) + 0);
        choice = inputArray[rand];
    }
    return choice; 
}
//console.log(loopArray(destination));

let greeting = alert("Hello, and welcome to Day Trip Generator!");
let userFirstName = prompt("Please enter your name");
let reply = alert("Welcome " + userFirstName + "! Please click ok to generate your random day trip");

function randomDestination() {
    let chosenDestination = loopArray(destination);
    dayTrip.push(chosenDestination);
    return chosenDestination;
}
// not saved to variable because random will change every execution
console.log(randomDestination());
// destination holds the value from the randomDestination();

function randomRestaurant() {
    let chosenRestaurant = loopArray(restaurant);
    dayTrip.push(chosenRestaurant);
    return chosenRestaurant;
}
console.log(randomRestaurant());


function randomTransportation() {
    let chosenTranspo = loopArray(transporation);
    dayTrip.push(chosenTranspo);
    return chosenTranspo;
}
console.log(randomTransportation());


function randomEntertainment() {
    let chosenEntertainment = loopArray(entertainment);
    dayTrip.push(chosenEntertainment);
    return chosenEntertainment;
}
console.log(randomEntertainment());
console.log(dayTrip);

function updateDayTrip(tripUpdate) {
    switch(tripUpdate) {
        case "destination":
            let updateDestination = loopArray(destination);
            //remove destination at 0 index from the destination array
            dayTrip.shift();
            //insert new random destination at 0 index to the destination array
            dayTrip.unshift(updateDestination);
            console.log(dayTrip);
            break;
        case "restaurant": 
            let updateRestaurant = loopArray(restaurant);
            // .splice() selects index, removes a number of items starting at given index, and inserts new value
            // index 1, delete 1, insert updateRestaurant
            dayTrip.splice(1, 1, updateRestaurant);
            console.log(dayTrip);
            break;
        case "transportation":
            let updateTransportation = loopArray(transporation);
            dayTrip.splice(2, 1, updateTransportation);
            console.log(dayTrip);
            break;
        case "entertainment":
            let updateEntertainment = loopArray(entertainment);
            dayTrip.pop()
            dayTrip.push(updateEntertainment);
            console.log(dayTrip);
            break;
        default:
            console.log("no changes made");
    }
}






