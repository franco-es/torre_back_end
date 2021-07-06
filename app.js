// SISTEM IMPORTS
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// PERSONAL IMPORTS
const userRoute = require("./routes/userRoute");
const jobRoute = require("./routes/jobsRoute");
const peopleRoute = require("./routes/peopleRoute");

const app = express();

// ENDPOINTS
app.use("/api", userRoute);
app.use("/api", jobRoute);
app.use("/api", peopleRoute);

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
// MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
