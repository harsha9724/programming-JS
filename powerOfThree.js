// Given a number check whether it is power of 3 or not
/**
 * 
 * Here logic is to reduce the given number to one by continously dividing by 3, while it is reducing to one any where the updated number is not divisible by 3 then it is not a power of 3. If in case it is reduced to one then it is power of two
 */
function powerOfThree(n){
    if(n==1) return true;
    while(n!==1){
        if(n%3 !==0){
            return false
        }
        n= Math.floor(n/3)
    }

    return true
}

console.log(powerOfThree(27));
