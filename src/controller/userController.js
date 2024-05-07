const User = require("../models/userModel")

const getUsers = async(req,res)=>{
    try {
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Forbidden" });
          }

        const users = await User.find({},{email:0,password:0});
        if(!users) throw new Error("There is no user in the database");
        res.status(200).json(users)
    } catch (err) {
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
}

module.exports = {getUsers};