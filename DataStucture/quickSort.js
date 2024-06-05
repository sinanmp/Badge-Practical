function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    for(let i = 0 ; i < arr.length-2 ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
   return [...quickSort(left) , pivot , ...quickSort(right)]
}



console.log(quickSort([4,3,5,2,35,54,23,1,2,43]))