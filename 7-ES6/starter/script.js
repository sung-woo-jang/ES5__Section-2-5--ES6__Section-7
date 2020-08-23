// Lecture : let and const

/* 
// ES5
var name5, age5;

name5 = 'Jane Smith';
age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
 */
/* 
// ES5
function driverLicence5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(
        firstName +
            ', born in ' +
            yearOfBirth +
            ', if now officially allowed to drive a car.'
    );
}

driverLicence5(true);


// ES6

function driverLicence6(passedTest) {
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
    }
    console.log(
        firstName +
            ', born in ' +
            yearOfBirth +
            ', if now officially allowed to drive a car.'
    );
}

driverLicence6(true);

let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

console.log('\n\n');

(function () {
    var i = 23;

    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
})();

console.log('\n\n');

(function () {
    var i = 23;
    (function () {
        for (var i = 0; i < 5; i++) {
            console.log(i);
        }
    })();

    console.log(i);
})();
 */

/* 
// Lecture : Block and IIFEs

// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

// console.log(a + b);
console.log(c);

// ES5
(function () {
    var c = 3;
})();

// console.log(c);
*/
/* 
//  Lecture : Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log(
    'This is ' +
        firstName +
        ' ' +
        lastName +
        '. He was born in ' +
        yearOfBirth +
        '. Today, he is ' +
        calcAge(yearOfBirth) +
        ' years old.'
);

// ES6
console.log(
    `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
        yearOfBirth
    )} years old.`
);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('Smith'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
 */

// Lecture : Arrow functions

const years = [1990, 1965, 1982, 1937];
let thisYears = new Date().getFullYear();

// ES5
var ages5 = years.map(function (cur) {
    return thisYears - cur;
});
console.log(ages5);

// ES6
let ages6 = years.map((cur) => thisYears - cur);
console.log(ages6);

ages6 = years.map(
    (cur, index) => `Age element ${index + 1}: ${thisYears - cur}.`
);
console.log(ages6);

ages6 = years.map((cur, index) => {
    const now = new Date().getFullYear();
    const age = now - cur;
    return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
