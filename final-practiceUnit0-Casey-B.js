//Casey Bowen's Unit 0 Final Project

/*
Description of the project:

As someone with a chronic illness, I’m always on the hunt for an application that helps me manage all of my chronic-illness related needs in one centralized location. This app would be for anyone with a chronic illness or health-related issues looking to centralize things like doctor’s appointment scheduling, symptom tracking, journalling, mood tracking, medication reminders, links for helpful resources, etc. The benefit would be an efficient and user-friendly one stop shop for chronic illness management - something that can be laborious and exhausting on its own. 

The dream app would have integrations with calendars and services, but for now, let’s stick to some basic functionality. The most important thing would be to create a user profile, gather some information, and to allow the user to track their symptoms. To track symptoms, the user would need to be able to select which symptom is present, and then report on a daily basis the severity of that symptom. Then, they’d be able to look across the months or years of that symptom, and compare it to other events in their life, starting or stopping of medications, treatments, etc. to really get an objective look at what may be helping or not helping their condition(s).

Symptom Tracker Requirements:
Takes in an input of a list of symptoms the user wants to track
Allows the user to rate the severity of each symptom every day
Must track this information across time - it needs to be stored
Allows the user to recall that information when they need to see an overview of their symptom progress.


Creates and stores a user profile with the following info:
Name
Age
Email
Primary health concern
*/

const readline = require('readline-sync'); //Requiring readline for user input

//First we have to define the user object. This section of code is an example of how we'd create
//a user class with the relevant constructors. (Lesson Objects). We also ask the user for inputs (Lesson Values, Data Types)
//and leverage those inputs with the correct data types by asking for an Int when getting the age. Finally, we create a new
//object using our class, and print it out to see that it's correct.

class User {
    constructor(name, email, age, concern) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.concern = concern;
    }
}

let name = readline.question("What is your name? Name: ");
let email = readline.question("What is your email? Email: ");
let age = readline.questionInt("What is your age? Age: ");
let concern = readline.question("What is your primary health concern or diagnosis that you'd like to track? Diagnosis/ Concern: ");

let firstUser = new User(name, email, age, concern);

console.log(firstUser); //Seeing that we made the right object with user input.

//Now let's make sure the inputs to the string were what we want. If the user includes spaces, we want to trim them from email.
//We also want their name in uppercase. Then, we check our work. This demonstrates use of the string methods.

firstUser.name = firstUser.name.toUpperCase();
console.log(firstUser.name);

firstUser.email = firstUser.email.trim();
console.log(firstUser.email);


//Now let's make an array that would store the symptom levels being tracked. Say we decided to track Migraine pain levels over time. 
//We'd want to ask the user for inputs, then store them in an array.

let monRating = readline.questionInt("On a scale of 1 to 10, how severe was your headache on Monday? Input: ");
let tuesRating = readline.questionInt("On a scale of 1 to 10, how severe was your headache on Tuesday? Input: ");
let wedRating = readline.questionInt("On a scale of 1 to 10, how severe was your headache on Wednesday? Input: ");

//This uses what we learned in the strining characters together lesson and array lessons to use ` notation in order to log the ratings to the
//console while calling the various indices in the array.
//We would want to create an array "headacheTracking" to store the pain ratings for each day and populate them with user input.

let headacheTracking = [monRating, tuesRating, wedRating];
console.log(`Your headache ratings for this week were: 
    Monday: ${headacheTracking[0]}
    Tusday: ${headacheTracking[1]}
    Wednesday: ${headacheTracking[2]}`);

//Now let's use some control structures and logic to check to see if a user is tracking a particular symptom or not.
//This assumes that the user is tracking their headache symtoms. This is also input we could get from the user if we wanted to.
//This uses the lessons on data types and on logic.

let trackingHeadaches = true;

if (trackingHeadaches) {
    console.log("You are tracking your headache symptoms.");
}
else {}


//Now let's use a for loop to do some math on all the symptom numbers in the array. 
// This will use lessons from the logic structures lesson to add all indices of the array one by one in a for loop.
//This uses the lesson on arrays, data types and logic.

let arraySum = 0; //establishing the sum number we will use in the for loop
let sampleSymptoms = [3,7,4,2,2,5,7,8,9,8,5,3,2,0];
for (let i = 0; i < sampleSymptoms.length; i++) {
    arraySum += sampleSymptoms[i];
}
console.log("Your lislt of symptom ratings are: " + arraySum);

//Now, let's say someone wants to add a symptom rating to the array. We would use the push() method from the Math module.
//Then we check to see if the 4 rating was added to the end of the array. This uses the lesson using arrays (the push method)

sampleSymptoms.push(4);
console.log(sampleSymptoms);


//Using the math module I input the array to get the max or min of the array to find the best and worst symptomatic days.
//This leverages the math module lesson.
// let worstDay = Math.min(sampleSymptoms);
// let bestDay = Math.max(sampleSymptoms);

function minMaxOpp(array) {
    min = Math.min(...array)
    max = Math.max(...array)
    let minMaxArray = [min, max];
    return minMaxArray;
}

//then we use our array knowledge to find the index of the min and max days so we can tell the 
// user on what day they had their best and worst symptoms.
//This uses the data types, objects and using arrays lessons.

let minMaxDays = minMaxOpp(sampleSymptoms);
minMaxOpp(sampleSymptoms);
console.log("Printing the minimum and maximum days to check our work: " + minMaxDays); //checking our work
let worstDay = sampleSymptoms.indexOf(minMaxDays[0]);
let bestDay = sampleSymptoms.indexOf(minMaxDays[1]);

//we tell the user which days were the best and worst. This uses the stringing characters together lesson. 

console.log(
    `Your worst rating was ${minMaxDays[0]} on day ${worstDay}
    Your best rating was ${minMaxDays[1]} on day ${bestDay}.`
);

//These are a few examples of ways we'd leverage the knowledge built in this course to help build out application.