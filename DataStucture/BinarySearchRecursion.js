function BinarySearchRec(arr,target,left = 0,right = arr.length -1){
    if(left > right){
        return console.log('item not found 404')
    }

    let mid = Math.floor((right + left)/2)

    if(arr[mid] == target){
        return console.log('item founded : ', arr[mid])
    }else if(target < arr[mid]){
        const value = BinarySearchRec(arr, target,left , right = right -1)
        return value
    }else{
        const value = BinarySearchRec(arr,target,left = left + 1 , right)
        return value
    }

}


BinarySearchRec([2,4,5,8,10,17,21],10)