const fs = require('fs');
const process = require('process');
const axios = require('axios');

// In step1.js, write a function, cat.
// It should take one argument, path, and it should read the file with that path, and print the contents of that file.
function read(err, data) {
    if (err) {
        console.log(`Error reading ${loc}`)
        console.log(`${err}`)
        process.exit(1)
    } else {
        console.log(data)
    }
}
function cat(path) {
    fs.readFile(path, 'Utf8', read)
}

loc = process.argv[2];
cat(loc);

//step 2

async function webCat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}

let path = process.argv[2];

if (path.startsWith('http')) {
    webCat(path);
} else {
    cat(path);
}