const date = new Date();
const currentYear = date.getFullYear();


// The Fortune Teller
function tellFortune(jobTitle, location, partner, numKids) {
    console.log("You will be a " + jobTitle + " in "
        + location + ", and married to " + partner + " with " + numKids + " kids.");
}

// The Age Calculator
function calculateAge(birthYear) {
    let age = currentYear - birthYear;
    let age2 = currentYear - birthYear;
    console.log("You are either " + age + " or " + (age2 - 1));
}

// The Lifetime Supply Calculator
function calculateSupply(age, amountPerDay) {
    let maxAge = 120;
    let consumed = Math.floor((maxAge - age) * amountPerDay * 365);
    console.log("You will need " + consumed + " to last you until the ripe old age of " + maxAge);
}

// The Geometrizer
function calcCircumference(radius) {
    const circumference = 2 * radius * Math.PI;
    console.log("The circumference is " + circumference);
}

function calcArea(radius) {
    const area = radius ** 2 * Math.PI;
    console.log("The area is " + area);
}

// The Temperature Converter
function celsiusToFahrenheit(celsius) {
    let cTof = (celsius * 9 / 5) + 32;
    console.log(celsius + "°C" + " is " + cTof + "°F");
}

function fahrenheitToCelsius(fahrenheit) {
    let fToc = (fahrenheit - 32) / (9/5);
    console.log(fahrenheit + "°C is " + fToc + "°F")
}

// The Calculator
function squareNumber(num) {
    const square = num**2;
    console.log("The result of squaring the number " + num + " is " + square + ".")
    return square;
}

function halfNumber(num) {
    const half = num / 2;
    console.log("Half of " + num + " is " + half + ".");
    return half;
}

function percentOf(num1, num2) {
    const percentOf = (num1 / num2) * 100;
    console.log(num1 + " is " + percentOf + "% " + " of " + num2  + ".");
    return percentOf;
}

function areaOfCircle(radius) {
    const area = Math.floor(radius**2 * Math.PI);
    console.log("The area for a circle with radius " + radius + " is " + area + ".");
    return area;
}

function theCalculator(num1, num2) {
    const step1 = halfNumber(2);
    const step2 = squareNumber(step1);
    const step3 = areaOfCircle(step2);
    percentOf(step3, step2);
}

// DrEvil
function DrEvil(amount) {
    return (amount < 1000000) ? amount + " dollars" : amount + " dollars (pinky)";
}

// MixUp
function mixUp(str1, str2) {
    return str2.slice(0,2) + str1.slice(2,) + " " + str1.slice(0,2) + str2.slice(2,);
}

// FixStart
function fixStart(str) {
    const fChar = str.slice(0,1);
    return fChar + str.slice(1, ).replace(new RegExp(fChar, 'g'), '*');
}

// Verbing
function verbing(str) {
    if (str.length >= 3 && str.slice(-3,) != "ing") {
        str = str + "ming";
    }
    else if (str.length >= 3 && str.slice(-3,) == "ing") {
        str = str + "ly";
    }
    else {
        return str;
    }
    return str;
}

// Not Bad
function notBad(str) {
    const not = str.indexOf("not");
    const bad = str.indexOf("bad");
    if (not < bad && not != -1 && bad != -1) {
        return str.slice(0, not) + "good" + str.slice(bad + 3,);
    }
    else {
        return str;
    }
}

// Printing

tellFortune("Indbrudstyv", "København", "Narko Nina", 4);
tellFortune("Architect", "Aarhus", "Gitte fra Århus", 4);
tellFortune("SOSU", "Sønderborg", "Gudrun Malkepige", 4);

calculateAge(1990);
calculateAge(1992);
calculateAge(1994);

calculateSupply(32.5, 1);
calculateSupply(34, 2.3);
calculateSupply(100, 3.9);

theCalculator(3, 9);

console.log(DrEvil(1000000));

console.log(mixUp("mix", "pod"));
console.log(mixUp("dog", "dinner"));

console.log(fixStart("babble"));

console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));

console.log(notBad("This dinner is not that bad!"))