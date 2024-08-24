// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

// Instance method
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }

// Static method
    static describe() {
        console.log('Animals are living creatures.');
    }
}

// Child class (Dog)
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

// Instance method that overrides the parent method
    makeSound() {
        console.log(`${this.name} barks.`);
    }

// Dog-specific method
    mud() {
        console.log(`${this.name} is rolling in the mud.`);
    }
}

// Child class (Cat)
class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

// Instance method that overrides the parent method
    makeSound() {
        console.log(`${this.name} meows.`);
    }

// Cat-specific method
    scratch() {
        console.log(`${this.name} is scratching my arm. Ouch.`);
    }
}

// Static methods specific to Dog and Cat
Animal.describe = function() {
    console.log('Dogs and cats are very different.');
};

Dog.describe = function() {
    console.log('Dogs are your bestest friend.');
};

Cat.describe = function() {
    console.log('Cats are ferocious little creatures.');
};

// Local Testing

// Creating instances
const myDog = new Dog('Norman', 'Bulldog');
const myCat = new Cat('Mohu', 'Siamese');

// Testing instance methods
myDog.makeSound(); // Norman barks.
myCat.makeSound(); // Mohu meows.

myDog.mud(); // Norman is rolling in the mud.
myCat.scratch(); // Mohu is scratching my arm. Ouch.

// Testing static methods
Animal.describe(); // Dogs and cats are very different.
Dog.describe(); // Dogs are your bestest friend.
Cat.describe(); // Cats are ferocious little creatures.
