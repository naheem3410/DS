class Stack<T>{
    private storage: T[];
    private length: number;
    private index: number;

    constructor(){
        this.storage = [];
        this.length = 0;
        this.index = 0;
    }

    push(item:T){
        this.storage[this.index] = item;
        this.length++;
        this.index++;
    }

    pop():T|null{
        if(this.length > 0){
            this.index--;
            let item = this.storage.splice(this.index);
            this.length--;
            return item[0];
        }
        return null;
        
        
    }

    peek():T|null{
        if(this.length > 0){
            return this.storage[0];
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

let stack = new Stack<number>()
// stack.push(100);
// stack.push(67);
// stack.push(6);
stack.pop();
stack.pop();
console.log('isEmpty ',stack.isEmpty());
stack.push(-23);
console.log('peak ',stack.peek());
stack.print();
console.log('size: ',stack.size());
