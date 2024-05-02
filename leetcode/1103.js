// var distributeCandies = function(candies, num_people) {
//     let result = new Array(num_people).fill(0)
//     for(let i = 1 ; i <=num_people ; i++){
//         if(candies - i >= 1){
//             result[i-1]=i
//             candies = candies - i
//         }else{
//             if(candies > 0){
//                 result[i-1]=candies
//                 candies = candies - candies
//             }
//         }
//     }
//     console.log('candies before:', candies);
//     let j = 0;
    
//     while (candies > 0 && j < result.length) {
//         result[j] += result.length + j + 1;
//         candies -= result.length + j + 1;
//         console.log('Remaining candies:', candies, 'and added', result.length + j + 1, 'to recipient', j + 1);
//         j++;
        
//         // Reset index if all recipients have received candies once
//         if (j === result.length) {
//             j = 0;
//         }
//     }
    
//     console.log('candies after:', candies);
    
//     console.log(result)
//     return result
// };

