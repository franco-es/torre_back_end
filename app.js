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
app.use(cors());
// MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
