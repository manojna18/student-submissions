"use strict";

const submissions = [
  {
    name: "Jane",
    score: 45,
    passed: true
  },
  {
    name: "Joe",
    score: 77,
    passed: true
  },
  {
    name: "Jack",
    score: 59,
    passed: false
  },
  {
    name: "Jill",
    score: 88,
    passed: true
  }

]

const addSubmission = (array, newName, newScore) => {
  const addition = {
    name: newName,
    score: newScore,
    passed: (newScore >= 60)
  }
  array.push(addition);
  return array;
}

console.log(addSubmission(submissions, "Jerry", 89));

// findSmallestNumber: Write a function that takes an array of numbers and returns the smallest positive number.

const findSmallestNumber = (arrayOfNum) => {
  let smallestNum = arrayOfNum[0];
  for (let num of arrayOfNum) {
    if (num < smallestNum && num > 0) {
      smallestNum = num;
    }
  }
  return smallestNum;
}

const arrayOfNumbers = [10, 2, 4, 5, 8, -1];

console.log(findSmallestNumber(arrayOfNumbers));

// Declare a function named deleteSubmissionByIndex
//Parameter(s): array, index
//Functionality: remove an object from the array at the specified index using the splice method.

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
  return array;
}

console.log(deleteSubmissionByIndex(submissions, 3));

//Declare a function named deleteSubmissionByName
//Parameter(s): array, name
//Functionality: remove the object from the array that has the provided name.  Incorporate the findIndex method and the splice method.

const deleteSubmissionByName = (array, someName) => {
  let index = array.findIndex((item) => {
    return item.name === someName;
  })
  array.splice(index, 1);
  return array;
}

console.log(deleteSubmissionByName(submissions, "Joe"));

/*
Declare a function named editSubmission
Parameter(s): array, index, score
Functionality: update an object’s score in the array at the specified index. Use conditional statements to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise. No array method necessary.
*/

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = (score >= 60);
  return array;
}

console.log(editSubmission(submissions, 1, 90));

/*
Declare a function named findSubmissionByName
Parameter(s): array, name
Functionality: return the object in the array that has the provided name. Use the find method.
*/

const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  })
}

console.log(findSubmissionByName(submissions, "Jane"));

/*
Declare a function named findLowestScore
Parameter(s): array
Functionality: return the object in the array that has the lowest score. 
*/

const findLowestScore = (array) => {
  let lowestScorer = array[0];
  array.forEach((item) => {
    if (item.score < lowestScorer.score) {
      lowestScorer = item;
    }
  })
  return lowestScorer;
}

console.log(findLowestScore(submissions));

/*
Declare a function named findAverageScore
Parameter(s): array
Functionality: return the average quiz score.
*/

const findAverageScore = (array) => {
  let sum = 0;
  array.forEach((item) => {
    sum += item.score;
    return sum;
  })
  return Math.floor(sum / array.length);
}

console.log(findAverageScore(submissions));
console.log(submissions);

const filterPassing = (array) => {
  return array.filter((item) =>
    item.score >= 60
  )
}

console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  return array.filter((item) =>
    item.score >= 90
  )
}

console.log(filter90AndAbove(submissions));

//Extended Challenges

const createRange = (start, end) => {
  let arrayOfInt = []
  for (let i = start; i <= end; i++) {
    arrayOfInt.push(i);
  }
  return arrayOfInt;
}

console.log(createRange(6, 18));

const countElements = (array) => {
  let objectToReturn = [];
  for (let obj of array) {
    if (obj in objectToReturn) {
      objectToReturn[obj]++;
    } else {
      objectToReturn[obj] = 1;
    }
  }
  return objectToReturn;
}

let arrayOfCharacters = ['a', 'b', 'a', 'c', 'a', 'b', 'f', 'l', 'k', 'z', 'z', 'z', 'z', 'l']
console.log(countElements(arrayOfCharacters));
