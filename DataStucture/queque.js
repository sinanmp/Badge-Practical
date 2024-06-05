class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}


class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }


    enqueue(value){
        const newNode = new Node(value)
        
        if(!this.rear){
            this.front = newNode
            this.rear = newNode
        }else{
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++
    }


    dequeue(){
        if(!this.front){
            return console.log('the queue is empty')
        }
        const value = this.front.value
        this.front = this.front.next
        if(this.front == null){
            this.rear = null
        }
        this.size--
    }


    peek(){
        if(this.front == null){
            return console.log('queue is empty')
        }

        return this.front.value
    }

    getSize(){
        return this.size
    }

    printQueue(){
        let current = this.front 
        let result = ''
        while(current !== null){
            result += current.value + ' -> '
            current = current.next
        }
        result += 'null'
        console.log(result)
    }
}


const queue = new Queue()

queue.enqueue(4)
queue.enqueue(65)
queue.enqueue(3)
queue.enqueue(34)
queue.enqueue(5)
queue.enqueue(9)

queue.dequeue()

queue.printQueue()