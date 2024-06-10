//string, object, method manipulation
//string manipulation
//1. Concatenation (+ operator):
let a= "Black";
let b="White";
let c= a+''+b;
console.log(c);

//2.String Length
let str="Length";
let lenght= str.length;
console.log(lenght);

//3. Indexing and accessing characters
let str1= "String";
let char1= str1[1];
let char2= str1[str1.length-2];
console.log(char1);
console.log(char2);

//4. toUpperCase() and toLowerCase() Methods
let str2= "string";
let upperCase= str2.toUpperCase();
let lowerCase= str2.toLowerCase();
console.log(upperCase, lowerCase);

//5. indexOf() and lastIndexOf() Methods:
let str3= "Index of and Last index of";
let index= str3.indexOf("X");
let lastIndex= str3.lastIndexOf("I");
console.log(index, lastIndex);

//6. slice() method
let str4= "strings Method";
let strsliced= str4.slice(6);
console.log(strsliced);

//7. substring() Method
let str5= "strings Method";
let substr= str5.substring(0, 6);
console.log(substr);

//8. replace() Method:
let str6= "String Method";
let strReplace= str6.replace("Method", "String");
console.log(strReplace);

//9. split() method
let str7="String Method";
let strSplit= str7.split(',');
console.log(strSplit);

//10. trim() method
let str8="String Method";
let strTrim= str8.trim();
console.log(strTrim);

//11. charAt() method
let str9="string";
let strChar=str9.charAt(2);
console.log(strChar);

//12. charCodeAt() Method
let stri="string";
let strCode= stri.charCodeAt(2);
console.log(strCode);

//13. includes() method
let stri1= "String Method";
let strIncludes= str.includes("Method");
console.log(strIncludes);

//14. startsWith() and endsWith() method
let stri2="String Method";
let strStart= stri2.startsWith("Method");
let strEnds= stri2.endsWith("Method");
console.log(strStart, strEnds);

//15. repeat() method
let strRepeat= stri2.repeat(4);
console.log(strRepeat);

//16. match() Method
let strMatch= stri2.match(/S/);
console.log(strMatch);