const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

global.success = require("./helpers/responses.helper").sucess;
global.error = require("./helpers/responses.helper").error;

app.use("/api/v1", require("./routes"));

module.exports = app;
