//MATH ALGORITHMS

//fibonacci series
const fibNo = (n) => {
  const fib = [0, 1];
  for (var i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};
console.log("Fib seq is:-", fibNo(5));
console.log("Fib seq is:-", fibNo(7));

//factorial
const factorial = (n) => {
  let element = 1;
  for (let i = 2; i <= n; i++) {
    element = element * i;
  }
  return element;
};
console.log("factorial is:-", factorial(5));
//prime OR not?
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

//Linear Search
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

//binarySearch
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

//Bubble short
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

//mergeSort
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

//climbingStaircase prob

const climbingStaircase = (n) => {
  let steps = [1, 2];

  for (let i = 2; i < n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n - 1];
};
console.log(climbingStaircase(5));

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
//map, filter ,reduce,concat,slice?
// Declare the arrays
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

// map function
let mapArray = array1.map((num) => num * 2);
console.log("Map:", mapArray); // [2, 4, 6, 8, 10]

// filter function
let filterArray = array1.filter((num) => num % 2 === 0);
console.log("Filter:", filterArray); // [2, 4]

// reduce function
let reduceSum = array1.reduce((sum, num) => sum + num, 0);
console.log("Reduce Sum:", reduceSum); // 15

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

//Queue
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
  
  
// Stack using linked list

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




  
  class Node{
    constructor(data){
        this.value= value;
        this.left=null;
        this.right=null;
    }
  }
  class binarySearchTree{
    constructor(){
        this.root=null;

    }
    isEmpty(){
        if(this.root===null){
            return true;
        }
    insert()
     {
        let newNode= new Node();
        if(this.isEmpty){
            this.root=newNode;
        }else{
          this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode){
      if (newNode.value < root.value){
        if(root.left === null){
             root.left = newNode;
         } else{
          this.insertNode(root.left , newNode);
         }
       } else if(newNode > root.value){
        if(root.right == null){
               root.right = newNode;
           } else{
            this.insertNode(root.right , newNode);
           }
       }
    }
    }

  }