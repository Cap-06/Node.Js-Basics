const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Please provide an operation and required arguments.");
    process.exit(1);
}

const operation = args[0];
const filePath = args[1];
const content = args.slice(2).join(' ');

// Function to handle file operations
const handleFileOperation = (operation, filePath, content) => {
    switch (operation) {
        case 'read':
            if (!filePath) {
                console.log("Please provide a file to read.");
                return;
            }
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.log(`Error reading file: ${err.message}`);
                } else {
                    console.log(data);
                }
            });
            break;

        case 'delete':
            if (!filePath) {
                console.log("Please provide a file to delete.");
                return;
            }
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(`Error deleting file: ${err.message}`);
                } else {
                    console.log(`File '${filePath}' deleted`);
                }
            });
            break;

        case 'create':
            if (!filePath) {
                console.log("Please provide a file to create.");
                return;
            }
            fs.writeFile(filePath, '', (err) => {
                if (err) {
                    console.log(`Error creating file: ${err.message}`);
                } else {
                    console.log(`File '${filePath}' created`);
                }
            });
            break;

        case 'append':
            if (!filePath || !content) {
                console.log("Please provide a file and content to append.");
                return;
            }
            fs.appendFile(filePath, content + '\n', (err) => {
                if (err) {
                    console.log(`Error appending to file: ${err.message}`);
                } else {
                    console.log(`Content appended to the file '${filePath}'`);
                }
            });
            break;

        case 'rename':
            if (args.length !== 3) {
                console.log("Please provide the current file name and the new file name.");
                return;
            }
            const newFileName = args[2];
            fs.rename(filePath, newFileName, (err) => {
                if (err) {
                    console.log(`Error renaming file: ${err.message}`);
                } else {
                    console.log(`File '${filePath}' renamed to '${newFileName}'`);
                }
            });
            break;
        case 'list':
            const dirPath = filePath || '.';
            fs.readdir(dirPath, (err, files) => {
                if (err) {
                    console.log(`Error listing directory: ${err.message}`);
                } else {
                    files.forEach(file => console.log(file));
                }
            });
            break;

        default:
            console.log(`Invalid operation '${operation}'`);
    }
};
handleFileOperation(operation, filePath, content);
