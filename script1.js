"use strict";

// Data needed

// Data needed for a later exercise
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
};

// Destructuring
/*
const arr = [2, 3, 4];

const [x, y, z] = arr;

console.log(x, y, z);
*/

const [first, second, ...otherCategories] = restaurant.categories;

console.log(first);
console.log(second);
console.log(otherCategories);

const location1 = restaurant.location;

console.log(location1);

//Leaving a hole
const [item1, , item3] = restaurant.mainMenu;

console.log(item1, item3);

const [startMenu1, , , startMenu4] = restaurant.starterMenu;

console.log(startMenu1, "and", startMenu4);
console.log("*************************************************");

//switch items

let [list1, , list2] = restaurant.mainMenu;

console.log("list1:", list1, "list2:", list2);

[list1, list2] = [list2, list1];

console.log("list1:", list1, "list2:", list2);

//nested arrays

const nested = [2, 4, [5, 6]];

//const [i, , j] = nested;

//console.log(i, j);

const [i, , [j, k]] = nested;

console.log(i, j, k);

//setting default values
const [w = 1, x = 1, y = 1] = [10, 20];

console.log(w, x, y);

const [starter, mainCourse] = restaurant.order(1, 2);

console.log(starter, " and ", mainCourse);
