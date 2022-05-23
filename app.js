const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const poolController = require("./controllers/pollController");

const app = express();

const middleware = [
  morgan("dev"),
  express.json(),
  express.urlencoded({ extended: true }),
];

app.set("view engine", "ejs");

app.use(middleware);

app.get("/poll/create", poolController.pollGetController);
app.post("/poll/create", poolController.pollPostController);

(async function () {
  try {
    await mongoose.connect(
      "mongodb+srv://developer-sujon:developer-sujon@cluster0.mtzsh.mongodb.net/?retryWrites=true&w=majority",
    );

    app.listen(8080, () => {
      console.log("Server is running on port 8080");
    });
  } catch (error) {
    console.log(error);
  }
})();
