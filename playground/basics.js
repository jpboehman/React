// const set = new Set();
// set.add('Jackson')
// set.add('Jackson')

// console.log(set)
// When working with sets, duplicate values can be added but they will not persist!


// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

// const newMap = new Map();
// newMap.set(1, 'Jackson')
// console.log(newMap)
// newMap.set(1, [newMap.get(1).concat(', Buns')]) // Remember, spread syntax treats each iterable as in its own independent variable
// console.log(newMap)

const names = ['Jackson', 'Mike', 'Marcia'];
const [newNames, ...otherNames] = names;
// console.log(otherNames)
// console.log(newNames)
const codeburst = 'CODEBURST';
const characters = [...codeburst];

const obj = { name: 'Jackson', age: 24 };
const newObj = { ...obj }; // The receiver in this case is another object. When the 'thing' that is being spread is an object, and the receiver is also an object, then the key-value pairs will be copied instead of just the values!
// console.log(newObj)

// Spread syntax with objects
const obj1 = { firstName: 'Jackson', age: 24 };
const obj2 = { lastName: 'Boehman', pet: 'Buns' };
const combinedObj = { ...obj1, ...obj2, address: '4007 Vacacation Ln' }; // neat!
// Also, when destructuring from an object, the variable names have to be the same as in the object
const { firstName } = obj1;
// console.log(firstName);

// Object destructuring
const [son, , mother] = names;
// console.log(`son is: ${son} and mother is: ${mother}`)

// Rest oeprator -> Think about it like, after destructuring the rest operator will collect 'the rest' of the elements
const numbers = [1, 2, 3];
const [firstNumber, ...restOfTheNumbers] = numbers;
// console.log(firstNumber, restOfTheNumbers)

// Notice that restOfTheLetters is an array when it is logged. Since the rest operator collects items, it needs to place them in a container. That container will be an ARRAY when we destructure from an Array or String!
const [firstLetter, ...restOfTheLetters] = 'CODEBURST';
// console.log(firstLetter)
// console.log(restOfTheLetters)

// const [firstComma, ...restOfTheCommas] = 'This string, should have, numerous, commas'.split(',') // Awesome!
// console.log(firstComma)
// console.log(restOfTheCommas)

const hashMap = new Map();
hashMap.set(1, 'Jackson');
// console.log(hashMap.has(1)); // .has() takes in a key, not a value!
hashMap.set(1, hashMap.get(1).concat(', Buns')); // This is how you can alter a value in a hashMap. pass in the key, then use the getter in the value argument
// console.log(hashMap);

// Quick loop practice
// const players = ['LeBron', 'Kobe', 'Shaq', 'KD', 'Kyrie'];
// for (let value of players) {
//   console.log(value); // Remember, OF iterates over the values | IN iteraties over the keys of an object
// }

// console.log(Object.keys(players)); // Another way to look at keys / values. With the Object.keys(), values(), or entries() method

// const playerMap = new Map();
// playerMap.set(1, players)
// playerMap.set(2, 'Jackson')
// console.log(playerMap.keys())

// An enumerable property in JavaScript means that a property can be viewed if it is iterated using the for…in loop or Object.keys() method

// CONTINUED BASICS FOR EDUCATIVE COURSE
// Topic -> Maximizing code clarity with Special Collections
// Think of plain objects primarily as a collection of data competing against other collection types -> When to use an Object and when to use a Map?
// Rule of thumb: Objects are great when you want to share unchanging structured key-value data, but are not ideal for dynamic information that could be updated later
// Example for objects -> Creating an object to share color information, since the hex code for the colors won't change:
const colors  = {
    red: '#d10202',
    green: '#19d836',
    blue: '#0e33d8'
}
// Easy to use for static information. Future developers won't need to know the position, just the property
// console.log(colors['red'])
// OBJECTS ARE VALUABLE FOR STORING STATIC INFORMATION
// The key for Objects is static information. Objects aren't ideal for information that's consistently updated, looped over, altered, or sorted. In those use cases, use a Map!
// Objects are a path to information when you know where it will be. Config files are often objects because they are set up before runtime and are simple key-value stores of static information!
// export const config = {
//     endpoint: 'http://pragprog.com',
//     key: 'secretKey'
// }

// Object example -> Data is set and retrieved the same each time. Not mutating an existing object - CREATING A NEW OBJECT IN EACH FUNCTION! Not setting keys using variables.
// const getBill = (item) => {
//   return {
//     name: item.name,
//     // due: twoWeeksFromNow(),
//     total: calculateTotal(item.price),
//   };
// }

// const bill = getBill({ name: 'Room Cleaning', price: 30 });

// const displayBill = (bill) => {
//   return `Your total is ${bill.total} for ${bill.name} is due on ${bill.due}`;
// }

// console.log('Displaying the bill: ' + displayBill(bill));
// Remember: objects are not ideal when the data needs to be updated, sorted, altered, or looped over
//  If you want to add lots of information to an object programmatically, then other collections such as a Map would be better

// Next tip -> Create Objects without Mutations using Object.assign()
// Object.assign() allows you to create and update fields on an object with keys and values from another object (or objects)
// Object.assign() allows you to update an object with properties from another object
// Example: 
const defaults = {
  author: '',
  title: '',
  year: 2017,
  rating: null,
};
const book = {
  author: 'Joe Morgan',
  title: 'Simplifying JavaScript',
};

const updated = Object.assign({}, defaults, book); // Assigns the properties and values to an empty object
// console.log(`Updated object:`);
// console.log(updated);
// console.log('\n');

// console.log(`Original object:`);
// console.log(defaults); 

// Problem with copying nested objects: 
const defaultEmployee = {
  name: {
    first: '',
    last: '',
  },
  years: 0,
};
// const employee = Object.assign({}, defaultEmployee);
// console.log(employee);
// Deep copy note reagrding above ^ :
// Copying objects that have nested objects is called “deep copying” (or “deep merging” or some variation). 
// The property years will copy over just fine, but the property name isn’t copied. All that’s copied is a reference to the independent object that’s assigned to the key name. 
// So if you change a value of a nested object on either the original or the copy, it will change the value on both:
const employee = Object.assign({}, defaultEmployee);
employee.name.first = 'Joe';
// console.log('Employee:');
// console.log(employee);
// console.log('Default employee:');
// console.log(defaultEmployee);

// Solution: 
// const employee = Object.assign({}, defaultEmployee, {
//   name: Object.assign({}, defaultEmployee.name),
// }); 
// Need another Object.assign() for that nested object as well

// Next tip -> Updating information with the Object Spread operator (already have notes on this above)
// const novel = {
//     title: 'Reasons and Persons',
//     author: 'Derek Parfit'
// }
// const copiedBook = { ...novel, year: 1984 } // Can add onto object's using the Spread operator and adding onto the end!
// console.log(copiedBook) 

// Fixing deep copy issues with the Spread operator
// const defaultEmployee = {
//     name: {
//         first: '',
//         last: '',
//     },
//     years: 0,
// };


// const employee = {
//     ...defaultEmployee,
//     name: {
//         ...defaultEmployee.name,
//     }
// }

// Next tip -> Using new Structures - Updating Key-Value Data Clearly With Maps
// Check out why Maps are better than objects in detail: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// Quicker rules of thumb for when to use a Map over an Object:
// 1. Key-value pairs are frequently added or removed (AKA, the data is dynamic and not static)
// 2. A key isn't a string


// use case data - dogs array
const dogs = [
  {
    name: 'max',
    size: 'small',
    breed: 'boston terrier',
    color: 'black',
  },
  {
    name: 'don',
    size: 'large',
    breed: 'labrador',
    color: 'black',
  },
  {
    name: 'shadow',
    size: 'medium',
    breed: 'labrador',
    color: 'chocolate',
  },
];
// Adding data with the 'set' method
// Map example - creating 'filters' -> Remember chaining!
let filters = new Map()
    .set('breed', 'labrador')
    .set('size', 'large')
    .set('color', 'chocolate')
// console.log(filters)

// Can also add information using an array -> Instead of creating a new Map and then chaining setters, you can pass an array of pairs with the first being a key and the second being a value
// Remember this! Could be much easier for code readability and syntax
let otherFilters = new Map(
    [
        ['breed', 'labrador'],
        ['size', 'large'],
        ['color', 'chocolate']
    ]
)
// console.log(otherFilters.get('size'));

// Retrieving data with the 'get' method -> Returns the value of the key
filters.get('breed')
// If you want to delete values, we just use the delete() method rather than the language operator
otherFilters.set('color', 'blue')
// console.log(otherFilters)

// You can delete all values with the clear() method
// otherFilters.clear()

// Next tip -> Iterating over Key-Value data with Map & Spread Operator
// A Map has everything you need to sort and iterate built-in as part of the MapIterator
const moreFilters = new Map()
    .set('color', 'black')
    .set('breed', 'labrador')
// If you use a for...of loop to iterate over a map, you will be returned a PAIR of the key-values in an array form
// for (let entry of moreFilters) {
//     console.log(entry)
// }

// function getAppliedFilters(filters) {
//   const applied = [];
//   for (const [key, value] of filters) { // Notice the entry here -> for const [key, value] of filters -> 
//     applied.push(`${key}:${value}`);
//   }
//   return `Your filters are: ${applied.join(', ')}.`;
// }


// Using the spread operator on a Map
// The spread operator works on a Map the same way it does on an array. The main difference is that it returns a list of pairs instead of single values
const dummyMap = new Map([
    ['color', 'black'],
    ['breed', 'labrador']
]);
// console.log(...dummyMap)

// Adding this tip in between -> Creating Arrays of similar size with map()
// map() function takes a piece of information from an input array and returns something NEW. Sometimes it returns part of the information, other times, it transforms the informations and returns a new value
// Code examples with map()
const band = [
  {
    name: 'corbett',
    instrument: 'guitar',
  },
  {
    name: 'evan',
    instrument: 'guitar',
  },
  {
    name: 'sean',
    instrument: 'bass',
  },
  {
    name: 'brett',
    instrument: 'drums',
  },
];

const instruments = []

const getInstrument = (member) => {
    return member.instrument
}

// for (let i = 0; i < band.length; i++) {
//     instruments.push(getInstrument(band[i]))
// }
// console.log(instruments)
// Refactor to use a map() method -> Remember that with map() methods, you want to think abput individual pieces, not the whole array
// With map(), there's no need to set up a return array - that's included as part of the array method. There's also no need to push information. map() pushes the result of the function into its own return array
// Refactored without a for loop -> Really helps with clean and concise code
const mappedInstruments = band.map(getInstrument) // Notice how we don't need to pass in the argument either - map() is taking care of that for us
console.log(mappedInstruments)
// Benefits of the map() method
// 1. You know you're going to get an array - you don't need to define one ahead of time -> Helps with code cleanliness
// 2. You know it's going to be the same size as the original array
// 3. You know it will contain what you specify and nothing else
// map() creates a return array and pushes the information into it for you! - More concise and clean code

// Copying a Map and avoiding mutation
const moreDefaults = new Map()
  .set('color', 'brown')
  .set('breed', 'beagle')
  .set('state', 'kansas');

const extraFilters = new Map().set('color', 'black');

// function applyDefaults(map, moreDefaults) {
//     const copy = new Map([...map])
//     for (const [key, value] of moreDefaults) {
//         if (!copy.has(key)) {
//             copy.set(key, value)
//         }
//     }
//     return copy
// }
const appliedDefaults = (map, moreDefaults) => {
    const copy = new Map([...map])
    for (const [key, value] of moreDefaults) {
        if (!copy.has(key)) {
            copy.set(key, value)
        }
    }
    return copy
}

console.log(appliedDefaults(extraFilters, moreDefaults))

// Can create a new map with copies and the most recently inserted key will persist
// const defaults = new Map()
//   .set('color', 'brown')
//   .set('breed', 'beagle')
//   .set('state', 'kansas');

// const filters = new Map().set('color', 'black');

// function applyDefaults(map, defaults) {
//   return new Map([...defaults, ...map]);
// }

// Next tip -> Keeping unique values with a Set
const allColors = ['black', 'black', 'red', 'blue']
// const uniqueSet = [...new Set(allColors)] // Spreading the Set into an array and returining those unique values!
const uniqueSet = colors => [...new Set(colors)]
console.log(uniqueSet(allColors))