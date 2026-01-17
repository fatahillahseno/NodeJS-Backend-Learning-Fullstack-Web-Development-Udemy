const fileSystem = require("fs");

// fs.readFile() => membaca file
fileSystem.readFile("example.txt", "utf8", (err, data) => {
  // ketika error terjadi
  if (err) {
    console.log("Error reading the file:", err);
    return;
  }

  // ketika berhasil membaca file
  console.log("Successful read file\nFile contains:\n", data);
});

// content untuk menulis di file
const content = "Replace old content in example.txt";

// fs.writeFile() => menulis pada suatu file
fileSystem.writeFile("example.txt", content, (err) => {
  // ketika error terjadi
  if (err) {
    console.log("Error writing to a file:", err);
    return;
  }

  // ketika berhasil menulis file
  console.log("File written Successfully");
});

// me-rename nama file
fileSystem.rename("example.txt", "new_name.txt", (err) => {
  // ketika error terjadi
  if (err) {
    console.log("Error renaming the file:", err);
    return;
  }

  // ketika berhasil rename nama file
  console.log("File renamed successfully");
});
