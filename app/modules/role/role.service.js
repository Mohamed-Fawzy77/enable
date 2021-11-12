const RoleRepo = require('./role.repository');
const CustomError = require('../../helpers/custom_error');

class RoleService {
    static async validateRoleExists(roleId){
        const role = RoleRepo.getRole({
            _id: roleId,
            removed: false
        });

        if(!role){
            throw new CustomError({message: `role doesn't exist`}, 400);
        }
    }
}

module.exports = RoleService;