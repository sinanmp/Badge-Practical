class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null 
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }


    add(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            this.tail=newNode
        }else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
    }



    printList(){
        let current = this.tail
        while(current){
            console.log(current.value)
            current = current.prev
        }
    }
}





const list = new DoublyLinkedList()


list.add(2)
list.add(5)
list.add(45)
list.add(9)


list.printList()