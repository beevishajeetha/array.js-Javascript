function isFirstElementPrime(arr) {
    // Check if array is empty
    if (arr.length === 0) {
        console.log("Array is empty.");
        return false;
    }

    // Get the first element of the array
    const num = arr[0];

    // Check if the number is less than 2, as prime numbers start from 2
    if (num < 2) {
        console.log("Number is not prime.");
        return false;
    }

    // Check for prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("Number is not prime.");
            return false;
        }
    }

    console.log("Number is prime.");
    return true;
}

// Example usage:
const array = [17, 4, 8, 11, 11, 17, 4];

isFirstElementPrime(array); // Output: Number is prime.
function findMostFrequentElement(arr) {
  // Check if array is empty
  if (arr.length === 0) {
    console.log("Array is empty.");
    return null;
  }

  // Create a hash table to store element counts
  const elementCount = {};
  for (const num of arr) {
    // Check if element exists in hash table
    if (elementCount[num]) {
      elementCount[num]++; // Increment count if found
    } else {
      elementCount[num] = 1; // Initialize count to 1 for new element
    }
  }

  // Find element with maximum count
  let mostFrequentElement = null;
  let maxCount = 0;
  for (const num in elementCount) {
    if (elementCount[num] > maxCount) {
      mostFrequentElement = num;
      maxCount = elementCount[num];
    }
  }

  return mostFrequentElement;
}

// Example usage:

const mostFrequent = findMostFrequentElement(array);
console.log("Most frequent element:", mostFrequent); // Output: Most frequent element: 17

checkEvenOdd(array);
function checkEvenOdd(arr) {
    // Check if array is empty
    if (arr.length === 0) {
      console.log("Array is empty.");
      return;
    }
  
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
  
      // Check if even using remainder after division by 2
      if (num % 2 === 0) {
        console.log(num + " is even.");
      } else {
        console.log(num + " is odd.");
      }
    }
  }
  function sumOfSquares(arr) {
    // Check if array is empty
    if (arr.length === 0) {
      console.log("Array is empty.");
      return 0;
    }
  
    // Initialize sum to 0
    let sum = 0;
  
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
  
      // Square the current element
      const square = num * num; // or Math.pow(num, 2)
  
      // Add the square to the sum
      sum += square;
    }
  
    return sum;
  }
  
  // Example usage:

  const sumSquares = sumOfSquares(array);
  console.log("Sum of squares:", sumSquares);
