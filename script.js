"use strict";
// Learn about Short Circuiting nullish operators
// Nullish coalescing operator (??) is used to provide a default value
// when the left-hand side is null or undefined.
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
restaurant.numGuests = 0; // Simulating a scenario where numGuests is not set
const guests = restaurant.numGuests || 10; // If numGuests is falsy, default to 10
console.log(guests); // Output: 10

// Introducing nullish coalescing operator
const guestsCorrect = restaurant.numGuests ?? 10; // If numGuests is null or undefined
console.log(guestsCorrect); // Output: 0, since numGuests is set to 0
