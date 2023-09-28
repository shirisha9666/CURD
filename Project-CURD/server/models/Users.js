const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
}, { timestamps: true })

const userModel = mongoose.model("User", userSchema)
module.exports = userModel

/*const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const userModel = mongoose.model("User", userSchema); // Change the collection name to "User"
module.exports = userModel;*/
