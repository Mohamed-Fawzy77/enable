const DepartmentRepo = require('./department.repository');

class DepartmentRepository {
   
    static async createNewDepartment(departmentSchema){
        const department = await DepartmentRepo.createNewDepartment(departmentSchema);
        
        return department;
    }
    static async deleteDepartment(id){
        const department = await DepartmentRepo.deleteDepartment({
            _id:id
        });
    }

    static async getDepartment(departmentId){
        const department = await DepartmentRepo.getDepartment({
            _id: departmentId,
            removed: false
        });

        return department;
    }
}

module.exports = DepartmentRepository;