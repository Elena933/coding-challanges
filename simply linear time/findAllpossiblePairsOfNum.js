function findAllpossiblePairs(num){
  num.forEach(num1 => {
    num.forEach(num2 => {
        console.log(num1 + num2)
    })
  })  
}
const num = [2, 8, 7, 3]
findAllpossiblePairs(num)