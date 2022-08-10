function findLongestWord(string) {
    let words = string.split(" ");
    let maxLongWord = words[0];

    for (const word of words) {
        if (word.length > maxLongWord.length) {
            word === maxLongWord;
        }
    }
    return maxLongWord;
}
