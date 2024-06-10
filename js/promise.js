

// let promise = new Promise((resolve, reject)=>{
// let num1=8;
// let num2=1;
// let sub = num1-num2;
// if (sub<5){
//     resolve("Promise Resolved!");
// }
// else {
//     reject("Promise  Rejected");
// };
// });
// promise .then ((message)=>{
//     console.log(message);

// })
// .catch((error)=>{
//     console.log(error);
// });



//async and await

// function fetchData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("fetched");
//         },1000);
//     });
// }

// async function getData(){
//     const data=await fetchData();
//     console.log(data);
// }
// getData();


const numbers=[10,20,30,40,50];
// const foundNumber = numbers.find(
//     (num)=>num>30
// );
// console.log(foundNumber);
const filteredNumber = numbers.filter(
    num=>num>30
);
console.log(filteredNumber);

const squaredNumbers=numbers.map(num=>num/5);
console.log(squaredNumbers);