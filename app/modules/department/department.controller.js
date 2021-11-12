const DepartmentValidator = require('./department.schemas');
const DepartmentService = require('./department.service');
const RoleService = require('../role/role.service');
const formualateErrorResponse = require('../../helpers/formulate_error_response');
const CustomError = require('../../helpers/custom_error');
const jwt = require('jsonwebtoken');

class DepartmentController{
    static async createDepartment(req, res) {
        try {
            DepartmentValidator.validateAddDepartmentSchema(req.body);
            const {name} = req.body;

            const department = await DepartmentService.createNewDepartment({name});

            res.send({
                status: true,
                statusCode: 200,
                msg: 'department created successfuly'
            })

        } catch (error) {
            const response = formualateErrorResponse(error);

            res.status(response.statusCode).send(response);
        }
    }
    static async deleteDepartment(req, res){
        try {
            DepartmentValidator.validateDeleteAndViewDepartmentSchema(req.body);
            const { departmentId } = req.body;
            
            const department = await DepartmentService.deleteDepartment(departmentId);

            res.send({
                status: true,
                statusCode: 200,
                msg: 'department deleted successfully'
            })

        } catch (error) {
            const response = formualateErrorResponse(error);

            res.status(response.statusCode).send(response);
        }
    }

    static async viewDepartment(req, res){
        try {
            DepartmentValidator.validateDeleteAndViewDepartmentSchema(req.body);
            const { departmentId } = req.body;
            
            const department = await DepartmentService.getDepartment( departmentId );
            if(!department)   throw new CustomError({message: `department doesn't exist`}, 400);


            res.send({
                status: true,
                statusCode: 200,
                data: department
            })

        } catch (error) {
            const response = formualateErrorResponse(error);

            res.status(response.statusCode).send(response);
        }
    }
}
module.exports=DepartmentController