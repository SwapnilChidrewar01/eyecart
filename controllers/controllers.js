
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Model = require("../model/User");
console.log(Model.users);
const UserModel = Model.users;



const signup = async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, PhoneNo, gender, graduation } = req.body;
        const user = await UserModel.findOne({ email: email })
        if (user) {
            return res.status(409).json({ message: "Email already exists" })
        }
        const userModel = new UserModel({ name, email, PhoneNo, gender, graduation });
        userModel.PhoneNo = await bcrypt.hash(PhoneNo, 10)
        await userModel.save();
        res.status(201)
            .json({
                message: "signup successfully",
                success: true
            })
    } catch (err) {
        console.log(err)
        res.status(500)
            .json({
                message: "internal server error",
                success: false,

            })

    }
}
const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        console.log(user);
        // const { email, password } = req.body;
        // console.log(password)
        // const user = UserModel.findOne({ email: req.body.email })
        // console.log(user)
        const errmsg = "Auth failed or PhoneNo is wrong ";
        if (!user) {
            return res.status(403)
                .json({ message: errmsg, success: false });
        }
        const ispassequal = await bcrypt.compare(req.body.PhoneNo, user.PhoneNo);
        if (!ispassequal) {
            return res.status(403)
                .json({ message: "PhoneNo is not correct", success: false })
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "24hr" }
        )
        res.status(200)
            .json({
                message: "login successfully",
                success: true,
                jwtToken,
                email: user.email,
                name: user.name
            })
    } catch (err) {
        console.log("ha error ahe", err)

    }
}
module.exports = {
    signup, login
}