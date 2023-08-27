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
        // If the list is Empty, Return Undefined
        if (!this.head) return undefined;
        // Store the node to be Removed
        let nodeToRemove = this.head;
        // If ther's only one item in the list
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // Update the last item (head) to point to the second last node
            this.head = nodeToRemove.next;
            this.head.prev = null;
            nodeToRemove.next = null;
        }
        this.length--;
        return nodeToRemove;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let oldHead = this.head;
            oldHead.prev = newNode;
            newNode.next = oldHead;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {

        if (index < 0 || index > this.length) return null;
        let counter;

        if (index >= (this.length / 2)) {
            let currentNode = this.tail;
            counter = this.length;
            while (index <= counter) {
                if (index === counter) {
                    return currentNode;
                }
                currentNode = currentNode.prev;
                counter--;
            }

        } else {
            let currentNode = this.head;
            counter = 0;
            while (index >= counter) {
                if (counter === index) {
                    return currentNode;
                }
                currentNode = currentNode.next;
                counter++;
            }
        }
    }
}

let list = new DoublyLinkedList();
list.push(3);
list.push(4);
list.push(44);
list.push(55);
list.push(99);

console.log(list.get(0));
//console.log(list);