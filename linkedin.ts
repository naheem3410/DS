//Linkedlin node
class LNode<T> {
    data: T;
    next: LNode<T> | undefined
    constructor(data: T){
        this.data = data;
        this.next = undefined;
    }
}

//Linkedlin implementation
class LinkedList<T> {
    head: LNode<T> | undefined;

    //add from the end
    append(node: LNode<T>,position?:number) {
        if(position){
            if(position == 1){//if we are adding to the first position
                this.prepend(node);//same as appending
            }
            else if(position > 1){
                let currentNode = this.head;
                let prevNode = this.head;
                for(let i =2;i<=position;i++){
                    prevNode = currentNode;
                    if(currentNode!.next != undefined){
                        currentNode = currentNode!.next;
                    }
                    else{
                        return;
                    }
                }
                //previous node pointing to new node
                prevNode!.next = node;
                //new node pointing to the node in the position before
                node.next = currentNode;
            }
            else{
                return;
            }
        }
        else{
        if (!this.head) {
            this.head = node;
        }
        else {
            let currentNode = this.head;
            while (currentNode.next != undefined) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }
    }

    //add to the front
    prepend(node: LNode<T>){
        if (!this.head) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
    }

    //print nodes present in the list
    print(){
        let currentNode = this.head;
            while (currentNode != undefined) {
                console.log(currentNode.data);
                currentNode = currentNode.next!;
            }
          
    }
    //delete a node. Uses position if given
    delete(position?:number){
        if(position && position >= 0){
            let pos = 1;
            let currentNode = this.head;
            while(currentNode!.next != undefined){
            if((position - pos) === 1 /*&& currentNode!.next.next != undefined*/){
                    currentNode!.next = currentNode!.next.next;
                    return;
                }
                else if((position - pos) === 0 && currentNode!.next != undefined){
                    this.head = currentNode!.next
                    return;
                }
                else{
                    currentNode = currentNode!.next;
                    pos++;
                }
            }
        }
        else if(position && position < 0){
            return;
        }
        else{
            let currentNode = this.head;
            while(currentNode!.next!.next != undefined){
                currentNode = currentNode!.next!;
            }
            currentNode!.next = undefined;
        }
    }
//search for a data in the linkedlist
    search(data:number):number{
        let pos = 1;
        let currentNode = this.head;
        while(currentNode!.next != undefined){
            if(data === currentNode!.data){
                return pos;
            }
            currentNode = currentNode!.next;
            pos++;
        }

        return -1;

    }
    //reverse a linkedin list using arrays
    reverse(){
        let arr:LNode<T>[] = [];
        let currentNode = this.head;
        let prevNode = this.head;
        while(currentNode !== undefined){
            arr.push(currentNode);
            currentNode = currentNode!.next;
        }
        arr.reverse();
        this.head = arr[0];
        currentNode = this.head;
        for(let i=1;i<arr.length;i++){
            currentNode.next = arr[i];
            currentNode = arr[i];
        }
        currentNode.next = undefined;
        
    }
    //purely reverse a linkedlist using pointers
    reverse_second(){
        let prev: LNode<T> | undefined = undefined;
        let currentNode = this.head;
        while(currentNode != undefined){
            //store next node
            let next = currentNode.next;
            //change the current node next property to the previous node
            currentNode.next = prev;
            //store the previous node
            prev = currentNode;
            //make current node to be next node
            currentNode = next;
        }
        this.head = prev;
        
    }
}

let list = new LinkedList<number>();
list.append(new LNode<number>(10));
list.append(new LNode<number>(12));
list.append(new LNode<number>(13));

list.prepend(new LNode<number>(9));
list.append(new LNode<number>(14));
list.append(new LNode<number>(19));
list.print();
console.log('\n');
//list.delete(-1);
//console.log("position: ",list.search(14));
list.reverse_second()
list.print();
//console.log(list);