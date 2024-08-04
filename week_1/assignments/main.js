// Assignment 1
// Write a function sum that finds the sum of two numbers.

function sum(a,b){

    let totalSum = a + b;

    return totalSum;
}
// let ans = sum(2,6);
// console.log(ans);

// Try passing in a string instead of a number and see what happens?

// let ans = sum("hey",6);
// console.log(ans);
// console.log(typeof ans);

// Assignment 2
// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){
    if(age > 18){
        return true;
    }
    else {
        return false;
    }
}

// let user = canVote(15);
// console.log(user);
// user = canVote(21);
// console.log(user);

// Assignment 3
// Write an if/else statement that checks if a number is even or odd. 
// If it's even, print "The number is even." Otherwise, print "The number is odd."

function evenOdd(num){
    if (num%2 == 0){
        console.log("The number is even.");
    } 
    else{
        console.log("The number is odd.");
    }
}

// evenOdd(22);

// Assignment 4
// Write a function called sum that finds the sum from 1 to a number

function nSum(num){
    let num1 = 0;
    for (let i = 1; i <= num; i++){
        num1 += i;
    }

    return num1;
}

// let ans = nSum(10);
// console.log(ans);


// Complex Types
// Assignment 1
// Write a function that takes a user as an input and greets them with their name and age

// function greet(user){
//     console.log("Hi " + user.firstName + " your age is " + user.age);
// }

// let user = {
//     firstName: "Rahul",
//     age: 23
// };

// greet(user);


// Assignment 2
// Write a function that takes a new object as input which has name , age  
// and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

// function greet(user){
//     let gender;
//     if(user.gender == "male"){
//         gender = "Mr.";
//     }else{
//         gender = "Mrs.";
//     }
//     console.log("Hi " + gender + user.firstName + " your age is " + user.age);
// }

// let user = {
//     firstName: "Rahul",
//     age: 23,
//     gender: 'male'
// };

// greet(user);


// Assignment 3
// Also tell the user if they are legal to vote or not

function greet(user){
    let gender;
    if(user.gender == "male"){
        gender = "Mr.";
    }else{
        gender = "Mrs.";
    }
    console.log("Hi " + gender + user.firstName + " your age is " + user.age);
    if (user.age >= 18){
        statusToVote = "legal";
    }else{
        statusToVote = "illegal";
    }
    console.log("You are " + statusToVote + " to vote.");
}

// let user = {
//     firstName: "Rahul",
//     age: 17,
//     gender: 'female'
// };

// greet(user);

// Assignment 4
// Write a function that takes an array of numbers as input, and returns a new array with only even values. 
// Read about filter in JS

function evenValues(arr){
    const newArr = arr.filter(checkNum);
    return newArr;
}

function checkNum(num){
    if (num%2 == 0){
        return true;
    }else{
        return false;
    }
}
// let arr = [32,11,45,24,56];
// let ans = evenValues(arr);
// console.log(ans);


// Assignment 5
// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

// function adultUsers(users){
//     let adultUsers = users.filter(isAdult);
//     return adultUsers;
// }

// function isAdult(user){
//     if (user.age > 18){
//         return true;
//     }else{
//         return false;
//     }
// }

// let users = [{
//         firstName: "Rahul",
//         age: 23,
//         gender: "male"
//     },
//     {
//         firstName: "Deven",
//         age: 16,
//         gender: "male"
//     },
//     {
//         firstName: "Arjun",
//         age: 35,
//         gender: "male"
//     }];

// let ans = adultUsers(users);
// console.log(ans);    


// Assignment 6
// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

function adultUsers(users){
    let adultUsers = users.filter(isAdult);
    return adultUsers;
}

function isAdult(user){
    if (user.age > 18 && user.gender == "male"){
        return true;
    }else{
        return false;
    }
}

let users = [{
        firstName: "Shiva",
        age: 23,
        gender: "male"
    },
    {
        firstName: "Ishika",
        age: 17,
        gender: "female"
    },
    {
        firstName: "Deven",
        age: 16,
        gender: "male"
    },
    {
        firstName: "Rishabh",
        age: 35,
        gender: "male"
    },
    {
        firstName: "Anjali",
        age: 35,
        gender: "female"
    }];

let ans = adultUsers(users);
console.log(ans);    
