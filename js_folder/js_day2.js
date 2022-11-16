let age = prompt("Please enter your age");
age = 18;
if (age > 18) {
    console.log("You're a big man")
}


let aGe = 18

if (age == 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!")
} else if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off")
};

let fruit = 'Papayas';

switch (fruit) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log('Sorry, we are out of ' + fruit + '.');
};

let a = 2 + 3;

switch (a) {
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('Exactly!');
        break;
    case 5:
        alert('Too large');
        break;
    default:
        alert("I don't know such values");
};
console.log(a);

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let credentials = {

    employee: "Wardah",
    userName: "WarMoor",
    password: "Welcome123",
}
let database = [
    credentials,
]

let newsfeed = [
    { userName: "dummy1", timeline: "dumb" },
    {},
    {}
];
console.log(credentials);




