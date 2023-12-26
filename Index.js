//MATH ALGORITHMS

// fibonacci series:-
//The Fibonacci series can be represented as:
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,
//The Fibonacci series is an infinite series of numbers that begins with 0 and 1.
// Each number in the series is the sum of the two numbers that come before it. For example,
// 2 is found by adding the two numbers before it (1 + 1),
 //and 3 is found by adding the two numbers before it (1 + 2).
const fibNo = (n) => { 
  const fib = [0, 1];
  for (var i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};
console.log("Fib seq is:-", fibNo(5));
console.log("Fib seq is:-", fibNo(7));

//factorial:-
//Factorial of a positive integer (number) is the sum of multiplication of all the integers 
//smaller than that positive integer. 
//For example, factorial of 5 is 5 * 4 * 3 * 2 * 1 which equals to 120.
const factorial = (n) => {
  let element = 1;
  for (let i = 2; i <= n; i++) {
    element = element * i;
  }
  return element;
};
console.log("factorial is:-", factorial(5));
//prime OR not
//In math, a prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. 
//A number must be a "natural number" for it to be prime and infinity is not a natural number.
const prime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let index = 2; index < n; index++) {
    if (n % index === 0) {
      return false;
    }
  }
  return true;
};
console.log("is Prime?:-", prime(5));
console.log("is Prime?:-", prime(4));
console.log("is Prime?:-", prime(3));

const primeOptimal = (n) => {
  if (n < 2) {
    return false;
  }
  for (let index = 2; index <= Math.sqrt(n); index++) {
    if (n % index === 0) {
      return false;
    }
    return true;
  }

  return;
};
console.log("is Prime?:-", primeOptimal(5));
console.log("is Prime?:-", primeOptimal(4));
console.log("is Prime?:-", primeOptimal(3));
//isPowerOfTwo:-
//Keep dividing the number by two, i.e, do n = n/2 iteratively. In any iteration,
// if n%2 becomes non-zero and n is not 1 then n is not a power of 2.
// If n becomes 1 then it is a power of 2. 
const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};
console.log("isPowerOfTwo ?:-", isPowerOfTwo(1)); //true
console.log("isPowerOfTwo ?:-", isPowerOfTwo(4)); //true
console.log("isPowerOfTwo ?:-", isPowerOfTwo(2)); //true

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) == 0;
}
console.log("isPowerOfTwoBitWise ?:-", isPowerOfTwoBitWise(1)); //true
console.log("isPowerOfTwoBitWise ?:-", isPowerOfTwoBitWise(4)); //true
console.log("isPowerOfTwoBitWise ?:-", isPowerOfTwoBitWise(2)); //true

//RECURSION

//fibonacci in recursion
const fibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2); 
};
console.log("fibonacci in recursion:-", fibonacci(6));

const recursiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};
console.log("recursiveFactorial:-", recursiveFactorial(5));

//SEARCH

//Linear Search:-Linear Search is defined as a sequential search algorithm that 
//starts at one end and goes through each element of a list until the desired element is found,
// otherwise the search continues till the end of the data set
const linearSearch = (n) => {
  let Array1 = [1, 2, 6, 4, 3, 8];
  for (let i = 0; i < Array1.length; i++) {
    if (Array1[i] === n) {
      return i;
    }
  }
  return -1;
};
console.log("linearSearch:-", linearSearch(3));

const linearSearch2 = (arr, target) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) {
      return index;
    }
  }
  return -1;
};
console.log("linearSearch:-", linearSearch2([3, 1, 2, 5, 6, 4], 3));

//binarySearch:-Binary Search is defined as a searching algorithm used in a sorted array by repeatedly 
//dividing the search interval in half. The idea 
//of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N). 
const binarySearch = (arr, target) => {
  let startPosition = 0;
  let endPosition = arr.length - 1;
  while (startPosition <= endPosition) {
    let middleIndex = Math.floor((startPosition + endPosition) / 2);
    if (arr[middleIndex] == target) {
      return middleIndex;
    }
    if (target > middleIndex) {
      startPosition = middleIndex + 1;
    } else {
      endPosition = middleIndex - 1;
    }
  }
  return -1;
};
console.log("binarySearch:-", binarySearch([1, 2, 3, 4, 5, 6], 3));

// Recursive Binary Search
const recursiveBinarySearch = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

console.log("binarySearch:-", recursiveBinarySearch([1, 2, 3, 4, 5, 6], 3));
console.log("binarySearch:-", recursiveBinarySearch([1, 2, 3, 4, 5, 6], 6));
console.log("binarySearch:-", recursiveBinarySearch([1, 2, 3, 4, 5, 6], 2));
//SHORT

//Bubble short:-
// Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements,
// and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted
const bubbleShort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let index = 0; index < arr.length - 1; index++) {
      if (arr[index] > arr[index + 1]) {
        let temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

console.log("bubbleShort:-", bubbleShort([1, 3, 4, 2, 5, 6]));
console.log("bubbleShort:-", bubbleShort([-1, -2, -4, -3, 5, 6]));
console.log("bubbleShort:-", bubbleShort([1, 2, 3, 4, 5, 6]));
const arr = [8, 29, 20, -6, -4, 2];
bubbleShort(arr);
console.log("bubbleSort:-", arr);

//Bubble short in decending order
function bubbleShortReverse(arr) {
  let len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] < arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const arr2 = [5, 2, 10, 20, 50];
console.log(bubbleShortReverse(arr2));
//Insertion sort :-
//Insertion sort is another simple sorting algorithm that builds the final sorted array one item at a time.
// It is much less efficient on large lists than more advanced algorithms such as quicksort, 
//heapsort, or merge sort, but it performs well for small lists or lists that are already partially sorted.
const insertionSport = (array) => {
  for (let index = 1; index < array.length; index++) {
    let numberToInsert = array[index];
    let j = index - 1;
    while (j >= 0 && array[j] > numberToInsert) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = numberToInsert;
  }
};
const array = [8, 20, -2, 4, -6];

insertionSport(array);
console.log(array);
// Quick Sort :-
//is a divide-and-conquer algorithm that works by selecting a 'pivot' element from the array
// and partitioning the other elements into two sub-arrays according to whether 
//they are less than or greater than the pivot.
// The sub-arrays are then sorted recursively.
const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
const x = [8, 20, -2, 4, -6];
console.log(quickSort(x));

//mergeSort:-
// Merge Sort is another divide-and-conquer algorithm 
//that works by dividing the unsorted array into n sub-arrays,
// each containing one element, and then repeatedly merging sub-arrays to produce new sorted sub-arrays
// until there is only one sub-array remaining.
const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};
function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}
const y = [8, 20, -2, 4, -6];
console.log(mergeSort(y));

//cartesianProduct
const cartesianProduct = () => {
  let arr1 = [1, 2];
  let arr2 = [2, 3];
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      res.push([arr1[i], arr2[j]]);
    }
  }
  return res;
};
console.log(cartesianProduct());

//climbingStaircase prob:-
//The problem is commonly known as the "Climbing Stairs" problem.
// The goal is to find the number of distinct ways to climb a staircase with n steps.
// You can climb the staircase either 1 step or 2 steps at a time.

const climbingStaircase = (n) => {
  let steps = [1, 2];

  for (let i = 2; i < n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n - 1];
};
console.log(climbingStaircase(5));

// ### Problem 5: Unique Substrings
// Write a function `uniqueSubstrings` that takes a string as input and returns an array containing all unique substrings of the input string.
// For example:
// console.log(uniqueSubstrings('abc'));
// // Output: ['a', 'ab', 'abc', 'b', 'bc', 'c']
// **Constraints:**
// - The order of substrings in the output array doesn't matter.
// - The input string will have a length between 1 and 10.
function uniqueSubstrings(str) {
  let substrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }

  return substrings;
}

console.log(uniqueSubstrings("abc"));



// //Tower Of Hanoi:-
//The puzzle starts with the disks in a neat stack in ascending order of size on one rod, 
//the smallest at the top. The objective of the puzzle is to move the entire stack to another rod,
// obeying the following simple rules:

//1.Only one disk can be moved at a time.
//2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
//3.No disk may be placed on top of a smaller disk.
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "B", "C");

//DATA STRUCTURES

//ARRAY
const arrayEx = [1, 2, 3, "Sohel"];
arrayEx.push(2);
arrayEx.pop(5);
arrayEx.unshift(0);
arrayEx.shift();
for (const item of arrayEx) {
  console.log(item);
}

//EX1-find Duplicates elem in Array
function findDuplicates(array) {
  const duplicates = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        duplicates.push(array[i]);
      }
    }
  }

  return duplicates;
}

console.log(findDuplicates([1, 2, 4, 5, 2,4,5]));

//EX2-Remove Duplicates elem in Array

function removeDuplicates(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }
}
const originalArray = [1, 2, 4, 5, 2,5,6,3,2,1];
removeDuplicates(originalArray);
console.log(originalArray); 

//map, filter ,reduce,concat,slice?
// Declare the arrays
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

// map function
//EX1:-Squaring Each Element in an Array
let mapArray = array1.map((num) => num * 2);
console.log("Map:", mapArray); // [2, 4, 6, 8, 10]
// EX2:- Converting Celsius to Fahrenheit
let tempConverter=(array)=>{
  let celsius=array.map((celsius)=> ((celsius*9/5)+32))
  return celsius;
}
console.log('tempConverter',tempConverter([0,102,3,31]))

//EX3:-Extracting Names from an Array of Objects
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
];

const names = people.map((person) => person.name);

console.log(names); // Output: ['Alice', 'Bob', 'Charlie']


// filter function
let filterArray = array1.filter((num) => num % 2 === 0);
console.log("Filter:", filterArray); // [2, 4]

// reduce function
let reduceSum = array1.reduce((sum, num) => sum + num, 0);
console.log("Reduce Sum:", reduceSum); // 15

//Ex3:-calculate The Product of an Array
let calculateTheProduct =(array)=>{
  let product = array.reduce((x,y)=>x*y)
  return product;
}
console.log("Calculate Product: ",calculateTheProduct([2,3,4,5,6]))

//EX4:-Flattening an Array of Arrays
let flattenedArray=(array)=>{
let flatArray= array.reduce((x,y)=>
  x.concat(y))
  return flatArray;
}
console.log("flattenedArray: ",flattenedArray([[1,2],[2,3],[4,5],[9,8]]))
//EX4:- Finding the Maximum Value in an Array
let findMaxValue = (arr) =>{
  let maxVal= arr.reduce((x,y)=>x>y?x:y)
  return maxVal;
}
console.log("Find Max Value: ",findMaxValue([1,2,3,4,5]))


// reduce function to find maximum value
let reduceMax = array1.reduce((max, num) => (max > num ? max : num), array1[0]);
console.log("Reduce Max:", reduceMax); // 5

// concat function
let concatArray = [].concat(array1, array2);
console.log("Concat:", concatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// slice function
let sliceArray = array1.slice(1, 4);
console.log("Slice:", sliceArray); // [2, 3, 4]

//OBJECT
const obj = {
  name: "sohel",
  age: "26",
  "key-three": true,
  callName: () => {
    return `Hello${obj.name}`;
  },
};
obj.hobby = "Coding";
delete obj.age;
console.log(obj.name);
console.log(obj.age);
console.log(obj["key-three"]);
console.log(obj.callName());
// Object.keys() .values() .entries()
let person = {
  name: "John",
  age: 30,
  city: "New York",
};
let keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']
let values = Object.values(person);
console.log(values); // ['John', 30, 'New York']
let entries = Object.entries(person);
console.log(entries); // [['name', 'John'], ['age', 30], ['city', 'New York']]

//EX1:-Question 1:
// Problem:
// Given an object person:


let obj = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
}
// Write a function cloneObject that takes an object as input and returns a deep copy of the object.
 function cloneObjectMaker (person){
  let clone = {
... person
  }
return clone
  
 }
 console.log(cloneObjectMaker(obj))
//ex2-Create a class Book with the following properties: title, author, and price.
// Implement a method getBookInfo that returns a string with the book's information. 
let book={
  title:"The Alchemist",
  author:"Paulo Coelho",
  price:59.90,
  getBookInfo:()=>{
    console.log(`title is ${book.title} auther is ${book.author} price is ${book.price}`)
  }

}
book.getBookInfo();
//Write a function filterByGrade that takes an array of students and a grade as input,
// and returns an array of students
// who have the specified grade.
const students = [
  { name: 'Alice', age: 25, grade: 'A' },
  { name: 'Bob', age: 22, grade: 'B' },
  { name: 'Charlie', age: 28, grade: 'A' }
];
function filterByGrade(students,grade) {
  return students.filter((student)=> student.grade===grade )
}
console.log(filterByGrade(students,'A'))


// Problem:
// Consider the following object:
const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022
};
// Write a function updateCar that takes three parameters (brand, model, year) 
//and updates the corresponding properties of the car object.
function updateCar(car, brand,model,year){
  car.brand=brand;
  car.model=model;
  car.year=year;
  return car;
}
console.log(updateCar(car,'Honda','ion',2019))
//Question 5:
//Write a function flattenObject that takes an object with nested properties and returns a flat object. For example:
const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

function flattenObject(nestedObject) {
  let flatObject = {};

  function recurse(obj, prefix) {
    for (let prop in obj) {
      let newProp = prefix ? `${prefix}.${prop}` : prop;

      if (typeof obj[prop] === "object") {
        recurse(obj[prop], newProp);
      } else {
        flatObject[newProp] = obj[prop];
      }
    }
  }
  recurse(nestedObject, '');
  return flatObject;
}

const flatObject = flattenObject(nestedObject);
console.log(flatObject);



//SET
const set = new Set([1, 2, 3]);
set.add(4);
console.log(set.has(4));
console.log(set.seze);
for (const item of set) {
  console.log(item);
}
set.delete(3);

set.clear();

//EX1:-Write a function union that takes two sets as parameters and returns 
//a new set containing the union of the input sets (all unique elements from both sets).

function unionX(setA, setB) {
  let unionSet = new Set();
  for (let element of setA) {
    unionSet.add(element);
  }
  for (let element of setB) {
    unionSet.add(element);
  }

  return unionSet;
}
function optimisedUnionX(setA, setB) {
  return new Set([...setA, ...setB]);
}

var setA = new Set([1, 2, 3, 4, 5, 6]);
var setB = new Set([4, 5, 6, 7, 8, 9]);
console.log('union',unionX(setA, setB));

//EX2:-Create a function isSubset that takes two sets as parameters and returns true 
//if the first set is a subset of the second set, and false otherwise.
function isSubset2(setA,setB){
  for(elem in setA){
    if(!setB.has(elem)) return false;
  }
  return true;
}

var setA = new Set([1, 2, 3, 4, 5, 6]);
var setB = new Set([4, 5, 6, 7, 8, 9]);
console.log('is SUB SET?',isSubset2(setA,setB) )

//EX3:-Write a function removeDuplicates that takes an array and returns a new array containing only unique elements 
//(using a set to eliminate duplicates).

function removeDuplicates(array){
const mySet=new Set(array);
return mySet;
}

console.log(removeDuplicates([1,2,3,4,5,6,1]))

function optimisedRemoveDuplicates(array) {
  return new Set(array);
}


//EX4-Implement a function intersection that takes two sets as parameters
// and returns a new set containing the intersection of the input sets 
//(common elements present in both sets).
 function intersection(setA, setB){
  const comonElem= new Set()
for(i of setA){
  if (setB.has(i)){
comonElem.add(i)
}
}
return comonElem;
 }
 var setA = new Set([1, 2, 3, 4, 5, 6]);
 var setB = new Set([4, 5, 6, 7, 8, 9]);
 console.log('intersection?',intersection(setA,setB) )

 function optimisedIntersection(setA, setB) {
  return new Set([...setA].filter(elem => setB.has(elem)));
}

//ex5:-Write a function symmetricDifference that takes two sets as parameters
// and returns a new set containing the symmetric difference of the input sets 
//(elements that are unique to each set).
function symmetricDifference(setA,setB){
  const symmetric= new Set()
for(i of setA){
  if (!setB.has(i)){
    symmetric.add(i)
}
}
for(i of setB){
  if (!setA.has(i)){
    symmetric.add(i)
}
}
return symmetric;
}
var setA = new Set([1, 2, 3, 4, 5, 6]);
var setB = new Set([4, 5, 6, 7, 8, 9]);
console.log('symmetric Difference?',symmetricDifference(setA,setB) )
function optimisedSymmetricDifference(setA, setB) {
  return new Set([...setA].filter(elem => !setB.has(elem)).concat([...setB].filter(elem => !setA.has(elem))));
}

//MAP
const map = new Map([
  ["a", 1],
  ["b", 2],
]);
map.set("c", 3);
map.delete("b");
console.log(map.get("a"));
console.log(map.size);

for (const [key, value] of map) {
  console.log(`Key : ${key}, Value : ${value}`);
}
map.clear();
//EX1:-Write a function mergeMaps that takes two maps as parameters and returns 
//a new map containing the entries from both maps. If there are common keys,
// the values from the second map should overwrite the values from the first map.
function mergeMaps(m1,m2){
 const commonMap=new Map(m1)
 for(let [k1,v1] of m1){
  for(let [k2,v2] of m2){
if(k1==k2){
  commonMap.set(k1,v2)
}
else{
  commonMap.set(k2,v2)
}
  }
}
return commonMap;
}
function OptimisedMergeMaps(m1, m2) {
  const mergedMap = new Map(m1);

  for (let [key, value] of m2) {
    mergedMap.set(key, value);
  }

  return mergedMap;
}

// Map 1
const map1 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);

// Map 2
const map2 = new Map([
  ['key2', 'newvalue2'], // This will overwrite the value from map1
  ['key4', 'value4'],
  ['key5', 'value5']
]);
console.log('Merged Map:-',mergeMaps(map1,map2))
console.log('OptimisedMergeMaps :-',OptimisedMergeMaps(map1,map2))

//EX2:-Create a function countOccurrences that takes an array of elements as input and returns a map 
//where keys are unique elements from the array, and values are the count of occurrences of each element.
function countOccurances(array){
  let counts=new Map()
  for(let i of array){
    if(!counts.has(i)){
      counts.set(i,1);
    }else{
      let cnt=counts.get(i)+1;
      counts.set(i,cnt);

    }

  }
  return counts;
}
console.log("Count Occurance:-",countOccurances(['a','b','c','d','a','a']))

function countOccurrencesOptimised(array) {
  let counts = new Map();

  for (let element of array) {
    counts.set(element, (counts.get(element) || 0) + 1);
  }

  return counts;
}

console.log("Count Occurrence:", countOccurrencesOptimised(['a', 'b', 'c', 'd', 'a', 'a']));
//EX3:-Write a function reverseMap that takes a map as input and returns a new map where the keys and values are swapped.
function reverseMap(mapOrginal){
const revMap= new Map()
for([k,v]of mapOrginal){
  revMap.set(v,k)
}
console.log('MAP K AND V reveresed',revMap)
}
var mapOrginal = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);
reverseMap(mapOrginal);

function reverseMapOptimised(mapOriginal) {
  const revMap = new Map([...mapOriginal].map(([k, v]) => [v, k]));
  console.log('Reversed Map (keys and values swapped):', revMap);
}

var mapOriginal = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);

reverseMapOptimised(mapOriginal);

//EX4:-Implement a function filterMapByKey that takes a map and a key as parameters
// and returns a new map containing only the entry with the specified key.
function filterMapByKey(map,key){
  var filteredMap=new Map()
  if(!map.has(key)){
    throw Error(`The provided Key "${key}" is not present in the Map`)
  }
  else{
    filteredMap.set(key,map.get(key))
  }
  return filteredMap
}
var mapOriginal = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);
console.log(filterMapByKey(mapOriginal,'key3'))
function filterMapByKeyOptimised(map, key) {
  if (!map.has(key)) {
    throw new Error(`The provided Key "${key}" is not present in the Map`);
  }

  return new Map([[key, map.get(key)]]);
}

var mapOriginal = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);

console.log(filterMapByKeyOptimised(mapOriginal, 'key3'));
//EX5:-Create a function isMapEmpty that takes a map as input and returns true if the map is empty, and false otherwise.
function isMapEmpty(map){
return map.size>1? false: true;
}
var mapOriginal = new Map([

]);

console.log(isMapEmpty(mapOriginal));

function isMapEmptyOptimised(map) {
  return map.size === 0;
}

var mapOriginal = new Map([]);

console.log(isMapEmptyOptimised(mapOriginal));


//Queue:-Queue follows FIFO data structure type
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const Q = new Queue();
Q.enqueue(10);
Q.enqueue(30);
Q.enqueue(50);
Q.enqueue(40);
Q.enqueue(60);
Q.enqueue(80);
Q.print();
Q.dequeue();
Q.print();
console.log(Q.size());
console.log(Q.peek());

// let's optimize the queue implementation. Instead of using an array and shifting elements when dequeuing,
// we can maintain two pointers to keep track of the front and rear of the queue.
// This approach avoids the need to shift elements, resulting in better performance.
class QueueOptimise {
  constructor() {
    this.item = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(element) {
    this.item[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.item[this.front];
    delete this.item[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  peek() {
    return this.item[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.item);
  }
}
const QO = new QueueOptimise();
QO.enqueue(10);
QO.enqueue(20);
QO.enqueue(20);
QO.enqueue(90);
QO.enqueue(100);
QO.enqueue(30);
QO.enqueue(50);
QO.enqueue(40);
QO.enqueue(60);
QO.enqueue(80);
QO.print();
QO.dequeue();
QO.print();
console.log(QO.size());
console.log(QO.peek());


//CircularQueue
class CircularQueue {
    constructor(capacity) {
      this.items = new Array(capacity);
      this.capacity = capacity;
      this.currentLength = 0;
      this.rear = -1;
      this.front = -1;
    }
  
    isFull() {
      return this.currentLength === this.capacity;
    }
  
    isEmpty() {
      return this.currentLength === 0;
    }
  
    enqueue(element) {
      if (!this.isFull()) {
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = element;
        this.currentLength += 1;
        if (this.front === -1) {
          this.front = this.rear;
        }
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength -= 1;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.front];
      }
      return null;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
      } else {
        let i;
        let str = "";
        for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
          str += this.items[i] + " ";
        }
        str += this.items[i];
        console.log(str);
      }
    }
  
    size() {
      return this.currentLength;
    }
  }
  
  const CQ = new CircularQueue(10);
  CQ.enqueue(10);
  CQ.enqueue(20);
  CQ.enqueue(20);
  CQ.enqueue(90);
  CQ.enqueue(100);
  CQ.enqueue(30);
  CQ.enqueue(50);
  CQ.enqueue(40);
  CQ.enqueue(60);
  CQ.enqueue(80);
  CQ.print();
  CQ.dequeue();
  CQ.print();
  console.log(CQ.size());
  console.log(CQ.peek());
  

  //LINKED LIST
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
    }
    addFirst(data) {
      const newNode = new Node(data);
      newNode.next= this.head;
      this.head = newNode;
    }
    addLast(data){
      const newNode = new Node(data);
  if(!this.head){
      this.head =newNode ;
      return;
  }
  let current=this.head;
  
  while(current.next){
      current=current.next;
  }
  current.next=newNode;
  }
  size(){
      let count=0;
      let current = this.head;
      while(current){
          count++;
          current=current.next;
      }
      return count;
  }
  addAt(index, data) {
      if (index < 0 || index > this.size()) {
        console.error("Invalid Index");
        return;
      }
    
      const newNode = new Node(data);
    
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
    
      let current = this.head;
      for (let i = 1; i < index - 1; i++) {
        current = current.next;
      }
    
      newNode.next = current.next;
      current.next = newNode;
    }
  removeTop(){
      if (!this.head) {
          return
  } 
  this.head=this.head.next
  
  }
  removeLast(){
      if(!this.head){
          return;
      }
      let current =this.head;
      while(current.next.next){
          current=current.next;
      }
      current.next=null;
  } 
  
  removeAt(index){
  if(index<0||index>this.size()){
      console.log('invalid index');
      return;
  }
  if(index===0){
      this.head=this.head.next;
      return;
  }
  let current=this.head;
  for(let i=0;i<index-1;i++){
      current=current.next;
  }
  if (current.next){
      current.next=current.next.next;
  }
  }
  print(){
      let current=this.head;
      while(current){
          console.log(current.data);
          current = current.next;
      }
  }
  }
  
  
  // Create a new linked list
  const LL = new LinkedList();
  
  // Add elements to the list
  LL.addFirst(1);
  LL.addFirst(1);
  LL.addFirst(1);
  LL.addFirst(1);
  LL.addFirst(1);
  LL.addFirst(1);
  LL.addLast(3);
  LL.addAt(1, 2);
  
  // Print the current state of the list
  console.log("Linked List:");
  LL.print(); // Should print: 1, 2, 3
  
  // Remove elements from the list
  LL.removeTop();
  LL.removeTop();
  LL.removeLast();
  LL.removeAt(0);

  // Print the modified list
  console.log("\nLinked List after removals:");
  LL.print(); // Should print nothing since we removed all elements
  
  
// Stack using linked list:- Stack follows LIFO 

class LlStack {
    constructor() {
      this.linkedList = new LinkedList();
    }
  
    push(data) {
      this.linkedList.addFirst(data);
    }
  
    pop() {
      this.linkedList.removeTop();
    }
  
    peek() {
      if (this.linkedList.head) {
        return this.linkedList.head.data;
      }
      return null;
    }
  
    isEmpty() {
      return this.linkedList.head === null;
    }
  }

  // Queue using linked list
  class LlQueue {
    constructor() {
      this.linkedList = new LinkedList();
    }
  
    enqueue(data) {
      this.linkedList.addLast(data);
    }
  
    dequeue() {
      this.linkedList.removeTop();
    }
  
    front() {
      if (this.linkedList.head) {
        return this.linkedList.head.data;
      }
      return null;
    }
  
    isEmpty() {
      return this.linkedList.head === null;
    }
  }
  


// Create a new linked list
const myList = new LinkedList();

// Add elements to the list
myList.addFirst(1);
myList.addLast(3);
myList.addAt(1, 2);

// Print the current state of the list
console.log("Linked List:");
myList.print(); // Should print: 1, 2, 3

// Remove elements from the list
myList.removeTop();
myList.removeLast();
myList.removeAt(0);

// Print the modified list
console.log("\nLinked List after removals:");
myList.print(); // Should print nothing since we removed all elements



//Binary Search Tree:- (BST), also called an ordered or sorted binary tree, 
//is a rooted binary tree data structure with the key of each internal node being greater
// than all the keys in the respective node's left subtree and less than the ones in its right subtree.


class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else if (newNode.value > root.value) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, value)
  {
if(!root){
return false;
} else {
if(root.value==value){
   return true;
 } else if(value<root.value){
  return this.search(root.left, value);
 } else {
  return this.search(root.right, value);
 }
}

  }
  preOrder(root)
  {
    if(root){
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root)
  {
    if(root){
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root)
  {
    if(root){
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  leveLOrder()
  {
    let queue=[];
    let current=this.root;
    queue.push(current);
    while (queue.length>0)
    {
      current = queue.shift();
      console.log(current.value);
      if(current.left!=null)
        queue.push(current.left);
      if(current.right!=null)
        queue.push(current.right);
    }
  }  
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // Handle case where node with only one child or no child
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      // Handle case where node has two children
      root.value = this.findMinValue(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }

  findMinValue(node) {
    let minValue = node.value;
    while (node.left !== null) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  }

}


//ASYNC - AWAIT Interview Questine
// Write a simple async function that returns a resolved promise after a delay of 2000 milliseconds.
async function delayedPromise(){
  return new Promise(resolve=>{
setTimeout(()=>{
  resolve("promise resolved after 2000 millisecond")
},2000)
  });
}
// Use async await to handle a fetch call to an API endpoint and log the JSON response to the console.
async function fetchData(){
  const data= await fetch('https://api.example.com/data');
  dataModified =await data.json();
  console.log(dataModified);
}

//Perform Error Handling on it
async function fetchData(){
  try{
  const data= await fetch('https://api.example.com/data');
  dataModified =await data.json();
  console.log(dataModified);
  } catch (error){
    console.error('Error fetching Data',error)

  }
}
// Implement error handling in an async function that fetches data from an API. Handle both successful and failed responses.

async function fetchDataFromApi(){
  try{
    const response = await fetch('https://api.example.com');
    if(!response.ok){
      throw new Error(`HTTP ERROR`)
    }
    const data =await response.json()
  }
  catch(error){
    console.log('ERROR WHILE FETching data')
  }
}
//Write an async function that performs multiple asynchronous operations sequentially, ensuring each one completes before the next begins.



async function AsycronusOperation(){
  const val1= task1();
  console.log(val1)
  const val2= task2();
  console.log(val2)
  const val3= task3();
  console.log(val3)
}
async function task1(){
  return "TASK 1"
}
async function task2(){
  return "TASK 2"
}
async function task3(){
  return "TASK 3"
}

//Graph 
//use Adjancy List to create a graph
//DEPTH FIRST APPROACH BY USING STACK
const depthFirstPrint=(graph,source)=>{
  const stack=[source];
  while(stack.length>0){
  const current=  stack.pop();
  console.log(current);
  for (let neighbor of graph[current]){
    stack.push(neighbor);
  }
  }
}
const depthFirstPrintRec=(graph,source)=>{
  console.log(source);
  for( let neighbour of graph[source] ){
    depthFirstPrintRec(graph,neighbour)
  }
}
//BREADTH FIRST APPROACH BY USING Queue
function breadthFisrtApproach(graph ,source){
  const Queue = [source];
  while(Queue.length>0){
    let current=Queue.shift()
    console.log(current)
    for(let neighbor of graph[current]){
      Queue.push(neighbor)
    }
  }
}
//Has Path Problem
//Recursive approcah
function hasPath(src,dst,graph){
  if (src===dst){
    return true;
  }
  for(let neighbor of graph[src]){
    if(hasPath(neighbor,dst,graph)===true){
      return true
    }
  }
  return false ;
}
//Iterative Approach
function hasPath2(src,dst, graph){
  const Queue= [src]
  while(Queue.length>0){
    let current = Queue.shift()
      if(current==dst) return true;
for( let neighbor of graph[current]){
Queue.push(neighbor);
}

  }
  return false;

}


// depthFirstPrint(graph,'a')
// depthFirstPrintRec(graph,'a')
// breadthFisrtApproach(graph,'a')
console.log(hasPath('b','g',graph));
console.log(hasPath2('b','g',graph));
//Has Path problem
//graph Builder 
var buildGraph=(edges)=>{
  const graph={}
for(let edge of edges){
  const [a,b]=edge;
  if(!(a in graph)) graph[a]=[];
  if(!(b in graph)) graph[b]=[];
  graph[a].push(b);
  graph[b].push(a)
}
return graph
}

const undirectedGrap=(edge,NodeA, NodeB)=>{
const graph=buildGraph(edge)
return hasPathBW(graph,NodeA,NodeB,new Set())
}
function hasPathBW(graph,src,dst,visited){
if(src===dst) return true;
if(visited.has(src)) return false;
visited.add(src)
for(let neighbor of graph[src]){
  if(hasPathBW(graph,neighbor,dst,visited)===true) return true;
}
return false
}
var edges=[
  ['i','j'],
  ['k','i'],
  ['m','k'],
  ['k','l'],
  ['o','n']
];

console.log(undirectedGrap(edges,'i','k'))

//count the node  connected


const connectedNodeCount=(graph)=>{
const visited=new Set()
let count=0;
for(let node in graph){
  console.log(visited)
if(explore(graph,node,visited)===true){
  count++;
}
}
return count;
};

const explore=(graph,current,visited)=>{
if(visited.has(String(current))) return false
visited.add(String(current));
  for(let neighbor of graph[current]){
    explore(graph,neighbor,visited)
  }

  return true;
}

console.log(connectedNodeCount(graph))
//Largest element problem

const largestElement=(graph)=>{
  let largest =0;
  let visited =new Set();
  for(let node in graph){
  const size =exploreSize(graph,node,visited)
  if(size>largest){
    largest=size;
  }
}
return largest;
}
function exploreSize(graph,node,visited){
  if(visited.has(node)) return 0;
  visited.add(node);
  let size =1;
  for(let neighbor of graph[node]){
    size+=exploreSize(graph,neighbor,visited);
  }
return size;
}
const graph={
  1:[3,2],
  2:[4],
  3:[3],
  4:[5],
  5:[],
  6:[7],
  7:[2,4]
};
console.log('lasrgest element in Node', largestElement(graph))
//Shortest Path problem
const shortestPath=(nodeA,nodeB, edges)=>{
  const graph = buildGraph(edges);
const visited=new Set([nodeA]);
const queue= [[nodeA,0]]
while(queue.length>0){
  const[node,distance]=queue.shift();
  if(node===nodeB) return distance;
  for(let neighbor of graph[node]){
    if(!visited.has(neighbor)){
      visited.add(neighbor)
      queue.push([neighbor,distance+1]);
    }
  }
}
return -1;
}
const buildGraph=(edges)=>{
  const graph={}
for(let edge of edges){
  const [a,b]=edge;
  if(!(a in graph)) graph[a]=[];
  if(!(b in graph)) graph[b]=[];
  graph[a].push(b);
  graph[b].push(a)
}
return graph
}
const edges=[
  ['i','j'],
  ['k','i'],
  ['m','k'],
  ['k','l'],
  ['o','n']
];

console.log('Shortest Path:', shortestPath('i', 'l', edges));

//Grid Graph
//no of Iceland problem
const grid = [
  ['L', 'L', 'W', 'W', 'W'],
  ['L', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'L'],
];
 
const islandCount=(grid)=>{
  let visted = new Set();
  let count =0;
for (let r=0; r<grid.length;r+=1){
    for(let c=0;c<grid[0].length; c+=1){
if(explore(grid , r,c,visted)===true){
  count +=1;
}
    }
}
return count;
 };
function explore( grid , r ,c, visited){
  const rowInBounds=0<=r && r<grid.length;
  const colInBounds=0<=c && c<grid[0].length;
if(!rowInBounds||!colInBounds) return false;
if(grid[r][c]==='W') return false;

const pos=r+''+c;
if(visited.has(pos)) return false;
visited.add(pos);
explore( grid , r-1 ,c, visited)
explore( grid , r+1 ,c, visited)
explore( grid , r ,c-1, visited)
explore( grid , r ,c+1, visited)
return true;
 }

 console.log('Land iseland is ->',islandCount(grid))

  
const minimumIsland=(grid)=>{
  let visted = new Set();
  let minSize =Infinity;
for (let r=0; r<grid.length;r+=1){
    for(let c=0;c<grid[0].length; c+=1){
const size= exploreSize(grid,r,c,visted)
if(size>0&&minSize>size){
  minSize=size;
}
    }
}
return minSize;
 };
function exploreSize( grid , r ,c, visited){
  const rowInBounds=0<=r && r<grid.length;
  const colInBounds=0<=c && c<grid[0].length;
if(!rowInBounds||!colInBounds) return 0;
if(grid[r][c]==='W') return 0;

const pos=r+''+c;
if(visited.has(pos)) return 0;
visited.add(pos);
let size=1;
size+= exploreSize( grid , r-1 ,c, visited)
size+= exploreSize( grid , r+1 ,c, visited)
size+= exploreSize( grid , r ,c-1, visited)
size+= exploreSize( grid , r ,c+1, visited)
return size;
 }

 console.log('Land iseland minimum ->',minimumIsland(grid))