function findTheMinElemInArr(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}
const arr = [2, 80, 5, 1]
console.log(findTheMinElemInArr(arr))