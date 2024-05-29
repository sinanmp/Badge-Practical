let num =1

function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }

    const mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0,mid))
    const right = mergeSort(arr.slice(mid))
    console.log(num)
    num++
    return merge(left, right)
}

function merge(left , right){
    const result = []
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



console.log(mergeSort([5,3,6,1,0,3,4,21]))