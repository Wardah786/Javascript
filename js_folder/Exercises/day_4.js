//Write code to remove “Greg” from the people array.

//Write code to replace “James” to “Jason”.

//Write code to add your name to the end of the people array.

//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
const people = ["Greg", "Mary", "Devon", "James"];

for (let name in people) {

    if (people[name] == 'Greg') {

        (people.splice(name, 1));

        console.log(people);

    }

}


const people2 = ["Greg", "Mary", "Devon", "James"];

for (let name2 in people2) {

    if (people2[name2] == 'James') {

        (people2.splice(name2, 1, "Jason"));


        console.log(people2);
        people2.push("Wardah");
        console.log(people2)

    }

}
console.log(`Index of Mary in the array: ${people.indexOf("Mary")}`);


//Write code to make a copy of the people array using the slice method.
//The copy should NOT include “Mary” or your name.
//Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//Hint: Check out the documentation for the slice method
//Write code that gives the index of “Foo”. Why does it return -1 ?


let peopleCopy = people.slice(1, people.length - 1);
console.log(peopleCopy);
console.log(people.indexOf("foo"));
console.log(people);
last = people.slice(-1);
console.log(last);
console.log("\nPart II\n")
console.log("\nPart II - A\n")

for (let person of people) {
    console.log(person)
}
console.log("\nPart II - B\n")

for (let person of people) {
    console.log(person);
    if (person === "Jason") {
        break;
    }
}



//Exercise 2
var color = ["White", "Pink", "Yellow", "Green", "Black"];

var x = color.length;
for (var i = 0; i < x; i++) {
    console.log("My " + (i + 1) + " choice is " + color[i])
}

var suffixes = ["1st", "2nd", "3rd", "4th", "5th"];
var y = suffixes.length;
for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
        if (i == j) {
            console.log("My " + suffixes[j] + " choice is " + (color[i]))
        }
    }
}

//Daily Challenge

let pattern = 6;

console.log("\nWITHOUT USING A NESTED LOOP\n");

for (let i = 0; i < 6; i++) {
    console.log("* ".repeat(i + 1));
}

console.log("USING A NESTED LOOP\n");

let str = "";
for (let i = 0; i < 6; i++) {
    str = "";
    for (let j = 0; j <= i; j++) {
        str = str + "* ";
    }
    console.log(str);
}


