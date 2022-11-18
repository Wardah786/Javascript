//Part I : function with no parameters

//Create a function called infoAboutMe() that takes no parameter.
//The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
//Call the function.


function infoAboutMe() {
    console.log("Hello, my name is Wardah, I'm very young, cannot disclose my age and my hobbies are painting and cooking");
}


//Part II : function with three parameters

//Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
//The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
//Call the function twice with the following arguments:
//infoAboutPerson("David", 45, "blue")
//infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor) {

    console.log("Your name is " + personName + ", you are " + personAge + " years old, " + " your favorite color is " + personFavoriteColor);
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

//Exercise 2 :

//John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
//Create a function named calculateTip() that takes no parameter.
//Inside the function, use prompt to ask John for the amount of the bill.
//Here are the rules
//If the bill is less than $50, tip 20%.
//If the bill is between $50 and $200, tip 15%.
//If the bill is more than $200, tip 10%.
//Console.log the tip amount and the final bill (bill + tip).
//Call the calculateTip() function.

function calculateTip() {
    const billAmount = Number(prompt('What is the amount of the bill?'));
    let tip;

    if (billAmount < 50) {
        tip = billAmount * 0.2;
    }
    else if ((billAmount >= 50) && (billAmount <= 200)) {

        tip = billAmount * 0.15;
    }
    else if ((billAmount > 200)) {

        tip = billAmount * 0.1;
    }
    console.log(`The tip amount is ${tip}, and the final bill is ${billAmount + tip}`);
}

calculateTip();



//Exercise 3


function isDivisible(divisor) {
    let sum = 0
    for (let i = 0; i <= 500; i++) {
        if (i % 23 == 0) {
            sum += i;
            console.log(i);
        }
    }
    console.log(`Sum : ${sum}`)
}
isDivisible();
//Add divisor Paramater
isDivisible(3);
isDivisible(45);

const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}
shoppingList = ["banana", "orange", "apple"];
function myBill() {
    let totalPriceOfShoppingList = 0;
    for (const item of shoppingList) {
        if (stock[item] != 0) {
            totalPriceOfShoppingList += prices[item];
            stock[item] -= 1;
        }
    }
    return totalPriceOfShoppingList;
}

console.log(myBill());
console.log(stock);






