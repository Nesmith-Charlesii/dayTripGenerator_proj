"use strict"; 

function randomDestination() {
    let destination = ['raleigh', 'durham', 'charlotte', 'wilmington', 'fayetteville', 'myrtle beach'];
    let chosenDestination;
    for(let i = 0; i < destination.length; i++) {
        let rand = Math.floor(Math.random() * ((destination.length - 1) - 0 + 1) + 0);
        chosenDestination = destination[rand];
        //console.log(chosenDestination);
    }
    return chosenDestination;
}
// not saved to variable because random will change every execution
console.log(randomDestination());

function randomRestaurant() {
    let restaurant = ['bahama breeze', 'olive garden', 'cheesecake factory', 'red lobster', 'yard house '];
    let chosenRestaurant;
    for(let i = 0; i < restaurant.length; i++) {
        let rand = Math.floor(Math.random() * ((restaurant.length - 1) - 0 + 1) + 0);
        chosenRestaurant = restaurant[rand];
    }
    return chosenRestaurant;
}
console.log(randomRestaurant());

function randomTransportation() {
    let transporation = ['car', 'bus', 'shared ride', 'tram', 'flight'];
    let chosenTranspo;
    for(let i = 0; i < transporation.length; i++) {
        let rand = Math.floor(Math.random() * ((transporation.length - 1) - 0 + 1) + 0);
        chosenTranspo = transporation[rand];
    }
    return chosenTranspo;
}
console.log(randomTransportation());

function randomEntertainment() {
    let entertainment = ['sightsee', 'comedy club', 'museum', 'hike', 'beach'];
    let chosenEntertainment;
    for(let i = 0; i < entertainment.length; i++) {
        let rand = Math.floor(Math.random() * ((entertainment.length - 1) - 0 + 1) + 0);
        chosenEntertainment = entertainment[rand];
    }
    return chosenEntertainment;
}
console.log(randomEntertainment());