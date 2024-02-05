const fibNo = (n) => {
  let fib = [0, 1];
  for (var i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};
console.log(fibNo(6));

const facto = (n) => {
  let num = 1;
  for (let i = 2; i < n; i++) {
    num = num * i;
  }
  return num;
};
console.log(facto(6));

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % 1 == 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrime(7));

const isPrimeOpt = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % 1 == 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrimeOpt(7));

const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 != 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};
console.log(isPowerOfTwo(7));

//Recursion

function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
function factorial(n) {
  if (n < 1) {
    return 1;
  }
  let fact = n * factorial(n - 1);
  return fact;
}

console.log(factorial(5));

const islinearSearch = (arr, target) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
};
var array = [1, 2, 3, 4, 5, 6, 7, 8];

let target = 10;
console.log(islinearSearch(array, target));

const isBinarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

let array2 = [1, 2, 3, 4, 5, 6, 7, 8];
let target2 = 8;
console.log(isBinarySearch(array2, target2));

function search(arr, target, start, end) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == target) {
    return mid;
  }
  if (target > arr[mid]) {
    return search(arr, target, mid + 1, end);
  } else {
    return search(arr, target, start, mid - 1);
  }
}
function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let tgt = 8;
console.log("recursiveBinarySearch:-", recursiveBinarySearch(arr, tgt));

//BubbleSort
const BubbleSort = (array) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return array;
};

let A = [1, 3, 4, 2, 8, 7, 5, 6];
console.log(BubbleSort(A));

let insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > numberToInsert) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = numberToInsert;
  }
};
var array = [8, 20, -2, 4, -6];

insertionSort(array);
console.log(array);

let quickSort = (array) => {
  let pivot = array[array.length - 1];
  let left = [],
    right = [];
  if (array.length < 2) {
    return array;
  }
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
console.log(quickSort([8, 20, -2, 4, -6]));

let mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}
console.log(mergeSort([8, 20, -2, 4, -6]));

let cartesianProduct = (Array1, Array2) => {
  let ans = [];
  for (let i = 0; i < Array1.length; i++) {
    for (let j = 0; j < Array2.length; j++) {
      ans.push([Array1[i], Array1[j]]);
    }
  }
  return ans;
};
console.log(cartesianProduct([1, 2], [3, 4]));

let climbingStaircase = (n) => {
  let steps = [1, 2];
  for (let i = 2; i < n; i++) {
    steps.push(steps[i - 1] + steps[i - 2]);
  }
  return steps[n - 1];
};

console.log(climbingStaircase(5));

function recursiveClimbingStaircase(n) {
  if (n < 2) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }

  return recursiveClimbingStaircase(n - 1) + recursiveClimbingStaircase(n - 2);
}
console.log(recursiveClimbingStaircase(2));

function towerOfHanoi(n, from, to, help) {
  if (n === 1) {
    console.log(`Move disk 1 from ${from} to ${to}`);
    return;
  }
  towerOfHanoi(n - 1, from, help, to);
  console.log(`Move disk ${n} from ${from} to ${to}`);

  towerOfHanoi(n - 1, help, to, from);
}
towerOfHanoi(3, "a", "b", "c");

var array = [1, 2, 3, 3, 4, 5];
let length = array.length;
console.log("length", length);
array.push(5);
console.log("pushed 5 in the end?", array);
array.pop();
console.log("poped ?", array);
array.shift();
console.log("shifted", array);

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

console.log(findDuplicates([1, 2, 4, 5, 2, 4, 5]));

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
const originalArray = [1, 2, 4, 5, 2, 5, 6, 3, 2, 1];
removeDuplicates(originalArray);
console.log(originalArray);

var array = [2, 3, 4, 8, 1];
let multiplication = array.map((num) => num * 2);
console.log("multiplication", multiplication);

let addition = array.reduce((a, b) => a + b);
console.log("addition", addition);

class Queue {
  constructor() {
    this.elements = [];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  enqueue(val) {
    this.elements.push(val);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("The Queue is Empty");
    } else {
      this.elements.shift();
    }
  }
  peek() {
    return this.elements[0] || "no value";
  }
  getSize() {
    return this.elements.length;
  }
  print() {
    return this.elements;
  }
}

// Example usage:
let myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log("Current Queue:", myQueue.elements);

myQueue.dequeue();

console.log("Updated Queue:", myQueue.elements);

myQueue.peek();
console.log("Updated Queue peek:", myQueue.peek());
console.log("Updated Queue peek:", myQueue.print());

class optimisedQueue {
  constructor() {
    this.elements = {};
    this.tail = 0;
    this.head = 0;
  }
  enqueue(val) {
    this.elements[this.tail] = val;
    this.tail++;
  }
  isEmpty() {
    return this.head === this.tail;
  }
  dequeue() {
    if (!this.isEmpty()) {
      let temp = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return temp;
    } else {
      console.log("The queue is empty");
    }
  }
  peek() {
    let temp;
    if (!this.isEmpty()) {
      temp = this.elements[this.head];
    } else {
      temp = "No Value to show";
    }
    return temp;
  }

  print() {
    let arr = [];
    for (let i = this.head; i < this.tail; i++) {
      arr.push(this.elements[i] + "->");
    }
    return arr;
  }
}
let uQ = new optimisedQueue();

uQ.enqueue(1);
uQ.enqueue(2);
uQ.enqueue(3);

console.log("Current Queue:", uQ.elements);

uQ.dequeue();

console.log("Updated Queue:", uQ.elements);

uQ.peek();
console.log("Updated Queue peek:", uQ.peek());
console.log("Updated Queue peek:", uQ.print());
class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
    this.length = 0;
    this.items = new Array(capacity);
  }

  isFull() {
    return this.capacity === this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      return "Capacity is full";
    } else {
      this.rear = (this.rear + 1) % this.capacity;
      this.length++;
      this.items[this.rear] = value;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    } else {
      this.front = (this.front + 1) % this.capacity;
      this.length--;
      let temp = this.items[this.front];
      this.items[this.front] = null; // Set to null after dequeue
      return temp;
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    }
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log("EMPTY");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i - 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

let cQ = new CircularQueue(5);
cQ.enqueue(1);
cQ.enqueue(2);
cQ.enqueue(3);
cQ.enqueue(4);
cQ.print();
//Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
  }
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current.next) {
      count++;
      current = current.next;
    }
    return count;
  }
  removeTop() {
    if (!this.head) {
      return "No DATA";
    }
    this.head = this.head.next;
  }
  removeBottom() {
    if (!this.head) {
      return "NO DATA";
    }
    if (!this.head.next) {
      this.head = null;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  addAt(index, value) {
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    const newNode = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (current === null) {
        console.error("Invalid Index");
        return;
      }
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  removeAt(index) {
    if (index === 0) {
      this.head = null;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (current === null) {
        console.error("Invalid Index");
        return;
      }
      current = current.next;
    }
    current.next = current.next.next;
  }

  print() {
    let count = [];
    let current = this.head;
    while (current.next) {
      count.push(current.data + "->");
      current = current.next;
    }
    return count;
  }
}
const LL = new linkedList();

// Add elements to the list
LL.addFirst(1);
LL.addFirst(2);
LL.addFirst(3);
LL.addFirst(4);
LL.addFirst(5);
LL.addFirst(6);
LL.addLast(7);
console.log("Linked List:", LL.print());
LL.addAt(2, 10);
// LL.removeTop();
// LL.removeBottom();
LL.removeAt(5);

// Print the current state of the list
console.log("Linked List:", LL.print());

//BST
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class binarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    if (this.root === null) {
      return true;
    } else {
      return false;
    }
  }

  addNode(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.addNodeInBranch(this.root, newNode);
    }
  }
  addNodeInBranch(root, newNode) {
    if (newNode.value > root.value) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.addNodeInBranch(root.right, newNode);
      }
    } else {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.addNodeInBranch(root.left, newNode);
      }
    }
  }
  search(root, val) {
    if (!root) {
      return false;
    }
    if (val === root.value) {
      return true;
    }
    if (val < root.value) {
      return this.search(root.left, val);
    } else {
      return this.search(root.right, val);
    }
  }

  preOrder(root) {
    if (root !== null) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  postOrder(root) {
    if (root !== null) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  inOrder(root) {
    if (root !== null) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  levelOrder() {
    const queue = [];
    let current = this.root;
    queue.push(current);
    while (queue.length > 0) {
      current=queue.shift();
      console.log(current.value);

      if (current.left !== null) {
        queue.push(current.left);
      } 
      if(current.right !== null) {
        queue.push(current.right);
      }
    }
  }
  findMinVal(node){
let minVal=node.value;
while(node.left!=null){
  minVal=node.left.value
  node=node.left 
}
return minVal;
  }

  delete(value){
    this.root=this.deleteNode(this.root,value)
  }
  deleteNode(root, value){
if(root==null){
  return root;
}
if(value<root.value){
  root.left=this.deleteNode(root.left, value)
}
else if(value>root.value){
  root.right=this.deleteNode(root.right,value)
}else{
  if(root.left===null){
    return root.right
  }
}
  }
}

// Example usage:
const bst = new binarySearchTree();
bst.addNode(10);
bst.addNode(5);
bst.addNode(15);
bst.addNode(3);
bst.addNode(7);

console.log("Search result:", bst.search(bst.root, 7));

console.log("Pre-order traversal:");
bst.preOrder(bst.root);

console.log("Post-order traversal:");
bst.postOrder(bst.root);

console.log("In-order traversal:");
bst.inOrder(bst.root);
console.log("leveLOrder traversal:");
bst.levelOrder();

console.log("Minimum value is:-",bst.findMinVal(bst.root))


function isPalindromNum(n){
  let num =n;
  let rev =0;
  while(n>0){
let digit=n%10;
rev = rev*10+digit;
n=Math.floor(n/10);
  }
  return num===rev;
}

console.log(isPalindromNum(111))

function isPalindromeString(str){
  let cleanStr=str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr===str.split('').reverse().join('');
}
console.log(isPalindromeString('Mayllyam'))

function mechanismOfUserDelete2(usersCred, id) {
  const userIndex = usersCred.users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return "User doesn't exist";
  }

  usersCred = {
    ...usersCred,
    ...usersCred.users.splice(userIndex, 1),
  };

  return usersCred;
}
function mechanismOfUserDelete(usersCred, id) {
  // console.log('mechanismOfUserDelete getting ID?',id)
  const userIndex = usersCred.users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return "User doesn't exist";
  }

  usersCred.users[userIndex] = {
    ...usersCred.users.splice(userIndex, 1),
  };

  return usersCred;
}
const usersCred = {
  admin: {
    id: 0,
    role: "Admin",
    username: "sohelislam993@gmail.com",
    password: "TECHSTAR",
  },
  users: [
    {
      id: 1,
      role: "User",
      username: "HReddy701@gmail.com",
      password: "HReddy701",
    },
    {
      id: 2,
      role: "User",
      username: "Venkat@gmail.com",
      password: "Venkat",
    },
    {
      id: 3,
      role: "User",
      username: "user1@gmail.com",
      password: "user1",
    },
    {
      id: 4,
      role: "User",
      username: "user2@gmail.com",
      password: "user2",
    },
  ],
};
console.log('data should be in new version',mechanismOfUserDelete2(usersCred,3))
console.log('data should be in old version',mechanismOfUserDelete(usersCred,4))

