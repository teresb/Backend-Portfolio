const {portfoliomodel} = require("../model/portfolio_model");
const {testimonialsmodel} = require("../model/testimonial_model");


exports.portfolioapproute = async(req, res) => {
    try{
        items = await portfoliomodel.find({});
        return res.status(200).send({
            message: "Success",
            data: items
        })
    }catch(error){
        res.status(500).json({error: "Internal server error"});
    }
}

exports.testimonialsapproute = async(req, res) => {
    try{
        items = await testimonialsmodel.find({});
        return res.status(200).send({
            message: "Success",
            data: items
        })
    }catch(error){
        res.status(500).json({error: "Internal server error"});
    }
}