// 35_5-1 API ES6 and concept milestone practice
// 1. Object with property (string, boolean, number, object, array, method which will return a property value)

const exampleObject = {
    name: 'Sadik',
    isActive: true,
    age: 14,
    address: {
        street: 'Bagha Rajshahi',
        city: 'Rajshahi'
    },
    hobbies: ['reading', 'swimming', 'running'],
    getFullName: function () {
        return `${this.name} from ${this.address.city}`;
    }
};

console.log(exampleObject.name);
console.log(exampleObject.isActive);
console.log(exampleObject.age);
console.log(exampleObject.address.street);
console.log(exampleObject.hobbies);
console.log(exampleObject.getFullName());


// 2. template string minimum 3 property will be dynmic (nested object property, array second element, another property)
const person = {
    name: 'Rubel',
    address: {
        city: 'Rajshahi',
        zip: '6270'
    },
    hobbies: ['reading', 'cycling', 'swimming']
};

const age = 27

const message = `Assalamu Alaiqum, my name is ${person.name}. I live in ${person.address.city}, and my zip code is ${person.address.zip}. My second hobby is ${person.hobbies[1]}, and I am ${age} years old`;

console.log(message);

// 3.1: no parameter arrow function return 89
const myFuction = () => 89;
console.log(myFuction());
// 3.2: single parameter arrow function will divide input by 7
const divideBySeven = (number) => number / 7;

console.log(divideBySeven(14));
console.log(divideBySeven(49));

// 3.3. arrow function with parameter divide by 2 after sum lastly return

const processNumbers = (a, b) => (a + b) / 2;

console.log(processNumbers(10, 20));
console.log(processNumbers(7, 13));

// 3.4. multi-line arrow function two parameter.

const multiplyAndAdd = (a, b) => {
    const product = a * b;
    const sum = a + b;
    return product + sum;
};

console.log(multiplyAndAdd(3, 4));
console.log(multiplyAndAdd(5, 6));

// 4. map divide each element by 5

const numbers = [10, 15, 35, 55, 65];

const divideByFive = numbers.map(num =>num/5);

console.log(divideByFive);

// 5. map foreach filter find
// map
const numbers1 = [1, 2, 3];
const double = numbers1.map(num => num * 2);

console.log(double);

// forEach
const numbers2 = [1, 2, 3, 4,];
numbers2.forEach(num => console.log(num));

// filter 
const numbers3 = [1, 2, 3, 4];
const evenNumbers3 = numbers3.filter(num => num % 2 === 0);

console.log(evenNumbers3);

// find
const numbers4 = [1, 2, 3, 4];
const firstEven = numbers4.find(num => num % 2 === 0);

console.log(firstEven);

// last even 
const numbers5 = [1, 2, 3, 4, 5, 6];
const evennumbers = numbers5.filter(num => num % 2 === 0);
const lastEven = evennumbers.pop();

console.log(lastEven);


// 6. destructuring on object and array

// Array Destructuring Syntax
const [first, second9, third] = [1, 2, 3];
console.log(first);
console.log(second9);
console.log(third);

// Array Destructuring Example with default values:
const [fourth, fifth = 2] = [1];
console.log(fourth);
console.log(fifth);


// Array Destructuring skipping values

const [, second] = [1, 2, 3];
console.log(second);

// Object Destructuring Syntax
const { name, age1 } = { name: 'Mahfuz', age1: 33 }; 
console.log(name);
console.log(age1);

// // Object Destructuring Renaming variables:
const { name: fullName, age2: years } = { name: 'Maruf', age2: 43 };
console.log(fullName);
console.log(years);
// // Object Destructuring Default values:
const { name1, job = 'Engineer' } = { name1: 'Sohel' };
console.log(name1);
console.log(job);
// // Object Destructuring Nested destructuring:
const user = { name2: 'Sabbir', address: { city: 'Rajshahi' } };
const { name2, address: { city } } = user;
console.log(name2);
console.log(city);


