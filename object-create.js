// using object literal;
const student = { name: 'Sakib Al Hasan', job: 'cricketer' };
// constructor
const person = new Object();

// 3.
// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.job);
// 4. class  
class Peaple {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const peop = new Peaple('Manus', 12);
console.log(peop);


// function
function Manus(name) {
  this.name = name;
}
const man = new Manus('kader');
console.log(man);



