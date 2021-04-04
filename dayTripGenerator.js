"use strict"; 

let dayTrip = [];

function randomDestination() {
    let destination = ['raleigh', 'durham', 'charlotte', 'wilmington', 'fayetteville', 'myrtle beach'];
    let chosenDestination;
    for(let i = 0; i < destination.length; i++) {
        let rand = Math.floor(Math.random() * ((destination.length - 1) - 0 + 1) + 0);
        chosenDestination = destination[rand];
        //console.log(chosenDestination);
    }
    dayTrip.push(chosenDestination);
    return chosenDestination;
}
// not saved to variable because random will change every execution
let destination = randomDestination();
// destination holds the value from the randomDestination();
console.log(destination);

function randomRestaurant() {
    let restaurant = ['bahama breeze', 'olive garden', 'cheesecake factory', 'red lobster', 'yard house '];
    let chosenRestaurant;
    for(let i = 0; i < restaurant.length; i++) {
        let rand = Math.floor(Math.random() * ((restaurant.length - 1) - 0 + 1) + 0);
        chosenRestaurant = restaurant[rand];
    }
    dayTrip.push(chosenRestaurant);
    return chosenRestaurant;
}
let restaurant = randomRestaurant();
console.log(restaurant);

function randomTransportation() {
    let transporation = ['car', 'bus', 'shared ride', 'tram', 'flight'];
    let chosenTranspo;
    for(let i = 0; i < transporation.length; i++) {
        let rand = Math.floor(Math.random() * ((transporation.length - 1) - 0 + 1) + 0);
        chosenTranspo = transporation[rand];
    }
    dayTrip.push(chosenTranspo);
    return chosenTranspo;
}
let transportation = randomTransportation();
console.log(transportation);

function randomEntertainment() {
    let entertainment = ['sightsee', 'comedy club', 'museum', 'hike', 'beach'];
    let chosenEntertainment;
    for(let i = 0; i < entertainment.length; i++) {
        let rand = Math.floor(Math.random() * ((entertainment.length - 1) - 0 + 1) + 0);
        chosenEntertainment = entertainment[rand];
    }
    dayTrip.push(chosenEntertainment);
    return chosenEntertainment;
}
let entertainment = randomEntertainment();
console.log(entertainment);
console.log(dayTrip);

function updateDayTrip(tripUpdate) {
    switch(tripUpdate) {
        case "destination":
            let updateDes = randomDestination();
            dayTrip.shift();
            dayTrip.unshift(updateDes);
            dayTrip.pop();
            console.log(dayTrip);
            break;
        case "restaurant": 
            let updateRes = randomRestaurant();
            // .splice() selects index, removes index, and inserts new value
            // using delete creates empty spots
            dayTrip.splice(1, 1, updateRes);
            dayTrip.pop();
            console.log(dayTrip);
            break;
        default:
            console.log("no changes made");
    }
}


