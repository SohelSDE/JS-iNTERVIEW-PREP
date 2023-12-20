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
let array = [1, 2, 3, 4, 5, 6, 7, 8];

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
//Bubble sort
const BubbleSort=(array)=>{
  let SortedArray=[];
  let swapped=false;

  do{
for(let i=0; i<=array.length-1; i++){
  if(array[i]>array[i+1]){
    let temp= array[i];
    array[i]=array[i+1];
    array[i+1]=temp;
    swapped=true;

  }
}
}while(swapped);
return array;

}

let A=[1,3,4,2,8,7,5,6];
console.log(BubbleSort(A))