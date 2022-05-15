////////////////////////////////////////// USAGE
// Managing function invocations
// Undo/Redo
// Routing (the history object) is treated like a stack

// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Access - O(n)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if(!this.first) this.first = this.last = newNode;
        else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp
        }
        return ++this.size
    }

    pop() {
        if(!this.first) return null;
        const temp = this.first;
        if(this.size === 1) this.first = this.last = null;
        else {
            this.first = temp.next;
            this.size--;
        }
        return temp.value

    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop() // 3
