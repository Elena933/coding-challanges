function findTheSumElemInArr(arr){
   let sum = 0;
   for(let i = 0; i< arr.length; i++){
      sum += arr[i]
   }
   return sum
}
const arr = [2, 2]
console.log(findTheSumElemInArr(arr))