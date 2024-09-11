const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT, MONGODB_URL } = require("./config");
const router = require("./routers/router");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: "Content-Type",
  })
);
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("MONGOOOSE CONNECT");
  })
  .catch(() => {
    console.log("ERROR: Couldn't connect");
  });
