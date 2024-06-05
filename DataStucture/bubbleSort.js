function bubbleSort(arr){
    let swapped
    do {
        swapped = false
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i] > arr[i+1]){
                [arr[i] , arr[i+1]] = [arr[i+1] , arr[i]]
                swapped = true
            }
        }
        
    } while (swapped);

    return arr
    
}



console.log(bubbleSort([5,2,34,5,32,21,23,4,3]))