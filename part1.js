// Exercise solutions

// The Fortune Teller
let numKids = 0;
let partner = "Navnsine Navnesen";
let location = "Esbjerg";
let jobTitle = "Software Engineer";

console.log("You will be a " + jobTitle + " in " + location + ", and married to " + partner + " with " + numKids + " kids.");

// The Age Calculator
let birthYear = 1990;
let futureYear = 2030;
let age = futureYear - birthYear;

console.log("I will be either " + age + " or " + (age - 1) + " in " + futureYear + ".");

// The Lifetime Supply Calculator
let currentAge = 32;
let maxAge = 180;
let amountPerDay = 4;
let total = (maxAge - currentAge) * 365 * amountPerDay;

console.log("You will need " + total + " to last you until the ripe old age of " + maxAge + ".");

// The Geometrizer
let radius = 4;
let circumference = 2 * Math.PI * radius;

console.log("The circumference is " + circumference + ".");

let area = Math.PI * radius * radius;

console.log("The area is " + area);

// The Temperature Converter
let celsius = 32;
let cTof = (celsius * 9 / 5) + 32;
console.log(celsius + "°C" + " is " + cTof + "°F");

let fahrenheit = 89.6;
let fToc = (fahrenheit - 32) / (9/5);
console.log(fahrenheit + "°F" + " is " + fToc + "°C");