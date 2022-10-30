console.log('1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.');
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

console.log('1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.');
function lastMinusFirst (ages) {
    var first = ages[0];
    var last = ages[ages.length - 1]; 
    for (let i = 0; i < ages.length; i++) {
        return last - first 
   } 
} console.log( lastMinusFirst (ages)); 


console.log('1b. Add a new age to your array and repeat the step above to ensure it is dynamic.')
ages.push(45);
console.log(ages);
console.log(lastMinusFirst (ages));


console.log('1c. Use a loop to iterate through the array and calculate the average age.');
var sum = 0; 
ages.forEach(function(num) {sum += num});
average = sum / ages.length;
console.log(average);

console.log('2. Create an array called names that contains the following values: Sam, Tommy, Tim, Sally, Buck, Bob.');
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

console.log('2a. Use a loop to iterate through the array and calculate the average number of letters per name.');
var sum1 = 0; 
for (let i = 0; i < names.length; i++) {
    let lengthOfNames = names[i].length;
    console.log (lengthOfNames);
    sum1 += lengthOfNames;
}
average = sum1 / names.length;
console.log(average); 

console.log('2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.');
for (let i = 0; i < names.length; i++) {
    console.log(names.join(', '));
}

console.log('3. How do you access the last element of any array?');
console.log('array[array.length - 1]');

console.log('4. How do you access the first element of any array?')
console.log('array[0]');

console.log('5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.');
let nameLengths = []; 
for (let i = 0; i < names.length; i++) {
    nameLengths[i] = names[i].length;
}
console.log(nameLengths); 
    

console.log('6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.');
const sum6 = nameLengths.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0);
console.log(sum6);

console.log('7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in Hello and 3, I would expect the function to return HelloHelloHello).');
var word;
var n; 
function repeatWords (word, n) {
   if (n > 0) {
    return word.repeat(n);
   } else {
    return "";
   }
} 
console.log(repeatWords ("Hello", 3));

console.log('8. Write a function that takes two parameters, firstName and lastName, and returns a full name.');
function fullName (firstName, lastName) {
   return firstName + ' ' + lastName;
}
console.log(fullName ('Natalie', 'Mason')); 

console.log('9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.')
let array = [100, 200, 300];

function sumOfNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       sum += array[i];
   }
   if (sum > 100) {
       return true;
   } else { sum <= 100 
       return false
   }
} console.log(sumOfNumbers(array));

console.log('10. Write a function that takes an array of numbers and returns the average of all the elements in the array.');

function myaverage (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       sum += array[i];
    } return (sum / array.length);
}
console.log(myaverage(array));


console.log('11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.');
const firstArray = [6, 14];
const secondArray = [2, 12]; 
let total1 = 0 
let total2 = 0
function compareAverages (firstArray, secondArray) {
        for (let i = 0; i < firstArray.length; i++) {
          total1 += firstArray [i];
        }
            const averageOfFirstArray = total1 / firstArray.length;
            console.log(averageOfFirstArray);
        for (let i = 0; i < secondArray.length; i++) {
             total2 += secondArray [i];
        }
        const averageOfSecondArray = total2 / secondArray.length;
        console.log(averageOfSecondArray);
    if (averageOfFirstArray > averageOfSecondArray) {
        return true
    } else {
        return false
    }
}
console.log (compareAverages (firstArray, secondArray));

 
console.log('12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.');
var isHotOutside = true;
var moneyInPocket;

function willBuyDrink (isHotOutside, moneyInPocket) {
   if (isHotOutside && moneyInPocket > 10.50) {
       return true;
   } else {
        return false;
   }
} 
console.log(willBuyDrink (isHotOutside, 12));

console.log('13. Create a function of your own that solves a problem.');//Problem: am I able to shop at my preferred grocery store with my grocery budget this month, 
//or do I need to shop in bulk? This will help streamline the process of making the decision of where I will shop, based on my monthly grocery budget
var monthlyBudget;

function shopAtPreferredStore (monthlyBudget) {
    if (monthlyBudget >= 150) {
        return 'Shop where you please!'
    } else {
        return 'Shop in bulk and find some coupons'
    }
} 
console.log(shopAtPreferredStore(125));
console.log(shopAtPreferredStore(164));