// Given a number check whether it is power of 2 or not
/**
 * 
 * Here logic is to reduce the given number to one by continously dividing by 2, while it is reducing to one any where the updated number is not divisible by 2 then it is not a power of 2. If in case it is reduced to one then it is power of two
 */
function powerOfTwo(n){
    if(n==1) return true;
    while(n!==1){
        if(n%2 !==0){
            return false
        }
        n= Math.floor(n/2)
    }

    return true
}

console.log(powerOfTwo(12));
