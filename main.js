/*
3/19/25
Practice: Common Array Methods and Length
Instructions:
You are working as a developer for a local café that needs a system to track
customer orders. The café serves drinks and pastries, and orders are stored in a
2D array, where each row represents a category (drinks or pastries), and each
column represents an order within that category.
Your task is to use the .length property to track the number of items in the
café’s order system dynamically.
   -----   -----   -----
Task 1: Create the Order System
Create a multi-dimensional array called orders with two rows:
● The first row stores three drink orders (e.g., “Latte”, “Tea”, “Espresso”).
● The second row stores three pastry orders (e.g., “Croissant”, “Muffin”,
“Bagel”)
Task 2: Log the number of drinks and number of pastries by using .length on each
row.
Task 3: Access Orders Using Bracket Notation
Use bracket notation to log a specific drink and a specific pastry using
hardcoded numbers. For example, you might want to log the first drink and last
pastry. Do this for three combinations.
Task 4: Access Orders Dynamically with Variables
Task 5: Write a loop that logs all the items in the drink category, ensuring the loop
dynamically adjusts to the number of items using .length.
Task 6: Add a New Order & Track Length
Suppose a new order has been placed: a customer ordered a flat white. Add “flat
white” to the drinks category dynamically. Log the updated number of drinks after
the addition.
Declare two variables and use them with bracket notation to log the selected order
dynamically.
*/

// TASK ONE - create system
let orders = [
   ["Mocha", "London Fog", "Americano"],
   ["Raspberry Danish", "Orange Scone", "Blueberry Muffin"]
];

// TASK TWO - log number of items on each row
console.log("Number of drinks: ", orders[0].length);
console.log("Number of pastries: ", orders[1].length);

// TASK THREE - access orders with brackets
console.log(`Order 1: ${orders[0][1]}, ${orders[1][2]}`); // London Fog, Blueberry Muffin

console.log(`Order 2: ${orders[0][2]}, ${orders[1][0]}`); // Americano, Raspberry Danish

console.log(`Order 3: ${orders[0][0]}, ${orders[1][1]}`); // Mocha, Orange Scone

// TASK FOUR - access orders with variables
let drinkChoice = 0; // chosen drink
let pastryChoice = 2; // chosen pastry
console.log(`Dynamic variable order: ${orders[0][drinkChoice]}, ${orders[1][pastryChoice]}`); // Mocha, Blueberry Muffin

/*
--- access and print all ---
for (let row = 0; row < 2; row++) {
   for (let item = 0; item < 3; item++) {
      console.log(orders[row][item]);
   }
}
*/

// TASK FIVE - loop for drink log
console.log(" --- DRINK MENU --- ")
for (let i = 0; i < orders[0].length; i++) {
   console.log(`- ${orders[0][i]}`);
}

// TASK SIX - add and track
orders[0].push("Flat White"); // push adds it to the end
console.log(`New number of drinks: ${orders[0].length}`);

// declare two variables, bracket notation, log order dynamically
let categoryIndex = 0; // drinks is row 0 - pastries is row 1
let itemIndex = 3; // newly added Flat White
console.log(`New order: ${orders[categoryIndex][itemIndex]}`);
