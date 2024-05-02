

function* gn(){
   let count = 1 
    while(true){
        if(count % 2 == 0){
            yield count
        }
        count++
    }
}


let it = gn()
console.log(it.next().value)
console.log(it.next().value)