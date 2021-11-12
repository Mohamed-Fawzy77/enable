const PermissionRepo = require('./permission.repository');
const CustomError = require('../../helpers/custom_error');

class PermissionService {

    static async getPermission(permissionId){
        const permission = PermissionRepo.getPermission({
            _id: permissionId,
            removed: false
        });
        
        return permission;
    }

    static async getPermissions(permissionsId){
        const permissions = PermissionRepo.getPermissions({
            _id: {$in: permissionsId},
            removed: false
        });
        
        return permissions;
    }
    
}

module.exports = PermissionService;