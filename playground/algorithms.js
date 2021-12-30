const { mainModule } = require("process");
const { moveMessagePortToContext } = require("worker_threads");

const groupAnagrams = (strs) => {
    // Frequency counter with characters
    let map = new Map();
    for (let s of strs) {
        let count = new Array(26).fill(0) // Utilizing a vector

        for (let c of s) {
            let index = c.charCodeAt(0) - 'a'.charCodeAt(0) // Remember this way of getting char codes in JS
            // console.log(index) // All within the 26 character range of the alphabet
            count[index]++
        }
        let key = count
        if (map.has(key)) {
            map.set(key, [...(map.get(key))]);
        } else {
            map.set(key, [s])
        }
    }
    return map.values()
}

// Find Duplicate file in file system
const findDuplicate = (paths) => {
    if (paths.length <= 0) return null

    let duplicateMap = new Map();
    const results = []
    // console.log(paths)

    paths.forEach(path => {
        
        const [dir, ...files] = path.split(' ')
        // console.log(`dir is: ${dir}`)

        // For each path, we have separate files we need to look at and determine if the contents are duplicate
        files.forEach(file => {
            const contentStart = file.indexOf('(')
            const contentEnd = file.length - 1

            // Gets the content of the files - this is what we want to search for duplicates for
            const content = file.substring(contentStart + 1, contentEnd)
            //parse filename
            const fileName = file.substring(0, contentStart);
            const fullPath = dir + "/" + fileName;
            // console.log(`fullPath is ${fullPath}`)

            // Since we want to return the files in terms of its paths, we need to reconstruct that
            if (duplicateMap.has(content)) {
                // Set the existing content to map to the current filePath and the new filePath
                duplicateMap.set(content, [...duplicateMap.get(content), fullPath])
            } else {
                duplicateMap.set(content, [fullPath])
            }
        })

        for (let [k, v] of duplicateMap) {
            if (v.length > 1) {
                results.push(v)
            }
        }
    });
    return results
}


// console.log(findDuplicate([
//   "root/a 1.txt(abcd) 2.txt(efgh)",
//   "root/c 3.txt(abcd)",
//   "root/c/d 4.txt(efgh)",
//   "root 4.txt(efgh)",
// ]));


// Hashing question - You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text
// What do we want to do with "After", "Dana", and "add"? In this example, your final map should include one "Add" or "add" with a value of 22. 
// Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana"
const wordsToCounts = (inputString) => {
    // We'll use a JavaScript Map instead of an object because it is more explicit - we'll be mapping words to counts. It's also cleaner and easier
    const wordMap = new Map();
    const [...words] = inputString.toLowerCase().split(' ') // Rest syntax -> dirty!
    for (const value of words) {
        if (wordMap.has(value)) {
            wordMap.set(value, wordMap.get(value) + 1)
        } else {
            wordMap.set(value, 1)
        }
    }

    // return wordMap.entries()
    return wordMap
    // Efficient! -> O(n) time
}

console.log(wordsToCounts('Chocolate cake for dinner and pound cake for dessert'));

