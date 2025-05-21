// Given three distinct numbers find the second max among the three elements.

function secondMax(a,b,c){
    if(a >b && a<c){
        return a
    }else if(b>a && b<c){
        return b
    }else{
        return c
    }
}

console.log(secondMax(20,40,30));
