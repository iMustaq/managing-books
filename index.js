const express = require("express");
const mongoose = require("mongoose");

const app = express();
const bookRoute = require('./routes/books.routes')

const port = 4242

mongoose
  .connect("mongodb://localhost:27017/manage_books")
  .then(() => {
    console.log("MongoDb connected.....");
  })
  .catch((err) => {
    console.log("Having trouble to connect MongoDB!!\n", err);
  });


app.listen(port,()=>{
    console.log("Server is running on port ", port)
})

app.use('/api-v1', bookRoute)