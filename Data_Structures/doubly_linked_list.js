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
    // Remove first Element of the List
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
    // Adding one element with value, to the beginning of the list
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
        if (index < 0 || index >= this.length) return null;
        let counter, currentNode;

        //WORKING FROM END
        if (index >= (this.length / 2)) {
            currentNode = this.tail;
            counter = this.length - 1;
            while (counter !== index) {
                currentNode = currentNode.prev;
                counter--;
            }
            //WORKING FROM BEGINNING
        } else {
            currentNode = this.head;
            counter = 0;
            while (counter !== index) {
                currentNode = currentNode.next;
                counter++;
            }
        }
        return currentNode;
    }
    set(index, val) {
        if (index < 0 || index >= this.length) return null;

        let nodeToModified = this.get(index);
        nodeToModified.val = val;
        return nodeToModified;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;

        removedNode.next = null;
        removedNode.prev = null;
        this.length--;

        return removedNode;
    }
}

let list = new DoublyLinkedList();
list.push(3);
list.push(4);
list.push(44);
list.push(55);
list.push(99);

list.remove(1)
console.log(list);