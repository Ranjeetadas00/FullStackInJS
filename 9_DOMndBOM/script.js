console.log("Hii... from script");
// console.lex-1

// ex-1
let hold = document.getElementById('changeTextButton')  //grab the element using id,
console.log(hold);

document.getElementById('changeTextButton').addEventListener('click',function(){console.log("The Text in Paragraph is changed");
    document.getElementById("myParagraph").textContent ="The Text in Paragraph is changed"
})

//ex-2
document.getElementById("highlightFirstCity").addEventListener("click",function(){
    let hold = document.getElementById('citiesList')  //grab the element using id,
    console.log(hold);
    console.log(hold.firstElementChild);
    hold.firstElementChild.classList.add("highlight")

})

//ex-3
document.getElementById("changeOrder").addEventListener("click", function(){
    let coffeeType = document.getElementById("coffeeType")
    console.log(coffeeType);
    coffeeType.textContent = "Expresso"
    coffeeType.style.backgroundColor = "brown"
    coffeeType.style.padding = "5px"
    
})

// ex4
document.getElementById("addNewItem").addEventListener("click",function(){
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"

    document.getElementById("shoppingList").appendChild(newItem)
})

// ex-5