
/* SPREAD OPERATOR

- used to expand elements of an array or properties of an object.

- allows elements or properties to be distribtued into a new array or object. **/


// const arr = [1,2,3]
// const newArr = [5,6, arr[0], arr[1], arr[2]];
// console.log("New array before speed operator:'" , newArr); 


// const ar = [1,2,3]
// const newAr = [5,6, ... ar];
// console.log("New array after speed operator:'" , newAr); 


// const array1 = [1,2,3];
// const array2 = [4,5,6];
// const combinedArray = [...array1, ...array2];
// console.log("Combining after two array:", combinedArray);


// const originalArray = [1,2,3];
// const copyArray = [...originalArray];
// console.log(copyArray);



/* REST OPERATOR

- used to collect multiple element into a single aaray or multiple object properties into a single object. **/

// const arr = [1,2,3,4,5];

// const first = arr[0];  // Extracting the first element
// const rest = arr.slice(1);  // Collecting the rest of the elements

// console.log("First element:", first);
// console.log("Rest of the elements", rest);



// const arr = [1,2,3,4,5];
// const [a,b, ...rest] = arr; // b structuring


// console.log(a)
// console.log(b)
// console.log(rest)



function add(... numbers){
    return numbers.reduce ((sum, num) => sum+num, 0);
}

console.log(add(1,2,3));
console.log(add(4,5,6,7));

