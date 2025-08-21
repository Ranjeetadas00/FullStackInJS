
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
console.log(account.balance);  //undefined
// console.log(account.#balance); //error as #balance is not accessible outside the class

// ==================Abstraction
// hides the complex impletation details

