const arr = [2, 4, 5, 7, 8, 3]
function sumOfEvenNum (arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            sum += arr[i]
        }
    }
    return sum

}
console.log(sumOfEvenNum(arr))