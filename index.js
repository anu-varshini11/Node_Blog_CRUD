const env = require("dotenv");
env.config();
const express = require("express");
const cookieParser = require("cookie-parser");
const ConnectDB = require("./src/db/databaseConnection");
const authRouter = require("./src/router/auth");

const app = express();
app.use(express.json());
app.use(cookieParser());

ConnectDB();

app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.status(200).json({ Message: "Hello World" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listen on PORT ${process.env.PORT}`);
});
