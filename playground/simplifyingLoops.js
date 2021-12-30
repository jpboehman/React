// Section -> Simplifying Loops
// Tip -> Simplifying Loops with Arrow Functions
// Most of these loops will depend on callback functions

const { count } = require('console');
const { send } = require('process');

const capitalize = (name) => {
  return name[0].toUpperCase() + name.slice(1);
};

// One-line functions -> When the body of your function (the part inside the curly braces) is only one line, you can move everything (the fat arrow, the parameters, the return statement) onto a single line
// AND, if the function itself is only one line, you don't even need to use the return keyword. You return the result of the function body line automatically
const formatUser = name => `${capitalize(name)} is logged in`
// console.log(formatUser('jackson'))


// Next tip -> Write shorter loops with Array methods
// Nearly all of the iteration array methods will change either the size or the shape of the data in the array
// Do you want to change the size by reducing the number of members in the array by removing them?
// Do you want to change the shape by only getting the names of the team members?
// Do you want to do both and get the names of just the developers?
// -- Kinds of questions to keep in mind
// Dummy data for exercises:
const team = [
  {
    name: 'melinda',
    position: 'ux designer',
  },
  {
    name: 'katie',
    position: 'strategist',
  },
  {
    name: 'madhavi',
    position: 'developer',
  },
  {
    name: 'justin',
    position: 'manager',
  },
  {
    name: 'chris',
    position: 'developer',
  },
];

// map() method -> With map(), there's no need to setup a return array - that's included as part of the array method. There's also no need to push information - map() pushes the result
// of the function into its own return array
// const teamNames = team.map(member => member.name)
// const positionNames = team.map(member => member.position)
const teamNames = team.map(teamMate => teamMate.name)
const positionNames = team.map(teamMate => teamMate.position)

// console.log(`teamNames are: ${[...teamNames]} and positionNames are: ${positionNames}`)

// Next tip -> Pulling out subsets of data with filter() and find()
// Dummy data for exercises
const group = ['Michelle B', 'Dave L', 'Dave C', 'Courtney B', 'Davina M'];
// const startWithM = group.filter(member => member.startsWith('M'))
// console.log(startWithM)

// find() -> If you'd use a break in your loop, then using find() is appropriate
const findDaves = group => group.find(name => name.startsWith('D'))
// console.log(findDaves(group))

// Next tip -> forEach practice
const sailingClub = ['yi hong', 'andy', 'darcy', 'jessi', 'alex', 'nathan'];
let capitalized = []
const upperCase = sailingClub.forEach(member => capitalized.push(member.toUpperCase()))
// When you see a forEach function(), you know there's going to be a side effect

// Next tip -> Combining methods with Chaining
// Chaining means you can perform multiple actions on the same array without needing to save the output to variables each time
// Immediately calling a method on a returned object (which can be the original object) without reassigning the value first
const sailors = [
  {
    name: 'yi hong',
    active: true,
    email: 'yh@yhproductions.io',
  },
  {
    name: 'alex',
    active: true,
    email: '',
  },
  {
    name: 'nathan',
    active: false,
    email: '',
  },
];

// Before chaining
const active = sailors.filter(sailor => sailor.active)
const emails = active.map(sailor => sailor.email || `${sailor.name}@wicsail.io`)
// emails.forEach(sailor => sendEmail(sailor))
// console.log(active)
// console.log(emails)

// After chaining
const activeSailors = sailors.filter(sailor => sailor.active)
    .map(sailor => sailor.email || `${sailor.name}@wicsailing.io`)
    // .forEach(sailor => sendEmail(sailor))
console.log(activeSailors)
// With this, we are iterating seven total times, instead of 3 if we used a typical 'for' loop. This would be something worth noting in an interview. It's not terribly important unless we;re
// working with very large datasets. *Sometimes the minor performance increase is worth sacrificing for the greatly enhanced readability!*

// Next tip -> Transforming Array Data with reduce() - critical lesson!
// Dummy data for exercises
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

// When you see a reduce() method, the best place to start is at the end so you can see what kind of object you'll end up with. In this case, we can see we'll end up with an empty array, passed as the second argument
const colors = dogs.reduce((colors, dog) => {
  if (colors.includes(dog.color)) {
    return colors;
  }
  return [...colors, dog.color]; // MUST return the 'carry' value. If we forget to return it, then it will disappear. Spread syntax here allowing us to make a new array wby 'spreading' each argument out into its own value, hence the commas!
}, []);

// This is how we could do it with 'map'
const mappedSizes = dogs.map(dog => dog.size)
// console.log(`mappedSizes are: ${mappedSizes}`)

// Another practice with 'sizes'
const sizes = dogs.reduce((sizes, dog) => {
    return [...sizes, dog.size]
}, [])
// console.log(`sizes are ${sizes}`)
// YouTube reduce() example
// Before reduce() 
const numbers = [1, -1, 2, 3];
let sum = 0;
for (let n of numbers) {
    sum += n
}

// With reduce()
// 'accumulator' is similar to the 'sum' variable above - it is seen as '0' as the last argument. It is something that we initialize - the 'currentValue' parameter is going to set to one of the elements in the calling array
// The callback function will execute with each iteraton as well
const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue) // Far more elegant than a for loop!
// console.log(total)


// reduce() is very powerful! You can essentially re-create any array method just using reduce()
// reducers give you the flexibility to handle more values with ease
// Another example with OBJECTS -> Getting the unique values for all the keys in dogs
const developers = [
  {
    name: 'Jeff',
    language: 'php',
  },
  {
    name: 'Ashley',
    language: 'python',
  },
  {
    name: 'Sara',
    language: 'python',
  },
  {
    name: 'Jeff',
    language: 'javascript',
  },
];

// Want to count by language specialty
const aggregated = developers.reduce((specialties, developer) => {
  // console.log(`specialties is: ${JSON.stringify(specialties)}`)
      const count = specialties[developer.language] || 0 // If developer.language is falsy / 0, assign 0 to count
      return {
        ...specialties,
        [developer.language]: count + 1 // Note this syntax -> Spreading an object into another object -> property is in []!
      }
}, {})

// Getting the names of the developers and placing into a new Object -> Remember with reduce() functions, we need to return the Carry value each time!
const devNamesCount = developers.reduce((devNames, developer) => {
      const name = devNames[developer.name] || 0
      return {
        ...devNames,
        [developer.name]: name + 1
      }
}, {})
console.log(devNamesCount) // Yes!


// Next tip -> Reducing Loop clutter with for...in and for...each
console.log(Object.keys(developers))
const devMap = developers.map(developer => developer.name)