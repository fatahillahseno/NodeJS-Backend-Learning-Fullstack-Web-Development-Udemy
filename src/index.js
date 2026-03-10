const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// import npm mongoose
const mongoose = require("mongoose");

// import configureApp yang berisi middleware
const configureApp = require("./settings/config.js");

// import dotenv untuk membaca file .env
const dotEnv = require("dotenv");

// periksa apakah env variables sudah ada, jika sudah ada ambil dari file .env,
// jika tidak ada gunakan default value
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// simpan pada envFile berdasarkan env variables NODE_ENV
// contoh: jika NODE_ENV=development maka envFile = .env.development
const envFile = `.env.${process.env.NODE_ENV}`;

// dotenv.config() untuk membaca file .env dan menyimpan pada process.env
dotEnv.config({ path: envFile });

// set up express app
const express = require("express");
const app = express();
const port = parseInt(process.env.PORT) || 3001;

configureApp(app);

async function bootstrap() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      dbName: process.env.DATABASE_NAME,
    });
    console.log(`Connected to ${process.env.DATABASE_NAME}`);
    app.listen(port, () => {
      console.log(`App listening on port number ${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

// App listen port
bootstrap();
