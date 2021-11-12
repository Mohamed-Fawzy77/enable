const Permission = require('./permission.model');

class PermissionService {
    static async getPermission(schema){
        const permission = await Permission.findOne(schema);

        return permission;
    }

    static async getPermissions(schema){
        const permissions = await Permission.find(schema);

        return permissions;
    }
}

module.exports = PermissionService;