//! ASYNCHRONOUS PROGRAMMING
/*
    - Synchronous programming is code read line by line

    - Asynchronous programming allows a program to do more than oe thing at a time.
    - Makes it possible to run long-running actions without stopping the program to wait for a response.

*/

//? Sunchronous Sample: Execution Stack
const secondSync = () => {
    console.log('Second Hello');
}

const firstSync = () => {
    console.log('First Hello');
    secondSync();
    console.log('End');
}

firstSync();

// "First Hello" - then "Second Hello" - then "End". Once the one before is completed, the next will execute.

//? Asynchromous Sample
const networkRequest = () => {
    setTimeout(() => {
        console.log('Async Code')
    }, 2000); // setTimeout has two arguments: callback (our console.log), and time measured in ms (milliseconds)
};
console.log('Hello World');
networkRequest();
console.log('The End');

// Even Loop": looks into the call stack and dermines if it is empty or not. If empty or not. If empty, it considers if there is any waiting callback that needs to be executed (our console.log('Async Code')).

//! API

/*
    API: Application Program  Interface

    - is NOT a database or server.
    - Allows us access points to server
        - comes in the form of ENDPOINTS
        - endpoints direct us to set of data.

    ? REST API
    - Representational State Transfer
        - creates an object of requesed data by the client, send values in response to user.  
    -Methods:
        CRUD
            Create (POST)
            Read (GET)
            Update (PUT)
            Delete (DELETE)
*/

//! FETCH()
/*
    - the fetch() method is an asynchronous method. Part of the browser - NOT JS.
    - The fetch() method starts the process of "fetching" a resource. Will return a promise and respond ONCE the promise is fullfilled.

        Promise:
            - an unknown value when created
            - represents the eventual fulfilled value or rejection (error)
        *Promises always one of these states:
            1. Pending intial state, neither fulfilled or rejected
            2. Fulfilled: meaning the operation completed successfully
            3. Rejected: Meaning the operation failed

*/