// importing file system
const fs = require("fs")

// creating new text file using FS Module
fs.writeFileSync("./Text.txt", "This is Text-1")

// appening new text to existing text
fs.writeFileSync("./Text.txt","\nThis is new Text-2",{flag:"a"}) 

// Reading a file in Synchronous way
const content = fs.readFileSync("./Text.txt",'utf-8') // UTF-8 converts code into readable format
console.log(content)

// rename a file
fs.renameSync("./Text.txt","./AfterRenamedText.txt")

// I will add another file and delete it
fs.writeFileSync("./ToBeDeleted.txt","this file will be deleted")
// fs.unlinkSync("./ToBeDeleted.txt")