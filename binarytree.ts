class BTNode<T>{
    data: T;
    leftNode: BTNode<T>;
    rightNode: BTNode<T>;
}

class BinaryTree<T>{
    root: BTNode<T> | null;
    queue: BTNode<T>[];

    constructor(){
        this.root = null;
        this.queue = [];
    }
    private innerInsert(node: BTNode<T>, newNode: BTNode<T>){
        if(!node.leftNode){
            node.leftNode = newNode;
            this.queue.push(newNode);
            return;
        }
        if(!node.rightNode){
            node.rightNode = newNode;
            this.queue.push(newNode);
            return;
        }

        //if both left and right nodes are filled, create a new node from the existing left node
        // if(node.leftNode && !node.leftNode.rightNode){
        //     this.innerInsert(node.leftNode,newNode);
        // }else{
        //     this.innerInsert(node.rightNode,newNode);
        // }
        let temp = this.queue[0];
        if(temp.leftNode && temp.rightNode){
            this.queue.shift();
            temp = this.queue[0];
        }
        this.innerInsert(temp,newNode);

    }

    insert(newNode: BTNode<T>){
        if(!this.root){
            this.root = newNode;
            return;
        }
        
        this.innerInsert(this.root,newNode);
    }

    preOrder(node: BTNode<T>){
        if(node){
            console.log(node.data);
        }
        if(node.leftNode){
            this.preOrder(node.leftNode);
        }
        if(node.rightNode){
            this.preOrder(node.rightNode);
        }
        
        
    }

    inOrder(node: BTNode<T>){
        if(node.leftNode){
            this.inOrder(node.leftNode);
        }
        if(node){
            console.log(node.data);
        }
        if(node.rightNode){
            this.inOrder(node.rightNode);
        }
        
        
    }

    postOrder(node: BTNode<T>){
        if(node.leftNode){
            this.postOrder(node.leftNode);
        }
        if(node.rightNode){
            this.postOrder(node.rightNode);
        }
        if(node){
            console.log(node.data);
        }
        
        
    }

    traverse(){
        if(!this.root){
            return;
        }
        this.postOrder(this.root);
    }
}

let btNode = new BTNode<number>();
btNode.data = 1;
let btNode2 = new BTNode<number>();
btNode2.data = 2;
let btNode3 = new BTNode<number>();
btNode3.data = 3;
let btNode4 = new BTNode<number>();
btNode4.data = 4;
let btNode5 = new BTNode<number>();
btNode5.data = 5;////HERE
let btNode6 = new BTNode<number>();
btNode6.data = 6;
let btNode7 = new BTNode<number>();
btNode7.data = 7;
let btNode8 = new BTNode<number>();
btNode8.data = 8;
let btNode9 = new BTNode<number>();
btNode9.data = 9;
let btNode10 = new BTNode<number>();
btNode10.data = 10;
let btNode11 = new BTNode<number>();
btNode11.data = 11;


let bTree = new BinaryTree<number>();
bTree.insert(btNode);
//console.log(bTree);

bTree.insert(btNode2);
//console.log(bTree);

bTree.insert(btNode3);
//console.log(bTree);

bTree.insert(btNode4);
//console.log(bTree);

bTree.insert(btNode5);
//console.log(bTree);

bTree.insert(btNode6);
bTree.insert(btNode7);
bTree.insert(btNode8);
bTree.insert(btNode9);
bTree.insert(btNode10);
bTree.insert(btNode11);
//console.log(bTree);

bTree.traverse();

