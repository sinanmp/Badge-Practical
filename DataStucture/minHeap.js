class MinHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let currentIndex = this.heap.length-1 

        while(currentIndex > 0){
            let parentIndex = this.getParentIndex(currentIndex)
            if(this.heap[parentIndex] > this.heap[currentIndex]){
                this.swapp(parentIndex, currentIndex)
                currentIndex = parentIndex
            }else{
                break
            }
        }
    }


    extractSmallest(){
        let element = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return element
    }


    heapifyDown(){
        let currentIndex = 0 

        while(currentIndex < this.heap.length){
            let smallest = currentIndex 
            let leftIndex = this.getLeftIndex(currentIndex)
            let rightIndex = this.getRightIndex(currentIndex)
            
            if(this.heap[leftIndex] < this.heap[smallest]){
                smallest = leftIndex
            }

            if(this.heap[rightIndex] < this.heap[smallest]){
                smallest = rightIndex
            }

            if(smallest !== currentIndex){
                this.swapp(smallest , currentIndex)
                currentIndex = smallest
            }else{
                break
            }
        }
    }


    display(){
        console.log(this.heap)
    }


    getParentIndex(i){
        return Math.floor(i - 1 / 2)
    }

    getLeftIndex(i){
        return i * 2 + 1
    }


    getRightIndex(i){
        return i * 2 + 2
    }

    swapp(i , j){
        [this.heap[i] , this.heap[j]]= [this.heap[j] , this.heap[i]]
    }
}


const heap = new MinHeap()

heap.insert(23)
heap.insert(7)
heap.insert(3)
heap.insert(74)
heap.insert(54)
heap.insert(546)

heap.extractSmallest()

heap.display()