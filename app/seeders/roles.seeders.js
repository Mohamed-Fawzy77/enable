require('dotenv').config();
require('../../config/db');
const Role = require('../modules/role/role.model');

const Permission = require('../modules/permission/permission.model');

const roles = [
    {
        name: 'super_admin',
        permissions: [
            'create_user',
            'delete_user',
            'view_user',
            'list_all_users',
            'search_users',
            'create_department',
            'delete_department',
            'view_department',
            'update_department',
            'assign_user',
            'list_all_departments'
        ]
    },
    {
        name: 'department_manager',
        permissions: [
            'list_all_users',
            'search_users',
            'view_department',
            'update_department'
        ]
    },
    {
        name: 'employee',
        permissions: []
    },
]

async function addRoles() {
    const allPermissions = []
    roles.map(role => allPermissions.push(...role.permissions));

    const permissionsSet = new Set(allPermissions);

    const permissions = await Permission.find({name: {$in: [...permissionsSet]}})
    const permissionsMap = {};

    for(const permission of permissions){
        permissionsMap[permission.name] = permission;
    }

    const rolesOperations = []

    for(const role of roles){
        const rolePermissionsIds = [];

        for(const permissionName of role.permissions){
            const permissionId = permissionsMap[permissionName]._id.toString();
            rolePermissionsIds.push(permissionId);
        }

        rolesOperations.push({
            name: role.name,
            permissions: rolePermissionsIds
        });
    }

    if(rolesOperations.length > 0){
        const result = await Role.insertMany(rolesOperations);
    }
}
addRoles();


