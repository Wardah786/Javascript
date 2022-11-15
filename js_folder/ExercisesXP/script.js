//Exercise 1
let favoriteFood = "Tandoori Chicken";
let favoriteTime = "Dinner";
let mealTime = " I love to eat " + favoriteFood + " at " + favoriteTime;
console.log(mealTime);

//Exercise 2
const myWatchedSeries = ["Tale of the nine tailed", "The guardian", "The big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

let myWatchedSeriesSentence = " You have to watch these serials! " + myWatchedSeries[0] + ", " + myWatchedSeries[1] + ", and " + myWatchedSeries[2];
console.log(myWatchedSeriesSentence);

let myWatchedSeriesSentence2 = " I really liked these serials! " + myWatchedSeries[2] + " ," + myWatchedSeries[0] + " ," + myWatchedSeries[1];
console.log(myWatchedSeriesSentence2);

//Part2 
myWatchedSeries.pop();
myWatchedSeries.push("Friends");
console.log(myWatchedSeries);

myWatchedSeries.push("Gotham");
console.log(myWatchedSeries);
myWatchedSeries.unshift("The Witcher");
console.log(myWatchedSeries);
myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries);
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);

//Exercise 3
let temperatureCelsius = 20;
let fahrenheit = temperatureCelsius / 5 * 9 + 32;
let varTemp = temperatureCelsius + "°C " + " is " + fahrenheit + " °F ";
console.log(varTemp);

//Exercise 4
let c;
let a = 34;
let b = 21;

console.log(a + b) //first expression
// Prediction:both are numbers, value returned should be 55
// Actual:55

a = 2;

console.log(a + b) //second expression
// Prediction:23, first variable a has been overided
// Actual:23

console.log(c);
//value of c: I'm guessing null or undefined
//actual: yes Undefined. 3/3 for exercise 4 :p

//Exercise 5
typeof (15);
// Prediction: number
// Actual:
console.log(typeof (15));

typeof (5.5);
// Prediction:
// Actual:
console.log(typeof (5.5));

typeof (NaN);
// Prediction:number
// Actual:
console.log(typeof (NaN));

typeof ("hello")
// Prediction:string
// Actual:
console.log(typeof ("hello"));

typeof (true);
// Prediction:boolean
// Actual:
console.log(typeof (true));

typeof (1 != 2)
// Prediction: boolean
// Actual:
console.log(typeof (1 != 2));

"hamburger" + "s"
// Prediction:undefined
// Actual:hamburgers xD
console.log("hamburger" + "s")

"hamburgers" - "s"
// Prediction:hamburger
// Actual:NaN= not a number
console.log("hamburgers" - "s")

"1" + "3"
// Prediction:4
// Actual:it didnt consider the operator, it attached the strings same as hamburger, result is 13
console.log("1" + "3");

"1" - "3"
// Prediction:
// Actual:-2 but in this case, it did the calculation
console.log("1" - "3");

"johnny" + 5
// Prediction:johnny5
// Actual:
console.log("johnny" + 5);

"johnny" - 5
// Prediction: can be boolean or can be undefined or can be j
// Actual:NaN-did not perform the calculation, ddnt attach string to number
console.log("johnny" - 5);

99 * "hello"
// Prediction:comment?
// Actual:error, crashes the whole page,if we remove the *, it says hello, only displaying the message
console.log("hello");

1 != 1
// Prediction:boolean, false
// Actual:
console.log(1 != 1);

1 == "1"
// Prediction:boolean, true
// Actual:
console.log(1 == "1");

1 === "1"
// Prediction:boolean, true
// Actual: false, maybe because 1 was attached as a string
console.log(1 === "1");

5 + "34"
// Prediction:534
// Actual:
console.log(5 + "34")

5 - "4"
// Prediction:1
// Actual:
console.log(5 - "4");

10 % 5
// Prediction:2
// Actual: 0, its percentage, remainder 0
console.log(10 % 5)

5 % 10
// Prediction:
// Actual:5, 5/10 remainder 5
console.log(5 % 10)

"Java" + "Script"
// Prediction:javascript
// Actual:
console.log("Java" + "Script")

" " + " "
// Prediction: 2 spaces?
// Actual:returns blank line good
console.log(" " + " ")

" " + 0
// Prediction: 0 in the middle
// Actual:
console.log(" " + 0)

true + true
// Prediction:
// Actual:2, returns index value 2
console.log(true + true)

true + false
// Prediction:
// Actual:1, in JS: Boolean in JS, true =1, false =0
console.log(true + false)

false + true
// Prediction:1
// Actual:same logic
console.log(false + true)

false - true
// Prediction:-1
// Actual:
console.log(false - true)

!true
// Prediction:false/0
// Actual:
console.log(!true)


3 - 4
// Prediction:-1
// Actual:
console.log(3 - 4)

"Bob" - "bill"
// Prediction:NaN, because it cannot calculate between string (-minus operator)
// Actual:
console.log("Bob" - "bill")
