// Given an Year check whether it is leap year or not
/**
 * Every 4th year is a leap year
 * Every century is not a leap year
 * But centuries multiples of 400 is a leap year
 */

function isLeapYear(year){
    if((year%4==0 && year%100 !==0) || year%400 == 0){
        return true
    }else{
        return false
    }
}

console.log(isLeapYear(2024));
