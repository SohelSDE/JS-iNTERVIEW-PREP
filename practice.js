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
}

let array2 = [1, 2, 3, 4, 5, 6, 7, 8];
let target2 = 8;
console.log(isBinarySearch(array2, target2));


function search(arr,target,  start ,end){
  let mid= Math.floor((start+end)/2)
    if(arr[mid]==target){
        return mid;
    }
    if(target>arr[mid]){
        return search(arr,target, mid+1,end)
    }else{
        return search(arr,target,start,mid-1)
    }
}
function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let tgt = 8;
console.log('recursiveBinarySearch:-', recursiveBinarySearch(arr,tgt))


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


let insertionSort =(array)=>{
for(let i=1;i<array.length;i++){
let numberToInsert=array[i];
let j=i-1;
while(j>=0&&array[j]>numberToInsert){
  array[j+1]=array[j]
  j=j-1;
}
array[j+1]=numberToInsert;
}
}
var array = [8, 20, -2, 4, -6];

insertionSort(array);
console.log(array);

let quickSort =(array)=>{
let pivot =array[array.length-1];
let left=[],right=[];
if(array.length<2){
  return array;
}
for(let i=0;i<array.length-1;i++){
if (array[i]<pivot){
  left.push(array[i])
}else{
  right.push(array[i])
}
}
return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort([8, 20, -2, 4, -6]))

let mergeSort=( array)=>{

  if(array.length<2){
    return array;
  }
  let mid= Math.floor((array.length)/2)
  let  left=array.slice(0,mid);
  let right=array.slice(mid);
  return merge(mergeSort(left), mergeSort(right))

}
function merge(left ,right ) {
  let result =[];
  while(left.length&&right.length){
    if(left[0]<=right[0]){
      result.push(left.shift())
    }
    else{
      result.push(right.shift())
    }
  }
  return [ ...result,...left,...right]
}
console.log(mergeSort([8, 20, -2, 4, -6]));

let cartesianProduct =(Array1, Array2)=>{
  let ans=[]
  for(let i=0; i<Array1.length;i++){
    for(let j=0;j<Array2.length;j++){
       ans.push([Array1[i],Array1[j]])
  }
}
return ans;
}
console.log(cartesianProduct([1,2],[3,4]))

let climbingStaircase =(n)=>{
  let steps=[1,2]
for (let i=2;i<n;i++){
  steps.push(steps[i-1]+steps[i-2]);
}
return steps[n-1];
}

console.log(climbingStaircase(5))

function recursiveClimbingStaircase (n){
if(n<2){
return 1;
}
if (n==2){
  return 2;
}

return recursiveClimbingStaircase(n-1)+recursiveClimbingStaircase(n-2)
}
console.log(recursiveClimbingStaircase(2)) 

function towerOfHanoi(n,from,to,help){
  if(n===1){
    console.log(`Move disk 1 from ${from} to ${to}`);
    return;
  }
towerOfHanoi(n-1,from,help,to);
console.log(`Move disk ${n} from ${from} to ${to}`);

towerOfHanoi(n-1,help,to,from);

}
towerOfHanoi(3,'a','b','c');


var array= [1,2,3,3,4,5]
let length=array.length
console.log('length',length);
array.push(5);
console.log('pushed 5 in the end?',array)
array.pop();
console.log('poped ?',array)
array.shift()
console.log('shifted',array)

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


var array= [2,3,4,8,1]
let multiplication=array.map((num)=>num*2)
console.log('multiplication',multiplication)

let addition = array.reduce((a,b)=>a+b);
console.log('addition',addition)