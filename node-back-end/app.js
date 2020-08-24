const express = require("express");
const mongoose = require("mongoose");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();

const port = 9000;
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://mongodb:27017/CricketLeague", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).catch(err=>console.log('Mongo Connection Error',err));

const allowCrossDomain = function (req, res, next) {
  const allowedOrigins = ['http://localhost:3000'];
  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'access-control-allow-credentials,access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,cache-control,content-type,my-header,X-Requested-With,content-type,Content-Length,Authorization,cache-control');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
  res.setHeader("Expires", "0"); // Proxies.
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};
app.use(allowCrossDomain);
// Swagger set up
const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Time to document that Express API you built",
      version: "1.0.0",
      description: "A test project to understand how easy it is to document and Express API",
      license: {
        name: "MIT"
      },
    },
    servers: [
      {
        url: `http://localhost:${port}`
      }
    ]
  },
  apis: [
    "./modules/**/*.route.js",
    "./modules/**/*.model.js"
  ]
};
const specs = swaggerJsdoc(options);
app.use("/docs", swaggerUi.serve);
app.get("/docs", swaggerUi.setup(specs, { explorer: true }));
require('./modules/user/users.route')(app);
require('./modules/match/match.route')(app);
app.listen(port, () => {
 console.log("Server listening on port " + port);
});