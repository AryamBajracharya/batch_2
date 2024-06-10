/* Array 

- to store multiple values of same data type(homogeneous) in sequence

- Fix or Dynamic Size 

- Indexing - Start from 0 **/


let numbers = [2,3,1,5,4]

console.log(numbers[1]);



/* Methods

- function inside class and object **/


numbers.push(6);  // adding an element
console.log(numbers);

numbers.pop();  // Remove last element
console.log(numbers);

numbers.sort();  // Sort the array
console.log(numbers);



/* Objects

- data structure that allows to store data in the form of key-value pairs 

- key = unique

- value = key kei basis ma linxau 

- Heterogeneous = values of different data types can be stored. **/


const person = {
    name: "john",
    age: 30,
    hobbies: ["Sleeping", "Eating", "Repeating"],
};

// Accesing value in objects

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);


