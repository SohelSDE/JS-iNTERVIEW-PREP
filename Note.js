//Linked list
class ListNode {
    constructor(value, next = null) {
       this.value = value;
       this.next = next;
    }
   }
   
   class LinkedList {
    constructor() {
       this.head = null;
    }
   
    append(value) {
       if (!this.head) {
         this.head = new ListNode(value);
       } else {
         let current = this.head;
         while (current.next) {
           current = current.next;
         }
         current.next = new ListNode(value);
       }
    }
   
    prepend(value) {
       if (!this.head) {
         this.head = new ListNode(value);
       } else {
         let newNode = new ListNode(value);
         newNode.next = this.head;
         this.head = newNode;
       }
    }
   
    delete(value) {
       if (!this.head) {
         return;
       }
   
       if (this.head.value === value) {
         this.head = this.head.next;
         return;
       }
   
       let current = this.head;
       while (current.next) {
         if (current.next.value === value) {
           current.next = current.next.next;
           return;
         }
         current = current.next;
       }
    }
   
    printList() {
       let current = this.head;
       let result = '';
       while (current) {
         result += current.value + '->';
         current = current.next;
       }
       result += 'null';
       console.log(result);
    }
   }
   
   let linkedList = new LinkedList();
   linkedList.append(1);
   linkedList.append(2);
   linkedList.append(3);
   linkedList.prepend(0);
   linkedList.delete(2);
   linkedList.printList();

   //hash table 
   let hashTable = new Object();

hashTable["name"] = "John Doe";
hashTable["age"] = 30;
hashTable["city"] = "New York";

console.log(hashTable["name"]);  // Output: John Doe
console.log(hashTable["age"]);   // Output: 30
console.log(hashTable["city"]);  // Output: New York

for (let key in hashTable) {
    if (hashTable.hasOwnProperty(key)) {
      console.log(`${key}: ${hashTable[key]}`);
    }
  }

  class HashTable {
    constructor(size = 10) {
       this.size = size;
       this.data = new Array(size);
    }
   
    _hash(key) {
       let hash = 0;
       for (let i = 0; i < key.length; i++) {
         hash += key.charCodeAt(i);
       }
       return hash % this.size;
    }
   
    insert(key, value) {
       const index = this._hash(key);
       if (!this.data[index]) {
         this.data[index] = [];
       }
       this.data[index].push([key, value]);
    }
   
    search(key) {
       const index = this._hash(key);
       if (this.data[index]) {
         for (let i = 0; i < this.data[index].length; i++) {
           if (this.data[index][i][0] === key) {
             return this.data[index][i][1];
           }
         }
       }
       return null;
    }
   
    remove(key) {
       const index = this._hash(key);
       if (this.data[index]) {
         for (let i = 0; i < this.data[index].length; i++) {
           if (this.data[index][i][0] === key) {
             this.data[index].splice(i, 1);
             return true;
           }
         }
       }
       return false;
    }
   } 

