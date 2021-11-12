const User = require('./user.model');

class UserRepository {

    static async createNewUser(userSchema){
        const user = new User(userSchema);
        await user.save()
        return user;
    }

    static async getUsers(schema){
        const users = await User.find(schema).select('-password');

        return users;
    }

    static async getUser(schema){
        const user = await User.findOne(schema);

        return user;
    }

    static async deleteUser(schema){
        const user = await User.updateOne(schema, {$set: {removed: true}})

        return user;
    }

    static async getUserWithRoleAndDepartmentPopulated(schema){
        const user = await User.findOne(schema)
            .select('-password')
            .populate({path: 'department'})
            .populate({path: 'role'});

        return user;
    }

    
}

module.exports = UserRepository;