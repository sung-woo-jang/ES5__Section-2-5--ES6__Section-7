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

 */

var markKg, markHi, markBMI, isMarkBMI;
var johnKg, johnHi, markBMI, isJohnBMI;
markKg = 70;
markHi = 1.8;
johnKg = 60;
johnHi = 1.7;
markBMI = markKg / (markHi *= markHi);
johnBMI = johnKg / (johnHi *= johnHi);
isMarkBMI = markBMI > johnBMI;
isJohnBMI = johnBMI > markBMI;
console.log("is Mark's BMI higher than John's? " + isMarkBMI);
console.log("is John's BMI higher than Mark's? " + isJohnBMI);

/*
console.log();
*/
