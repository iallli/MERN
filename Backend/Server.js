const express = require("express");
const { PORT } = require("./Config/Index");
const dbConnect = require("./Database/Index");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

dbConnect();

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
