console.log('1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.');
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

console.log('1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.');

console.log('1b. Add a new age to your array and repeat the step above to ensure it is dynamic.')
ages.push(45);
console.log(ages);

console.log('1c. Use a loop to iterate through the array and calculate the average age.');
for (var i = 0; i < ages.length; i++) {
    
}


console.log('2. Create an array called names that contains the following values: Sam, Tommy, Tim, Sally, Buck, Bob.');
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log('2a. Use a loop to iterate through the array and calculate the average number of letters per name.');

console.log('2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.');

console.log('3. How do you access the last element of any array?');
console.log('array.findLast()');

console.log('4.	How do you access the first element of any array?')
console.log('array.find()');

console.log('5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.');
let nameLengths = [3, 5, 3, 5, 4, 3];

console.log('6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.');
for (let i = 0; i < nameLengths.length; i++) {

}

console.log('7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in Hello and 3, I would expect the function to return HelloHelloHello).');
function repeatWords (word, n) {
    for (let i = 0; i < n; i++) {
        console.log(word*n);
    }
}

console.log('8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.');
function fullName (firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log('9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.')
let array = [];
function sumOfNumbers ([]) {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    if (sumOfNumbers > 100) {
        console.log(true);
    } else {
        console.log(false);
    }
}

console.log('10. Write a function that takes an array of numbers and returns the average of all the elements in the array.');
let array1 = [];
function average (array1) {
    return array1.reduce((a, b) => (a + b)/array.length);
}

console.log('11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.');
function compareAverages (array2, array3) {
    if (averageArray2 > averageArray2) {
        return true 
    } 
}

console.log('12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.');
function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside = true && moneyInPocket > 10.50) {
        return true;
    }
}

console.log('13. Create a function of your own that solves a problem.');