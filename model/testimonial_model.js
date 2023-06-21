const mongoose = require("mongoose");
const testimonialsmodel = new mongoose.model("testimonials", mongoose.Schema({
    _id: String,
    avatar: String,
    name: String,
    review: String,
    demo: String
}))

module.exports = {
    testimonialsmodel
}