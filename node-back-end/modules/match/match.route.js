const matchController = require("./match.controller");

module.exports = function (app) {
  app.get('/match',matchController.getMatchList)
}