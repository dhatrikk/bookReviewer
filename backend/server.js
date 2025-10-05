require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const cors = require("cors");
const bookRouter = require("./router/book");
const userRouter = require("./router/users");

// allow access of the api
app.use(
  cors({
    origin: "https://book-reviewer-jet.vercel.app", 
  })
);


// to support incoming form data in json
app.use(express.json());

// connect to db
// connect to db
const connectDB = require("./configs/db");
connectDB();


app.use("/books", bookRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "This is home route",
  });
});

// managing errors
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).json({
    message: message,
  });
});

// setting up http server at port
app.listen(port, () => {
  console.log(`There server is running at ${port}`);
});
