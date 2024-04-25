const User = require("../models/userModel")

const getUsers = async(req,res)=>{
    try {
        const users = await User.find({},{email:0,password:0});
        if(!users) throw new Error("There is no user in the database");
        res.status(200).json(users)
    } catch (err) {
        console.error(err);
        res.status(500).json("Internal Server Error");
    }
}

module.exports = {getUsers};