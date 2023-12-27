// <!-- ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ``` -->


const fs = require('fs');

const filePath = 'yourFileName.txt'; // file path

// Read the file
const content = fs.readFileSync(filePath, 'utf8');

// Remove extra spaces
const modifiedContent = content.replace(/\s+/g, ' ');

// Writing the modified content back to the file
fs.writeFileSync(filePath, modifiedContent, 'utf8');

console.log('File successfully updated!');
