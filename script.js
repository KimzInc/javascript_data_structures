"use strict";
// Learn about Rest Pattern and Parameters
// Pack elements into an array using the rest pattern

const restaurant = {
  name: "FG Restaurant",
  location: "Litein, next to Litein AIC Hospital, Kenya",
  categories: ["Italian", "Chinese", "Vegetarian", "Organic"],
  starterMenu: ["Tea", "Chapati", "French Fries", "Samosa"],
  mainMenu: ["Pizza", "Nyama Choma", "Drinks"],

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(
      `Here is your Pizza with ${mainIngredient} and ${otherIngredients.join(
        ", "
      )}`
    );
  },
};

/*

// SPREAD, because on RIGHT side of assignment
const arr = [1, 2, ...[3, 4]]; // [1, 2, 3, 4]
console.log(arr);

// REST, because on LEFT side of assignment
const [a, b, ...others] = [1, 2, 3, 4, 5]; // a = 1, b = 2, others = [
console.log(a, b, others); // 1 2 [3, 4, 5]
*/

// rest element in destructuring must be the last element
const [pizza, , drinks, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; //skipping Nyama Choma
console.log(pizza, drinks); // Pizza Drinks
console.log(otherFood); // [ 'Tea', 'Chapati', 'French Fries', 'Samosa' ]
console.log("**********************************************");

/**
 * This one will throw an error because the rest element must be the last element
 * const [starter, ...main, dessert] = restaurant.starterMenu;
 *
 */

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat); // { open: 0, close: 24 }
console.log(weekdays); // { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

console.log("********************** FUNCTIONS ************************");

/*
const add = function (...numbers) {
  let sum = 0;
  for (const number of numbers) sum += number;
  console.log("Sum: ", sum);
};

add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 1, 4); // 23
add(1, 2, 3, 4, 5, 6, 7, 8, 9); // 45

//another example
const x = [23, 5, 7];
console.log(...x); // 23 5 7
console.log(x); // [ 23, 5, 7 ]
add(...x); // 35
*/

restaurant.orderPizza("Mushrooms", "Olives", "Spinach", "Cheese");
restaurant.orderPizza("Pepperoni", "Onions", "Green Peppers");
