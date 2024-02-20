function findAllpossiblePairsOfSentanses (strings){
    strings.forEach(str1 => {
        strings.forEach(str2 => {
            console.log(`${str1} + ${str2}`)
        })
    })

}
const strings = ["Hello", "Hi", "How are you", "Good"]
findAllpossiblePairsOfSentanses (strings)