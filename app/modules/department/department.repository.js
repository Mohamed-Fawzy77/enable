const Department = require('./department.model');

class DepartmentService {
    static async getDepartment(schema){
        const department = await Department.findOne(schema);

        return department;
    }
    static async createNewDepartment(departmentSchema){
        const department = new Department(departmentSchema);
        await department.save()
        return department;
    }
    static async getDepartment(schema){
        const department = await Department.findOne(schema);

        return department;
    }

    static async deleteDepartment(schema){
        const department = await Department.updateOne(schema, {$set: {removed: true}})

        return department;
    }
}

module.exports = DepartmentService;