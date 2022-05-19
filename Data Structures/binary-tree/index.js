// Root - the top node in a tree;
// Child - a node connected to another node when moving away from the Root;
// Parent - the converse notion of a child;
// Siblings - a group of children with the same parent
// Leaf - a node with no children;
// Edge - the connection between one node and another;

class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val)
        let current = this.root;

        if (!this.root) {
            this.root = newNode;
            return this
        }

        while (true) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    return this
                }

                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this
                }

                current = current.right
            }
        }
    }

    find(val) {
        if(!this.root) return true;
        let current = this.root;
        let found = false;

        while (current && !found) {
            if(val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            } else {
                found = true
            }
        }

        if(!found) return undefined;
        return current
    }
}

let bst = new BinarySearchTree();
bst.insert(41);
bst.insert(62);
bst.insert(75);
console.log(bst.find(62))

