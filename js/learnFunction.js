
// Funtion in JavaScript


/* Types of function
1. Named
2. Anonymous
3. Arrow (ES6) 
4. IIFE ( Immediately Invoked Function Expression
5. Generator
6. Constructor **/



function greet(firstName, lastName){

    return (`Hello, ${firstName} ${lastName}`);
}
 console.log(greet("Ghansyam", "Bihari"))


function sum(num1, num2){
    return (`Sum of these two numbers: ${num1+num2}`);
}

console.log(sum(65, 4))



/* SCOPE
1. Local
2. Global **/



// Function Expression or Anonyomous
 // function ko name dinu pardaina


// let greet = function(name){
//     console.log(name)
// };

// greet("Sanjan");  


// let difference = function(a, b){
//     return a-b;
// }

// console.log(difference(5,2))



// // Arrow Function (ES6)
// // function keyword not needed


// const mul = (a,b) => a*b;
// console.log(mul(2,3))   // in a single line  

// let product = (c,d) => {
//     return c*d;
// };

// console.log(product(5,10))



// let division = (i,j) => i/j;
// console.log(division(10,5))


// Constructor

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// let bibek = new Person ("Bibek", 100);
// console.log(bibek)


// Callback 

/* syncrohnous to asyncrohnous 

- multiple time use garyo ki callback fail vanxa **/




// Closure

/* outer function ko variable hamile inner function ma tanna sakxam ra outer function print garda inner function ni dekhauxa **/




// Callback or fallback

/* edi kunai function ko argument through arko function lai pathaidinxa vane **/




function add(a,b, printResult){
    printResult();
    //console.log('\n')

    return a+b;
}

let result = add(2,3, printResult);
console.log(result);


function printResult(){
    console.log("the result is printed below:");
}



// coding questions for callback 

function multiply(i, j, differenceCallback) {
    let product = i * j;

    let diff = differenceCallback(i, j);
    console.log("The results are printed below:");
    console.log("Product:", product);

    return i-j;
}

let output = multiply(5, 3, difference);
console.log("Subtracting i and j :", output);


function difference(i, j) {
    return i - j;
}



