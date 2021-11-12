const RoleService = require('../modules/role/role.service');

const PermissionService = require('../modules/permission/permission.service');

module.exports = function(requiredPermissionsNames){
    return async (req, res, next) => {
        const userRoleId = req.user.role;
                
        const role = await RoleService.getRole(userRoleId);

        const permissions = await PermissionService.getPermissions(role.permissions);

        const permissionsNames = {};

        for(const permission of permissions){
            permissionsNames[permission.name] = permission;
        }

        for(const permissionName of requiredPermissionsNames){
            if (!permissionsNames[permissionName]){
                return res.status(400).send({
                    status: false,
                    statusCode: 400,
                    message: `you don't have permission`
                })
            }
        }
        

        next();
    }
} 