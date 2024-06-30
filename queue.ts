class Queue<T>{
    private storage: T[];
    private length: number;
    private index: number;

    constructor(){
        this.storage = [];
        this.length = 0;
        this.index = 0;
    }

    enqueue(item:T){
        let temp = [item];
        this.storage = temp.concat(this.storage);
        this.length++;
    }

    dequeue():T|null{
        if(this.length > 0){
            let item = this.storage.splice(this.length - 1);
            this.length--;
            return item[0];
        }
        return null;
        
        
    }

    peek():T|null{
        if(this.length > 0){
            return this.storage[this.length - 1];
        }
        else{
            return null;
        }
    }

    size():number{
        return this.length;
    }

    isEmpty():true|false{
        if(this.length > 0)
            return false;
        else
            return true;
    }

    print(){
        this.storage.forEach((item)=>{
            console.log(item)
        })
    }
}

let queue = new Queue<string>();
console.log('deque ',queue.dequeue());
queue.enqueue('34');
queue.enqueue('my name');
queue.enqueue('mercedez');
queue.enqueue('volvo');
console.log('deque ',queue.dequeue());
console.log('deque ',queue.dequeue());
queue.enqueue('bmw');
console.log('isEmpty ',queue.isEmpty());
console.log('peak ',queue.peek());
console.log('size: ',queue.size());
queue.print();