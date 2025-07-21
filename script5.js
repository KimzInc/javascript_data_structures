"use strict";
// Learn about Short Circuiting
// Short-circuiting is a feature in JavaScript where the evaluation
// of expressions stops as soon as the result is determined.
// This is often used with logical operators like AND (&&) and OR

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
console.log("---------- OR -------------");
/*
console.log(3 || "FG Restaurant"); // 3 is truthy value, so it returns 3
console.log("" || "FG Restaurant"); // "" is falsy, so it returns "FG Restaurant"
console.log(true || 0); // true is truthy, so it returns true
console.log(undefined || null); // both are falsy, so it returns null

console.log(undefined || 0 || "" || 30 || "FG Restaurant" || null); // returns 30 as it's the first truthy value
*/

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // If numGuests is undefined, it defaults to 10

// take advantage of short-circuiting
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // If numGuests is undefined, it defaults to 10

// let's initialize the restaurant object with numGuests
restaurant.numGuests5 = 60; // Setting numGuests to 60

const guests3 = restaurant.numGuests5 || 10;
console.log(guests3); // Now it returns 60 as numGuests5 is defined

console.log("------------------ AND ------------------");
console.log(0 && "Felix"); // 0 is falsy, so it returns 0
console.log(7 && "Felix"); // 7 is truthy, so it returns 'Felix'
console.log("Hello" && 23 && null && "FG Restaurant"); // null is falsy, so it returns null

console.log("------------------ AND with restaurant object ------------------");

/*
//Practical example of AND operator
if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushrooms", "Olives", "Spinach");
} // If orderPizza exists, it will be called with the ingredients
else {
  console.log("Method not available");
}
*/

// using short-circuiting to call orderPizza

restaurant.orderPizza &&
  restaurant.orderPizza("Mushrooms", "Olives", "pineapple");

console.log("**********************************************");
