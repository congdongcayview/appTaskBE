const mongoose = require('mongoose')
const ClassModel = new mongoose.Schema({
    code : {
        type : String,
        require : true,
        unique : true
    },
    name : {
        type : String,
        require : true
    },
    mentor : {
        type : mongoose.Types.ObjectId,
        ref : 'user'
    }
,
student : {
    type : [{
        type : mongoose.Types.ObjectId,
        ref : 'users'
    }],
}
,
    note : {
        type : String
    }
},{timestamps : true})

module.exports = mongoose.model('Class',ClassModel)