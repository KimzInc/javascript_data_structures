"use strict";

// Data needed

// Data needed for a later exercise
/*
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

*/

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (startMenuIndex, mainMenuIndex) {
    return [this.starterMenu[startMenuIndex], this.mainMenu[mainMenuIndex]];
  },

  //function to order food with default parameters
  orderDelivery: function ({
    startMenuIndex = 1,
    mainMenuIndex = 0,
    time = "20:00",
    address = "Your address",
  }) {
    console.log(
      `Order received! ${this.starterMenu[startMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  startMenuIndex: 2,
  mainMenuIndex: 2,
  time: "21:00",
  address: "Via del Sole, 21",
});

console.log("**********************************************");
restaurant.orderDelivery({
  mainMenuIndex: 2,
});

/*
//const { name, location, openingHo categories);

console.log("*****************************************");

const {
  name: restaurantName,
  location: locs,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(locs, tags, hours);

console.log("*****************************************");

// adding default values

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

console.log("*****************************************");

//Mutating variables

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

console.log(a, b);

console.log(obj);

//wrap in a bracket
({ a, b } = obj);

console.log(a, b);
*/

/*
const {
  name: restaurantName,
  location: locs,
  openingHours: hours,
  categories: tags,
} = restaurant;
*/

const { name, openingHours, categories } = restaurant;
const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);
