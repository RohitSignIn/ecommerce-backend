const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const DB = require("./config/db_config");
const apiRoutes = require("./router/api_routes");

const { PORT, DB_ALTER, DB_FORCE } = require("./config/server_config");

const app = express();
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log("listening on port", PORT);
  try {
    await DB.authenticate();
    console.log("Database connection established");

    await DB.sync({ alter: Boolean(DB_ALTER), force: Boolean(DB_FORCE) });
  } catch (error) {
    console.log("Database connection error", error);
  }
});
