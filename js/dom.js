

// let titleElement =document.getElementById('title');
// console.log(titleElement);


let readingElement =document.getElementsByClassName('reading');
console.log(readingElement);


let titleElement=document.getElementById("title");
console.log(titleElement.textContent);

let ele= document.getElementsByClassName("content");
console.log(ele);

const listItemElements=document.getElementsByTagName('li');
console.log(listItemElements.length);

let content= titleElement.textContent;
content="Hello world!!";
console.log(content);

// const paragraphElement = document.querySelector('.content');
// paragraphElement.innerHTML='This is a <strong> beauty.'

const paraELe2 = document.querySelectorAll('.content');
paraELe2[0].innerHTML='you are beauty';
paraELe2[1].innerHTML='This is called kooooooooo';

var inputElement = document.getElementById("myInput");
// console.log(inputElement.type);
// console.log(inputElement.value);
// inputElement.value="New Value";
// console.log(inputElement.value);

// console.log(inputElement.getAttribute("value"));
// inputElement.setAttribute("value","Newest Value");
// console.log(inputElement.getAttribute("value"));

if(inputElement.hasAttribute("id")){
    console.log("Attribute there");
}
else{
console.log("attribute no there");
}