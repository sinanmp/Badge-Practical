class MinHeap{
    constructor(){
        this.heap = []
    }

     insert(value){
        this.heap.push(value)
        this.heapifyUp()
     }

     heapifyUp(){
        let currentIndex = this.heap.length -1 
        let parenetIndex = this.getParentIndex(currentIndex)

        while(currentIndex > 0){
            if(this.heap[currentIndex] < this.heap[parenetIndex]){
                this.swapp(currentIndex,parenetIndex)
                currentIndex = parenetIndex
                parenetIndex = this.getParentIndex(currentIndex)
            }else{
                break
            }
        }
     }


     heapifyDown(){
        let currentIndex = 0

        while(true){
            let leftChild = this.getLeftChildIndex(currentIndex)
            let rightChild = this.getRightchildIndex(currentIndex)
            let smallest = currentIndex
            if(this.heap[leftChild] < this.heap[smallest]){
                smallest = leftChild
            }
            if(this.heap[rightChild] < this.heap[smallest]){
                smallest = rightChild
            }

            if(smallest != currentIndex){
                this.swapp(smallest , currentIndex)
                currentIndex = smallest
            }else{
                break
            }

        }
     }


     heapSort(arr){
        for(let i = 0 ; i < arr.length ; i++){
            this.insert(arr[i])
            this.heapifyUp()
        }
        let sortedArr = []
        for(let i = 0 ; i<arr.length; i++){
            sortedArr.push(this.extractSmallest())
        }
        return sortedArr
     }


     extractSmallest(){
        let elemnt = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return elemnt
     }

     getParentIndex(i){
        return Math.floor((i - 1) / 2)
     }


     getLeftChildIndex(i){
        return i * 2 + 1
     }

     swapp(i , j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
     }

     display(){
        console.log(this.heap)
     }

     getRightchildIndex(i){
        return i * 2 + 2
     }
}


const heap = new MinHeap()

console.log(heap.heapSort([3,2,5,2,64,4,3,32]))

