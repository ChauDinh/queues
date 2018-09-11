/* Queue */

// Queue data structure is the way to hold data, it's similar to the stack.
// While the stack is last-in-first-out, the queue is first-in-first-out

function Queue() {
 collection = [];
 this.print = function() {
  console.log(collection);
 };
 // this method push the first item into the queue (at the end of the array)
 this.enqueue = function(element) { 
  collection.push(element);
 };
 // this method take the item off the queue
 this.dequeue = function() {
  return collection.shift(); // remove the first item of the array
 };
 this.front = function() {
  return collection[0];
 };
 this.size = function() {
  return collection.length;
 };
 this.isEmpty = function() {
  return (collection.length === 0);
 }; 
}
var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();

// Another way to create a queue is using PriorityQueue()
// In PriorityQueue, not only you pass the elements into the Queue, but
// you also pass the priority of that elements.

function PriorityQueue() {
 var collection = [];
 this.printCollection = function() {
  console.log(collection);
 };
 this.enqueue = function(element) {
  if (this.isEmpty()) {
   collection.push(element);
  } else {
   var added = false;
   for (var i = 0; i < collection.length; i++) {
    if (element[1] < collection[i][1]) { // checking priorities
     collection.splice(i, 0, element);
     added = true;
     break;
    }
   }
   if (!added) {
    collection.push(element);
   }
  }
 };
 this.dequeue = function() {
  return collection.shift();
 };
 this.front = function() {
  return collection[0];
 };
 this.size = function() {
  return collection.length;
 };
 this.isEmpty = function() {
  return (collection.length === 0);
 };
}
var pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Leslie Dinh', 1]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();


var pq1 = new PriorityQueue();
pq1.enqueue(['Person 3', 3]);
pq1.enqueue(['Person 1', 1]);
pq1.printCollection();
pq1.dequeue();
pq1.printCollection();