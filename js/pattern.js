// //Right-Angled Triangle:

// function rightAngledTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('*'.repeat(i));
//     }
// }
// rightAngledTriangle(5);


// //Solid Rectangle:

// function solidRectangle(rows, cols) {
//     for (let i = 0; i < rows; i++) {
//         console.log('*'.repeat(cols));
//     }
// }
// solidRectangle(5, 7);


// //Inverted Triangle:

// function invertedTriangle(n) {
//     for (let i = n; i > 0; i--) {
//         console.log('*'.repeat(i));
//     }
// }
// invertedTriangle(5);


// //Pyramid:

// function pyramid(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
//     }
// }
// pyramid(5);


// //Inverted Pyramid:

// function invertedPyramid(n) {
//     for (let i = n; i > 0; i--) {
//         console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
//     }
// }
// invertedPyramid(5);


// //Hollow Rectangle:

// function hollowRectangle(rows, cols) {
//     for (let i = 0; i < rows; i++) {
//         if (i === 0 || i === rows - 1) {
//             console.log('*'.repeat(cols));
//         } else {
//             console.log('*' + ' '.repeat(cols - 2) + '*');
//         }
//     }
// }
// hollowRectangle(5, 7);


// //Cross:

// function cross(n) {
//     for (let i = 0; i < n; i++) {
//         let row = Array(n).fill(' ').map((_, idx) => (idx === i || idx === n - i - 1) ? '*' : ' ').join('');
//         console.log(row);
//     }
// }
// cross(5);


// //X:

// function x(n) {
//     for (let i = 0; i < n; i++) {
//         let row = Array(n).fill(' ').map((_, idx) => (idx === i || idx === n - i - 1) ? '*' : ' ').join('');
//         console.log(row);
//     }
// }
// x(5);


// //Number Triangle:

// function numberTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) {
//             row += j;
//         }
//         console.log(row);
//     }
// }
// numberTriangle(5);


// //Repeated Number Triangle:

// function repeatedNumberTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(String(i).repeat(i));
//     }
// }
// repeatedNumberTriangle(5);


// //Inverted Number Triangle:

// function invertedNumberTriangle(n) {
//     for (let i = n; i > 0; i--) {
//         let row = '';
//         for (let j = 1; j <= i; j++) {
//             row += j;
//         }
//         console.log(row);
//     }
// }
// invertedNumberTriangle(5);


// //Inverted Number Square:

// function invertedNumberSquare(n) {
//     for (let i = 0; i < n; i++) {
//         console.log('54321');
//     }
// }
// invertedNumberSquare(5);


// //Right-Aligned Triangle:

// function rightAlignedTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(' '.repeat(n - i) + '*'.repeat(i));
//     }
// }
// rightAlignedTriangle(5);


// //Inverted Number Ladder:

// function invertedNumberLadder(n) {
//     for (let i = n; i > 0; i--) {
//         let row = '';
//         for (let j = 1; j <= i; j++) {
//             row += j;
//         }
//         console.log(row);
//     }
// }
// invertedNumberLadder(5);


// //Alphabet Triangle:

// function alphabetTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 0; j < i; j++) {
//             row += String.fromCharCode(65 + j);
//         }
//         console.log(row);
//     }
// }
// alphabetTriangle(5);