var mongoose = require('mongoose');

//Class Schema
var ClassSchema = mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type:String
    },
    instructor:{
        type:String
    },
    lessons:[{
        lessons_number:{type: Number},
        lesson_title:{type: String},
        lesson_body:{type: String}
    }]
});

var Class = module.exports = mongoose.model('Class',ClassSchema);

//Fetch all classes
module.exports.getClasses = (callback,limit) => {
    Class.find(callback).limit(limit);
}

//Fetch Single Class
module.exports.getClassById = (id,callback) => {
    Class.findById(id,callback);
}