const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(process.env.CONNECTION_STRING);
    console.log(
      "Database connected:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    res.status(200).json("Internal server Error");
  }
};

module.exports = ConnectDB;
