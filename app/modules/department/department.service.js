const DepartmentRepo = require('./department.repository');
const CustomError = require('../../helpers/custom_error');

class DepartmentService {
    static async validateDepartmentExists(departmentId){
        const department = DepartmentRepo.getDepartment({
            _id: departmentId,
            removed: false
        });

        if(!department){
            throw new CustomError({message: `department doesn't exist`}, 400);
        }
    }
}

module.exports = DepartmentService;