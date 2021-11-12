const Joi = require('@hapi/joi')
const validateJoiSchema = require('../../helpers/validate_joi_schema');

const mongoId = Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/u);

const addUserSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string(),
    password: Joi.string().min(8).required(),
    role: mongoId.required(),
    department: mongoId.required()
})

const loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
})



const deleteAndViewUser = Joi.object().keys({
    userId: mongoId.required()
})

const searchSchema = Joi.object().keys({
    search: Joi.string().required()
})

class UserValidator {
    static validateAddUserSchema(schema) {
        const validatationResult = addUserSchema.validate(schema);
        validateJoiSchema(validatationResult);
    }

    static validateDeleteAndViewUserSchema(schema) {
        const validatationResult = deleteAndViewUser.validate(schema);
        validateJoiSchema(validatationResult);
    }

    static validateLoginSchema(schema) {
        const validatationResult = loginSchema.validate(schema);
        validateJoiSchema(validatationResult);
    }

    static validateSearchUsers(schema) {
        const validatationResult = searchSchema.validate(schema);
        validateJoiSchema(validatationResult);
    }

    
    
}

module.exports = UserValidator;