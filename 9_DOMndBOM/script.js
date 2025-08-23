console.log("Hii... from script");
// console.lex-1

// ex-1
let hold = document.getElementById('changeTextButton')  //grab the element using id,
console.log(hold);

document.getElementById('changeTextButton').addEventListener('click',function(){console.log("The Text in Paragraph is changed");
    document.getElementById("myParagraph").textContent ="The Text in Paragraph is changed"
})

//ex-2