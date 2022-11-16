let x = 5;
let y = 2;
if (x > y) {
    biggest = x;
}
console.log(`${biggest} is the biggest number among the numbers: ${x} and ${y}.`)

//Create a variable called newDog where it’s value is “Chihuahua”.
//Check and display how many letters are in newDog.
//Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
//Check if the variable newDog is equal to “Chihuahua”
//if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
//else, console.log ‘I dont care, I prefer cats’

newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());


//Prompt the user for a number and save it to a variable.
///Check whether the variable is even or odd.
//If it is even, display: “x is an even number”. Where x is the actual number the user chose.
//If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.


let log = prompt("It is numeric: ");

if (log % 2 == 0) {

    console.log(log + " is an even number ");

}

else {

    console.log(log + " is an odd number ");

};

//Exercise 4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
onlineUsers = users.length;
if (onlineUsers === 0) {
    console.log(" no one is online ")
}
if (onlineUsers === 1) {
    console.log(users[0] + " is online ")
}
if (onlineUsers === 2) {
    console.log(users[0] + " and " + users[1] + " are online ")
}

if (onlineUsers > 2) {
    console.log(users[0] + ", " + users[1] + " and " + (onlineUsers - 2) + " more are online")
}

// Daily Challenge
//Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
//For example, “The movie is not that bad, I like it”.

let sentence = "Lying is bad, truth is not."

//Create a variable called wordNot.where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let wordNot = sentence.indexOf("not");
console.log(wordNot);
//Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad = sentence.indexOf("bad");
console.log(wordBad);
//if the word “bad” comes after the word “not”, 
//you should replace the whole “not…bad” substring with “good”, 
//then console.log the result.
if (wordBad > wordNot) {
    console.log(text.replace(not / bad, "good"))
}
if (wordBad < wordNot) {
    console.log(sentence)
}
