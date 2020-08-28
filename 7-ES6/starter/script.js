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

/* 
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
 */
/* 
// Lecture : Arrow functions 2

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            var str;
            str =
                'This is box number ' +
                self.position +
                ' and it is ' +
                self.color;
            alert(str);
        });
    },
};

// box5.clickMe();

// ES6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', () => {
            var str;
            str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    },
};

box6.clickMe();
 */

/* 
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str;
            str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    },
};

box66.clickMe();

function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function (friends) {
    var arr = friends.map(
        function (el) {
            return this.name + ' is friends with ' + el;
        }.bind(this)
        );
        console.log(arr);
    };
    
    var friends5 = ['Bob', 'Jane', 'Mark'];
    new Person('John').myFriends5(friends5);
    
    // ES6
    Person.prototype.myFriends6 = function (friends) {
        var arr = friends.map((el) => `${this.name} is friends with ${el}`);
        console.log(arr);
    };
    
    var friends6 = ['Jot Bob', 'Moon Jane', 'Mark Henri'];
    new Person('Penchi').myFriends5(friends6);
    
    */
/* 
// Lecture : Destructuring

// ES5
var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
const [name, year] = ['John', 26];

console.log(name);
console.log(year);

const obj = {
    firstName: 'John',
    lastName: 'Smith',
};

const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b } = obj;

console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year - 4;
    return [age, 65 - age];
}

const [age5, retirement5] = calcAgeRetirement(1990);
console.log(age5);
console.log(retirement5);
 */

/* 
//  Lecture : Arrays

const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

//  ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach((cur) => (cur.style.backgroundColor = 'dodgerblue'));

// ES5
for (var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        break;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}

// ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

*/
/* 
// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex((cur) => cur >= 18));
console.log(ages.find((cur) => cur >= 19));
 */
/* 
//  Lecture : Spread operator

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach((cur) => (cur.style.color = 'purple'));
 */

//  Lecture : Rest parameters
/* 
// ES5
function isFullAge5() {
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function (cur) {
        console.log(2016 - cur >= 18);
    });
}

// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {
    years.forEach((cur) => console.log(2016 - cur >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);

// ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function (cur) {
        console.log(2016 - cur >= limit);
    });
}

// isFullAge5(16, 1990, 1999, 1965);

// ES6
function isFullAge6(limit, ...years) {
    years.forEach((cur) => console.log(2016 - cur >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);

*/

// Lecture : Default parameters

/* 
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? (lastName = 'Smith') : lastName;
    nationality === undefined ? (nationality = 'american') : nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
 */
/* 
//  ES6
function SmithPerson(
    firstName,
    yearOfBirth,
    lastName = 'Smith',
    nationality = 'american'
) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
 */
/* 
//  Lecture : Maps

const question = new Map();
question.set(
    'question',
    'What is the official name of the lateste major JavaScript version?'
);
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :)');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
// console.log(question.size);

if (question.has(4)) {
    console.log('Answer 4 is here');
}

question.forEach((value, key) =>
    console.log(`This is ${key}, and it's set to ${value}`)
);

for (let [key, value] of question.entries()) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));
 */
/* 
//  Lecture : classes

// ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');
 */
/* 
//  Lecture : Classes and subClasses

// ES5
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};

var Athlete5 = function (name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
};

// prototype 수동설정???
Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function () {
    this.medals++;
    console.log(this.medals);
};

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.wonMedal();
johnAthlete5.calculateAge();

// ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olymicGames, medals) {
        super(name, yearOfBirth, job);
        this.olymicGames = olymicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/
/**
 *
 *
 *
 *
 *
 *
 *
 *
 */

/* 
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Michuhol extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    townSize() {
        const size = new Map();
        size.set(1, 'tiny');
        size.set(2, 'small');
        size.set(3, 'normal');
        size.set(4, 'big');
        size.set(5, 'huge');

        if (this.size >= 5) {
            this.size = 5;
        } else if (this.size <= 1) {
            this.size = 1;
        }

        console.log(
            `${this.name}-Dong은 ${this.buildYear}년에 생겼고 면적은 ${
                this.length
            }이고 동네는 ${size.get(this.size)}한 편입니다`
        );
    }
}

class Park extends Element {
    constructor(name, buildYear, tree, area) {
        super(name, buildYear);
        this.tree = tree;
        this.area = area;
    }

    density() {
        console.log(
            `${this.name} Park has a tree density of ${
                this.tree / this.area
            }trees per square ㎢`
        );
    }

    moreThan1000() {
        if (this.tree >= 1000) {
            console.log(`${this.name} Park has more than 1000 trees`);
        }
    }
}

const allTown = [
    new Michuhol('SungUi', 1914, 2.11, 2),
    new Michuhol('DoHwa', 1963, 3.85, 4),
    new Michuhol('YongHyeon', 1981, 4.22, 4),
    new Michuhol('JuAn', 1982, 6.18, 6),
];

const allPark = [
    new Park('SuBong', 1950, 765, 16.01),
    new Park('YongJung', 1987, 2765, 29.55),
    new Park('SeungHak', 1995, 978, 15.67),
];
function calc(a) {
    const sum = a.reduce((prev, cur) => prev + cur, 0);
    return [sum, sum / a.length];
}

function reportPark(p) {
    console.log(`------------공원 보고서-----------`);

    // 공원 개수랑 평균연령
    const age = p.map((el) => new Date().getFullYear() - el.buildYear);
    const [sum, averAge] = calc(age);
    console.log(
        `공원의 개수는 총 ${p.length}개 이고, 공원들의 평균 나이는 ${averAge} 입니다.`
    );
    // Density
    p.forEach((el) => el.density());

    // 나무 1000개 이상의 공원
    p.forEach((el) => el.moreThan1000());
}

function reportTown(t) {
    console.log(`------------미추홀구 보고서------------`);

    // 거리수, 총 길이, 평균 길이
    const len = t.map((el) => el.length);
    const [length, totalLength] = calc(len);
    console.log(
        `마을의 수는 총 ${t.length}개 이고, 총 길이는${length}㎢, 평균 길이는 ${totalLength}㎢이다 `
    );
    // 이름, 연도, 사이즈
    t.forEach((el) => el.townSize());
}

reportPark(allPark);
reportTown(allTown); */

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Michuhol extends Element {
    constructor(name, buildYear, length, size) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    sortSize() {
        const tSize = new Map();
        tSize.set(1, 'tiny');
        tSize.set(2, 'small');
        tSize.set(3, 'normal');
        tSize.set(4, 'big');
        tSize.set(5, 'huge');

        if (this.size >= 5) {
            this.size = 5;
        } else if (this.size <= 1) {
            this.size = 1;
        }

        console.log(
            `${this.name}-Dong은 ${this.buildYear}년에 생겼고, 면적은 ${
                this.length
            }이며 동네는${tSize.get(Math.floor(this.size))}한 편입니다.`
        );
    }
}

class Park extends Element {
    constructor(name, buildYear, numTrees, length) {
        super(name, buildYear);
        this.numTrees = numTrees;
        this.length = length;
    }

    density() {
        const parkDensity = this.numTrees / this.length;
        console.log(
            `${this.name}Park의 나무당 공원면적은 ${parkDensity}㎢입니다.`
        );
    }
    moreThan1000() {
        if (this.numTrees >= 1000) {
            console.log(
                `${this.name}-Park의 나무 개수는 ${this.numTrees}개 입니다 `
            );
        }
    }
}

const allTown = [
    new Michuhol('SungUi', 1914, 2.11, 2),
    new Michuhol('DoHwa', 1963, 3.85, 4),
    new Michuhol('YongHyeon', 1981, 4.22, 4),
    new Michuhol('JuAn', 1982, 6.18, 6),
];

const allPark = [
    new Park('SuBong', 1950, 765, 16.01),
    new Park('YongJung', 1987, 2765, 29.55),
    new Park('SeungHak', 1995, 978, 15.67),
];

function calc(arr) {
    const sum = arr.reduce((cur, value) => cur + value, 0);
    return [sum, sum / arr.length];
}

function treeCalc(arr) {
    let sum = 0;
    if (arr.numTreesm >= 1000) {
        sum++;
    }
    return sum;
}

function reportPark(p) {
    // 공원 개수, 평균나이
    const numAge = p.map((el) => new Date().getFullYear() - el.buildYear);
    const [sum, sumDiv] = calc(numAge);
    console.log(
        `미추홀구에는 공원이 ${p.length}개 있는데 공원들의 평균나이는 ${sumDiv}입니다`
    );
    // 공원 나무 면적
    p.forEach((el) => el.density());
    // 나무 1000개 이상 공원
    p.forEach((el) => el.moreThan1000());
}
function reportTown(t) {
    // 마을 개수, 총 면적, 평균 면적
    // 마을 이름, 연도, 면적, 동네 크기
}

reportPark(allPark);
reportTown(allTown);
