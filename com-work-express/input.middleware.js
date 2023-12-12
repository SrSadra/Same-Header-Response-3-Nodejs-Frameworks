const { body ,  validationResult } = require("express-validator");

const validationInput = (req ,res , next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){ // is empty is important 
        return res.status(400).send({
            "message":
                errors.array().map((el) => el.msg)
            ,
            "error": "Bad Request",
            "statusCode": 400
        });
    }
    next();
}

const inputSchema = [
    body("x").isNumeric().withMessage("x must be a number conforming to the specified constraints").not().isEmpty().withMessage("x should not be empty"),
    body("y").isNumeric().withMessage("y must be a number conforming to the specified constraints").not().isEmpty().withMessage("y should not be empty")
]

module.exports = {validationInput , inputSchema};