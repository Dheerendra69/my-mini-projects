const fs = require("fs");
const content = "Hello, world!";
// async
fs.readFile("readFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error while reading file: ", err);
  }
  console.log("content in file: ", data);
});

// synchronously
const fs = require("fs");

try {
  const data = fs.readFileSync("readFile.txt", "utf8");
  console.log("File content:", data);
} catch (err) {
  console.error("Error reading file:", err);
}
// write
fs.writeFile("writeFile.txt", content, (err) => {
  if (err) throw err;
  console.log("File written successfully.");
});

fs.appendFile("writeFile.txt", "\nAppended text.", (err) => {
  if (err) throw err;
  console.log("Text appended.");
});
// delete a file
fs.unlink("output.txt", (err) => {
  if (err) throw err;
  console.log("File deleted.");
});
// creating a directory
fs.mkdir("new-folder", (err) => {
  if (err) throw err;
  console.log("Folder created.");
});

fs.readdir("./", (err, files) => {
  if (err) throw err;
  console.log("Files and folders:", files);
});
const fs = require("fs");

fs.rename("example.txt", "renamed.txt", (err) => {
  if (err) throw err;
  console.log("File renamed.");
});

// checking if file exists
fs.access("example.txt", fs.constants.F_OK, (err) => {
  console.log(err ? "File does not exist" : "File exists");
});

// read file using promises
const fsPromises = require("fs").promises;

async function readFileAsync() {
  try {
    const data = await fsPromises.readFile("example.txt", "utf8");
    console.log("File content:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

readFileAsync();
