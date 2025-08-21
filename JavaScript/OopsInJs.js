// in console of any browser declare anything like -> let arr=[2,3,4] and type arr and check prototype
// prototype is basically extra property and functions available on Array, obj etc.

let computer = { cpu: 12 };
let lenovo = {
    screen: "HD",
    __proto__: computer
};
let hardware = {}

console.log(`computer`, computer.__proto__, lenovo.__proto__) //computer [Object: null prototype] {}

// ----------------------------------
let genericCar = { tyre: 4 }

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar)
console.log(`tesla`, tesla, genericCar, tesla.tyre) //tesla { driver: 'AI' } { tyre: 4 } 4

//better way
console.log("tesla->", Object.getPrototypeOf(tesla))  //tesla-> { tyre: 4 }  we can access the properties of generic car, better than using __proto__

// ------------------Constructors
// Constructors is a special type of Function

function Persion(name, age) {
    this.name = name;
    this.age = age;
}

function Car(make, model) {
    this.make = make;
    this.model = model;
}

let myCar  = new Car("Toyota","Honda")
console.log(myCar);

let myNewCar = new Car("Tata","Safari")
console.log();
// ---------'''''''''''''''''''''''''''''''''.............Functions

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}

let lt = new Tea("Lemon Tea")
console.log(lt.describe());     //this is a cup of Lemon Tea

function Animal(species,sound){
    this.species = species;
    this.sound = sound;
}

Animal.prototype.soundd = function(){
    return `${this.species} makes a ${this.sound} sound`
}

let dog = new Animal("Dog","Bhow")
console.log(dog)            //Animal { species: 'Dog', sound: 'Bhow' }
console.log(dog.soundd())       /// Dog makes a Bhow sound


let cat = new Animal("Cat","Meaoo")
console.log(cat.soundd())       // Cat makes a Meaoo sound

// .................................. Throw Error using Throw Keyword

// function 