const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

function testTiming() {
    const singlyLinkedList = new LinkedList();
    const doublyLinkedList = new DoublyLinkedList();
    const times = 10000;

    console.time('singlyLinkedList.addToHead');
    for (let i = 0; i < times; i++) {
        singlyLinkedList.addToHead(i);
    }
    console.timeEnd('singlyLinkedList.addToHead');

    console.time('singlyLinkedList.addToTail');
    for (let i = 0; i < times; i++) {
        singlyLinkedList.addToTail(i);
    }
    console.timeEnd('singlyLinkedList.addToTail');

    console.time('doublyLinkedList.addToHead');
    for (let i = 0; i < times; i++) {
        doublyLinkedList.addToHead(i);
    }
    console.timeEnd('doublyLinkedList.addToHead');

    console.time('doublyLinkedList.addToTail');
    for (let i = 0; i < times; i++) {
        doublyLinkedList.addToTail(i);
    }
    console.timeEnd('doublyLinkedList.addToTail');
}

testTiming();