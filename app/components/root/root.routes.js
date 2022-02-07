const Router = require("express").Router();
const { formidable } = require("../../middlewares/formidable.mdw");
const root = require("./root.controller");

Router.get("/", root.get);
Router.post("/", formidable, root.post);

module.exports = Router;
