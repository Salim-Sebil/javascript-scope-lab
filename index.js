// Write your solution in this file!

//1 global scope

const burgers = ["Hamburger", "Cheeseburger"];

let featuredDrink = "Strawberry Milkshake"
//add burger function

function addBurger(){
    const newBurger = "Flatburger";
    burgers.push(newBurger)
}


//block scope

if(true){
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger)
}

//change featured drink function
function changeFeaturedDrink(){
    featuredDrink = 'The JavaShake'
}

console.log(burgers);
