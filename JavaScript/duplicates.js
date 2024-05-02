let arr = [3,2,3,1,4,6,2,1,3,64,2]

console.log('before removing: ' ,arr)
for(let i = 0 ; i<arr.length ; i++){
    let current = arr[i]
    for(let j = i+1 ; j < arr.length ; j++ ){
        if(current == arr[j]){
            arr.splice(j,1)
        }
    }
}


console.log('after removing duplicates: ',arr)