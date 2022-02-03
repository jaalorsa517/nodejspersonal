const app = require("./app/index.js");
const httpServer = require("http").createServer(app);
const config = require("config");

httpServer.listen(3000, () => {
  console.log(`Server is listening on port ${3000}`);
});
