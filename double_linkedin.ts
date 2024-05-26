/**
 * Double Linkedlin node
 */
class DLNode<T> {
    data: T;
    next: DLNode<T> | null;
    prev: DLNode<T> | null;
    constructor(data: T) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList<T> {

    head: DLNode<T> | null;

    /**
     * 
     * @param newNode the node to be added
     * @param position the position we want the node to be inserted
     * is position is empty, new node is inserted at the end
     */
    append(newNode: DLNode<T>, position?: number) {
        if (position) {
            if (position === 1) {
                this.prepend(newNode);
                return;
            }
            else if (position > 1) {
                let pos = 1;
                let currentNode = this.head;
                while (currentNode !== null) {
                    if (pos === position) {
                        newNode.next = currentNode;
                        newNode.prev = currentNode!.prev;
                        currentNode!.prev!.next = newNode;
                        currentNode!.prev = newNode;
                        return
                    }
                    currentNode = currentNode!.next;
                    pos++;
                }
            }
            else {
                return;
            }
        }
        else {
            if (position === 0) {
                return;
            }
            //insert new head node if not present already
            if (!this.head) {
                this.head = newNode;
                return;
            }
            //insert if head node is already present
            let currentNode = this.head;
            while (currentNode.next != null) {
                //move to the next node till you get to the last node
                currentNode = currentNode.next;
            }
            // add new node to the last node
            currentNode.next = newNode;
            newNode.prev = currentNode;
        }
    }

    /**
     * 
     * @param type refers to the traversing type: f (forward) b (backward)
     */
    traverse(type: string) {
        if (!this.head) {
            return;
        }
        let currentNode = this.head;
        if (type === 'f') {
            while (currentNode.next !== null) {
                //move to the next node till you get to the last node
                console.log(currentNode.data);
                currentNode = currentNode!.next;
            }
            //print last node
            console.log(currentNode.data);
        }
        else if (type === 'b') {
            //move to the next node till you get to the last node
            while (currentNode.next !== null) {
                currentNode = currentNode!.next;
            }
            //now move from last node to first node
            while (currentNode.prev !== null) {
                console.log(currentNode.data);
                currentNode = currentNode!.prev;
            }
            //print first node
            console.log(currentNode.data);
        }
        else {
            console.log('Invalid: write f or b');
        }
    }

    //add to the front
    prepend(newNode: DLNode<T>) {
        if (!this.head) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    /**
     * 
     * @param position the position we want to add the node
     * if position is empty, it is deleted from the end
     */
    delete(position?: number) {
        if (!this.head) {
            return;
        }
        if (position) {
            if(position < 0){
                return;
            }
            let pos = 1;
            let currentNode = this.head;
            while (currentNode !== null) {
                if (pos === position) {
                    //handle the case of deleting last element
                    if (currentNode.next === null) {
                        currentNode.prev!.next = null;
                        currentNode.prev = null;
                        return;
                    }
                    //handle the case of deleting first element
                    if (currentNode.prev === null) {
                        this.head = currentNode.next;
                        currentNode.next.prev = this.head
                        currentNode.next = null;
                        return;
                    }
                    //handle deleting in the middle
                    currentNode.prev!.next = currentNode.next;
                    currentNode.next!.prev = currentNode.prev!;
                    return
                }
                currentNode = currentNode!.next!;
                pos++;
            }
            return;
        }
        else {
            if(position == 0){
                return;
            }
            let currentNode = this.head;
            //move to the next node till you get to the last node
            while (currentNode.next !== null) {
                currentNode = currentNode!.next;
            }
            //detach last node from previous node and the previous one next to null
            currentNode.prev!.next = null;
            currentNode.prev = null;
        }
    }

    //reverse a doubly linkedlist
    reverse(){
        
        let prevNode: DLNode<T> | null = null;
        let currentNode = this.head;
        while(currentNode != null){
            //store next node
            let next = currentNode.next;
            //change the current node next property to the previous node
            currentNode.next = prevNode;
            //change the current node prev property to the next node
            currentNode.prev = next;
            //store the previous node
            prevNode = currentNode;
            //make current node to be next node
            currentNode = next;
        }
        this.head = prevNode;
    }
}

let dLink = new DoubleLinkedList()
dLink.append(new DLNode(10));
dLink.append(new DLNode(13));
dLink.append(new DLNode(14));
dLink.append(new DLNode(15));
dLink.append(new DLNode(16), 1);
dLink.prepend(new DLNode(200))
dLink.delete(3);
dLink.traverse('f');
console.log('\n');
dLink.reverse();
dLink.traverse('f');