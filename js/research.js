// if else

let character = 'G';
if (character >= 'G' && character <= 'Z') {
    console.log("Uppercase");
} else if (character >= 'g' && character <= 'z') {
    console.log("Lowercase");
} else {
    console.log("The character is not a letter.");
}


// Switch Case

let weeks = "Sunday"; 

switch(weeks) {
    case "Sunday":
        console.log("First day of the week");
        break;
    case "Monday":
        console.log("Second day of the week");
        break;
    case "Tuesday":
        console.log("Third day of the week");
        break;
    case "Wednesday":
        console.log("Fourth day of the week");
        break;
    case "Thursday":
        console.log("Fifth day of the week");
        break;
    case "Friday":
        console.log("Sixth day of the week");
        break;
    case "Saturday":
        console.log("Seventh day of the week");
        break;
    default:                                                            // not available value show garna milxa
        console.log(`${weeks} you know there are 7 days in a week.`);
}