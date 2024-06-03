class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }


    add(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
    }


    delete(value){
        if(!this.head){
            return console.log('sorry the list has empty')
        }

        if(this.head.value == value){
            const deletedNode = this.head
            this.head = this.head.next
            if(this.tail == deletedNode){
                this.tail = null
            }
            return console.log(deletedNode , 'deleted successfully')
        }

        let current = this.head

        while(current){
            if(current.next.value == value){
                let deletedNode = current.next
                current.next = current.next.next
                if(deletedNode == this.tail){
                    console.log(current ,'this is current')
                    this.tail = current
                }
                break
            }
            current = current.next
        }
    }

    printList(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }


    addTospecificSpace(index , value){
        let newNode = new Node(value)

        if(index==0){
            newNode.next = this.head
            this.head = newNode
            return
        }

        let counter = 0
        let current = this.head
        let previous = null
        while(current){
            if(counter == index){
                newNode.next = current
                previous.next = newNode
                console.log('entered')
                break
            }
            previous = current
            current = current.next
            counter++
        }
        
       }


       findMiddle(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
       }
}


const list = new LinkedList()


list.add(4)
list.add(10)
list.add(8)
list.add(7)
list.add(3)


list.addTospecificSpace(0,100)
list.printList()
console.log(list.findMiddle())

