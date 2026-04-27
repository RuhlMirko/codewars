import fs from 'node:fs'

fs.readdir('.', (err, files) => {
  if (err) {
    console.log(err)
    return
  }
  files.forEach((file) => console.log(file))
})
// import fs from "node:promises";

// fs.readdir(".")
//   .then((files) => {
//     files.forEach((file) => console.log(file));
//   })
//   .catch((err) => {
//     if (err) {
//       console.log("Error reading directory: ", err);
//       return;
//     }
//   });
