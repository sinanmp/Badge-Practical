class Node{
    constructor(value){
        this.value = value
        this.left = null 
        this.right = null
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null
    }


    insert(value){
        const newNode = new Node(value)
        
        if(!this.root){
            this.root = newNode
        }else{
            this.insertHelper(this.root , newNode)
        }
    }


    insertHelper(root, node){
        if(node.value < root.value){
            if(!root.left){
                root.left = node
            }else{
                this.insertHelper(root.left , node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                this.insertHelper(root.right , node)
            }
        }
    }
}