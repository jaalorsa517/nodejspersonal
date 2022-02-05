const app = require("express")();
const cors = require("cors");

app.use(cors());

app.use("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
