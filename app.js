// Quick Question #1
// What does the following code return?

// new Set([1,1,2,2,3,4]) -  Set(4) {1,2,3,4}

// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("") - "ref"

// Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true); - m = {[1,2,3] => true} formatted as key => value
// m.set([1,2,3], false); - m = {[1,2,3] => false} formatted as key => value

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}

hasDuplicate([1, 3, 2, 1]) // true
hasDuplicate([1, 5, -1, 4]) // false


// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str) {
    const vowels = 'aieou';
    strArray = str.split('').reduce((count, str) => {
        if (vowels.indexOf(str.toLowerCase()) !== -1) {
            if (str in count) {
                count[str]++;
            } else {
                count[str] = 1;
            }
        } return count;
    }, {})
    return map = new Map(Object.entries(strArray))
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }