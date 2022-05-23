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
        if (!this.root) return true;
        let current = this.root;
        let found = false;

        while (current && !found) {
            if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            } else {
                found = true
            }
        }

        if (!found) return undefined;
        return current
    }

    // Breath First Search

    BFS() {
        const data = [];
        const queue = [];
        let node = this.root;
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data

    }

    // Depth First Search

    DFSPreOrder() {
        const data = [];

        function traverse(node) {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        const data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        }

        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        const data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }
}

let bst = new BinarySearchTree();
bst.insert(41);
bst.insert(62);
bst.insert(75);

// console.log(bst.BFS());
console.log(bst.DFSPreOrder());
console.log(bst.DFSPostOrder());
console.log(bst.DFSInOrder());


