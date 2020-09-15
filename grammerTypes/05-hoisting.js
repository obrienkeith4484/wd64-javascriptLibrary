/*
* *****************
! HOISTING
* *****************

    What is Hoisting?
        - JS pulls all variables and functions calls to the 'top' of their respective scope to be executed.
        - Only the declaration is pulled up, NOT the assignment.
*/

// console.log(hoistedVar);

// console.log(' How JS see hoistedVar: ', typeof hoistedVar);
// var hoistedVar = 'using var';
// let hoistedVar = 'using let';

// console.log(noVariable);


//? Hoisting in a Function
// This process is considering the same within a function. On the first pass, it reads it, pushes the declarations to the top and then executes them in the order that they are written.

function testHoist() {
    becomesGlobal = "not declared, it becomes part of the global scope ";
    console.log('Prior to declaring', insideFunc);
    var insideFunc = "Rules still apply here";
    console.log(insideFunc);
}

testHoist();
console.log(becomesGlobal);

// It is best practice to ALWAYS declare a variables regardless of wheather there are in a function of global scope. This makes it clear how it should be handled.

//? Using LET
// the keyword 'let' is block scoped and not function scoped.

console.log(letVariable);
let letVariable = 'Using Let';
// this throws a ReferenceError due to ESB not accepting undeclared variables. This is to ensure we ALWAYS declare our variables FIRST.


//? Hoisting Function
// Function Declaration:

hoistedFunc();

function hoistedFunc() {
    console.log('This is a hoisted function');
}

// Function Expressions:
// These are NOT hoisted.

expressionFun();

let expressionFunc = function () {
    console.log('works?');
}
