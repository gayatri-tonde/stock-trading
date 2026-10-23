require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.port || 3002;
const uri = process.env.MONGO_URL;

const app = express();

main()
  .then((res) => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(uri);
}

app.listen(port, () => {
  console.log("server listening on port 3002");
});
