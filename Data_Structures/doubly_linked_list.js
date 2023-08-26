class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        // If the list is Empty, Return Undefined
        if (!this.head) return undefined;
        // Store the node to be Removed
        let nodeToRemove = this.tail;
        // If ther's only one item in the list
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // Update the last item (tail) to point to the second last node
            this.tail = nodeToRemove.prev;
            this.tail.next = null;
        }
        this.length--;
        return nodeToRemove;
    }
    shift() {

    }
    unshift() {

    }
}

let list = new DoublyLinkedList();
list.push(3);
list.push(4);
list.push(44);
list.push(55);
list.push(99);

list.pop()
console.log(list);