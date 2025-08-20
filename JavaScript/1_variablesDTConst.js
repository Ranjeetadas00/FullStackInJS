console.log("Hello");
console.table({city:"BAngalore"})     //console has many different properties

/* Data types(DS)
String , Boolean , Number, null, Undefined , BigInt, Symbol, Object

*/
// Variables - > let or const , (Dont use var as it acts as global without any scope)
let score = 80
let name = "RAnjeeta Das"
let isLoggedin = false;

let teaTypes = ["Macha", "greenTea" , "tea" ]
let user = {firstName :"Ranjeeta", lastName:"Das"}

let getScore = score //refering to  sane value

const username = {firstName :"Ranjeeta", lastName:"Das"};
const dob = "25Mar1998"

// dob="6thJul"//will throw error 
console.log(dob)

username.firstName="RD"
console.log(username.firstName)
console.log(username);// the firstname inside Object will change to stop reassignment of const object we should use freez and seal()
// Object.freeze() makes an object immutable, preventing any changes to its properties (addition, deletion, or modification). Object.seal() allows modification of existing properties but prevents adding or deleting properties

