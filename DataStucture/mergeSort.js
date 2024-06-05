function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left , right)
}


function merge(left, right){
    let result = []
    let i = 0 
    let j = 0

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }
    result.push(...left.slice(i))
    result.push(...right.slice(j))

    return result
}

console.log(mergeSort([5,3,6,3,4,54,3,24,54,32]))