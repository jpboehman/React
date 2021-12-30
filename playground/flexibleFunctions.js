// Tip -> Writing functions for testability
// Instead of struggling to make tests for our code, we should write code that is testable
// describe('format price', () => {
//   let taxStub;

const { request } = require('http');

//   beforeEach(() => {
//     taxStub = sinon.stub(taxService, 'getTaxInformation');
//   });

//   afterEach(() => {
//     taxStub.restore();
//   });

//   it('should return plus tax if no tax info', () => {
//     taxStub.returns(null);
//     const item = { price: 30, location: 'Oklahoma' };
//     const user = 'Aaron Cometbus';
//     const message = formatPrice(user, item);
//     const expectedMessage = 'Aaron Cometbus your total is: 30 plus tax.';
//     expect(message).toEqual(expectedMessage);
//   });

//   it('should return plus tax information', () => {
//     taxStub.returns(0.1);
//     const item = { price: 30, location: 'Oklahoma' };
//     const user = 'Aaron Cometbus';
//     const message = formatPrice(user, item);
//     const expectedMessage = 'Aaron Cometbus your total is: plus $3 in taxes.';
//     expect(message).toEqual(expectedMessage);
//   });
// });

// Dependency injection example. Instead of simply calling getTaxInformation, we're passing in the function as an argument!
// const formatPrice = (user, { price, location }, getTaxInformation) => {
//   const rate = getTaxInformation(location);
//   const taxes = rate ? `plus ${price * rate} in taxes.` : 'plus tax.';
//   return `${user} your total is: ${price} ${taxes}`;
// }

// const item = { price: 30, location: 'Oklahoma' };
// const user = 'Aaron Cometbus';
// console.log(formatPrice(user, item, () => null));
// console.log(formatPrice(user, item, () => 0.1));

// export { formatPrice };

// Updated tests with dependency injection -> No longer need to stub and override method calls!
// describe('format price', () => {
//   it('should return plus tax if no tax info', () => {
//     const item = { price: 30, location: 'Oklahoma' };
//     const user = 'Aaron Cometbus';
//     const message = formatPrice(user, item, () => null);
//     expect(message).toEqual('Aaron Cometbus your total is: 30 plus tax.');
//   });
//   it('should return plus tax information', () => {
//     const item = { price: 30, location: 'Oklahoma' };
//     const user = 'Aaron Cometbus';
//     const message = formatPrice(user, item, () => 0.1);
//     expect(message).toEqual(
//       'Aaron Cometbus your total is: 30 plus $3 in taxes.'
//     );
//   });
// });

// Good rule of thumb: If you're writing a function that calls an external function, pass in that external function as an argument

// Next tip: Reduce Complexity with Arrow Functions
// Arrow functions and destructuring
// const name = {
//   first: 'Lemmy',
//   last: 'Kilmister',
// };

const getName = ({ first, last }) => {
  return `${first} ${last}`;
};
// Note: When you're using any kind of special parameter action - destructuring, rest parameters, default parameters - you still need to include the parentheses!
// const name = {
//     first: 'Lenny',
//     last: 'Kilmister'
// }
const combineName = ({first, last}) => `${first} ${last}` // Since return statement is only one line, we don't need the curly braces or the return keyword
// console.log(combineName(name))


const combineNameObject = ({first, last}) => ({ fullName: `${first} ${last}` }) // When returning an object and omitting the return keyword, we need to wrap the whole thing in ()
// console.log(combineNameObject(name))

// Additionally, when you return a value using (), you aren't limited to a single line. You can return mult-line items while omitting the return statement!
const comic = {
    first: 'Peter',
    last: 'Bagge',
    city: 'Seattle',
    state: 'Washington'
}

// Example of returning multi-line items while omitting the return statement -> Super cool!
const getNameAndLocation = ({ first, last, city, state }) => ({
    fullName: `${first} ${last}`,
    location: `${city}, ${state}`
})
// console.log(getNameAndLocation(comic))


// Arrow functions and higher-order functions
// Higher-order functions are functions that return other functions. Call stack knowledge is important here!
// Draft 1: 
// const discounter = (discount) => {
//   return (price) => {
//     return price * (1 - discount);
//   };
// };
// const tenPercentOff = discounter(0.1);
// console.log(tenPercentOff(100));
// Draft 2:
const discounter = (discount) => (price) => price * (1 - discount);
const tenPercentOff = discounter(0.1);
// console.log(tenPercentOff(100));


// In all the examples, you invoked the higher-order functions by first assigning the returned function to a variable before calling that with another parameter
// That’s not necessary. You can call one function after the other by just adding the second set of parameters in parentheses right after the first
// This essentially turns a higher-order function into a single function with two different parameter sets
const result = discounter(0.1)(100); // Really neat!
// console.log(result)

// Next tip: Focused Parameters with Partially Applied Functions
// Paritally applied functions provide unique value by locking in parameters so you can complete the function later while still maintaining access to the original arguments
// They also isolate parameters so you can keep intentions clear
// Example data:
const building = {
  hours: '8 a.m. - 8 p.m.',
  address: 'Jayhawk Blvd',
};

const manager = {
  name: 'Augusto',
  phone: '555-555-5555',
};

const program = {
  name: 'Presenting Research',
  room: '415',
  hours: '3 - 6',
};

const exhibit = {
  name: 'Emerging Scholarship',
  contact: 'Dyan',
};

// Setup
// const mergeProgramInformation = (building, manager, program) => {
//     const { hours, address } = building
//     const { name, phone } = manager
//     const defaults = {
//         hours,
//         address,
//         contact: name,
//         phone
//     }
//     return { ...defaults, ...program } //  'hours' from program will override the value in defaults - remember!
// }
// console.log(mergeProgramInformation(building, manager, program))

// Re-factoring using higher order functions -> make the higher-order function take two parameters, and have it return a function that only takes one parameter
const mergeProgramInformation = (building, manager) => {
    const { hours, address } = building
    const { name, phone } = manager
    const defaults = {
        hours,
        address,
        contact: name,
        phone,
    }
    // Change coming here:
    return program => {
        return { ...defaults, ...program }
    }
}
// console.log(mergeProgramInformation(building, manager)(program)) // invokes the outer function, then invokes the inner function


//Re-using the rest operator
// zip() function


// Next tip -> Combine Currying and Array Methods for Partial Application
// COME BACK TO THIS TIP


// Next tip -> Prevent Context Confusion with Arrow Functions
// Scope pertains to functions and context pertains to objects!
// const validator = {
//   message: 'is invalid.',
//   setInvalidMessage(field) {
//     return `${field} ${this.message}`;
//   },
// };
// console.log(validator.setInvalidMessage('city'));
// This works because when the method is called from the validator object, the function creates a 'this' binding with the containing object as context
// Arrow functions DO NOT create a new 'this' binding when you use them, so the following will work
const validator = {
    message: 'is invalid',
    setInvalidMessages(...fields) {
        return fields.map(field => {
            return `${field} ${this.message}` // No 'this' binding within the arrow function, so we're able to access the object's property using 'this'
        })
    }
}
console.log(validator.setInvalidMessages('city'))
