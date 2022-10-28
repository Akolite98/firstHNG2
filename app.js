const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

const data = require("./myData");

app.use(
  cors({
    origin: "*",
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res, next) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
