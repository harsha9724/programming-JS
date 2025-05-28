// Given the number count the number of digits;

function count(n){
    let cnt=0;
    do{
        n=Math.floor(n/10);
        cnt++
    }while(n>0)

    return cnt;
}

console.log(count(1258));
