const mongoose = require("mongoose");

const student =  mongoose.Schema({
    name: {
        type: String
    },
    class: {
        type: String
    },
    roll: {
        type: String
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("student",student);