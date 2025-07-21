//spread operator

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = [0, ...numbers, 6, 7, 8];

// console.log(newNumbers);

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
/*
console.log(restaurant.starterMenu);
const newMenu = [...restaurant.starterMenu, "chapati", "pilau", "samosa"];

console.log(newMenu);
console.log("**********************************************");

const mainMenuCopy = [...restaurant.mainMenu];

console.log(mainMenuCopy);

const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(fullMenu);

//Iterables: arrays, strings, maps, sets. Not objects

const str = "Felix";
const letters = [...str, " ", "S."];
console.log(letters);
*/

// Will not work
//console.log(`${...str}`); // SyntaxError: Unexpected token '...'

console.log(
  "********************** Real World Example ************************"
);

// uncomment the line below to test Real World Example

/*
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];

//console.log(ingredients);

restaurant.orderPasta(...ingredients);
*/

console.log("********************** Objects ************************");

const newRestaurant = {
  ...restaurant,
  founder: "Felix Kimutai",
  foundedIn: 2023,
};

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "FG Restaurant";

console.log(restaurantCopy.name);
console.log(restaurant.name);
