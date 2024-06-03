function BinarySearch(arr , target){
    let left = 0
    let right = arr.length -1 

    while(left <= right){
        let mid = Math.floor(right + left / 2)

        if(arr[mid] == target){
            return console.log('item founded : ',arr[mid])
        }else if(arr[mid] < target){
            left = mid + 1
        }else{
            right = mid -1 
        }
    }

    return console.log('item not found 404')
}


BinarySearch([1,3,5,7,10,12,18] ,1)