/*
* ****************
! Conditionals
* ****************

? FALSY VALUES:
    -false
    -0
    -"",'',``
    -null
    -undefined
    -NaN (not a number)

    When JS is expecting a boolean value and it is returned with one of these 6 values, it is evaluated as "falsy"


    */
   /*
    * ***************
    ! IF
    * ***************

    - "If" something is true, do "this thing"

    */

    let light = 'on';

    if(light == 'on') {
        console.log('The light is on');
    };

    let weather = 68;

    if(weather < 70) {
        console.log('Wear a jacket.');
    };

    let rain = true;

    if(weather < 70 && rain) {  // rain == true
        console.log('It is a little chilly and will possibly rain.');
        // new function
    };

    /*
    * ***************
    ! IF ELSE
    * ***************
    | If/Else statements allow us the ability to write out a chain of events.  
    */

    let today = 75;

    if(today < 70) {
        console.log('It is' + today + ', wear a jacket');
    } else {
        console.log('It is ' + today + ', No jacket needed.')
    }

    /*
    ! CHALLENGE
  
    Write an if else statement that checks your name;
    If it is your name, console log 'Hello, my name is <name>'
    If the name does not match, console.log 'Hello, what is your name?'
*/

/* mine
let name = "Keith";

if(myname = Keith) {
    console.log('Keith ' + name + ',Hello, my name is Keith?')
}else {
    console.log('John ' + name + ', Hello, what is you name?')
}
*/

let name = 'Keith';

if(name == 'Keith') {
    console.log('Hello, my name is ' + name + '.');
} else {
    console.log('Hello, is your name' + name + '?');
}

/*
* ***************
! ELSE IF  
* ***************
| This is a condition that would be checked if the above condition was not met.
*/

let cookTime = 40;

if(cookTime === 45) {
    console.log('Let us feast!')
} else if(cookTime >= 30) {
    console.log(`It has only been ${cookTime} minutes. Wait another 5 - 15 minutes.`)
}else if(cookTime >= 20) {
    console.log(`It has only been ${cookTime} minutes. Wait another 10 - 25 minutes.`)
} else {
    console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it...`)
}


// The end of the ELSE IF statement should have a simple "else" to finish it.

//! CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

/* MINE 

let age = 30

if(age <= 17) {
    console.log("Sorry, you're too young to do anything.")
}if(age >= 18) {
    console.log('You can vote!')
}if(age >= 21) {
    console.log('You can drink!')
}if(age >= 25) {
    console.log('You can rent a car!')
}
*/


CORRECT:

let age = 30;

if(age >= 25) {
    console.log(`${age} is old enough to rent a car`);
}else if(age >= 21) {
    console.log(`${age} is old enough to drink.`);
}else if(age >= 18) {
    console.log(`${age} is old enough to vote.`);
}else {
    console.log(`${age} is too young to do anything...`)
}

/*
* ***************
! TERNARIES
* ***************
|   -This is a quick way of considering an if/else statement. We are capable of writing out our conditional in a simple line.
*/


let name = 'Keith';

//if(name == 'Tina') {
//    console.log('Hello, my name is ' + name + '.');
//} else {
//    console.log('Hello, is your name' + name + '?');
//}

//? condition ? if true : else result

//      (1)                                 (2)                             (3)
myName === 'Keith' ? console.log(`Hello, my name is ${myName}`) : console.log(`Hello, is your name ${myName}?`);

/*
    1: Condition
    2: True ('if' true)
    3: False (else)
*/

//! CHALLENGE
// Take this if/else statement and make it into a ternary.
let lampOn = false;
let daytime = true;
if(lampOn == true && daytime != true) {
    console.log('The lamp is on during the night')
} else if(lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if(lampOn == true && daytime == true){
    console.log('The lamp is on during the day')
} else if(lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
}

let LampOn = false;
let daytime = true;

lampOn == true && daytime != true ? console.log('The lamp is on during the night')
    :lampOn != true && daytime != true ? console.log('The lamp is off during the night') 
    :lampOn == true && daytime == true ? console.log('The lamp is on during the day.') 
    :lampOn != true && daytime == true ? console.log('The lamp is off during the day.') 
    :console.log('what lamp');


/*
* ****************
! SWITCH
* ****************

    -executes a block of code depending on different cases
*/

let instructor = 'Ing';

switch(instructor) {
    case 'Ing' :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
        // Once each case has been evaluated and we return a result, we need to note to "break" out from our switch statement.
    case 'Zach' :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Josh' :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    default:
        console.log(`${instructor} is a part of the Web Dev Team.`);
        //Need to use a default to help us catch those cases when none are true.
}

instructor = 'Amanda';

switch(instructor) {
    case 'Ing':
    case 'Adam':
    case 'Eric':
    case 'Zach':
    case 'Donovan':
        console.log(`${instructor} is part of the Web Dev team`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
        console.log(`${instructor} is part of the Software Dev team.`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches.`);
}
//

switch(grade) {
    case 'A' :
        console.log(`${grade} is a part of the Web Dev Team.`);
        break;
    
    case 'Zach' :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Josh' :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Josh' :
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
        default:
            console.log(`${instructor} is a part of the Web Dev Team.`);
        //Need to use a default to help us catch those cases when none are true.
}
//
//
* ***
! CHALLENGE 
* ***
switch (grade) {
    case 'A' :
        console.log(`${grade} is is a passing grade.`);
        break;
    case 'B' :
        console.log(`${grade} is is a passing grade.`);
        break;
    case 'C' :
        console.log(`${grade} is is a passing grade.`);
        break;
    case 'D' :
        console.log(`${grade} is is a passing grade.`);
        break;
    case 'F' :
        console.log(`${grade} is is a passing grade.`);
        break;
        default:
            console.log(`${instructor} is a passing grade.`);
}
