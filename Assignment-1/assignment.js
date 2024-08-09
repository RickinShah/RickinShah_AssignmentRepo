// Checks if count of each alphabet in str1 and str2 is same or not
function isAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    let charCount1 = [];
    let charCount2 = [];

    for(let i = 0; i < str1.length; ++i) {
        charCount1[str1[i]] = (charCount1[char] || 0) + 1;
        charCount2[str2[i]] = (charCount2[char] || 0) + 1;
    }

    for(let char in charCount1) {
        if(charCount1[char] !== charCount2[char])
            return false;
    }

    return true;
}

// it calculates sum of the price by category. 
function calculateTotalSpentByCategory(transactions) {
    const categoryTotal = transactions.reduce((acc, transaction) => {
        const {category, price} = transaction;
        acc[category] = (acc[category] || 0) + price;
        return acc;
    }, {});

    const objToArr = Object.entries(categoryTotal).map(([category, total]) => ({ category, total }));

    return objToArr;
}

// loops through each element and checks which is larger element
function findLargestElement(numbers) {
    let largest = numbers.reduce((acc, number) => {
        return acc > number ? acc : number;
    }, undefined);

    return largest;
}

// check if the reverse of the provided string is same as original string
function isPalindrome(str) {
    str = str.toLowerCase();
    let reverseStr = str.split('').reverse().join('');

    return str === reverseStr;
}

// Gets the time before and after executing the sum of n elements and finds the difference
function calculateTime(n) {
    var startTime = new Date();
    
    let sum = n * (n + 1) / 2;
    console.log(sum);

    var endTime = new Date();
    timeTaken = (endTime.getMilliseconds() - startTime.getMilliseconds()) / 1000;

    return timeTaken;
}

// loops through each element of str and check if it is in vowels array
function countVowel(str) {
    vowels = [..."aeiouAEIOU"];

    return [...str].filter((a) => vowels.includes(a)).length;
}

// loops through each element and adds the element
function sumArray(numbers) {
    return numbers.reduce((acc, number) => {
        return (acc || 0) + number;
    }, undefined);
}

// Checks the last bit of each element is not 1
function filterEvenNumbers(numbers) {
    return numbers.filter((a) => !(a & 1));
}

// loops through each element in array and finds the smaller element
function findSmallestElement(numbers) {
    smallest = numbers.reduce((acc, number) => {
        return acc < number? acc : number;
    }, undefined);

    return smallest;
}

// splits the str into array then reverse the array and again join the array into string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Iterative Fibonacci
function fibonacci(n) {
    let digits = [0, 1]
    let fib = 0;

    for(let i = 0; i < n - 2; ++i) {
        fib = digits[0] + digits[1];
        digits[0] = digits[1];
        digits[1] = fib;
    }

    return fib;
}

// Set doesn't allow duplicate elements which is then converted to array
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

// splits the str into array and checks the char in each element of str and returns the length
function countOccurences(str, char) {
    return [...str].filter((a) => a === char).length;
}

// arr2's each element is checked with arr1's each element
function findCommonElements(arr1, arr2) {
    arr1 = Array.from(new Set(arr1));
    let arr3 = [];

    for(let i of arr1) {
        for(let j of arr2) {
            if(i === j) {
                arr3.push(i);
                break;
            }
        }
    }
    return arr3;
}

// sorts the list of Strings alphabetically
function sortStrings(arr) {
    return arr.sort();
}
