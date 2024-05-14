class Node{
    constructor(data){
        this.data = data,
        this.next = null
    }
}


class List{
    constructor(){
        this.head = null
    }

    append(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head 
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
    }

    remove(data){
        if(!this.head){
            return console.log('no data in the list ')
        }

        if(this.head.data == data){
            this.head = this.head.next 
            return console.log(`${data} removed`)
        }

        let current = this.head
        while(current.next){
            if(current.data == data){
              current.next = current.next.next
            }else{
              current = current.next
            }
        }
    }
}