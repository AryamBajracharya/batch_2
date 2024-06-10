// // console.log("Hello, World!")

// // var x = 4;
// // var y;
// // y=6;
// // console.log(y)

// // var y; // reassign and redeclare
// // y=2;

// // console.log(x)
// // console.log(y)

// // let z = 7;
// // let a = 'Hey';

// // console.log(z)
// // console.log(a)

// // const b = 10;
// // console.log(b)

// // //let z = 8; // cannot redeclare 

// // z = 8;
// // console.log(z) // RAM is temporary so the before value of z gets changed

// // // const c=9;
// // // c=10;         # reassign ra redeclare garna mildaina
// // // console.log(c) 

// // z = 5;
// // console.log(z)
// // var z;

// // m = 6;
// // console.log(m)     # HOISTED EFFECT
// // let m;

// // let m;

// // m = 6;
// // console.log(m)

// // const fullName = 'John Doe';   # CAMEL CASE 
// // const AttendanceSystemStudent = 'John Doe';  # PASCAL CASE
// // const last_name = 'Doe'; # SNAKE CASE



// // const first_name = 'Aryam';
// // const last_name = 'Bajracharya';
// // const collegeName = 'Patan College for Professional Studies(PCPS)';
// // const Age = '19';
// // const phoneNumber = '9803478720';
// // const Address = 'Alko, Lalitpur';

// // console.log([first_name, last_name, collegeName, Age, phoneNumber, Address].join('\n'));


// // let a;
// // console.log(a)


// // let a=null;
// // console.log(a)


// // Type conversion string to number

// // let y="7";
// // console.log(typeof b);
// // console.log(Number(b));

// // const encyclopedia = Number(b);
// // console.log(encyclopedia);
// // console.log(typeof encyclopedia);

// // // Type conversion number to string

// // let x="7";
// // console.log(typeof x);
// // console.log(Number(x));

// // const SNAKE = Number(x);
// // console.log(SNAKE);
// // console.log(typeof SNAKE);


// // // Operators

// // // Addition

// // var a = 10;
// // var b = 80;
// // var sum = a+b;
// // console.log(sum);

// // const name ="Sahira";
// // const concat= name + b;  // # CONCAT = string + number or string + string 
// // console.log(concat);


// // const fName = "Bibeekkk";
// // const age = 1;
// // const city = "Pode Tole";
// // console.log("My name is "+fName+" and I am "+age+" years old. I live in "+city);
// // console.log(`My name is ${fName} and I am ${age} years old. I live in ${city}`); // ` backtick use garyo vane no need to add 


// // const i = 100;
// // const j = 90;
// // const sub = i-j;

// // console.log(sub);
// // console.log(i*j)
// // console.log(i/j);

// // k = 5;
// // l = 4;
// // console.log(k%l);

// //double equal to and strict equal to
// const i= 10;
// const j= '10';
// console.log(i==j)
// console.log(i===j)
// console.log(i!=j)
// console.log(i!==j)


// // CONTROL FLOW

// // Conditional Statements

// // IF ELSE

// // if (condition){

// // }
// // else if(){
    
// // }
// // else{

// // }

// // let age = 18;
// // if (age >= 18){
// //     console.log("You are an adult");
// // }
// // else if (age >= 13){
// //     console.log("You are a teenager");
// // }
// // else{
// //     console.log("You are a child");
// // }

// let day= 8;
// if(day === 1 ){
//     console.log("First day of the week is Sunday.");
// }
// else if (day ===2){
//     console.log("Second day of the week is Monday.");
// }
// else if (day ===3){
//     console.log("Third day of the week is Tueday.");
// }
// else if (day ===4){
//     console.log("Fourth day of the week is Wednesday.");
// }
// else if (day ===5){
//     console.log("Fifth day of the week is Thrusday.");
// }
// else if (day ===6){
//     console.log("Sixth day of the week is Friday.");
// }
// else if (day ===7){
//     console.log("Seventh day of the week is Saturday.");
// }
// else{
//     console.log("Invalid");
// }


// // SWITCH CASE

// let fruits = " "
// switch(fruits){
//     case "MEEEWWWAAA":
//     console.log("MEEEWWWAAA in english = PAPAYA");
// break;
//     case "KHARBUJJJAAA":
//     console.log("KHARBUJJJAAA in english = WATERMELON");
// break;
//     case "KEEEERRAAAA":
//     console.log("KEEEERRAAAA in english = BANANNA");
// break;
//     case "SUNTALALAAA":
//     console.log("SUNTALALAAA in english = ORANGE");
// break;
// default:
//     console.log(`${fruits} FALFUL KHAO KHUS RAHOOOOO!!`);
// }



// // for(let i=1;i<10;i++){
// //   console.log(i);
// //}



// // for(let i=10;i>=0;i--){
// //     console.log(i);
// // }

// // let i=1;
// // while(i<=5){
// //     console.log(i);
// //     i++;
// // }

// // let i=5;
// // while(i>=0){
// //     console.log(i);
// //     i--;
// // }


// // let j=1;
// // do{
// //     console.log(j);
// //     j++;
// // }while(j<=10);

// // let i = 1,j=0;
// // while(i<=10){
// //     j=i+j;
// //     i++;
// // }console.log(j);

// // let factorial=0;
// // let i = 1;
// // while(i>=5) {
// //     factorial *=i;
// //     i--;
// // } 
// // console.log(factorial);

// // let arr=["sam","ram","hari"];
// // for(let i=0;i,arr.length;i++){
// //     console.log(arr);

// // }

// // for (let i=1;i<=5;i++){
// //     let square = i*i;
// //     console.log(square);
// // }

// //finding cube
// // let i =1;
// // while(i<=5){
// //     let cube = i**3;
// //     console.log(cube);
// //     i++;
// // }

// //the sum of elements i the array 
// // let arrNum =[1,4,6,7];
// // let sum =0;
// // for(let i in arrNum){
// // sum+=arrNum[i];
// // };
// // console.log(sum);

// //Write a for loop that prints the elements of an array in reverse order.**
// // let array=[9,0,5];
// // for (let i=array.length-1;i>=0;i--){
// //     console.log(array[i]);
// // }

// // let sum=0;
// // for(let i=1;i<=20;i++){
// //     if (i%2===0){
// //         sum+=i;
// //     }
// // } console.log(sum);

// // let prod=1;
// // for(let i=1;i<=15;i++){
// //     if (i%2!==0){
// //         prod=prod*i;
// //     }
// // }
// // console.log(prod);

// //making pattern

// let star="*";
// for(let i=1;i<=5;i++){
//   for(let j=1;1<=5;j++){
// }
// }console.log(star);
   

