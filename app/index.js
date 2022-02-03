const app = require("express")();

app.use("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
