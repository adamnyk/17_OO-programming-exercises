// PART I
class Vehicle {
    constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    }
    honk() {
        return 'Beep.';
    }
    toString() {
        return `${this.make} ${this.model} ${this.year}`;
    }
}

let myPfinder = new Vehicle('Nissan', 'Pathfinder', 2004);


// PART II
class Car extends Vehicle {
    constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
    }
}

let carosCRV = new Car('Honda', 'CRV', 1999);


// PART III
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!!';
    }
}

let carosMoto = new Motorcycle('Yamaha', 'V-Star 250', 2007);


// PART IV
class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        if (!(newVehicle instanceof Vehicle))
        // my first try
        // if (newVehicle.__proto__.__proto__.name && 
        //     newVehicle.constructor.name !== 'Vehicle') 
        {
            return "Only vehicles are allowed in here!";
        }
        this.vehicles.push(newVehicle);
        return 'Vehicle added!';
    }
}

let myGarage = new Garage(2);
let testCar = {name: 'testcar'};