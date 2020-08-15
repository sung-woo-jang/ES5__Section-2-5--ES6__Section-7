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

// arrayCalc(years, calculateAge()); 로 쓰지 않는 이유는
// 콜백 함수로 쓰기 위해서다.(103번째 줄에서 함수를 호출하기 위해)
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
 */
/* 
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        };
    } else if (job === 'teacher') {
        return function (name) {
            console.log('what subjectg do you teach, ' + name + '?');
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
designerQuestion('Jane'); */

//   Immediately Invoked Functions Expressions
//  Lecture : IIFE (즉시 선언되는 함수 표현식)
/* 
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
 */
/********************************
 * 
 
 //  Lecture : Closures
 
 function retirement(retirementAge) {
     var a = ' years left until retirement.';
     return function (yearOfBirth) {
         var age = 2016 - yearOfBirth;
         console.log(retirementAge - age + a);
        };
    }
    
    var retirementGermany = retirement(65)(1990);
    var retirementUS = retirement(66)(1990);
    var retirementIceLand = retirement(67)(1990);
    
    function interviewQuestion(job) {
        return function (name) {
            if (job === 'designer') {
                console.log(name + ', can you please explain what UX design is?');
            } else if (job === 'teacher') {
                console.log('what subjectg do you teach, ' + name + '?');
            } else {
                console.log('Hello ' + name + ', what do you do?');
            }
        };
    }
    
interviewQuestion('designer')('John');
interviewQuestion('teacher')('Jane');
interviewQuestion('developer')('Mark');
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
                    " and I'm " +
                    this.age +
                    ' years old.'
            );
        } else if (style === 'friendly') {
            console.log(
                "Hey What's up? I'm " +
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
    age: 35,
    job: 'designer',
};

john.presentation('formal', 'morning');

// 호출 메서드의 첫 번째 인자는 항상 그 변수를 설정하는 것이다.
// 이케 호출하면 john 객체의 this변수는 emily로 변함.
john.presentation.call(emily, 'friendly', 'afternoon');
john.presentation.apply(emily, ['friendly', 'afternoon']);
// 둘이 다른 점은 인자를 배열로 보내냐 아니냐의 차이

// bind 메서드는 함수를 반환하기에 그것을 변수에 저장해야함
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');
// 이런 식으로 내부함수를 원하는 타이밍에 호출할 수 있는 장점이 있음
// 뭐랄까 메소드에서의 클로저 느낌

/////////////////////////////////////

var years = [1990, 1965, 1937, 2005, 1998];

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
/* isFullAge.bind(this, 20) = function isFullAge(el) {
    return el >= 20;    }; */
console.log(ages);
console.log(fullJapan);

/* 
(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        // 얘가 q1에서 호출되면 Question는 q1을 가리킨다
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ' : ' + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function (ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again :) ');
        }
    };

    var q1 = new Question(
        'Is JavaScript the coolest programming language in the world?',
        ['Yes', 'No'],
        0
    );

    var q2 = new Question(
        "What's the name of this course's teacher?",
        ['John', 'Micheal', 'Jonas'],
        2
    );

    var q3 = new Question(
        'What does best describe coding?',
        ['Boring', 'Hard', 'Fun', 'Tediuos'],
        2
    );

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();
 */
/* 
(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        // 얘가 q1에서 호출되면 Question는 q1을 가리킨다
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ' : ' + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;

        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :) ');
            sc = callback(false);
        }
        this.displayQuestion(sc);
    };

    Question.prototype.displayScore = function (score) {
        console.log('Your current score is: ' + score);
        console.log('----------------------------------');
    };

    var q1 = new Question(
        'Is JavaScript the coolest programming language in the world?',
        ['Yes', 'No'],
        0
    );

    var q2 = new Question(
        "What's the name of this course's teacher?",
        ['John', 'Micheal', 'Jonas'],
        2
    );

    var q3 = new Question(
        'What does best describe coding?',
        ['Boring', 'Hard', 'Fun', 'Tediuos'],
        2
    );

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;

        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        };
    }
    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }

    nextQuestion();
})();
 */
