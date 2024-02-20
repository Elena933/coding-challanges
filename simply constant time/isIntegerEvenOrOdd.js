const arr = [2, 8, 10, 5, 1, 21]
function isIntegerEvenOrOdd(arr){
    if(arr[3] % 2 === 0){
        return 'even'
    }else{
        return'odd'
    }
  
}
console.log(isIntegerEvenOrOdd(arr))