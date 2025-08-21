let Car = {
    make : "Toyota",
    moderl :"Camry",
    year: 2022,

    start: function(){
        return `${this.make} car started/Launched in ${this.year}`
    }
}

console.log(Car.start())

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
class Vehical{
    
}