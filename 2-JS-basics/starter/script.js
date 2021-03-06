/*
 * Variables ans data types
 */
/*
var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = "John and Mark";
var if = 23;
*/

/*
    (변수 돌연변이와 유형 강제)
* Variables mutation and type coercion
*/

/*
var firstName = "john";
var age = 28;

console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
    firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
    );
    
    // Variable mutation
    age = "twenty eight";
    job = "driver";
    alert(
        firstName +
        " is a " +
        age +
        " year old " +
        job +
        ". Is he married? " +
        isMarried
        );
        
        var lastName = prompt("What is his last Name");
        console.log(firstName + " " + lastName);
        */

/**********************************
 * Basic operators
 */

/*
var year, yaerJohn, yearMark;
now = 2018;

ageJohn = 28;
ageMark = 33;

// Math operators
yaerJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yaerJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older the John');
var x;
console.log(typeof x);
*/

/**********************************
 * Operator precedence
 
 var now = 2018;
 var yaerJohn = 1989;
 var fullAge = 18;
 
 // Multiple operators
 var isFullAge = now - yaerJohn >= fullAge;
 console.log(isFullAge);
 
 // Grouping
 var ageJohn = now - yaerJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);
 
 // Multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // = 26
 console.log(x, y);
 
 // More operators
 x *= 2;
 console.log(x);
 x += 10;
 console.log(x);
*/

/*****************************
 * CODING CHALLENGE 1
 */

/* 
    Mark and John are trying to compare their BMI (Body Mass Index), which is calcultated using the formula:BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolan variable containing information about whether Mark has a higher BMI than John
4. Print a string to the console containing the variable from step 3. 
(Something like "is Mark's BMI higher than John's? true").

마크와 존은 다음 공식을 사용하여 석회화된 체질량지수(BMI)를 
비교하려고 한다.
BMI = 질량 / 높이^2 = 질량 / (높이 * 높이)
(kg 단위의 질량과 미터 단위의 높이)

1. Mark와 John의 질량 및 높이를 변수에 저장
2. 두 BMI 모두 계산
3. Mark가 John보다 BMI가 더 높은지 여부에 대한 
   정보를 포함하는 Boolan 변수를 생성한다.
4. 3단계부터 변수가 들어 있는 콘솔에 문자열을 인쇄한다.
("Mark's BMI가 John's? true"와 같은 것)


var markKg, markHi, markBMI, isMarkBMI;
var johnKg, johnHi, markBMI, isJohnBMI;
markKg = 70;
markHi = 1.8;
johnKg = 60;
johnHi = 1.7;

markBMI = markKg / (markHi * markHi);
johnBMI = johnKg / (johnHi * johnHi);

console.log('mark : ' + markBMI);
console.log('john : ' + johnBMI);

if (johnBMI > markBMI) {
    console.log("Mark's BMI is higher than John's ");
} else {
    console.log("John's BMI is higher than Mark's ");
}

*/

/* 
isMarkBMI = markBMI > johnBMI;
isJohnBMI = johnBMI > markBMI;
console.log("is Mark's BMI higher than John's? " + isMarkBMI);
console.log("is John's BMI higher than Mark's? " + isJohnBMI);
 */

/********************************
 *  If / else statements
 */

/* var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = false;

if (isMarried) {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
} */

/****************************
 * Boolean logic
 
 var firstName = 'John';
 var age = 16;
 
 if (age < 13) {
     console.log(firstName + ' is a boy.');
    } else if (age >= 13 && age < 20) {
        console.log(firstName + ' is a teenager.');
    } else {
        console.log(firstName + ' is a man.');
    }
    
*/

/*****************************
 * The Ternary Operator and Switch Statements
 */

/* 

age >= 18
? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink =
age >= 18 ? `${firstName} drinks beer` : `${firstName} drinks juice`;
console.log(drink); */

/* var firstName = 'John';
var age = 16;
var job = 'teacher';
switch (job) {
    // 한 번에 여러 케이스 가능
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
} */

/*******************************
 * Truthy and Falsy values and equality operators
 */

//  falsy values: undefined, null, 0, '', NaN
// truthy balues: NOT falsy values
/* 
var height = undefined;

if (height) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}
 */

/* var johnTeamAvg = (89 + 120 + 103) / 3;
var mikeTeamAvg = (116 + 94 + 123) / 3;
var meryTeamAvg = (97 + 134 + 105) / 3;

console.log('John : ' + johnTeamAvg);
console.log('Mike : ' + mikeTeamAvg);
console.log('Mery : ' + meryTeamAvg);

if (johnTeamAvg > mikeTeamAvg && johnTeamAvg > meryTeamAvg) {
    console.log("congratulations John's Team You Win!!");
} else if (mikeTeamAvg > johnTeamAvg && mikeTeamAvg > meryTeamAvg) {
    console.log("congratulations Mike's Team You Win!!");
} else if (meryTeamAvg > johnTeamAvg && meryTeamAvg > mikeTeamAvg) {
    console.log("congratulations Mery's Team You Win!!");
} else {
    console.log('This game a draw');
} */
/* if (johnTeamAvg > mikeTeamAvg) {
    console.log("congratulations John's Team You Win!!");
} else if (mikeTeamAvg > johnTeamAvg) {
    console.log("congratulations Mike's Team You Win!!");
} else {
    console.log('This game a draw');
} */

/***********************
 * Functions
 
 function calculateAge(birthYear) {
     return 2018 - birthYear;
    }
    
    var ageJohn = calculateAge(1990); // 28
    var ageMike = calculateAge(1948); // 70
    var ageJane = calculateAge(1969); // 49
console.log(ageJohn, ageMike, ageJane);

function yearUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearUntilRetirement(1990, 'John');
yearUntilRetirement(1948, 'Mike');
yearUntilRetirement(1969, 'Jane');

*/

/***********************
 * Functions Statements and Expressions
 
 // Function declaration 함수 선언
 // function whatDoYouDo(job, firstName) {}

// Function Expressions 함수 표현
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            // return 하면 나가기 때문에 break 선언 필요x
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else';
    }
};

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Mike'));
console.log(whatDoYouDo('retired', 'Jane'));
 */

/********************************
 * Arrays

 //  Initialize(초기화) new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948); // 이 방식은 비추(귀찮)

console.log(names[2]);      //Jane
console.log(names.length);  //3

// Mutate(돌연변이를 일으키다) array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);
// (4) ["John", "Ben", "Jane", "Mary"]

// Different data types

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); // 배열의 끝에 요소 추가
john.unshift('Mr.'); // 배열의 처음에 요소 추가

console.log(john);
// (7) ["Mr.", "John", "Smith", 1990, "teacher", false, "blue"]

john.pop(); // 배열 끝 요소를 삭제
john.shift(); // 배열 첫 요소 삭제

console.log(john);
//(5) ["John", "Smith", 1990, "teacher", false]0: "John"1: "Smith"2: 19903: "teacher"4: falselength: 5__proto__: Array(0)

console.log(john.indexOf(23));
// -1 없다는 뜻

var isDesigner =
john.indexOf('designer') === -1
? 'John is NOT a designer'
: 'John IS a designer';
console.log(isDesigner);
// John is NOT a designer

 */
/* 
Coding challenge
function fCostCal(cost) {
    if (cost < 50) {
        cost = cost * 0.2;
    } else if (cost >= 50 && cost < 200) {
        cost = cost * 0.15;
    } else {
        cost = cost * 0.1;
    }
    return Math.ceil(cost);
}

var foodCost = [124, 48, 268];
var foodCostTip = [
    fCostCal(foodCost[0]),
    fCostCal(foodCost[1]),
    fCostCal(foodCost[2]),
];

console.log('food cost tip is ' + foodCostTip[0] + '$');
console.log('food cost tip is ' + foodCostTip[1] + '$');
console.log('food cost tip is ' + foodCostTip[2] + '$');
 */

/**********************************
 * Objects(객체, 개체) and properties(속성)
 

//  Objects literal(날 것의 obj)
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
};

console.log(john.firstName); // 성 출력
console.log(john['lastName']); // 이름 출력
var x = 'birthYear'; // x에 출생년 넣음
console.log(john[x]); // ==console.log(john[birthYear]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax(컴퓨터 언어의 문법)
// 새 개체 구문(그냥 이런 개 쩌는 방법도 있다)
var jane = new Object();
// 그냥 이렇게 새로 추가 가능
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/****************************
 * Objects and methods


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function () {
        // this == 현재 Objects를 의미 함
        this.age = 2018 - this.birthYear;
        // 현재 obj에 나이를 계산하여 넣음과 동시에 age에 값을 넣어서 요소를 추가 함
    },
};

john.calcAge();         // john obj calcAge Fn call
console.log(john);      // age가 추가 된 john Obj가 출력 됨
 */

/*******************
  * Coding challenge


var johnCalcBMI = {
    name: 'John',
    weight: 70,
    height: 1.8,
    calcB: function () {
        this.bmi = this.weight / Math.pow(this.height, 2);
    },
};

var markCalcBMI = {
    name: 'Mark',
    weight: 65,
    height: 1.7,
    calcB: function () {
        this.bmi = this.weight / Math.pow(this.height, 2);
    },
};
markCalcBMI.calcB();
johnCalcBMI.calcB();
console.log(
    "Mark's BMI : " + markCalcBMI.bmi + "John's BMI : " + johnCalcBMI.bmi
);

if (johnCalcBMI.calcB() > markCalcBMI.calcB()) {
    console.log("John's BMI height than Mark");
} else if (johnCalcBMI.calcB() < markCalcBMI.calcB()) {
    console.log("Mark's BMI height than John's");
} else {
    console.log('BMI same');
}
*/

/***************************
  * loop and iteration

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'boolean') continue;
    console.log(john[i]);
}

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
  */

/************************************
 * Coding challenge
 */
/* 
function fCostCal(cost) {
    if (cost < 50) {
        cost = cost * 0.2;
    } else if (cost >= 50 && cost < 200) {
        cost = cost * 0.15;
    } else {
        cost = cost * 0.1;
    }
    return Math.ceil(cost);
}

var foodCost = [124, 48, 268];
var foodCostTip = [
    fCostCal(foodCost[0]),
    fCostCal(foodCost[1]),
    fCostCal(foodCost[2]),
];

console.log('food cost tip is ' + foodCostTip[0] + '$');
console.log('food cost tip is ' + foodCostTip[1] + '$');
console.log('food cost tip is ' + foodCostTip[2] + '$');
 */
// ($) 124, 48, 268, 180, 42
// (tip) 20%(c<50),  15%(50<=c<200), 10%(200<=c)

var johnBill = {
    foodCost: [124, 48, 268, 180, 42],

    foodCostTipCalc: function () {
        this.foodCostTip = [];
        this.finFoodCost = [];
        for (var i = 0; i < this.foodCost.length; i++) {
            this.foodCostTip[i] = this.fCostCal(this.foodCost[i]);
        }
        for (var i = 0; i < this.foodCost.length; i++) {
            this.finFoodCost[i] = this.foodCost[i] + this.foodCostTip[i];
        }
    },
    fCostCal: function (cost) {
        if (cost < 50) {
            cost = cost * 0.2;
        } else if (cost >= 50 && cost < 200) {
            cost = cost * 0.15;
        } else {
            cost = cost * 0.1;
        }
        return Math.ceil(cost);
    },
};
johnBill.foodCostTipCalc();
console.log(
    'Food bill is ' +
        johnBill.foodCost +
        '\n your fin bill is' +
        johnBill.finFoodCost +
        '!!!'
);

var markBill = {
    foodCost: [77, 375, 110, 45],

    foodCostTipCalc: function () {
        this.foodCostTip = [];
        this.finFoodCost = [];
        for (var i = 0; i < this.foodCost.length; i++) {
            this.foodCostTip[i] = this.fCostCal(this.foodCost[i]);
        }
        for (var i = 0; i < this.foodCost.length; i++) {
            this.finFoodCost[i] = this.foodCost[i] + this.foodCostTip[i];
        }
    },
    fCostCal: function (cost) {
        if (cost < 100) {
            cost = cost * 0.2;
        } else if (cost >= 100 && cost < 300) {
            cost = cost * 0.1;
        } else {
            cost = cost * 0.25;
        }
        return Math.ceil(cost);
    },
};
markBill.foodCostTipCalc();
console.log(
    'Food bill is ' +
        markBill.foodCost +
        '\n your fin bill is' +
        markBill.finFoodCost +
        '!!!'
);
