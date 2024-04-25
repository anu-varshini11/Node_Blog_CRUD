const env = require("dotenv");
env.config();
const express = require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const ConnectDB = require("./src/db/databaseConnection");
const authRouter = require("./src/router/auth");
const blogRouter = require("./src/router/blog")
const userRouter = require("./src/router/user");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

ConnectDB();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/user", userRouter);
app.use(express.static(__dirname+"/public"))

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listen on PORT ${process.env.PORT}`);
});
