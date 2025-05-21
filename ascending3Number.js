let max1;
let max2;
let max3;
let a=10;
let b=5;
let c=25;
if(a>b && a>c){
    max1=a;
    if(b>c){
        max2=b;
        max3=c
    }else{
        max2=c;
        max3=b;
    }
}else if(b>a && b > c){
    max1=b;
    if(a>c){
        max2=a;
        max3=c;
    }else{
        max2=c;
        max3=b;
    }
}else{
    max1=c;
    if(a>b){
        max2=a;
        max3=b
    }else{
        max2=b;
        max3=a
    }
}

console.log(max1,max2,max3); // descending order
console.log(max3,max2,max1); // ascending order

