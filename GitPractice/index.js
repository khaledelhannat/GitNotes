const me = ['a', 'b', 'c'];

function Temoo(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log("Done!");
}

Temoo(me);

// All Good

// 1. Understand the problem
// 2. Explore concrete examples
// 3. Break it down
// 4. Solve / Simplify
// 5. Look back and refactor

// Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
    // make object to return at end
    let result = {};
    // loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // if the char is a number/letter AND is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++;
        }
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        else {
            result[char] = 1;
        }
    }
    // if character is something else (space, period, etc.) don't do anything
    // return object at end
    return result;
}

// Working on some channges
/// other channge
// more