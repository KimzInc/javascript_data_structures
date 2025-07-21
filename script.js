"use strict";
// Learn about Rest Pattern and Parameters

const restaurant = {
  name: "Classico Italiano",
  location: "Litein, next to Litein AIC Hospital, Kenya",
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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};
