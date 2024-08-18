const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

// getting all properties name
const keys = Object.keys(bottle);
const values = Object.values(bottle);
const pairs = Object.entries(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
bottle.price = 100;
bottle.height = 18;
delete bottle.isCleaned;
console.log(bottle);