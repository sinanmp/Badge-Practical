

var circularGameLosers = function(n, k) {
    let loosers = []
    let winners = []
    let  i=1
    let mnK = 1

    while(true){
        if(i==1){
            winners.push(i)
            i=i+k
            mnK++
            continue
        }
        if(i > n){
            do{
                console.log(i)
                let els = i-n
                i=els
                console.log(i)
            }while(i>n)
        }
        if(winners.includes(i)){
            break
        }
        winners.push(i)
        i=i+mnK*k
        mnK++ 
    }

    for(let i = 1 ; i<=n ; i++){
        if(!winners.includes(i)){
            loosers.push(i)
        }
    }
    return console.log(loosers)
};


circularGameLosers(3,2)
