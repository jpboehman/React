const { read } = require("fs");

// Tip: Building Readable Classes
class Coupon {
    // Constructor functions used to define a number of properties for the object's class
    constructor(price, expiration) {
        // By default, all of these properties are public
        this.price = price;
        this.expiration = expiration || 'two weeks';
    }
    getPriceText() {
        return `${this.price}`;
    }

    getExpirationMessage() {
        return `This offer expires in ${this.expiration}`;
    }

    isRewardsEligible(user) {
        return user.rewardsEligible && user.active;
    }

    getRewards(user) {
        if (this.isRewardsEligible(user)) {
            this.price = this.price * 0.9;
        }
    }

}
const coupon = new Coupon(5)
console.log(coupon.getExpirationMessage())
const user = {
    rewardsEligible: true,
    active: true,
}

// Next tip: Sharing methods with inheritance
class FlashCoupon extends Coupon {
  // Since we are extending off of the Coupon class, FlashCoupon inherits all existing properties and methods from Coupon
  // We want to edit the 'expiration' property from the inherited class and customize it for this subclass
  constructor(price, expiration) {
    // Call super() to access the parent constructor
    super(price);
    this.expiration = expiration || 'two hours';
  }
  getExpirationMessage() {
    return `This is a flash offer and will expire in ${this.expiration}`;
  }

  // Overriding parent methods
  // Anytime you call a method, the JavaScript engine first checks to see if the method exists on the current class. If not, the engine goes up the chain, checking each class or prototype
  // along the way. This means that you can override any method by creating a new method with the SAME NAME
  isRewardsEligible(user) {
    return super.isRewardsEligible(user) && this.price > 20; // Calls the parent method, and also adds another condition onto the current method
    // Note that super() in the constructor doesn't need a specific method call, but if you want to call any other methods on the parent class, you'll have to specify them, even if they have the same name
  }

  getRewards(user) {
    if (this.isRewardsEligible(user)) {
      this.price = this.price * 0.8;
    }
  }
}

const flashCoupon = new FlashCoupon(3)
// console.log(flashCoupon.getExpirationMessage()) // Since we inherited this method, we don't need to override it and have access to it immediately

// Next tip: Extend Exisitng Prototypes with Class
// A prototype is an object that's the base for the constructor function. All object instances derive properties from the prototype. In addition, new instances also use methods on the prototype

// To add a method to a prototype, you use the constructor name and you add the method to the prototype property as if you were adding a funciton or property to an object instance
Coupon.prototype.getExpirationMessage = () => {
    return `This offer expires in ${this.expiration}` // Remember this prototype syntax for adding methods to classes that already exist!
}

// Skipped a few tips on getters, setters, simple stuff

// Next tip: Creating Iterable Properties with Generators
// Generators most common use case is to transform objects into iterables
// To make a generator, you add an * after the function keyword. You then have access to a special method called next(), which returns a part of the function. Inside the function body,
// you return a piece of information with the keyword 'yield'. When executing the function, use the next() method to get the information yileded by the function

// When you call next(), you get an object containing two keys: 'value' and 'done'. The item you declare with yield is the value - 'done' indicates that there are no values left
function* getCairoTrilogy() {
    yield 'Palace Walk';
    yield 'Palace of Desire';
    yield 'Sugar Street';
}

// Really cool!
const trilogy = getCairoTrilogy()
// console.log(trilogy.next())
// console.log(trilogy.next());
// console.log(trilogy.next());
// console.log(trilogy.next()); // 'done': true
// Allows you to step through a function piece by piece

// Generators and Complex Data Structures
const spreadTrilogy = [...getCairoTrilogy()]
// console.log(spreadTrilogy) // Neat!

const readingList = {
    'Visit from the Goon squad': true,
    'Manhattan Beach': false,
}

for (const book of getCairoTrilogy()) {
    readingList[book] = false // ADding properties to this object
}
console.log(readingList)
console.log(Object.keys(readingList))

// Review Educative notes for more on Generators - really good example but it is complex

