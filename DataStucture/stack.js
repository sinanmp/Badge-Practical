class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Stack{
    constructor(){
        this.top = null
        this.size = 0
    }


    push(value){
        const newNode = new Node(value)

        if(!this.top){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.size++
    }


    pop(){
        if(!this.top){
            return console.log('stack underflow')
        }
        const value = this.top.value
        this.top = this.top.next
        return value
    }


    display(){
        let current = this.top
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}



const stack = new Stack()

stack.push(4)
stack.push(76)
stack.push(0)
stack.push(8)
stack.push(6)

stack.pop()

stack.display()