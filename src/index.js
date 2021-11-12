const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const env = require("dotenv");
const morgan = require("morgan");
const { initializeDatabase } = require("./Database");

const app = express();
env.config();
const { APP_PORT } = process.env;

let corsOptions = {
  origin: "https://oraculo-frontend.herokuapp.com",
};

app.use(cors(corsOptions));
app.use(morgan("short"));
app.use(express.json());
app.use(routes);
app.disable("x-powered-by");
app.listen(APP_PORT);

initializeDatabase().then(() => {
  console.info("connected to database");
});

module.exports = app;
