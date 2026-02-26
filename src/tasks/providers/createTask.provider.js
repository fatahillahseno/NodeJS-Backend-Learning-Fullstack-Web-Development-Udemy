const Task = require("../task.schema.js");
const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

async function createTaskProvider(req, res) {
  const validatedTaskData = matchedData(req);
  // validasi data yang telah di validasi oleh express-validator, jika ada data yang tidak valid maka data tersebut akan dihapus dari validatedTaskData

  const task = new Task(validatedTaskData);
  // membuat instance/object baru dari model Task dengan data yang telah divalidasi, kemudian menyimpan task tersebut ke database dan mengembalikan hasilnya

  try {
    await task.save();
    return res.status(StatusCodes.CREATED).json(task);
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.GATEWAY_TIMEOUT).json({
      reason: "Unable to process your request at the moment, please try later",
    });
  }
}

module.exports = createTaskProvider;
