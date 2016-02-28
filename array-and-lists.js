// Two sum problem


// The two sum problem is a common interview question, and it is a variation of the subset sum problem. There is a popular dynamic programming solution for the subset sum problem, but for the two sum problem we can actually write an algorithm that runs in O(n) time. 

// The challenge is to find all the pairs of two integers in an unsorted array that sum up to a given S. For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.

// Naive solution

// A naive approach to this problem would be to loop through each number and then loop again through the array looking for a pair that sums to S. The running time for the below solution would be O(n2) because in the worst case we are looping through the array twice to find a pair. 

// our two sum function which will return
// all pairs in the array that sum up to S
// function twoSum(arr, S) {

//   var sums = [];

//   // check each element in array
//   for (var i = 0; i < arr.length; i++) { 

//     // check each other element in the array
//     for (var j = i + 1; j < arr.length; j++) {

//       // determine if these two elements sum to S
//       if (arr[i] + arr[j] === S) {
//         sums.push([arr[i], arr[j]]);
//       }

//     }

//   }

//   // return all pairs of integers that sum to S
//   return sums;

// }

// twoSum([3, 5, 2, -4, 8, 11], 7);


// Faster solution

// We can write a faster algorithm that will find pairs that sum to S in linear time. The algorithm below makes use of hash tables which have a constant lookup time. As we pass through each element in the array, we check to see if S minus the current element exists in the hash table. We only need to loop through the array once, resulting in a running time of O(n) since each lookup and insertion in a hash table is O(1).

// Example

// If the array is: [4, 5, 1, 8] and the sum is 6 the algorithm would proceed with the steps below:

// (1) The hash table is initially empty and the first element in the array is 4. We simply put 4 into the hash table.
// (2) The next element is 5. We check to see if the sum minus the current element exists in the hash table. 6 - 5 = 1 does not exist in the hash table. So add 5 to the hash table.
// (3) The next element is 1. We check to see if the sum minus the current element exists in the hash table. 6 - 1 = 5 does exist in the hash table so we found a pair!

// Code for faster solution

// our two sum function which will return
// all pairs in the array that sum up to S

// function twoSum(arr, S) {

//   var sums = [];
//   var hashTable = [];

//   // check each element in array
//   for (var i = 0; i < arr.length; i++) {
 
//     // calculate S - current element
//     var sumMinusElement = S - arr[i];

//     // check if this number exists in hash table
//     // if so then we found a pair of numbers that sum to S
//     if (hashTable[sumMinusElement.toString()] !== undefined) { 
//       sums.push([arr[i], sumMinusElement]);
//     }

//     // add the current number to the hash table
//     hashTable[arr[i].toString()] = arr[i];

//   }

//   // return all pairs of integers that sum to S
//   return sums;

// }

// twoSum([3, 5, 2, -4, 8, 11], 7);


// Sources

// http://www.careercup.com/question?id=15206700
// http://www.glassdoor.com/Interview/Given-a-sorted-array-write-a-program-to-decide-if-two-elements-sum-up-to-a-third-QTN_242990.htm
// http://www.glassdoor.com/Interview/Given-a-sum-find-two-numbers-in-an-array-with-that-sum-QTN_864790.htm


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Print all subsets (power set) of a given set


// The input for this problem will be an array of numbers representing a set, which only contains unique numbers, and your goal is to print every possible set combination, otherwise known as the power set. For example:

// input set = [1, 2, 3]
// power set = [[], [1], [2], [3], [1, 2], [2, 3], [1, 3] [1, 2, 3]]

// The power set contains every possible combination of numbers. It also includes the empty set which contains no numbers from the original set.

// Algorithm

// There will be 2N possible combinations of a set of length N because every element can either be in the set or not, which gives us 2 possibilities, and we do this for N numbers, giving us 2 * 2 * 2 ... = 2N. 

// (1) Loop from 0 to 2N
// (2) For each number get the binary representation of the number, e.g. 3 = 011
// (3) Determine from the binary representation whether or not to include a number from the set, e.g. 011 = [exclude, include, include]

// Example

// input set = [1, 2, 3]

// The numbers 0 to 2N in binary are:

// 0 = 000
// 1 = 001
// 2 = 010
// 3 = 011
// 4 = 100
// 5 = 101
// 6 = 110
// 7 = 111

// Now for each binary number we determine what numbers from the input set, [1, 2, 3], to include in the current set that we will add to the power set.

// 000 = [exclude, exclude, exclude] = []
// 001 = [exclude, exclude, include] = [3]
// 010 = [exclude, include, exclude] = [2]
// 011 = [exclude, include, include] = [2, 3]
// 100 = [include, exclude, exclude] = [1]
// 101 = [include, exclude, include] = [1, 3]
// 110 = [include, include, exclude] = [1, 2]
// 111 = [include, include, include] = [1, 2, 3]

// All of the resulting sets make up the power set for [1, 2, 3].

// Code

// function powerSet(arr) {
  
//   // the final power set
//   var powers = [];
  
//   // the total number of sets that the power set will contain
//   var total = Math.pow(2, arr.length);
  
//   // loop through each value from 0 to 2^n
//   for (var i = 0; i < total; i++) {
    
//     // our set that we add to the power set
//     var tempSet = [];
    
//     // convert the integer to binary
//     var num = i.toString(2);
    
//     // pad the binary number so 1 becomes 001 for example
//     while (num.length < arr.length) { num = '0' + num; }
    
//     // build the set that matches the 1's in the binary number
//     for (var b = 0; b < num.length; b++) {
//       if (num[b] === '1') { tempSet.push(arr[b]); }    
//     }
    
//     // add this set to the final power set
//     powers.push(tempSet);
    
//   }
  
//   return powers;
  
// }

// powerSet([1, 2, 3]); 

  // http://www.glassdoor.com/Interview/Write-a-program-the-generates-the-power-set-of-a-set-of-numbers-QTN_24552.htm
  // http://www.careercup.com/question?id=5670502550994944


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Find all string combinations consisting only of 0, 1 and ?


// For this popular algorithm interview question, the input will be a string consisting only of the characters 0, 1 and ?, where the ? acts as a wildcard that can be either a 0 or 1, and your goal is to print all possible combinations of the string. For example, if the string is "011?0" then your program should output a set of all strings, which are: ["01100", "01110"].

// Algorithm
  
// The general algorithm we will write a solution for is:

// (1) Call the function with the string and an empty set where we begin pushing 0 and 1's.
// (2) Once we reach a ?, then make a copy of each string set, and for half append a 0 and for the other half append a 1.
// (3) Recursively call the function with a smaller string until the string is empty.

// Example

// Assume the input string is "10??"

// Initial set = []

// 1st character = 1
// set = [1]

// 2nd character = 0
// set = [1, 0]

// 3rd character = ?
// First we make a copy of each string set and then we add a 0 to half of the sets and 1 to the other half.
// set = [[1, 0, 0], [1, 0, 1]]

// 4th characer = ?
// Same procedure as the previous step.
// set = [[1, 0, 0, 0], [1, 0, 1, 0], [1, 0, 0, 1], [1, 0, 1, 1]]

// Code

// function patterns(str, all) {
  
//   // if the string is empty, return all the string sets
//   if (str.length === 0) { return all; }
  
//   // if character is 0 or 1 then add the character to each
//   // string set we currently have so far
//   if (str[0] === '0' || str[0] === '1') {
//     for (var i = 0; i < all.length; i++) {
//       all[i].push(str[0]);  
//     }
//   }
  
//   // for a wildcard, we make a copy of each string set
//   // and for half of them we append a 0 to the string 
//   // and for the other half we append a 1 to the string
//   if (str[0] === '?') {
//     var len = all.length;
//     for (var i = 0; i < len; i++) {
//       var temp = all[i].slice(0);
//       all.push(temp);
//     }
//     for (var i = 0; i < all.length; i++) {
//       (i < all.length/2) ? all[i].push('0') : all[i].push('1');  
//     }
//   }
  
//   // recursively calculate all string sets
//   return patterns(str.substring(1), all);
  
// }

// patterns('10?1?', [[]]);

// http://www.careercup.com/question?id=20308668
// https://www.glassdoor.com/Interview/Phone-interview-question-Given-a-string-pattern-of-0s-1s-and-s-wildcards-generate-all-0-1-strings-that-match-this-p-QTN_498056.htm

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Find all duplicates in an array in linear time (v1)


// This is a common interview question where you need to write a program to find all duplicates in an array where the numbers in the array are in the range of 0 to n-1 where n is the size of the array. For example: [1, 2, 3, 3] is okay but [1, 2, 6, 3] is not. In this version of the challenge there can be multiple duplicate numbers as well.

// The algorithm below is commented to explain what each piece of code does, but the general algorithm is:

// (1) Loop through the array 
// (2) For each element, find array[absolute(array[i])] in the array and set its value to negative if positive
// (3) If in step 2 you encounter a negative number, then it means the element at index i in the array is a duplicate

// An example
 
// arr = [1, 2, 2, 3, 1]

// At i = 0
// arr[absolute(arr[0])] = 2 which is positive so make it negative

// arr = [1, -2, 2, 3, 1]

// At i = 1
// arr[absolute(arr[1])] = 2 which is positive so make it negative

// arr = [1, -2, -2, 3, 1]

// At i = 2 
// arr[absolute(arr[2])] = -2 which is negative which means the element originally at index 2 is a duplicate
// duplicates = [2]

// At i = 3 
// arr[absolute(arr[3])] = 3 which is positive so make it negative

// arr = [1, -2, -2, -3, 1]

// At i = 4
// arr[absolute(arr[4])] = -2 which is negative which means the element originally at index 4 is a duplicate
// duplicates = [2, 1]

// function duplicates(arr) {
  
//   // where we will store our duplicate values
//   var dups = [];

//   for (var i = 0; i < arr.length; i++) {
    
//     // get element in array
//     var el = arr[Math.abs(arr[i])];
    
//     // element in array is positive so make it negative
//     if (el > 0) { arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])]; }
    
//     // special case if element is zero
//     // we set the value at this index to -arr.size as not to
//     // mix this number up with the others because we know the
//     // numbers are all in the range of 0 to n-1
//     else if (el === 0) { arr[Math.abs(arr[i])] = -arr.length; }
    
//     // element is negative so it is a duplicate
//     else { 
//       if (Math.abs(arr[i]) === arr.length) { dups.push(0); }
//       else { dups.push(Math.abs(arr[i])); }
//     }
    
//   }
  
//   return dups;
  
// }

// duplicates([0,2,0,1,3,3]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Find all duplicates in an array in linear time (v2)


// This is a common interview question where you need to write a program to find all duplicates in an array. The elements in the array have no restrictions, but in this algorithm we'll work specifically with integers. Finding duplicates in an array can be solved in linear time by using a hash table to store each element as we pass through the array. The general algorithm is: 

// (1) Loop through the array
// (2) At each element check if it exists in the hash table, which has a lookup of O(1) time
// (3) If the element exists in the hash table then it is a duplicate, if it doesn't exist, insert it into the hash table, also O(1)

// function duplicates(arr) {
  
//   // our hash table to store each element
//   // in the array as we pass through it
//   var hashTable = [];
  
//   // store duplicates
//   var dups = [];
  
//   // check each element in the array
//   for (var i = 0; i < arr.length; i++) {
    
//     // if element does not exist in hash table
//     // then insert it
//     if (hashTable[arr[i].toString()] === undefined) {
//       hashTable[arr[i].toString()] = true;
//     } 
    
//     // if element does exist in hash table
//     // then we know it is a duplicate
//     else { dups.push(arr[i]); }
    
//   }
  
//   return dups;
  
// }

// duplicates([1, 21, -4, 103, 21, 4, 1]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// For this problem, your goal is to sort an array of 0, 1 and 2's but you must do this in place, in linear time and without any extra space (such as creating an extra array). This is called the Dutch national flag sorting problem. For example, if the input array is [2,0,0,1,2,1] then your program should output [0,0,1,1,2,2] and the algorithm should run in O(n) time.

// Algorithm
 
// The solution to this algorithm will require 3 pointers to iterate throughout the array, swapping the necessary elements.

// (1) Create a low pointer at the beginning of the array and a high pointer at the end of the array.
// (2) Create a mid pointer that starts at the beginning of the array and iterates through each element.
// (3) If the element at arr[mid] is a 2, then swap arr[mid] and arr[high] and decrease the high pointer by 1.
// (4) If the element at arr[mid] is a 0, then swap arr[mid] and arr[low] and increase the low and mid pointers by 1.
// (5) If the element at arr[mid] is a 1, don't swap anything and just increase the mid pointer by 1.

// This algorithm stops once the mid pointer passes the high pointer.

// function swap(arr, i1, i2) {
//   var temp = arr[i1];
//   arr[i1] = arr[i2];
//   arr[i2] = temp;
// }

// function dutchNatFlag(arr) {
  
//   var low = 0;
//   var mid = 0;
//   var high = arr.length - 1;
  
//   // one pass through the array swapping
//   // the necessary elements in place
//   while (mid <= high) {
//     if      (arr[mid] === 0) { swap(arr, low++, mid++); }
//     else if (arr[mid] === 2) { swap(arr, mid, high--); }
//     else if (arr[mid] === 1) { mid++; }
//   }
  
//   return arr;
  
// }

// dutchNatFlag([2,2,2,0,0,0,1,1]); 

// http://www.glassdoor.com/Interview/Solve-Dutch-National-Flag-problem-QTN_309969.htm

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Implementing bubble sort is used as an example of a slightly harder problem that one should solve to be prepared for the App Academy bootcamp. The source link is listed below, but the statement was:

// I often use “implement bubble sort” (in a beginner-friendly language like Ruby or Python) as an example of one of the harder problems I had to do in order to get in to App Academy.

// We'll go ahead and implement bubble sort in JavaScript and Python below. Bubble sort is actually a very slow algorithm that one should never attempt to seriously use, but the algorithm is simple enough to implement which is why this question might be asked.

// Sources

// http://www.patheos.com/blogs/hallq/2014/06/so-youre-thinking-of-applying-to-app-academy

// Algorithm
 
// The steps in the bubble sort algorithm are:

// (1) Loop through the whole array starting from index 1
// (2) If the number in the array at index i-1 is greater than i, swap the numbers and continue
// (3) Once the end of the array is reached, start looping again from the beginning
// (3) Once no more elements can be swapped, the sorting is complete

// Example

// Let arr = [4, 2, 5, 3]

// 1st loop through array

// i = 1
// Swap (4, 2)
// arr = [2, 4, 5, 3]

// i = 2
// Keep (4, 5)
// arr = [2, 4, 5, 3]

// i = 3
// Swap (5, 3)
// arr = [2, 4, 3, 5]

// 2nd loop through array

// i = 1
// Keep (2, 4)
// arr = [2, 4, 3, 5]

// i = 2
// Swap (4, 3)
// arr = [2, 3, 4, 5]

// i = 3
// Keep (4, 5)
// arr = [2, 3, 4, 5]

// function swap(arr, i1, i2) {
//   var temp = arr[i1];
//   arr[i1] = arr[i2];
//   arr[i2] = temp;
// }

// function bubblesort(arr) {
  
//   var swapped = true;
  
//   // keep going unless no elements can be swapped anymore
//   while (swapped) {
    
//     // set swapped to false so that the loop stops
//     // unless two element are actually swapped
//     swapped = false;

//     // loop through the whole array swapping adjacent elements
//     for (var i = 1; i < arr.length; i++) {
//       if (arr[i-1] > arr[i]) {
//         swap(arr, i-1, i);
//         swapped = true;
//       }
//     }
    
//   }
  
//   return arr;
         
// }

// bubblesort([103, 45, 2, 1, 97, -4, 67]); 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Insert an interval into a list of sorted disjoint intervals


// This is a common interview question where the input is a sorted list of disjoint intervals, and your goal is to insert a new interval and merge all necessary intervals returning a final new list. For example, if the interval list is [[1,5], [10,15], [20,25]] and you need to insert the interval [12,27], then your program should return the new list: [[1,5], [10,27]].

// Algorithm
  
// This seems like a question that would require a lot of code, but the solution is actually quite simple because the array of intervals is already sorted for us.

// (1) Create an array where the final intervals will be stored.
// (2) Push all the intervals into this array that come before the new interval you are adding.
// (3) Once we reach an interval in the array that comes after the new interval, add our new interval to the final array.
// (4) From this point, check each remaining element in the array and determine if the intervals need to be merged.

// Example

// intervals = [[1,5], [10,15], [20,25]]
// insert = [12,27]
// final = []

// Begin looping through the array:

// 1st interval = [1,5] 
// This interval comes before [12,27] so just add it to final.

// final = [[1,5]]

// 2nd interval = [10,15] 
// This interval overlaps with our interval, [12,27], because 12 is between 10 and 15. So add the new interval to final.

// final = [[1,5], [12,27]]

// Now we check each remaining interval in the array and determine if we can merge somehow.

// 2nd interval = [10,15] 
// This interval overlaps with the last element in final, so merge by taking the minimum start interval and maximum end interval. 
// Minimum of (10, 12) and maximum of (15, 27) gives us: [10,27]. Now replace the last interval in final with this merged interval.

// final = [[1,5], [10,27]]

// 3rd interval = [20,25] 
// This interval overlaps with the last element in final, so merge by taking the minimum start interval and maximum end interval. 
// Minimum of (10, 20) and maximum of (27, 25) gives us: [10,27]. Now replace the last interval in final with this merged interval.

// final = [[1,5], [10,27]]

// No more intervals in the original array, so: final = [[1,5], [10,27]].

// function insertInterval(arr, interval) {
  
//   var newSet = [];
//   var endSet = [];
//   var i = 0;

//   // add intervals that come before the new interval
//   while (i < arr.length && arr[i][1] < interval[0]) {
//     newSet.push(arr[i]);
//     i++;
//   }

//   // add our new interval to this final list
//   newSet.push(interval);

//   // check each interval that comes after the new interval to determine if we can merge
//   // if no merges are required then populate a list of the remaining intervals
//   while (i < arr.length) {
//     var last = newSet[newSet.length - 1];
//     if (arr[i][0] < last[1]) {
//       var newInterval = [Math.min.apply(null, [last[0], arr[i][0]]), Math.max.apply(null, [last[1], arr[i][1]])];
//       newSet[newSet.length - 1] = newInterval;
//     } else {
//       endSet.push(arr[i]);
//     }
//     i++;
//   }

//   return newSet.concat(endSet);
  
// }

// insertInterval([[1,5],[10,15],[20,25]], [12,27]); 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Implement a queue using a linked list


// A queue is an abstract data structure where items can either be added to a collection or removed from a collection, enqueuing and dequeuing, respectively. A queue is similar to a physical line of people: people can be added to the end of the line (enqueuing), and to make the line smaller, people are removed from the front of the line (dequeuing). We're going to implement a queue using a linked list and we'll be using some code we've written in a previous solution. 

// Another term used to describe queues is FIFO, which stands for first in, first out. It is a data structure where the first elements added to the collection will be the first removed.

// Example

// We want our queue to have two methods, enqueue X, which will add element X to the end of the queue, and a dequeue method which will remove the current first item from the queue. We don't need to specify what we want to dequeue because the method always returns the first element from the queue. Here is an example of a few operations we want our queue to be able to perform.

// Algorithm

// We will store a reference to the front and back of the queue in order to make enqueuing and dequeuing run in O(1) constant time. Every time we want to insert into the queue, we add the new element to the end of the linked list and update the back pointer. When we want to dequeue we return the first node in the linked list and update the front pointer.

// // queue is initially empty
// var Queue = {front: null, back: null};

// // we will use a node to keep track of the elements
// // in the queue which is represented by a linked list
// function Node(data, next) {
//   this.data = data;
//   this.next = next;
// } 

// // add elements to queue in O(1) time
// function Enqueue(element) {
//   var N = new Node(element, null);
//   if (Queue.back === null) {
//     Queue.front = N;
//     Queue.back = N; 
//   }
//   else { 
//     Queue.back.next = N; 
//     Queue.back = Queue.back.next;
//   } 
// }

// // remove first element from queue in O(1) time
// function Dequeue() {
//   if (Queue.front !== null) { 
//     var first = Queue.front;
//     Queue.front = Queue.front.next; 
//     return first.data;
//   } else {
//     if (Queue.back !== null) { Queue.back = null; }
//     return 'Cannot dequeue because queue is empty';
//   }
// }

// Enqueue('a'); 
// Enqueue('b'); 
// Enqueue('c'); 
// Dequeue();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Implement a queue using two stacks


// In another interview question we explained what a queue is and how to implement one using a linked list. Now we'll provide a solution to a common interview question, which is how to implement a queue using two stacks.

// A stack is a data structure where items can be added to a collection and removed from it just like in a queue, except the difference is the order in which they are removed. In a stack, the last item added will be the first item removed (last in, first out). Stacks usually have two basic methods, push, which adds an item into the stack, and pop, which "pops off" the top item from the stack. 

// You can think of a stack like a physical stack of books: to add a new book to the stack you simply place the book on top, and then when you want to make the stack smaller you start removing books from the top of the stack.

// Algorithm for queue using two stacks

// For example: Suppose we push "a", "b, "c" to a stack. If we are trying to implement a queue and we call the dequeue method 3 times, we actually want the elements to come out in the order: "a", "b, "c", which is in the opposite order they would come out if we popped from the stack. So, basically, we need to access the elements in the reverse order that they exist in the stack. The following algorithm will implement a queue using two stacks.

// (1) When calling the enqueue method, simply push the elements into the stack 1.
// (2) If the dequeue method is called, push all the elements from stack 1 into stack 2, which reverses the order of the elements. Now pop from stack 2.

// Code

// // implement stacks using plain arrays with push and pop functions
// var Stack1 = [];
// var Stack2 = [];

// // implement enqueue method by using only stacks
// // and the push and pop functions
// function Enqueue(element) {
//   Stack1.push(element);
// }

// // implement dequeue method by pushing all elements
// // from stack 1 into stack 2, which reverses the order
// // and then popping from stack 2
// function Dequeue() {
//   if (Stack2.length === 0) {
//     if (Stack1.length === 0) { return 'Cannot dequeue because queue is empty'; }
//     while (Stack1.length > 0) {
//       var p = Stack1.pop();
//       Stack2.push(p);
//     }
//   }
//   return Stack2.pop();
// }

// Enqueue('a');
// Enqueue('b');
// Enqueue('c');
// Dequeue(); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Merge two sorted linked lists


// This is a common interview question testing basic knowledge of linked lists. The goal here is merge two linked lists that are already sorted. For example: if L1 = 1 -> 3 -> 10 and L2 = 5 -> 6 -> 9 then your program should output the linked list 1 -> 3 -> 5 -> 6 -> 9 -> 10.

// Algorithm
 
// The algorithm for this question is quite simple since the two linked lists are already sorted. We create a new linked list and loop through both lists appending the smaller nodes. We'll be using some code that we used in a previous linked list interview question.

// (1) Create a new head pointer to an empty linked list.
// (2) Check the first value of both linked lists.
// (3) Whichever node from L1 or L2 is smaller, append it to the new list and move the pointer in that list to the next node.
// (4) Continue this process until you reach the end of a linked list.

// Example

// L1 = 1 -> 3 -> 10
// L2 = 5 -> 6 -> 9
// L3 = null

// Compare the first two nodes in both linked lists: (1, 5), 1 is smaller so add it to the new linked list and move the pointer in L1.
// L1 = 3 -> 10
// L2 = 5 -> 6 -> 9
// L3 = 1

// Compare the first two nodes in both linked lists: (3, 5), 3 is smaller so add it to the new linked list and move the pointer in L1.
// L1 = 10
// L2 = 5 -> 6 -> 9
// L3 = 1 -> 3

// Compare the first two nodes in both linked lists: (10, 5), 5 is smaller so add it to the new linked list and move the pointer in L2.
// L1 = 10
// L2 = 6 -> 9
// L3 = 1 -> 3 -> 5

// Compare the first two nodes in both linked lists: (10, 6), 6 is smaller so add it to the new linked list and move the pointer in L2.
// L1 = 10
// L2 = 9
// L3 = 1 -> 3 -> 5 -> 6

// Compare the first two nodes in both linked lists: (10, 9), 9 is smaller so add it to the new linked list and move the pointer in L2.
// L1 = 10
// L2 = null
// L3 = 1 -> 3 -> 5 -> 6 -> 9

// Because L2 points to null, simply append the rest of the nodes from L1 and we have our merged linked list.
// L3 = 1 -> 3 -> 5 -> 6 -> 9 -> 10

// Code

// function Node(data, next) {
//   this.data = data;
//   this.next = next;
// } 

// function merge(L1, L2) {
  
//   // create new linked list pointer
//   var L3 = new Node(null, null);
//   var prev = L3;
  
//   // while both linked lists are not empty
//   while (L1 !== null && L2 !== null) {
//     if (L1.data <= L2.data) { 
//       prev.next = L1;
//       L1 = L1.next;
//     } else {
//       prev.next = L2;
//       L2 = L2.next;
//     }
//     prev = prev.next;
//   }
  
//   // once we reach end of a linked list, append the other 
//   // list because we know it is already sorted
//   if (L1 === null) { prev.next = L2; }
//   if (L2 === null) { prev.next = L1; }
  
//   // return the sorted linked list
//   return L3.next;
  
// }

// // create first linked list: 1 -> 3 -> 10
// var n3 = new Node(10, null);
// var n2 = new Node(3, n3);
// var n1 = new Node(1, n2);
// var L1 = n1; 

// // create second linked list: 5 -> 6 -> 9
// var n6 = new Node(9, null);
// var n5 = new Node(6, n6);
// var n4 = new Node(5, n5);
// var L2 = n4; 

// merge(L1, L2); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Find the middle element of a linked list

// A linked list is a data structure which consists of a group of nodes where each node may point to some other node to form a sequence. Our nodes will have two fields: 

// (1) a "data" field which will store our data (string, number, etc.)
// (2) a "next" field which will be a reference to some other node

// Linked lists are useful and simple data structures and are sometimes preferred over using arrays because inserting or deleting elements can be done without reallocation or reorganization of the entire structure. 

// If, for example, you wanted to add an element to the beginning of the array, every single other element would need to be moved and the array would need to make space for one extra element. Inserting an element at the beginning of a linked list simply requires you to create a new node and set its "next" field to point to some node, making this new node the first node in the sequence now.

// Node setup

// function Node(data, next) {
//   this.data = data;
//   this.next = next;
// }            
// This is how we can then create a linked list with connecting nodes:

// var n1 = new Node("Hello", null);   
// var n2 = new Node("21", n1); 
// var n3 = new Node("Green", n2); 

// // assign a node to the head which functions
// // as the entry into our linked list
// var head = n3;       
// Our challenge is to now find the middle node in a linked list. We don't initially know the length of a linked list, all we have is a single node which acts as the head of the linked list and which we can access all other nodes by traversing through each nodes "next" property. We can continuously loop through each node until we get to a node that has a "next" property of null, which means we have reached the last node.

// Naive solution

// A simple way to determine the middle node would be to fully pass through all nodes in the linked list and count how many elements there are in total. Then traverse the linked list again this time stopping at the total/2 node. For example, the first time you traverse the linked list your program determines there are 10 nodes, then the second pass through the linked list you stop at the 5th node, which is the middle node. This is a possible solution, but there is a faster way.

// Faster solution using 2 pointers

// What we'll do is setup two pointers, one that will traverse the linked list one node at a time, and the other pointer will traverse two nodes at a time. This way when the faster pointer reaches the end of the linked list, the slower pointer will be halfway there because it was only moving one node at time while the faster one was moving two nodes at a time. This allows you to find the middle node of a linked list with only one pass, instead of passing through the whole linked list once, and then again to find the middle element.

// function Node(data, next) {
//   this.data = data;
//   this.next = next;
// }    

// // setup some nodes and connect them to each other
// // the linked list looks like:
// // (head) n5 -> n4 -> n3 -> n2 -> n1 -> null
// var n1 = new Node("Hello", null);   
// var n2 = new Node("21", n1); 
// var n3 = new Node("Green", n2); 
// var n4 = new Node("Blue", n3); 
// var n5 = new Node("Daniel", n4); 

// // assign a node to the head which functions
// // as the entry into our linked list
// var head = n5; 

// // setup pointers to both start
// // at the head of the linked list
// var fastPointer = head;
// var slowPointer = head;

// // loop through the linked list
// // when fastPointer reaches the end of the list
// // then slowPointer will be at the middle node
// while (fastPointer.next !== null && fastPointer.next.next !== null) {
//   fastPointer = fastPointer.next.next;   
//   slowPointer = slowPointer.next;
// }

// // slowPointer is now at the middle node in the linked list
// slowPointer.data  