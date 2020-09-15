//? Equal
'3' == 3;
console.log("3" == 3);
console.log('Bob' === 'Bob'); // false

// == is equal

/*
    -JavaScript is helpful and does something known as coercion when comparing values
        - coercion is the process of converting a value from one type to another.
 */

//? Strict Equal
console.log("3" === 3)
console.log(3 === 3);

// === is strictly equal

console.log('Bob' === 'Bob');

//? Not Equal
console.log('35' != 3);

//? Strict Not Equal
console.log('3' !== 3);

//? Greater Than
3 > 2;

//? Less Than
2 < 3;

//? Greater Than or Equal to
3 >= 2;  // => "called a fat arrow" not the same thing as <=

//? Less Than or Equal to
2 <= 3;

//? And
2 && 3;


//? Order 'Or'
2 || 3;

//? Review

let age = 20; // age is 20

let ageStr = "20";

let booleanObject = true;

// let something = age == ageStr
console.log("----------------------");
console.log(age === ageStr);
console.log(typeof(age));
console.log(typeof(ageStr));
console.log(typeof(booleanObject));

// Type Coercion
// Object Oriented Language meaning everything (variable, string, number, function) is an object
// == does type coercion and converts an object so that it matches another object that it is being compared to
// age == ageStr returns True because JS converts one of the objects to match another
// age === ageStr returns False because JS sees that one is a number and the other is a string; therefore, NOT the same


