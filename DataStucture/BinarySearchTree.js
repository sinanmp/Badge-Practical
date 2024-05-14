class Node{
    constructor(data){
        this.data = data ,
        this.left = null
        this.right = null
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null
    }


    insert(data){
        const newNode = new Node(data)
        if(!this.root){
            this.root = newNode
            return
        }
        this.insertHelper(this.root,newNode)
    }


    insertHelper(root,newNode){
        if(root.data > newNode.data){
            if(root.left == null){
                root.left = newNode
            }else{
                this.insertHelper(root.left , newNode)
            }
        }else{
            if(root.right == null){
                root.right = newNode
            }else{
                this.insertHelper(root.right , newNode)
            }
        }
    }

    deletion(data){
        if(!this.root){
            return console.log('the bst is empty')
        }
        this.root = this.deleteHelper(this.root , data)
    }


    deleteHelper(root,data){
        if(!root){
            return null
        }

        if(data < root.data){
            root.left= this.deleteHelper(root.left , data)
            return root
        }else if(data > root.data){
            root.right = this.deleteHelper(root.right, data)
            return root
        }else{
            if(root.left){
                root = root.left 
                return root
            }else if(root.right){
                root = root.right 
                return root
            }else{
                return null
            }
        }
    }

    display(){
        if(!this.root){
            return console.log('the bst is empty')
        }
        this.inOrderTravercel(this.root)
    }

    inOrderTravercel(root){
        if(root){
            this.inOrderTravercel(root.left)
            this.inOrderTravercel(root.right)
            console.log(root.data)
        }
    }
}



const list = new BinarySearchTree()

list.insert(4)
list.insert(65)
list.insert(5)
list.insert(11)
list.insert(5)
list.deletion(5)
list.display()