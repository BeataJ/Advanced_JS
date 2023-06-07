const fs = require("fs/promises");

function readFile() {
    let fileData;
 
    // fs.readFile("data.txt", (error, fileData)=> {
    //     console.log('File parsing done!');
    //     console.log(fileData.toString());
    // });
  
    fs.readFile('data.txt')
    .then((fileData)=> {
      console.log("File parsing done!");
      console.log(fileData.toString());
      // return anotherAsyncOperation
    })
    .then(()=> {});

  console.log("Hi there!");
}

readFile();
