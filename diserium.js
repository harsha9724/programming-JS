// Given a number check whether the number is deserium number or not
// n=423 => 4^1+2^2+3^3 == given number 
function count(n){
    let cnt=0;
    do{
        n=Math.floor(n/10);
        cnt++
    }while(n>0)

    return cnt;
}
   function deseriumNumber(n){
    let cnt = count(n)
    let temp=n;

    let sum = 0;

    do{
        let rem=n%10;
        sum+=rem**cnt;
        cnt--
        n=Math.floor(n/10);
    }while(n>0)

    return temp==sum
   }
      
   console.log(deseriumNumber(89));


   