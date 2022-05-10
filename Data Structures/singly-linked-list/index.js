class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

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
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;

        while(index !== counter) {
            current = current.next;
            counter++;
        }

        return current
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

}

const list = new SinglyLinkedList();
// push
list.push('1');
list.push('2');
list.push('3');

// pop
// list.pop()

// shift
// list.shift();

// unshift
// list.unshift('4')

// get
// list.get(1);

//set
// list.set(1, '55')
