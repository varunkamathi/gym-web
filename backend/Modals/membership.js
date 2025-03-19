const mongoose = require("mongoose");


const MembershipSChema = mongoose.Schema({
    months:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    gym:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"gym",
        required:true
    }
},{timestamps:true})

const modalMembership = mongoose.model("membership",MembershipSChema);

module.exports = modalMembership;