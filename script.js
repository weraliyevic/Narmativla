
// Rozmatov Sardor 

function findLongestWord(sentence) {
    const words = sentence.split(' ')

    const longest = words.reduce((max, current) => {
        return current.length > max.length ? current : max;
    })

    return longest
}

console.log(findLongestWord("I love programming in JavaScript"))
console.log(findLongestWord("Learning JavaScript is fun"))
console.log(findLongestWord("I am a coder"))