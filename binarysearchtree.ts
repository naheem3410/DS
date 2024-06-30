class BSTNode<T>{
    data: T;
    leftNode: BSTNode<T> | null;
    rightNode: BSTNode<T> | null;
    constructor(data:T){
        this.data = data;
        this.leftNode = null;
        this.rightNode = null;
    }
}

class BinarySearchTree<T>{
    root: BSTNode<T> | null;

    constructor(){
        this.root = null;
    }

    private insertNode(node:BSTNode<T>,newNode:BSTNode<T>){
        if(newNode.data < node.data){
            if(!node.leftNode){
                node.leftNode = newNode;
                return;
            }
            this.insertNode(node.leftNode,newNode);
        }else{
            if(!node.rightNode){
                node.rightNode = newNode;
                return;
            }
            this.insertNode(node.rightNode,newNode);
        }
    }

    insert(newNode:BSTNode<T>){

        if(!this.root){
            this.root = newNode;
            return;
        }
        
        this.insertNode(this.root,newNode);
    }
}

let bstNode = new BSTNode<number>(10);
let bstNode2 = new BSTNode<number>(5);
let bstNode3 = new BSTNode<number>(8);
let bstNode4 = new BSTNode<number>(-3);
let bstNode5 = new BSTNode<number>(-20);
let bstNode6 = new BSTNode<number>(30);

let bstree = new BinarySearchTree();

bstree.insert(bstNode)
bstree.insert(bstNode2)
bstree.insert(bstNode3)
bstree.insert(bstNode4)
bstree.insert(bstNode5)
bstree.insert(bstNode6)

console.log(bstree);