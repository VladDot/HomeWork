class Animal {
    constructor(name) {
        this.name = name
    }
    sayName(name) {
        console.log(`My name is ${name}`)
    }
}

class Cat extends Animal {
    sayHello(name) {
        console.log(`Hello from ${name}, I am a cat`);
    }
}
let cat = new Cat('cat')

cat.sayName('cat')
cat.sayHello('dog')

class Dog extends Animal {
    sayHello(name) {
        console.log(`Hello from ${name}, I am a dog`);
    }
}
let dog = new Dog('pes')

dog.sayName('dog')
dog.sayHello('cat')