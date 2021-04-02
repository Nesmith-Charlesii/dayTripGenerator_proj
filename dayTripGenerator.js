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