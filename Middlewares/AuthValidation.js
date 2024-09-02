const Joi = require('@hapi/joi');


const signupvalidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        email: Joi.string().email().required(),
        PhoneNo: Joi.string().pattern(/^\d+$/).min(10).required(),
        gender: Joi.string().required(),
        graduation: Joi.string().required()

        // .message({
        //     'string.pattern.base': 'Phone number must contain only digits.',
        //     'string.empty': 'Phone number is required.',
        //     'string.min': 'Phone number must be at least 10 digits long.',
        //     'string.max': 'Phone number must not exceed 15 digits.'
        // })

    });


    const { error } = schema.validate(req.body);

    if (error) {
        console.error("Validation failed:", error.details[0].message);
        return res.status(400)
            .json({ message: "Bad request", error })
    } else {
        console.log(" signup Validation successful:");
        next();
    }

}

const loginupvalidation = (req, res, next) => {
    const schema = Joi.object({

        email: Joi.string().email().required(),
        PhoneNo: Joi.string().pattern(/^\d+$/).min(10).required(),

    });


    const { error } = schema.validate(req.body);

    if (error) {
        console.error("Validation failed: ", error.details[0].message);
        return res.status(400)
            .json({ message: "Bad request", error })
    } else {
        console.log(" login Validation successful:");
        next();
    }

}
module.exports = {
    signupvalidation,
    loginupvalidation
}

