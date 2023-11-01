const express = require("express");
const mongoose = require("mongoose");

const app = express();
const bookRoute = require("./routes/books.routes");
const bodyParser = require("body-parser");

const port = 4242;
const DB_NAME = "manage_books";
// connection to DB.
mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`)
  .then(() => {
    console.log(`MongoDb connected..... DB-NAME - '${DB_NAME}'`);
  })
  .catch((err) => {
    console.log("Having trouble to connect MongoDB!!\n", err);
  });

app.use(bodyParser.urlencoded({ extended: true })); // To accept the request data in URL string.
app.use(bodyParser.json()); // To accept the request data in json.

app.listen(port, () => {
  console.log("\n\nServer is running on port ", port);
});

app.use("/api-v1", bookRoute);
