const DepartmentRepo = require('./department.repository');

class DepartmentRepository {
   
    static async validateDepartmentExists(departmentId){
        const department = DepartmentRepo.getDepartment({
            _id: departmentId,
            removed: false
        });

        if(!department){
            throw new CustomError({message: `department doesn't exist`}, 400);
        }
    }

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


    static async getAllDepartments(departmentId){
        const departments = await DepartmentRepo.getDepartments({
            removed: false
        });

        return departments;
    }

    
}

module.exports = DepartmentRepository;