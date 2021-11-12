const UserValidator = require('./user.schemas');
const UserService = require('./user.service');
const DepartmentService = require('../department/department.service');
const RoleService = require('../role/role.service');
const formualateErrorResponse = require('../../helpers/formulate_error_response');
const CustomError = require('../../helpers/custom_error');
const jwt = require('jsonwebtoken');

class UserController {
    static async login(req, res) {
        try {
            UserValidator.validateLoginSchema(req.body);

            const {email, password} = req.body;

            const user = await UserService.getUserByEmail(email);

            if (!user) {
                throw new CustomError({message: 'wrong email or password'}, 400);
            }

            const isMatch = await user.comparePassword(password);

            const token_origin = { _id: user._id, email: user.email };

            if (!isMatch) {
                throw new CustomError({message: 'wrong email or password'}, 400);
            }

            const token = jwt.sign({ user: token_origin }, process.env.SECRET, {
                expiresIn: '2d'
            });

            res.send({
                status: true,
                statusCode: 200,
                token
            })


        } catch (error) {
            const response = formualateErrorResponse(error);

            res.status(response.statusCode).send(response);
        }
    }

    static async createUser(req, res) {
        try {
            UserValidator.validateAddUserSchema(req.body);
            const { email, firstName, lastName, department, role, password } = req.body;

            await UserService.validateIsUniqueEmail(email);
            await DepartmentService.validateDepartmentExists(department);
            await RoleService.validateRoleExists(role);


            const user = await UserService.createNewUser({ email, firstName, lastName, department, role, password });

            res.send({
                status: true,
                statusCode: 200,
                data: user
            })

        } catch (error) {
            const repsonse = formualateErrorResponse(error);

            res.status(response.statusCode).send(response);
        }
    }
}

module.exports = UserController;