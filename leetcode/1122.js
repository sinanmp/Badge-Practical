var relativeSortArray = function(arr1, arr2) {
    let result = []
    let restValues = []
    for(let i = 0 ; i < arr2.length ; i++){
        for(let j = 0 ; j < arr1.length ; j++){
            if(arr1[j]==arr2[i]){
                result.push(arr1[j])
            }else if(!arr2.includes(arr1[j]) && i==0){
                restValues.push(arr1[j])
            }
        }
    }
    return result
};


console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))