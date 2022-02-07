const Router = require("express").Router();

Router.use("/", require("./components/root/root.routes"));

module.exports = Router;
