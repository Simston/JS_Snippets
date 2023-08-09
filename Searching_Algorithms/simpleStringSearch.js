// My Solution
function searchString(str1, str2) {
    let counterOccurrences = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[0]) {
            for (let j = 1; j < str2.length; j++) {
                if (str1[i + j] !== str2[j]) break;
                if (j === str2.length - 1) counterOccurrences++
            }
        }
    }
    return counterOccurrences;
}
console.log(searchString("lorie loled", "lo"));

// VOIR KMP 
