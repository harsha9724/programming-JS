// given a number find the external digits sum.

function externalDigitsSum(n){
    let sum=0;
    let temp = n;

    do{
        let rem = n%10;
        if(n<=9 || n==temp){
            sum=sum+rem
        }
        n=Math.floor(n/10)
    }while(n>0)

    return sum
}

console.log(externalDigitsSum(123));
