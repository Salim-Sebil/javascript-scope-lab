// Write your solution in this file!

//1 global scope

const burgers = ["Hamburger", "Cheeseburger"];

let featuredDrink = "Strawberry Milkshake"

//add burger function

function addBurger(){
    const newBurger = "Flatburger";
    burgers.push(newBurger)
}
addBurger()

//block scope

if(1 < 3){
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger)
}

//change featured drink function
function changeFeaturedDrink(){
    let featuredDrink = 'The JavaShake'
}
changeFeaturedDrink()

console.log(burgers);
