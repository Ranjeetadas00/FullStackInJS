// In JS Classes are just syntatic sugar over JS existing prototype based inheritance
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

let newCar = new Car("Toyata", "Corolla")
console.log(newCar.make);

// =======================Encapsulation
// Restrict direct accesss to the objects data we use #

class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance =this.#balance ;        //only you can access #balance inside the class
    }

    getbalance(){
        return `$ ${this.#balance}`
    }
}

let account  = new BankAccount();
console.log(account.getbalance()); //$ 0
// console.log(account.balance);  //undefined
// console.log(account.#balance); //error as #balance is not accessible outside the class

// ==================Abstraction
// hides the complex impletation details

class CoffeeMachine{
    start(){
        // call DB
        // Filter values etc..
        return `Starting machine.......`
    }

    brewCoffee(){
        //complex calculations
        return `Brewing Coffee..`
    }
    pressStartButton(){
        let msg1=this.start();
        let msg2=this.brewCoffee();
        return `${msg1} and ${msg2}`
    }
}

let myMachine = new CoffeeMachine();
console.log(myMachine.pressStartButton())

// ============================Polymorphism
// same method name but different behaviour

class Bird{
    fly(){
        return `Flaying.....`
    }

}
class Penguin extends Bird{
    fly(){
        return `Penguins can't fly....`
    }
}

let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());

// ========================Static Methods and properties/variables
// Static Methods and properties/variables are accessed only by class name -> ClassName.staticVer/method()

class Calculator{
    static add(a,b){
        return a+b;
    }
}
 let miniCals = new Calculator();
 console.log(Calculator.add(4,5));
//   console.log(miniCals.add(4,5));  // this will give error as add is a static methord and should be accessed only using Class Name
//  
//  ========================Adding Getters and Setters to have more control over the properties of class

// class Employee{
//     constructor(name,salary){
//         this.name = name;
//         this._salary = salary;
//     }

//     get salary(){
//         return this._salary;
//     }

//     set salary(value){
//         if(value<0){

//         }
//     }

// }
// let emp = new Employee("Alice", 50000);
// console.log(emp._salary);
////////////////////////////////////////////////////////////////

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);