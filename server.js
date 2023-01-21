const express = require("express");
const dotenv = require("dotenv");

// Load the .env file
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

// Route files
const bootcamps = require("./routes/bootcamps");

const app = express();
// mount router
app.use("/api/v1/bootcamps", bootcamps);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
