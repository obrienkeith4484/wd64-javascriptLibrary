/*
* ***********
! VARIABLES
* ***********
*/

console.log(hello)
// The console log is a debugging tool

let a =2;

/*
  -let : is our KEYWORD
  - a  : is out NAME of our variable
  - =  : is our ASSIGNMENT OPERATOR
  - 2 : is our variable VALUE
*/

  let b= 1;

  console.log(a+ b);

  //! RESTRICTIONS
 /*
        - a variable name mst begin with a letter, underscore or a dollar sign.
        -numbers may follow the above characters, BUT cannot come first.
        -javascripts is case sensitive - 'hello' and 'Hello', these would be different variables.
        -no spaces are allowed in variable names.
        -camelCase is the best practice for naming
        -ex:
            let myName ='Keith';
            is easier to read than
            let myname = 'Keith';

*/

    let startingWithLetter = "Works";
    let _startWithUnderscore = "Works";
    let $startWithDollarSign = "Works";
    // let 4startsWithNumber = "Breaks";

    console.log(startingWithLetter,_startWithUnderscore, $startWithDollarSign);

    let PascalCase;
    let camelCase;
    let snake_case;

    /*
    * KEYWORDS

    var, let, and const

        - var: 'old' keyword for variable. ** We won't be using it as often but is still a viable one to use.

        - let: "new" keyword for variable. (introduced with ES6 *newest version of ECMAScript, which is a standarization of JS)

        -const: also "new" keyword that declares an UNCHANGEABLE, or constant, variable.
    */

    var variable = 'var variable';
    let letVariable = 'letvariable';

    // let function = 1;  Cannot use reserved words within a variable name - *function is a reserved word.
   
    
    /*
* ***********
! DECLARATIONS & INITIALIZATIONS
* ***********
*/
// Declarations are the LEFT SIDE of the assignment operater
//let x;

//Initializations are the RIGHT SIDE of the assignment operator
//let x = 10

//10 is our initialization 

let y;
console.log('declaration', y);
console.log(y);

y = 10;
console.log('initialization: ', y);

y = 33;
console.log('initialization 2:' , y);

// We've set our variable with out let keyword. With each iteration, we have redeclared what it is.

let z = "light";
console.log(z)

//? const

let today = 'Great';
const efa = 'Wonderful!';
console.log(today, efa)

today = 'Awesome!';
console.log(today, efa);

efa = 'Super';
console.log(today, efa);
// const allows us to make a variable that we don't  want to change.
