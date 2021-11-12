const Department = require('./department.model');

class DepartmentService {
    static async getDepartment(schema){
        const department = await Department.findOne(schema);

        return department;
    }
}

module.exports = DepartmentService;