const Role = require('./role.model');

class RoleService {
    static async getRole(schema){
        const role = await Role.findOne(schema);

        return role;
    }
}

module.exports = RoleService;