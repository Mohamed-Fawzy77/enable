const Joi = require('@hapi/joi')
const validateJoiSchema = require('../../helpers/validate_joi_schema');

const mongoId = Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/u);

const addDepartmentSchema = Joi.object().keys({
    name: Joi.string().min(3).required()
})


const deleteAndViewDepartmentSchema = Joi.object().keys({
    departmentId: mongoId.required()
})



class DepartmentValidator {
    static validateAddDepartmentSchema(schema) {
        const validatationResult = addDepartmentSchema.validate(schema);
        validateJoiSchema(validatationResult);
    }

    static validateDeleteAndViewDepartmentSchema(schema) {
        const validatationResult = deleteAndViewDepartmentSchema.validate(schema);
        validateJoiSchema(validatationResult);
    }

 

    
}

module.exports = DepartmentValidator;