const { Formidable } = require("formidable");

module.exports = {
  formidable: function (req, res, next) {
    if (req.headers["content-type"]?.includes("multipart/form-data")) {
      const form = new Formidable();
      form.parse(req, (err, fields, files) => {
        console.log("Formidable");
        req.body = fields;
        req.files = files;
        next();
      });
    } else next();
  },
};
