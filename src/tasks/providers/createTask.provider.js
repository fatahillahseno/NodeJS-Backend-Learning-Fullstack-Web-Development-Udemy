const Task = require("../task.schema.js");
const { matchedData } = require("express-validator");

async function createTaskProvider(req) {
  const validatedTaskData = matchedData(req);
  // validasi data yang telah di validasi oleh express-validator, jika ada data yang tidak valid maka data tersebut akan dihapus dari validatedTaskData

  const task = new Task(validatedTaskData);
  // membuat instance baru dari model Task dengan data yang telah divalidasi, kemudian menyimpan task tersebut ke database dan mengembalikan hasilnya
  return await task.save();
}

module.exports = createTaskProvider;
