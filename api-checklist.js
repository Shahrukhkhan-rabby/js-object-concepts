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
// 6. destructuring on object and array