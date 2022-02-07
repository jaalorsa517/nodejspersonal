module.exports = {
  get: (req, res) => {
    return global.success(res, { data: { msg: "sucess" } });
  },
  post: (req, res) => {
    try {
      // throw { message: "error al crear" };
      return global.success(res, { data: { msg: "Created" }, statusCode: 201 });
    } catch (error) {
      console.log(error);
      return global.error(res, { error });
    }
  },
};
