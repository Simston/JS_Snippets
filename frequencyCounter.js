// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (const val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (const val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2)
    for (const val in frequencyCounter1) {
        if (!(val in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[val] !== frequencyCounter1[val]) {
            return false;
        }
    }
    return true;
}
// TIME COMPLEXITY HERE - 0(n)

console.log(validAnagram('aaz', 'zza'));