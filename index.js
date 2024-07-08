import express from "express";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/books", bookRoute);

mongoose
  .connect("mongodb+srv://akshaycs0480:5cdsE66cOEBkQZbq@bookdb.1ka6a2u.mongodb.net/")
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });
