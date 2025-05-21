// Given a number return the sum of its digits;

/**
 * n=123 ==> 1+2+3 = 6
 * n=-123 ==> -1+2+3 = 4
*/

function sumOfDigits(n){
    let sum=0;
    let is_negative=false;
    if(n<0){
        is_negative=true;
        n=-1*n
    }

    do{
        let rem = n%10;
        if(is_negative && n<=9){
            sum=sum-rem
        }else{
            sum+=rem
        }

        n=Math.floor(n/10)
    }while(n>0)

    return sum

}

console.log(sumOfDigits(-123));
