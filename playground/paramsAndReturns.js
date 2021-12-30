// Tip -> Create Default Parameters

const { log } = require("console");

// Creating default values by putting a = next to the param name. This takes over in case there is no value for the param when the function is called
const roundToDecimalPlace = (number, decimalPlaces) => {
  const round = 10 ** decimalPlaces;
  return Math.round(number * round) / round;
}

const convertWeight = (weight, ounces = 0, roundTo = 2) => {
  const total = weight + ounces / 16;
  const conversion = total / 2.2;
  return roundToDecimalPlace(conversion, roundTo);
}
// console.log(convertWeight(44, undefined, 2)); // In this case, the default parameter value of 0 would take over!
// console.log(convertWeight(44, 11, 0));

// Next tip -> Access Object properties with Destructuring
const landscape = {
  title: "Landscape",
  photographer: "Nathan",
  equipment: "Canon",
  format: "digital",
  src: "/landscape-nm.jpg",
  location: [32.7122222, -103.1405556],
};
// Remember: Objects are great for passing around static information!
// Destructuring allows you to create a variable name WITH THE SAME NAME AS AN OBJECT'S KEY assigned with the value from an object
const { photographer } = landscape // Says, take the photograper property from the landscape object and assign its value to this new variable 'photographer'
// console.log(photographer)

// Destrucuturing: Setting a default value
const { equipment = 'Kodak', title } = landscape // Really nice!
// console.log(equipment)
// console.log(title)

// Using the 'rest' operator
// When you want addtional information, or 'the rest' of the information, or if you don't know exactly what it will be
const { format, ...additonal } = landscape // additional will now hold all of the information that we want, even if we don't know what it is
console.log(landscape)

// Assign a key to a different variable name
const portrait = {
    src: '/portrait-nm.jpg',
};
const { src: url } = portrait;
// console.log(url);
// console.log(src); // ReferenceError: src is not defined

// Destructuring with Arrays
// With Arrays, you must assign the variable information in order -> SO if you want to assign the third value to a variable, you must also declare the first and second values
const coordinates = {
    location: [32.7122222, -103.1405556]
}
const { location } = coordinates // Get the array destrucutred off of the coordinates object. Remember to use same key name for variable when getting a property off of an object
const [latitude, longitude] = location
// Way to combine the previous two lines
const { location: [latitude2, longitude2] } = coordinates
// console.log(latitude2, longitude2)

// Destructuring and functions
// A great perk of destructuring is that you can move it right to the params of an object

// Next tip -> Simplifying Key-Value Assignment -> See Educative for dummy code
const photo = {
  title: "Landscape",
  photographer: "Nathan",
  location: [32.7122222, -103.1405556],
};

const region = {
  city: "Hobbs",
  county: "Lea",
  state: {
    name: "New Mexico",
    abbreviation: "NM",
  },
};

const { city, county, ...details} = region

// Next tip -> Passing a variable number of arguments with Rest Operator
const validateCharacterCount = (max, ...items) => {
  return items.every((item) => item.length < max);
}
// console.log(validateCharacterCount(10, "wvoquie"));
// console.log(validateCharacterCount(10, ...["wvoquie"]));
const tags = ["Hobbs", "Eagles"];
// Rest operator is great for variables as well as parameters!
// Re-creating array methods using the rest operator
const queue = ['stop', 'collaborate', 'listen']
const [first, ...remaining] = queue
console.log(first)
console.log(remaining)
