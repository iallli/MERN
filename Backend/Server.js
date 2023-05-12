const express = require("express");
const { PORT } = require("./Config/Index");
const dbConnect = require("./Database/Index");
const router = require("./Routes/Index");
const cookieParser = require("cookie-parser");
const errorHandler = require("./Middlewares/ErrorHandler");
const cors = require("cors");

const app = express();

app.use(cookieParser());

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOptions));

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       return callback(null, true);
//     },
//     optionsSuccessStatus: 200,
//     credentials: true,
//   })
// );

app.use(express.json({ limit: "50mb" }));

app.use(router);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

dbConnect();

app.use("/storage", express.static("storage"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
