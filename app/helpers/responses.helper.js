module.exports = {
  sucess: function (res, { data = {}, statusCode = 200 }) {
    return res.status(statusCode).json(data);
  },
  error: function (res, { error = {}, statusCode = 500 }) {
    return res.status(statusCode).json(error);
  },
};
