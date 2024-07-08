import express from "express";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";
// import book from './models/book.model.js';
// import user from './models/user.model.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/books", bookRoute);



// app.get("/", (req, res) => {
//   res.send("Hello from Node API Server Updated");
// });



mongoose
  .connect(
    "mongodb+srv://akshaycs0480:5cdsE66cOEBkQZbq@bookdb.1ka6a2u.mongodb.net/"

)
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });