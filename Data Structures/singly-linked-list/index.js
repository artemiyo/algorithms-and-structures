class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Insertion - O(1)
// Removal - O(1) or O(N)
// Searching - O(N)
// Access - O(N)

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // add to the end of the linked list
    push(val) {
        let node = new Node(val);

        if (!this.head) this.head = this.tail = node;
        else {
            this.tail.next = node;
            this.tail = node
        }
        this.length++;
    }

    // removing from the end
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }

        return current

    }

    // removing from the beginning
    shift() {
        if (!this.head) return undefined;

        let current = this.head;
        this.head = current.next;
        this.length--;


        if (this.length === 0) this.tail = null;
        return current
    }

    // adding to the beginning
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = this.tail = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;

        while (index !== counter) {
            current = current.next;
            counter++;
        }

        return current
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);
        let newNode = new Node(value);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();
        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
