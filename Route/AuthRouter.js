const { signup, login } = require("../controllers/controllers");
// const { signupvalidation, loginupvalidation } = require('./Middlewares/AuthValidation');
const { signupvalidation, loginupvalidation } = require("../Middlewares/AuthValidation")
const router = require('express').Router();



router.post("/login", loginupvalidation, login)
router.post("/signup", signupvalidation, signup);


module.exports = router;