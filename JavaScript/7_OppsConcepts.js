// prototype are used to define properties a d methods that can be shared by all the instances of an object

// let Car = {  //block scope variable Car
//     make : "Toyota",
//     moderl :"Camry",
//     year: 2022,

//     start: function(){
//         return `${this.make} car started/Launched in ${this.year}`
//     }
// }

// console.log(Car.start())

function Persion(name,age){
    this.name = name,
    this.age = age
}

let jhon = new Persion("John", 22)
console.log(jhon);
console.log(jhon.name);


// ---------------------Prototype methods
function Animal(type){
    this.type = type
}
Animal.prototype.speak = function(){
    return(`${this.type} make a sound`)
}

let dog = new Animal("Dog")
console.log(dog.speak());
// ==================================== magic (prototype Chaning)

Array.prototype.rd = function(){
    return `Custom method ${this}`
}

let myArr = [1,2,3]
console.log(myArr.rd())      //Custom method 1,2,3


let myNewArr = [1,2,3,4,6,7]
console.log(myNewArr.rd())  //Custom method 1,2,3,4,6,7 //individually identifies the array 

// =====================================Classes
// 1)Inheritance
class Vehical{
    constructor (make,model){
        this.make = make;
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehical{
    drive(){
        return `${this.make} : this is an inheritance example`
    }
}

let myCar = new Car("Toyata", "Corolla")
console.log(myCar.start());
console.log(myCar.drive());

