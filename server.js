const express = require("express"); // importing express
const cors = require("cors"); // importing cors
const logger = require('morgan'); // importing morgan

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// use morgan for better logging
app.use(logger('dev'))

// app.use('/api', routes);
require("./routes/user")(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to yondu exam application."});
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app
