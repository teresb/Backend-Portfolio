const controller = require("../controller/app.controller");
const router = require("express").Router();

router.get("/portfolio", controller.portfolioapproute);
router.get("/testimonials", controller.testimonialsapproute);

module.exports = router

