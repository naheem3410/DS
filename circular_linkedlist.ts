//Linkedlist node
class CLNode<T> {
    data: T;
    next: CLNode<T> | null
    constructor(data: T){
        this.data = data;
        this.next = null;
    }
}

//Circular Linkedlist implementation
class CircularLinkedclist<T> {
    head: CLNode<T> | null;
    length = 0;
    //add from the end
    append(node: CLNode<T>,position?:number) {
        if(position){
            if(position == 1){//if we are adding to the first position
                this.prepend(node);//same as appending
            }
            else if(position > 1){
                let currentNode = this.head;
                let prevNode = this.head;
                for(let i =2;i<=position;i++){
                    prevNode = currentNode;
                    if(currentNode!.next != null){
                        currentNode = currentNode!.next;
                    }
                    else{
                        return;
                    }
                }
                //adding the new node previous node pointing to new node
                prevNode!.next = node;
                this.length++
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
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            //add the new node
            currentNode.next = node;
            this.length++
        }
    }
    }

    //add to the front
    prepend(node: CLNode<T>){
        if (!this.head) {
            this.head = node;
            this.length++
        }
        else {
            node.next = this.head;
            this.head = node;
            this.length++
        }
    }

    //print nodes present in the clist
    print(){
        let currentNode = this.head;
            while (currentNode != null) {
                console.log(currentNode.data);
                currentNode = currentNode.next!;
            }
          
    }
    //delete a node. Uses position if given
    delete(position?:number){
        if(position && position >= 0){
            let pos = 1;
            let currentNode = this.head;
            while(currentNode!.next != null){
            if((position - pos) === 1 /*&& currentNode!.next.next != null*/){
                    currentNode!.next = currentNode!.next.next;
                    return;
                }
                else if((position - pos) === 0 && currentNode!.next != null){
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
            while(currentNode!.next!.next != null){
                currentNode = currentNode!.next!;
            }
            currentNode!.next = null;
        }
    }
//search for a data in the CircularLinkedclist
    search(data:number):number{
        let pos = 1;
        let currentNode = this.head;
        while(currentNode!.next != null){
            if(data === currentNode!.data){
                return pos;
            }
            currentNode = currentNode!.next;
            pos++;
        }

        return -1;

    }
    //reverse a circular linkedlist clist using arrays
    reverse(){
        let arr:CLNode<T>[] = [];
        let currentNode = this.head;
        let prevNode = this.head;
        while(currentNode !== null){
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
        currentNode.next = null;
        
    }
    //purely reverse a CircularLinkedclist using pointers
    reverse_second(){
        let prev: CLNode<T> | null = null;
        let currentNode = this.head;
        while(currentNode != null){
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

let clist = new CircularLinkedclist<number>();
clist.append(new CLNode<number>(10));
clist.append(new CLNode<number>(12));
clist.append(new CLNode<number>(13));

clist.prepend(new CLNode<number>(9));
clist.append(new CLNode<number>(14));
clist.append(new CLNode<number>(19));
clist.print();
console.log('\n');
//clist.delete(-1);
//console.log("position: ",clist.search(14));
clist.reverse_second()
clist.print();
//console.log(clist);