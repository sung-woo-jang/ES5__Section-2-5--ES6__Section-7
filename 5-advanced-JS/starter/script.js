// Function constructor
/* 
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

// constructor에  새로운 instance를 생성시켜줌
// constructor.prototype.property
Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');
john.calculateAge(); // 26
jane.calculateAge(); // 47
mark.calculateAge(); // 68

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

console.log(john); //   {name: "John", yearOfBirth: 1990, job: "teacher"}
console.log(Person.prototype); //   {lastName: "Smith", calculateAge: ƒ, constructor: ƒ}
console.log(john.__proto__ === Person.prototype); //    true
 */

/* 
 //  Object.create

var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    },
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' },
});
 */
/* 
//  Primitives(원시 요소) vs objects

// Primitives
var a = 23;
var b = a;
a = 46;

// Objects
var obj1 = {
    name: 'John',
    age: 26,
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon',
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);           // 30
console.log(obj.city);      // San Francisco
 */
/* 
//  Lecture : Passing functions as arguments
// 함수가 다른 함수를 인수로 받아들이는걸 보자
var years = [1990, 1965, 1937, 2005, 1998];

// fn == 콜백 함수가 될 매개변수
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - 0.67 * el);
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
// 함수()가 아닌 그얄 쓰는게 콜백함수임 ↑
// 지금이 아닌 arrayClac 함수에 의해 호출되길 원한다는 의도
// 이렇게 나중에 호출되기 때문에 콜백함수라고 불림

var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages); // [26, 51, 79, 11, 18]
console.log(fullAges); // [true, true, true, false, true]
console.log(rates); // [189, 173, 154, -1, 195]
 */
/* 
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        };
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        };
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        };
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');

interviewQuestion('teacher')('Mark');
*/

/* 
//   Immediately Invoked Functions Expressions
//  Lecture : IIFE (즉시 선언되는 함수 표현식)

// 일반 함수 선언식
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// 데이터 프라이버시 확보, 다른 변수 방해 x
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5); // only true

(showName = function (name) {
    console.log(name || 'No Name');
})();               // No Name
showName('Rich');   // Rich
showName();         // No Name
 */

/*********************************
 * 
 //  Lecture : Closures
 
 function retirement(retirementAge) {
     var a = ' years left until retirement.';
     return function (yearOfBirth) {
         var age = 2016 - yearOfBirth;
        console.log(retirementAge - age + a);
    };
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

/***********************
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        };
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        };
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        };
    }
} 
/////////////////////////
function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    };
}

var interviewDesigner = interviewQuestion('designer');
var interviewJobTeacher = interviewQuestion('teacher');
var interviewJobCoder = interviewQuestion('coder');

interviewDesigner('John');
interviewJobTeacher('Jane');
interviewJobCoder('Makr');

*/

//////////////////////////////////////////////////////
// Lecture: Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log(
                'Good ' +
                    timeOfDay +
                    ", Ladies and gentlemen! I'm " +
                    this.name +
                    ", I'm a " +
                    this.job +
                    "and I'm " +
                    this.age +
                    ' years old.'
            );
        } else if (style === 'friendly') {
            console.log(
                "Hey! Wass up? I'm " +
                    this.name +
                    ", I'm a " +
                    this.job +
                    "and I'm " +
                    this.age +
                    ' years old. Have a nice ' +
                    timeOfDay +
                    '.'
            );
        }
    },
};

var emily = {
    name: 'Emily',
    age: 30,
    job: 'designer',
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');
// john.presentation.apply(emily, ['friendly', 'afternoon']);
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
/************************8
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
var years = [1990, 1965, 1937, 2005, 1998];

// fn == 콜백 함수가 될 매개변수
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
