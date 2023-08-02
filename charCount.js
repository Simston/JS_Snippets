
// Function with Regular expression
function charCount(str) {
    var obj = {};
    for (let i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {

            } else {
                obj[char] = 1;
            };
        }
    }
    return obj;
}

console.log(charCount("Hello World !"));

//After rework and research, build a better solution 55% more efficiently.
function charCount2(str) {
    let obj = {};
    for (let char in str) {
        if (isAlphaNumeric(str[char])) {
            char = str[char].toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt();
    if (!((code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123))) { // lower alpha (a-z)
        return false;
    }
    return true;
}

console.log(charCount2("Hello World 2 !"));
