const express = require("express");
const { PORT } = require("./Config/Index");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
